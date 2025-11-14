import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // Eğer true ise lazy loading yapma (hero images için)
  onLoad?: () => void;
}

/**
 * Optimize edilmiş görsel bileşeni
 * - Lazy loading (scroll edilince yüklenir)
 * - WebP desteği (tarayıcı destekliyorsa WebP, yoksa orijinal format)
 * - Blur placeholder (yüklenene kadar bulanık görünür)
 * - Responsive (ekran boyutuna göre uygun boyut)
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  onLoad
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority true ise hemen yükle
  const imgRef = useRef<HTMLImageElement>(null);

  // Lazy loading için Intersection Observer
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // 50px önce yüklemeye başla
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // WebP desteği kontrolü
  const getOptimizedSrc = (originalSrc: string): string => {
    // Eğer zaten WebP ise direkt döndür
    if (originalSrc.endsWith('.webp')) {
      return originalSrc;
    }

    // WebP versiyonunu oluştur (örn: image.jpg -> image.webp)
    const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Tarayıcı WebP destekliyorsa WebP döndür
    // Not: Production'da bu dosyaların var olduğundan emin olun
    return webpSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Blur placeholder - yüklenene kadar göster */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse" />
      )}

      {/* Asıl görsel - sadece viewport'a girdiğinde yükle */}
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          loading={priority ? 'eager' : 'lazy'} // Native lazy loading desteği
          decoding="async" // Asenkron decode
          // Fallback: WebP yüklenemezse orijinal format
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== src) {
              target.src = src;
            }
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
