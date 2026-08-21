import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenLegal?: () => void;
  onOpenSupport?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenSupport }) => {
  return (
    <footer className="bg-[#0da98b] text-white py-12 px-6 border-t border-white/20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <button 
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer focus:outline-none"
          aria-label="Viflo Home"
        >
          <Logo variant="light" size="lg" />
        </button>

        <ul className="flex flex-wrap items-center gap-6 text-xs text-emerald-50 font-semibold list-none">
          <li>
            <button 
              type="button"
              onClick={onOpenLegal}
              className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </li>
          <li>
            <button 
              type="button"
              onClick={onOpenLegal}
              className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
          </li>
          <li>
            <button 
              type="button"
              onClick={onOpenSupport}
              className="hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Contact Support
            </button>
          </li>
        </ul>

        <div className="text-xs text-emerald-100/90 font-medium">
          © {new Date().getFullYear()} Viflo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};



