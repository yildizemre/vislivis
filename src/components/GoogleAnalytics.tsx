import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Google Analytics 4 (GA4) Entegrasyonu
 * 
 * Kullanım:
 * 1. .env dosyasına VITE_GA_MEASUREMENT_ID ekle
 * 2. App.tsx'e bu bileşeni ekle
 * 
 * Takip edilen:
 * - Sayfa görüntülemeleri (page_view)
 * - Scroll derinliği
 * - Dış link tıklamaları
 * - Form gönderileri
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // GA4 Measurement ID yoksa çalıştırma
    if (!GA_MEASUREMENT_ID) {
      console.warn('Google Analytics Measurement ID bulunamadı. .env dosyasına VITE_GA_MEASUREMENT_ID ekleyin.');
      return;
    }

    // Google Analytics script'ini yükle
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // gtag fonksiyonunu başlat
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date() as any);
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false, // Manuel sayfa takibi yapacağız
    });

    return () => {
      // Cleanup
      document.head.removeChild(script1);
    };
  }, []);

  // Sayfa değişikliklerini takip et
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;

    // Sayfa görüntüleme eventi gönder
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location]);

  // Scroll derinliği takibi
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;

    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercentage > maxScroll && scrollPercentage % 25 === 0) {
        maxScroll = scrollPercentage;
        window.gtag?.('event', 'scroll', {
          percent_scrolled: scrollPercentage,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // Bu bileşen görsel bir şey render etmez
};

// Event tracking fonksiyonları (diğer componentlerden kullanmak için)
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
};

// Özel event'ler
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
};

export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
};

export const trackOutboundLink = (url: string) => {
  trackEvent('outbound_link', {
    link_url: url,
  });
};

export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_play', {
    video_name: videoName,
  });
};

export const trackSearch = (searchTerm: string) => {
  trackEvent('search', {
    search_term: searchTerm,
  });
};

export default GoogleAnalytics;
