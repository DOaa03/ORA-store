import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import logo from "@/assets/ora-logo.jpg";

const links = [
  { name: "Shop", href: "/#shop" },
  { name: "Collections", href: "/#collections" }, 
  { name: "Contact Us", href: "/#footer" } 
];

export const Header = ({ onSearchToggle }: { onSearchToggle?: () => void }) => {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-xl border-b border-border/60">
      {/* <div className="bg-primary text-primary-foreground text-[10px] tracking-luxe uppercase text-center py-2 font-light">
        Complimentary shipping on orders over EGP 1500
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <button
          aria-label="Menu"
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-1 -ml-1"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link to="/" className="flex items-center gap-2" aria-label="ORA Watch Store">
          <img src={logo} alt="ORA Watch Store" className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40" />
          <span className="font-display text-xl tracking-[0.3em] font-light hidden sm:inline">ORA<span className="text-gold">.</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 flex-1">
          {links.map((l) => (
            <Link key={l.name} to={l.href} className="text-xs tracking-luxe uppercase hover:text-gold transition-luxe">
              {l.name}
            </Link>
          ))}
        </nav>

        
        <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end">
          <button aria-label="Search" onClick={() => setSearchOpen((v) => !v)} className="p-1 hover:text-gold transition-luxe">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Account" className="p-1 hover:text-gold transition-luxe hidden sm:block">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button
            aria-label="Cart"
            onClick={() => setOpen(true)}
            className="p-1 hover:text-gold transition-luxe relative"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-gold text-primary text-[10px] font-medium h-4 min-w-4 px-1 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border/60 bg-background animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <input
              autoFocus
              placeholder="Search ORA..."
              className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-sm placeholder:text-muted-foreground tracking-wide transition-luxe"
            />
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50 animate-fade-in" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-background shadow-luxe animate-slide-in-right p-6 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <img src={logo} alt="ORA" className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40" />
              <button onClick={() => setMobileOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <Link key={l.name} to={l.href} className="text-sm tracking-luxe uppercase hover:text-gold transition-luxe" onClick={() => setMobileOpen(false)}>
                  {l.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
