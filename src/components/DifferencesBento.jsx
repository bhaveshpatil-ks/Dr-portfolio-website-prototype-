export default function DifferencesBento({ darkMode }) {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12 space-y-3 scroll-reveal">
        <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
          What Makes Dr. Leelavati <span className={`font-semibold ${darkMode ? 'opacity-40 text-zinc-500' : 'text-slate-400'}`}>Different</span>
        </h2>
        <p className={`font-medium text-xs sm:text-sm max-w-xl mx-auto leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
          A clinical mindset, sharp diagnostic execution, and consistent delivery across preventative cardiology, longevity, and patient care.
        </p>
      </div>

      {/* 3 Bento Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className={`scroll-reveal delay-1 rounded-3xl p-6 flex flex-col justify-between transition-all border ${
          darkMode
            ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl hover:border-zinc-700'
            : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50 hover:border-slate-300'
        }`}>
          <div className={`rounded-2xl h-44 flex flex-col items-center justify-center p-4 mb-6 text-center relative overflow-hidden border ${
            darkMode ? 'bg-zinc-950/80 border-zinc-800' : 'bg-slate-100/80 border-slate-200'
          }`}>
            <div className={`text-5xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>15+</div>
            <div className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${darkMode ? 'text-zinc-400' : 'text-slate-500'}`}>YRS CLINICAL EXPERIENCE</div>
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-950'}`}>15+ Years Clinical Practice</h3>
            <p className={`text-xs font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Proven clinical track record across preventative cardiology, executive annual physicals, and hospital inpatient care.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={`scroll-reveal delay-2 rounded-3xl p-6 flex flex-col justify-between transition-all border ${
          darkMode
            ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl hover:border-zinc-700'
            : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50 hover:border-slate-300'
        }`}>
          <div className={`rounded-2xl h-44 flex flex-col items-center justify-center p-4 mb-6 relative overflow-hidden space-y-3 border ${
            darkMode ? 'bg-zinc-950/80 border-zinc-800' : 'bg-slate-100/80 border-slate-200'
          }`}>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border shadow-xs ${
              darkMode ? 'bg-zinc-900 text-zinc-300 border-zinc-800' : 'bg-white text-slate-800 border-slate-300'
            }`}>
              Harvard M.D.
            </span>
            <span className={darkMode ? 'text-zinc-500' : 'text-slate-400'}>→</span>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border shadow-xs ${
              darkMode ? 'bg-zinc-900 text-zinc-300 border-zinc-800' : 'bg-white text-slate-800 border-slate-300'
            }`}>
              Johns Hopkins Residency
            </span>
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-950'}`}>Board-Certified Specialist</h3>
            <p className={`text-xs font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Magna Cum Laude Harvard Medical graduate & Johns Hopkins Chief Resident with top clinical honors.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className={`scroll-reveal delay-3 rounded-3xl p-6 flex flex-col justify-between transition-all border ${
          darkMode
            ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl hover:border-zinc-700'
            : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50 hover:border-slate-300'
        }`}>
          <div className={`rounded-2xl h-44 flex flex-col justify-between p-5 mb-6 relative overflow-hidden border ${
            darkMode ? 'bg-zinc-950/80 border-zinc-800' : 'bg-slate-100/80 border-slate-200'
          }`}>
            <div className={`flex justify-between text-[10px] font-bold ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
            </div>
            <div className={`relative w-full h-1 rounded-full my-auto ${darkMode ? 'bg-zinc-800' : 'bg-slate-300'}`}>
              <div className="absolute left-0 top-0 bottom-0 bg-blue-500 rounded-full w-full"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
            <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 text-right">Progress Tracking Active</div>
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-950'}`}>Outcomes You Can Track</h3>
            <p className={`text-xs font-medium leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              A steady healthspan trajectory across biomarker screening, plaque stabilization, and personalized lifestyle metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
