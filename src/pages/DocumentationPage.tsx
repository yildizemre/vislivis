import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { buildGraph } from '../utils/seoSchemas';
import { Book, Search, ChevronRight, FileText, Video, Code, HelpCircle } from 'lucide-react';

const DocumentationPage = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const seoContent = language === 'tr' ? {
    title: 'Vislivis Dokümantasyon - API Kılavuzu, Kullanım Kılavuzları ve Video Eğitimleri',
    description: 'Vislivis retail analitik platformu için kapsamlı dokümantasyon, API referansı, kullanım kılavuzları, video eğitimleri ve entegrasyon örnekleri.',
    keywords: 'vislivis dokümantasyon, API dokümantasyonu, retail analytics API, kullanım kılavuzu, video eğitim, entegrasyon kılavuzu'
  } : {
    title: 'Vislivis Documentation - API Guide, User Manuals and Video Tutorials',
    description: 'Comprehensive documentation for Vislivis retail analytics platform, API reference, user guides, video tutorials and integration examples.',
    keywords: 'vislivis documentation, API documentation, retail analytics API, user guide, video tutorial, integration guide'
  };

  const schema = buildGraph({
    path: '/documentation',
    title: seoContent.title,
    description: seoContent.description,
    breadcrumbs: [
      { name: language === 'tr' ? 'Ana Sayfa' : 'Home', url: 'https://www.vislivis.com/' },
      { name: language === 'tr' ? 'Dokümantasyon' : 'Documentation' }
    ]
  });

  const documentationSections = language === 'tr' ? [
    {
      icon: Book,
      title: 'Başlangıç Kılavuzu',
      description: 'Vislivis\'e başlamak için adım adım rehber',
      articles: [
        { title: 'Hızlı Başlangıç', time: '5 dk' },
        { title: 'İlk Kurulum', time: '10 dk' },
        { title: 'Dashboard\'a Giriş', time: '8 dk' },
        { title: 'Temel Özellikler', time: '12 dk' }
      ]
    },
    {
      icon: FileText,
      title: 'Kullanıcı Kılavuzları',
      description: 'Detaylı özellik ve işlevsellik kılavuzları',
      articles: [
        { title: 'Kuyruk Yönetimi', time: '15 dk' },
        { title: 'Kasa Analitikleri', time: '12 dk' },
        { title: 'Isı Haritaları', time: '10 dk' },
        { title: 'Müşteri Demografisi', time: '8 dk' }
      ]
    },
    {
      icon: Code,
      title: 'API Dokümantasyonu',
      description: 'Geliştiriciler için entegrasyon kılavuzu',
      articles: [
        { title: 'API\'ye Başlangıç', time: '20 dk' },
        { title: 'Kimlik Doğrulama', time: '10 dk' },
        { title: 'Webhook\'lar', time: '15 dk' },
        { title: 'Kod Örnekleri', time: '25 dk' }
      ]
    },
    {
      icon: Video,
      title: 'Video Eğitimleri',
      description: 'Görsel öğrenme için video kılavuzlar',
      articles: [
        { title: 'Platform Tanıtımı', time: '5 dk' },
        { title: 'Dashboard Kullanımı', time: '8 dk' },
        { title: 'Raporlama İpuçları', time: '12 dk' },
        { title: 'İleri Özellikler', time: '15 dk' }
      ]
    }
  ] : [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Step-by-step guide to get started with Vislivis',
      articles: [
        { title: 'Quick Start', time: '5 min' },
        { title: 'Initial Setup', time: '10 min' },
        { title: 'Dashboard Overview', time: '8 min' },
        { title: 'Core Features', time: '12 min' }
      ]
    },
    {
      icon: FileText,
      title: 'User Guides',
      description: 'Detailed feature and functionality guides',
      articles: [
        { title: 'Queue Management', time: '15 min' },
        { title: 'Cashier Analytics', time: '12 min' },
        { title: 'Heat Maps', time: '10 min' },
        { title: 'Customer Demographics', time: '8 min' }
      ]
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Integration guide for developers',
      articles: [
        { title: 'Getting Started with API', time: '20 min' },
        { title: 'Authentication', time: '10 min' },
        { title: 'Webhooks', time: '15 min' },
        { title: 'Code Examples', time: '25 min' }
      ]
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Visual guides for learning',
      articles: [
        { title: 'Platform Introduction', time: '5 min' },
        { title: 'Using Dashboard', time: '8 min' },
        { title: 'Reporting Tips', time: '12 min' },
        { title: 'Advanced Features', time: '15 min' }
      ]
    }
  ];

  const popularArticles = language === 'tr' ? [
    'Vislivis\'i Nasıl Kurulur?',
    'Kuyruk Uyarıları Nasıl Ayarlanır?',
    'Raporları Nasıl Dışa Aktarılır?',
    'API Entegrasyonu Nasıl Yapılır?',
    'Mobil Uygulama Kullanımı'
  ] : [
    'How to Install Vislivis?',
    'How to Set Up Queue Alerts?',
    'How to Export Reports?',
    'How to Integrate API?',
    'Using Mobile App'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO title={seoContent.title} description={seoContent.description} keywords={seoContent.keywords} schema={schema} />
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'tr' ? 'Dokümantasyon' : 'Documentation'}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {language === 'tr' 
                ? 'Vislivis platformunu kullanmak için ihtiyacınız olan tüm bilgiler' 
                : 'Everything you need to know about using the Vislivis platform'}
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'tr' ? 'Dokümantasyonlarda ara...' : 'Search documentation...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {documentationSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {section.articles.map((article, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-gray-900">{article.title}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">{article.time}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Popular Articles */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {language === 'tr' ? 'Popüler Makaleler' : 'Popular Articles'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
              >
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                <span className="text-gray-700 group-hover:text-gray-900">{article}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Need Help CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Aradığınızı bulamadınız mı?' : "Can't find what you're looking for?"}
          </h3>
          <p className="text-gray-600 mb-8">
            {language === 'tr' 
              ? 'Destek ekibimiz size yardımcı olmak için burada' 
              : 'Our support team is here to help'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
          >
            {language === 'tr' ? 'Destek Ekibiyle İletişime Geçin' : 'Contact Support Team'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;

