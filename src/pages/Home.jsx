import { useState, useContext } from "react";
import ProductList from "../components/ProductList";
import ProductFilter from "../components/ProductFilter";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import Toast from "../components/Toast";
import useProducts from "../hooks/useProducts";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext);
  const [filter, setFilter] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  
  // load products from custom hook
  const { products, loading } = useProducts();

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.title} added to cart successfully!`);
  };

  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "low-high") return a.price - b.price;
      if (filter === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-5">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 border-b pb-6 border-gray-200">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 tracking-tight">
            Top Products
          </h2>
          <ProductFilter filter={filter} setFilter={setFilter} />
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="text-center py-8 text-gray-500">
              Loading products...
            </div>
          ) : (
            <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
          )}
        </div>

        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage("")} />
        )}
      </div>
    </div>
  );
}
