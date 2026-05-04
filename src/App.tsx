import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import FAQ from "./pages/FAQ.tsx";
import Returns from "./pages/Returns.tsx"

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// مكون لمراقبة الروابط التي تحتوي على #
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // تأخير بسيط لضمان تحميل الصفحة أولاً
      }
    }
  }, [hash]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
     <CartProvider> 
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollToHash /> {/* إضافة مكون مراقبة الروابط */}
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/returns" element={<Returns />} />

        </Routes>
      </BrowserRouter>
     </CartProvider> 
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
