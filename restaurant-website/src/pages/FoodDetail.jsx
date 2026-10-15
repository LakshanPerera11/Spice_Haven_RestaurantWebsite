import { useParams, Link } from "react-router-dom";
import { Star, Clock, ArrowLeft, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { menuItems } from "../data/menu";
import { useCart } from "../context/CartContext";
import FoodCard from "../components/FoodCard";

export default function FoodDetail() {
  const { id } = useParams();
  const item = menuItems.find((i) => i.id === Number(id));
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!item) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-xl text-stone-500 mb-4">Dish not found</p>
        <Link to="/menu" className="text-primary font-medium">
          Back to Menu
        </Link>
      </div>
    );
  }

  const related = menuItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/menu"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-primary mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-square">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              {item.isVegetarian && (
                <span className="bg-green-500 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                  Vegetarian
                </span>
              )}
              {item.isSpicy && (
                <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                  Spicy
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-2">
              {item.category}
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              {item.name}
            </h1>

            <div className="flex items-center gap-4 mb-4 text-sm text-stone-500">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {item.rating} rating
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {item.prepTime}
              </span>
            </div>

            <p className="text-stone-600 leading-relaxed mb-6">{item.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="bg-stone-100 text-stone-600 text-sm px-3 py-1 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-3xl font-bold text-primary mb-4">${item.price.toFixed(2)}</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-stone-300 rounded-full">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-stone-50 rounded-l-full"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-medium">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-stone-50 rounded-r-full"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => addToCart(item, qty)}
                  className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Add to Cart — ${(item.price * qty).toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((r) => (
                <FoodCard key={r.id} item={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
