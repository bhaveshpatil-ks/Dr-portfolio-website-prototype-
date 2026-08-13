import { Folder, ArrowUpRight, BookOpen, Stethoscope, Sparkles } from 'lucide-react';

export default function Hero({ darkMode, onNavigate }) {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 flex flex-col items-center text-center relative overflow-hidden">
      {/* Subtle Background Radial Aura */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-3xl pointer-events-none opacity-30 ${
        darkMode ? 'bg-zinc-800' : 'bg-slate-200'
      }`} />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10 flex flex-col items-center">
        {/* 1. Live Status Badge */}
        <div className={`scroll-reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold shadow-xs border ${
          darkMode ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300' : 'bg-white/90 border-gray-200 text-zinc-700'
        }`}>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="font-bold text-blue-500">Live now</span>
          <span className="text-zinc-400 dark:text-zinc-700">|</span>
          <span>Available For Cardiology Consultations</span>
        </div>

        {/* 2. Giant Typography Title */}
        <h1 className={`scroll-reveal delay-1 text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none ${
          darkMode ? 'text-white' : 'text-slate-950'
        }`}>
          Dr. Leelavati <span className={`font-semibold ${darkMode ? 'opacity-40 text-zinc-500' : 'text-slate-400'}`}>Salunkhe</span>
          <span className="text-2xl sm:text-3xl font-bold text-teal-500 ml-2 align-super">M.D.</span>
        </h1>

        {/* 3. Floating About Card */}
        <div className={`scroll-reveal delay-2 max-w-2xl rounded-3xl p-6 sm:p-8 text-center shadow-2xl border relative transition-all duration-300 backdrop-blur-xl ${
          darkMode
            ? 'bg-zinc-900/80 border-zinc-800/80 text-zinc-300'
            : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50'
        }`}>
          <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border ${
            darkMode
              ? 'bg-zinc-800 text-zinc-300 border-zinc-700'
              : 'bg-teal-50 text-teal-800 border-teal-200'
          }`}>
            <Sparkles size={12} className="text-teal-500 animate-pulse" />
            SPECIALIST IN CARDIOLOGY
          </span>

          <p className={`text-sm sm:text-base leading-relaxed font-semibold ${
            darkMode ? 'text-zinc-300' : 'text-slate-800'
          }`}>
            Consultant Cardiologist specializing in preventative heart care, early coronary plaque detection, lipidomics, and non-invasive vascular diagnostics.
          </p>
        </div>

        {/* 4. Site Update Pill */}
        <div className={`scroll-reveal delay-3 inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold shadow-xs border ${
          darkMode ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300' : 'bg-white/90 border-gray-200 text-zinc-700'
        }`}>
          <span className={`font-extrabold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded-md ${
            darkMode ? 'bg-zinc-800 text-white' : 'bg-slate-950 text-white'
          }`}>
            CLINIC UPDATE
          </span>
          <span className={darkMode ? 'text-zinc-400' : 'text-slate-600'}>
            Last updated clinic on <strong className="text-blue-500 font-bold">13 August 2026</strong>
          </span>
        </div>

        {/* 5. Personal Portfolio Action Button Bar */}
        <div className="scroll-reveal delay-4 flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Button 1: View Specialties */}
          <button
            onClick={() => onNavigate('specialties')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer border ${
              darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800' : 'bg-slate-950 hover:bg-slate-850 text-white border-slate-950'
            }`}
          >
            <Folder size={15} />
            <span>Cardiology Focus</span>
          </button>

          {/* Button 2: Contact Clinic */}
          <button
            onClick={() => onNavigate('contact')}
            className={`inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer border ${
              darkMode ? 'bg-white text-zinc-950 hover:bg-zinc-200 border-white' : 'bg-white text-slate-950 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <span>Contact Clinic</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Button 3: Clinical Research */}
          <button
            onClick={() => onNavigate('home')}
            className={`inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer border ${
              darkMode ? 'bg-white text-zinc-950 hover:bg-zinc-200 border-white' : 'bg-white text-slate-950 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <span>Research & Papers</span>
            <BookOpen size={14} className="text-teal-600" />
          </button>

          {/* Button 4: View Education */}
          <button
            onClick={() => onNavigate('experience')}
            className={`inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer border ${
              darkMode ? 'bg-white text-zinc-950 hover:bg-zinc-200 border-white' : 'bg-white text-slate-950 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <span>View Education</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Button 5: Book Appointment */}
          <button
            onClick={() => onNavigate('appointment')}
            className={`inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer border ${
              darkMode ? 'bg-white text-zinc-950 hover:bg-zinc-200 border-white' : 'bg-white text-slate-950 hover:bg-slate-100 border-slate-200'
            }`}
          >
            <span>Book Appointment</span>
            <Stethoscope size={14} className="text-teal-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
