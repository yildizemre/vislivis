import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ComparisonSlider = () => {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            {t('comparison.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image (Without AI) */}
            <div className="absolute inset-0 bg-slate-100">
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="relative z-10 bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-xl max-w-md w-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📉</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{t('comparison.before.title')}</h3>
                    <div className="h-1 w-12 bg-red-400 mx-auto rounded-full"></div>
                  </div>
                  
                  <ul className="space-y-3 text-slate-600 mb-8">
                    <li className="flex items-center bg-white/50 p-2 rounded-lg border border-red-100">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 text-xs">❌</span>
                      <span className="text-sm font-medium">{t('comparison.before.point1')}</span>
                    </li>
                    <li className="flex items-center bg-white/50 p-2 rounded-lg border border-red-100">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 text-xs">❌</span>
                      <span className="text-sm font-medium">{t('comparison.before.point2')}</span>
                    </li>
                    <li className="flex items-center bg-white/50 p-2 rounded-lg border border-red-100">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 text-xs">❌</span>
                      <span className="text-sm font-medium">{t('comparison.before.point3')}</span>
                    </li>
                  </ul>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-3 rounded-xl text-center border border-red-100">
                      <div className="text-xl font-bold text-red-600">-40%</div>
                      <div className="text-xs text-red-400 font-semibold uppercase">{t('comparison.stats.efficiency')}</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl text-center border border-slate-200">
                      <div className="text-xl font-bold text-slate-600">-60%</div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">{t('comparison.stats.time')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After Image (With AI) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#00cadc] to-blue-600"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {/* Abstract Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-125 brightness-100"></div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-2xl max-w-md w-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-inner border border-white/30">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t('comparison.after.title')}</h3>
                    <div className="h-1 w-12 bg-white mx-auto rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                  </div>
                  
                  <ul className="space-y-3 text-white mb-8">
                    <li className="flex items-center bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <span className="w-6 h-6 bg-[#00cadc] rounded-full flex items-center justify-center mr-3 text-xs shadow-lg border border-white/30">✓</span>
                      <span className="text-sm font-medium text-white/90">{t('comparison.after.point1')}</span>
                    </li>
                    <li className="flex items-center bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <span className="w-6 h-6 bg-[#00cadc] rounded-full flex items-center justify-center mr-3 text-xs shadow-lg border border-white/30">✓</span>
                      <span className="text-sm font-medium text-white/90">{t('comparison.after.point2')}</span>
                    </li>
                    <li className="flex items-center bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <span className="w-6 h-6 bg-[#00cadc] rounded-full flex items-center justify-center mr-3 text-xs shadow-lg border border-white/30">✓</span>
                      <span className="text-sm font-medium text-white/90">{t('comparison.after.point3')}</span>
                    </li>
                  </ul>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 p-3 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-xl font-bold text-[#00cadc]">+85%</div>
                      <div className="text-xs text-slate-600 font-semibold uppercase">{t('comparison.stats.revenue')}</div>
                    </div>
                    <div className="bg-white/90 p-3 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform">
                      <div className="text-xl font-bold text-purple-600">+120%</div>
                      <div className="text-xs text-slate-600 font-semibold uppercase">{t('comparison.stats.roi')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-slate-400"></div>
                  <div className="w-0.5 h-4 bg-slate-400"></div>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-lg text-white text-sm font-semibold">
              {t('comparison.before.label')}
            </div>
            <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-slate-900 text-sm font-semibold">
              {t('comparison.after.label')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;
