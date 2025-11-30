import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import type { Product } from "../types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true; // safe pattern to avoid setting state after unmount
    getProducts()
      .then((data) => {
        if (!mounted) return;
        // normalize/convert values if necessary:
        const normalized = (data as any[]).map(p => ({
          ...p,
          price: typeof p.price === "string" ? parseFloat(p.price) : p.price,
        }));
        setProducts(normalized);
      })
      .catch((err) => {
        console.error("getProducts failed:", err);
        if (!mounted) return;
        setError("Failed to load products.");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-8">{error}</div>;

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((p) => (
        <article key={p.id} className="border rounded p-2 shadow">
          <h3 className="font-semibold mt-2">{p.name}</h3>
          <p className="text-sm text-gray-600">${p.price.toLocaleString()}</p>
        </article>
      ))}
    </div>
  );
}
