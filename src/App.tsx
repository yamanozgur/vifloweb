import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { BentoFeatures } from './components/BentoFeatures';
import { AppShowcase } from './components/AppShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FaqSection } from './components/FaqSection';
import { LegalPage } from './components/LegalPage';
import { SupportPage } from './components/SupportPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'legal' | 'support'>('home');

  useEffect(() => {
    // If there is any hash in the URL on initial mount, clean it up seamlessly
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const openLegal = () => {
    setCurrentPage('legal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openSupport = () => {
    setCurrentPage('support');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openFaq = () => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (currentPage === 'legal') {
    return <LegalPage onBack={openHome} onOpenSupport={openSupport} />;
  }

  if (currentPage === 'support') {
    return <SupportPage onBack={openHome} onOpenFaq={openFaq} onOpenLegal={openLegal} />;
  }

  return (
    <div className="min-h-screen bg-[#f2faf8] text-[#003837] font-sans antialiased selection:bg-[#00CFCB] selection:text-[#003837]">
      <Navbar />
      <Hero />
      <StatsBar />
      <BentoFeatures />
      <AppShowcase />
      <HowItWorks />
      <Pricing />
      <FaqSection />
      <Footer onOpenLegal={openLegal} onOpenSupport={openSupport} />
    </div>
  );
}

