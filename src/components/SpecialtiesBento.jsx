export default function SpecialtiesBento({ darkMode }) {
  const categories = [
    {
      title: 'Coronary & Vascular Diagnostics',
      skills: [
        { label: '2D/3D Echocardiography', icon: '⚡' },
        { label: 'Carotid Duplex Ultrasound', icon: '🩺' },
        { label: 'Holter Rhythm Analysis', icon: '📊' },
        { label: 'Coronary CT Angiography', icon: '🩻' },
        { label: 'Vascular Endothelial Scan', icon: '🩸' },
        { label: 'Stress Electrocardiography', icon: '📈' },
      ],
    },
    {
      title: 'Preventative Lipidology & Risk',
      skills: [
        { label: 'Advanced ApoB Testing', icon: '🩸' },
        { label: 'Lp(a) Biomarker Risk', icon: '🧬' },
        { label: 'PCSK9 Inhibitor Protocols', icon: '💊' },
        { label: 'Arterial Plaque AI Audit', icon: '📊' },
        { label: 'Inflammation Hs-CRP Panel', icon: '🔬' },
        { label: 'Endothelial Function Index', icon: '🩺' },
      ],
    },
    {
      title: 'Cardiac Disease Management',
      skills: [
        { label: 'Refractory Hypertension Care', icon: '🩺' },
        { label: 'Atrial Fibrillation Control', icon: '❤️' },
        { label: 'Congestive Heart Failure', icon: '🏥' },
        { label: 'Ischemic Stroke Defense', icon: '🧠' },
        { label: 'Post-Stent Care Protocol', icon: '💊' },
        { label: 'Cardiac Rehabilitation', icon: '🏃' },
      ],
    },
    {
      title: 'Cardiology Certifications & Honors',
      skills: [
        { label: 'ABIM Board Certified Cardiology', icon: '🏆' },
        { label: 'Fellow, American College of Cardiology', icon: '🎓' },
        { label: 'Harvard Medical School M.D.', icon: '📜' },
        { label: 'Johns Hopkins Residency Chief', icon: '⭐' },
        { label: '12 Published Cardiology Papers', icon: '📋' },
        { label: 'AHA Atherosclerosis Member', icon: '🌐' },
      ],
    },
  ];

  return (
    <section id="specialties" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10 scroll-reveal">
        <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3 border ${
          darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-slate-200 border-slate-300 text-slate-700'
        }`}>
          PRIMARY SPECIALTY: CARDIOLOGY
        </span>
        <h2 className={`text-3xl sm:text-4xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
          Cardiology Practice & Clinical Focus
        </h2>
      </div>

      {/* 4 Bento Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`scroll-reveal delay-${(idx % 2) + 1} rounded-3xl p-6 sm:p-8 transition-all flex flex-col justify-between border ${
              darkMode
                ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl hover:border-zinc-700'
                : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50 hover:border-slate-300'
            }`}
          >
            <h3 className={`text-xl font-bold mb-6 flex items-center justify-between ${darkMode ? 'text-white' : 'text-slate-950'}`}>
              <span>{cat.title}</span>
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-bold flex items-center gap-2 border shadow-xs transition-colors ${
                    darkMode
                      ? 'bg-zinc-950/90 border-zinc-800 text-zinc-200 hover:bg-zinc-800'
                      : 'bg-slate-100/90 border-slate-200 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <span className="text-sm">{skill.icon}</span>
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
