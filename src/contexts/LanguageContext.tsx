import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.about': 'About',
    'nav.analytics': 'Analytics',
    'nav.integrations': 'Integrations',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.panel': 'Panel',
    'nav.freeTrial': 'Free Trial',

    // Hero Section
    'hero.badge': 'AI-Powered Retail Analytics Platform',
    'hero.title': 'AI-Powered',
    'hero.subtitle': 'Retail Analytics',
    'hero.description': 'Transform your retail operations, maximize sales and customer satisfaction with advanced AI analytics.',
    'hero.tagline': 'Track customer behavior, optimize store performance, and increase sales with real-time insights.',
    'hero.startTrial': 'Start Free Trial',
    'hero.watchDemo': 'Watch',
    'hero.accuracy': 'Accuracy',
    'hero.realTime': 'Real-time',
    'hero.stores': 'Active Stores',

    // Features
    'features.badge': 'Core Technology',
    'features.title': 'Comprehensive Retail Analytics',
    'features.subtitle': 'Everything you need to optimize your retail operations',

    // Retail Features
    'retail.badge': 'Retail Analytics Features',
    
    'features.queue.title': 'Queue Management & Customer Flow Optimization',
    'features.queue.description': 'Our AI-powered queue analysis system monitors customer density in real-time to minimize wait times and maximize satisfaction. Optimize staff allocation during peak hours, prevent lost sales due to long queues, and receive instant notifications for critical situations requiring immediate action.',

    'features.cashier.title': 'Cashier Performance Analytics & Efficiency Management',
    'features.cashier.description': 'Analyze each checkout point in detail, optimize transaction times, and measure cashier productivity with precision. Track average service times, processing speed, and customer satisfaction metrics to achieve operational excellence. Identify training needs and provide actionable plans for continuous improvement.',

    'features.heatmap.title': 'Advanced Heat Mapping & Movement Analytics',
    'features.heatmap.description': 'Visualize in-store customer movements to analyze most-visited zones, dwell points, and traffic flow patterns in detail. Gain data-driven insights for product placement optimization, promotional area planning, and store layout decisions. Compare time-based patterns to measure seasonal changes and campaign impacts.',

    'features.demographics.title': 'Customer Demographics Analysis & Segmentation',
    'features.demographics.description': 'Analyze demographic characteristics including age, gender, and visit frequency of your customers in full GDPR/KVKK compliance. Clarify your target audience profile, personalize marketing strategies, and optimize inventory planning. Track demographic shifts across different time periods to develop dynamic, responsive strategies.',

    'features.staff.title': 'Staff Productivity Analytics & Workforce Optimization',
    'features.staff.description': 'Evaluate employee performance with objective data to optimize workforce planning. Analyze shift efficiency, active working hours, and task distribution patterns. Forecast staffing needs in advance, optimize costs, and establish performance-based management systems that enhance employee motivation.',

    'features.campaigns.title': 'Campaign Performance Analytics & ROI Measurement',
    'features.campaigns.description': 'Analyze the effectiveness of your promotions and campaigns in detail to maximize return on investment. Measure product category performance, customer engagement, and sales conversion rates. Compare pre-campaign, during-campaign, and post-campaign metrics to identify the most effective strategies and provide predictive recommendations for future initiatives.',

    // Use Cases
    'useCases.badge': 'Success Stories',
    'useCases.title': 'Real-World Applications',
    'useCases.subtitle': 'See how Vislivis transforms retail operations in practice',
    'useCases.scenario1.title': 'Peak Hours Cashier Optimization',
    'useCases.scenario1.description': 'Predict busiest hours with queue management and ensure adequate cashier availability to boost customer satisfaction.',
    'useCases.scenario1.metric1': '40% reduction in wait times',
    'useCases.scenario1.metric2': 'Improved customer satisfaction',
    'useCases.scenario1.metric3': 'Optimized staff allocation',
    'useCases.scenario2.title': 'Promotion Effectiveness Measurement',
    'useCases.scenario2.description': 'Instantly see the impact of new products or discounts on in-store traffic and sales with campaign analysis.',
    'useCases.scenario2.metric1': 'Real-time campaign tracking',
    'useCases.scenario2.metric2': 'Instant ROI measurement',
    'useCases.scenario2.metric3': 'Traffic pattern analysis',
    'useCases.scenario3.title': 'Inventory Optimization',
    'useCases.scenario3.description': 'Combine sales and behavior data to identify fast-moving products and stock-out risks for better inventory management.',
    'useCases.scenario3.metric1': 'Reduced stockouts by 30%',
    'useCases.scenario3.metric2': 'Optimized inventory levels',
    'useCases.scenario3.metric3': 'Predictive restocking',

    // Analytics Dashboard
    'analytics.badge': 'Advanced Analytics',
    'analytics.title': 'Advanced Analytics Dashboard',
    'analytics.subtitle': 'Real-time insights and historical data analysis',
    'analytics.description': 'Our comprehensive dashboard provides detailed insights into your retail operations with comparative analysis and predictive recommendations.',

    'analytics.comparison.title': 'Period Comparison & Change Tracking',
    'analytics.comparison.description': 'Track KPI changes with percentage indicators (▲ %8 or ▼ %5). Compare performance vs. previous day, same day last week, and same day last year for comprehensive trend analysis.',

    'analytics.products.title': 'Product Analytics & Performance Tracking',
    'analytics.products.description': 'Comprehensive product interaction analysis system tracks customer engagement patterns, trial behaviors, and conversion metrics across all product categories. Identify top-performing SKUs, measure product dwell time, analyze interaction frequency, and optimize product placement strategies based on data-driven insights. Monitor conversion funnels from product interaction to purchase completion, enabling precise inventory forecasting and merchandising optimization.',

    'analytics.kpi.title': 'KPI Dashboard & Sales Conversion Analytics',
    'analytics.kpi.description': 'Enterprise-grade performance monitoring system delivering real-time visibility into critical business metrics. Track conversion rates, average transaction values, basket size analysis, and customer acquisition costs with precision. Benchmark performance against historical data, industry standards, and custom targets. Advanced segmentation capabilities enable granular analysis by time period, product category, customer demographic, and store location, empowering strategic decision-making with comprehensive performance intelligence.',

    'analytics.weather.title': 'Weather Intelligence & Predictive Planning',
    'analytics.weather.description': 'Advanced meteorological integration system provides 15-day forecasting with sophisticated correlation analysis between weather patterns and retail performance. Automated alert mechanisms notify management of adverse conditions that may impact foot traffic, enabling proactive staffing adjustments and inventory positioning. Historical weather-performance correlation analysis reveals seasonal patterns and weather-sensitive product opportunities, optimizing promotional timing and resource allocation based on anticipated environmental conditions.',

    'analytics.ai.title': 'AI-Powered Predictive Intelligence & Recommendations',
    'analytics.ai.description': 'Sophisticated machine learning engine analyzes comprehensive historical datasets to generate actionable business intelligence through natural language processing. Advanced algorithms identify hidden patterns, predict future trends, and recommend optimal strategies for inventory management, staffing allocation, and promotional planning. Contextual insights consider multiple variables including seasonal patterns, customer behavior shifts, competitive dynamics, and market conditions, delivering prescriptive recommendations that drive measurable performance improvements and strategic advantage.',

    'analytics.metrics.trafficIncrease': 'Daily Traffic Increase',
    'analytics.metrics.processing': 'Real-time Processing',
    'analytics.metrics.uptime': 'Uptime Guarantee',
    'analytics.metrics.monitoring': 'Continuous Monitoring',

    // Advanced Features
    'advanced.badge': 'Enterprise Solutions',
    'advanced.title': 'Advanced Enterprise Features',
    'advanced.subtitle': 'Comprehensive solutions for modern retail operations',
    'advanced.inventory.title': 'Inventory Management Integration',
    'advanced.inventory.description': 'Optimize stock management by combining sales and behavior data to identify fast-moving products and stock-out risks.',
    'advanced.inventory.benefit1': 'Reduce stockouts by 30%',
    'advanced.inventory.benefit2': 'Optimize inventory turnover',
    'advanced.inventory.benefit3': 'Predictive restocking alerts',
    'advanced.inventory.benefit4': 'Demand forecasting',
    'advanced.security.title': 'Advanced Security & Privacy',
    'advanced.security.description': 'GDPR/KVKK compliant data processing with advanced anonymization and enterprise-grade security protocols.',
    'advanced.security.benefit1': 'GDPR/KVKK compliance',
    'advanced.security.benefit2': 'Advanced data anonymization',
    'advanced.security.benefit3': 'Enterprise-grade encryption',
    'advanced.security.benefit4': 'Audit trail logging',
    'advanced.multistore.title': 'Multi-Store Management',
    'advanced.multistore.description': 'Manage multiple store performance from a single dashboard, compare locations and identify best practices.',
    'advanced.multistore.benefit1': 'Centralized management',
    'advanced.multistore.benefit2': 'Cross-location analytics',
    'advanced.multistore.benefit3': 'Performance benchmarking',
    'advanced.multistore.benefit4': 'Best practice identification',

    // Integrations
    'integrations.badge': 'System Integrations',
    'integrations.title': 'Seamless Integrations',
    'integrations.subtitle': 'Connect with your existing retail systems',
    'integrations.crm.title': 'CRM Integration',
    'integrations.crm.description': 'Sync customer data with your existing CRM systems',
    'integrations.erp.title': 'ERP Integration',
    'integrations.erp.description': 'Connect with enterprise resource planning systems',
    'integrations.pos.title': 'POS Integration',
    'integrations.pos.description': 'Direct integration with cash register and point-of-sale systems',
    'integrations.marketing.title': 'Marketing Automation',
    'integrations.marketing.description': 'Connect customer behavior data with marketing platforms for targeted campaigns',
    'integrations.bi.title': 'Business Intelligence',
    'integrations.bi.description': 'Integrate with BI and data visualization tools for advanced analytics',
    'integrations.hris.title': 'HRIS & DMS Integration',
    'integrations.hris.description': 'Integrate with human resources and document management systems to evaluate staff performance from a broader perspective with leave data, shift changes, and performance reviews',
    'integrations.capabilities.title': 'Advanced Integration Capabilities',
    'integrations.capabilities.description': 'Powerful and well-documented APIs enable seamless integration with your existing business systems, providing a unified view of your retail operations.',
    'integrations.api.title': 'RESTful APIs',
    'integrations.api.description': 'Powerful and well-documented APIs for custom integrations',
    'integrations.webhook.title': 'Webhook Support',
    'integrations.webhook.description': 'Real-time event notifications for system synchronization',
    'integrations.formats.title': 'Data Formats',
    'integrations.formats.description': 'Industry standard JSON and CSV formats for flexibility',
    'integrations.security.title': 'Enterprise Security',
    'integrations.security.description': 'Advanced encryption and security protocols',

    // Mobile
    'mobile.badge': 'Mobile Experience',
    'mobile.title': 'Mobile Analytics',
    'mobile.subtitle': 'Monitor your stores from anywhere',
    'mobile.description': 'Access real-time analytics and receive instant notifications on your mobile device.',
    'mobile.notifications': 'Real-time Notifications',
    'mobile.notifications.description': 'Get instant alerts for queue buildups, staff productivity changes, and sales anomalies',
    'mobile.monitoring': 'Live Store Monitoring',
    'mobile.monitoring.description': 'Monitor live store analytics, heat maps, and customer flow from anywhere',
    'mobile.reports': 'Mobile Reports',
    'mobile.reports.description': 'Access detailed analytics reports and KPI dashboards on mobile',
    'mobile.alerts': 'Custom Alerts',
    'mobile.alerts.description': 'Set custom alerts for specific retail metrics and thresholds',
    'mobile.distribution.title': 'Enterprise Distribution',
    'mobile.distribution.description': 'Applications are distributed through enterprise channels with custom branding and configuration options available for large deployments.',
    'mobile.distribution.ios': 'iOS 14.0+ supported',
    'mobile.distribution.android': 'Android 9.0+ supported',
    'mobile.distribution.mdm': 'Enterprise MDM compatible',
    'mobile.distribution.branding': 'Custom branding available',
    'mobile.distribution.button': 'Request Enterprise Access',

    // Pricing
    'pricing.badge': 'Flexible Solutions',
    'pricing.title': 'Flexible Pricing Plans',
    'pricing.subtitle': 'Choose the perfect plan for your retail business',
    'pricing.starter': 'Starter',
    'pricing.starter.description': 'Perfect for small retail stores getting started with analytics',
    'pricing.starter.feature1': 'Up to 2 store locations',
    'pricing.starter.feature2': 'Basic analytics dashboard',
    'pricing.starter.feature3': 'Queue management',
    'pricing.starter.feature4': 'Customer demographics',
    'pricing.starter.feature5': 'Email notifications',
    'pricing.starter.feature6': 'Business hours support',
    'pricing.professional': 'Professional',
    'pricing.professional.description': 'Advanced analytics for growing retail businesses',
    'pricing.professional.feature1': 'Up to 10 store locations',
    'pricing.professional.feature2': 'Advanced heat maps',
    'pricing.professional.feature3': 'Staff productivity tracking',
    'pricing.professional.feature4': 'Campaign analysis',
    'pricing.professional.feature5': 'Weather integration',
    'pricing.professional.feature6': 'Mobile app access',
    'pricing.professional.feature7': 'Priority 24/7 support',
    'pricing.professional.feature8': 'CRM/ERP integrations',
    'pricing.enterprise': 'Enterprise',
    'pricing.enterprise.description': 'Complete retail analytics solution for large chains',
    'pricing.enterprise.feature1': 'Unlimited store locations',
    'pricing.enterprise.feature2': 'AI-powered recommendations',
    'pricing.enterprise.feature3': 'Advanced KPI tracking',
    'pricing.enterprise.feature4': 'Custom integrations',
    'pricing.enterprise.feature5': 'On-premises deployment',
    'pricing.enterprise.feature6': 'Dedicated support team',
    'pricing.enterprise.feature7': 'White-label options',
    'pricing.enterprise.feature8': 'Advanced security',
    'pricing.enterprise.feature9': 'Custom reporting',
    'pricing.contactSales': 'Contact Sales',
    'pricing.scheduleDemo': 'Schedule Demo',
    'pricing.requestInfo': 'Request Information',
    'pricing.mostPopular': 'Most Popular',
    'pricing.custom': 'Custom',
    'pricing.custom.title': 'Custom Enterprise Solutions',
    'pricing.custom.description': 'All plans include professional installation, training, and ongoing support. Pricing varies based on deployment size and specific requirements.',
    'pricing.custom.benefit1': 'Professional Installation',
    'pricing.custom.benefit2': '24/7 Technical Support',
    'pricing.custom.benefit3': 'Flexible Contracts',

    // Testimonials
    'testimonials.title': 'Trusted by Retailers',
    'testimonials.subtitle': 'See how leading retail brands use Vislivis',
    'testimonials.stats.clients': 'Enterprise Clients',
    'testimonials.stats.uptime': 'System Uptime',
    'testimonials.stats.support': 'Support Coverage',
    'testimonials.stats.response': 'Response Time',

    // FAQ
    'faq.badge': 'Support & Information',
    'faq.title': 'Frequently Asked Questions',
    'faq.questions': 'Still have questions?',
    'faq.contactTeam': 'Contact Our Team',
    'faq.subtitle': 'Everything you need to know about Vislivis',
    'faq.q1': 'How long does installation take?',
    'faq.a1': 'Professional installation typically takes half a day depending on store size and camera count.',
    'faq.q2': 'Which cameras are compatible?',
    'faq.a2': 'Vislivis integrates with all camera brands and models. Minimum requirement: 2MP IP camera.',
    'faq.q3': 'How long is data stored?',
    'faq.a3': 'All data is processed locally without external image transmission. Analytics data is stored for up to 2 years with flexible retention policies.',
    'faq.q4': 'Is the system GDPR compliant?',
    'faq.a4': 'Yes, all data processing is GDPR/KVKK compliant with advanced anonymization and privacy protection.',
    'faq.q5': 'Can I manage multiple stores?',
    'faq.a5': 'Yes, our platform supports unlimited stores with centralized management and cross-location analytics.',
    'faq.q6': 'What kind of support is provided?',
    'faq.a6': '24/7 technical support, regular system updates, and dedicated account management for enterprise clients.',
    'faq.q7': 'Do I need additional hardware besides cameras?',
    'faq.a7': 'A recording server is required where camera footage is stored. Server requirements vary based on camera count and modules used. Please contact us for detailed specifications.',
    'faq.q8': 'What is the system accuracy rate?',
    'faq.a8': 'The system operates with over 90% accuracy on average. With initial setup calibration using store footage, this rate can be improved further.',

    // Contact
    'contact.title': 'Get Started Today',
    'contact.subtitle': 'Ready to transform your retail operations? Contact us for a personalized demo.',
    'contact.getInTouch': 'Get in Touch',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Name',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekday': 'Monday - Friday',
    'contact.hours.weekdayTime': '9:00 AM - 6:00 PM EST',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.saturdayTime': '10:00 AM - 4:00 PM EST',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.sundayTime': 'Closed',
    'contact.hours.emergency': 'Emergency Support',
    'contact.hours.emergencyTime': '24/7 Available',
    'contact.response': 'We typically respond within 24 hours. For urgent matters, please call directly.',

    // Footer
    'footer.description': 'AI-powered retail analytics platform helping businesses optimize operations and increase sales.',
    'footer.products': 'Products',
    'footer.support': 'Support',
    'footer.company': 'Company',
    'footer.rights': '© 2024 Vislivis. All rights reserved.',

    // About Section
    'about.title': 'About Vislivis',
    'about.subtitle': 'Transforming retail operations with cutting-edge AI technology',
    
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'We set out with the mission to transform the retail sector with the power of AI. Our goal is to help businesses optimize their operations, increase sales, and enhance customer satisfaction through data-driven insights.',
    
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To become the global leader in AI-powered retail analytics, making advanced technology accessible to businesses of all sizes and revolutionizing how retailers understand and serve their customers.',
    
    'about.story.title': 'Our Story',
    'about.story.paragraph1': 'Vislivis was founded in 2020 by a team of AI researchers and retail industry veterans who recognized the untapped potential of computer vision in retail environments.',
    'about.story.paragraph2': 'Starting with a simple observation that traditional retail analytics were missing crucial behavioral insights, we developed proprietary AI algorithms that could understand customer patterns in ways never before possible.',
    'about.story.paragraph3': 'Today, we serve over 500 retail locations worldwide, helping businesses make smarter decisions through real-time analytics and predictive insights.',
    
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide everything we do',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.description': 'Continuously pushing the boundaries of AI technology to solve real retail challenges.',
    'about.values.customer.title': 'Customer Focus',
    'about.values.customer.description': 'Every feature we build is designed with our customers\' success in mind.',
    'about.values.reliability.title': 'Reliability',
    'about.values.reliability.description': 'Delivering consistent, accurate results that businesses can depend on.',
    'about.values.growth.title': 'Growth',
    'about.values.growth.description': 'Helping our clients achieve sustainable growth through data-driven insights.',
    
    'about.why.title': 'Why Choose Vislivis?',
    'about.why.subtitle': 'What sets us apart in the retail analytics landscape',
    'about.differentiators.accuracy': 'AI Accuracy',
    'about.differentiators.speed': 'Processing Speed',
    'about.differentiators.stores': 'Active Stores',
    'about.differentiators.support': 'Support Coverage',
    
    'about.team.title': 'Meet Our Team',
    'about.team.subtitle': 'The experts behind Vislivis technology',
    
    'about.awards.title': 'Awards & Recognition',

    // Live Support
    'support.title': 'Live Support',
    'support.online': 'Online now',
    'support.welcome': 'Hello! How can we help you with Vislivis today?',
    'support.autoResponse': 'Thank you for your message. Our team will get back to you shortly. For immediate assistance, please call 0216 451 91 12.',
    'support.placeholder': 'Type your message...',
  },
  tr: {
    // Header
    'nav.features': 'Özellikler',
    'nav.about': 'Hakkımızda',
    'nav.analytics': 'Analitik',
    'nav.integrations': 'Entegrasyonlar',
    'nav.pricing': 'Fiyatlandırma',
    'nav.contact': 'İletişim',
    'nav.panel': 'Panel',
    'nav.freeTrial': 'Ücretsiz Dene',

    // Hero Section
    'hero.badge': 'AI Destekli Retail Analitik Platformu',
    'hero.title': 'AI Destekli',
    'hero.subtitle': 'Retail Analitik',
    'hero.description': 'Retail operasyonlarınızı dönüştürün, satışları ve müşteri memnuniyetini maksimize edin.',
    'hero.tagline': 'Müşteri davranışlarını takip edin, mağaza performansını optimize edin ve gerçek zamanlı içgörülerle satışları artırın.',
    'hero.startTrial': 'Ücretsiz Deneyin',
    'hero.watchDemo': 'İzleyin',
    'hero.accuracy': 'Doğruluk',
    'hero.realTime': 'Gerçek Zamanlı',
    'hero.stores': 'Aktif Mağaza',

    // Features
    'features.badge': 'Temel Teknoloji',
    'features.title': 'Kapsamlı Retail Analitik',
    'features.subtitle': 'Retail operasyonlarınızı optimize etmek için ihtiyacınız olan her şey',

    // Retail Features
    'retail.badge': 'Retail Analitik Özellikleri',
    
    'features.queue.title': 'Kuyruk Yönetimi ve Müşteri Akış Optimizasyonu',
    'features.queue.description': 'Yapay zeka destekli kuyruk analiz sistemimiz, mağazanızdaki müşteri yoğunluğunu gerçek zamanlı olarak izleyerek bekleme sürelerini minimize eder. Yoğun saatlerde personel planlamasını optimize ederek müşteri memnuniyetini artırır ve kayıp satışları önler. Anlık bildirim sistemi ile kritik durumlarda hızlı aksiyon almanızı sağlar.',

    'features.cashier.title': 'Kasa Performans Analizi ve Verimlilik Yönetimi',
    'features.cashier.description': 'Her bir kasa noktasının performansını detaylı olarak analiz eder, işlem sürelerini optimize eder ve kasiyer verimliliğini ölçümler. Ortalama işlem süreleri, servis hızı ve müşteri memnuniyeti metrikleri ile operasyonel mükemmelliği hedefler. Personel eğitim ihtiyaçlarını belirler ve sürekli iyileştirme için aksiyon planları sunar.',

    'features.heatmap.title': 'İleri Seviye Sıcaklık Haritaları ve Hareket Analizi',
    'features.heatmap.description': 'Mağaza içi müşteri hareketlerini görselleştirerek en çok ziyaret edilen bölgeleri, durma noktalarını ve trafik akışını detaylı şekilde analiz eder. Ürün yerleşim optimizasyonu, tanıtım alanı planlaması ve mağaza dizaynı kararlarında veri odaklı içgörüler sağlar. Zaman bazlı karşılaştırmalarla sezonsal değişimleri ve kampanya etkilerini ölçümler.',

    'features.demographics.title': 'Müşteri Demografik Analizi ve Segmentasyon',
    'features.demographics.description': 'Mağazanıza gelen müşterilerin yaş, cinsiyet ve ziyaret sıklığı gibi demografik özelliklerini KVKK/GDPR uyumlu şekilde analiz eder. Hedef kitle profilinizi netleştirir, pazarlama stratejilerinizi kişiselleştirir ve stok planlamasını optimize eder. Farklı zaman dilimlerinde müşteri profilindeki değişimleri takip ederek dinamik stratejiler geliştirmenizi sağlar.',

    'features.staff.title': 'Personel Verimlilik Analizi ve İş Gücü Optimizasyonu',
    'features.staff.description': 'Çalışan performansını objektif verilerle değerlendirerek iş gücü planlamasını optimize eder. Vardiya verimliliği, aktif çalışma süreleri ve görev dağılımını analiz eder. Personel ihtiyaçlarını önceden tahmin eder, maliyetleri optimize eder ve çalışan motivasyonunu artıracak performans bazlı yönetim sistemleri kurar.',

    'features.campaigns.title': 'Kampanya Performans Analizi ve ROI Ölçümleme',
    'features.campaigns.description': 'Promosyon ve kampanyalarınızın etkinliğini detaylı şekilde analiz ederek yatırım getirisini maksimize eder. Ürün kategori performansını, müşteri ilgisini ve satış dönüşüm oranlarını ölçümler. Kampanya öncesi, sırası ve sonrası karşılaştırmalı analizlerle en etkili stratejileri belirler ve gelecek kampanyalarınız için öngörülü önerilerde bulunur.',

    // Use Cases
    'useCases.badge': 'Başarı Hikayeleri',
    'useCases.title': 'Gerçek Dünya Uygulamaları',
    'useCases.subtitle': 'Vislivis\'in retail operasyonlarını pratikte nasıl dönüştürdüğünü görün',
    'useCases.scenario1.title': 'Yoğun Saatlerde Kasiyer Optimizasyonu',
    'useCases.scenario1.description': 'Kuyruk yönetimi ile en yoğun saatleri önceden tahmin ederek yeterli kasiyerin hazır bulunmasını sağlayın, müşteri memnuniyetini artırın.',
    'useCases.scenario1.metric1': 'Bekleme sürelerinde %40 azalma',
    'useCases.scenario1.metric2': 'İyileşmiş müşteri memnuniyeti',
    'useCases.scenario1.metric3': 'Optimize personel tahsisi',
    'useCases.scenario2.title': 'Promosyon Etkinliği Ölçümü',
    'useCases.scenario2.description': 'Kampanya analizi ile yeni bir ürünün veya indirimin mağaza içi trafiği ve satışlara etkisini anında görün.',
    'useCases.scenario2.metric1': 'Gerçek zamanlı kampanya takibi',
    'useCases.scenario2.metric2': 'Anında ROI ölçümü',
    'useCases.scenario2.metric3': 'Trafik patern analizi',
    'useCases.scenario3.title': 'Envanter Optimizasyonu',
    'useCases.scenario3.description': 'Satış ve davranış verilerini birleştirerek hızlı tükenen ürünleri ve stok riski olan ürünleri belirleyin.',
    'useCases.scenario3.metric1': 'Stok tükenmelerinde %30 azalma',
    'useCases.scenario3.metric2': 'Optimize envanter seviyeleri',
    'useCases.scenario3.metric3': 'Öngörülü stok yenileme',

    // Analytics Dashboard
    'analytics.badge': 'Gelişmiş Analitik',
    'analytics.title': 'Gelişmiş Analitik Dashboard',
    'analytics.subtitle': 'Gerçek zamanlı içgörüler ve geçmiş veri analizi',
    'analytics.description': 'Kapsamlı dashboard\'umuz karşılaştırmalı analiz ve öngörülü önerilerle retail operasyonlarınız hakkında detaylı içgörüler sağlar.',
    
    'analytics.comparison.title': 'Dönem Karşılaştırması ve Değişim Takibi',
    'analytics.comparison.description': 'KPI kartlarında yüzdelik değişim göstergeleri ile takip edin (▲ %8 veya ▼ %5). Önceki güne, geçen haftanın aynı gününe ve geçen yılın aynı gününe göre kapsamlı trend analizi yapın.',
    
    'analytics.products.title': 'Ürün Analitiği ve Performans Takibi',
    'analytics.products.description': 'Kapsamlı ürün etkileşim analiz sistemi, müşteri etkileşim paternlerini, deneme davranışlarını ve tüm ürün kategorilerindeki dönüşüm metriklerini izler. En yüksek performanslı SKU\'ları tespit edin, ürün başında geçirilen süreyi ölçümleyin, etkileşim sıklığını analiz edin ve veri odaklı içgörüler doğrultusunda ürün yerleşim stratejilerini optimize edin. Ürün etkileşiminden satın alma tamamlanmasına kadar dönüşüm hunilerini izleyerek, hassas envanter tahmini ve merchandising optimizasyonu sağlayın.',
    
    'analytics.kpi.title': 'KPI Paneli ve Satış Dönüşüm Analitiği',
    'analytics.kpi.description': 'Kurumsal sınıf performans izleme sistemi, kritik iş metriklerine gerçek zamanlı görünürlük sağlar. Dönüşüm oranlarını, ortalama işlem değerlerini, sepet büyüklüğü analizini ve müşteri edinim maliyetlerini hassasiyetle takip edin. Performansı geçmiş verilerle, sektör standartlarıyla ve özel hedeflerle kıyaslayarak değerlendirin. Gelişmiş segmentasyon yetenekleri, zaman periyodu, ürün kategorisi, müşteri demografisi ve mağaza lokasyonuna göre granular analiz imkanı sunarak, kapsamlı performans istihbaratı ile stratejik karar almayı güçlendirir.',
    
    'analytics.weather.title': 'Hava Durumu İstihbaratı ve Tahmine Dayalı Planlama',
    'analytics.weather.description': 'Gelişmiş meteorolojik entegrasyon sistemi, 15 günlük tahmin ile hava paternleri ve perakende performansı arasında sofistike korelasyon analizi sağlar. Otomatik uyarı mekanizmaları, ayak trafiğini etkileyebilecek olumsuz koşulları yönetime bildirir ve proaktif personel ayarlamaları ile envanter konumlandırması sağlar. Geçmiş hava-performans korelasyon analizi, mevsimsel paternleri ve havaya duyarlı ürün fırsatlarını ortaya çıkararak, beklenen çevresel koşullara dayalı promosyon zamanlamalarını ve kaynak tahsisini optimize eder.',
    
    'analytics.ai.title': 'AI Destekli Öngörülü İstihbarat ve Öneriler',
    'analytics.ai.description': 'Sofistike makine öğrenimi motoru, doğal dil işleme yoluyla eyleme dönüştürülebilir iş zekaları üretmek için kapsamlı geçmiş veri setlerini analiz eder. Gelişmiş algoritmalar gizli paternleri tespit eder, gelecek trendleri öngörür ve envanter yönetimi, personel tahsisi ve promosyon planlaması için optimal stratejiler önerir. Bağlamsal içgörüler, mevsimsel paternler, müşteri davranış değişimleri, rekabet dinamikleri ve pazar koşulları dahil çoklu değişkenleri göz önünde bulundurarak, ölçülebilir performans iyileştirmeleri ve stratejik avantaj sağlayan regilatif öneriler sunar.',

    'analytics.metrics.trafficIncrease': 'Günlük Trafik Artışı',
    'analytics.metrics.processing': 'Gerçek Zamanlı İşleme',
    'analytics.metrics.uptime': 'Çalışma Süresi Garantisi',
    'analytics.metrics.monitoring': 'Sürekli İzleme',

    // Advanced Features
    'advanced.badge': 'Kurumsal Çözümler',
    'advanced.title': 'Gelişmiş Kurumsal Özellikler',
    'advanced.subtitle': 'Modern retail operasyonları için kapsamlı çözümler',
    'advanced.inventory.title': 'Envanter Yönetimi Entegrasyonu',
    'advanced.inventory.description': 'Satış ve davranış verilerini birleştirerek stok yönetiminizi kolaylaştırın, hızlı tükenen ürünleri ve stok riskini önceden belirleyin.',
    'advanced.security.title': 'Gelişmiş Güvenlik ve Gizlilik',
    'advanced.security.description': 'KVKK/GDPR uyumlu veri işleme, gelişmiş anonimleştirme ve kurumsal düzeyde güvenlik protokolleri.',
    'advanced.multistore.title': 'Çoklu Mağaza Yönetimi',
    'advanced.multistore.description': 'Birden fazla mağaza performansını tek panelden yönetin, lokasyonları karşılaştırın ve en iyi uygulamaları belirleyin.',
    'advanced.inventory.benefit1': 'Stok tükenmelerinde %30 azalma',
    'advanced.inventory.benefit2': 'Envanter devir hızı optimizasyonu',
    'advanced.inventory.benefit3': 'Öngörülü stok yenileme uyarıları',
    'advanced.inventory.benefit4': 'Talep tahmini',
    'advanced.security.benefit1': 'KVKK/GDPR uyumluluğu',
    'advanced.security.benefit2': 'Gelişmiş veri anonimleştirme',
    'advanced.security.benefit3': 'Kurumsal düzey şifreleme',
    'advanced.security.benefit4': 'Denetim kaydı tutma',
    'advanced.multistore.benefit1': 'Merkezi yönetim',
    'advanced.multistore.benefit2': 'Lokasyonlar arası analitik',
    'advanced.multistore.benefit3': 'Performans karşılaştırması',
    'advanced.multistore.benefit4': 'En iyi uygulama belirleme',

    // Integrations
    'integrations.badge': 'Sistem Entegrasyonları',
    'integrations.title': 'Sorunsuz Entegrasyonlar',
    'integrations.subtitle': 'Mevcut retail sistemlerinizle bağlantı kurun',
    'integrations.crm.title': 'CRM Entegrasyonu',
    'integrations.crm.description': 'Müşteri verilerini mevcut CRM sistemlerinizle senkronize edin',
    'integrations.erp.title': 'ERP Entegrasyonu',
    'integrations.erp.description': 'Kurumsal kaynak planlama sistemleriyle bağlantı kurun',
    'integrations.pos.title': 'Kasa Entegrasyonu',
    'integrations.pos.description': 'Kasa ve satış noktası sistemleriyle doğrudan entegrasyon',
    'integrations.marketing.title': 'Pazarlama Otomasyonu',
    'integrations.marketing.description': 'Müşteri davranış verilerini pazarlama platformlarına aktararak hedefli kampanyalar yürütün',
    'integrations.bi.title': 'İş Zekası',
    'integrations.bi.description': 'İş zekası ve veri görselleştirme araçlarıyla entegre olarak gelişmiş analitik sağlayın',
    'integrations.hris.title': 'İK ve Doküman Yönetim Sistemi Entegrasyonu',
    'integrations.hris.description': 'İnsan kaynakları ve doküman yönetim sistemleriyle entegrasyon sayesinde personel performansını izinler, vardiya değişiklikleri ve performans değerlendirmeleri ile daha geniş bir perspektiften değerlendirin',
    'integrations.capabilities.title': 'Gelişmiş Entegrasyon Yetenekleri',
    'integrations.capabilities.description': 'Güçlü ve iyi dokümante edilmiş API\'ler, mevcut iş sistemlerinizle sorunsuz entegrasyon sağlar ve retail operasyonlarınızın birleşik görünümünü sunar.',
    'integrations.api.title': 'RESTful API\'ler',
    'integrations.api.description': 'Özel entegrasyonlar için güçlü ve iyi dokümante edilmiş API\'ler',
    'integrations.webhook.title': 'Webhook Desteği',
    'integrations.webhook.description': 'Sistem senkronizasyonu için gerçek zamanlı olay bildirimleri',
    'integrations.formats.title': 'Veri Formatları',
    'integrations.formats.description': 'Esneklik için endüstri standardı JSON ve CSV formatları',
    'integrations.security.title': 'Kurumsal Güvenlik',
    'integrations.security.description': 'Gelişmiş şifreleme ve güvenlik protokolleri',

    // Mobile
    'mobile.badge': 'Mobil Deneyim',
    'mobile.title': 'Mobil Analitik',
    'mobile.subtitle': 'Mağazalarınızı her yerden izleyin',
    'mobile.description': 'Mobil cihazınızdan gerçek zamanlı analitiğe erişin ve anında bildirimler alın.',
    'mobile.notifications': 'Gerçek Zamanlı Bildirimler',
    'mobile.monitoring': 'Canlı Mağaza İzleme',
    'mobile.reports': 'Mobil Raporlar',
    'mobile.alerts': 'Özel Uyarılar',
    'mobile.notifications.description': 'Kuyruk birikmesi, personel verimliliği değişiklikleri ve satış anomalileri için anında uyarılar alın',
    'mobile.monitoring.description': 'Her yerden canlı mağaza analitiği, ısı haritaları ve müşteri akışını izleyin',
    'mobile.reports.description': 'Mobilde detaylı analitik raporlara ve KPI panolarına erişin',
    'mobile.alerts.description': 'Belirli retail metrikleri ve eşikler için özel uyarılar ayarlayın',
    'mobile.distribution.title': 'Kurumsal Dağıtım',
    'mobile.distribution.description': 'Uygulamalar, büyük dağıtımlar için özel markalama ve yapılandırma seçenekleriyle kurumsal kanallar aracılığıyla dağıtılır.',
    'mobile.distribution.ios': 'iOS 14.0+ destekleniyor',
    'mobile.distribution.android': 'Android 9.0+ destekleniyor',
    'mobile.distribution.mdm': 'Kurumsal MDM uyumlu',
    'mobile.distribution.branding': 'Özel markalama mevcut',
    'mobile.distribution.button': 'Kurumsal Erişim Talep Et',

    // Pricing
    'pricing.badge': 'Esnek Çözümler',
    'pricing.title': 'Esnek Fiyatlandırma Planları',
    'pricing.subtitle': 'Retail işletmeniz için mükemmel planı seçin',
    'pricing.starter': 'Başlangıç',
    'pricing.professional': 'Profesyonel',
    'pricing.enterprise': 'Kurumsal',
    'pricing.contactSales': 'Satış İletişim',
    'pricing.scheduleDemo': 'Demo Planlayın',
    'pricing.requestInfo': 'Bilgi Talep Et',
    'pricing.mostPopular': 'En Popüler',
    'pricing.starter.description': 'Analitik ile başlayan küçük retail mağazaları için mükemmel',
    'pricing.starter.feature1': '2 mağaza lokasyonuna kadar',
    'pricing.starter.feature2': 'Temel analitik paneli',
    'pricing.starter.feature3': 'Kuyruk yönetimi',
    'pricing.starter.feature4': 'Müşteri demografisi',
    'pricing.starter.feature5': 'E-posta bildirimleri',
    'pricing.starter.feature6': 'İş saatleri desteği',
    'pricing.professional.description': 'Büyüyen retail işletmeleri için gelişmiş analitik',
    'pricing.professional.feature1': '10 mağaza lokasyonuna kadar',
    'pricing.professional.feature2': 'Gelişmiş ısı haritaları',
    'pricing.professional.feature3': 'Personel verimliliği takibi',
    'pricing.professional.feature4': 'Kampanya analizi',
    'pricing.professional.feature5': 'Hava durumu entegrasyonu',
    'pricing.professional.feature6': 'Mobil uygulama erişimi',
    'pricing.professional.feature7': 'Öncelikli 7/24 destek',
    'pricing.professional.feature8': 'CRM/ERP entegrasyonları',
    'pricing.enterprise.description': 'Büyük zincirler için eksiksiz retail analitik çözümü',
    'pricing.enterprise.feature1': 'Sınırsız mağaza lokasyonu',
    'pricing.enterprise.feature2': 'AI destekli öneriler',
    'pricing.enterprise.feature3': 'Gelişmiş KPI takibi',
    'pricing.enterprise.feature4': 'Özel entegrasyonlar',
    'pricing.enterprise.feature5': 'Yerinde kurulum',
    'pricing.enterprise.feature6': 'Özel destek ekibi',
    'pricing.enterprise.feature7': 'White-label seçenekleri',
    'pricing.enterprise.feature8': 'Gelişmiş güvenlik',
    'pricing.enterprise.feature9': 'Özel raporlama',
    'pricing.custom': 'Özel',
    'pricing.custom.title': 'Özel Kurumsal Çözümler',
    'pricing.custom.description': 'Tüm planlar profesyonel kurulum, eğitim ve sürekli destek içerir. Fiyatlandırma dağıtım büyüklüğü ve özel gereksinimlere göre değişir.',
    'pricing.custom.benefit1': 'Profesyonel Kurulum',
    'pricing.custom.benefit2': '7/24 Teknik Destek',
    'pricing.custom.benefit3': 'Esnek Sözleşmeler',

    // Testimonials
    'testimonials.title': 'Retailcıların Güvendiği',
    'testimonials.subtitle': 'Önde gelen retail markalarının Vislivis\'i nasıl kullandığını görün',
    'testimonials.stats.clients': 'Kurumsal Müşteri',
    'testimonials.stats.uptime': 'Sistem Çalışma Süresi',
    'testimonials.stats.support': 'Destek Kapsamı',
    'testimonials.stats.response': 'Yanıt Süresi',

    // FAQ
    'faq.badge': 'Destek ve Bilgilendirme',
    'faq.title': 'Sıkça Sorulan Sorular',
    'faq.questions': 'Hala sorularınız mı var?',
    'faq.contactTeam': 'Ekibimizle İletişime Geçin',
    'faq.subtitle': 'Vislivis hakkında bilmeniz gereken her şey',
    'faq.q1': 'Kurulum ne kadar sürer?',
    'faq.a1': 'Profesyonel kurulum mağaza büyüklüğü ve kamera sayısına bağlı olarak genellikle yarım gün sürer.',
    'faq.q2': 'Hangi kameralar uyumlu?',
    'faq.a2': 'Vislivis her marka ve model kameraya entegre olur. Minimum gereksinim: 2MP IP kamera.',
    'faq.q3': 'Veriler ne kadar süre saklanır?',
    'faq.a3': 'Tüm veriler lokal olarak işlenir, dışarıya görüntü aktarımı yapılmaz. Analitik veriler ihtiyaçlarınıza göre esnek saklama politikalarıyla 2 yıla kadar saklanır.',
    'faq.q4': 'Sistem KVKK uyumlu mu?',
    'faq.a4': 'Evet, tüm veri işleme gelişmiş anonimleştirme ve gizlilik koruması ile KVKK/GDPR uyumludur.',
    'faq.q5': 'Birden fazla mağazayı yönetebilir miyim?',
    'faq.a5': 'Evet, platformumuz merkezi yönetim ve lokasyonlar arası analitik ile sınırsız mağazayı destekler.',
    'faq.q6': 'Ne tür destek sağlanır?',
    'faq.a6': '7/24 teknik destek, düzenli sistem güncellemeleri ve kurumsal müşteriler için özel hesap yönetimi.',
    'faq.q7': 'Kameralar dışında ek bir donanım gerek var mı?',
    'faq.a7': 'Kameraların görüntülerinin kayıt altına alındığı kayıt sunucusuna ihtiyaç vardır. Yönetilen kamera sayısı ve kullanılacak modül sayısına bağlı olarak sunucu gereksinimleri değişmektedir. Bu konuda detaylı bilgi almak için lütfen bizimle bağlantıya geçiniz.',
    'faq.q8': 'Sistemin hata oranı nedir?',
    'faq.a8': 'Ortalamada %90\'ın üzerinde bir doğruluk oranında çalışmaktadır. Mağazalarda yaptığımız çalışmalarla ilk kurulum sonrasında alınan görüntüler ile kısa sürede bu oranın üzerine çıkabilmektedir.',

    // Contact
    'contact.title': 'Bugün Başlayın',
    'contact.subtitle': 'Retail operasyonlarınızı dönüştürmeye hazır mısınız? Kişiselleştirilmiş demo için bizimle iletişime geçin.',
    'contact.getInTouch': 'İletişime Geçin',
    'contact.phone': 'Telefon',
    'contact.email': 'E-posta',
    'contact.address': 'Adres',
    'contact.sendMessage': 'Mesaj Gönderin',
    'contact.name': 'İsim',
    'contact.company': 'Şirket',
    'contact.message': 'Mesaj',
    'contact.send': 'Mesaj Gönder',
    'contact.hours.title': 'Çalışma Saatleri',
    'contact.hours.weekday': 'Pazartesi - Cuma',
    'contact.hours.weekdayTime': '09:00 - 18:00',
    'contact.hours.saturday': 'Cumartesi',
    'contact.hours.saturdayTime': '10:00 - 16:00',
    'contact.hours.sunday': 'Pazar',
    'contact.hours.sundayTime': 'Kapalı',
    'contact.hours.emergency': 'Acil Destek',
    'contact.hours.emergencyTime': '7/24 Ulaşılabilir',
    'contact.response': 'Genellikle 24 saat içinde yanıt veriyoruz. Acil durumlar için lütfen doğrudan arayın.',

    // Footer
    'footer.description': 'İşletmelerin operasyonlarını optimize etmesine ve satışları artırmasına yardımcı olan AI destekli retail analitik platformu.',
    'footer.products': 'Ürünler',
    'footer.support': 'Destek',
    'footer.company': 'Şirket',
    'footer.rights': '© 2024 Vislivis. Tüm hakları saklıdır.',

    // About Section
    'about.title': 'Hakkımızda',
    'about.subtitle': 'Retail operasyonlarını son teknoloji AI ile dönüştürüyoruz',
    
    'about.mission.title': 'Misyonumuz',
    'about.mission.description': 'Perakende sektörünü AI gücüyle dönüştürme misyonuyla yola çıktık. Amacımız, işletmelerin operasyonlarını optimize etmesine, satışları artırmasına ve veri odaklı içgörülerle müşteri memnuniyetini yükseltmesine yardımcı olmaktır.',
    
    'about.vision.title': 'Vizyonumuz',
    'about.vision.description': 'AI destekli retail analitikte küresel lider olmak, gelişmiş teknolojiyi her büyüklükteki işletme için erişilebilir kılmak ve perakendecilerin müşterilerini anlama ve hizmet verme şeklini devrim niteliğinde değiştirmektir.',
    
    'about.story.title': 'Hikayemiz',
    'about.story.paragraph1': 'Vislivis, 2020 yılında retail ortamlarında bilgisayarlı görünün kullanılmayan potansiyelini fark eden AI araştırmacıları ve retail sektörü veteranlarından oluşan bir ekip tarafından kuruldu.',
    'about.story.paragraph2': 'Geleneksel retail analitiğinin kritik davranışsal içgörüleri kaçırdığı basit gözlemiyle başlayarak, müşteri desenlerini daha önce hiç mümkün olmayan şekillerde anlayabilen özel AI algoritmaları geliştirdik.',
    'about.story.paragraph3': 'Bugün dünya çapında 500\'den fazla retail lokasyonuna hizmet veriyor, işletmelerin gerçek zamanlı analitik ve öngörülü içgörülerle daha akıllı kararlar almasına yardımcı oluyoruz.',
    
    'about.values.title': 'Değerlerimiz',
    'about.values.subtitle': 'Yaptığımız her şeye rehberlik eden ilkeler',
    'about.values.innovation.title': 'İnovasyon',
    'about.values.innovation.description': 'Gerçek retail zorluklarını çözmek için AI teknolojisinin sınırlarını sürekli zorluyoruz.',
    'about.values.customer.title': 'Müşteri Odaklılık',
    'about.values.customer.description': 'Geliştirdiğimiz her özellik müşterilerimizin başarısı düşünülerek tasarlanır.',
    'about.values.reliability.title': 'Güvenilirlik',
    'about.values.reliability.description': 'İşletmelerin güvenebileceği tutarlı, doğru sonuçlar sunuyoruz.',
    'about.values.growth.title': 'Büyüme',
    'about.values.growth.description': 'Müşterilerimizin veri odaklı içgörülerle sürdürülebilir büyüme elde etmesine yardımcı oluyoruz.',
    
    'about.why.title': 'Neden Vislivis?',
    'about.why.subtitle': 'Retail analitik alanında bizi farklı kılan özellikler',
    'about.differentiators.accuracy': 'AI Doğruluğu',
    'about.differentiators.speed': 'İşlem Hızı',
    'about.differentiators.stores': 'Aktif Mağaza',
    'about.differentiators.support': 'Destek Kapsamı',
    
    'about.team.title': 'Ekibimiz',
    'about.team.subtitle': 'Vislivis teknolojisinin arkasındaki uzmanlar',
    
    'about.awards.title': 'Ödüller ve Tanınırlık',

    // Live Support
    'support.title': 'Canlı Destek',
    'support.online': 'Şu anda çevrimiçi',
    'support.welcome': 'Merhaba! Vislivis hakkında size nasıl yardımcı olabiliriz?',
    'support.autoResponse': 'Mesajınız için teşekkürler. Ekibimiz en kısa sürede size dönüş yapacak. Acil yardım için lütfen 0216 451 91 12 numarasını arayın.',
    'support.placeholder': 'Mesajınızı yazın...',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};