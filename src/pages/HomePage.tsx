import React, { lazy, Suspense, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/HeroSection';
import RetailFeaturesSection from '../components/RetailFeaturesSection';

const UseCasesSection = lazy(() => import('../components/UseCasesSection'));
const AnalyticsDashboardSection = lazy(() => import('../components/AnalyticsDashboardSection'));
const AdvancedFeaturesSection = lazy(() => import('../components/AdvancedFeaturesSection'));
const IntegrationsSection = lazy(() => import('../components/IntegrationsSection'));
const MobileSection = lazy(() => import('../components/MobileSection'));
const PricingSection = lazy(() => import('../components/PricingSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const HomePage = () => {
  const { language } = useLanguage();

  const seoContent = {
    tr: {
      title: 'Vislivis - Yapay Zeka Destekli Perakende Analizi ve Mağaza Performansı',
      description: 'Vislivis ile mağaza performansınızı artırın. Yapay zeka destekli perakende analizi, müşteri davranışı takibi, raf analizi ve gerçek zamanlı raporlama ile işletmenizi büyütün.',
      keywords: 'perakende analizi, mağaza performansı, müşteri davranışı, yapay zeka perakende, raf analizi, retail analytics, AI perakende çözümleri, mağaza optimizasyonu'
    },
    en: {
      title: 'Vislivis - AI-Powered Retail Analytics and Store Performance',
      description: 'Boost your store performance with Vislivis. AI-powered retail analytics, customer behavior tracking, shelf analysis, and real-time reporting to grow your business.',
      keywords: 'retail analytics, store performance, customer behavior, AI retail, shelf analysis, retail intelligence, store optimization, AI retail solutions'
    }
  };

  const content = seoContent[language as keyof typeof seoContent];

  useEffect(() => {
    document.title = content.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', content.description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', content.keywords);
    }
  }, [content]);

  return (
    <>
      <HeroSection />
      <RetailFeaturesSection />
      <Suspense fallback={<div className="py-20 bg-white"></div>}>
        <UseCasesSection />
        <AnalyticsDashboardSection />
        <AdvancedFeaturesSection />
        <IntegrationsSection />
        <MobileSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </Suspense>
    </>
  );
};

export default HomePage;
