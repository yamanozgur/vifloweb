import React from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#ffffff]/90 backdrop-blur-xl border-b border-[#04aa92]/15 shadow-sm transition-all duration-300">
      <button 
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center cursor-pointer focus:outline-none"
        aria-label="Viflo Home"
      >
        <Logo variant="brand" size="xl" showText={false} />
      </button>

      <ul className="hidden md:flex items-center gap-8 list-none">
        <li>
          <button 
            type="button" 
            onClick={() => scrollToSection('features')} 
            className="text-[#047867] hover:text-[#04aa92] text-sm font-medium transition-colors cursor-pointer"
          >
            Features
          </button>
        </li>
        <li>
          <button 
            type="button" 
            onClick={() => scrollToSection('showcase')} 
            className="text-[#047867] hover:text-[#04aa92] text-sm font-medium transition-colors cursor-pointer"
          >
            App Showcase
          </button>
        </li>
        <li>
          <button 
            type="button" 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-[#047867] hover:text-[#04aa92] text-sm font-medium transition-colors cursor-pointer"
          >
            How It Works
          </button>
        </li>
        <li>
          <button 
            type="button" 
            onClick={() => scrollToSection('pricing')} 
            className="text-[#047867] hover:text-[#04aa92] text-sm font-medium transition-colors cursor-pointer"
          >
            Pricing
          </button>
        </li>
        <li>
          <button 
            type="button" 
            onClick={() => scrollToSection('faq')} 
            className="text-[#047867] hover:text-[#04aa92] text-sm font-medium transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <button 
          type="button"
          onClick={() => scrollToSection('pricing')} 
          className="px-5 py-2.5 rounded-full bg-[#04aa92] hover:bg-[#03917c] text-white text-sm font-extrabold shadow-md shadow-[#04aa92]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          Get the App
        </button>
      </div>
    </nav>
  );
};


