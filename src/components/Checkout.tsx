import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const steps = ["Shipping", "Payment", "Review"];

export const Checkout = ({ onBack }: { onBack: () => void }) => {
  const { subtotal, clear, setOpen } = useCart();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else {
      setDone(true);
      setTimeout(() => {
        toast.success("Order placed", { description: "A confirmation has been sent to your email." });
        clear();
        setOpen(false);
      }, 1800);
    }
  };

  if (done) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="h-16 w-16 rounded-full bg-gold flex items-center justify-center mb-6 animate-fade-in">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <p className="font-display text-3xl mb-2">Thank you</p>
        <p className="text-sm text-muted-foreground">Your order is being prepared with care.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="px-6 pt-4">
        <button onClick={onBack} className="text-xs tracking-luxe uppercase flex items-center gap-2 text-muted-foreground hover:text-foreground transition-luxe mb-6">
          <ArrowLeft className="h-3 w-3" /> Back to bag
        </button>

        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div className={`h-7 w-7 rounded-full flex items-center justify-center text-[11px] font-medium transition-luxe ${i <= step ? "bg-gold text-primary" : "bg-secondary text-muted-foreground"}`}>
                {i + 1}
              </div>
              <span className={`text-[10px] tracking-luxe uppercase ${i === step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
              {i < steps.length - 1 && <div className={`flex-1 h-px ${i < step ? "bg-gold" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="space-y-4 animate-fade-in" key={step}>
          {step === 0 && (
            <>
              <Field label="Full Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Phone" placeholder="+20 ..." />
              <Field label="Address" placeholder="Street, City" />
              <div className="grid grid-cols-2 gap-3">
                <Field label="City" placeholder="Cairo" />
                <Field label="Postal Code" placeholder="11511" />
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <Field label="Card Number" placeholder="•••• •••• •••• ••••" />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Expiry" placeholder="MM/YY" />
                <Field label="CVC" placeholder="•••" />
              </div>
              <Field label="Name on Card" placeholder="Your name" />
            </>
          )}
          {step === 2 && (
            <div className="space-y-3 text-sm">
              <Row label="Subtotal" value={`EGP ${subtotal.toLocaleString()}`} />
              <Row label="Shipping" value="Complimentary" />
              <Row label="Tax (14%)" value={`EGP ${Math.round(subtotal * 0.14).toLocaleString()}`} />
              <div className="border-t border-border pt-3">
                <Row label="Total" value={`EGP ${Math.round(subtotal * 1.14).toLocaleString()}`} bold />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto p-6 border-t border-border">
        <button onClick={next} className="w-full bg-foreground text-background py-4 text-xs tracking-luxe uppercase font-medium hover:bg-gold hover:text-primary transition-luxe">
          {step === steps.length - 1 ? "Place Order" : "Continue"}
        </button>
      </div>
    </div>
  );
};

const Field = ({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="block">
    <span className="text-[10px] tracking-luxe uppercase text-muted-foreground block mb-1.5">{label}</span>
    <input {...props} className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-sm transition-luxe" />
  </label>
);

const Row = ({ label, value, bold }: { label: string; value: string; bold?: boolean }) => (
  <div className="flex justify-between">
    <span className={`tracking-wide ${bold ? "font-medium tracking-luxe uppercase text-xs" : "text-muted-foreground"}`}>{label}</span>
    <span className={bold ? "font-medium" : ""}>{value}</span>
  </div>
);
