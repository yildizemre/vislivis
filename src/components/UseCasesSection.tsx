import React from 'react';
import { Clock, TrendingUp, Package, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const UseCasesSection = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      icon: Clock,
      title: t('useCases.scenario1.title'),
      description: t('useCases.scenario1.description'),
      gradient: 'from-blue-500 to-blue-600',
      metrics: [t('useCases.scenario1.metric1'), t('useCases.scenario1.metric2'), t('useCases.scenario1.metric3')]
    },
    {
      icon: TrendingUp,
      title: t('useCases.scenario2.title'),
      description: t('useCases.scenario2.description'),
      gradient: 'from-green-500 to-emerald-600',
      metrics: [t('useCases.scenario2.metric1'), t('useCases.scenario2.metric2'), t('useCases.scenario2.metric3')]
    },
    {
      icon: Package,
      title: t('useCases.scenario3.title'),
      description: t('useCases.scenario3.description'),
      gradient: 'from-purple-500 to-indigo-600',
      metrics: [t('useCases.scenario3.metric1'), t('useCases.scenario3.metric2'), t('useCases.scenario3.metric3')]
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
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
            {t('useCases.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('useCases.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    {useCase.description}
                  </p>

                  <div className="space-y-3">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <ArrowRight className="w-4 h-4 mr-3 text-green-500" />
                        <span className="font-medium">{metric}</span>
                      </div>
                    ))}
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

export default UseCasesSection;