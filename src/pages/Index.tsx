import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductDialog } from "@/components/ProductDialog";
import { CartProvider } from "@/context/CartContext";
import { Product } from "@/data/products";

const Index = () => {
  const [selected, setSelected] = useState<Product | null>(null);

  const scrollToShop = () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero onShopClick={scrollToShop} />
          <Collections />
          <Catalog onSelect={setSelected} />
        </main>
        <Footer />
        <CartDrawer />
        <ProductDialog product={selected} onClose={() => setSelected(null)} />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
};

export default Index;
