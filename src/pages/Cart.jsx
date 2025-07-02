import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
import Toast from "../components/Toast";

export default function Cart() {
  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState()


  const handleRemove = (id) => {
  removeFromCart(id);
  setToastMessage("Item removed from cart successfully!");
};


  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 min-h-[70vh] max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
          <button
            onClick={() => navigate("/")}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-2">Image</th>
                <th className="py-3 px-2">Title</th>
                <th className="py-3 px-2">Price</th>
                <th className="py-3 px-2">Quantity</th>
                <th className="py-3 px-2">Subtotal</th>
                <th className="py-3 px-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-2 font-semibold">{item.title}</td>
                  <td className="py-2 px-2">${item.price}</td>
                  <td className="py-2 px-2">
                    <div className="flex items-center ">
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-base md:text-lg font-bold"
                        aria-label="Decrease quantity"
                      >-</button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-base md:text-lg font-bold"
                        aria-label="Increase quantity"
                      >+</button>
                    </div>
                  </td>
                  <td className="py-2 px-2 font-bold">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="py-2 px-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-xs sm:text-sm md:text-base"
                    >
                      Remove
                    </button>
                    {toastMessage && (
                      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-4 pb-4 text-sm md:text-base">
            <div className="font-bold text-gray-800">
              Total: <span className="text-blue-600">${total.toFixed(2)}</span>
            </div>
            <button
              className="mt-4 sm:mt-0 bg-green-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-green-700 transition font-bold shadow text-sm md:text-base"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

      )}
    </div>
  );
}