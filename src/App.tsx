import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';
import ScrollToTop from './components/ScrollToTop';
import GoogleAnalytics from './components/GoogleAnalytics';
import HomePage from './pages/HomePage';
import AboutUsPage from './components/AboutUsPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DocumentationPage from './pages/DocumentationPage';
import SupportCenterPage from './pages/SupportCenterPage';
import SystemStatusPage from './pages/SystemStatusPage';
import ThankYouPage from './pages/ThankYouPage';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
        <GoogleAnalytics />
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hakkimizda" element={<AboutUsPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/support-center" element={<SupportCenterPage />} />
            <Route path="/system-status" element={<SystemStatusPage />} />
            <Route path="/tesekkurler" element={<ThankYouPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
          </Routes>
          <Footer />
          <ChatbotWidget />
        </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;