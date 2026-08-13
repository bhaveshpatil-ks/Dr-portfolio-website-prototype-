import { Star, GitFork, BookOpen } from 'lucide-react';

export default function GitHubShowcase({ darkMode }) {
  const clinicalRepos = [
    {
      name: 'apob-longevity-protocol',
      desc: 'Evidence-based lipid particle ApoB/Lp(a) reduction protocol for primary cardiovascular prevention.',
      stars: 48,
      forks: 12,
      lang: 'Cardiology',
      langColor: '#0f766e',
    },
    {
      name: 'pulsed-field-ablation-study',
      desc: 'Multicenter trial analyzing 5-year arrhythmia outcomes with non-thermal electric field AFib ablation.',
      stars: 92,
      forks: 24,
      lang: 'Electrophysiology',
      langColor: '#3b82f6',
    },
    {
      name: 'preventative-ccta-ai-quantification',
      desc: 'Neural network automated plaque characterization in non-invasive coronary computed tomography scans.',
      stars: 134,
      forks: 38,
      lang: 'Imaging AI',
      langColor: '#8b5cf6',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-12 scroll-reveal">
      <div className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 border ${
        darkMode
          ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl'
          : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50'
      }`}>
        {/* Profile Card Header */}
        <div className={`flex flex-wrap items-center justify-between gap-4 pb-6 border-b ${
          darkMode ? 'border-zinc-800' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-4">
            <img
              src="/doctor_portrait.jpg"
              alt="Dr. Leelavati Salunkhe, M.D."
              className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-500 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-950'}`}>leelavatisalunkhe-md</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                  darkMode ? 'bg-teal-900/40 text-teal-300 border-teal-800' : 'bg-teal-50 text-teal-800 border-teal-200'
                }`}>
                  Verified Physician
                </span>
              </div>
              <div className={`text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                Senior Consultant Physician • Harvard M.D. • 64 Research Publications
              </div>
            </div>
          </div>

          <div className={`flex items-center gap-3 text-xs font-semibold ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            <span>Repositories: <strong className={darkMode ? 'text-white' : 'text-slate-950'}>64</strong></span>
            <span>Citations: <strong className={darkMode ? 'text-white' : 'text-slate-950'}>3,850+</strong></span>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
              Pinned Clinical Research & Datasets
            </span>
            <span className="text-xs text-teal-600 font-semibold">Customize your pins</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clinicalRepos.map((repo, idx) => (
              <div
                key={repo.name}
                className={`scroll-reveal delay-${idx + 1} p-4 rounded-2xl border transition-all hover:scale-[1.02] flex flex-col justify-between ${
                  darkMode
                    ? 'bg-zinc-950/60 border-zinc-800/80'
                    : 'bg-slate-50 border-slate-200/80'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={14} className="text-teal-600 shrink-0" />
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400 truncate">{repo.name}</span>
                  </div>
                  <p className={`text-[11px] font-medium leading-relaxed mb-4 ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                    {repo.desc}
                  </p>
                </div>

                <div className={`flex items-center justify-between text-[10px] font-semibold pt-2 border-t ${
                  darkMode ? 'text-zinc-400 border-zinc-800' : 'text-slate-500 border-slate-200'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                    <span>{repo.lang}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Star size={11} /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={11} /> {repo.forks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
