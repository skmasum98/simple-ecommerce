import { useParams, useNavigate } from "react-router";
import { useContext, useState } from "react";
import productsData from "../data/Products";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = productsData.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleDecrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

  return (
    <div className="p-4 min-h-[70vh] flex flex-col md:flex-row gap-10 max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-100">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-gray-100 rounded-lg p-6 w-full flex items-center justify-center shadow-inner">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-xs md:max-w-sm rounded-lg object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        
      </div>
      <div className="flex-1 flex flex-col justify-center px-2">
        <h1 className="text-4xl font-extrabold mb-3 text-gray-900">{product.title}</h1>
        <div className="flex gap-2 mb-1.5">
          
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-semibold">Free Shipping</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-semibold">In Stock</span>
        </div>
        <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
        <div className="flex items-center gap-6 mb-8">
          <span className="text-3xl font-bold text-blue-600">${product.price}</span>
          <span className="text-sm text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">20% OFF</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center border rounded px-2 py-1 bg-gray-50">
            <button
              onClick={handleDecrease}
              className="px-2 text-lg font-bold text-blue-600 hover:text-blue-800"
              aria-label="Decrease quantity"
            >-</button>
            <span className="px-3 select-none">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="px-2 text-lg font-bold text-blue-600 hover:text-blue-800"
              aria-label="Increase quantity"
            >+</button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-bold shadow"
          >
            Add to Cart
          </button>
          {/* <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition font-bold shadow"
          >
            Back
          </button> */}
        </div>
        
        
        <div className="mt-8 border-t pt-4">
          <h3 className="font-semibold mb-2 text-gray-800">Why shop with us?</h3>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            <li>Fast &amp; free shipping on all orders</li>
            <li>30-day hassle-free returns</li>
            <li>Secure checkout &amp; payment</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}