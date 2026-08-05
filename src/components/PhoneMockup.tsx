import React from 'react';
import { motion } from 'motion/react';
import { SchengenCard } from './SchengenCard';
import { 
  MapPin, 
  Plus, 
  Clock, 
  User, 
  LayoutGrid, 
  CreditCard, 
  BellRing, 
  CheckCircle2 
} from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[380px] select-none">
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#04aa92]/30 to-[#04aa92]/20 rounded-[55px] blur-2xl opacity-80 pointer-events-none" />

      {/* Floating Badge Left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute -left-6 md:-left-10 top-20 z-30 bg-white/95 backdrop-blur-md p-3 px-4 rounded-2xl shadow-xl border border-[#04aa92]/20 flex items-center gap-3 text-slate-800"
      >
        <div className="w-9 h-9 rounded-xl bg-[#04aa92]/15 flex items-center justify-center text-[#047867] font-bold text-sm">
          🇯🇵
        </div>
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Current Location</div>
          <div className="text-xs font-bold text-[#047867] flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#04aa92]" /> 87 Days Remaining
          </div>
        </div>
      </motion.div>

      {/* Floating Badge Right */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-6 md:-right-10 bottom-28 z-30 bg-white/95 backdrop-blur-md p-3 px-4 rounded-2xl shadow-xl border border-[#04aa92]/20 flex items-center gap-3 text-slate-800"
      >
        <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600">
          <BellRing className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Schengen Allowance</div>
          <div className="text-xs font-bold text-slate-800">80 / 90 Days Used</div>
        </div>
      </motion.div>

      {/* Phone Frame - Clean Titanium Frame */}
      <div className="relative rounded-[48px] border-[8px] border-[#003837] bg-white p-2 shadow-2xl ring-1 ring-[#04aa92]/20">
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#002827] rounded-full z-40 flex items-center justify-end px-2">
          <div className="w-2 h-2 rounded-full bg-[#047867]" />
        </div>

        {/* Inner Screen */}
        <div className="relative rounded-[40px] bg-[#f8fafc] text-[#0f172a] overflow-hidden h-[630px] pt-7 flex flex-col font-sans">
          
          {/* Scrollable Dashboard Body */}
          <div className="flex-1 overflow-y-auto px-4 pt-3 pb-4 space-y-4 scrollbar-none">
            
            {/* Header / User Profile greeting */}
            <div className="flex items-center justify-between pt-1">
              <div>
                <div className="text-[10px] font-extrabold tracking-wider text-[#04aa92] uppercase">
                  GOOD AFTERNOON
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-tight">
                  Özgür Yaman
                </h3>
                <div className="text-[11px] text-slate-500 font-medium">
                  1 active visa · Premium Plan
                </div>
              </div>

              {/* Avatar circle */}
              <div className="w-10 h-10 rounded-full bg-[#04aa92] flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-white">
                ÖY
              </div>
            </div>

            {/* SECTION 1: CURRENT LOCATION */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-0.5">
                <span>📍</span> CURRENT LOCATION
              </div>

              {/* Miyajima Japan Location Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white p-4 shadow-md min-h-[200px] flex flex-col justify-between border border-slate-800">
                {/* Background Image */}
                <img 
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" 
                  alt="Japan Torii Gate" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-slate-900/20" />

                {/* Top Row inside Card */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-white p-0.5 flex items-center justify-center shadow-md overflow-hidden shrink-0">
                      <span className="text-xl">🇯🇵</span>
                    </div>
                    <div>
                      <div className="text-base font-bold text-white leading-tight">Japan</div>
                      <div className="text-[11px] text-slate-200 font-medium">Visa-Free Entry</div>
                    </div>
                  </div>

                  {/* Change Button */}
                  <button className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold border border-white/30 hover:bg-white/30 transition-colors">
                    <MapPin className="w-3 h-3" /> Change
                  </button>
                </div>

                {/* Middle Progress Bar */}
                <div className="relative z-10 space-y-1 mt-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-200 tracking-wider">
                    <span>STAY DURATION</span>
                    <span className="text-emerald-300 font-extrabold">3 / 90 days</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-300 rounded-full w-[10%]" />
                  </div>
                </div>

                {/* Bottom 3 Stat Boxes */}
                <div className="relative z-10 grid grid-cols-3 gap-2 pt-3">
                  <div className="bg-slate-950/60 backdrop-blur-md p-2 rounded-xl text-center border border-white/10">
                    <div className="text-lg font-black text-[#2DD4BF] leading-none">87</div>
                    <div className="text-[9px] text-slate-300 font-medium mt-0.5">Days Left</div>
                  </div>
                  <div className="bg-slate-950/60 backdrop-blur-md p-2 rounded-xl text-center border border-white/10">
                    <div className="text-lg font-black text-white leading-none">3</div>
                    <div className="text-[9px] text-slate-300 font-medium mt-0.5">Days In</div>
                  </div>
                  <div className="bg-slate-950/60 backdrop-blur-md p-1.5 rounded-xl text-center border border-white/10 flex flex-col justify-center">
                    <div className="text-xs font-black text-white leading-tight">29 Jul 2026</div>
                    <div className="text-[9px] text-slate-300 font-medium mt-0.5">Arrival</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: ACTIVE VISAS */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-0.5">
                ACTIVE VISAS
              </div>

              {/* Schengen Visa Card */}
              <div className="bg-white rounded-2xl p-3.5 border border-indigo-100 shadow-sm space-y-3">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-amber-300 text-xs font-bold shrink-0">
                      🇪🇺
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900 leading-tight">Schengen</div>
                      <div className="text-[10px] text-slate-500 font-medium">Multiple Entry · 213 days total</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    ACTIVE
                  </span>
                </div>

                {/* Passport Badge */}
                <div className="flex items-center gap-1.5 text-[10px] text-slate-600 font-medium bg-indigo-50/70 p-1.5 px-2.5 rounded-xl border border-indigo-100/60">
                  <span>Passport: Turkey</span>
                  <span className="inline-flex items-center gap-1 text-indigo-900 font-semibold bg-white px-2 py-0.5 rounded-md shadow-2xs">
                    🇩🇪 Issued by Germany
                  </span>
                </div>

                {/* Visa Validity bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                    <span>Visa validity</span>
                    <span className="font-bold text-slate-800">60 / 213 days</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full w-[28%]" />
                  </div>
                </div>

                {/* 3 Metrics Row */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center border-t border-slate-100">
                  <div>
                    <div className="text-base font-black text-indigo-700">153</div>
                    <div className="text-[9px] text-slate-400 font-medium">Days Left</div>
                  </div>
                  <div className="border-x border-slate-100">
                    <div className="text-base font-black text-slate-800">80</div>
                    <div className="text-[9px] text-slate-400 font-medium">Stay Allowance</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-indigo-900 leading-tight pt-1">31 Dec 2026</div>
                    <div className="text-[9px] text-slate-400 font-medium">Expires</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: EU SCHENGEN 90/180 RULE */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-0.5">
                EU SCHENGEN 90/180 RULE
              </div>

              <SchengenCard compact />
            </div>

          </div>

          {/* Bottom Fixed App Navigation Bar */}
          <div className="p-2.5 px-4 border-t border-slate-200/80 bg-white flex items-center justify-between text-slate-400">
            <button className="flex flex-col items-center gap-0.5 text-[#04aa92]">
              <LayoutGrid className="w-4 h-4" />
              <span className="text-[9px] font-bold">Dashboard</span>
            </button>

            <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
              <CreditCard className="w-4 h-4" />
              <span className="text-[9px] font-medium">Visas</span>
            </button>

            <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
              <div className="w-7 h-7 rounded-full bg-[#04aa92] text-white flex items-center justify-center shadow-xs">
                <Plus className="w-4 h-4" />
              </div>
            </button>

            <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
              <Clock className="w-4 h-4" />
              <span className="text-[9px] font-medium">History</span>
            </button>

            <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
              <User className="w-4 h-4" />
              <span className="text-[9px] font-medium">Profile</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};


