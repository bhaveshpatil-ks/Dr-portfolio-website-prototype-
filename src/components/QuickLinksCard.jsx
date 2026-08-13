import { ArrowUpRight, Mail, Stethoscope, Info, BookOpen } from 'lucide-react';

export default function QuickLinksCard({ darkMode, onNavigate }) {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto scroll-reveal">
      <div className={`rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border transition-all ${
        darkMode
          ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl'
          : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50'
      }`}>
        {/* Left Column: Doctor Profile Intro */}
        <div className="max-w-md space-y-3 text-center lg:text-left">
          <h2 className={`text-3xl sm:text-4xl font-black ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Dr. Leelavati <span className={`font-semibold ${darkMode ? 'opacity-40 text-zinc-500' : 'text-slate-400'}`}>Salunkhe</span>
          </h2>
          <p className={`text-xs sm:text-sm font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            Senior consultant physician building clean, evidence-based, and patient-centered healthcare experiences with strong attention to clinical outcome and longevity detail.
          </p>
        </div>

        {/* Right Column: 8 Capsule Multi-Page Navigation Buttons */}
        <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
          {/* Row 1 */}
          <button
            onClick={() => onNavigate('home')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center justify-between border transition-colors shadow-xs cursor-pointer ${
              darkMode ? 'bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200'
            }`}
          >
            <span>Home</span>
            <ArrowUpRight size={13} className={darkMode ? 'text-zinc-400' : 'text-slate-500'} />
          </button>

          <button
            onClick={() => onNavigate('specialties')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center justify-between border transition-colors shadow-xs cursor-pointer ${
              darkMode ? 'bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200'
            }`}
          >
            <span>Specialties</span>
            <ArrowUpRight size={13} className={darkMode ? 'text-zinc-400' : 'text-slate-500'} />
          </button>

          {/* Row 2 */}
          <button
            onClick={() => onNavigate('services')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center justify-between border transition-colors shadow-xs cursor-pointer ${
              darkMode ? 'bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200'
            }`}
          >
            <span>Services</span>
            <ArrowUpRight size={13} className={darkMode ? 'text-zinc-400' : 'text-slate-500'} />
          </button>

          <button
            onClick={() => onNavigate('experience')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center justify-between border transition-colors shadow-xs cursor-pointer ${
              darkMode ? 'bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200'
            }`}
          >
            <span>Experience</span>
            <ArrowUpRight size={13} className={darkMode ? 'text-zinc-400' : 'text-slate-500'} />
          </button>

          {/* Row 3 */}
          <button
            onClick={() => onNavigate('experience')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer border ${
              darkMode ? 'bg-white hover:bg-zinc-200 text-zinc-950 border-white' : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-900'
            }`}
          >
            <BookOpen size={14} />
            <span>Qualifications</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer border ${
              darkMode ? 'bg-white hover:bg-zinc-200 text-zinc-950 border-white' : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-900'
            }`}
          >
            <Mail size={14} />
            <span>Contact</span>
          </button>

          {/* Row 4 */}
          <button
            onClick={() => onNavigate('faq')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer border ${
              darkMode ? 'bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600' : 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300'
            }`}
          >
            <Info size={14} />
            <span>Patient FAQ</span>
          </button>

          {/* Yellow Highlight Pill */}
          <button
            onClick={() => onNavigate('appointment')}
            className="bg-amber-400 hover:bg-amber-300 text-zinc-950 px-5 py-3 rounded-2xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer border border-amber-300"
          >
            <Stethoscope size={15} />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
