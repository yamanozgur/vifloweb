import React from 'react';
import { ArrowRight, Compass, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Add Visa',
      tagline: 'Custom Visa & Country Rules',
      desc: 'Pick your country, passport, entry type (Multiple, Single, Visa-Free), validity dates, and max allowed stay in just a few taps.',
      badge: 'Step 1',
      icon: ShieldCheck,
      details: [
        'Country & Passport selection',
        'Entry type: Multiple, Single or Visa-Free',
        'Validity dates, max stay (days) & past used days'
      ],
      previewContent: (
        <div className="bg-[#eaf7f5] rounded-2xl p-3.5 border border-[#04aa92]/20 space-y-2 text-left">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#047867] uppercase tracking-wider">Country & Passport</span>
            <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-[#04aa92] text-white uppercase">Multiple</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#04aa92]/15 shadow-xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-[#003837]">Germany · Turkey Passport</span>
              <span className="text-[10px] font-bold text-[#047867]">Max 90 Days</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#047867]/80 font-medium">
              <span>Validity: 01.01.2026 – 31.12.2026</span>
              <span>Used: 40d</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '02',
      title: 'Set Location',
      tagline: 'Instant Trip & Border Logging',
      desc: 'Log trips manually in 2 taps, import your past itinerary, or sync directly with Google & Apple Calendar (.ics).',
      badge: 'Step 2',
      icon: MapPin,
      details: [
        '2-tap arrival & departure logging',
        'Instant Google & Apple Calendar sync',
        'Zero battery drain & local privacy'
      ],
      previewContent: (
        <div className="bg-[#eaf7f5] rounded-2xl p-4 border border-[#04aa92]/20 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#047867] uppercase tracking-wider">Current Zone</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">In Progress</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-[#04aa92]/15 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#04aa92]/15 flex items-center justify-center font-bold text-sm text-[#003837]">
              🇪🇸
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-black text-[#003837] truncate">Spain · Schengen Zone</div>
              <div className="text-[10px] text-[#047867] font-medium">Entered: Aug 12 · Day 34/90</div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '03',
      title: 'Track Everything',
      tagline: 'Real-Time Compliance & Alerts',
      desc: 'Viflo computes Schengen 90/180 rolling days, safe return dates, 183-day tax status, and alerts you before any overstay.',
      badge: 'Step 3',
      icon: Compass,
      details: [
        'Schengen 90/180 exact rolling calculator',
        'Exact safe re-entry dates & overstay alerts',
        '183-day physical presence & tax tracker'
      ],
      previewContent: (
        <div className="bg-[#eaf7f5] rounded-2xl p-4 border border-[#04aa92]/20 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-[#047867] uppercase tracking-wider">Status Overview</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> 100% Compliant
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-[#04aa92]/15 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center font-bold text-sm text-emerald-700">
              ✓
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-black text-[#003837]">56 Days Remaining</div>
              <div className="text-[10px] text-[#047867] font-medium">Safe Re-entry: Nov 15, 2026</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-white text-[#003837] relative overflow-hidden border-y border-[#04aa92]/15">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#04aa92]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00CFCB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04aa92]/15 text-[#047867] border border-[#04aa92]/25 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#04aa92]" /> Simple 3-Step Flow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003837] tracking-tight">
            How It Works
          </h2>
          <p className="text-[#047867] text-base sm:text-lg font-medium">
            From setup to full peace of mind in less than 2 minutes. Stay compliant across borders with zero guesswork.
          </p>

          {/* Quick Flow Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-[#f2faf8] px-4 sm:px-6 py-2.5 rounded-full border border-[#04aa92]/20 text-xs sm:text-sm font-extrabold text-[#003837] shadow-xs">
            <span>Add Your Visa</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#04aa92]" />
            <span>Set Location</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#04aa92]" />
            <span className="text-[#047867]">Track Everything</span>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-[#f8fdfc] rounded-3xl p-6 sm:p-7 border border-[#04aa92]/20 hover:border-[#04aa92]/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md relative group"
              >
                {/* Step Top Bar */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#04aa92] text-white flex items-center justify-center shadow-md shadow-[#04aa92]/25 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-[#04aa92]/30 group-hover:text-[#04aa92]/60 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-[#04aa92] uppercase tracking-wider">
                      {step.tagline}
                    </span>
                    <h3 className="text-xl font-black text-[#003837] mt-0.5">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#047867] font-medium leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-[#04aa92]/10">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs font-medium text-[#003837]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#04aa92] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Preview Box */}
                {step.previewContent}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="bg-[#e0f4f1] border border-[#04aa92]/30 rounded-3xl p-6 sm:p-8 text-[#003837] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-[#003837]">
              Ready to automate your visa & travel compliance?
            </h4>
            <p className="text-xs sm:text-sm text-[#047867] font-medium">
              Start your 7-day free trial today. No setup fees, cancel anytime.
            </p>
          </div>
          <a 
            href="#download" 
            className="whitespace-nowrap shrink-0 px-6 py-3.5 rounded-2xl bg-[#04aa92] hover:bg-[#039882] text-white font-extrabold text-sm shadow-md shadow-[#04aa92]/25 transition-all transform hover:-translate-y-0.5"
          >
            Get Started Now
          </a>
        </div>

      </div>
    </section>
  );
};
