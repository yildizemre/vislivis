import { lazy, Suspense } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { buildGraph } from '../utils/seoSchemas';
import HeroSection from '../components/HeroSection';
import StickyCTA from '../components/StickyCTA';
import ScrollProgress from '../components/ScrollProgress';
import ExitIntentPopup from '../components/ExitIntentPopup';
import ScrollToTopButton from '../components/ScrollToTopButton';
import LiveStats from '../components/LiveStats';
import RetailFeaturesSection from '../components/RetailFeaturesSection';
import PromoModal from '../components/PromoModal';
import ScrollReveal from '../components/ScrollReveal';
import { SectionSkeleton } from '../components/Skeleton';

const UseCasesSection = lazy(() => import('../components/UseCasesSection'));
const AnalyticsDashboardSection = lazy(() => import('../components/AnalyticsDashboardSection'));
const AdvancedFeaturesSection = lazy(() => import('../components/AdvancedFeaturesSection'));
const ComparisonSlider = lazy(() => import('../components/ComparisonSlider'));
const IntegrationsSection = lazy(() => import('../components/IntegrationsSection'));
const MobileSection = lazy(() => import('../components/MobileSection'));
const PricingSection = lazy(() => import('../components/PricingSection'));
// const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
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

  const faqNode = {
    "@type": "FAQPage",
    "@id": "https://www.vislivis.com/#faq",
    "url": "https://www.vislivis.com/",
    "mainEntity": [
      {
        "@type": "Question",
        "name": language === 'tr' ? "Kurulum ne kadar sürer?" : "How long does installation take?",
        "acceptedAnswer": { "@type": "Answer", "text": language === 'tr' ? "Profesyonel kurulum mağaza büyüklüğü ve kamera sayısına bağlı olarak genellikle yarım gün sürer." : "Typically half a day depending on store size and number of cameras." }
      },
      {
        "@type": "Question",
        "name": language === 'tr' ? "Sistem KVKK uyumlu mu?" : "Is the system GDPR compliant?",
        "acceptedAnswer": { "@type": "Answer", "text": language === 'tr' ? "Evet, KVKK/GDPR uyumlu veri işleme, gelişmiş anonimleştirme ve kurumsal güvenlik protokolleri ile tam uyumludur." : "Yes, fully compliant with GDPR/PDPL with anonymization and enterprise-grade security." }
      },
      {
        "@type": "Question",
        "name": language === 'tr' ? "Birden fazla mağazayı yönetebilir miyim?" : "Can I manage multiple stores?",
        "acceptedAnswer": { "@type": "Answer", "text": language === 'tr' ? "Evet, çoklu mağaza yönetimi ile tüm lokasyonları tek panelden yönetebilir ve karşılaştırabilirsiniz." : "Yes, multi-store management lets you manage and compare all locations from a single panel." }
      }
    ]
  };

  const combinedSchema = buildGraph({
    path: '/',
    title: content.title,
    description: content.description,
    breadcrumbs: [{ name: language === 'tr' ? 'Ana Sayfa' : 'Home' }],
    extraNodes: [faqNode]
  });

  return (
    <>
      <ScrollProgress />
      <StickyCTA />
      <ExitIntentPopup />
      <ScrollToTopButton />
      <LiveStats />
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        ogTitle={content.title}
        ogDescription={content.description}
        ogType="website"
        schema={combinedSchema}
      />
      <ScrollReveal direction="up" delay={60}>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal direction="right" delay={140}>
        <RetailFeaturesSection />
      </ScrollReveal>
      <ScrollReveal direction="scale" delay={200}>
        <PromoModal backgroundSrc="/33af1d4f-a97f-4c95-8c83-1657c70a6599.png" />
      </ScrollReveal>
      <Suspense fallback={<SectionSkeleton />}>
        <ScrollReveal direction="left" delay={140}>
          <div id="use-cases">
            <UseCasesSection />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={160}>
          <div id="analytics">
            <AnalyticsDashboardSection />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={200}>
          <div id="advanced-features">
            <AdvancedFeaturesSection />
          </div>
        </ScrollReveal>
        <ScrollReveal direction="fade" delay={160}>
          <div id="comparison">
            <ComparisonSlider />
          </div>
        </ScrollReveal>
        <div id="integrations">
          <IntegrationsSection />
        </div>
        <div id="mobile">
          <MobileSection />
        </div>
        <PricingSection />
        <FAQSection />
        <ScrollReveal direction="up" delay={220}>
          <ContactSection />
        </ScrollReveal>
      </Suspense>
    </>
  );
};

export default HomePage;
