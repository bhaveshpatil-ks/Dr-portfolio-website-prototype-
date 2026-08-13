import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PatientFAQ({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What documents should I bring to my first appointment?',
      a: 'Please bring a valid photo ID, your active health insurance card, a list of current medications (or medication bottles), and any recent blood test results or diagnostic imaging CDs from the past 6 months.',
    },
    {
      q: 'How does in-network insurance verification work?',
      a: 'Apex Healthcare directly verifies your insurance plan benefits prior to your appointment. We accept Blue Cross Blue Shield, Aetna, Cigna, Medicare, UnitedHealthcare, and concierge self-pay options.',
    },
    {
      q: 'How quickly can I access my diagnostic imaging & blood test lab results?',
      a: 'All blood panel biomarkers (ApoB, lipid counts, HbA1c) and in-office ultrasound reports are uploaded to your secure Patient Portal within 24 to 48 hours with detailed physician notes from Dr. Leelavati Salunkhe.',
    },
    {
      q: 'What is the procedure for prescription refills?',
      a: 'Prescription refills can be requested directly through your Patient Portal or by having your pharmacy send an electronic refill request to our clinical team. Refills are processed within 24 business hours.',
    },
    {
      q: 'What should I do if I am experiencing acute chest pain or emergency symptoms?',
      a: 'If you are experiencing acute chest pain, sudden shortness of breath, severe dizziness, or signs of stroke, please call 911 immediately or go to the nearest hospital emergency department.',
    },
  ];

  return (
    <section id="faq" className={`py-20 sm:py-28 px-4 sm:px-8 border-t transition-colors ${
      darkMode ? 'bg-black border-zinc-800 text-white' : 'bg-white border-slate-200 text-zinc-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2 block">
            Patient Support & Information
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`scroll-reveal delay-${(idx % 3) + 1} border rounded-2xl overflow-hidden transition-all duration-200 ${
                  darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="text-base font-extrabold">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-teal-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-zinc-400 font-medium leading-relaxed border-t border-zinc-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
