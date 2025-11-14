import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { buildGraph } from '../utils/seoSchemas';

const ThankYouPage = () => {
  const schema = buildGraph({
    path: '/tesekkurler',
    title: 'Teşekkürler',
    description: 'Talebinizi aldık. En kısa sürede sizinle iletişime geçeceğiz.',
    breadcrumbs: [
      { name: 'Ana Sayfa', url: 'https://www.vislivis.com/' },
      { name: 'Teşekkürler' }
    ]
  });
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Teşekkürler"
        description="Talebinizi aldık. En kısa sürede sizinle iletişime geçeceğiz."
        keywords="teşekkürler, talep alındı, form gönderildi"
        schema={schema}
        robots="noindex, nofollow"
      />
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Teşekkürler! Talebinizi Aldık
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Ekibimiz en kısa sürede sizinle iletişime geçecek. Bu arada ürün özelliklerimizi
          keşfetmeye devam edebilirsiniz.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00cadc] hover:bg-cyan-500 text-white font-semibold transition-colors"
        >
          Ana sayfaya dön
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default ThankYouPage;


