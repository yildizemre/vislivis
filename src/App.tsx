import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LiveSupportWidget from './components/LiveSupportWidget';
import HomePage from './pages/HomePage';
import AboutUsPage from './components/AboutUsPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hakkimizda" element={<AboutUsPage />} />
          </Routes>
          <Footer />
          <LiveSupportWidget />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;