import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Truck, Utensils } from "lucide-react";
import { menuItems } from "../data/menu";
import FoodCard from "../components/FoodCard";

const featured = menuItems.filter((i) => [4, 5, 9, 15].includes(i.id));

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-primary-light font-medium tracking-widest uppercase text-sm mb-3">
            Fine Dining Experience
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-2xl mb-6">
            Taste the Extraordinary
          </h1>
          <p className="text-lg text-stone-300 max-w-lg mb-8">
            Discover a world of flavors crafted by award-winning chefs. From classic favorites to innovative creations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
            >
              Explore Menu <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white px-7 py-3.5 rounded-full font-semibold transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Utensils, title: "Gourmet Cuisine", desc: "Crafted by world-class chefs" },
              { icon: Star, title: "5-Star Rated", desc: "Loved by thousands of guests" },
              { icon: Clock, title: "Fresh Daily", desc: "Ingredients sourced every morning" },
              { icon: Truck, title: "Fast Delivery", desc: "Hot food at your door in 30 min" },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-stone-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2">
              Chef's Selection
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900">
              Featured Dishes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready for an Unforgettable Meal?
          </h2>
          <p className="text-stone-400 mb-8">
            Book a table or order online for delivery and takeaway.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark px-7 py-3.5 rounded-full font-semibold transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="border border-stone-600 hover:border-white px-7 py-3.5 rounded-full font-semibold transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
