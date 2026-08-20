import React, { useState } from 'react';
import { Check, AlertTriangle, Sparkles, Lock, Zap } from 'lucide-react';

type PlanOption = 'monthly' | 'annual' | 'founder';

export const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanOption>('annual');

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-[#f2faf8] text-[#003837] relative">
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
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Free Plan */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#04aa92]/20 flex flex-col justify-between space-y-6 shadow-sm">
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

          {/* Premium Plan (Featured) */}
          <div className="lg:col-span-7 bg-[#0da98b] p-6 sm:p-8 rounded-3xl border-2 border-white/40 flex flex-col justify-between space-y-6 relative shadow-xl text-white">
            <div className="absolute -top-3.5 right-6 bg-white text-[#003837] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#0da98b]" /> 7-Day Free Trial
            </div>

            <div className="space-y-5">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-lg font-bold text-emerald-100">
                    Premium Plan (Pro)
                  </div>
                  <div className="text-xs uppercase tracking-wider text-emerald-100/80 font-bold mt-0.5">
                    Select Your Plan (7-Day Free Trial Included)
                  </div>
                </div>
              </div>

              {/* Plan Switcher Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Monthly Option */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan('monthly')}
                  className={`p-3.5 rounded-2xl text-left transition-all relative border ${
                    selectedPlan === 'monthly'
                      ? 'bg-white text-[#003837] border-white shadow-md'
                      : 'bg-white/10 hover:bg-white/15 text-white border-white/20'
                  }`}
                >
                  <div className={`text-xs font-bold uppercase tracking-wider ${selectedPlan === 'monthly' ? 'text-[#047867]' : 'text-emerald-100'}`}>
                    Monthly
                  </div>
                  <div className="text-2xl font-black mt-1">
                    $3.99<span className="text-xs font-normal">/mo</span>
                  </div>
                  <div className={`text-[11px] font-medium mt-0.5 ${selectedPlan === 'monthly' ? 'text-[#047867]' : 'text-emerald-100/90'}`}>
                    7 days free trial
                  </div>
                </button>

                {/* Annual Option (Featured) */}
                <button
                  type="button"
                  onClick={() => setSelectedPlan('annual')}
                  className={`p-3.5 rounded-2xl text-left transition-all relative border ${
                    selectedPlan === 'annual'
                      ? 'bg-white text-[#003837] border-white shadow-md ring-2 ring-emerald-300'
                      : 'bg-white/10 hover:bg-white/15 text-white border-white/20'
                  }`}
                >
                  <div className="absolute -top-2.5 right-3 bg-[#04aa92] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Launch 50% OFF
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${selectedPlan === 'annual' ? 'text-[#047867]' : 'text-emerald-100'}`}>
                    Annual (Launch Promo)
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-2xl font-black">$19.99</span>
                    <span className="text-xs font-normal">/yr</span>
                    <span className={`text-xs line-through ${selectedPlan === 'annual' ? 'text-slate-400' : 'text-emerald-200/70'}`}>
                      $39.99
                    </span>
                  </div>
                  <div className={`text-[11px] font-medium mt-0.5 ${selectedPlan === 'annual' ? 'text-[#047867]' : 'text-emerald-100/90'}`}>
                    ~$1.66/month · 7 days free
                  </div>
                  <div className="inline-block mt-1 px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-bold">
                    Offer ends Sept 30, 2026
                  </div>
                </button>
              </div>

              {/* Founder Pass Lifetime Option */}
              <button
                type="button"
                onClick={() => setSelectedPlan('founder')}
                className={`w-full p-3.5 rounded-2xl text-left transition-all relative border border-dashed ${
                  selectedPlan === 'founder'
                    ? 'bg-amber-50 text-amber-950 border-amber-400 shadow-md ring-2 ring-amber-300'
                    : 'bg-white/10 hover:bg-white/15 text-white border-amber-300/60'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1 bg-[#f59e0b] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    <Zap className="w-3 h-3 fill-current" /> Founder Pass (First 200 Users Only)
                  </div>
                  <div className="text-lg font-black">
                    $49.99 <span className="text-xs font-semibold opacity-80">· One-Time Payment</span>
                  </div>
                </div>
                <div className={`text-xs font-medium mt-1.5 ${selectedPlan === 'founder' ? 'text-amber-900' : 'text-emerald-100'}`}>
                  Pay once, own forever. No recurring fees or subscriptions.
                </div>
              </button>

              <hr className="border-white/20" />

              {/* Features Included */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-white font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> Unlimited Passports & Visas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> Residency Permit Tracker
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> 183-Day Tax Residency Watch
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> Advanced Rolling Window
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> Calendar Sync (.ics)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> Multi-Device Cloud Sync
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> Export PDF, CSV & Footprint
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white shrink-0" /> 100% Ad-Free Experience
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <a 
                href="#download" 
                className="w-full py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-[#003837] font-extrabold text-center block shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                {selectedPlan === 'founder' ? 'Claim Founder Pass ($49.99)' : 'Start 7-Day Free Trial'}
              </a>
              <p className="text-center text-xs font-semibold text-emerald-100">
                {selectedPlan === 'founder' ? 'Lifetime Access · First 200 Users Only' : '7 Days $0.00 · Cancel anytime in 1-click'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};





