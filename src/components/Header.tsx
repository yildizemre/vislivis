import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/vislivis (6)-Photoroom.png"
              alt="Vislivis"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              to="/hakkimizda"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.about')}
            </Link>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('analytics')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.analytics')}
            </button>
            <button
              onClick={() => scrollToSection('integrations')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.integrations')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.pricing')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4 text-gray-500" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-medium transition-all duration-300 rounded ${
                  language === 'en' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-2 py-1 text-xs font-medium transition-all duration-300 rounded ${
                  language === 'tr' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                TR
              </button>
            </div>
            <button 
              onClick={() => window.open('https://orbitra-retail.netlify.app/', '_blank')}
              className="px-6 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm rounded-lg shadow-sm hover:shadow-md"
            >
              {t('nav.panel')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 p-2"
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
                className="text-gray-600 hover:text-gray-900 transition-colors text-left font-medium"
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left font-medium"
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
                <button 
                  onClick={() => window.open('https://orbitra-retail.netlify.app/', '_blank')}
                  className="px-6 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition-colors font-medium rounded-lg"
                >
                  {t('nav.panel')}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;