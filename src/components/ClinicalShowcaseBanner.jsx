import { Folder, ArrowUpRight } from 'lucide-react';

export default function ClinicalShowcaseBanner({ darkMode, onNavigate }) {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto scroll-reveal">
      <div className={`rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border transition-all ${
        darkMode
          ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl'
          : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50'
      }`}>
        {/* Left Info Column */}
        <div className="max-w-xl space-y-4">
          <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full inline-block border ${
            darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-400' : 'bg-slate-100 border-slate-300 text-slate-700'
          }`}>
            MEDICAL SPECIALTY
          </span>

          <h2 className={`text-3xl sm:text-4xl font-black leading-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
            Dr. Leelavati <span className={`font-semibold ${darkMode ? 'opacity-40 text-zinc-500' : 'text-slate-400'}`}>specializes in Preventative & Clinical Cardiology.</span>
          </h2>

          <p className={`text-xs sm:text-sm font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            Dedicated to early coronary artery screening, lipid management, non-invasive vascular Doppler diagnostics, and personalized heart health optimization.
          </p>
        </div>

        {/* Right Action Button Pill */}
        <div className="shrink-0">
          <button
            onClick={() => onNavigate('specialties')}
            className={`px-6 py-4 rounded-2xl font-bold text-xs flex flex-col items-start gap-1 shadow-xl transition-all cursor-pointer group border ${
              darkMode
                ? 'bg-white hover:bg-zinc-200 text-zinc-950 border-white'
                : 'bg-slate-950 hover:bg-slate-850 text-white border-slate-950'
            }`}
          >
            <div className="flex items-center gap-2 text-sm font-extrabold">
              <Folder size={16} />
              <span>Cardiology Focus</span>
            </div>
            <div className={`flex items-center gap-1 text-[11px] font-semibold ${darkMode ? 'text-zinc-600' : 'text-slate-300'}`}>
              <span>Explore Cardiology Page</span>
              <ArrowUpRight size={13} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
