import { useState, useContext } from "react";
import Products from "../data/Products";
import ProductList from "../components/ProductList";

import ProductFilter from "../components/ProductFilter";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const { searchTerm } = useContext(SearchContext)
  const [filter, setFilter] = useState("");

  const filteredProducts = Products
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
    <div className="p-4 bg-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <h2 className="text-3xl font-bold  text-green-800">Top Products</h2>
        <ProductFilter filter={filter} setFilter={setFilter} />
      </div>
      
      <ProductList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
}