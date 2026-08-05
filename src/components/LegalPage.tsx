import React, { useEffect } from 'react';
import { ArrowLeft, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { Footer } from './Footer';

interface LegalPageProps {
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#f4fbf9] text-[#003837] font-sans flex flex-col justify-between">
      {/* Top Standalone Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#04aa92]/15 px-6 md:px-12 py-4 flex items-center justify-between shadow-xs">
        <button 
          onClick={onBack} 
          className="flex items-center"
        >
          <Logo variant="brand" size="xl" showText={false} />
        </button>

        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0fbf9] hover:bg-[#e2f7f3] text-[#047867] border border-[#04aa92]/30 text-xs md:text-sm font-bold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Main Site
        </button>
      </header>

      {/* Main Legal Content Container */}
      <main className="py-12 md:py-20 px-6 max-w-4xl mx-auto space-y-10 grow">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04aa92]/15 text-[#047867] border border-[#04aa92]/25 text-xs font-bold uppercase tracking-wider">
            Legal Agreement, Disclaimers & Data Protection
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#003837]">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-[#047867] text-sm md:text-base font-medium max-w-2xl mx-auto">
            Please read these official terms and data policies carefully before using Viflo.
          </p>
        </div>

        {/* Important Legal Notice Banner */}
        <div className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-5 md:p-6 flex items-start gap-4 shadow-2xs">
          <div className="p-2.5 bg-amber-100 rounded-xl text-amber-800 shrink-0 mt-0.5">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-extrabold text-amber-950">Important Legal Notice</h4>
            <p className="text-sm font-semibold text-amber-900/90 leading-relaxed">
              Viflo is an independent planning tool. It does NOT provide official legal, tax, or immigration advice, nor is it affiliated with any government or embassy.
            </p>
          </div>
        </div>

        {/* Legal Terms Cards Stack */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#04aa92]/20 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#003837] font-black text-base md:text-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#04aa92]/15 text-[#047867] text-sm font-black">1</span>
              Non-Affiliation & Government Disclaimer
            </div>
            <p className="text-[#047867] text-sm md:text-base leading-relaxed font-medium md:pl-11">
              Viflo is developed independently by FlowSpot Studios. Viflo is not affiliated with, endorsed by, authorized by, or connected to the European Union, European Commission, Schengen Area authorities, or any national embassy, consulate, or border control agency worldwide. All official immigration and visa regulations must be confirmed directly with official government sources.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#04aa92]/20 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#003837] font-black text-base md:text-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#04aa92]/15 text-[#047867] text-sm font-black">2</span>
              Limitation of Liability & &quot;As-Is&quot; Service
            </div>
            <p className="text-[#047867] text-sm md:text-base leading-relaxed font-medium md:pl-11">
              All calculations (including Schengen 90/180 rolling window estimates, passport validity warnings, residency permit counters, and visa entry limits) are provided strictly for personal reference on an &quot;AS-IS&quot; and &quot;AS-AVAILABLE&quot; basis without warranties of any kind. FlowSpot Studios and its developers accept no liability for any denied entries, border detentions, overstay fines, flight cancellations, deportation proceedings, missed travel connections, or financial damages resulting from reliance on this application.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#04aa92]/20 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#003837] font-black text-base md:text-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#04aa92]/15 text-[#047867] text-sm font-black">3</span>
              Local-First Privacy & Data Rights (GDPR & CCPA)
            </div>
            <p className="text-[#047867] text-sm md:text-base leading-relaxed font-medium md:pl-11">
              Your privacy is our core principle. By default, all entered passport numbers, visa records, residence permit dates, and travel history remain stored locally on your device (browser localStorage/IndexedDB). We do not track, sell, share, or monetize your personal travel data to third parties. You retain complete ownership of your data and can delete or export all local records at any time from Settings.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#04aa92]/20 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#003837] font-black text-base md:text-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#04aa92]/15 text-[#047867] text-sm font-black">4</span>
              Optional Cloud Backup & Security
            </div>
            <p className="text-[#047867] text-sm md:text-base leading-relaxed font-medium md:pl-11">
              If you voluntarily create a cloud account for cross-device sync, your records are transmitted over encrypted TLS/SSL connections and stored in secure database infrastructure (Firebase). You have the right to request full account deletion and cloud data erasure (&quot;Right to be Forgotten&quot;) at any time.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#04aa92]/20 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#003837] font-black text-base md:text-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#04aa92]/15 text-[#047867] text-sm font-black">5</span>
              Location & Camera Permissions
            </div>
            <p className="text-[#047867] text-sm md:text-base leading-relaxed font-medium md:pl-11">
              GPS location permissions are strictly optional and used on-demand solely to assist in detecting your current country for entry logging. We do not perform background location tracking or store geographic route histories. Camera permissions are used on-demand on your device for document scanning; no raw camera images or video feeds are uploaded to external servers.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#04aa92]/20 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#003837] font-black text-base md:text-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#04aa92]/15 text-[#047867] text-sm font-black">6</span>
              Subscriptions & Payments
            </div>
            <p className="text-[#047867] text-sm md:text-base leading-relaxed font-medium md:pl-11">
              In-app purchases and subscriptions are processed directly through the official Google Play Store or Apple App Store. Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date via your store account settings. Refunds are managed directly by Google Play or Apple in accordance with their standard store policies.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#04aa92]/20 shadow-xs space-y-3">
            <div className="flex items-center gap-3 text-[#003837] font-black text-base md:text-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#04aa92]/15 text-[#047867] text-sm font-black">7</span>
              User Responsibility & Acceptance
            </div>
            <p className="text-[#047867] text-sm md:text-base leading-relaxed font-medium md:pl-11">
              You are solely responsible for ensuring the accuracy of all travel dates and passport details entered into Viflo. By using this application, you acknowledge that you have read, understood, and voluntarily agree to all Terms of Service and Privacy Policies contained herein.
            </p>
          </div>
        </div>

        {/* Footer Acknowledgement */}
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#047867] pt-4">
          <CheckCircle2 className="w-4 h-4 text-[#0da98b]" />
          <span>FlowSpot Studios · Viflo Privacy Policy & Terms of Service</span>
        </div>
      </main>

      <Footer onOpenLegal={() => {}} />
    </div>
  );
};
