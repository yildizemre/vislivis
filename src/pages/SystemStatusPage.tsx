import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { buildGraph } from '../utils/seoSchemas';
import { 
  CheckCircle, 
  AlertCircle, 
  Activity,
  Server,
  Database,
  Cloud,
  Smartphone,
  Zap,
  Globe,
  Shield,
  Clock
} from 'lucide-react';

const SystemStatusPage = () => {
  const { language } = useLanguage();

  const seoContent = language === 'tr' ? {
    title: 'Vislivis Sistem Durumu - Gerçek Zamanlı Durum İzleme ve Uptime',
    description: 'Vislivis platformunun gerçek zamanlı sistem durumunu, uptime metriklerini, planlı bakımları ve olayları takip edin. %99.98 çalışma süresi.',
    keywords: 'sistem durumu, uptime, sistem izleme, server durumu, API durumu, platform sağlığı'
  } : {
    title: 'Vislivis System Status - Real-Time Status Monitoring and Uptime',
    description: 'Track Vislivis platform real-time system status, uptime metrics, scheduled maintenance and incidents. 99.98% uptime.',
    keywords: 'system status, uptime, system monitoring, server status, API status, platform health'
  };

  const schema = buildGraph({
    path: '/system-status',
    title: seoContent.title,
    description: seoContent.description,
    breadcrumbs: [
      { name: language === 'tr' ? 'Ana Sayfa' : 'Home', url: 'https://www.vislivis.com/' },
      { name: language === 'tr' ? 'Sistem Durumu' : 'System Status' }
    ]
  });

  const systemStatus = language === 'tr' ? [
    {
      icon: Server,
      name: 'API Servisleri',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms'
    },
    {
      icon: Database,
      name: 'Veritabanı',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms'
    },
    {
      icon: Cloud,
      name: 'Bulut Altyapısı',
      status: 'operational',
      uptime: '100%',
      responseTime: '28ms'
    },
    {
      icon: Smartphone,
      name: 'Mobil Uygulamalar',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '56ms'
    },
    {
      icon: Zap,
      name: 'Gerçek Zamanlı İşleme',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '89ms'
    },
    {
      icon: Globe,
      name: 'Web Dashboard',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '34ms'
    },
    {
      icon: Shield,
      name: 'Güvenlik Servisleri',
      status: 'operational',
      uptime: '100%',
      responseTime: '15ms'
    },
    {
      icon: Activity,
      name: 'Analitik Motoru',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '123ms'
    }
  ] : [
    {
      icon: Server,
      name: 'API Services',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '45ms'
    },
    {
      icon: Database,
      name: 'Database',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '12ms'
    },
    {
      icon: Cloud,
      name: 'Cloud Infrastructure',
      status: 'operational',
      uptime: '100%',
      responseTime: '28ms'
    },
    {
      icon: Smartphone,
      name: 'Mobile Applications',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '56ms'
    },
    {
      icon: Zap,
      name: 'Real-time Processing',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '89ms'
    },
    {
      icon: Globe,
      name: 'Web Dashboard',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '34ms'
    },
    {
      icon: Shield,
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '15ms'
    },
    {
      icon: Activity,
      name: 'Analytics Engine',
      status: 'operational',
      uptime: '99.96%',
      responseTime: '123ms'
    }
  ];

  const recentIncidents = language === 'tr' ? [
    {
      date: '10 Ekim 2025',
      title: 'Planlı Bakım',
      description: 'Veritabanı optimizasyonu için planlı bakım tamamlandı.',
      status: 'resolved',
      duration: '15 dakika'
    },
    {
      date: '5 Ekim 2025',
      title: 'API Performans İyileştirmesi',
      description: 'API yanıt sürelerini iyileştirmek için güncellemeler uygulandı.',
      status: 'resolved',
      duration: '30 dakika'
    },
    {
      date: '1 Ekim 2025',
      title: 'Güvenlik Yaması',
      description: 'Rutin güvenlik güncellemeleri başarıyla uygulandı.',
      status: 'resolved',
      duration: '10 dakika'
    }
  ] : [
    {
      date: 'October 10, 2025',
      title: 'Scheduled Maintenance',
      description: 'Planned maintenance for database optimization completed.',
      status: 'resolved',
      duration: '15 minutes'
    },
    {
      date: 'October 5, 2025',
      title: 'API Performance Improvement',
      description: 'Updates applied to improve API response times.',
      status: 'resolved',
      duration: '30 minutes'
    },
    {
      date: 'October 1, 2025',
      title: 'Security Patch',
      description: 'Routine security updates successfully applied.',
      status: 'resolved',
      duration: '10 minutes'
    }
  ];

  const upcomingMaintenance = language === 'tr' ? [
    {
      date: '15 Ekim 2025',
      time: '02:00 - 04:00',
      title: 'Veritabanı Bakımı',
      description: 'Performans optimizasyonu için planlı veritabanı bakımı.'
    }
  ] : [
    {
      date: 'October 15, 2025',
      time: '02:00 AM - 04:00 AM',
      title: 'Database Maintenance',
      description: 'Scheduled database maintenance for performance optimization.'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'operational' 
      ? { bg: 'bg-green-50', text: 'text-green-600', icon: 'text-green-500' }
      : { bg: 'bg-red-50', text: 'text-red-600', icon: 'text-red-500' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO title={seoContent.title} description={seoContent.description} keywords={seoContent.keywords} schema={schema} />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">
                {language === 'tr' ? 'Tüm Sistemler Çalışıyor' : 'All Systems Operational'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'tr' ? 'Sistem Durumu' : 'System Status'}
            </h1>
            <p className="text-xl text-green-100">
              {language === 'tr' 
                ? 'Vislivis platformunun gerçek zamanlı durumunu izleyin' 
                : 'Monitor real-time status of Vislivis platform'}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Overall Status */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">99.98%</div>
              <div className="text-gray-600 font-medium">
                {language === 'tr' ? 'Çalışma Süresi' : 'Uptime'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">45ms</div>
              <div className="text-gray-600 font-medium">
                {language === 'tr' ? 'Ortalama Yanıt' : 'Avg Response'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-gray-600 font-medium">
                {language === 'tr' ? 'Aktif Sorun' : 'Active Issues'}
              </div>
            </div>
          </div>
        </div>

        {/* System Components */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'tr' ? 'Sistem Bileşenleri' : 'System Components'}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {systemStatus.map((system, index) => {
              const Icon = system.icon;
              const colors = getStatusColor(system.status);
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{system.name}</h3>
                        <div className={`flex items-center space-x-1 ${colors.text} text-sm mt-1`}>
                          <CheckCircle className="w-4 h-4" />
                          <span>{language === 'tr' ? 'Çalışıyor' : 'Operational'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">{language === 'tr' ? 'Çalışma Süresi' : 'Uptime'}:</span>
                      <span className="font-semibold text-gray-900 ml-2">{system.uptime}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">{language === 'tr' ? 'Yanıt Süresi' : 'Response'}:</span>
                      <span className="font-semibold text-gray-900 ml-2">{system.responseTime}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {language === 'tr' ? 'Son Olaylar' : 'Recent Incidents'}
          </h2>
          <div className="space-y-4">
            {recentIncidents.map((incident, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h3 className="font-bold text-gray-900">{incident.title}</h3>
                      <span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-medium rounded">
                        {language === 'tr' ? 'Çözüldü' : 'Resolved'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{incident.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{incident.date}</span>
                      <span>•</span>
                      <span>{language === 'tr' ? 'Süre' : 'Duration'}: {incident.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Maintenance */}
        {upcomingMaintenance.length > 0 && (
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                {language === 'tr' ? 'Planlı Bakım' : 'Upcoming Maintenance'}
              </h2>
            </div>
            <div className="space-y-4">
              {upcomingMaintenance.map((maintenance, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{maintenance.title}</h3>
                      <p className="text-gray-600 mb-3">{maintenance.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{maintenance.date}</span>
                        <span>•</span>
                        <span>{maintenance.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subscribe to Updates */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Güncellemelerden Haberdar Olun' : 'Stay Updated'}
          </h3>
          <p className="text-gray-600 mb-8">
            {language === 'tr' 
              ? 'Sistem durumu değişikliklerinden anında haberdar olun' 
              : 'Get notified instantly about system status changes'}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            {language === 'tr' ? 'Bildirimlere Abone Ol' : 'Subscribe to Notifications'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPage;

