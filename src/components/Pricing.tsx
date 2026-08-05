import React, { useState } from 'react';
import { Check, X, AlertTriangle, Sparkles, ShieldCheck, Lock } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  free: string;
  freeStatus: 'ok' | 'warn' | 'lock';
  premium: string;
  premiumStatus: 'ok';
}

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  const comparisonFeatures: ComparisonFeature[] = [
    {
      name: "Active Visa Tracking",
      free: "2 Active Visas",
      freeStatus: "ok",
      premium: "Unlimited Visas",
      premiumStatus: "ok"
    },
    {
      name: "Passport Addition",
      free: "1 Passport",
      freeStatus: "ok",
      premium: "Unlimited (Dual Citizenship)",
      premiumStatus: "ok"
    },
    {
      name: "Residency Permit Tracker",
      free: "Locked",
      freeStatus: "lock",
      premium: "Unlimited with Annual Day Counter",
      premiumStatus: "ok"
    },
    {
      name: "Schengen 90/180 & Safe Return Calculator",
      free: "Basic Counter",
      freeStatus: "warn",
      premium: "Advanced 180-Day Rolling Window & Reset Date",
      premiumStatus: "ok"
    },
    {
      name: "183-Day Tax Residency Watch",
      free: "Locked",
      freeStatus: "lock",
      premium: "Full Tracking & Smart Alerts",
      premiumStatus: "ok"
    },
    {
      name: "Calendar Sync (.ics)",
      free: "Locked",
      freeStatus: "lock",
      premium: "Google & Apple Calendar Integration",
      premiumStatus: "ok"
    },
    {
      name: "Cloud Backup & Cross-Device Sync",
      free: "Local Storage Only",
      freeStatus: "lock",
      premium: "Firebase Cloud Sync (Multi-Device)",
      premiumStatus: "ok"
    },
    {
      name: "Export Reports & Footprint Card",
      free: "Locked",
      freeStatus: "lock",
      premium: "PDF, CSV & Digital Footprint Card",
      premiumStatus: "ok"
    },
    {
      name: "Ad Experience",
      free: "Sponsored Content",
      freeStatus: "warn",
      premium: "100% Ad-Free",
      premiumStatus: "ok"
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-[#f2faf8] text-[#003837] relative">
      <div className="max-w-5xl mx-auto space-y-16">
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
              aria-label="Toggle annual or monthly billing"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-3xl border border-[#04aa92]/20 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="text-lg font-bold text-[#047867]">Free Plan</div>
              <div className="text-4xl font-black text-[#003837]">$0 <span className="text-sm font-normal text-[#047867]">/ forever</span></div>
              <p className="text-[#047867] text-sm font-medium">Essential visa & trip tracking for casual travelers.</p>
              <hr className="border-[#04aa92]/15" />

              <ul className="space-y-3 text-sm text-[#003837] font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92] shrink-0" /> 1 Passport Tracked
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92] shrink-0" /> Up to 2 Active Visas
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92] shrink-0" /> 199+ Country visa requirements database
                </li>
                <li className="flex items-center gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" /> Basic Schengen 90/180 Counter
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#04aa92] shrink-0" /> Local-Only Device Storage
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <Lock className="w-4 h-4 text-slate-400 shrink-0" /> Residency Permit & Tax Residency Locked
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <Lock className="w-4 h-4 text-slate-400 shrink-0" /> Calendar Sync & Exports Locked
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
            <div className="absolute -top-3.5 right-6 bg-white text-[#003837] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#0da98b]" /> 7-Day Free Trial
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
                  <Check className="w-4 h-4 text-white shrink-0" /> Residency Permit & 183-Day Tax Residency Watch
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Advanced Schengen Rolling Window & Safe Return Date
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Auto-Sync with Google & Apple Calendar (.ics)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Multi-Device Encrypted Firebase Cloud Sync
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> Export PDF, CSV & Digital Footprint Share Card
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-white shrink-0" /> 100% Ad-Free Experience
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

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#04aa92]/20 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#04aa92]/15 pb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#003837]">
                Free vs Premium Feature Comparison
              </h3>
              <p className="text-sm text-[#047867] mt-1 font-medium">
                Choose the right Viflo plan for your travel and residency tracking needs.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#04aa92]/10 text-[#047867] text-xs font-bold border border-[#04aa92]/20">
              <ShieldCheck className="w-4 h-4 text-[#0da98b]" />
              Cancel anytime
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#04aa92]/15 text-xs uppercase tracking-wider text-[#047867]">
                  <th className="py-3 px-4 font-extrabold w-2/5">Feature</th>
                  <th className="py-3 px-4 font-extrabold w-3/10 text-center bg-slate-50/80 rounded-t-xl">Free Plan</th>
                  <th className="py-3 px-4 font-extrabold w-3/10 text-center bg-[#0da98b]/10 text-[#003837] rounded-t-xl">Premium Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#04aa92]/10 text-xs sm:text-sm">
                {comparisonFeatures.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#f0fbf9]/50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-[#003837]">
                      {item.name}
                    </td>
                    <td className="py-4 px-4 text-center bg-slate-50/50">
                      <div className="inline-flex items-center justify-center gap-1.5 font-medium text-slate-700">
                        {item.freeStatus === 'lock' && (
                          <span className="inline-flex items-center gap-1 text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full text-xs font-bold">
                            <X className="w-3.5 h-3.5" /> {item.free}
                          </span>
                        )}
                        {item.freeStatus === 'warn' && (
                          <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-bold">
                            <AlertTriangle className="w-3.5 h-3.5" /> {item.free}
                          </span>
                        )}
                        {item.freeStatus === 'ok' && (
                          <span className="inline-flex items-center gap-1 text-[#003837] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-xs font-bold">
                            <Check className="w-3.5 h-3.5 text-[#0da98b]" /> {item.free}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center bg-[#0da98b]/5 font-bold text-[#003837]">
                      <span className="inline-flex items-center gap-1 text-[#003837] bg-[#0da98b]/15 border border-[#0da98b]/30 px-3 py-1 rounded-full text-xs font-black shadow-2xs">
                        <Check className="w-3.5 h-3.5 text-[#0da98b]" /> {item.premium}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};



