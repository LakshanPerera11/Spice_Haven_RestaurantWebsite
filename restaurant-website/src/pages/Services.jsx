import { Link } from "react-router-dom";
import { Truck, ShoppingBag, Clock, CreditCard, MapPin, Phone, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Home Delivery",
    desc: "Get your favorite dishes delivered hot and fresh to your doorstep within 30-45 minutes.",
    features: ["Real-time tracking", "Contactless delivery", "Temperature-controlled packaging"],
  },
  {
    icon: ShoppingBag,
    title: "Takeaway / Pickup",
    desc: "Order online and pick up at the restaurant. Skip the wait and enjoy your meal on the go.",
    features: ["Ready in 15-20 min", "Dedicated pickup counter", "No delivery fees"],
  },
  {
    icon: CreditCard,
    title: "Easy Online Ordering",
    desc: "Browse our full menu, customize your order, and pay securely — all from your device.",
    features: ["Secure payments", "Order history", "Saved favorites"],
  },
];

const steps = [
  { num: "01", title: "Browse Menu", desc: "Explore our dishes and add to cart" },
  { num: "02", title: "Checkout", desc: "Enter delivery details and confirm" },
  { num: "03", title: "We Prepare", desc: "Our chefs craft your order fresh" },
  { num: "04", title: "Enjoy", desc: "Receive and savor your meal" },
];

export default function Services() {
  return (
    <div>
      <div className="bg-secondary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Our Services</h1>
          <p className="text-stone-400 max-w-xl mx-auto">
            Convenient ways to enjoy Spice Haven, wherever you are
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-stone-500 text-sm mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-stone-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-12">How Online Ordering Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-4xl font-display font-bold text-primary/20 mb-3">{s.num}</div>
                <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-stone-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Start Ordering
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary text-white rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Delivery Information
              </h2>
              <ul className="space-y-4 text-stone-300">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                  <span>Delivery hours: 11:00 AM – 9:30 PM daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                  <span>We deliver within a 5-mile radius of the restaurant</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                  <span>Free delivery on orders over $40. Standard fee: $4.99</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-light mt-0.5 shrink-0" />
                  <span>Questions? Call us at +1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <p className="text-stone-400 mb-4">Minimum order: $15</p>
              <p className="text-5xl font-display font-bold text-primary-light mb-2">30 min</p>
              <p className="text-stone-400">Average delivery time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
