import { Database, Users, CreditCard, Zap, BarChart3, FileText, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { use3DTilt } from '../hooks/use3DTilt';

const IntegrationsSection = () => {
  const { t } = useLanguage();
  const tilt = use3DTilt(5);

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
    <section id="integrations" className="py-24 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Zap className="w-4 h-4 mr-2" />
            {t('integrations.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6 tracking-tight pb-2">
            {t('integrations.title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                  onMouseMove={tilt.handleMouseMove}
                  onMouseLeave={tilt.handleMouseLeave}
                  style={tilt.tiltStyle}
                  className="group relative bg-white rounded-3xl border-2 border-slate-100 p-8 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${integration.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${integration.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {integration.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-4 text-sm line-clamp-2">
                      {integration.description}
                    </p>

                    <div className="space-y-1.5">
                      {integration.features.slice(0, 3).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-slate-700 text-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Integration Benefits */}
          <div className="mt-16 bg-white rounded-3xl border-2 border-slate-100 p-10 shadow-xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {t('integrations.capabilities.title')}
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('integrations.capabilities.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{t('integrations.api.title')}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{t('integrations.api.description')}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{t('integrations.webhook.title')}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{t('integrations.webhook.description')}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{t('integrations.formats.title')}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{t('integrations.formats.description')}</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{t('integrations.security.title')}</div>
                <div className="text-sm text-slate-600 leading-relaxed">{t('integrations.security.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;