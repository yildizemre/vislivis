import { Users, BarChart3, MapPin, UserCheck, Clock, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RetailFeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t('features.queue.title'),
      description: t('features.queue.description'),
      gradient: 'from-blue-500 to-blue-600',
      accent: {
        border: 'rgba(59, 130, 246, 0.35)',
        overlay: 'rgba(59, 130, 246, 0.14)',
        shadow: 'rgba(59, 130, 246, 0.16)'
      }
    },
    {
      icon: BarChart3,
      title: t('features.cashier.title'),
      description: t('features.cashier.description'),
      gradient: 'from-green-500 to-emerald-600',
      accent: {
        border: 'rgba(16, 185, 129, 0.35)',
        overlay: 'rgba(16, 185, 129, 0.14)',
        shadow: 'rgba(16, 185, 129, 0.18)'
      }
    },
    {
      icon: MapPin,
      title: t('features.heatmap.title'),
      description: t('features.heatmap.description'),
      gradient: 'from-red-500 to-pink-600',
      accent: {
        border: 'rgba(244, 63, 94, 0.35)',
        overlay: 'rgba(244, 63, 94, 0.16)',
        shadow: 'rgba(244, 63, 94, 0.18)'
      }
    },
    {
      icon: UserCheck,
      title: t('features.demographics.title'),
      description: t('features.demographics.description'),
      gradient: 'from-purple-500 to-indigo-600',
      accent: {
        border: 'rgba(139, 92, 246, 0.35)',
        overlay: 'rgba(139, 92, 246, 0.16)',
        shadow: 'rgba(139, 92, 246, 0.18)'
      }
    },
    {
      icon: Clock,
      title: t('features.staff.title'),
      description: t('features.staff.description'),
      gradient: 'from-orange-500 to-amber-600',
      accent: {
        border: 'rgba(249, 115, 22, 0.35)',
        overlay: 'rgba(249, 115, 22, 0.16)',
        shadow: 'rgba(249, 115, 22, 0.2)'
      }
    },
    {
      icon: TrendingUp,
      title: t('features.campaigns.title'),
      description: t('features.campaigns.description'),
      gradient: 'from-teal-500 to-cyan-600',
      accent: {
        border: 'rgba(13, 148, 136, 0.35)',
        overlay: 'rgba(13, 148, 136, 0.16)',
        shadow: 'rgba(13, 148, 136, 0.18)'
      }
    }
  ];

  const renderFeatureCard = (
    feature: typeof features[number],
    {
      className = '',
      layout = 'horizontal',
      forceRow = false
    }: { className?: string; layout?: 'vertical' | 'horizontal'; forceRow?: boolean } = {}
  ) => {
    const IconComponent = feature.icon;
    const baseClasses =
      'group relative overflow-hidden rounded-2xl border bg-white/95 p-6 xl:p-8 transition-all duration-500 hover:-translate-y-1';

    const cardStyle = {
      borderColor: feature.accent?.border,
      boxShadow: `0 28px 60px ${feature.accent?.shadow ?? 'rgba(15, 23, 42, 0.12)'}`
    };

    const overlayStyle = {
      background: `linear-gradient(145deg, ${feature.accent?.overlay ?? 'rgba(15, 23, 42, 0.08)'} 0%, transparent 65%)`
    };

    if (layout === 'horizontal') {
      return (
        <div className={`${baseClasses} ${className}`} style={cardStyle}>
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={overlayStyle}
          />
          <div
            className={`relative z-10 flex ${
              forceRow ? 'flex-row items-center' : 'flex-col md:flex-row md:items-center'
            } gap-4`}
          >
            <div className={`flex items-center ${forceRow ? '' : 'md:self-start'}`}>
              <div
                className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mr-0 md:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_10px_25px_rgba(15,23,42,0.12)]`}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3 md:mb-2">{feature.title}</h3>
              <div className="text-gray-600 font-light leading-relaxed whitespace-pre-line">{feature.description}</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`${baseClasses} ${className}`} style={cardStyle}>
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={overlayStyle}
        />
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-center">
            <div
              className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_12px_28px_rgba(15,23,42,0.14)]`}
            >
              <IconComponent className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
          </div>
          <div className="text-gray-600 font-light leading-relaxed whitespace-pre-line">{feature.description}</div>
        </div>
      </div>
    );
  };

  return (
    <section id="features" className="py-24 md:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium mb-4">
            {t('retail.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t('features.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 lg:hidden">
            {features.map(feature => renderFeatureCard(feature, { layout: 'vertical' }))}
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-8">
              {renderFeatureCard(features[0])}
              {renderFeatureCard(features[1])}
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-12">
              <div className="relative z-10 -mb-16">
                {renderFeatureCard(features[2], { className: 'rounded-[2.5rem]' })}
              </div>
              <div
                className="relative z-0 w-[24rem] h-[24rem] xl:w-[28rem] xl:h-[28rem] overflow-hidden rounded-full"
                style={{
                  boxShadow: '0 0 0 8px white, 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                <div className="absolute inset-0 bg-white"></div>
                <div
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src="/WhatsApp Image 2025-09-30 at 19.55.04.jpeg"
                    alt="Shopping Analytics"
                    className="w-[95%] h-[95%] object-cover rounded-full drop-shadow-[0_25px_45px_rgba(15,23,42,0.18)]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="relative z-10 -mt-16">
                {renderFeatureCard(features[5], { className: 'rounded-[2.5rem]' })}
              </div>
            </div>
            <div className="space-y-8">
              {renderFeatureCard(features[3])}
              {renderFeatureCard(features[4])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailFeaturesSection;