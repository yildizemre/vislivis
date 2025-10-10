import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LiveSupportWidget from './components/LiveSupportWidget';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutUsPage from './components/AboutUsPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import DocumentationPage from './pages/DocumentationPage';
import SupportCenterPage from './pages/SupportCenterPage';
import SystemStatusPage from './pages/SystemStatusPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
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
          </Routes>
          <Footer />
          <LiveSupportWidget />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;