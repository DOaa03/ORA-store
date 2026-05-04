import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import hero from "@/assets/hero.jpg";
import hero2 from "@/assets/hero2.jpg"; 


// استيراد ملفات التنسيق الضرورية لـ Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export const Hero = ({ onShopClick }: { onShopClick: () => void }) => {
  
  // هنا يمكنك إضافة الصور والفيديوهات الخاصة بكِ
  const slides = [
    { type: 'image', url: hero }, // الصورة الأساسية
    { type: 'image', url: hero2 }, // صورة ثانية
    { type: 'video', url: 'https://cdn.pixabay.com/video/2021/04/12/70796-538313028_tiny.mp4' }, // فيديو تجريبي
    { type: 'image', url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070' }, // صورة تجريبية ثانية
  ];

  return (
    <section className="relative gradient-luxe text-primary-foreground overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[88vh]">
        
        {/* الجزء الأيمن: المحتوى النصي (ثابت) */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16 md:py-24 order-2 md:order-1">
          <div className="animate-fade-up">
            <p className="text-[11px] tracking-luxe uppercase text-gold mb-6">spring 2026</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] font-light mb-6">
              Quietly
              <br />
              <span className="italic text-gold">extraordinary.</span>
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/70 max-w-md font-light leading-relaxed mb-10">
              A new chapter in considered luxury. Discover pieces designed to outlast trends and travel through seasons.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={onShopClick}
                className="group bg-gold text-primary px-8 py-4 text-xs tracking-luxe uppercase font-medium hover:shadow-gold transition-luxe"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* الجزء الأيسر: السلايدر (الصور والفيديوهات المتغيرة) */}
        <div className="relative order-1 md:order-2 min-h-[50vh] md:min-h-full overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect={'fade'} // تأثير التلاشي الناعم
            speed={1000}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative w-full h-full">
                {slide.type === 'image' ? (
                  <img
                    src={slide.url}
                    alt={`ORA Collection ${index}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={slide.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {/* طبقة التدرج اللوني (الظل) */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 md:to-black/20" />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="absolute bottom-6 right-6 z-10 text-right">
            <p className="text-[10px] tracking-luxe uppercase text-primary-foreground/70">Edition 01</p>
          </div>
        </div>
      </div>
    </section>
  );
};