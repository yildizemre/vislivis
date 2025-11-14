import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
}

const BlogSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog yazıları - gerçek projede API'den gelecek
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: t('blog.post1.title'),
      excerpt: t('blog.post1.excerpt'),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', // Retail Analytics
      category: 'analytics',
      date: '2024-11-10',
      readTime: '8 dk',
      author: {
        name: 'Ahmet Yılmaz',
        avatar: '/avatars/ahmet.jpg'
      }
    },
    {
      id: '2',
      title: t('blog.post2.title'),
      excerpt: t('blog.post2.excerpt'),
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop', // AI Technology
      category: 'ai',
      date: '2024-11-08',
      readTime: '10 dk',
      author: {
        name: 'Ayşe Demir',
        avatar: '/avatars/ayse.jpg'
      }
    },
    {
      id: '3',
      title: t('blog.post3.title'),
      excerpt: t('blog.post3.excerpt'),
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop', // Shopping
      category: 'insights',
      date: '2024-11-05',
      readTime: '9 dk',
      author: {
        name: 'Mehmet Kaya',
        avatar: '/avatars/mehmet.jpg'
      }
    },
    {
      id: '4',
      title: t('blog.post4.title'),
      excerpt: t('blog.post4.excerpt'),
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop', // Store Layout
      category: 'optimization',
      date: '2024-11-01',
      readTime: '12 dk',
      author: {
        name: 'Zeynep Şahin',
        avatar: '/avatars/zeynep.jpg'
      }
    },
    {
      id: '5',
      title: t('blog.post5.title'),
      excerpt: t('blog.post5.excerpt'),
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop', // Future Tech
      category: 'trends',
      date: '2024-10-28',
      readTime: '15 dk',
      author: {
        name: 'Can Öztürk',
        avatar: '/avatars/can.jpg'
      }
    },
    {
      id: '6',
      title: t('blog.post6.title'),
      excerpt: t('blog.post6.excerpt'),
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop', // Security
      category: 'security',
      date: '2024-10-25',
      readTime: '11 dk',
      author: {
        name: 'Elif Yıldız',
        avatar: '/avatars/elif.jpg'
      }
    }
  ];

  const categories = [
    { id: 'all', label: t('blog.categories.all') },
    { id: 'analytics', label: t('blog.categories.analytics') },
    { id: 'ai', label: t('blog.categories.ai') },
    { id: 'insights', label: t('blog.categories.insights') },
    { id: 'optimization', label: t('blog.categories.optimization') },
    { id: 'trends', label: t('blog.categories.trends') },
    { id: 'security', label: t('blog.categories.security') }
  ];

  // Filtreleme: kategori ve arama
  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .filter(post => 
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className="py-24 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            📚 {t('blog.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {t('blog.title')}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Blog yazılarında ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                <img
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                    {categories.find(c => c.id === post.category)?.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-slate-900">{post.author.name}</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    {t('blog.readMore')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {t('blog.loadMore')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
