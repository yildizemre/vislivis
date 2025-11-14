import React from 'react';
import { Shield, Heart, Home, Factory, AlertTriangle, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DetectionCategoriesSection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Shield,
      title: t('categories.perimeter.title'),
      description: t('categories.perimeter.description'),
      features: ['Motion detection', 'Facial recognition', 'Unauthorized access alerts', 'Behavioral analysis'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: t('categories.healthcare.title'),
      description: t('categories.healthcare.description'),
      features: ['Fall detection', 'Medication compliance', 'Emergency response', 'Activity monitoring'],
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Home,
      title: t('categories.residential.title'),
      description: t('categories.residential.description'),
      features: ['Smart home integration', 'Package detection', 'Pet monitoring', 'Environmental alerts'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Factory,
      title: t('categories.industrial.title'),
      description: t('categories.industrial.description'),
      features: ['PPE compliance', 'Equipment monitoring', 'Safety violations', 'Productivity analytics'],
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: AlertTriangle,
      title: t('categories.emergency.title'),
      description: t('categories.emergency.description'),
      features: ['Fire detection', 'Medical emergencies', 'Security breaches', 'Natural disasters'],
      color: 'from-red-600 to-rose-700'
    },
    {
      icon: Activity,
      title: t('categories.behavioral.title'),
      description: t('categories.behavioral.description'),
      features: ['Crowd analysis', 'Suspicious behavior', 'Traffic patterns', 'Operational insights'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-gray-50 relative overflow-hidden">
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
            AI Detection Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('categories.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                        <span className="font-medium">{feature}</span>
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

export default DetectionCategoriesSection;