import { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const HeroSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  const accuracy = useCountUp({ end: 95.2, duration: 2500, decimals: 1, suffix: '%' });
  const stores = useCountUp({ end: 140, duration: 2000, suffix: '+' });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home_bg.png"
          alt="Vislivis Background"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-80px)]">
          
          {/* Left Column: Text Content - Wider (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Logo & Badge Group */}
            <div className="space-y-6">
              <img src="/logobeyaz.png" alt="Vislivis" className="h-12 w-auto mb-8" />
              
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                Yapay Zeka Destekli Retail Analitik Platformu
              </div>
            </div>

            {/* Main Heading - Larger & spread out */}
            <div>
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
                <span className="block">AI Destekli</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00cadc] to-blue-500 filter drop-shadow-lg">
                  Retail Analitik
                </span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-3xl font-light leading-relaxed">
                Retail operasyonlarınızı dönüştürün, satışları ve müşteri memnuniyetini maksimize edin.
              </p>
            </div>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed border-l-4 border-[#00cadc]/30 pl-6">
              Müşteri davranışlarını takip edin, mağaza performansını optimize edin ve gerçek zamanlı içgörülerle satışları artırın.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-10 py-5 bg-[#00cadc] hover:bg-cyan-500 text-white text-lg font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,202,220,0.3)] hover:shadow-[0_0_30px_rgba(0,202,220,0.5)] hover:-translate-y-1"
              >
                <span>Ücretsiz Deneyin</span>
                <ArrowRight className="w-6 h-6" />
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                className="px-10 py-5 border border-white/20 hover:bg-white/10 text-white text-lg font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:-translate-y-1 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                   <Play className="w-4 h-4 fill-current" />
                </div>
                <span>İzleyin</span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-3xl">
              <div ref={accuracy.ref}>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{accuracy.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Doğruluk</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Gerçek Zamanlı</div>
              </div>
              <div ref={stores.ref}>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stores.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Aktif Mağaza</div>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Frame - Narrower (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 relative">
             {/* Decorative Elements */}
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00cadc]/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
             <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none"></div>
             
             {/* Image Container */}
             <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 transform rotate-2 hover:rotate-0 transition-transform duration-700 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent z-10"></div>
                <img 
                  src="/costumer_home.jpeg" 
                  alt="Retail Analytics Dashboard" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Floating UI Elements on Image */}
                <div className="absolute bottom-8 left-8 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-lg">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </div>
                      <span className="text-white text-sm font-bold tracking-wide">Sistem Aktif</span>
                   </div>
                   <div className="text-white/70 text-xs font-medium">Veri akışı sağlanıyor...</div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4 p-4">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#00cadc] transition-colors group"
            >
              <span className="text-sm font-medium mr-2 opacity-0 group-hover:opacity-100 transition-opacity">Kapat</span>
              <X className="w-8 h-8 inline-block" />
            </button>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/AOV6bqpCV6k?si=IZxCfw4yzYCDY5f_&autoplay=1"
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