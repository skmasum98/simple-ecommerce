import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); // redirect to Home so it shows results
    // give the results time to render, then clear
  setTimeout(() => {
    setSearchTerm("");
  }, 5000); // adjust delay if needed
  };

  return (
    <>
    <form onSubmit={handleSubmit} action="">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="rounded-l p-2 w-3/4 bg-gray-50 text-black"
        
      />
      <button
          type="submit"
          className="bg-green-500 p-2 w-1/4 text-white px-4 rounded-r"
        >
          Search
        </button>
    </form>
    
    </>
  );
}
