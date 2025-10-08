import React, { useState } from 'react';
import { BarChart3, TrendingUp, Brain, Cloud, Calendar, Target, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AnalyticsDashboardSection = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const analyticsFeatures = [
    {
      icon: Calendar,
      title: t('analytics.comparison.title'),
      description: t('analytics.comparison.description'),
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: t('analytics.products.title'),
      description: t('analytics.products.description'),
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Target,
      title: t('analytics.kpi.title'),
      description: t('analytics.kpi.description'),
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Cloud,
      title: t('analytics.weather.title'),
      description: t('analytics.weather.description'),
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Brain,
      title: t('analytics.ai.title'),
      description: t('analytics.ai.description'),
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="analytics" className="py-32 bg-white relative overflow-hidden">
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
            {t('analytics.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('analytics.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('analytics.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Dashboard Preview Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage("/panel1.jpeg")}
            >
              <img
                src="/panel1.jpeg"
                alt="Vislivis Dashboard Analytics"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage("/panel2.jpg")}
            >
              <img
                src="/panel2.jpg"
                alt="Vislivis Real-time Monitoring"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              {t('analytics.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>

                    <div className="text-gray-600 leading-relaxed font-light whitespace-pre-line">
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Dashboard Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AnalyticsDashboardSection;