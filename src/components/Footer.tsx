import { Link } from 'react-router-dom';
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
    { key: 'footer.support.docs', href: '/documentation', internal: true },
    { key: 'footer.support.center', href: '/support-center', internal: true },
    { key: 'footer.support.contact', href: '#contact' },
    { key: 'footer.support.status', href: '/system-status', internal: true }
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

        {/* Certifications */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-white mb-2">
              {t('footer.certifications') || 'Sertifikalarımız'}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="h-16 flex items-center justify-center bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
              <img
                src="/GDPR.png"
                alt="GDPR Certified"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-16 flex items-center justify-center bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
              <img
                src="/ISO9001 Kapak.jpg"
                alt="ISO 9001 Certified"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-16 flex items-center justify-center bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
              <img
                src="/iso27001.png"
                alt="ISO 27001 Certified"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-16 flex items-center justify-center bg-white rounded-lg p-3 hover:shadow-lg transition-shadow">
              <img
                src="/soc.png"
                alt="SOC Certified"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-gray-400 font-medium text-center md:text-left">
              {t('footer.rights')}
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border border-white/20 rounded-xl hover:border-white/60 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.451 20.451h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.601 0 4.265 2.371 4.265 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.451H3.56V9h3.554v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.452C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                <span className="text-sm font-medium text-white">LinkedIn</span>
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border border-white/20 rounded-xl hover:border-white/60 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 3h3.9l4.44 6.36 4.44-6.36H20l-6.14 8.7L21 21h-3.9l-4.74-6.72L7.58 21H4l6.3-9.05L3 3z" />
                </svg>
                <span className="text-sm font-medium text-white">X</span>
              </a>
              <a
                href="https://about.meta.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border border-white/20 rounded-xl hover:border-white/60 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16.006 4C8.82 4 4 9.424 4 15.995 4 22.566 8.846 28 16.032 28 23.22 28 28 22.566 28 15.995 28 9.424 23.19 4 16.006 4zm6.286 15.172c-1.326 1.825-3.208 2.844-5.85 2.844-2.636 0-4.517-1.019-5.84-2.844-1.02-1.4-1.563-3.265-1.563-5.17s.544-3.768 1.563-5.165C12.6 7.437 14.478 6.42 17.1 6.42c2.64 0 4.52 1.018 5.846 2.412 1.021 1.396 1.567 3.26 1.567 5.165 0 1.9-.546 3.768-1.567 5.175z" />
                </svg>
                <span className="text-sm font-medium text-white">Meta</span>
              </a>
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