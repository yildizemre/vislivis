import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: object;
  robots?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = '/vislivis (6)-Photoroom.png',
  ogType = 'website',
  canonical,
  schema,
  robots
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = 'https://www.vislivis.com';
  const currentUrl = `${baseUrl}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Hreflang alternates (TR and EN share same path; x-default -> canonical)
    updateHrefLang('tr', currentUrl);
    updateHrefLang('en', currentUrl);
    updateHrefLang('x-default', canonicalUrl);

    // Title
    document.title = title;

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Vislivis');
    updateMetaTag('robots', robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    
    // Language
    updateMetaTag('language', 'Turkish, English');
    document.documentElement.lang = 'tr';

    // Open Graph
    updateMetaProperty('og:title', ogTitle || title);
    updateMetaProperty('og:description', ogDescription || description);
    updateMetaProperty('og:image', `${baseUrl}${ogImage}`);
    updateMetaProperty('og:url', currentUrl);
    updateMetaProperty('og:type', ogType);
    updateMetaProperty('og:site_name', 'Vislivis');
    updateMetaProperty('og:locale', 'tr_TR');
    updateMetaProperty('og:locale:alternate', 'en_US');

    // Twitter Card
    updateMetaName('twitter:card', 'summary_large_image');
    updateMetaName('twitter:title', ogTitle || title);
    updateMetaName('twitter:description', ogDescription || description);
    updateMetaName('twitter:image', `${baseUrl}${ogImage}`);
    updateMetaName('twitter:site', '@vislivis');
    updateMetaName('twitter:creator', '@vislivis');

    // Geographic
    updateMetaName('geo.region', 'TR-34');
    updateMetaName('geo.placename', 'Istanbul');
    updateMetaName('geo.position', '40.8533;29.3222');
    updateMetaName('ICBM', '40.8533, 29.3222');

    // Mobile
    updateMetaName('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    updateMetaName('mobile-web-app-capable', 'yes');
    updateMetaName('apple-mobile-web-app-capable', 'yes');
    updateMetaName('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaName('apple-mobile-web-app-title', 'Vislivis');

    // Security
    updateMetaHttpEquiv('X-UA-Compatible', 'IE=edge');
    updateMetaHttpEquiv('Content-Security-Policy', "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data:");

    // Theme
    updateMetaName('theme-color', '#111827');
    updateMetaName('msapplication-TileColor', '#111827');

    // Canonical
    updateCanonical(canonicalUrl);

    // Structured Data (JSON-LD)
    if (schema) {
      updateStructuredData(schema);
    }

    // Preconnect
    updatePreconnect('https://fonts.googleapis.com');
    updatePreconnect('https://fonts.gstatic.com');
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, currentUrl, canonicalUrl, schema]);

  return null;
};

// Helper functions
const updateMetaTag = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateMetaProperty = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateMetaName = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateMetaHttpEquiv = (httpEquiv: string, content: string) => {
  let element = document.querySelector(`meta[http-equiv="${httpEquiv}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('http-equiv', httpEquiv);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateCanonical = (url: string) => {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
};

const updateStructuredData = (schema: object) => {
  let element = document.querySelector('script[type="application/ld+json"]');
  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(schema);
};

const updatePreconnect = (url: string) => {
  if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
    const element = document.createElement('link');
    element.setAttribute('rel', 'preconnect');
    element.setAttribute('href', url);
    element.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(element);
  }
};

const updateHrefLang = (lang: string, href: string) => {
  let element = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'alternate');
    element.setAttribute('hreflang', lang);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

export default SEO;

