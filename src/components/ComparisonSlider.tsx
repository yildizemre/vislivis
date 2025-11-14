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
            <div className="absolute inset-0 bg-slate-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold text-slate-700 mb-4">{t('comparison.before.title')}</h3>
                  <ul className="text-left space-y-2 text-slate-600 text-sm">
                    <li>❌ {t('comparison.before.point1')}</li>
                    <li>❌ {t('comparison.before.point2')}</li>
                    <li>❌ {t('comparison.before.point3')}</li>
                    <li>❌ {t('comparison.before.point4')}</li>
                    <li>❌ Yüksek operasyonel maliyetler</li>
                    <li>❌ Yetersiz müşteri içgörüleri</li>
                  </ul>
                </div>
                
                {/* Before Stats */}
                <div className="flex gap-4 mt-auto">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                    <div className="text-2xl font-bold text-red-600">-40%</div>
                    <div className="text-xs text-slate-600">{t('comparison.stats.efficiency')}</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                    <div className="text-2xl font-bold text-blue-600">-60%</div>
                    <div className="text-xs text-slate-600">{t('comparison.stats.time')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* After Image (With AI) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('comparison.after.title')}</h3>
                  <ul className="text-left space-y-2 text-white text-sm">
                    <li>✅ {t('comparison.after.point1')}</li>
                    <li>✅ {t('comparison.after.point2')}</li>
                    <li>✅ {t('comparison.after.point3')}</li>
                    <li>✅ {t('comparison.after.point4')}</li>
                    <li>✅ Düşük operasyonel maliyetler</li>
                    <li>✅ Detaylı müşteri analitiği</li>
                  </ul>
                </div>
                
                {/* After Stats */}
                <div className="flex gap-4 mt-auto">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                    <div className="text-2xl font-bold text-green-600">+85%</div>
                    <div className="text-xs text-slate-700">{t('comparison.stats.revenue')}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-center">
                    <div className="text-2xl font-bold text-purple-600">+120%</div>
                    <div className="text-xs text-slate-700">{t('comparison.stats.roi')}</div>
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
