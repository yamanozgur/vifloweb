import React from 'react';
import { Smartphone } from 'lucide-react';
import store1 from '../assets/showcase/store1.webp';
import store2 from '../assets/showcase/store2.webp';
import store3 from '../assets/showcase/store3.webp';
import store4 from '../assets/showcase/store4.webp';
import store5 from '../assets/showcase/store5.webp';
import store6 from '../assets/showcase/store6.webp';

interface ShowcaseItem {
  id: number;
  image: string;
  alt: string;
}

export const AppShowcase: React.FC = () => {
  const screens: ShowcaseItem[] = [
    { id: 1, image: store1, alt: 'Viflo Screen 1' },
    { id: 2, image: store2, alt: 'Viflo Screen 2' },
    { id: 3, image: store3, alt: 'Viflo Screen 3' },
    { id: 4, image: store4, alt: 'Viflo Screen 4' },
    { id: 5, image: store5, alt: 'Viflo Screen 5' },
    { id: 6, image: store6, alt: 'Viflo Screen 6' },
  ];

  return (
    <section id="showcase" className="py-20 px-4 sm:px-6 bg-[#f7fcfb] text-[#003837] relative overflow-hidden border-b border-[#04aa92]/15">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#04aa92]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04aa92]/15 text-[#047867] border border-[#04aa92]/25 text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5 text-[#04aa92]" /> App Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#003837] tracking-tight">
            App Showcase
          </h2>
          <p className="text-[#047867] text-sm sm:text-base font-medium">
            A clean, private interface engineered for border freedom and peace of mind.
          </p>
        </div>

        {/* 6 Screens compact side-by-side layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {screens.map((screen) => (
            <div
              key={screen.id}
              className="bg-white rounded-2xl p-1.5 sm:p-2 border border-[#04aa92]/20 hover:border-[#04aa92]/50 shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              {/* Compact Screenshot container */}
              <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-[#04aa92]/10 aspect-[9/18]">
                <img
                  src={screen.image}
                  alt={screen.alt}
                  className="w-full h-full object-cover select-none group-hover:scale-102 transition-transform duration-300 pointer-events-none"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
