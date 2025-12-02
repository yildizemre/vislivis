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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
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
            className="relative w-full h-[650px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none ring-1 ring-slate-200"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Common Layout Structure for perfect alignment */}
            {/* Before Image (Without AI) */}
            <div className="absolute inset-0 bg-slate-100">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-slate-200 p-8 relative overflow-hidden">
                  {/* Header */}
                  <div className="text-center mb-8 pb-6 border-b border-slate-100">
                     <div className="w-20 h-20 bg-red-50 rounded-2xl mx-auto mb-4 flex items-center justify-center transform rotate-3">
                        <span className="text-4xl grayscale opacity-70">📉</span>
                     </div>
                     <h3 className="text-2xl font-bold text-slate-700 mb-2">{t('comparison.before.title')}</h3>
                     <p className="text-slate-400 text-sm">Geleneksel Yöntemler</p>
                  </div>

                  {/* Content List - Same height/spacing as After */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center p-3 bg-red-50/50 rounded-xl border border-red-100/50">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 text-red-500 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </div>
                      <span className="text-slate-600 font-medium">Manuel Veri Toplama</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50/50 rounded-xl border border-red-100/50">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 text-red-500 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </div>
                      <span className="text-slate-600 font-medium">Gecikmeli İçgörüler</span>
                    </div>
                    <div className="flex items-center p-3 bg-red-50/50 rounded-xl border border-red-100/50">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 text-red-500 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </div>
                      <span className="text-slate-600 font-medium">Tahmine Dayalı Kararlar</span>
                    </div>
                  </div>

                  {/* Stats Footer */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl text-center">
                      <div className="text-xl font-bold text-slate-400">-40%</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Verimlilik</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl text-center">
                       <div className="text-xl font-bold text-slate-400">-60%</div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Hız</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After Image (With AI) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 opacity-40">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-125 brightness-100"></div>
                 <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/30 blur-[100px] rounded-full animate-pulse"></div>
                 <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-cyan-500/30 blur-[100px] rounded-full animate-pulse delay-1000"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400"></div>
                  
                  {/* Header */}
                  <div className="text-center mb-8 pb-6 border-b border-white/10">
                     <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-cyan-500/30 transform -rotate-3">
                        <span className="text-4xl">🚀</span>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">{t('comparison.after.title')}</h3>
                     <p className="text-blue-200 text-sm">AI Destekli Analitik</p>
                  </div>

                  {/* Content List */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 text-green-400 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-white font-medium">Otomatik Veri İşleme</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 text-green-400 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-white font-medium">Gerçek Zamanlı İçgörü</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 text-green-400 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-white font-medium">Veriye Dayalı Büyüme</span>
                    </div>
                  </div>

                  {/* Stats Footer */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl text-center border border-blue-500/20">
                      <div className="text-xl font-bold text-cyan-300">+85%</div>
                      <div className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mt-1">Gelir Artışı</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl text-center border border-purple-500/20">
                       <div className="text-xl font-bold text-purple-300">120%</div>
                       <div className="text-[10px] font-bold text-purple-200 uppercase tracking-wider mt-1">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center ring-4 ring-black/5">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-slate-400"></div>
                  <div className="w-0.5 h-4 bg-slate-400"></div>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 z-10">
               <span className="px-4 py-2 bg-white/90 backdrop-blur shadow-lg rounded-lg text-slate-900 text-sm font-bold border border-slate-200">
                  {t('comparison.before.label')}
               </span>
            </div>
            <div className="absolute top-6 right-6 z-10">
               <span className="px-4 py-2 bg-black/50 backdrop-blur shadow-lg rounded-lg text-white text-sm font-bold border border-white/20">
                  {t('comparison.after.label')}
               </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;
