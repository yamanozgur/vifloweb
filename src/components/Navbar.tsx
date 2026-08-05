import React from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#ffffff]/90 backdrop-blur-xl border-b border-[#04aa92]/15 shadow-sm transition-all duration-300">
      <a href="#" className="flex items-center">
        <Logo variant="brand" size="xl" showText={false} />
      </a>

      <ul className="hidden md:flex items-center gap-8 list-none">
        <li><a href="#features" className="text-[#047867] hover:text-[#04aa92] text-sm font-medium transition-colors">Features</a></li>
        <li><a href="#pricing" className="text-[#047867] hover:text-[#04aa92] text-sm font-medium transition-colors">Pricing</a></li>
        <li><a href="#faq" className="text-[#047867] hover:text-[#04aa92] text-sm font-medium transition-colors">FAQ</a></li>
      </ul>

      <div className="flex items-center gap-3">
        <a 
          href="#download" 
          className="px-5 py-2.5 rounded-full bg-[#04aa92] hover:bg-[#03917c] text-white text-sm font-extrabold shadow-md shadow-[#04aa92]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Get the App
        </a>
      </div>
    </nav>
  );
};

