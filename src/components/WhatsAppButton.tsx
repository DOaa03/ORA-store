import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/201551926628?text=Hello%20ORA%20Store%2C%20I%27d%20like%20to%20enquire%20about..."
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-30 h-14 w-14 rounded-full gradient-gold shadow-gold flex items-center justify-center text-primary hover:scale-110 transition-luxe"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="absolute inset-0 rounded-full animate-ping bg-gold/30" />
  </a>
);
