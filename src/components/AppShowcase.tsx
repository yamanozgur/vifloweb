import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Compass, 
  CalendarCheck, 
  Globe2, 
  FileText, 
  BellRing,
  Sparkles
} from 'lucide-react';
import store1 from '../assets/showcase/store1.webp';
import store2 from '../assets/showcase/store2.webp';
import store3 from '../assets/showcase/store3.webp';
import store4 from '../assets/showcase/store4.webp';
import store5 from '../assets/showcase/store5.webp';
import store6 from '../assets/showcase/store6.webp';

interface ShowcaseItem {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  highlights: { title: string; desc: string }[];
  image: string;
  githubRaw: string;
  alt: string;
}

export const AppShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const touchStartX = useRef<number>(0);

  const screens: ShowcaseItem[] = [
    { 
      id: 1,
      badge: 'LIVE DASHBOARD',
      title: 'Real-Time Visa & Passport Status',
      subtitle: 'Instant visibility over your worldwide mobility and stay limits.',
      description: 'See your active stay duration, remaining days, and valid visas at a single glance with intuitive color-coded status indicators and automated countdowns.',
      icon: ShieldCheck,
      highlights: [
        {
          title: 'Precision 90/180 rolling calculator',
          desc: 'Never risk an accidental overstay in the Schengen area.'
        },
        {
          title: 'Real-time stay counter',
          desc: 'Track your current country, arrival date, and days left.'
        },
        {
          title: 'Multi-visa wallet',
          desc: 'Instant summary of visa validity, entry counts, and issuing countries.'
        }
      ],
      image: store1, 
      githubRaw: 'https://raw.githubusercontent.com/yamanozgur/vifloweb/main/showcase/store1.webp', 
      alt: 'Viflo Live Dashboard Screen' 
    },
    { 
      id: 2,
      badge: 'TRAVEL FOOTPRINT',
      title: 'Your Visual Passport & Memories',
      subtitle: 'Collect custom digital visa stamps and track your lifetime journeys.',
      description: 'Transform your travel milestones into custom retro airport stamps and shareable travel footprint cards designed for your social stories.',
      icon: Compass,
      highlights: [
        {
          title: 'Personalized country stamps',
          desc: 'High-res badges generated for every country you explore.'
        },
        {
          title: 'Lifetime travel stats',
          desc: 'Total countries visited, days spent abroad, and trip counts.'
        },
        {
          title: 'Shareable footprint cards',
          desc: 'Export one-tap graphic cards for Instagram and friends.'
        }
      ],
      image: store2, 
      githubRaw: 'https://raw.githubusercontent.com/yamanozgur/vifloweb/main/showcase/store2.webp', 
      alt: 'Viflo Travel Footprint & Digital Stamps Screen' 
    },
    { 
      id: 3,
      badge: 'TRIP LOGGING & TAX MONITOR',
      title: 'Log Past & Upcoming Journeys',
      subtitle: 'Single-tap entries, instant day counts, and tax residency monitoring.',
      description: 'Effortlessly log past travels or schedule future trips to simulate your legal stay allowances and prevent accidental tax residency.',
      icon: CalendarCheck,
      highlights: [
        {
          title: 'Single-tap check-in & check-out',
          desc: 'Record entries and exits with precise date stamps.'
        },
        {
          title: '183-day tax compliance',
          desc: 'Proactive tracking to avoid unexpected tax liabilities.'
        },
        {
          title: 'Filterable travel journal',
          desc: 'Search your trip history by country, year, or custom notes.'
        }
      ],
      image: store3, 
      githubRaw: 'https://raw.githubusercontent.com/yamanozgur/vifloweb/main/showcase/store3.webp', 
      alt: 'Viflo Trip Logging and Tax Residency Monitor Screen' 
    },
    { 
      id: 4,
      badge: 'VISA REQUIREMENT CHECKER',
      title: 'Instant Checks for 190+ Countries',
      subtitle: 'Compare passport rules, visa-free stays, and entry requirements.',
      description: 'Select your passport and search any destination on Earth to get instant clarity on visa-free limits, eVisas, or visa requirements before you book.',
      icon: Globe2,
      highlights: [
        {
          title: '190+ country database',
          desc: 'Always up-to-date entry regulations and maximum stay limits.'
        },
        {
          title: 'Dual passport optimizer',
          desc: 'Compare your passports side-by-side to choose the best one.'
        },
        {
          title: 'One-tap embassy reference',
          desc: 'Quick access to official consulate guidelines.'
        }
      ],
      image: store4, 
      githubRaw: 'https://raw.githubusercontent.com/yamanozgur/vifloweb/main/showcase/store4.webp', 
      alt: 'Viflo Visa Requirement Checker Screen' 
    },
    { 
      id: 5,
      badge: 'DATA BACKUP & EMBASSY REPORTS',
      title: 'Encrypted Sync & Official Reports',
      subtitle: 'Private encrypted storage with one-tap official PDF & CSV exports.',
      description: 'Your travel records remain strictly yours. Sync securely across your devices or generate embassy-compliant travel logs for visa applications.',
      icon: FileText,
      highlights: [
        {
          title: 'Embassy-ready PDF reports',
          desc: 'Clean, formatted travel histories for visa submissions.'
        },
        {
          title: 'Full data ownership',
          desc: 'Instant JSON backup & restore without vendor lock-in.'
        },
        {
          title: 'Encrypted cloud sync',
          desc: 'Cross-device synchronization with GDPR-compliant data erasure.'
        }
      ],
      image: store5, 
      githubRaw: 'https://raw.githubusercontent.com/yamanozgur/vifloweb/main/showcase/store5.webp', 
      alt: 'Viflo Data Backup and Embassy Reports Screen' 
    },
    { 
      id: 6,
      badge: 'PROACTIVE RISK ALERTS',
      title: 'Smart Alerts Before You Risk an Overstay',
      subtitle: 'Passport expiry warnings and rolling limit reminders to keep you safe.',
      description: 'Get ahead of border issues with automated alerts for passport expiration thresholds, visa end dates, and Schengen allowance limits.',
      icon: BellRing,
      highlights: [
        {
          title: '6-month passport expiry alerts',
          desc: 'Timely warnings to renew before airlines deny boarding.'
        },
        {
          title: 'Overstay risk notifications',
          desc: 'Timely countdowns as you approach legal stay ceilings.'
        },
        {
          title: 'Calendar synchronization',
          desc: 'Add expiry and renewal events to Google & Apple Calendar.'
        }
      ],
      image: store6, 
      githubRaw: 'https://raw.githubusercontent.com/yamanozgur/vifloweb/main/showcase/store6.webp', 
      alt: 'Viflo Proactive Risk Alerts Screen' 
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const currentScreen = screens[activeIndex];
  const ActiveIcon = currentScreen.icon;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <section id="showcase" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f7fcfb] text-[#003837] relative overflow-hidden border-b border-[#04aa92]/15">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#04aa92]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04aa92]/15 border border-[#04aa92]/25 text-[#047867] text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5 text-[#04aa92]" /> App Showcase
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#003837]">
            Crafted for Clarity & Peace of Mind.
          </h2>
          <p className="text-[#047867] text-base md:text-lg font-medium">
            Explore the key features designed to give you total control over visas, border rules, and global travel.
          </p>
        </div>

        {/* Showcase Content Card */}
        <div 
          className="bg-white rounded-3xl p-6 sm:p-10 border border-[#04aa92]/20 shadow-xl shadow-[#04aa92]/5 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Left Column: Descriptions & Details */}
          <div className="md:col-span-7 space-y-5 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#04aa92]/10 text-[#047867] text-xs font-black tracking-wide uppercase border border-[#04aa92]/20">
                <ActiveIcon className="w-3.5 h-3.5 text-[#04aa92]" />
                0{currentScreen.id} / 06 · {currentScreen.badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#003837] tracking-tight leading-snug">
                {currentScreen.title}
              </h3>
              <p className="text-sm sm:text-base text-[#047867] font-semibold">
                {currentScreen.subtitle}
              </p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {currentScreen.description}
            </p>

            {/* Feature Bullet Highlights */}
            <div className="space-y-3 pt-3 border-t border-[#04aa92]/10">
              {currentScreen.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#003837] leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-[#04aa92]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-[#04aa92]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#003837]">{h.title}:</span>{' '}
                    <span className="text-slate-600 font-medium">{h.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#04aa92]/10">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl bg-[#f0fbf9] hover:bg-[#e0f4f1] text-[#003837] border border-[#04aa92]/20 transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl bg-[#04aa92] hover:bg-[#03917c] text-white shadow-xs transition-all active:scale-95 cursor-pointer"
                  aria-label="Next screen"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <span className="text-sm font-bold text-[#047867]">
                0{activeIndex + 1} / 06
              </span>
            </div>
          </div>

          {/* Right Column: Original Phone Graphic with Clean Outer Glow */}
          <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
            <SmartImage
              src={currentScreen.image}
              fallback={currentScreen.githubRaw}
              alt={currentScreen.alt}
              className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain select-none [filter:drop-shadow(0_0_18px_rgba(4,170,146,0.45))]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

interface SmartImageProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}

const SmartImage: React.FC<SmartImageProps> = ({ src, fallback, alt, className }) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [triedFallback, setTriedFallback] = useState<boolean>(false);

  useEffect(() => {
    setImgSrc(src);
    setTriedFallback(false);
  }, [src]);

  const handleError = () => {
    if (!triedFallback) {
      setTriedFallback(true);
      setImgSrc(fallback);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};
