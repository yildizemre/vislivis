import { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCountUp } from '../hooks/useCountUp';
import ParallaxLayer from './ParallaxLayer';

const HeroSection = () => {
  const { t } = useLanguage();
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  const accuracy = useCountUp({ end: 95.2, duration: 2500, decimals: 1, suffix: '%' });
  const stores = useCountUp({ end: 140, duration: 2000, suffix: '+' });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/stock-footage-ai-powered-mock-up-cctv-footage-in-supermarket-people-shopping-in-a-grocery-store-multiple-camera.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/panel1.jpeg"
      />
      {/* Dark overlay for readability over video */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxLayer speed={0.2}>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.4}>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.3}>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </ParallaxLayer>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl lg:max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl p-6 md:p-10 space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            {t('hero.badge')}
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
            <span className="block">{t('hero.title')}</span>
            <span className="block text-[#00cadc]">
              {t('hero.subtitle')}
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('hero.tagline')}
          </p>

          {/* CTA Buttons - Mobil uyumlu */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 w-full max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#00cadc] text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00cadc] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <span>{t('hero.startTrial')}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setShowVideoModal(true)}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/60 text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00cadc] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t('hero.watchDemo')}</span>
            </button>
          </div>

          {/* Stats - Mobil uyumlu */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto pt-8 sm:pt-12 md:pt-16 px-4">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20" ref={accuracy.ref}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{accuracy.value}</div>
              <div className="text-xs text-white/90 uppercase tracking-wider font-semibold">{t('hero.accuracy')}</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-xs text-white/90 uppercase tracking-wider font-semibold">{t('hero.realTime')}</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20" ref={stores.ref}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">{stores.value}</div>
              <div className="text-xs text-white/90 uppercase tracking-wider font-semibold">{t('hero.stores')}</div>
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

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/AOV6bqpCV6k?si=IZxCfw4yzYCDY5f_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;