import { Product } from "@/data/products";

export const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
  return (
    <button onClick={onClick} className="group text-left animate-fade-up">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-luxe duration-700"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-background/90 backdrop-blur text-[10px] tracking-luxe uppercase px-3 py-1 text-foreground">
            {product.badge}
          </span>
        )}
        {product.oldPrice && (
          <span className="absolute top-3 right-3 bg-gold text-primary text-[10px] tracking-luxe uppercase px-3 py-1">
            Sale
          </span>
        )}
      </div>
      <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-1">{product.category}</p>
      <h3 className="font-display text-lg leading-tight mb-2 group-hover:text-gold transition-luxe">{product.name}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-sm font-medium">EGP {product.price.toLocaleString()}</span>
        {product.oldPrice && (
          <span className="text-xs text-muted-foreground line-through">EGP {product.oldPrice.toLocaleString()}</span>
        )}
      </div>
    </button>
  );
};
