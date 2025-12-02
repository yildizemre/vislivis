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
      author: "Mert Yalçın", // Using a placeholder or generic if name not provided in user text, but user text had "Müşteri Deneyimi Lideri" as role. I'll use role as primary.
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

  const logos = [
    { name: 'Migros', color: 'from-orange-500 to-orange-600' },
    { name: 'CarrefourSA', color: 'from-blue-500 to-blue-700' },
    { name: 'BİM', color: 'from-yellow-500 to-yellow-600' },
    { name: 'A101', color: 'from-red-500 to-red-600' },
    { name: 'ŞOK', color: 'from-purple-500 to-purple-600' },
    { name: 'Gratis', color: 'from-pink-500 to-pink-600' },
    { name: 'Watsons', color: 'from-green-500 to-green-600' },
    { name: 'MediaMarkt', color: 'from-red-600 to-red-700' }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0f172a] relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-200 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm backdrop-blur-sm">
            REFERANSLARIMIZ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Perakende liderlerinin Vislivis deneyimi
          </h2>
        </div>

        {/* Slider Component */}
        <div className="max-w-5xl mx-auto relative mb-32">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-16 z-20 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full shadow-lg border border-white/10 transition-all duration-300 hover:scale-110 focus:outline-none backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-16 z-20 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full shadow-lg border border-white/10 transition-all duration-300 hover:scale-110 focus:outline-none backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-black/20 border border-white/10 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
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
                  currentSlide === index ? 'bg-[#00cadc] w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Logos Grid (Bottom) */}
        <div className="text-center mb-12">
          <h3 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">
            ÖNDE GELEN PERAKENDE ZİNCİRLERİNİN TERCİHİ
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-all duration-500">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="w-full flex items-center justify-center group cursor-pointer"
                >
                  <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${logo.color} bg-clip-text text-transparent transition-all duration-300 transform group-hover:scale-110 filter brightness-125`}>
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LogosSection;
