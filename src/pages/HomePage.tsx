import React, { lazy, Suspense, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vislivis",
    "url": "https://www.vislivis.com",
    "logo": "https://www.vislivis.com/vislivis (6)-Photoroom.png",
    "description": content.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Saldan Collective Office, Yenişehir, Mustafa Akyol Sokağı No:7a-a, İç Kapı No:27",
      "addressLocality": "Pendik",
      "addressRegion": "İstanbul",
      "postalCode": "34912",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-216-451-91-12",
      "contactType": "customer service",
      "availableLanguage": ["tr", "en"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/vislivis",
      "https://twitter.com/vislivis"
    ],
    "areaServed": ["TR", "Global"],
    "knowsAbout": ["Retail Analytics", "AI", "Computer Vision", "Machine Learning", "Retail Technology"],
    "award": ["Retail Tech Awards 2023 - Best Analytics Platform", "ISO 27001", "ISO 9001"],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vislivis",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "BusinessApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "description": content.description
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, softwareSchema]
  };

  return (
    <>
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        ogTitle={content.title}
        ogDescription={content.description}
        ogType="website"
        schema={combinedSchema}
      />
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
