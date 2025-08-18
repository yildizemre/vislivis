import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Shield, 
  Brain, 
  BarChart3, 
  Camera, 
  Users, 
  TrendingUp, 
  Check, 
  Star, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Building2, 
  Factory,
  Smartphone, 
  CheckCircle, 
  ArrowRight, 
  Home,
  Heart,
  AlertTriangle,
  Activity,
  Download,
  Apple,
  Play,
  ChevronDown,
  ChevronUp,
  Zap,
  Globe,
  Lock,
  Clock,
  Wifi,
  Settings,
  Plus,
  Minus
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentText, setCurrentText] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const dynamicTexts = [
    "Annem düştü mü?",
    "Buzdolabını açtı mı?", 
    "İşçiler baret takıyor mu?",
    "Çocuk ağlıyor mu?",
    "Hırsız girdi mi?"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
      window.removeEventListener('scroll', handleScroll);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden relative">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        
        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mix-blend-screen filter blur-2xl opacity-30 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400 animate-spin-slow"
            style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
          ></div>
          <div 
            className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400 animate-pulse"
            style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px) rotate(${scrollY * 0.05}deg)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"
            style={{ transform: `translateX(${Math.cos(scrollY * 0.01) * 30}px)` }}
          ></div>
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`,
                transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 15}px)`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
          
          {/* Moving Lines */}
          <div 
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
            style={{ transform: `translateX(${Math.sin(scrollY * 0.005) * 100}px)` }}
          ></div>
          <div 
            className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-20"
            style={{ transform: `translateX(${Math.cos(scrollY * 0.003) * -80}px)` }}
          ></div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/30 backdrop-blur-xl shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Vislivis</span>
                <div className="text-xs text-gray-300 font-medium">AI Powered Security</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {['Nasıl Çalışır', 'Özellikler', 'Mobil', 'Fiyatlandırma', 'Hakkımızda'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('ı', 'i'))} 
                  className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group py-2"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Panel
              </button>
            </nav>

            <button 
              className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg rounded-b-2xl">
              <div className="px-6 py-6 space-y-4">
                {['Nasıl Çalışır', 'Özellikler', 'Mobil', 'Fiyatlandırma', 'Hakkımızda'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-').replace('ı', 'i'))} 
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium py-2"
                  >
                    {item}
                  </button>
                ))}
                <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium mt-4 hover:bg-blue-700 transition-all duration-300">
                  Panel
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Status Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Shield className="w-4 h-4 text-gray-300" />
                <span className="text-white font-medium">50+ Algılama Türü</span>
                <div className="w-1 h-4 bg-white/20 mx-2"></div>
                <Zap className="w-4 h-4 text-gray-300" />
                <span className="text-white font-medium">0.2 Saniye Yanıt</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">Her Anınız</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Kontrol Altında</span>
            </h1>
            
            {/* Dynamic Text */}
            <div className="text-2xl md:text-3xl font-semibold mb-8 h-16 flex items-center justify-center">
              <span className="text-gray-300">"</span>
              <span 
                key={currentText}
                className="text-blue-400 mx-2 animate-pulse"
              >
                {dynamicTexts[currentText]}
              </span>
              <span className="text-gray-300">" - Her şeyi takip eder.</span>
            </div>
            
            {/* Description */}
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              AI destekli görüntü analizi ile ev, işyeri ve fabrikalarınızı akıllı hale getirin. 
              Güvenlik, analitik ve iş süreçlerinizi optimize edin.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => scrollToSection('fiyatlandirma')}
                className="group bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ücretsiz Dene
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('nasil-calisir')}
                className="group text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:shadow-lg transition-all duration-300 flex items-center hover:border-white/20"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Nasıl Çalışır?
              </button>
            </div>

            {/* Hero Visual Card */}
            <div className="relative max-w-6xl mx-auto">
              <div 
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                style={{ transform: `translateY(${Math.sin(scrollY * 0.002) * 10}px)` }}
              >
                <div className="aspect-video bg-black/30 rounded-2xl shadow-inner relative overflow-hidden border border-white/10">
                  <img 
                    src="/dashboardana.png" 
                    alt="Canlı Demo - AI algılama ve bildirim sistemi" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  
                  {/* Floating Notifications */}
                  <div 
                    className="absolute top-4 right-4 bg-green-500/10 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-green-400/20"
                    style={{ 
                      transform: `translateY(${Math.sin(Date.now() * 0.003) * 5}px)`,
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-white">Annem yemek yedi ✓</span>
                    </div>
                  </div>
                  
                  <div 
                    className="absolute bottom-4 left-4 bg-blue-500/10 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-blue-400/20"
                    style={{ 
                      transform: `translateY(${Math.cos(Date.now() * 0.004) * 5}px)`,
                      animation: 'float 3s ease-in-out infinite 1.5s'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-white">İşçi baret taktı ✓</span>
                    </div>
                  </div>
                  
                  {/* Moving Data Streams */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent opacity-30"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + i * 10}%`,
                          transform: `translateY(${Math.sin(Date.now() * 0.002 + i) * 20}px)`,
                          animation: `dataStream 2s linear infinite ${i * 0.4}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="nasil-calisir" className="py-20 bg-gradient-to-br from-gray-900/80 to-black/80 relative backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4 mr-2 text-gray-300" />
              Kurulum Süreci
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              3 Basit Adımda Huzura Kavuşun
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Size özel kamera sistemi kurar, mevcut kameralarınıza erişim sağlarız. Marka-model fark etmiyor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Camera,
                title: "1. Kamera Kurulumu",
                description: "Size özel kamera sistemi kurarız veya mevcut kameralarınıza erişim sağlarız. Tüm markalar desteklenir.",
                color: "bg-blue-600"
              },
              {
                icon: Brain,
                title: "2. AI Eğitimi",
                description: "Sizin için önemli olan durumları tanımlarsınız. Sistem bu durumları öğrenir ve takip etmeye başlar.",
                color: "bg-purple-600"
              },
              {
                icon: Smartphone,
                title: "3. Anında Bildirim",
                description: "Tanımladığınız bir durum gerçekleştiğinde 0.2 saniye içinde telefonunuza bildirim gelir.",
                color: "bg-indigo-600"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="text-center group"
                style={{ 
                  transform: `translateY(${Math.sin(scrollY * 0.001 + index) * 5}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className="relative mb-8">
                  <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-blue-500/10 animate-pulse`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Categories */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2 text-gray-300" />
              Algılama Kategorileri
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              50+ Farklı Algılama Türü
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Evden fabrikaya, okuldan hastaneye - her ortam için özel algılama türleri
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Çocuk Güvenliği 👶",
                items: ["Çocuk ağlıyor mu?", "Düştü mü?", "Bakıcı nasıl bakıyor?", "Yemek yedi mi?"],
                bgColor: "bg-white/5 backdrop-blur-sm border border-white/10",
                iconColor: "bg-blue-600"
              },
              {
                icon: Heart,
                title: "Yaşlı Bakımı 👵",
                items: ["Annem düştü mü?", "İlaç aldı mı?", "Yemek yedi mi?", "Hareket ediyor mu?"],
                bgColor: "bg-white/5 backdrop-blur-sm border border-white/10",
                iconColor: "bg-purple-600"
              },
              {
                icon: Home,
                title: "Ev Güvenliği 🏠",
                items: ["Buzdolabını açtı mı?", "Kapı açık mı?", "Yabancı biri var mı?", "Hırsız girdi mi?"],
                bgColor: "bg-white/5 backdrop-blur-sm border border-white/10",
                iconColor: "bg-green-600"
              },
              {
                icon: Factory,
                title: "Endüstriyel Güvenlik 🏭",
                items: ["İşçiler baret takıyor mu?", "Yelek giyiyor mu?", "Güvenlik kuralları?", "Vardiya takibi"],
                bgColor: "bg-white/5 backdrop-blur-sm border border-white/10",
                iconColor: "bg-orange-600"
              },
              {
                icon: AlertTriangle,
                title: "Acil Durumlar 🚨",
                items: ["Yangın çıktı mı?", "Duman var mı?", "Gaz kaçağı?", "Sel/su baskını"],
                bgColor: "bg-white/5 backdrop-blur-sm border border-white/10",
                iconColor: "bg-red-600"
              },
              {
                icon: Activity,
                title: "Sağlık İzleme 💊",
                items: ["Nabız takibi", "Düşme algılama", "Aktivite seviyesi", "Uyku kalitesi"],
                bgColor: "bg-white/5 backdrop-blur-sm border border-white/10",
                iconColor: "bg-indigo-600"
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className={`${category.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                style={{ 
                  transform: `translateY(${Math.sin(scrollY * 0.001 + index * 0.5) * 3}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className={`w-16 h-16 ${category.iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm font-medium hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="ozellikler" className="py-20 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2 text-gray-300" />
              Özellikler
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Akıllı Teknoloji ile Güçlendirilmiş
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Her detayı düşünülmüş, kullanıcı dostu arayüz ve güçlü AI altyapısı
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/5 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/10">
              {['AI Algılama', 'Analitik', 'Bildirimler'].map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveFeature(index)}
                  className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-500 ${activeFeature === 0 ? 'opacity-100' : 'opacity-0 absolute'}`}>
              {activeFeature === 0 && (
                <>
                  <h3 className="text-4xl font-bold text-white mb-6">Gelişmiş AI Algılama Motoru 🧠</h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    50+ farklı durum ve nesneyi gerçek zamanlı olarak algılar. Makine öğrenmesi ile 
                    sürekli kendini geliştiren sistem, yanlış alarm oranını minimum seviyede tutar.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: Eye, text: "Gerçek zamanlı görüntü analizi", color: "bg-blue-600" },
                      { icon: Brain, text: "Makine öğrenmesi ile sürekli gelişim", color: "bg-purple-600" },
                      { icon: Shield, text: "%99.5 doğruluk oranı", color: "bg-green-600" },
                      { icon: Zap, text: "0.2 saniye yanıt süresi", color: "bg-orange-600" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className={`w-10 h-10 ${feature.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className={`transition-all duration-500 ${activeFeature === 1 ? 'opacity-100' : 'opacity-0 absolute'}`}>
              {activeFeature === 1 && (
                <>
                  <h3 className="text-4xl font-bold text-white mb-6">Kapsamlı Analitik Dashboard 📊</h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Günlük, haftalık aktivite yoğunluğunu, en hareketli saatleri ve olay kategorilerini 
                    grafiklerle takip edin. Ailenizin veya çalışanlarınızın rutinini anlayın.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: TrendingUp, text: "Detaylı aktivite grafikleri", color: "bg-blue-600" },
                      { icon: Brain, text: "Trend analizi ve öngörüler", color: "bg-purple-600" },
                      { icon: Settings, text: "Özelleştirilebilir raporlar", color: "bg-green-600" },
                      { icon: Globe, text: "Çoklu lokasyon desteği", color: "bg-orange-600" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className={`w-10 h-10 ${feature.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className={`transition-all duration-500 ${activeFeature === 2 ? 'opacity-100' : 'opacity-0 absolute'}`}>
              {activeFeature === 2 && (
                <>
                  <h3 className="text-4xl font-bold text-white mb-6">Anında Akıllı Uyarı Sistemi 📱</h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Gün içinde olan her olayı saat ve dakika bilgisiyle rapor olarak görün. 
                    "Kahvaltı hazırladı", "Baret taktı", "İlaç aldı" gibi tüm aktiviteler kayıt altında.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: Clock, text: "Zaman damgalı detaylı raporlar", color: "bg-blue-600" },
                      { icon: Smartphone, text: "Push bildirim + SMS + Email", color: "bg-purple-600" },
                      { icon: AlertTriangle, text: "Acil durum otomatik araması", color: "bg-red-600" },
                      { icon: Lock, text: "256-bit güvenlik şifrelemesi", color: "bg-green-600" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className={`w-10 h-10 ${feature.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg`}>
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            {/* Feature Visual */}
            <div className="relative">
              <div 
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                style={{ transform: `translateY(${Math.sin(scrollY * 0.002) * 8}px)` }}
              >
                <div className="aspect-video bg-black/30 rounded-2xl shadow-lg relative overflow-hidden border border-white/10">
                  {activeFeature === 0 && (
                    <img 
                      src="/dashboard1.jpeg" 
                      alt="AI Detection Dashboard" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}
                  {activeFeature === 1 && (
                    <img 
                      src="/dashboard2.jpeg" 
                      alt="Analytics Dashboard" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}
                  {activeFeature === 2 && (
                    <img 
                      src="/detect-instrusion -and-getalert-realtime.jpg" 
                      alt="Notifications Dashboard" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}
                  
                  {/* Live Indicator */}
                  <div className="absolute top-4 left-4 bg-green-500/10 backdrop-blur-sm rounded-lg p-2 shadow-md border border-green-400/20">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      <span className="text-xs font-medium text-white">Live</span>
                    </div>
                  </div>
                  
                  {/* Scanning Line Effect */}
                  <div 
                    className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"
                    style={{ 
                      top: `${(Math.sin(Date.now() * 0.005) + 1) * 50}%`,
                      animation: 'scanLine 4s linear infinite'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps */}
      <section id="mobil" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4 mr-2 text-gray-300" />
              Mobil Uygulamalar
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Her Yerden Kontrol Edin 📱
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              iOS ve Android uygulamalarımızla ailenizi her yerden takip edin
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Smartphone, title: "Anında Push Bildirimleri", desc: "0.2 saniye yanıt süresi ile anında haberdar olun", color: "bg-blue-600" },
                  { icon: Eye, title: "Canlı Görüntü İzleme", desc: "HD kalite, gecikme olmadan canlı izleyin", color: "bg-purple-600" },
                  { icon: Settings, title: "Uzaktan Ayar Yönetimi", desc: "Tüm ayarları mobil cihazınızdan değiştirin", color: "bg-indigo-600" },
                  { icon: TrendingUp, title: "Detaylı Raporlar", desc: "Günlük, haftalık, aylık raporları görüntüleyin", color: "bg-green-600" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group hover:bg-white/10">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{feature.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#" className="group flex items-center justify-center bg-gray-800 text-white px-6 py-4 rounded-2xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <Apple className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="group flex items-center justify-center bg-gray-800 text-white px-6 py-4 rounded-2xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>iOS 12.0+ desteklenir</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Android 8.0+ desteklenir</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Lock className="w-4 h-4 text-gray-400 mr-2" />
                  <span>256-bit SSL güvenlik ile korunur 🛡️</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-500"
                style={{ transform: `translateY(${Math.sin(scrollY * 0.002 + 1) * 6}px)` }}
              >
                <div className="aspect-[3/4] bg-black/30 rounded-3xl shadow-xl flex items-center justify-center relative overflow-hidden border border-white/10">
                  <img 
                    src="/ambient-ai-unveils-computer-vision-intelligence-for-physical-security-920x533.jpg" 
                    alt="Vislivis Mobile - iOS & Android" 
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  
                  {/* Phone Screen Elements */}
                  <div className="absolute top-8 left-8 right-8 bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        <span className="text-xs font-medium text-white">5 Kamera Aktif</span>
                      </div>
                      <Wifi className="w-4 h-4 text-gray-300" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                      <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full w-3/4 animate-pulse animation-delay-500"></div>
                      <div className="h-1 bg-gradient-to-r from-pink-400 to-red-500 rounded-full w-1/2 animate-pulse animation-delay-1000"></div>
                    </div>
                  </div>
                  
                  {/* Floating App Icons */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-blue-400 rounded opacity-20"
                      style={{
                        right: `${20 + i * 15}%`,
                        bottom: `${30 + i * 10}%`,
                        transform: `translateY(${Math.sin(Date.now() * 0.003 + i) * 10}px)`,
                        animation: `float 3s ease-in-out infinite ${i * 0.7}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="fiyatlandirma" className="py-20 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2 text-gray-300" />
              Fiyatlandırma
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              İhtiyacınıza Uygun Paketi Seçin 💰
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Kamera kurulumu dahil, gizli maliyet yok. İstediğiniz zaman iptal edebilirsiniz.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Temel Plan */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/10 hover:shadow-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Temel</h3>
                <div className="text-4xl font-bold text-white mb-1">₺599</div>
                <div className="text-gray-300">/ay</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">1 Kamera</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">3 AI Analiz Türü</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Email Uyarıları</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">7/24 Destek</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Başla
              </button>
            </div>

            {/* Profesyonel Plan */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-lg relative ring-2 ring-blue-500 scale-105 hover:shadow-xl hover:bg-white/10 transition-all duration-300 group border border-blue-400/50">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">En Popüler ⭐</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Profesyonel</h3>
                <div className="text-4xl font-bold text-white mb-1">₺1199</div>
                <div className="text-gray-300">/ay</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">3 Kamera</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">5 AI Analiz Türü</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Mobil Uygulama</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Detaylı Raporlar</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Öncelikli Destek</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Başla
              </button>
            </div>

            {/* Kurumsal Plan */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/10 hover:shadow-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Kurumsal</h3>
                <div className="text-4xl font-bold text-white mb-1">₺3499</div>
                <div className="text-gray-300">/ay</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Sınırsız Kamera</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">10 AI Analiz Türü</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">API Entegrasyonu</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Özel Raporlar</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">Özel Destek</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                İletişime Geç
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Müşteri Yorumları 😊</h2>
            <p className="text-xl text-gray-300">Kullanıcılarımızın deneyimleri</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-white/10 hover:shadow-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Ahmet Yılmaz</h4>
                  <p className="text-sm text-gray-300">Ev Sahibi</p>
                </div>
              </div>
              <p className="text-gray-300 italic group-hover:text-white transition-colors">"Evimde güvenlik konusunda artık hiç endişem yok. Harika bir sistem! 👍"</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-white/10 hover:shadow-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Fatma Kaya</h4>
                  <p className="text-sm text-gray-300">İşletme Sahibi</p>
                </div>
              </div>
              <p className="text-gray-300 italic group-hover:text-white transition-colors">"İşyerimi uzaktan takip edebiliyorum. Çok pratik ve güvenilir. 🤝"</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-white/10 hover:shadow-xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Mehmet Demir</h4>
                  <p className="text-sm text-gray-300">Fabrika Müdürü</p>
                </div>
              </div>
              <p className="text-gray-300 italic group-hover:text-white transition-colors">"AI analizi sayesinde verimliliğimiz %30 arttı. Mükemmel! 🚀"</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">İletişime Geçin 📞</h2>
            <p className="text-xl mb-12 text-gray-300">
              Size özel çözümler sunmak için buradayız. Hemen iletişime geçin!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                <p className="text-gray-300">+90 (212) 555-0123</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">E-posta</h3>
                <p className="text-gray-300">info@vislivis.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Adres</h3>
                <p className="text-gray-300">İstanbul, Türkiye</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <form className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Adınız" 
                  className="bg-white/5 backdrop-blur-sm text-white p-3 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="E-posta" 
                  className="bg-white/5 backdrop-blur-sm text-white p-3 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-400"
                />
                <textarea 
                  placeholder="Mesajınız" 
                  rows={4}
                  className="md:col-span-2 bg-white/5 backdrop-blur-sm text-white p-3 rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none resize-none transition-colors placeholder-gray-400"
                ></textarea>
                <button 
                  type="submit"
                  className="md:col-span-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2 shadow-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Vislivis</span>
              </div>
              <p className="text-gray-400">
                Akıllı ev ve işyeri izleme sistemleri ile güvenliğinizi ve verimliliğinizi artırın. 🛡️
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Ürünler</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ev İzleme 🏠</a></li>
                <li><a href="#" className="hover:text-white transition-colors">İşyeri İzleme 🏢</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fabrika İzleme 🏭</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Analiz 🧠</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Destek</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Dokümantasyon 📚</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SSS ❓</a></li>
                <li><a href="#" className="hover:text-white transition-colors">İletişim 📞</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Canlı Destek 💬</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Şirket</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda ℹ️</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog 📝</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kariyer 💼</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gizlilik 🔒</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vislivis. Tüm hakları saklıdır. 256-bit SSL Güvenlik 🛡️ | KVKV Uyumlu ✅</p>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-black/30 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-white/10">
          <div className="flex items-center space-x-6">
            {[
              { icon: Home, label: 'Ana Sayfa', section: 'hero' },
              { icon: Settings, label: 'Özellikler', section: 'ozellikler' },
              { icon: Smartphone, label: 'Mobil', section: 'mobil' },
              { icon: TrendingUp, label: 'Fiyat', section: 'fiyatlandirma' },
              { icon: Phone, label: 'İletişim', section: 'contact' }
            ].map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className="p-2 rounded-full hover:bg-white/5 transition-colors group"
                title={item.label}
              >
                <item.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes dataStream {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        
        @keyframes scanLine {
          0% {
            top: 0%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default App;