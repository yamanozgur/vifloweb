import React from 'react';
import { motion } from 'motion/react';
import { Shield, Calendar, MapPin, Globe, History, Lock, Bell, Sparkles } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schengen 90/180 Rolling Calculator",
      description: "Automatically tracks your rolling 180-day window across all 29 Schengen member states. Never accidentally overstay the 90-day limit again."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Automated Expiry Alerts",
      description: "Get smart push notifications 30, 15, and 7 days before your visa, passport, or stay limits are reached."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Smart Border Log",
      description: "When you cross a border, Viflo detects the entry country and updates stay allowances automatically."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Dual & Multi-Passport",
      description: "Dual citizens can manage entry permissions across multiple passports seamlessly in one profile."
    },
    {
      icon: <History className="w-6 h-6" />,
      title: "Residency & 183-Day Tax Watch",
      description: "Track physical presence requirements for tax residency and golden visas with real-time threshold monitoring."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "100% Private & Offline",
      description: "Your passport information and flight history stay strictly on your local device. Zero cloud tracking."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-[#f2faf8] text-[#003837] relative">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04aa92]/15 border border-[#04aa92]/25 text-[#047867] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#04aa92]" /> Built for Global Nomads & Frequent Travelers
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#003837]">
            Everything a border-crossing traveler needs.
          </h2>
          <p className="text-[#047867] text-base md:text-lg font-medium">
            Say goodbye to confusing visa spreadsheets. Viflo keeps your active stays, entry rights, and Schengen counters completely under control.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-[#04aa92]/20 flex flex-col space-y-4 hover:border-[#04aa92]/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#04aa92]/15 flex items-center justify-center text-[#047867]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-[#003837]">
                {feature.title}
              </h3>
              <p className="text-[#047867] text-sm font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


