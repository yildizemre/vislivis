import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const productLinks = [
    { name: 'Home Security', href: '#' },
    { name: 'Commercial Security', href: '#' },
    { name: 'Industrial Monitoring', href: '#' },
    { name: 'AI Analytics', href: '#' }
  ];

  const supportLinks = [
    { name: 'Documentation', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'System Status', href: '#' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Privacy Policy', href: '#' }
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
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group font-medium"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group font-medium"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group font-medium"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;