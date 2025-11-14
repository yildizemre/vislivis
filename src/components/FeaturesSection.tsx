import React from 'react';
import { Brain, BarChart3, Bell } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.description'),
      metrics: [
        { label: 'Detection Accuracy', value: '99.9%' },
        { label: 'False Positive Rate', value: '<0.1%' },
        { label: 'Processing Speed', value: '0.2s' }
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      metrics: [
        { label: 'Data Points Analyzed', value: '1M+' },
        { label: 'Report Generation', value: 'Real-time' },
        { label: 'Historical Data', value: 'Unlimited' }
      ],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Bell,
      title: t('features.notifications.title'),
      description: t('features.notifications.description'),
      metrics: [
        { label: 'Notification Speed', value: '0.2s' },
        { label: 'Delivery Channels', value: '10+' },
        { label: 'Uptime Guarantee', value: '99.99%' }
      ],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium mb-6">
            {t('features.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('features.subtitle')}
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
                  {/* Gradient background on hover */}
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

                    <div className="space-y-4">
                      {feature.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-sm text-gray-600 font-medium">{metric.label}</span>
                          <span className="text-sm font-bold text-gray-900">{metric.value}</span>
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

export default FeaturesSection;