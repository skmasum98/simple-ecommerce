import { useState, useContext } from "react";
import Products from "../data/Products";
import ProductList from "../components/ProductList";
// import SearchBar from "../components/SearchBar";
import ProductFilter from "../components/ProductFilter";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  // const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const filteredProducts = Products
    // .filter((p) =>
    //   p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   p.description.toLowerCase().includes(searchTerm.toLowerCase())
    // )
    .sort((a, b) => {
      if (filter === "low-high") return a.price - b.price;
      if (filter === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-4 bg-gray-200">
      {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <ProductFilter filter={filter} setFilter={setFilter} />
      <ProductList products={filteredProducts} onAddToCart={addToCart} />
    </div>
  );
}