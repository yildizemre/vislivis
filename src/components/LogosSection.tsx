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
      titleColor: 'text-[#1a237e]',
      text: "Vislivis panelleri, premium müşteri yolculuğunu gerçek zamanlı görmemizi sağlıyor. Kasada bekleme sürelerini ve VIP alanlardaki yoğunluğu saniyeler içinde ölçebildiğimiz için müşteri memnuniyetinde belirgin artış yakaladık.",
      metric: "2.5x Dönüşüm Artışı",
      metricSub: "Beymen, VIP müşteri memnuniyetini %24 yükseltti.",
      author: "Mert Yalçın",
      role: "Müşteri Deneyimi Lideri, Beymen",
      logoBg: "bg-indigo-50",
      logoColor: "text-[#1a237e]"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-slate-300 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            REFERANSLARIMIZ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Perakende liderlerinin Vislivis deneyimi
          </h2>
        </div>

        {/* Slider Component */}
        <div className="max-w-5xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-16 z-20 bg-white hover:bg-slate-50 text-slate-700 p-4 rounded-full shadow-lg border border-slate-100 transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-16 z-20 bg-white hover:bg-slate-50 text-slate-700 p-4 rounded-full shadow-lg border border-slate-100 transition-all duration-300 hover:scale-110 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl border border-slate-100 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            {/* Background Quote Icon */}
            <div className="absolute top-10 right-10 opacity-5">
               <Quote className="w-40 h-40 text-slate-900" />
            </div>

            <div className="relative z-10 transition-opacity duration-500 ease-in-out" key={currentSlide}>
              <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                
                {/* Logo Box */}
                <div className={`w-32 h-32 md:w-40 md:h-40 ${testimonials[currentSlide].logoBg} rounded-3xl flex items-center justify-center shrink-0 shadow-inner`}>
                   <span className={`text-2xl md:text-3xl font-bold ${testimonials[currentSlide].logoColor}`}>
                     {testimonials[currentSlide].company}
                   </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                   <div className="mb-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                        {testimonials[currentSlide].company}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
                        {testimonials[currentSlide].role}
                      </p>
                   </div>

                   <blockquote className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed italic my-8">
                     "{testimonials[currentSlide].text}"
                   </blockquote>

                   <div className="space-y-2 border-t border-slate-100 pt-6">
                      <p className="text-[#00cadc] font-bold text-lg tracking-wide">
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

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#00cadc] w-8' : 'bg-slate-400 hover:bg-slate-300'
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
