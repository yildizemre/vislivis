import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { buildGraph } from '../utils/seoSchemas';

const PrivacyPolicyPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = buildGraph({
    path: '/privacy-policy',
    title: t('privacy.title'),
    description: t('privacy.introduction.content'),
    breadcrumbs: [
      { name: t('nav.home') || 'Ana Sayfa', url: 'https://www.vislivis.com/' },
      { name: t('privacy.title') }
    ]
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('privacy.title')}
        description={t('privacy.introduction.content')}
        keywords="gizlilik politikası, privacy policy, kvkk, gdpr, veri güvenliği"
        schema={schema}
      />
      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t('privacy.title')}
          </h1>

          <div className="text-sm text-gray-500 mb-12">
            {t('privacy.lastUpdated')}: {t('privacy.date')}
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.introduction.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.introduction.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.dataCollection.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.dataCollection.content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('privacy.dataCollection.item1')}</li>
                <li>{t('privacy.dataCollection.item2')}</li>
                <li>{t('privacy.dataCollection.item3')}</li>
                <li>{t('privacy.dataCollection.item4')}</li>
                <li>{t('privacy.dataCollection.item5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.dataUsage.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.dataUsage.content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('privacy.dataUsage.item1')}</li>
                <li>{t('privacy.dataUsage.item2')}</li>
                <li>{t('privacy.dataUsage.item3')}</li>
                <li>{t('privacy.dataUsage.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.dataSharing.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.dataSharing.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.dataSecurity.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.dataSecurity.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.dataRetention.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.dataRetention.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.userRights.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.userRights.content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>{t('privacy.userRights.item1')}</li>
                <li>{t('privacy.userRights.item2')}</li>
                <li>{t('privacy.userRights.item3')}</li>
                <li>{t('privacy.userRights.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.cookies.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.cookies.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.changes.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.changes.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('privacy.contact.content')}
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

export default PrivacyPolicyPage;
