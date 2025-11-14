import { useEffect, useState } from 'react';
import { Bell, Eye, Settings, FileText, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GradientMesh from './GradientMesh';

const MobileSection = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Bell,
      title: t('mobile.notifications'),
      description: t('mobile.notifications.description')
    },
    {
      icon: Eye,
      title: t('mobile.monitoring'),
      description: t('mobile.monitoring.description')
    },
    {
      icon: FileText,
      title: t('mobile.reports'),
      description: t('mobile.reports.description')
    },
    {
      icon: Settings,
      title: t('mobile.alerts'),
      description: t('mobile.alerts.description')
    }
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [features.length]);

  return (
    <section className="py-24 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden text-white">
      {/* Gradient Mesh Background */}
      <GradientMesh variant="dark" opacity={0.5} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-6">
            {t('mobile.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {t('mobile.title')}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t('mobile.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Mobile App Mockup */}
            <div className="relative">
              <div className="relative flex flex-col md:flex-row justify-center lg:justify-end items-center gap-10">
                {/* Tablet frame */}
                <div className="hidden md:block relative">
                  <div className="w-[32rem] h-[22rem] xl:w-[36rem] xl:h-[24rem] bg-slate-950 rounded-[2.5rem] border-[9px] border-white/10 shadow-[0_32px_110px_rgba(8,15,35,0.6)] overflow-hidden">
                    <div className="absolute inset-5 bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10">
                      <img
                        src="/panel1.jpeg"
                        alt="Vislivis Tablet Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-[20rem] h-[42rem] xl:w-[22rem] xl:h-[44rem] bg-slate-950 rounded-[3.75rem] border-[10px] border-white/10 shadow-[0_40px_120px_rgba(8,15,35,0.75)] overflow-hidden">
                    {/* Screen */}
                    <div className="absolute inset-5 bg-slate-900 rounded-[2.75rem] overflow-hidden border border-white/10">
                      <img
                        src="/mobil.jpeg"
                        alt="Vislivis Mobile App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating notification */}
                  <div className="absolute -right-10 top-44 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-3 max-w-52">
                    <div className="flex items-center space-x-2 relative">
                      <div className="relative">
                        <span className="absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400"></span>
                      </div>
                      <div className="text-xs font-semibold text-white">Motion Alert</div>
                    </div>
                    <div className="text-xs text-white/70 mt-1">Front door activity detected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Information */}
            <div className="space-y-8">
              <div>
                <div className="space-y-6 mb-10">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-start space-x-4 group rounded-2xl transition-all duration-500 transform p-4 ${
                          activeFeature === index ? 'bg-white/[0.06] shadow-[0_18px_45px_rgba(15,118,214,0.32)] scale-[1.02]' : 'bg-white/0 scale-100'
                        }`}
                        onMouseEnter={() => setActiveFeature(index)}
                      >
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                          <IconComponent className={`w-6 h-6 ${activeFeature === index ? 'text-cyan-300' : 'text-cyan-200'}`} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-bold text-white">
                            {feature.title}
                          </h4>
                          <p className="text-white/70 font-light leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Download Information */}
                <div className="bg-white/10 rounded-2xl border border-white/20 p-8 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-white mb-4">
                    {t('mobile.distribution.title')}
                  </h4>
                  <p className="text-white/70 font-light mb-6 leading-relaxed">
                    {t('mobile.distribution.description')}
                  </p>
                   
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-white/70">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{t('mobile.distribution.ios')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/70">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{t('mobile.distribution.android')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/70">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">{t('mobile.distribution.mdm')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/70">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-medium">{t('mobile.distribution.branding')}</span>
                    </div>
                  </div>
                   
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <button
                      onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
                      className="flex items-center px-5 py-3 rounded-xl border border-white/20 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80 text-white shadow-lg hover:shadow-[0_20px_45px_rgba(59,130,246,0.35)] hover:border-white/40 transition-all duration-300"
                    >
                      <div className="w-8 h-8 flex items-center justify-center mr-3">
                        <span className="text-2xl"></span>
                      </div>
                      <div className="text-left leading-tight">
                        <div className="text-xs uppercase text-white/60 tracking-widest">Download on the</div>
                        <div className="text-lg font-semibold text-white">App Store</div>
                      </div>
                    </button>
                    <button
                      onClick={() => window.open('https://play.google.com/', '_blank')}
                      className="flex items-center px-5 py-3 rounded-xl border border-white/20 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80 text-white shadow-lg hover:shadow-[0_20px_45px_rgba(45,212,191,0.35)] hover:border-white/40 transition-all duration-300"
                    >
                      <div className="w-8 h-8 flex items-center justify-center mr-3 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-7 h-7"
                          fill="currentColor"
                        >
                          <path d="M325.3 234.3 104.9 13.4C97.4 5.9 87.3 1.4 76.6.2L297.5 221.2l27.8 27.8z"/>
                          <path d="M467.9 227.8 406.3 192 351.5 236.8l54.8 54.8z"/>
                          <path d="M54.3 0C24.3.4 0 24.9 0 55.1v401.9c0 31.3 25.7 55.6 55.1 55.1 11.5-.2 22.4-4 31.5-10.8l266.1-184.1-29.2-29.2L54.3 0z"/>
                          <path d="M347.1 275.4 297.5 325 76.6 505.8c10.6-1.2 20.6-5.7 28.1-13.1L325.3 272l21.8 3.4z"/>
                          <path d="M406.3 320l61.6-35.8c10.1-5.9 16.8-16.4 18-28.1l-124.4 72.3z"/>
                        </svg>
                      </div>
                      <div className="text-left leading-tight">
                        <div className="text-xs uppercase text-white/60 tracking-widest">Get it on</div>
                        <div className="text-lg font-semibold text-white">Google Play</div>
                      </div>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 text-slate-950 font-semibold rounded-xl shadow-[0_18px_35px_rgba(59,130,246,0.35)] hover:shadow-[0_24px_55px_rgba(14,116,144,0.45)] transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {t('mobile.distribution.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;