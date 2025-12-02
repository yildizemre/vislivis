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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/80 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              Yapay Zeka Destekli Retail Analitik Platformu
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-4">
                <span className="block">AI Destekli</span>
                <span className="block text-[#00cadc]">Retail Analitik</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
                Retail operasyonlarınızı dönüştürün, satışları ve müşteri memnuniyetini maksimize edin.
              </p>
            </div>

            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Müşteri davranışlarını takip edin, mağaza performansını optimize edin ve gerçek zamanlı içgörülerle satışları artırın.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-[#00cadc] hover:bg-cyan-500 text-white text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1"
              >
                <span>Ücretsiz Deneyin</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setShowVideoModal(true)}
                className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white text-lg font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:-translate-y-1"
              >
                <Play className="w-5 h-5" />
                <span>İzleyin</span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div ref={accuracy.ref}>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{accuracy.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Doğruluk</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Gerçek Zamanlı</div>
              </div>
              <div ref={stores.ref}>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stores.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Aktif Mağaza</div>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Frame */}
          <div className="relative hidden lg:block">
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00cadc]/20 rounded-full blur-3xl animate-pulse"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
             
             {/* Image Container */}
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="/costumer_home.jpeg" 
                  alt="Retail Analytics Dashboard" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating UI Elements on Image */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">Sistem Aktif</span>
                   </div>
                   <div className="text-white/80 text-xs">Veri akışı sağlanıyor...</div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#00cadc] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
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