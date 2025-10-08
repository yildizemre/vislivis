import React from 'react';
import { Database, Users, CreditCard, Zap, BarChart3, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const IntegrationsSection = () => {
  const { t } = useLanguage();

  const integrations = [
    {
      icon: Users,
      title: t('integrations.crm.title'),
      description: t('integrations.crm.description'),
      features: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Custom APIs'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: t('integrations.erp.title'),
      description: t('integrations.erp.description'),
      features: ['SAP', 'Oracle', 'NetSuite', 'Odoo'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: CreditCard,
      title: t('integrations.pos.title'),
      description: t('integrations.pos.description'),
      features: ['Square', 'Shopify POS', 'Lightspeed', 'Clover'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: t('integrations.marketing.title'),
      description: t('integrations.marketing.description'),
      features: ['Mailchimp', 'ActiveCampaign', 'Braze', 'Salesforce Marketing Cloud'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: BarChart3,
      title: t('integrations.bi.title'),
      description: t('integrations.bi.description'),
      features: ['Tableau', 'Microsoft Power BI', 'Qlik Sense', 'Google Data Studio'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: FileText,
      title: t('integrations.hris.title'),
      description: t('integrations.hris.description'),
      features: ['Workday', 'SAP SuccessFactors', 'BambooHR', 'Custom HRIS'],
      gradient: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <section id="integrations" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium mb-6">
            {t('integrations.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('integrations.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('integrations.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${integration.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {integration.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-light mb-6">
                    {integration.description}
                  </p>

                  <div className="space-y-3">
                    {integration.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Integration Benefits */}
          <div className="mt-20 bg-white rounded-2xl border border-gray-200 p-8">
            <div className="text-center mb-8">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('integrations.capabilities.title')}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('integrations.capabilities.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-lg font-bold text-gray-900 mb-2">{t('integrations.api.title')}</div>
                <div className="text-sm text-gray-600">{t('integrations.api.description')}</div>
              </div>
              <div className="text-center p-4">
                <div className="text-lg font-bold text-gray-900 mb-2">{t('integrations.webhook.title')}</div>
                <div className="text-sm text-gray-600">{t('integrations.webhook.description')}</div>
              </div>
              <div className="text-center p-4">
                <div className="text-lg font-bold text-gray-900 mb-2">{t('integrations.formats.title')}</div>
                <div className="text-sm text-gray-600">{t('integrations.formats.description')}</div>
              </div>
              <div className="text-center p-4">
                <div className="text-lg font-bold text-gray-900 mb-2">{t('integrations.security.title')}</div>
                <div className="text-sm text-gray-600">{t('integrations.security.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;