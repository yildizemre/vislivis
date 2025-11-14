import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Blog yazıları - gerçek projede API'den gelecek
  const blogPosts = [
    {
      id: '1',
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      content: `
        <h2>Retail Analitik Nedir ve Neden Bu Kadar Önemli?</h2>
        <p>Retail analitik, perakende işletmelerinin müşteri davranışlarını, satış verilerini ve operasyonel metrikleri analiz ederek daha iyi kararlar almasını sağlayan bir süreçtir. Günümüzün dijital çağında, veri odaklı kararlar almak artık bir lüks değil, zorunluluk haline gelmiştir.</p>
        
        <h3>Modern Perakendede Veri Devrimi</h3>
        <p>Son 10 yılda perakende sektörü muazzam bir dönüşüm geçirdi. Geleneksel "tahmin ve deneme" yöntemleri yerini veri odaklı stratejilere bıraktı. Bugün başarılı perakendeciler, her kararlarını somut veriler üzerine inşa ediyorlar.</p>
        
        <p>Yapay zeka ve makine öğrenmesi teknolojileri sayesinde, mağaza içi kameralar artık sadece güvenlik amaçlı değil, müşteri davranışlarını anlamak için de kullanılıyor. Bu teknolojiler, müşterilerin mağaza içindeki hareketlerini, hangi ürünlere ilgi gösterdiklerini ve ne kadar süre harcadıklarını detaylı şekilde analiz edebiliyor.</p>
        
        <h3>Retail Analitiğin Temel Faydaları</h3>
        <ul>
          <li><strong>Müşteri Davranışlarını Derin Anlama:</strong> Hangi ürünlere ilgi gösteriliyor, hangi saatlerde mağaza yoğun, müşteriler mağaza içinde nasıl hareket ediyor? Bu sorulara artık net cevaplar alabiliyorsunuz.</li>
          <li><strong>Akıllı Stok Optimizasyonu:</strong> Hangi ürünler hızlı tükeniyor, hangilerinde stok fazlası var? Yapay zeka destekli tahminleme ile stok maliyetlerinizi %30'a kadar azaltabilirsiniz.</li>
          <li><strong>Dinamik Personel Planlaması:</strong> Yoğun saatlerde yeterli personel var mı? Hangi vardiyalarda daha fazla kasiyer gerekiyor? Veriye dayalı personel planlaması ile verimliliği artırın.</li>
          <li><strong>Kampanya Etkinliği Ölçümü:</strong> Hangi kampanyalar işe yarıyor, hangiler değil? ROI'nizi gerçek zamanlı takip edin ve stratejinizi anında optimize edin.</li>
          <li><strong>Mağaza Düzeni Optimizasyonu:</strong> Isı haritaları ile en çok ziyaret edilen bölgeleri belirleyin ve ürün yerleşiminizi optimize edin.</li>
        </ul>

        <h3>Nasıl Başlanır? Adım Adım Rehber</h3>
        <p>Retail analitiğe başlamak için öncelikle doğru araçlara sahip olmanız gerekiyor. İşte başlangıç için izlemeniz gereken adımlar:</p>
        
        <p><strong>1. Mevcut Durumu Analiz Edin:</strong> Hangi verilere zaten sahipsiniz? POS sisteminiz, müşteri sadakat programınız ve mevcut kameralarınız değerli veri kaynakları olabilir.</p>
        
        <p><strong>2. Hedeflerinizi Belirleyin:</strong> Satışları artırmak mı istiyorsunuz, stok maliyetlerini azaltmak mı, yoksa müşteri deneyimini iyileştirmek mi? Net hedefler belirleyin.</p>
        
        <p><strong>3. Doğru Teknoloji Seçin:</strong> Vislivis gibi AI destekli platformlar, kamera görüntülerini analiz ederek size gerçek zamanlı içgörüler sunar. Kurulum basit, sonuçlar hızlıdır.</p>
        
        <p><strong>4. Ekibinizi Eğitin:</strong> Veri okuryazarlığı kritik öneme sahiptir. Ekibinizin verileri doğru yorumlamasını ve aksiyona dönüştürmesini sağlayın.</p>

        <h3>Gerçek Başarı Hikayeleri</h3>
        <p>Bir ulusal süpermarket zinciri, Vislivis kullanarak 6 ay içinde şu sonuçları elde etti:</p>
        <ul>
          <li><strong>Satışlarda %40 artış:</strong> Ürün yerleşimi optimizasyonu ve dinamik fiyatlandırma ile</li>
          <li><strong>Stok maliyetlerinde %25 azalma:</strong> Tahmine dayalı stok yönetimi ile</li>
          <li><strong>Müşteri memnuniyetinde %35 yükseliş:</strong> Bekleme sürelerinin azaltılması ve personel optimizasyonu ile</li>
          <li><strong>Personel verimliliğinde %28 iyileşme:</strong> Veri odaklı vardiya planlaması ile</li>
        </ul>

        <p>Bir moda perakendecisi ise ısı haritası analizleri sayesinde mağaza düzenini yeniden tasarladı ve ayak trafiğini %50 artırdı. En az ziyaret edilen köşelere premium ürünleri yerleştirerek, bu alanların satışlarını 3 katına çıkardı.</p>

        <h3>Gelecek Trendleri</h3>
        <p>Retail analitik alanında heyecan verici gelişmeler bizi bekliyor:</p>
        <ul>
          <li><strong>Gerçek Zamanlı Kişiselleştirme:</strong> Müşteri mağazaya girdiği anda, geçmiş alışveriş geçmişine göre özel teklifler</li>
          <li><strong>Tahmine Dayalı Analitik:</strong> Gelecek trendleri önceden görerek stok ve kampanya kararları alma</li>
          <li><strong>Ses ve Duygu Analizi:</strong> Müşteri memnuniyetini ses tonu ve yüz ifadelerinden anlama</li>
          <li><strong>IoT Entegrasyonu:</strong> Akıllı raflar, sensörler ve beacon'lar ile daha detaylı veri toplama</li>
        </ul>

        <h3>Sonuç: Geleceğe Hazır Olun</h3>
        <p>Retail analitik, modern perakendenin olmazsa olmazı haline geldi. Doğru araçlar ve stratejilerle, rakiplerinizin önüne geçebilir ve müşterilerinize daha iyi hizmet sunabilirsiniz. Unutmayın, veri yeni petroldür - ama sadece doğru şekilde işlendiğinde değer yaratır.</p>
        
        <p>Vislivis ile retail analitik yolculuğunuza bugün başlayın ve farkı hemen görün. İlk 30 gün ücretsiz deneme fırsatını kaçırmayın!</p>
      `,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      category: 'analytics',
      date: '2024-11-10',
      readTime: '8 dk',
      author: {
        name: 'Ahmet Yılmaz',
        avatar: '/avatars/ahmet.jpg',
        bio: 'Retail Analytics Uzmanı, 10+ yıl deneyim'
      }
    },
    {
      id: '2',
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      content: `
        <h2>Yapay Zeka Perakende Sektörünü Nasıl Dönüştürüyor?</h2>
        <p>Yapay zeka (AI) artık bilim kurgu filmlerinin konusu değil - perakende sektöründe günlük operasyonların ayrılmaz bir parçası haline geldi. Amazon Go mağazalarından Alibaba'nın FashionAI mağazalarına kadar, AI destekli perakende deneyimleri dünya çapında yayılıyor.</p>
        
        <h3>AI'ın Perakendedeki 5 Temel Kullanım Alanı</h3>
        
        <h4>1. Akıllı Müşteri Deneyimi</h4>
        <p>Yapay zeka, her müşteriye özel bir alışveriş deneyimi sunmayı mümkün kılıyor. Geçmiş satın alma davranışları, göz atma geçmişi ve demografik bilgiler analiz edilerek, müşteriye tam ihtiyacı olan ürünler öneriliyor.</p>
        
        <p>Örneğin, bir müşteri mağazanın spor giyim bölümünde 5 dakikadan fazla vakit geçiriyorsa, AI sistemi bunu algılayıp mobil uygulaması üzerinden o bölümdeki indirimli ürünleri gösterebilir. Bu tür kişiselleştirmeler, dönüşüm oranlarını %35'e kadar artırabiliyor.</p>
        
        <h4>2. Tahmine Dayalı Stok Yönetimi</h4>
        <p>Geleneksel stok yönetimi yöntemleri genellikle geçmiş verilere dayanır. AI ise hava durumu, yerel etkinlikler, sosyal medya trendleri ve daha pek çok faktörü analiz ederek gelecekteki talebi tahmin eder.</p>
        
        <p>Bir süpermarket zinciri, AI destekli tahminleme ile stok tükenmelerini %40 azalttı ve aynı zamanda fazla stok maliyetlerini %30 düşürdü. Sistem, tatil günlerini, okul tatillerini ve hatta yerel spor müsabakalarını bile hesaba katarak stok siparişlerini optimize ediyor.</p>
        
        <h4>3. Dinamik Fiyatlandırma</h4>
        <p>AI, rakip fiyatlarını, talep değişimlerini ve stok seviyelerini gerçek zamanlı analiz ederek optimal fiyatlandırma stratejisi belirler. Bu sayede hem kar marjları korunur hem de rekabetçi kalınır.</p>
        
        <p>E-ticaret devleri bu teknolojiyi yıllardır kullanıyor, ancak artık fiziksel mağazalar da dijital fiyat etiketleri sayesinde aynı esnekliğe sahip olabiliyor. Bir elektronik perakendecisi, dinamik fiyatlandırma ile kar marjını %8 artırırken, satış hacmini de %15 yükseltti.</p>
        
        <h4>4. Görüntü Tanıma ve Raf Analizi</h4>
        <p>AI destekli kameralar, rafların doluluk oranını, ürün yerleşimini ve planogram uyumunu otomatik olarak kontrol eder. Bir ürün tükendiğinde veya yanlış yere yerleştirildiğinde, sistem anında personeli uyarır.</p>
        
        <p>Ayrıca, müşterilerin hangi ürünleri eline aldığını ama almadığını da tespit edebilir. Bu bilgi, ürün ambalajının, fiyatlandırmanın veya yerleşiminin iyileştirilmesi için kullanılabilir.</p>
        
        <h4>5. Kasiyersiz Mağazalar</h4>
        <p>Amazon Go'nun öncülük ettiği kasiyersiz mağaza konsepti, AI ve bilgisayarlı görü teknolojilerinin doruk noktası. Müşteriler mağazaya girip istedikleri ürünleri alıyor ve çıkıyorlar - ödeme otomatik olarak yapılıyor.</p>
        
        <p>Bu teknoloji sadece büyük şirketlerin erişebileceği bir lüks değil artık. Orta ölçekli perakendeciler de benzer sistemleri uygulamaya başladı ve bekleme sürelerini neredeyse sıfıra indirdi.</p>

        <h3>AI İmplementasyonunda Dikkat Edilmesi Gerekenler</h3>
        
        <p><strong>Veri Kalitesi:</strong> AI sistemleri ancak kaliteli veri ile eğitilirse doğru sonuçlar verir. Veri toplama süreçlerinizi KVKK ve GDPR uyumlu şekilde yapılandırın.</p>
        
        <p><strong>Ekip Eğitimi:</strong> AI araçları ne kadar gelişmiş olursa olsun, onları kullanan insanlar olmadan değersizdir. Ekibinizi AI araçlarını kullanma ve sonuçları yorumlama konusunda eğitin.</p>
        
        <p><strong>Aşamalı Geçiş:</strong> Tüm operasyonunuzu bir anda AI'a devretmeyin. Küçük pilot projelerle başlayın, sonuçları ölçün ve başarılı olanları ölçeklendirin.</p>
        
        <p><strong>Müşteri Gizliliği:</strong> AI kullanırken müşteri gizliliğini ön planda tutun. Hangi verileri topladığınızı ve nasıl kullandığınızı şeffaf bir şekilde paylaşın.</p>

        <h3>Gelecek: AI ve İnsan İşbirliği</h3>
        <p>AI'ın amacı insanların yerini almak değil, onları güçlendirmektir. En başarılı perakende operasyonları, AI'ın veri analizi ve tahminleme gücünü, insanların yaratıcılığı ve empati yetenekleri ile birleştiren operasyonlardır.</p>
        
        <p>Örneğin, AI bir müşterinin memnuniyetsiz olduğunu tespit edebilir, ancak o müşteriyi memnun etmek için gereken empati ve yaratıcılık hala insanlara aittir. AI, personelin doğru zamanda doğru yerde olmasını sağlar; personel ise müşteri deneyimini mükemmelleştirir.</p>

        <h3>Sonuç: Geleceğe Hazır Olun</h3>
        <p>Yapay zeka perakende sektöründe artık bir "nice to have" değil, "must have" haline geldi. Rakipleriniz muhtemelen zaten AI yatırımları yapıyor. Geride kalmamak için bugün harekete geçin.</p>
        
        <p>Vislivis'in AI destekli retail analitik platformu ile geleceğin perakende deneyimini bugün yaşayın. Ücretsiz demo için hemen iletişime geçin!</p>
      `,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      category: 'ai',
      date: '2024-11-08',
      readTime: '10 dk',
      author: {
        name: 'Ayşe Demir',
        avatar: '/avatars/ayse.jpg',
        bio: 'AI & Machine Learning Uzmanı'
      }
    }
  ];

  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog yazısı bulunamadı</h1>
          <button
            onClick={() => navigate('/#blog')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Blog'a Dön
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
      alert('Link kopyalandı!');
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
            onClick={() => navigate('/#blog')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Blog'a Dön
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
              <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">İlgili Yazılar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map(relatedPost => (
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
