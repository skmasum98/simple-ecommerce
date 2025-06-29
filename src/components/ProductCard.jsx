import { Link } from "react-router";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded mb-2" />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-gray-600 text-sm">{product.description.slice(0, 50)}...</p>
      <p className="font-bold">${product.price}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300"
        >
          View
        </Link>
      </div>
    </div>
  );
}
