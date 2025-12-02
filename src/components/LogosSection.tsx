import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const LogosSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      company: 'Boyner',
      titleColor: 'text-orange-500',
      text: "Vislivis ile mağaza içi verimliliğimizi kampanya dönemlerinde anlık olarak takip edebiliyoruz. Rehber paneller, sıcak ve soğuk bölgeleri netleştirerek ekiplerimizin doğru hamleleri kısa sürede yapmasını sağladı.",
      metric: "Boyner, ziyaretçi başına geliri %18 artırdı.",
      author: "Ebru Saatçi",
      role: "Perakende Analitiği Direktörü, Boyner",
      logoBg: "bg-orange-50",
      logoColor: "text-orange-600"
    },
    {
      company: 'Beymen',
      titleColor: 'text-slate-900',
      text: "Vislivis panelleri, premium müşteri yolculuğunu gerçek zamanlı görmemizi sağlıyor. Kasada bekleme sürelerini ve VIP alanlardaki yoğunluğu saniyeler içinde ölçebildiğimiz için müşteri memnuniyetinde belirgin artış yakaladık.",
      metric: "2.5x Dönüşüm Artışı",
      metricSub: "Beymen, VIP müşteri memnuniyetini %24 yükseltti.",
      author: "Mert Yalçın",
      role: "Müşteri Deneyimi Lideri, Beymen",
      logoBg: "bg-white",
      logoColor: "text-slate-900"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            REFERANSLARIMIZ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Perakende liderlerinin Vislivis deneyimi
          </h2>
        </div>

        {/* Slider Component */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 bg-white hover:bg-slate-50 text-slate-600 p-3 rounded-full shadow-md border border-slate-200 transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 bg-white hover:bg-slate-50 text-slate-600 p-3 rounded-full shadow-md border border-slate-200 transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card - Light, clean design */}
          <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
            {/* Large Quote Icon - Very subtle */}
            <div className="absolute top-8 right-8 opacity-[0.03]">
               <Quote className="w-32 h-32 text-slate-900" />
            </div>

            <div className="relative z-10 transition-opacity duration-500 ease-in-out" key={currentSlide}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                
                {/* Logo Box - Clean white box */}
                <div className={`w-28 h-28 md:w-32 md:h-32 ${testimonials[currentSlide].logoBg} rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100`}>
                   <span className={`text-xl md:text-2xl font-bold ${testimonials[currentSlide].logoColor} tracking-tight`}>
                     {testimonials[currentSlide].company}
                   </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                   <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                        {testimonials[currentSlide].company}
                      </h3>
                      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                        {testimonials[currentSlide].role}
                      </p>
                   </div>

                   <blockquote className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-6">
                     "{testimonials[currentSlide].text}"
                   </blockquote>

                   <div className="space-y-1 pt-4">
                      <p className="text-[#00cadc] font-bold text-base tracking-wide">
                        {testimonials[currentSlide].metric}
                      </p>
                      {testimonials[currentSlide].metricSub && (
                        <p className="text-slate-500 text-sm">
                          {testimonials[currentSlide].metricSub}
                        </p>
                      )}
                   </div>
                   
                   <div className="mt-6 text-xs text-slate-400 font-medium">
                      {testimonials[currentSlide].author} · {testimonials[currentSlide].role}
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots - Subtle */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#00cadc] w-6' : 'bg-slate-300 w-2 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LogosSection;
