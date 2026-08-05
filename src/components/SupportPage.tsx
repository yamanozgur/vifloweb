import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, CheckCircle2, Mail, Clock, MessageSquare, HelpCircle } from 'lucide-react';
import { Logo } from './Logo';
import { Footer } from './Footer';

interface SupportPageProps {
  onBack: () => void;
  onOpenFaq?: () => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onBack, onOpenFaq }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    platform: 'iOS (App Store)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f4fbf9] text-[#003837] font-sans flex flex-col justify-between">
      {/* Top Header */}
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

      {/* Main Support Form & Info Content */}
      <main className="py-12 md:py-20 px-6 max-w-4xl mx-auto space-y-12 grow w-full">
        {/* Page Title Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04aa92]/15 text-[#047867] border border-[#04aa92]/25 text-xs font-bold uppercase tracking-wider">
            Viflo Customer Care
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#003837]">
            Contact Support & Feedback
          </h1>
          <p className="text-[#047867] text-sm md:text-base font-medium max-w-xl mx-auto">
            Have a question, feedback, or need help with your visa calculations? Send us a message and our support team will get back to you.
          </p>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-[#04aa92]/20 shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0da98b]/15 text-[#0da98b] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#047867] font-semibold">Direct Email</div>
              <div className="text-sm font-bold text-[#003837]">support@viflo.app</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#04aa92]/20 shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0da98b]/15 text-[#0da98b] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#047867] font-semibold">Response Time</div>
              <div className="text-sm font-bold text-[#003837]">Under 24 Hours</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#04aa92]/20 shadow-2xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0da98b]/15 text-[#0da98b] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#047867] font-semibold">Community & Help</div>
              <div className="text-sm font-bold text-[#003837]">100% Human Support</div>
            </div>
          </div>
        </div>

        {/* Support Form Card */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#04aa92]/20 shadow-md relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-5 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0da98b] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-[#003837]">
                Message Sent Successfully!
              </h3>
              <p className="text-[#047867] text-sm font-medium leading-relaxed">
                Thank you, <span className="font-bold text-[#003837]">{formData.name}</span>. We have received your inquiry regarding <span className="font-bold text-[#003837]">&quot;{formData.subject}&quot;</span>. A member of our support team will reply to <span className="underline font-semibold">{formData.email}</span> shortly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: 'General Inquiry',
                      platform: 'iOS (App Store)',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#f0fbf9] hover:bg-[#e2f7f3] text-[#047867] border border-[#04aa92]/30 text-xs font-bold transition-all"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wider text-[#003837]">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7fcfb] border border-[#04aa92]/30 text-[#003837] text-sm font-medium focus:outline-none focus:border-[#0da98b] focus:ring-2 focus:ring-[#0da98b]/20 transition-all placeholder:text-[#5c857e]/60"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wider text-[#003837]">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7fcfb] border border-[#04aa92]/30 text-[#003837] text-sm font-medium focus:outline-none focus:border-[#0da98b] focus:ring-2 focus:ring-[#0da98b]/20 transition-all placeholder:text-[#5c857e]/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Subject Category */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-extrabold uppercase tracking-wider text-[#003837]">
                    Topic / Category
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7fcfb] border border-[#04aa92]/30 text-[#003837] text-sm font-semibold focus:outline-none focus:border-[#0da98b] focus:ring-2 focus:ring-[#0da98b]/20 transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Schengen Calculator Help">Schengen Calculator Question</option>
                    <option value="Bug Report & Feedback">Bug Report or Feedback</option>
                    <option value="Subscription & Pro Plan">Subscription & Billing</option>
                    <option value="Passport Data & Privacy">Passport Data & Privacy</option>
                  </select>
                </div>

                {/* Platform */}
                <div className="space-y-2">
                  <label htmlFor="platform" className="block text-xs font-extrabold uppercase tracking-wider text-[#003837]">
                    App Version / Device
                  </label>
                  <select
                    id="platform"
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#f7fcfb] border border-[#04aa92]/30 text-[#003837] text-sm font-semibold focus:outline-none focus:border-[#0da98b] focus:ring-2 focus:ring-[#0da98b]/20 transition-all"
                  >
                    <option value="iOS (App Store)">iPhone / iOS App</option>
                    <option value="Android (Google Play)">Android / Google Play App</option>
                    <option value="Web Browser">Web Version</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-wider text-[#003837]">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe how we can assist you..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#f7fcfb] border border-[#04aa92]/30 text-[#003837] text-sm font-medium focus:outline-none focus:border-[#0da98b] focus:ring-2 focus:ring-[#0da98b]/20 transition-all placeholder:text-[#5c857e]/60 resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#047867] font-medium">
                  We respect your privacy. No personal data is shared with third parties.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#0da98b] hover:bg-[#0a8c73] text-white font-extrabold text-sm shadow-md transition-all active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer onOpenLegal={() => { window.location.hash = 'legal'; }} />
    </div>
  );
};
