import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Blog yazıları - gerçek projede API'den gelecek
  const blogPosts = [
    {
      id: '1',
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'analytics',
      date: '2024-11-10',
      readTime: '8 dk',
      author: {
        name: 'Ahmet Yılmaz',
        avatar: '/avatars/ahmet.jpg',
        bio: 'Retail Analytics Uzmanı'
      },
      content: language === 'tr' ? `
        <h2>Retail Analitik Nedir ve Neden Bu Kadar Önemli?</h2>
        <p>Retail analitik, perakende işletmelerinin müşteri davranışlarını, satış verilerini ve operasyonel metrikleri analiz ederek daha iyi kararlar almasını sağlayan bir süreçtir.</p>
        <h3>Modern Perakendede Veri Devrimi</h3>
        <p>Son 10 yılda perakende sektörü muazzam bir dönüşüm geçirdi. Geleneksel "tahmin ve deneme" yöntemleri yerini veri odaklı stratejilere bıraktı.</p>
        <ul>
          <li><strong>Müşteri Davranışlarını Derin Anlama:</strong> Hangi ürünlere ilgi gösteriliyor?</li>
          <li><strong>Akıllı Stok Optimizasyonu:</strong> Hangi ürünler hızlı tükeniyor?</li>
          <li><strong>Dinamik Personel Planlaması:</strong> Yoğun saatlerde yeterli personel var mı?</li>
        </ul>
        <p>Vislivis ile retail analitik yolculuğunuza bugün başlayın.</p>
      ` : `
        <h2>What is Retail Analytics and Why is it Important?</h2>
        <p>Retail analytics is the process of providing analytical data on inventory levels, supply chain movement, consumer demand, and sales.</p>
        <h3>The Data Revolution in Modern Retail</h3>
        <p>In the last decade, the retail sector has undergone a massive transformation. Traditional "guess and check" methods have given way to data-driven strategies.</p>
        <ul>
          <li><strong>Deep Understanding of Customer Behavior:</strong> Which products are getting attention?</li>
          <li><strong>Smart Inventory Optimization:</strong> Which products are selling out fast?</li>
          <li><strong>Dynamic Staff Planning:</strong> Do you have enough staff during peak hours?</li>
        </ul>
        <p>Start your retail analytics journey with Vislivis today.</p>
      `
    },
    {
      id: '2',
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      category: 'ai',
      date: '2024-11-08',
      readTime: '10 dk',
      author: {
        name: 'Ayşe Demir',
        avatar: '/avatars/ayse.jpg',
        bio: 'AI & Machine Learning Uzmanı'
      },
      content: language === 'tr' ? `
        <h2>Yapay Zeka Perakende Sektörünü Nasıl Dönüştürüyor?</h2>
        <p>Yapay zeka (AI) artık bilim kurgu filmlerinin konusu değil - perakende sektöründe günlük operasyonların ayrılmaz bir parçası haline geldi.</p>
        <h3>AI'ın Perakendedeki Temel Kullanım Alanları</h3>
        <p>AI, müşteri deneyimini kişiselleştirmekten stok yönetimine kadar birçok alanda devrim yaratıyor.</p>
        <ul>
          <li><strong>Akıllı Müşteri Deneyimi:</strong> Kişiselleştirilmiş öneriler.</li>
          <li><strong>Tahmine Dayalı Stok Yönetimi:</strong> Gelecek talebi öngörme.</li>
          <li><strong>Dinamik Fiyatlandırma:</strong> Rekabetçi fiyat stratejileri.</li>
        </ul>
        <p>Yapay zeka ile perakende operasyonlarınızı geleceğe taşıyın.</p>
      ` : `
        <h2>How AI is Transforming the Retail Industry</h2>
        <p>Artificial Intelligence (AI) is no longer just science fiction - it has become an integral part of daily operations in the retail sector.</p>
        <h3>Key Use Cases of AI in Retail</h3>
        <p>AI is revolutionizing many areas from personalizing customer experience to inventory management.</p>
        <ul>
          <li><strong>Smart Customer Experience:</strong> Personalized recommendations.</li>
          <li><strong>Predictive Inventory Management:</strong> Forecasting future demand.</li>
          <li><strong>Dynamic Pricing:</strong> Competitive pricing strategies.</li>
        </ul>
        <p>Propel your retail operations into the future with Artificial Intelligence.</p>
      `
    },
    {
      id: '3',
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      category: 'insights',
      date: '2024-11-05',
      readTime: '6 dk',
      author: {
        name: 'Mehmet Kaya',
        avatar: '/avatars/mehmet.jpg',
        bio: 'Müşteri Deneyimi Yöneticisi'
      },
      content: language === 'tr' ? `
        <h2>Müşteri Davranış Paternlerini Anlamak</h2>
        <p>Müşterilerinizin mağaza içindeki yolculuğunu anlamak, satışları artırmanın anahtarıdır. Isı haritaları ve yol analizi ile müşterilerin nerede durduğunu, nereye baktığını ve neden satın almadığını keşfedin.</p>
        <h3>Davranış Analizinin Gücü</h3>
        <p>Veri odaklı içgörüler, mağaza düzeninizi ve ürün yerleşiminizi optimize etmenize yardımcı olur.</p>
        <ul>
          <li><strong>Sıcak Bölgeler:</strong> Mağazanızın en çok ziyaret edilen alanlarını belirleyin.</li>
          <li><strong>Dönüşüm Oranları:</strong> Ziyaretçilerin kaçı satın almaya dönüşüyor?</li>
          <li><strong>Sadakat Programları:</strong> Müşterileri elde tutma stratejileri geliştirin.</li>
        </ul>
      ` : `
        <h2>Understanding Customer Behavior Patterns</h2>
        <p>Understanding your customers' journey inside the store is key to increasing sales. Discover where customers stop, look, and why they don't buy with heatmaps and path analysis.</p>
        <h3>The Power of Behavior Analysis</h3>
        <p>Data-driven insights help you optimize your store layout and product placement.</p>
        <ul>
          <li><strong>Hot Zones:</strong> Identify the most visited areas of your store.</li>
          <li><strong>Conversion Rates:</strong> How many visitors convert to purchases?</li>
          <li><strong>Loyalty Programs:</strong> Develop strategies to retain customers.</li>
        </ul>
      `
    },
    {
      id: '4',
      title: t('blog.post4.title'),
      excerpt: t('blog.post4.excerpt'),
      image: 'https://images.unsplash.com/photo-1532618793091-ec5fe9635f78?w=800&h=600&fit=crop',
      category: 'optimization',
      date: '2024-11-01',
      readTime: '12 dk',
      author: {
        name: 'Zeynep Çelik',
        avatar: '/avatars/zeynep.jpg',
        bio: 'Mağaza Operasyonları Direktörü'
      },
      content: language === 'tr' ? `
        <h2>Mağaza Yerleşimi Optimizasyon Rehberi</h2>
        <p>Doğru mağaza yerleşimi, müşterilerin daha fazla ürün görmesini ve daha fazla satın almasını sağlar. Bilimsel verilerle mağaza trafiğini yönlendirin.</p>
        <h3>Etkili Mağaza Düzeni İpuçları</h3>
        <ul>
          <li><strong>Giriş Alanı:</strong> İlk izlenim önemlidir. Ferah ve davetkar bir giriş tasarlayın.</li>
          <li><strong>Sağ Taraf Kuralı:</strong> Müşteriler genellikle sağa yönelir. En popüler ürünleri buraya koyun.</li>
          <li><strong>Görsel Odak Noktaları:</strong> Müşterilerin ilgisini çekecek görsel alanlar yaratın.</li>
        </ul>
      ` : `
        <h2>Store Layout Optimization Guide</h2>
        <p>The right store layout ensures customers see more products and buy more. Direct store traffic with scientific data.</p>
        <h3>Effective Store Layout Tips</h3>
        <ul>
          <li><strong>Entrance Area:</strong> First impressions matter. Design a spacious and inviting entrance.</li>
          <li><strong>Right Side Rule:</strong> Customers usually turn right. Place popular products here.</li>
          <li><strong>Visual Focal Points:</strong> Create visual areas to attract customer interest.</li>
        </ul>
      `
    },
    {
      id: '5',
      title: t('blog.post5.title'),
      excerpt: t('blog.post5.excerpt'),
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      category: 'trends',
      date: '2024-10-28',
      readTime: '7 dk',
      author: {
        name: 'Can Yıldız',
        avatar: '/avatars/can.jpg',
        bio: 'Teknoloji Editörü'
      },
      content: language === 'tr' ? `
        <h2>2024 Retail Teknoloji Trendleri</h2>
        <p>Perakende dünyası hızla değişiyor. 2024 yılında öne çıkan teknoloji trendlerini ve işletmenize nasıl entegre edebileceğinizi inceledik.</p>
        <h3>Öne Çıkan Trendler</h3>
        <ul>
          <li><strong>Temassız Ödeme Sistemleri:</strong> Hızlı ve güvenli ödeme deneyimi.</li>
          <li><strong>Sanal Gerçeklik (VR) Mağazalar:</strong> Fiziksel ve dijital deneyimlerin birleşimi.</li>
          <li><strong>Sürdürülebilirlik Odaklı Teknolojiler:</strong> Çevre dostu operasyonlar için akıllı çözümler.</li>
        </ul>
      ` : `
        <h2>2024 Retail Technology Trends</h2>
        <p>The retail world is changing rapidly. We examined the technology trends standing out in 2024 and how you can integrate them into your business.</p>
        <h3>Featured Trends</h3>
        <ul>
          <li><strong>Contactless Payment Systems:</strong> Fast and secure payment experience.</li>
          <li><strong>Virtual Reality (VR) Stores:</strong> Convergence of physical and digital experiences.</li>
          <li><strong>Sustainability-Focused Technologies:</strong> Smart solutions for eco-friendly operations.</li>
        </ul>
      `
    },
    {
      id: '6',
      title: t('blog.post6.title'),
      excerpt: t('blog.post6.excerpt'),
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      category: 'security',
      date: '2024-10-25',
      readTime: '9 dk',
      author: {
        name: 'Elif Öztürk',
        avatar: '/avatars/elif.jpg',
        bio: 'Veri Güvenliği Uzmanı'
      },
      content: language === 'tr' ? `
        <h2>Retail Analitikte Gizlilik ve Güvenlik</h2>
        <p>Müşteri verilerini toplarken KVKK ve GDPR uyumluluğu hayati önem taşır. Veri güvenliğini sağlarken iş içgörüleri elde etmenin yolları.</p>
        <h3>Veri Güvenliği En İyi Uygulamaları</h3>
        <ul>
          <li><strong>Anonimleştirme:</strong> Kişisel verileri kimliksizleştirerek analiz etme.</li>
          <li><strong>Şifreleme:</strong> Verilerin güvenli bir şekilde saklanması ve iletilmesi.</li>
          <li><strong>Şeffaflık:</strong> Müşterilere hangi verilerin toplandığını açıkça bildirme.</li>
        </ul>
      ` : `
        <h2>Privacy and Security in Retail Analytics</h2>
        <p>GDPR and KVKK compliance is vital when collecting customer data. Ways to gain business insights while ensuring data security.</p>
        <h3>Data Security Best Practices</h3>
        <ul>
          <li><strong>Anonymization:</strong> Analyzing personal data by de-identifying it.</li>
          <li><strong>Encryption:</strong> Secure storage and transmission of data.</li>
          <li><strong>Transparency:</strong> Clearly informing customers about what data is collected.</li>
        </ul>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{language === 'tr' ? 'Blog yazısı bulunamadı' : 'Blog post not found'}</h1>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            {language === 'tr' ? 'Blog\'a Dön' : 'Back to Blog'}
          </button>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      copy: shareUrl
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      alert(language === 'tr' ? 'Link kopyalandı!' : 'Link copied!');
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 -mt-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'tr' ? 'Blog\'a Dön' : 'Back to Blog'}
          </button>

          <div className="mb-6">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-300">
              {post.category.toUpperCase()}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{post.author.name}</div>
                <div className="text-sm text-white/60">{post.author.bio}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        {/* Share Buttons */}
        <div className="sticky top-24 float-right ml-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-4 space-y-3">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </button>

            {showShareMenu && (
              <div className="space-y-2 animate-fade-in-up">
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-12 h-12 flex items-center justify-center bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-12 h-12 flex items-center justify-center bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-12 h-12 flex items-center justify-center bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-colors"
                >
                  <LinkIcon className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-li:text-slate-600 prose-li:mb-2
              prose-strong:text-slate-900 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{language === 'tr' ? 'İlgili Yazılar' : 'Related Posts'}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.id !== id).slice(0, 2).map(relatedPost => (
              <div
                key={relatedPost.id}
                onClick={() => navigate(`/blog/${relatedPost.id}`)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
