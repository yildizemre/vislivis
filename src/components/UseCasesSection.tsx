import { useEffect, useState } from 'react';
import { Clock, TrendingUp, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const UseCasesSection = () => {
  const { t } = useLanguage();

  const categories = [
    { name: 'Pantolon', gradient: 'from-cyan-600 via-sky-600 to-blue-600' },
    { name: 'T-Shirt', gradient: 'from-blue-600 via-indigo-600 to-slate-600' },
    { name: 'Sweat', gradient: 'from-slate-600 via-blue-700 to-indigo-700' },
    { name: 'Etek', gradient: 'from-indigo-600 via-slate-700 to-blue-800' },
    { name: 'Ayakkabı', gradient: 'from-slate-600 via-cyan-700 to-blue-800' },
    { name: 'Çanta', gradient: 'from-blue-700 via-slate-700 to-slate-800' },
    { name: 'Kozmetik', gradient: 'from-slate-700 via-blue-800 to-slate-900' }
  ];

  const [categoryValues, setCategoryValues] = useState(() =>
    categories.map(() => 55 + Math.random() * 30)
  );

  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCategoryValues(prev =>
        prev.map(value => {
          const delta = (Math.random() - 0.5) * 34;
          let next = value + delta;
          if (next > 98) next = 94 + Math.random() * 4;
          if (next < 12) next = 16 + Math.random() * 6;
          return next;
        })
      );
    }, 1200);

    return () => window.clearInterval(intervalId);
  }, []);

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
    <section className="py-24 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto mb-14 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-slate-200 mb-4">
            {t('useCases.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t('useCases.title')}</h2>
          <p className="text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto font-light leading-relaxed">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 items-start">
          <div className="relative border border-white/10 rounded-3xl bg-slate-900/70 shadow-[0_25px_80px_rgba(8,14,35,0.6)] backdrop-blur-sm overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 55%)' }}
            ></div>
            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="uppercase tracking-[0.35em] text-sm font-semibold text-slate-200/80">
                  {t('useCases.chart.title')}
                </span>
                <div className="flex items-center text-sm text-slate-200/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
                  {t('useCases.chart.legend')}
                </div>
              </div>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className="flex items-center space-x-4 group"
                    onMouseEnter={() => setActiveCategory(index)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className="w-24 sm:w-28 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-200/80">
                      {category.name}
                    </div>
                    <div className="flex-1 h-8 sm:h-9 rounded-xl bg-slate-900/70 overflow-hidden border border-white/10 relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl`}
                      ></div>
                      <div
                        className={`relative h-full rounded-xl bg-gradient-to-r ${category.gradient} transition-[width] duration-700 ease-out`}
                        style={{
                          width: `${Math.min(100, Math.max(20, categoryValues[index]))}%`,
                          filter: activeCategory === index ? 'drop-shadow(0 0 18px rgba(56,189,248,0.45))' : undefined
                        }}
                      />
                    </div>
                    <div className="w-12 text-right text-sm font-semibold text-slate-100">
                      {Math.round(categoryValues[index])}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/70 rounded-3xl border border-white/10 shadow-[0_22px_70px_rgba(8,14,35,0.55)] p-8 lg:p-9 flex flex-col">
            <div className="inline-flex items-center px-4 py-2 mb-4 bg-white/10 text-slate-200 rounded-full text-xs font-semibold self-start uppercase tracking-[0.25em]">
              {t('useCases.badge')}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{t('useCases.insights.title')}</h3>
            <p className="text-base text-slate-200/90 leading-relaxed mb-6">
              {t('useCases.insights.description')}
            </p>
            <div className="space-y-3">
              {[t('useCases.insights.point1'), t('useCases.insights.point2'), t('useCases.insights.point3')].map((point, index) => (
                <div key={index} className="flex items-start text-slate-200/90 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 mr-3" />
                  <span className="font-medium leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-900/70 rounded-2xl border border-white/10 p-8 hover:border-white/40 hover:shadow-[0_18px_55px_rgba(8,14,35,0.5)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4">
                    {useCase.title}
                  </h4>

                  <p className="text-slate-200/90 leading-relaxed font-light mb-6">
                    {useCase.description}
                  </p>

                  <div className="space-y-3">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-slate-200/90 text-sm">
                        <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
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