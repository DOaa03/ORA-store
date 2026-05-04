import collection1 from "@/assets/collection-1 product-1.jpeg";
import collection2 from "@/assets/collection-2-product-2.jpeg";
import collection3 from "@/assets/collection-3-product-1.jpeg";
import collection4 from "@/assets/collection-4-product-1.jpeg";
import collection5 from "@/assets/collection-5-product-1.jpeg";
import collection6 from "@/assets/collection-6-product-1.jpeg";

const collections = [
  { name: "collection1", tag: "4 pieces", img: collection1 },
  { name: "collection2", tag: "4 pieces", img: collection2 },
  { name: "collection3", tag: "5 pieces", img: collection3 },
  { name: "collection4", tag: "4 pieces", img: collection4 },
  { name: "collection5", tag: "2 pieces", img: collection5 },
  { name: "collection6", tag: "4 pieces", img: collection6 },
];

export const Collections = () => (
  <section id="collections" className="bg-secondary/40 py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[11px] tracking-luxe uppercase text-gold mb-3">Curated</p>
          <h2 className="font-display text-4xl md:text-5xl font-light">Featured Collections</h2>
        </div>
        <a href="#shop" className="hidden sm:block text-xs tracking-luxe uppercase border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-luxe">View All</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {collections.map((c, i) => (
          <a 
            key={c.name} 
            href={`#shop?category=${c.name}`} // الرابط الآن يرسل اسم الكوليكشن بدقة
            className="group relative aspect-[4/5] overflow-hidden block animate-fade-up" 
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-luxe duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-primary-foreground">
              <p className="text-[10px] tracking-luxe uppercase text-gold mb-2">{c.tag}</p>
              <h3 className="font-display text-3xl md:text-4xl">{c.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);