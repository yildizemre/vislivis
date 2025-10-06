import React from 'react';
import { Smartphone, Bell, Eye, Settings, FileText, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MobileSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Bell,
      title: t('mobile.notifications'),
      description: t('mobile.notifications.description')
    },
    {
      icon: Eye,
      title: t('mobile.monitoring'),
      description: t('mobile.monitoring.description')
    },
    {
      icon: FileText,
      title: t('mobile.reports'),
      description: t('mobile.reports.description')
    },
    {
      icon: Settings,
      title: t('mobile.alerts'),
      description: t('mobile.alerts.description')
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium mb-6">
            {t('mobile.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('mobile.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('mobile.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Mobile App Mockup */}
            <div className="relative">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-80 h-160 bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden">
                    {/* Screen */}
                    <div className="absolute inset-4 bg-white rounded-[2rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
                        <span className="text-xs font-semibold text-gray-900">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                          <div className="w-6 h-2 bg-gray-900 rounded-sm"></div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="p-6">
                        <div className="text-center mb-8">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mx-auto mb-2"></div>
                          <h3 className="text-lg font-bold text-gray-900">Vislivis</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-semibold text-green-800">All Systems Online</div>
                                <div className="text-xs text-green-600">12 cameras active</div>
                              </div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                            <div className="text-sm font-semibold text-blue-800 mb-2">Recent Activity</div>
                            <div className="text-xs text-blue-600">Motion detected - Kitchen</div>
                            <div className="text-xs text-gray-500">2 minutes ago</div>
                          </div>
                          
                          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                            <div className="text-sm font-semibold text-gray-800 mb-2">Analytics</div>
                            <div className="flex justify-between text-xs">
                              <span className="text-gray-600">Today's Events</span>
                              <span className="font-semibold text-gray-900">24</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating notification */}
                  <div className="absolute -right-8 top-20 bg-white rounded-xl shadow-lg border border-gray-200 p-3 max-w-48">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="text-xs font-semibold text-gray-900">Motion Alert</div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Front door activity detected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features and Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('mobile.description')}
                </h3>
                
                <div className="space-y-6 mb-12">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 font-light leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Download Information */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {t('mobile.distribution.title')}
                  </h4>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    {t('mobile.distribution.description')}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{t('mobile.distribution.ios')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{t('mobile.distribution.android')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">{t('mobile.distribution.mdm')}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="font-medium">{t('mobile.distribution.branding')}</span>
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-300">
                    <Download className="w-5 h-5 mr-2" />
                    {t('mobile.distribution.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;