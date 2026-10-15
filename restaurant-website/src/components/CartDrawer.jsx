import { useState } from "react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    placeOrder,
  } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [checkout, setCheckout] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: "",
    address: "",
    notes: "",
  });
  const [success, setSuccess] = useState(null);

  const handleOrder = (e) => {
    e.preventDefault();
    if (!user) {
      setIsOpen(false);
      navigate("/login");
      return;
    }
    const order = placeOrder(form);
    setSuccess(order);
    setCheckout(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Your Cart
          </h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-stone-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {success ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold mb-2">Order Placed!</h3>
              <p className="text-stone-500 mb-1">Order #{success.id}</p>
              <p className="text-sm text-stone-400 mb-6">We'll prepare your food shortly.</p>
              <button
                onClick={() => {
                  setSuccess(null);
                  setIsOpen(false);
                }}
                className="bg-primary text-white px-6 py-2 rounded-full font-medium"
              >
                Continue Browsing
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 text-stone-400">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p>Your cart is empty</p>
            </div>
          ) : checkout ? (
            <form onSubmit={handleOrder} className="space-y-4">
              <h3 className="font-semibold text-lg">Delivery Details</h3>
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <input
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
              <textarea
                required
                placeholder="Delivery Address"
                rows={3}
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
              />
              <textarea
                placeholder="Special notes (optional)"
                rows={2}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCheckout(false)}
                  className="flex-1 border border-stone-300 py-2.5 rounded-lg font-medium text-sm"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg font-medium text-sm"
                >
                  Place Order
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-primary font-semibold text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-stone-50"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-stone-50"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto p-1 text-stone-400 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && !success && !checkout && (
          <div className="p-4 border-t space-y-3">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={() => {
                if (!user) {
                  setIsOpen(false);
                  navigate("/login");
                } else {
                  setCheckout(true);
                }
              }}
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-medium transition-colors"
            >
              {user ? "Proceed to Checkout" : "Login to Order"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
