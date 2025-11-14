import { useState } from 'react';

import { TrendingUp, Brain, Cloud, Calendar, Target, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AnalyticsDashboardSection = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section id="analytics" className="py-24 md:py-28 bg-gradient-to-br from-white via-blue-50 to-slate-50 relative overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.08) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(15, 23, 42, 0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Brain className="w-4 h-4 mr-2" />
            {t('analytics.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6 tracking-tight pb-2">
            {t('analytics.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('analytics.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Dashboard Preview Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            <div
              className="group relative overflow-hidden rounded-3xl border-2 border-white/50 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 cursor-pointer backdrop-blur-sm bg-white/80"
              onClick={() => setSelectedImage("/panel1.jpeg")}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src="/panel1.jpeg"
                alt="Vislivis Dashboard Analytics"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className={`absolute left-6 right-6 bottom-6 rounded-2xl bg-white/90 backdrop-blur-sm text-slate-900 p-4 shadow-lg transition-all duration-500 ${
                  hoveredCard === 0 ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.25em] mb-2">
                  {t('analytics.features.insightTitle1')}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 font-medium">
                    {t('analytics.features.point1')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 font-medium">
                    {t('analytics.features.point2')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 font-medium">
                    {t('analytics.features.point3')}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-3xl border-2 border-white/50 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 cursor-pointer backdrop-blur-sm bg-white/80"
              onClick={() => setSelectedImage("/panel2.jpg")}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <img
                src="/panel2.jpg"
                alt="Vislivis Real-time Monitoring"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className={`absolute left-6 right-6 bottom-6 rounded-2xl bg-white/90 backdrop-blur-sm text-slate-900 p-4 shadow-lg transition-all duration-500 ${
                  hoveredCard === 1 ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.25em] mb-2">
                  {t('analytics.features.insightTitle2')}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 font-medium">
                    {t('analytics.features.point4')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 font-medium">
                    {t('analytics.features.point5')}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 font-medium">
                    {t('analytics.features.point6')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-xl text-slate-600 text-center max-w-4xl mx-auto leading-relaxed font-light">
              {t('analytics.description')}
            </p>
          </div>

          {/* Top 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {analyticsFeatures.slice(0, 3).map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-white/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>

                    <div className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {analyticsFeatures.slice(3, 5).map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index + 3}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-white/50 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>

                    <div className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
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