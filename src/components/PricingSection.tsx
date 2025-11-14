import { useEffect, useState } from 'react';

import { Check, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';
import { useLanguage } from '../contexts/LanguageContext';

// Client logos
const BoynerLogo = '/Boyner_Logo.jpg';
const BeymenLogo = '/Beymen_logo.png';

const PricingSection = () => {
  const { t } = useLanguage();
  const tilt = use3DTilt(5);

  const testimonials = [
    {
      company: 'Boyner',
      logo: BoynerLogo,
      quote:
        '“Vislivis ile mağaza içi verimliliğimizi kampanya dönemlerinde anlık olarak takip edebiliyoruz. Rehber paneller, sıcak ve soğuk bölgeleri netleştirerek ekiplerimizin doğru hamleleri kısa sürede yapmasını sağladı.”',
      highlight: 'Boyner, ziyaretçi başına geliri %18 artırdı.',
      name: 'Ebru Saatçi',
      title: 'Perakende Analitiği Direktörü, Boyner'
    },
    {
      company: 'Beymen',
      logo: BeymenLogo,
      quote:
        '“Vislivis panelleri, premium müşteri yolculuğunu gerçek zamanlı görmemizi sağlıyor. Kasada bekleme sürelerini ve VIP alanlardaki yoğunluğu saniyeler içinde ölçebildiğimiz için müşteri memnuniyetinde belirgin artış yakaladık.”',
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

  const plans = [
    {
      name: t('pricing.starter'),
      price: t('pricing.custom'),
      period: '',
      description: t('pricing.starter.description'),
      features: [
        t('pricing.starter.feature1'),
        t('pricing.starter.feature2'),
        t('pricing.starter.feature3'),
        t('pricing.starter.feature4'),
        t('pricing.starter.feature5'),
        t('pricing.starter.feature6')
      ],
      popular: false,
      buttonText: t('pricing.contactSales'),
      gradient: 'from-gray-50 to-gray-100'
    },
    {
      name: t('pricing.professional'),
      price: t('pricing.custom'),
      period: '',
      description: t('pricing.professional.description'),
      features: [
        t('pricing.professional.feature1'),
        t('pricing.professional.feature2'),
        t('pricing.professional.feature3'),
        t('pricing.professional.feature4'),
        t('pricing.professional.feature5'),
        t('pricing.professional.feature6'),
        t('pricing.professional.feature7'),
        t('pricing.professional.feature8')
      ],
      popular: true,
      buttonText: t('pricing.scheduleDemo'),
      gradient: 'from-blue-50 to-purple-50'
    },
    {
      name: t('pricing.enterprise'),
      price: t('pricing.custom'),
      period: '',
      description: t('pricing.enterprise.description'),
      features: [
        t('pricing.enterprise.feature1'),
        t('pricing.enterprise.feature2'),
        t('pricing.enterprise.feature3'),
        t('pricing.enterprise.feature4'),
        t('pricing.enterprise.feature5'),
        t('pricing.enterprise.feature6'),
        t('pricing.enterprise.feature7'),
        t('pricing.enterprise.feature8'),
        t('pricing.enterprise.feature9')
      ],
      popular: false,
      buttonText: t('pricing.requestInfo'),
      gradient: 'from-green-50 to-emerald-50'
    }
  ];

  const referencesBadgeRaw = t('pricing.referencesBadge');
  const referencesTitleRaw = t('pricing.referencesTitle');
  const referencesBadgeText = referencesBadgeRaw === 'pricing.referencesBadge' ? 'REFERANSLARIMIZ' : referencesBadgeRaw;
  const referencesHeadingText = referencesTitleRaw === 'pricing.referencesTitle' ? 'Perakende liderlerinin Vislivis deneyimi' : referencesTitleRaw;

  return (
    <section id="pricing" className="py-28 bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-50 relative overflow-hidden text-slate-900">
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

        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium mb-4">
            {t('pricing.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {t('pricing.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                onMouseMove={tilt.handleMouseMove}
                onMouseLeave={tilt.handleMouseLeave}
                style={tilt.tiltStyle}
                className={`group relative ${
                  plan.popular 
                    ? 'ring-2 ring-blue-500/40' 
                    : ''
                } bg-white text-gray-900 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-visible`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      {t('pricing.mostPopular')}
                    </div>
                  </div>
                )}

                {/* Gradient background */}
                <div className={`absolute inset-0 z-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 font-light mb-6 leading-relaxed">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </div>
                      {plan.period && (
                        <span className="text-gray-600 ml-1">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular 
                            ? 'bg-blue-100' 
                            : 'bg-gray-100'
                        } flex-shrink-0`}>
                          <Check className={`w-3 h-3 ${
                            plan.popular 
                              ? 'text-blue-600' 
                              : 'text-gray-600'
                          }`} />
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full py-4 px-6 font-semibold rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="text-center mt-16">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 text-gray-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('pricing.custom.title')}
              </h3>
              <p className="text-gray-600 font-light mb-8 leading-relaxed">
                {t('pricing.custom.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="font-medium">{t('pricing.custom.benefit1')}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="font-medium">{t('pricing.custom.benefit2')}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="font-medium">{t('pricing.custom.benefit3')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;