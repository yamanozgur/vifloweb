import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { BentoFeatures } from './components/BentoFeatures';
import { Pricing } from './components/Pricing';
import { FaqSection } from './components/FaqSection';
import { LegalPage } from './components/LegalPage';
import { SupportPage } from './components/SupportPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'legal' | 'support'>(() => {
    if (window.location.hash === '#legal') return 'legal';
    if (window.location.hash === '#support') return 'support';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#legal') {
        setCurrentPage('legal');
      } else if (window.location.hash === '#support') {
        setCurrentPage('support');
      } else if (window.location.hash === '' || window.location.hash === '#') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openLegal = () => {
    window.location.hash = 'legal';
    setCurrentPage('legal');
  };

  const openSupport = () => {
    window.location.hash = 'support';
    setCurrentPage('support');
  };

  const openHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openFaq = () => {
    window.location.hash = 'faq';
    setCurrentPage('home');
  };

  if (currentPage === 'legal') {
    return <LegalPage onBack={openHome} />;
  }

  if (currentPage === 'support') {
    return <SupportPage onBack={openHome} onOpenFaq={openFaq} />;
  }

  return (
    <div className="min-h-screen bg-[#f2faf8] text-[#003837] font-sans antialiased selection:bg-[#00CFCB] selection:text-[#003837]">
      <Navbar />
      <Hero />
      <StatsBar />
      <BentoFeatures />
      <Pricing />
      <FaqSection />
      <Footer onOpenLegal={openLegal} onOpenSupport={openSupport} />
    </div>
  );
}
