import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

export default function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.city ||
      !form.postal
    ) {
      setError("Please fill out all fields.");
      return;
    }

    // simulate success
    setSuccess("Order placed successfully!");
    setCartItems([]); // clear cart
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Checkout</h1>
      {cartItems.length === 0 ? (
        <div className="bg-white p-8 rounded shadow text-center">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow flex flex-col md:flex-row gap-8">
          {/* billing form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 space-y-4 border-r pr-4"
          >
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="postal"
              placeholder="Postal Code"
              value={form.postal}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </form>

          {/* summary */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-2">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b pb-1"
                >
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="text-right font-bold text-lg">
              Total: ${total.toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
