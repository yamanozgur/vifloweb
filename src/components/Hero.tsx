import React from 'react';
import { PhoneMockup } from './PhoneMockup';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#f2faf8] via-[#e2f7f4] to-[#f2faf8]">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Text Content */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#04aa92]/20 text-[#047867] text-xs md:text-sm font-bold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#04aa92] animate-ping" />
            <span>Viflo · Built for Global Nomads & Frequent Travelers</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#003837] tracking-tight leading-[1.1]">
            Know exactly<br className="hidden sm:inline" /> where you <em className="italic font-normal text-[#04aa92]">stand.</em>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#047867] max-w-2xl font-medium leading-relaxed">
            Visa deadlines, Schengen 90/180 limits, entry requirements & passport rules — Viflo tracks everything so you can focus on the journey.
          </p>

          {/* Store Download Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#download" 
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0da98b] text-white hover:bg-[#0a8c73] shadow-lg shadow-[#0da98b]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold text-emerald-100/90 leading-tight">Download on the</div>
                <div className="text-base font-bold text-white leading-tight">App Store</div>
              </div>
            </a>

            <a 
              href="#download" 
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#0da98b] text-white hover:bg-[#0a8c73] shadow-lg shadow-[#0da98b]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M3.18 23.76c.3.17.65.19.98.08l12.76-7.37-2.73-2.74-11.01 10.03zM.12 1.04C.04 1.3 0 1.58 0 1.89v20.22c0 .31.04.59.12.85l11.11-11.11L.12 1.04zM20.44 10.1l-2.77-1.6-3.07 3.07 3.07 3.07 2.8-1.62c.8-.46.8-1.46-.03-1.92zM4.16.17L16.92 7.54l-2.73 2.73L3.18.24C3.51.13 3.86.04 4.16.17z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold text-emerald-100/90 leading-tight">Get it on</div>
                <div className="text-base font-bold text-white leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side Phone Showcase */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};

