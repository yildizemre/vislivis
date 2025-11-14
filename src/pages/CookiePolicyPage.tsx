import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { buildGraph } from '../utils/seoSchemas';

const CookiePolicyPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = buildGraph({
    path: '/cookie-policy',
    title: t('cookie.title'),
    description: t('cookie.what.content'),
    breadcrumbs: [
      { name: t('nav.home') || 'Ana Sayfa', url: 'https://www.vislivis.com/' },
      { name: t('cookie.title') }
    ]
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('cookie.title')}
        description={t('cookie.what.content')}
        keywords="çerez politikası, cookie policy, çerezler, cookies"
        schema={schema}
      />
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t('cookie.title')}
          </h1>

          <div className="text-sm text-gray-500 mb-12">
            {t('cookie.lastUpdated')}: {t('cookie.date')}
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie.what.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookie.what.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie.types.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookie.types.content')}
              </p>

              <div className="space-y-6 mt-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('cookie.types.essential.title')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('cookie.types.essential.content')}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('cookie.types.performance.title')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('cookie.types.performance.content')}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('cookie.types.functional.title')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('cookie.types.functional.content')}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t('cookie.types.analytics.title')}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('cookie.types.analytics.content')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie.usage.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookie.usage.content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('cookie.usage.item1')}</li>
                <li>{t('cookie.usage.item2')}</li>
                <li>{t('cookie.usage.item3')}</li>
                <li>{t('cookie.usage.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie.thirdParty.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookie.thirdParty.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie.control.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookie.control.content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('cookie.control.item1')}</li>
                <li>{t('cookie.control.item2')}</li>
                <li>{t('cookie.control.item3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie.changes.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookie.changes.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('cookie.contact.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('cookie.contact.content')}
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

export default CookiePolicyPage;
