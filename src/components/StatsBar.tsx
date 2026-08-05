import React from 'react';

export const StatsBar: React.FC = () => {
  const stats = [
    { num: '190+', label: 'Countries covered', sub: 'Global passport index' },
    { num: '39K+', label: 'Visa combinations', sub: 'Updated in real-time' },
    { num: '90/180', label: 'Schengen tracker', sub: 'Rolling window calculation' },
    { num: '100%', label: 'Offline & Private', sub: 'Data stays on device' }
  ];

  return (
    <section className="py-12 px-6 bg-white border-y border-[#04aa92]/15 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-[#f4fbf9] p-6 rounded-2xl border border-[#04aa92]/20 hover:border-[#04aa92]/50 transition-all duration-300 text-center space-y-1 group shadow-sm hover:shadow-md"
          >
            <div className="text-3xl md:text-4xl font-black text-[#04aa92] tracking-tight group-hover:scale-105 transition-transform">
              {stat.num}
            </div>
            <div className="text-sm font-bold text-[#003837]">{stat.label}</div>
            <div className="text-xs text-[#047867]/75 font-medium">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

