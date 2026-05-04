import { useState, useEffect } from "react";
import { X, Minus, Plus, Heart } from "lucide-react";
import { Product, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export const ProductDialog = ({ product: initialProduct, onClose }: { product: Product | null; onClose: () => void }) => {
  const { add } = useCart();
  const [currentProduct, setCurrentProduct] = useState<Product | null>(initialProduct);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setCurrentProduct(initialProduct);
    if (initialProduct) {
      setQty(1);
      setActiveImg(0);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset"; 
    };
  }, [initialProduct]);

  if (!currentProduct) return null;

  

 
 const images = currentProduct.images && currentProduct.images.length > 0 
  ? currentProduct.images 
  : [currentProduct.image, currentProduct.image, currentProduct.image];

  const handleAdd = () => {
    add({ product: currentProduct, size, color, quantity: qty });
    toast.success("Added to your bag", { description: `${currentProduct.name} · ${size} · ${color}` });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative bg-background w-full sm:max-w-5xl sm:max-h-[92vh] h-[92vh] sm:h-auto overflow-y-auto sm:rounded-sm shadow-luxe animate-slide-in-right sm:animate-fade-up">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur p-2 rounded-full hover:bg-background transition-luxe">
          <X className="h-4 w-4" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Gallery */}
          <div className="bg-secondary">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img src={images[activeImg]} alt={currentProduct.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Details */}
          <div className="p-6 sm:p-10 flex flex-col">
            <p className="text-[10px] tracking-luxe uppercase text-gold mb-3">{currentProduct.category}</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-4 leading-tight">{currentProduct.name}</h2>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-xl font-medium">{currentProduct.price.toLocaleString()} ج.م </span>
                            {currentProduct.oldPrice && <span className="text-sm text-muted-foreground line-through"> {currentProduct.oldPrice.toLocaleString()} ج.م </span>}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-light">{currentProduct.description}</p>

    

            {/* Qty + Add */}
            <div className="flex gap-2 mt-6">
              {images.map((img, i) => (
              <button key={i} onClick={() => {
                 setActiveImg(i);
                 const foundProduct = products.find(p => p.image === img);
                 if (foundProduct) {setCurrentProduct(foundProduct);} }}
                className={`w-12 h-16 overflow-hidden border-2 transition-luxe ${activeImg === i ? "border-gold" : "border-transparent opacity-60"}`}
                >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
             ))}
            </div>
            <div className="flex gap-3 mt-4"> 
              
             <div className="flex items-center border border-border">
               <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 hover:text-gold transition-luxe" aria-label="Decrease">
                  <Minus className="h-3.5 w-3.5" />
               </button>
               <span className="w-8 text-center text-sm">{qty}</span>
               <button onClick={() => setQty((q) => q + 1)} className="p-3 hover:text-gold transition-luxe" aria-label="Increase">
                  <Plus className="h-3.5 w-3.5" />
               </button>
             </div>
             <button
               onClick={handleAdd}
               className="flex-1 bg-foreground text-background text-xs tracking-luxe uppercase font-medium hover:bg-gold hover:text-primary transition-luxe">
               اضف إلى السلة
             </button>
             <button className="border border-border p-3 hover:border-gold hover:text-gold transition-luxe" aria-label="Wishlist">
               <Heart className="h-4 w-4" />
             </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
