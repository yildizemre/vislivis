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
    <section className="py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/10 rounded-full text-slate-200 text-sm font-medium mb-6">
            {t('advanced.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('advanced.title')}
          </h2>
          <p className="text-xl text-slate-200/90 max-w-3xl mx-auto font-light leading-relaxed">
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
                  className="group relative bg-slate-900/70 rounded-2xl border border-white/10 p-8 hover:border-white/30 hover:shadow-[0_22px_70px_rgba(8,14,35,0.55)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-slate-200/90 leading-relaxed font-light mb-8">
                      {feature.description}
                    </p>

                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center text-slate-200/90 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-white/40 rounded-full mr-3 group-hover:bg-sky-400 transition-colors"></div>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Video showcase under the advanced features */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_28px_80px_rgba(8,14,35,0.55)] border border-white/10" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/stock-footage-ai-powered-mock-up-cctv-footage-in-supermarket-people-shopping-in-a-grocery-store-multiple-camera%20(1).webm"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/panel1.jpeg"
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;