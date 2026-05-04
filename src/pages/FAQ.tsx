import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FAQ = () => {
  return (
    <div id="faq" className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl mb-12 text-gold">الأسئلة المتكررة</h1>
        <div className="space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="font-medium mb-2">كم يستغرق الشحن؟</h3>
            <p className="text-sm text-muted-foreground">يستغرق الشحن عادة من 3 إلى 5 أيام عمل داخل القاهرة والجيزة.</p>
          </div>
          {/* أضيفي المزيد من الأسئلة هنا */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;