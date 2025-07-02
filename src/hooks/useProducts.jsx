import { useState, useEffect } from "react";


export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("/products.json") //  leading slash
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error loading products:", err);
      setLoading(false);
    });
}, []);

  return { products, loading };
}
