import { Link } from "react-router";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col group">
  <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
    <img
      src={product.image}
      alt={product.title}
      className="object-cover w-full h-96 transform group-hover:scale-105 transition duration-300"
    />
  </div>
  <div className="flex-1 flex flex-col justify-between mt-4">
    <div>
      <h3 className="font-bold text-lg text-gray-900">{product.title}</h3>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
        {product.description}
      </p>
    </div>
    <div className="mt-3">
      <p className="font-bold text-green-700 text-xl">${product.price}</p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          View
        </Link>
      </div>
    </div>
  </div>
</div>

  );
}
