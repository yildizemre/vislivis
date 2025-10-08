import React from 'react';
import { Shield, Package, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AdvancedFeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Package,
      title: t('advanced.inventory.title'),
      description: t('advanced.inventory.description'),
      gradient: 'from-blue-500 to-purple-600',
      benefits: [
        t('advanced.inventory.benefit1'),
        t('advanced.inventory.benefit2'),
        t('advanced.inventory.benefit3'),
        t('advanced.inventory.benefit4')
      ]
    },
    {
      icon: Shield,
      title: t('advanced.security.title'),
      description: t('advanced.security.description'),
      gradient: 'from-green-500 to-teal-600',
      benefits: [
        t('advanced.security.benefit1'),
        t('advanced.security.benefit2'),
        t('advanced.security.benefit3'),
        t('advanced.security.benefit4')
      ]
    },
    {
      icon: Building2,
      title: t('advanced.multistore.title'),
      description: t('advanced.multistore.description'),
      gradient: 'from-orange-500 to-red-600',
      benefits: [
        t('advanced.multistore.benefit1'),
        t('advanced.multistore.benefit2'),
        t('advanced.multistore.benefit3'),
        t('advanced.multistore.benefit4')
      ]
    }
  ];

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium mb-6">
            {t('advanced.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('advanced.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('advanced.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed font-light mb-8">
                      {feature.description}
                    </p>

                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center text-gray-600 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;