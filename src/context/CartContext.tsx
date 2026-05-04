import { createContext, useContext, useState, ReactNode } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

type CartCtx = {
  items: CartItem[];
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  add: (item: CartItem) => void;
  remove: (id: string, size: string, color: string) => void;
  updateQty: (id: string, size: string, color: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  const add = (item: CartItem) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.product.id === item.product.id && i.size === item.size && i.color === item.color
      );
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + item.quantity };
        return copy;
      }
      return [...prev, item];
    });
    setOpen(true);
  };

  const remove = (id: string, size: string, color: string) =>
    setItems((p) => p.filter((i) => !(i.product.id === id && i.size === size && i.color === color)));

  const updateQty = (id: string, size: string, color: string, qty: number) =>
    setItems((p) =>
      p.map((i) =>
        i.product.id === id && i.size === size && i.color === color
          ? { ...i, quantity: Math.max(1, qty) }
          : i
      )
    );

  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <Ctx.Provider value={{ items, isOpen, setOpen, add, remove, updateQty, clear, count, subtotal }}>
      {children}
    </Ctx.Provider>
  );
};

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
};
