import { GraduationCap, Briefcase, ChevronRight, MapPin, Globe, Award, UserCheck, Stethoscope } from 'lucide-react';

export default function DoctorCredentials({ darkMode, onNavigate }) {
  const academicTimeline = [
    {
      status: 'COMPLETED',
      title: 'Doctor of Medicine (M.D.)',
      subtitle: 'Harvard Medical School (2008 - 2012)',
      bullets: [
        'Graduated Magna Cum Laude with honors in internal medicine and cardiovascular physiology.',
        'Developed early passion for non-invasive vascular Doppler ultrasound and lipid particle dynamics.',
        'Awarded Osler Housestaff Clinical Excellence Medal.',
      ],
    },
    {
      status: 'COMPLETED',
      title: 'Internal Medicine Residency & Chief Resident',
      subtitle: 'Johns Hopkins Hospital, Baltimore MD (2012 - 2015)',
      bullets: [
        'Completed 3-year residency managing complex inpatient cardiovascular cases and ICU rotations.',
        'Selected as Chief Resident overseeing outpatient preventative care clinic operations and resident training.',
        'Managed daily rounds across 120-bed clinical inpatient service.',
      ],
    },
    {
      status: 'COMPLETED',
      title: 'Preventative Cardiology Fellowship',
      subtitle: 'Massachusetts General Hospital / Harvard (2015 - 2017)',
      bullets: [
        'Specialized in advanced cardiac imaging, carotid Doppler scans, and ApoB lipid particle management.',
        'Authored 12 clinical research papers on early subclinical plaque detection using non-invasive imaging.',
        'Board-certified by ABIM and Fellow of the American College of Physicians (FACP).',
      ],
    },
  ];

  const practicalTimeline = [
    {
      status: 'STARTED',
      timeframe: 'Started in 2017',
      title: 'Attending Physician',
      subtitle: 'Johns Hopkins Hospital — Preventative Unit',
      bullets: [
        'Led outpatient preventative cardiology consultations and risk stratification screenings.',
        'Developed institutional guidelines for early ApoB and Lp(a) biomarker risk assessment.',
        'Trained over 40 medical fellows in non-invasive vascular diagnostic imaging.',
      ],
    },
    {
      status: 'GROWING',
      timeframe: 'Clinical Expansion',
      title: 'Consultant Specialist',
      subtitle: 'Mount Sinai Medical Center & Mass General',
      bullets: [
        'Provided expert second opinions on complex arrhythmia, vascular Doppler, and valve cases.',
        'Integrated AI-driven coronary plaque characterization into routine clinical practice.',
        'Pioneered same-day outpatient carotid ultrasound diagnostic workflows.',
      ],
    },
    {
      status: 'ACTIVE',
      timeframe: 'Ongoing Practice',
      title: 'Medical Director & Senior Consultant',
      subtitle: 'Apex Healthcare Institute NY',
      bullets: [
        'Directs preventative medicine & executive health audit department at Apex Healthcare.',
        'Serves over 2,500 active patients with zero wait times and 99.4% patient satisfaction rating.',
        'Leads multidisciplinary clinical team in multi-marker blood testing and longevity healthspan optimization.',
      ],
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">
      {/* 1. Breadcrumbs Navigation Bar */}
      <div className="scroll-reveal flex items-center gap-2 text-xs font-bold">
        <button
          onClick={() => onNavigate && onNavigate('home')}
          className={`flex items-center gap-1 hover:opacity-80 cursor-pointer px-3 py-1 rounded-full border ${
            darkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
          }`}
        >
          <span>Home</span>
        </button>
        <ChevronRight size={14} className={darkMode ? 'text-zinc-500' : 'text-slate-400'} />
        <span className={`px-3 py-1 rounded-full border ${
          darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-slate-200 border-slate-300 text-slate-900'
        }`}>
          Experience
        </span>
      </div>

      {/* 2. Doctor Personal Profile & Info Card */}
      <div className={`scroll-reveal delay-1 rounded-3xl p-6 sm:p-10 border transition-all ${
        darkMode
          ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl'
          : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50'
      }`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Doctor Portrait Photo */}
          <div className="relative shrink-0">
            <img
              src="/doctor_portrait.jpg"
              alt="Dr. Leelavati Salunkhe, M.D."
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl object-cover border-4 border-teal-500 shadow-xl"
            />
            <span className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full border-2 border-white shadow-md flex items-center gap-1">
              <UserCheck size={12} /> Verified M.D.
            </span>
          </div>

          {/* Doctor Details & Biography */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                <h1 className={`text-3xl sm:text-4xl font-black ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                  Dr. Leelavati Salunkhe
                </h1>
                <span className="text-xs font-black text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                  M.D., FACP
                </span>
              </div>
              <p className="text-xs font-bold text-teal-600 dark:text-teal-400">
                Senior Consultant Physician & Specialist in Preventative Cardiology
              </p>
            </div>

            {/* Quick Metadata Info Badges Grid */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs font-bold">
              <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 ${
                darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-300' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}>
                <MapPin size={14} className="text-rose-500" />
                <span>Origin: Mumbai, Maharashtra, India</span>
              </div>

              <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 ${
                darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-300' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}>
                <Globe size={14} className="text-blue-500" />
                <span>Languages: English, Hindi, Marathi</span>
              </div>

              <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 ${
                darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-300' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}>
                <Award size={14} className="text-amber-500" />
                <span>Alumni: Harvard M.D. & Johns Hopkins</span>
              </div>
            </div>

            {/* Biography Summary */}
            <p className={`text-xs sm:text-sm font-semibold leading-relaxed ${darkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
              Dr. Leelavati Salunkhe is an internationally recognized consultant physician with over 15 years of dedicated practice in internal medicine and preventative cardiology. Originally from Mumbai, she completed her medical degree with honors at Harvard Medical School and served as Chief Resident at Johns Hopkins Hospital before establishing her private consultation practice.
            </p>

            {/* CTA Button Row */}
            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
              <button
                onClick={() => onNavigate && onNavigate('appointment')}
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Stethoscope size={14} />
                <span>Request Consultation</span>
              </button>

              <a
                href="mailto:dr.leelavati@salunkhehealth.com"
                className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer border ${
                  darkMode ? 'bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200'
                }`}
              >
                <span>Email Dr. Leelavati</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Two Side-by-Side Vertical Timelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Academic Timeline (Education) */}
        <div className={`scroll-reveal delay-2 rounded-3xl p-6 sm:p-8 border space-y-6 ${
          darkMode
            ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl'
            : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50'
        }`}>
          <div>
            <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border mb-2 ${
              darkMode ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-amber-50 text-amber-700 border-amber-200'
            }`}>
              <GraduationCap size={12} />
              EDUCATION
            </span>
            <h2 className={`text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-950'}`}>Academic Timeline</h2>
            <p className={`text-xs font-medium mt-1 ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              A focused medical learning path from medical school fundamentals to advanced cardiology fellowship.
            </p>
          </div>

          {/* Vertical Timeline Nodes */}
          <div className={`relative pl-6 space-y-6 border-l-2 ${darkMode ? 'border-blue-500/40' : 'border-blue-500'}`}>
            {academicTimeline.map((item, i) => (
              <div key={i} className={`scroll-reveal delay-${i + 1} relative`}>
                {/* Glowing Blue Timeline Node Dot */}
                <div className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 shadow-md ${
                  darkMode ? 'border-zinc-950' : 'border-white'
                }`}></div>

                <div className={`p-5 rounded-2xl border space-y-3 ${
                  darkMode ? 'bg-zinc-950/80 border-zinc-800' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                      darkMode ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-base font-black ${darkMode ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
                    <div className={`text-xs font-bold mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-slate-700'}`}>{item.subtitle}</div>
                  </div>

                  <ul className={`space-y-1.5 text-xs font-semibold list-disc pl-4 leading-relaxed ${
                    darkMode ? 'text-zinc-400' : 'text-slate-700'
                  }`}>
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Practical Timeline (Experience) */}
        <div className={`scroll-reveal delay-3 rounded-3xl p-6 sm:p-8 border space-y-6 ${
          darkMode
            ? 'bg-zinc-900/90 border-zinc-800/80 text-white shadow-2xl'
            : 'bg-white border-slate-200 text-slate-950 shadow-xl shadow-slate-200/50'
        }`}>
          <div>
            <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border mb-2 ${
              darkMode ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              <Briefcase size={12} />
              EXPERIENCE
            </span>
            <h2 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">Practical Timeline</h2>
            <p className={`text-xs font-medium mt-1 ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Real clinical growth shaped by hospital appointments, clinical consultations, and team leadership.
            </p>
          </div>

          {/* Vertical Timeline Nodes */}
          <div className={`relative pl-6 space-y-6 border-l-2 ${darkMode ? 'border-blue-500/40' : 'border-blue-500'}`}>
            {practicalTimeline.map((item, i) => (
              <div key={i} className={`scroll-reveal delay-${i + 1} relative`}>
                {/* Glowing Blue Timeline Node Dot */}
                <div className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 shadow-md ${
                  darkMode ? 'border-zinc-950' : 'border-white'
                }`}></div>

                <div className={`p-5 rounded-2xl border space-y-3 ${
                  darkMode ? 'bg-zinc-950/80 border-zinc-800' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                      darkMode ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}>
                      {item.status}
                    </span>
                    <span className={`text-[10px] font-bold ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>{item.timeframe}</span>
                  </div>

                  <div>
                    <h3 className={`text-base font-black ${darkMode ? 'text-white' : 'text-slate-950'}`}>{item.title}</h3>
                    <div className={`text-xs font-bold mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-slate-700'}`}>{item.subtitle}</div>
                  </div>

                  <ul className={`space-y-1.5 text-xs font-semibold list-disc pl-4 leading-relaxed ${
                    darkMode ? 'text-zinc-400' : 'text-slate-700'
                  }`}>
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
