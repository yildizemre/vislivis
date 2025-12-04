import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Blog posts data - duplicated from BlogDetailPage for now
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
        bio: 'Retail Analytics Uzmanı, 10+ yıl deneyim'
      }
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
      }
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
      }
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
      }
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
      }
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
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.02) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(15, 23, 42, 0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            {t('blog.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600 border border-white/20 shadow-sm">
                    {post.category.toUpperCase()}
                  </span>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                      {post.author.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-slate-700">{post.author.name}</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    {t('blog.readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
