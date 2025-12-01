import { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ExitIntentPopup = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasShown) {
            // IntegrationsSection görünür olduğunda popup'ı göster
            setTimeout(() => {
              setIsVisible(true);
              setHasShown(true);
            }, 500); // Küçük bir gecikme ile daha yumuşak görünüm
          }
        });
      },
      { threshold: 0.3 } // Bölümün %30'u görünür olduğunda tetikle
    );

    const integrationsSection = document.getElementById('integrations');
    if (integrationsSection) {
      observer.observe(integrationsSection);
    }

    return () => {
      if (integrationsSection) {
        observer.unobserve(integrationsSection);
      }
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTA = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg mx-4 p-8 md:p-10 animate-in zoom-in-95 duration-500">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('exitIntent.title')}
          </h2>

          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            {t('exitIntent.description')}
          </p>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 mb-6">
            <ul className="space-y-3 text-left">
              {[
                t('exitIntent.benefit1'),
                t('exitIntent.benefit2'),
                t('exitIntent.benefit3')
              ].map((benefit, index) => (
                <li key={index} className="flex items-start text-slate-700">
                  <span className="inline-block w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleCTA}
            className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t('exitIntent.button')}
          </button>

          <p className="text-sm text-slate-500 mt-4">
            {t('exitIntent.note')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
