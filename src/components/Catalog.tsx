import { useMemo, useState, useEffect } from "react";
import { products, categories, Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SlidersHorizontal } from "lucide-react";

type Sort = "featured" | "price-asc" | "price-desc";

export const Catalog = ({ onSelect }: { onSelect: (p: Product) => void }) => {
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("featured");
  const [maxPrice, setMaxPrice] = useState(3500);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash.includes("category=")) {
      const categoryFromUrl = hash.split("category=")[1];
      if (categoryFromUrl) {
        setCat(categoryFromUrl);
        
        
        const shopSection = document.getElementById("shop");
        if (shopSection) {
          shopSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  handleHashChange();
  window.addEventListener("hashchange", handleHashChange);
  return () => window.removeEventListener("hashchange", handleHashChange);
}, []);

  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat === "All" || p.category === cat) && p.price <= maxPrice);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, sort, maxPrice]);

  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[11px] tracking-luxe uppercase text-gold mb-4">The Edit</p>
        <h2 className="font-display text-4xl md:text-5xl font-light">Shop the Collection</h2>
      </div>

      {/* شريط الفئات[cite: 2] */}
      <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide pb-3 mb-6 border-b border-border">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`text-xs tracking-luxe uppercase whitespace-nowrap pb-3 -mb-px border-b-2 transition-luxe ${
              cat === c ? "border-gold text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => onSelect(p)} />
        ))}
      </div>
    </section>
  );
};