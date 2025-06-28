import { useParams, useNavigate } from "react-router";
import { useContext } from "react";
import productsData from "../data/products";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-4">
        <h2>Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="w-full max-w-md mx-auto mb-4" />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
