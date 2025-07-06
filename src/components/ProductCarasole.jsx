import { useRef } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export default function ProductCarousel() {
  const { products, loading } = useProducts();
  const carouselRef = useRef();

  if (loading) return <div className="text-center py-8">Loading products...</div>;
  if (!products.length) return <div className="text-center py-8">No featured products found.</div>;

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative max-w-6xl mx-auto py-10 px-4">
  <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">
    Featured Products
  </h2>
  <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
    {/* scroll buttons - show on medium+ devices only */}
    <button
      onClick={scrollLeft}
      className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-3 z-10 hover:bg-green-200 transition"
      aria-label="Scroll Left"
    >
      ◀
    </button>
    <button
      onClick={scrollRight}
      className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-3 z-10 hover:bg-green-200 transition"
      aria-label="Scroll Right"
    >
      ▶
    </button>

    {/* product cards */}
    <div
      ref={carouselRef}
      className="flex gap-6 overflow-x-auto scroll-smooth px-4 no-scrollbar"
    >
      {[...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6)
        .map((product) => (
          <div
            key={product.id}
            className="min-w-[240px] bg-gray-50 rounded-xl shadow hover:shadow-lg p-4 flex-shrink-0 transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-44 w-full object-cover rounded mb-3"
            />
            <h3 className="font-semibold text-gray-800 text-base truncate">{product.title}</h3>
            <p className="text-green-700 font-bold text-base mt-1">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="bg-green-600 text-white px-4 py-2 rounded block text-center mt-3 hover:bg-green-700 text-sm transition"
            >
              View
            </Link>
          </div>
        ))}
    </div>
  </div>
</div>

  );
}
