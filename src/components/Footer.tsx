import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ora-logo.jpg";

export const Footer = () => (
  <footer id="footer" className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="ORA Watch Store" className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40" />
            <p className="font-display text-2xl tracking-[0.3em]">ORA<span className="text-gold">.</span></p>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed font-light">
            Considered luxury for the modern wardrobe. Made to be lived in, made to last.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs tracking-luxe uppercase font-medium mb-6">Customer Care</h4>
          <ul className="space-y-4">
            <li>
               <Link to="/faq" className="text-[11px] text-muted-foreground tracking-wide hover:text-gold transition-luxe">
                 Frequently Asked Questions
               </Link>
            </li>
            <li>
              <Link to="/returns" className="text-[11px] text-muted-foreground tracking-wide hover:text-gold transition-luxe">
                Exchange & Return Policy
              </Link>
            </li>
    
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-luxe uppercase text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a href="mailto:aa3195168@gmail.com" className="flex items-center gap-2 hover:text-gold transition-luxe">
                <Mail className="h-3.5 w-3.5" /> aa3195168@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:01551926628" className="flex items-center gap-2 hover:text-gold transition-luxe">
                <Phone className="h-3.5 w-3.5" /> 0155 192 6628
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-luxe uppercase text-gold mb-4">Follow</h4>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/1B3RzNG2yt/" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-10 w-10 border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-luxe">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/ora__store_" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-luxe">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.tiktok.com/@ora__store_" target="_blank" rel="noreferrer" aria-label="TikTok" className="h-10 w-10 border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-luxe">
              <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="h-4 w-4"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[11px] tracking-wide text-primary-foreground/50">
        <p>© 2026 ORA Store. All rights reserved.</p>
        <p>Crafted with care · Cairo</p>
      </div>
    </div>
  </footer>
);
