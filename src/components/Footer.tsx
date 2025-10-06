import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const productLinks = [
    { key: 'footer.products.queue', href: '#features' },
    { key: 'footer.products.cashier', href: '#features' },
    { key: 'footer.products.behavior', href: '#features' },
    { key: 'footer.products.heatmap', href: '#features' }
  ];

  const supportLinks = [
    { key: 'footer.support.docs', href: '#' },
    { key: 'footer.support.center', href: '#' },
    { key: 'footer.support.contact', href: '#contact' },
    { key: 'footer.support.status', href: '#' }
  ];

  const companyLinks = [
    { key: 'footer.company.about', href: '/hakkimizda', internal: true },
    { key: 'footer.company.careers', href: '#' },
    { key: 'footer.company.blog', href: '#' },
    { key: 'footer.company.partners', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/vislivis (6)-Photoroom.png"
                alt="Vislivis"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              {t('footer.description')}
            </p>
            
            <div className="space-y-2 text-sm font-medium">
              <div className="text-gray-400">
                Saldan Collective Office, Yenişehir
              </div>
              <div className="text-gray-400">
                Mustafa Akyol Sokağı No:7a-a, İç Kapı No:27
              </div>
              <div className="text-gray-400">
                34912 Pendik/İstanbul
              </div>
              <div className="text-gray-400">
                0216 451 91 12
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.products')}</h3>
            <ul className="space-y-4">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.support')}</h3>
            <ul className="space-y-4">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.company')}</h3>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                    >
                      {t(link.key)}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                    >
                      {t(link.key)}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 font-medium">
              {t('footer.rights')}
            </div>
            
            <div className="flex space-x-8 text-sm font-medium">
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                {t('terms.title')}
              </Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                {t('privacy.title')}
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                {t('cookie.title')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;