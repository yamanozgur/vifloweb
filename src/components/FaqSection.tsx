import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How does the rolling 180-day window work?',
      answer: "Every day you are in Schengen, the app looks back exactly 180 days from that date and sums up your stay. Your allowance shifts continuously as past travel days age past 180 days."
    },
    {
      question: 'Why do I need 6 months of passport validity?',
      answer: "Most foreign countries reject entry or airline boarding if your passport expires in under 6 months. Viflo notifies you well in advance so you can renew your passport smoothly."
    },
    {
      question: 'Does Viflo issue official visas?',
      answer: "No. Viflo is an intelligent personal tracker and organizer. Official entry rules and visa applications must always be confirmed with official consulates or government portals."
    },
    {
      question: 'Is my passport and travel location data secure?',
      answer: 'Yes, 100%. Viflo is built with a privacy-first local architecture. Your passport credentials, visa details, and border crossing history remain encrypted directly on your phone. We do not sell or store your personal travel history on external servers.'
    },
    {
      question: 'Does Viflo work offline without internet connection?',
      answer: 'Absolutely. All country visa rules, Schengen 90/180 calculation engines, and passport vault information are cached locally inside the app. You can log border crossings and check visa rights mid-flight or at remote passport controls.'
    },
    {
      question: 'Can I add multiple passports for dual citizenship?',
      answer: 'Yes! Viflo Pro supports multiple passport profiles. You can switch between your primary and secondary citizenship to compare entry requirements and maximize visa-free travel allowances.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white text-[#003837] relative">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04aa92]/15 text-[#047867] border border-[#04aa92]/25 text-xs font-bold uppercase tracking-wider">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#003837]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#047867] text-base font-medium">
            Everything you need to know about Viflo and Schengen stay tracking.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-[#f4fbf9] rounded-2xl border border-[#04aa92]/20 overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base md:text-lg font-bold text-[#003837]">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#04aa92] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#047867] leading-relaxed border-t border-[#04aa92]/15 pt-4 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

