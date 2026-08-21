import React from 'react';
import { Smartphone, Sparkles } from 'lucide-react';

interface ShowcaseItem {
  id: number;
  image: string;
  tag: string;
  title: string;
  desc: string;
}

export const AppShowcase: React.FC = () => {
  const screens: ShowcaseItem[] = [
    {
      id: 1,
      image: '/showcase/store1.webp',
      tag: 'Dashboard',
      title: '90/180 Rolling Tracker',
      desc: 'Real-time Schengen rolling window countdown.'
    },
    {
      id: 2,
      image: '/showcase/store2.webp',
      tag: 'Travel Map',
      title: 'Interactive Travel Map',
      desc: 'Visualize visited countries & visa zones.'
    },
    {
      id: 3,
      image: '/showcase/store3.webp',
      tag: 'Visa Vault',
      title: 'Visa & Passport Wallet',
      desc: 'Organize multiple visas and stay allowances.'
    },
    {
      id: 4,
      image: '/showcase/store4.webp',
      tag: 'Tax Status',
      title: '183-Day Presence Tracker',
      desc: 'Monitor physical presence per country.'
    },
    {
      id: 5,
      image: '/showcase/store5.webp',
      tag: 'Safe Re-Entry',
      title: 'Trip Simulator',
      desc: 'Calculate safe return dates before booking.'
    },
    {
      id: 6,
      image: '/showcase/store6.webp',
      tag: 'Fast Logging',
      title: '2-Tap Entry & Sync',
      desc: 'Quick entry logging with calendar integration.'
    }
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
              className="bg-white rounded-2xl p-2 sm:p-2.5 border border-[#04aa92]/20 hover:border-[#04aa92]/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col space-y-2.5 group"
            >
              {/* Compact Screenshot container */}
              <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-[#04aa92]/10 aspect-[9/18]">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover select-none group-hover:scale-102 transition-transform duration-300 pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Minimal caption */}
              <div className="px-1 space-y-0.5">
                <span className="text-[10px] font-extrabold text-[#04aa92] uppercase tracking-wider block">
                  {screen.tag}
                </span>
                <h3 className="text-xs font-black text-[#003837] truncate leading-tight">
                  {screen.title}
                </h3>
                <p className="text-[11px] text-[#047867] font-medium leading-snug line-clamp-2">
                  {screen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
