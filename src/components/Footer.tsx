import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenLegal?: () => void;
  onOpenSupport?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenSupport }) => {
  const handleLegalClick = (e: React.MouseEvent) => {
    if (onOpenLegal) {
      e.preventDefault();
      onOpenLegal();
    }
  };

  const handleSupportClick = (e: React.MouseEvent) => {
    if (onOpenSupport) {
      e.preventDefault();
      onOpenSupport();
    }
  };

  return (
    <footer className="bg-[#0da98b] text-white py-12 px-6 border-t border-white/20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" onClick={(e) => { if (window.location.hash) { window.location.hash = ''; } }}>
          <Logo variant="light" size="lg" />
        </a>

        <ul className="flex flex-wrap items-center gap-6 text-xs text-emerald-50 font-semibold list-none">
          <li>
            <a 
              href="#legal" 
              onClick={handleLegalClick}
              className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a 
              href="#legal" 
              onClick={handleLegalClick}
              className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a 
              href="#support" 
              onClick={handleSupportClick}
              className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Contact Support
            </a>
          </li>
        </ul>

        <div className="text-xs text-emerald-100/90 font-medium">
          © {new Date().getFullYear()} Viflo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


