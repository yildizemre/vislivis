import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Store Operations Manager',
      company: 'Fashion Forward Retail',
      text: 'Vislivis has revolutionized how we understand our customers. The heat maps and demographic insights helped us increase sales by 23% in just three months.',
      industry: 'Fashion Retail',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Regional Manager',
      company: 'SuperMart Chain',
      text: 'The queue management and staff productivity features have dramatically improved our customer experience. Wait times reduced by 40% across all locations.',
      industry: 'Supermarket',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emma Chen',
      title: 'Analytics Director',
      company: 'TechStyle Boutiques',
      text: 'The AI recommendations and campaign analysis features have transformed our marketing strategy. We now make data-driven decisions that consistently boost our ROI.',
      industry: 'Boutique Retail',
      rating: 5,
      avatar: 'EC'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium mb-6">
            Customer Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-12">
            <div className="mb-8">
              <Quote className="w-16 h-16 text-blue-100 mb-6" />
            </div>

            <div className="grid lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-1 text-center lg:text-left">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto lg:mx-0 mb-4">
                  {testimonials[currentIndex].avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600 font-medium mb-1">
                  {testimonials[currentIndex].title}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {testimonials[currentIndex].company}
                </p>
                
                {/* Rating */}
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  {testimonials[currentIndex].industry}
                </span>
              </div>

              <div className="lg:col-span-3">
                <blockquote className="text-2xl lg:text-3xl text-gray-800 leading-relaxed font-light">
                  "{testimonials[currentIndex].text}"
                </blockquote>
              </div>
            </div>

            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;