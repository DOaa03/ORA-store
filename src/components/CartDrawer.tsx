import { useState } from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Checkout } from "./Checkout";

export const CartDrawer = () => {
  const { isOpen, setOpen, items, updateQty, remove, subtotal } = useCart();
  const [checkout, setCheckout] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 animate-fade-in" onClick={() => { setOpen(false); setCheckout(false); }} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-luxe animate-slide-in-right flex flex-col">
        <header className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-display text-2xl">{checkout ? "Checkout" : "Your Bag"}</h2>
          <button onClick={() => { setOpen(false); setCheckout(false); }} aria-label="Close"><X className="h-5 w-5" /></button>
        </header>

        {checkout ? (
          <Checkout onBack={() => setCheckout(false)} />
        ) : items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-2xl italic mb-3">Your bag is empty</p>
            <p className="text-sm text-muted-foreground mb-8">Discover pieces worth keeping.</p>
            <button onClick={() => setOpen(false)} className="bg-foreground text-background px-8 py-3 text-xs tracking-luxe uppercase hover:bg-gold hover:text-primary transition-luxe">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-border">
              {items.map((i) => (
                <div key={`${i.product.id}-${i.size}-${i.color}`} className="flex gap-4 py-4">
                  <img src={i.product.image} alt={i.product.name} className="w-20 h-24 object-cover bg-secondary" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base leading-tight mb-1 truncate">{i.product.name}</h3>
                    <p className="text-[11px] text-muted-foreground tracking-wide mb-2">{i.size} · {i.color}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border text-xs">
                        <button onClick={() => updateQty(i.product.id, i.size, i.color, i.quantity - 1)} className="p-1.5 hover:text-gold"><Minus className="h-3 w-3" /></button>
                        <span className="px-2">{i.quantity}</span>
                        <button onClick={() => updateQty(i.product.id, i.size, i.color, i.quantity + 1)} className="p-1.5 hover:text-gold"><Plus className="h-3 w-3" /></button>
                      </div>
                      <span className="text-sm font-medium">EGP {(i.product.price * i.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                  <button onClick={() => remove(i.product.id, i.size, i.color)} aria-label="Remove" className="text-muted-foreground hover:text-destructive transition-luxe self-start">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <footer className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="tracking-luxe uppercase text-xs">Subtotal</span>
                <span className="font-medium">EGP {subtotal.toLocaleString()}</span>
              </div>
              <p className="text-[11px] text-muted-foreground">Shipping & taxes calculated at checkout.</p>
              <button onClick={() => setCheckout(true)} className="w-full bg-foreground text-background py-4 text-xs tracking-luxe uppercase font-medium hover:bg-gold hover:text-primary transition-luxe">
                Checkout
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
};
