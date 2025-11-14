import { useState, useEffect } from 'react';

/**
 * Medya sorgusu hook'u - ekran boyutunu tespit eder
 * 
 * Kullanım:
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
 * const isDesktop = useMediaQuery('(min-width: 1025px)');
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // İlk kontrol
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Değişiklikleri dinle
    const listener = () => setMatches(media.matches);
    
    // Modern tarayıcılar için
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } 
    // Eski tarayıcılar için fallback
    else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
};

// Hazır hook'lar
export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
export const useIsTablet = () => useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1025px)');
