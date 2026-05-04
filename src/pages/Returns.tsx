import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Returns = () => {
  return (
    <div id="returns" className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl mb-12 text-gold">سياسة الاسترجاع</h1>
        <div className="prose prose-sm text-muted-foreground leading-relaxed">
          <p>• يمكنك استرجاع المنتج في خلال يومين من تاريخ الاستلام.</p>
          <p>• يجب وجود اثبات استلام وصل اوغيره ليتم تأكيد العملية.</p>
          <p>• يجب أن يكون المنتج في حالته الأصلية وبكامل تغليفه.</p>
          <p>• في حالة وجود عيب صناعة، المتجر يتحمل كافة مصاريف الشحن.</p>
          <p>• في حالة الاسترجاع,يتم خصم مصاريف الشحن وبنرجع تمن المنتج نفسه.</p>
        </div>
        <h1 className="font-display text-4xl mb-12 text-gold">سياسة الاستبدال </h1>
        <div className="prose prose-sm text-muted-foreground leading-relaxed">
          <p>• يمكنك استبدال المنتج في خلال اربع ايام من تاريخ الاستلام.</p>
          <p>• يجب وجود اثبات استلام وصل اوغيره ليتم تأكيد العملية.</p>
          <p>• يجب أن يكون المنتج في حالته الأصلية وبكامل تغليفه.</p>
          <p>• في حالة وجود عيب صناعة، المتجر يتحمل كافة مصاريف الشحن.</p>
          <p>• في حالة الاستبدال لسبب شخصي يتحمل العميل كافه مصاريف الشحن .</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;