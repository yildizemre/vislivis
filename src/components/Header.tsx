import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<number | null>(null);

  // Sayfa scroll veya route değiştiğinde header rengini güncelle
  useEffect(() => {
    const handleScroll = () => {
      // Ana sayfada değilsek veya scroll yapıldıysa beyaz header
      const shouldBeLight = location.pathname !== '/' || window.scrollY > 20;
      setIsScrolled(shouldBeLight);
    };
    
    // İlk yüklemede kontrol et
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const scrollWithOffset = (element: HTMLElement) => {
      const headerOffset = 100; // Header yüksekliği + biraz boşluk
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          scrollWithOffset(element);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        scrollWithOffset(element);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const openDropdownMenu = (key: string) => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenDropdown(key);
  };

  const scheduleDropdownClose = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = window.setTimeout(() => {
      setOpenDropdown(null);
      closeTimeout.current = null;
    }, 160);
  };

  const linkClass = isScrolled
    ? 'text-gray-700 transition-colors duration-300 font-medium text-sm'
    : 'text-white/90 transition-colors duration-300 font-medium text-sm';

  const globeColor = isScrolled ? 'text-gray-500' : 'text-white/80';
  const mobileButtonColor = isScrolled ? 'text-gray-900' : 'text-white';
  const referencesLabelRaw = t('nav.references');
  const referencesLabel = referencesLabelRaw === 'nav.references' ? 'Referanslar' : referencesLabelRaw;

  const langButtonClass = (code: 'en' | 'tr') => {
    if (isScrolled) {
      return `${language === code ? 'text-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700'} px-2 py-1 text-xs font-medium transition-all duration-300 rounded`;
    }
    return `${language === code ? 'text-blue-300 bg-white/10' : 'text-white/80 hover:text-white'} px-2 py-1 text-xs font-medium transition-all duration-300 rounded`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-black/10 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <img
              src={isScrolled ? '/vislivis (6)-Photoroom.png' : '/logobeyaz.png'}
              alt="Vislivis"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/hakkimizda"
              className={`${linkClass} px-3 py-2 rounded-xl hover:bg-cyan-50 hover:text-cyan-600`}
            >
              {t('nav.about')}
            </Link>

            {/* Özellikler Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => openDropdownMenu('features')}
              onMouseLeave={scheduleDropdownClose}
            >
              <button
                onClick={() => scrollToSection('features')}
                className={`${linkClass} px-4 py-2 rounded-xl transition-all duration-300 ${openDropdown === 'features' ? 'bg-cyan-500 text-white shadow-lg' : 'hover:bg-cyan-50 hover:text-cyan-600'} `}
              >
                {t('nav.features')}
              </button>
              {openDropdown === 'features' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl overflow-hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => openDropdownMenu('features')}
                  onMouseLeave={scheduleDropdownClose}
                >
                  <div className="bg-gradient-to-b from-cyan-600 to-cyan-700 text-white">
                    <button onClick={() => scrollToSection('features')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Kuyruk Yönetimi
                    </button>
                    <button onClick={() => scrollToSection('features')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Müşteri Demografik Analizi
                    </button>
                    <button onClick={() => scrollToSection('features')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Personel Verimlilik Analizi
                    </button>
                    <button onClick={() => scrollToSection('features')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Kampanya Performans Analizi
                    </button>
                    <button onClick={() => scrollToSection('use-cases')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Kullanım Senaryoları
                    </button>
                    <button onClick={() => scrollToSection('mobile')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Mobil Uygulama
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Analitik Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => openDropdownMenu('analytics')}
              onMouseLeave={scheduleDropdownClose}
            >
              <button
                onClick={() => scrollToSection('analytics')}
                className={`${linkClass} px-4 py-2 rounded-xl transition-all duration-300 ${openDropdown === 'analytics' ? 'bg-cyan-500 text-white shadow-lg' : 'hover:bg-cyan-50 hover:text-cyan-600'} `}
              >
                {t('nav.analytics')}
              </button>
              {openDropdown === 'analytics' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl overflow-hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => openDropdownMenu('analytics')}
                  onMouseLeave={scheduleDropdownClose}
                >
                  <div className="bg-gradient-to-b from-cyan-600 to-cyan-700 text-white">
                    <button onClick={() => scrollToSection('analytics')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Gelişmiş Dashboard
                    </button>
                    <button onClick={() => scrollToSection('analytics')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      KPI Takibi
                    </button>
                    <button onClick={() => scrollToSection('analytics')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Hava Durumu Entegrasyonu
                    </button>
                    <button onClick={() => scrollToSection('analytics')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      AI Önerileri
                    </button>
                    <button onClick={() => scrollToSection('advanced-features')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Gelişmiş Özellikler
                    </button>
                    <button onClick={() => scrollToSection('comparison')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Önce & Sonra
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Entegrasyonlar Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => openDropdownMenu('integrations')}
              onMouseLeave={scheduleDropdownClose}
            >
              <button
                onClick={() => scrollToSection('integrations')}
                className={`${linkClass} px-4 py-2 rounded-xl transition-all duration-300 ${openDropdown === 'integrations' ? 'bg-cyan-500 text-white shadow-lg' : 'hover:bg-cyan-50 hover:text-cyan-600'} `}
              >
                {t('nav.integrations')}
              </button>
              {openDropdown === 'integrations' && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl overflow-hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => openDropdownMenu('integrations')}
                  onMouseLeave={scheduleDropdownClose}
                >
                  <div className="bg-gradient-to-b from-cyan-600 to-cyan-700 text-white">
                    <button onClick={() => scrollToSection('integrations')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      CRM Entegrasyonu
                    </button>
                    <button onClick={() => scrollToSection('integrations')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      ERP Entegrasyonu
                    </button>
                    <button onClick={() => scrollToSection('integrations')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      POS Entegrasyonu
                    </button>
                    <button onClick={() => scrollToSection('integrations')} className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-cyan-400/80 transition-colors">
                      Marketing Automation
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection('pricing')}
              className={`${linkClass} px-3 py-2 rounded-xl hover:bg-cyan-50 hover:text-cyan-600`}
            >
              {t('nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className={`${linkClass} px-3 py-2 rounded-xl hover:bg-cyan-50 hover:text-cyan-600`}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className={`${linkClass} px-3 py-2 rounded-xl hover:bg-cyan-50 hover:text-cyan-600`}
            >
              {referencesLabel}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${linkClass} px-3 py-2 rounded-xl hover:bg-cyan-50 hover:text-cyan-600`}
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-1">
              <Globe className={`w-4 h-4 ${globeColor}`} />
              <button
                onClick={() => setLanguage('en')}
                className={langButtonClass('en')}
              >
                EN
              </button>
              <span className={isScrolled ? 'text-gray-300' : 'text-white/40'}>|</span>
              <button
                onClick={() => setLanguage('tr')}
                className={langButtonClass('tr')}
              >
                TR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${mobileButtonColor} p-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 py-6 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl">
            <div className="flex flex-col space-y-6 px-6">
              <Link
                to="/hakkimizda"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left font-medium"
              >
                {t('nav.about')}
              </Link>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left font-medium"
              >
                {t('nav.features')}
              </button>
              <button
                onClick={() => scrollToSection('analytics')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left font-medium"
              >
                {t('nav.analytics')}
              </button>
              <button
                onClick={() => scrollToSection('integrations')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left font-medium"
              >
                {t('nav.integrations')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="w-full text-left text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="w-full text-left text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('references')}
                className="w-full text-left text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                {referencesLabel}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left text-gray-700 hover:text-cyan-600 font-medium transition-colors"
              >
                {t('nav.contact')}
              </button>
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                {/* Mobile Language Switcher */}
                <div className="flex items-center space-x-2 pb-3">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
                      language === 'en' 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('tr')}
                    className={`px-3 py-1 text-sm font-medium transition-colors rounded ${
                      language === 'tr' 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    TR
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;