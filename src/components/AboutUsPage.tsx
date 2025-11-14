import { Target, Eye, Heart, Award, Zap, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from './SEO';
import ScrollReveal from './ScrollReveal';

const AboutUsPage = () => {
  const { t, language } = useLanguage();

  const seoContent = {
    tr: {
      title: 'Hakkımızda - Vislivis Ekibi ve Vizyonumuz | Yapay Zeka Perakende Çözümleri',
      description: 'Vislivis ekibi ve vizyonumuz hakkında bilgi edinin. Perakende sektörüne yapay zeka destekli çözümler sunarak işletmelerin büyümesine katkıda bulunuyoruz.',
      keywords: 'vislivis hakkında, perakende teknolojisi, yapay zeka ekibi, retail tech şirketi, mağaza analizi uzmanları, AI perakende vizyonu'
    },
    en: {
      title: 'About Us - Vislivis Team and Our Vision | AI Retail Solutions',
      description: 'Learn about the Vislivis team and our vision. We provide AI-powered solutions to the retail sector, helping businesses grow and succeed.',
      keywords: 'about vislivis, retail technology, AI team, retail tech company, store analytics experts, AI retail vision'
    }
  };

  const content = seoContent[language as keyof typeof seoContent];

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": content.title,
    "description": content.description,
    "url": "https://www.vislivis.com/hakkimizda",
    "mainEntity": {
      "@type": "Organization",
      "name": "Vislivis",
      "foundingDate": "2020",
      "founders": [
        {
          "@type": "Person",
          "name": "Vislivis Founders"
        }
      ],
      "description": "AI-powered retail analytics platform",
      "knowsAbout": ["Artificial Intelligence", "Retail Analytics", "Computer Vision", "Machine Learning"],
      "numberOfEmployees": "50+",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Istanbul",
          "addressCountry": "TR"
        }
      }
    }
  };

  const values = [
    {
      icon: Zap,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Heart,
      title: t('about.values.customer.title'),
      description: t('about.values.customer.description'),
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Shield,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description'),
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: TrendingUp,
      title: t('about.values.growth.title'),
      description: t('about.values.growth.description'),
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const awards = [
    {
      title: 'TechCrunch Disrupt',
      subtitle: '2023 Finalist',
      detail: 'AI Innovation Category'
    },
    {
      title: 'Retail Tech Awards',
      subtitle: '2023 Winner',
      detail: 'Best Analytics Platform'
    },
    {
      title: 'ISO 27001',
      subtitle: 'Certified',
      detail: 'Information Security'
    }
  ];

  const differentiators = [
    {
      metric: '%92',
      title: t('about.differentiators.accuracy'),
      description: 'Industry-leading AI accuracy with continuous learning'
    },
    {
      metric: '0.2s',
      title: t('about.differentiators.speed'),
      description: 'Real-time processing for instant insights'
    },
    {
      metric: '50+',
      title: t('about.differentiators.stores'),
      description: 'Trusted by leading retail chains worldwide'
    },
    {
      metric: '24/7',
      title: t('about.differentiators.support'),
      description: 'Continuous monitoring and dedicated support'
    }
  ];


  return (
    <>
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        ogTitle={content.title}
        ogDescription={content.description}
        ogType="website"
        schema={aboutPageSchema}
      />
      <section id="about-us" className="py-32 bg-white">
        <div className="container mx-auto px-8">
        <ScrollReveal direction="up" delay={80} threshold={0.05}>
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-600 text-sm font-medium mb-6">
              Hakkımızda
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto space-y-32">
          {/* Mission & Vision */}
          <ScrollReveal direction="up" delay={120} threshold={0.08}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('about.mission.title')}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-light mb-8">
                  {t('about.mission.description')}
                </p>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('about.vision.title')}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-light mb-8">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <ScrollReveal direction="scale" delay={160} threshold={0.08}>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h3>
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                  {t('about.story.paragraph1')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                  {t('about.story.paragraph2')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {t('about.story.paragraph3')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Values */}
          <ScrollReveal direction="up" delay={140} threshold={0.08}>
            <div>
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.values.title')}</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                  {t('about.values.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={160 + index * 40} threshold={0.1}>
                      <div
                        className="group text-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 font-light leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Why Vislivis */}
          <ScrollReveal direction="scale" delay={160} threshold={0.08}>
            <div>
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.why.title')}</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                  {t('about.why.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {differentiators.map((diff, index) => (
                  <ScrollReveal key={index} direction={index % 2 === 0 ? 'up' : 'scale'} delay={140 + index * 50} threshold={0.1}>
                    <div
                      className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {diff.metric}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        {diff.title}
                      </h4>
                      <p className="text-gray-600 text-sm font-light leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Awards & Recognition */}
          <ScrollReveal direction="up" delay={180} threshold={0.08}>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.awards.title')}</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {awards.map((award, index) => (
                  <ScrollReveal key={award.title} direction={index === 1 ? 'scale' : index === 0 ? 'left' : 'right'} delay={140 + index * 60} threshold={0.12}>
                    <div className="text-center p-6">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{award.title}</div>
                      <div className="text-sm text-gray-600 mb-2">{award.subtitle}</div>
                      <div className="text-xs text-gray-500">{award.detail}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUsPage;
