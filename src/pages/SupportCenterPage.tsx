import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { buildGraph } from '../utils/seoSchemas';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  FileText, 
  Video, 
  Clock,
  CheckCircle,
  HelpCircle,
  Book,
  Users
} from 'lucide-react';

const SupportCenterPage = () => {
  const { t, language } = useLanguage();

  const seoContent = language === 'tr' ? {
    title: 'Vislivis Destek Merkezi - 7/24 Teknik Destek, Canlı Destek ve Yardım',
    description: 'Vislivis destek ekibi 7/24 hizmetinizde. Canlı sohbet, e-posta, telefon desteği ve uzaktan yardım ile anında çözüm bulun.',
    keywords: 'vislivis destek, teknik destek, canlı destek, yardım merkezi, müşteri hizmetleri, 7/24 destek'
  } : {
    title: 'Vislivis Support Center - 24/7 Technical Support, Live Chat and Help',
    description: 'Vislivis support team is available 24/7. Get instant solutions with live chat, email, phone support and remote assistance.',
    keywords: 'vislivis support, technical support, live support, help center, customer service, 24/7 support'
  };

  const schema = buildGraph({
    path: '/support-center',
    title: seoContent.title,
    description: seoContent.description,
    breadcrumbs: [
      { name: language === 'tr' ? 'Ana Sayfa' : 'Home', url: 'https://www.vislivis.com/' },
      { name: language === 'tr' ? 'Destek Merkezi' : 'Support Center' }
    ]
  });

  const supportChannels = language === 'tr' ? [
    {
      icon: MessageCircle,
      title: 'Canlı Sohbet',
      description: 'Destek ekibimizle anında sohbet edin',
      availability: '7/24 Ulaşılabilir',
      action: 'Sohbeti Başlat',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'E-posta Desteği',
      description: 'Detaylı sorular için bize e-posta gönderin',
      availability: '24 saat içinde yanıt',
      action: 'E-posta Gönder',
      color: 'purple'
    },
    {
      icon: Phone,
      title: 'Telefon Desteği',
      description: 'Acil durumlar için bizi arayın',
      availability: '09:00 - 18:00',
      action: '0216 451 91 12',
      color: 'green'
    },
    {
      icon: Video,
      title: 'Uzaktan Destek',
      description: 'Ekran paylaşımıyla teknik destek',
      availability: 'Randevu ile',
      action: 'Randevu Al',
      color: 'orange'
    }
  ] : [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat instantly with our support team',
      availability: '24/7 Available',
      action: 'Start Chat',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email for detailed questions',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'purple'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for urgent matters',
      availability: '9:00 AM - 6:00 PM',
      action: '+90 216 451 91 12',
      color: 'green'
    },
    {
      icon: Video,
      title: 'Remote Support',
      description: 'Technical support with screen sharing',
      availability: 'By appointment',
      action: 'Schedule',
      color: 'orange'
    }
  ];

  const helpResources = language === 'tr' ? [
    {
      icon: Book,
      title: 'Bilgi Bankası',
      description: 'Kapsamlı kılavuzlar ve makaleler',
      link: '/documentation'
    },
    {
      icon: Video,
      title: 'Video Eğitimleri',
      description: 'Adım adım video kılavuzlar',
      link: '#'
    },
    {
      icon: FileText,
      title: 'SSS',
      description: 'Sıkça sorulan soruların yanıtları',
      link: '/#faq'
    },
    {
      icon: Users,
      title: 'Topluluk Forumu',
      description: 'Diğer kullanıcılarla bağlantı kurun',
      link: '#'
    }
  ] : [
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Comprehensive guides and articles',
      link: '/documentation'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '#'
    },
    {
      icon: FileText,
      title: 'FAQ',
      description: 'Answers to frequently asked questions',
      link: '/#faq'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      link: '#'
    }
  ];

  const commonIssues = language === 'tr' ? [
    {
      title: 'Giriş Sorunları',
      solution: 'Şifrenizi sıfırlayın veya çerezlerinizi temizleyin'
    },
    {
      title: 'Veri Senkronizasyonu',
      solution: 'Kamera bağlantınızı kontrol edin ve sistemi yeniden başlatın'
    },
    {
      title: 'Rapor Oluşturma',
      solution: 'Tarih aralığını doğrulayın ve filtreleri kontrol edin'
    },
    {
      title: 'Bildirim Ayarları',
      solution: 'Tarayıcı bildirim izinlerini etkinleştirin'
    }
  ] : [
    {
      title: 'Login Issues',
      solution: 'Reset your password or clear your cookies'
    },
    {
      title: 'Data Synchronization',
      solution: 'Check camera connection and restart the system'
    },
    {
      title: 'Report Generation',
      solution: 'Verify date range and check filters'
    },
    {
      title: 'Notification Settings',
      solution: 'Enable browser notification permissions'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO title={seoContent.title} description={seoContent.description} keywords={seoContent.keywords} schema={schema} />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'tr' ? 'Destek Merkezi' : 'Support Center'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {language === 'tr' 
                ? 'Size yardımcı olmak için buradayız. İhtiyacınız olan desteği seçin.' 
                : 'We\'re here to help. Choose the support you need.'}
            </p>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {language === 'tr' ? 'Destek Kanalları' : 'Support Channels'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            const colors = getColorClasses(channel.color);
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {channel.availability}
                </div>
                <button className={`w-full px-4 py-2 ${colors.bg} ${colors.text} rounded-lg font-medium hover:opacity-80 transition-opacity`}>
                  {channel.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Help Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {language === 'tr' ? 'Yardım Kaynakları' : 'Help Resources'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.link}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <Icon className="w-8 h-8 text-gray-400 group-hover:text-blue-600 mb-4 transition-colors" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Common Issues */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'tr' ? 'Sık Karşılaşılan Sorunlar' : 'Common Issues'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{issue.title}</h3>
                    <p className="text-gray-600">{issue.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Hala yardıma mı ihtiyacınız var?' : 'Still need help?'}
          </h3>
          <p className="text-gray-600 mb-8">
            {language === 'tr' 
              ? 'Destek ekibimiz her zaman burada' 
              : 'Our support team is always here'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              {language === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
            </a>
            <a
              href="/documentation"
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {language === 'tr' ? 'Dokümantasyonu İncele' : 'Browse Documentation'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCenterPage;

