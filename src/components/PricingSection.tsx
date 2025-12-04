import { Check, Star } from 'lucide-react';
import { use3DTilt } from '../hooks/use3DTilt';
import { useLanguage } from '../contexts/LanguageContext';

const PricingSection = () => {
  const { t } = useLanguage();
  const tilt = use3DTilt(5);

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

  return (
    <section id="pricing" className="py-28 bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-50 relative overflow-hidden text-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.02) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(15, 23, 42, 0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
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