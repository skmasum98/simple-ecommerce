import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
import Toast from "../components/Toast";

export default function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    postal: "",
  });

  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryCharge = subtotal > 500 ? 0 : 20;
  const grandTotal = subtotal + deliveryCharge;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (
    !form.name ||
    !form.email ||
    !form.mobile ||
    !form.address ||
    !form.city ||
    !form.postal
  ) {
    setError("Please fill out all fields.");
    return;
  }

  setSuccess(`Hello ${form.name}, your order has been placed successfully. Please wait for payment verification, we will contact you soon.`);
  setTimeout(() => {
    setCartItems([]); // clear cart
    navigate("/");
  }, 3000);
};


  return (
    <div className="max-w-5xl mx-auto py-10 px-4 min-h-[70vh]">
      <h1 className="text-3xl font-extrabold mb-6 text-green-700">Checkout</h1>
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
        <div className="space-y-4">
          {/* coupon code at the top */}
          <div className="bg-white p-4 rounded shadow mb-4 flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border p-2 rounded w-full sm:w-auto flex-1"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Apply Coupon
            </button>
          </div>

          {/* billing + summary side by side */}
          <div className="bg-white p-6 rounded shadow flex flex-col md:flex-row gap-8 border border-gray-100">
            {/* billing form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 space-y-4 border-r pr-4"
            >
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Billing Details
              </h2>
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
              {success && (
                  <Toast message={success} onClose={() => setSuccess("")} />
                )}
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
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile || ""}
                onChange={(e) =>
                  setForm({ ...form, mobile: e.target.value })
                }
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
            </form>

            {/* summary */}
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Order Summary
              </h2>
              <ul className="space-y-2">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between border-b pb-1 text-sm"
                  >
                    <span>
                      {item.title} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between text-gray-700 mt-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery</span>
                <span>
                  {deliveryCharge === 0 ? (
                    <span className="text-green-600 font-semibold">Free</span>
                  ) : (
                    `$${deliveryCharge.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-green-700">${grandTotal.toFixed(2)}</span>
              </div>

              {/* payment button */}
              <button
                className="bg-yellow-500 text-black w-full py-2 rounded hover:bg-yellow-600 transition font-semibold mt-4"
                onClick={() => alert("Payment gateway coming soon...")}
              >
                Pay Now
              </button>

              {/* place order button */}
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition font-bold"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
