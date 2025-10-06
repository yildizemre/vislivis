import React from 'react';
import { Users, BarChart3, MapPin, UserCheck, Clock, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RetailFeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t('features.queue.title'),
      description: t('features.queue.description'),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: t('features.cashier.title'),
      description: t('features.cashier.description'),
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: MapPin,
      title: t('features.heatmap.title'),
      description: t('features.heatmap.description'),
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: UserCheck,
      title: t('features.demographics.title'),
      description: t('features.demographics.description'),
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Clock,
      title: t('features.staff.title'),
      description: t('features.staff.description'),
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      icon: TrendingUp,
      title: t('features.campaigns.title'),
      description: t('features.campaigns.description'),
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section id="features" className="py-32 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium mb-6">
            {t('retail.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <div className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
                    {feature.description}
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

export default RetailFeaturesSection;