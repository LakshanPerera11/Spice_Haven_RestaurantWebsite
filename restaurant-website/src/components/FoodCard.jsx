import { Link } from "react-router-dom";
import { Star, Clock, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function FoodCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
      <Link to={`/menu/${item.id}`} className="block relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isVegetarian && (
            <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              Veg
            </span>
          )}
          {item.isSpicy && (
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              Spicy
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link to={`/menu/${item.id}`}>
            <h3 className="font-semibold text-stone-900 group-hover:text-primary transition-colors line-clamp-1">
              {item.name}
            </h3>
          </Link>
          <span className="font-bold text-primary whitespace-nowrap">${item.price.toFixed(2)}</span>
        </div>

        <p className="text-sm text-stone-500 line-clamp-2 mb-3">{item.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {item.rating}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {item.prepTime}
            </span>
          </div>

          <button
            onClick={() => addToCart(item)}
            className="flex items-center gap-1 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
