import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { buildGraph } from '../utils/seoSchemas';

const TermsOfServicePage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = buildGraph({
    path: '/terms-of-service',
    title: t('terms.title'),
    description: t('terms.acceptance.content'),
    breadcrumbs: [
      { name: t('nav.home') || 'Ana Sayfa', url: 'https://www.vislivis.com/' },
      { name: t('terms.title') }
    ]
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('terms.title')}
        description={t('terms.acceptance.content')}
        keywords="kullanım şartları, terms of service, sözleşme, hizmet şartları"
        schema={schema}
      />
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t('terms.title')}
          </h1>

          <div className="text-sm text-gray-500 mb-12">
            {t('terms.lastUpdated')}: {t('terms.date')}
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.acceptance.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.acceptance.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.services.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.services.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.userResponsibilities.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.userResponsibilities.content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('terms.userResponsibilities.item1')}</li>
                <li>{t('terms.userResponsibilities.item2')}</li>
                <li>{t('terms.userResponsibilities.item3')}</li>
                <li>{t('terms.userResponsibilities.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.intellectualProperty.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.intellectualProperty.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.dataPrivacy.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.dataPrivacy.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.limitation.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.limitation.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.termination.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.termination.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.changes.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.changes.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.contact.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('terms.contact.content')}
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 font-medium mb-2">Vislivis</p>
                <p className="text-gray-600 text-sm">Saldan Collective Office, Yenişehir</p>
                <p className="text-gray-600 text-sm">Mustafa Akyol Sokağı No:7a-a, İç Kapı No:27</p>
                <p className="text-gray-600 text-sm">34912 Pendik/İstanbul</p>
                <p className="text-gray-600 text-sm mt-2">0216 451 91 12</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
