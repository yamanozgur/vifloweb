import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <section id="pricing" className="py-24 px-6 bg-[#f2faf8] text-[#003837] relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04aa92]/15 text-[#047867] border border-[#04aa92]/25 text-xs font-bold uppercase tracking-wider">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#003837]">
            Start free. Upgrade when ready.
          </h2>
          <p className="text-[#047867] text-base font-medium">
            Essential visa & trip tracking for casual travelers. Complete peace of mind for digital nomads, dual citizens & frequent flyers.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-[#003837]' : 'text-[#047867]/60'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-[#e0f4f1] rounded-full p-1 relative transition-colors focus:outline-none border border-[#04aa92]/30"
            >
              <div 
                className={`w-6 h-6 rounded-full bg-[#04aa92] transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} 
              />
            </button>
            <span className={`text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-[#003837]' : 'text-[#047867]/60'}`}>
              Annual
              <span className="text-[10px] bg-[#04aa92]/20 text-[#047867] px-2 py-0.5 rounded-full border border-[#04aa92]/30 font-bold">
                SAVE 25% ($44.99/yr)
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
          
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-3xl border border-[#04aa92]/20 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="text-lg font-bold text-[#047867]">Free Plan</div>
              <div className="text-4xl font-black text-[#003837]">$0 <span className="text-sm font-normal text-[#047867]">/ forever</span></div>
              <p className="text-[#047867] text-sm font-medium">Essential visa & trip tracking for casual travelers.</p>
              <hr className="border-[#04aa92]/15" />

              <ul className="space-y-3 text-sm text-[#003837] font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92]" /> Track 1 Passport
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92]" /> Up to 3 Active Visas
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92]" /> 199+ Country visa requirements database
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92]" /> Basic Schengen 90/180 allowance check
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92]" /> Travel History (Last 10 Trips)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92]" /> Local-only device storage
                </li>
              </ul>
            </div>

            <a 
              href="#download" 
              className="w-full py-3.5 rounded-2xl bg-[#f0fbf9] hover:bg-[#e0f4f1] text-[#003837] font-bold text-center border border-[#04aa92]/25 transition-colors"
            >
              Get Started Free
            </a>
          </div>

          {/* Pro Plan (Featured) */}
          <div className="bg-[#0da98b] p-8 rounded-3xl border-2 border-white/40 flex flex-col justify-between space-y-6 relative shadow-xl text-white">
            <div className="absolute -top-3.5 right-6 bg-white text-[#003837] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              7-Day Free Trial
            </div>

            <div className="space-y-4">
              <div className="text-lg font-bold text-emerald-100">
                Premium Plan (Pro)
              </div>
              <div className="text-4xl font-black text-white">
                {isAnnual ? '$44.99' : '$4.99'} 
                <span className="text-sm font-normal text-emerald-100/90"> {isAnnual ? '/ year' : '/ month'}</span>
              </div>
              <p className="text-xs text-white font-bold">
                {isAnnual ? 'Includes 7-Day Free Trial · Save $14.89 yearly' : 'Includes 7-Day Free Trial · Cancel anytime'}
              </p>
              <p className="text-emerald-50 text-sm font-medium">Complete peace of mind for digital nomads, dual citizens & frequent flyers.</p>
              <hr className="border-white/20" />

              <ul className="space-y-3 text-sm text-white font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Unlimited Passports & Visas (Dual Citizenship)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Residency Permit & 183-Day Tax Watch
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Advanced Schengen Rolling Calculator & Safe Return Date
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Auto-Sync with Google & Apple Calendar (.ics)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Multi-Device Encrypted Cloud Sync
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Exportable PDF & CSV Reports for Embassies/Tax
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> World Map Footprint & High-Res Share Cards
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> 100% Ad-Free & Smart Expiration Alerts
                </li>
              </ul>
            </div>

            <a 
              href="#download" 
              className="w-full py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-[#003837] font-extrabold text-center shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Start 7-Day Free Trial
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

