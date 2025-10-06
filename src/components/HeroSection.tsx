import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            {t('hero.badge')}
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
            <span className="block">{t('hero.title')}</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.description')}
          </p>
          
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero.tagline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span>{t('hero.startTrial')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 border-2 border-gray-200 text-gray-700 text-lg font-semibold rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center space-x-3">
              <Play className="w-5 h-5" />
              <span>{t('hero.watchDemo')}</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">91.8%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{t('hero.accuracy')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{t('hero.realTime')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">12+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{t('hero.stores')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;