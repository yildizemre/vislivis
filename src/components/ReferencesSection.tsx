import { useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Client logos
const BoynerLogo = '/Boyner_Logo.jpg';
const BeymenLogo = '/Beymen_logo.png';

const ReferencesSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      company: 'Boyner',
      logo: BoynerLogo,
      quote:
        '"Vislivis ile mağaza içi verimliliğimizi kampanya dönemlerinde anlık olarak takip edebiliyoruz. Rehber paneller, sıcak ve soğuk bölgeleri netleştirerek ekiplerimizin doğru hamleleri kısa sürede yapmasını sağladı."',
      highlight: 'Boyner, ziyaretçi başına geliri %18 artırdı.',
      name: 'Ebru Saatçi',
      title: 'Perakende Analitiği Direktörü, Boyner'
    },
    {
      company: 'Beymen',
      logo: BeymenLogo,
      quote:
        '"Vislivis panelleri, premium müşteri yolculuğunu gerçek zamanlı görmemizi sağlıyor. Kasada bekleme sürelerini ve VIP alanlardaki yoğunluğu saniyeler içinde ölçebildiğimiz için müşteri memnuniyetinde belirgin artış yakaladık."',
      highlight: 'Beymen, VIP müşteri memnuniyetini %24 yükseltti.',
      name: 'Mert Yalçın',
      title: 'Müşteri Deneyimi Lideri, Beymen'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  const showPrevious = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const referencesBadgeRaw = t('pricing.referencesBadge');
  const referencesTitleRaw = t('pricing.referencesTitle');
  const referencesBadgeText = referencesBadgeRaw === 'pricing.referencesBadge' ? 'REFERANSLARIMIZ' : referencesBadgeRaw;
  const referencesHeadingText = referencesTitleRaw === 'pricing.referencesTitle' ? 'Perakende liderlerinin Vislivis deneyimi' : referencesTitleRaw;

  return (
    <section className="py-28 bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-50 relative overflow-hidden text-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div id="references" className="text-center mb-10">
          <span className="inline-flex items-center px-4 py-2 bg-white/80 border border-slate-200 rounded-full text-slate-600 text-sm font-medium mb-4 uppercase tracking-[0.3em]">
            {referencesBadgeText}
          </span>
          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            {referencesHeadingText}
          </h3>
        </div>
        <div className="relative mb-14 max-w-6xl mx-auto">
          <div className="absolute inset-y-0 left-0 -translate-x-1/2 hidden md:flex items-center">
            <button
              onClick={showPrevious}
              className="p-3 rounded-full bg-white text-slate-800 hover:bg-slate-100 transition shadow-lg border border-slate-200"
              aria-label="Önceki referans"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 translate-x-1/2 hidden md:flex items-center">
            <button
              onClick={showNext}
              className="p-3 rounded-full bg-white text-slate-800 hover:bg-slate-100 transition shadow-lg border border-slate-200"
              aria-label="Sonraki referans"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-hidden rounded-[36px] border-4 border-white bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-100 text-slate-900 shadow-[0_40px_120px_rgba(15,23,42,0.25)] px-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map(item => (
                <div key={item.company} className="w-full flex-shrink-0 px-8 md:px-16 py-14 flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-10">
                    <div className="flex items-center justify-center">
                      <div className="w-44 h-30 rounded-3xl bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] border border-slate-200 flex items-center justify-center overflow-hidden p-4">
                        <img src={item.logo} alt={`${item.company} logo`} className="max-w-full max-h-full object-contain" />
                      </div>
                    </div>
                    <div className="flex-1 text-left space-y-1">
                      <p className="font-semibold text-3xl text-slate-900 tracking-tight">{item.company}</p>
                      <p className="text-base text-slate-500">{item.title}</p>
                    </div>
                    <Quote className="w-12 h-12 text-slate-200/90 self-start hidden md:block" />
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    {item.quote}
                  </p>
                  <span className="text-cyan-600 text-sm font-semibold">
                    {item.highlight}
                  </span>
                  <div className="pt-4 border-t border-slate-200 text-sm text-slate-500">
                    {item.name} · {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  activeIndex === index ? 'bg-cyan-600' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Referans ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
