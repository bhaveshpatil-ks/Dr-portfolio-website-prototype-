import { useState } from 'react';
import { HeartPulse, Activity, ShieldCheck, Stethoscope, FileText, CheckCircle2, ChevronRight, X } from 'lucide-react';

export default function MedicalServices({ darkMode, onBookService }) {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      title: 'Preventative & Longevity Medicine',
      category: 'Proactive Healthspan',
      icon: ShieldCheck,
      shortDesc: 'Advanced ApoB/Lp(a) biomarker screening, early endothelial testing, and customized healthspan optimization plans.',
      fullDesc: 'Dr. Leelavati Salunkhe utilizes cutting-edge multi-marker blood testing, vascular endothelial scans, and AI plaque characterization to identify subclinical cardiovascular disease up to 10 years before symptoms manifest.',
      prep: '12-hour overnight fasting lipid panel required prior to initial screening.',
      duration: '45 Mins',
    },
    {
      title: 'Cardiovascular Risk Stratification',
      category: 'Heart Health',
      icon: HeartPulse,
      shortDesc: 'High-resolution echocardiography, 24-hour Holter rhythm monitoring, and arterial stiffness measurement.',
      fullDesc: 'Comprehensive non-invasive cardiac evaluation designed for patients with family histories of premature heart disease, hypertension, or high cholesterol.',
      prep: 'Avoid caffeine for 12 hours prior to ECG and vascular Doppler scanning.',
      duration: '30 Mins',
    },
    {
      title: 'Executive Annual Physicals',
      category: 'Executive Health',
      icon: Stethoscope,
      shortDesc: 'Complete 360-degree health audit for busy professionals including multi-system imaging and longevity planning.',
      fullDesc: 'An intensive half-day clinical evaluation combining advanced blood biomarkers, cardiac screening, abdominal ultrasound, and personalized lifestyle prescription.',
      prep: 'Complete pre-visit health history questionnaire 48h before arrival.',
      duration: '60 Mins',
    },
    {
      title: 'Chronic Disease Management',
      category: 'Internal Medicine',
      icon: Activity,
      shortDesc: 'Evidence-based management of hypertension, dyslipidemia, metabolic syndrome, and early-stage CAD.',
      fullDesc: 'Continuous personalized monitoring and medication optimization to achieve target blood pressure, LDL/ApoB levels, and HbA1c control.',
      prep: 'Bring all current medication bottles and previous 6-month blood lab records.',
      duration: '30 Mins',
    },
    {
      title: 'Non-Invasive Diagnostic Ultrasound',
      category: 'Advanced Imaging',
      icon: FileText,
      shortDesc: 'Carotid duplex Doppler screening, abdominal aorta ultrasound, and thyroid micro-imaging.',
      fullDesc: 'State-of-the-art ultrasound imaging performed in-office for immediate real-time diagnostic reporting and zero patient radiation exposure.',
      prep: 'No special preparation needed for carotid Doppler. Fasting 6 hours for abdominal ultrasound.',
      duration: '30 Mins',
    },
    {
      title: 'Metabolic & Endocrine Optimization',
      category: 'Metabolic Wellness',
      icon: ShieldCheck,
      shortDesc: 'Insulin sensitivity evaluation, fatty liver disease (NAFLD) screening, and hormonal health balancing.',
      fullDesc: 'Targeted strategies for reversing insulin resistance, managing fatty liver disease, and optimizing metabolic flexibility.',
      prep: 'Fasting insulin and oral glucose tolerance testing pre-appointment.',
      duration: '45 Mins',
    },
  ];

  return (
    <section id="services" className={`py-20 sm:py-28 px-4 sm:px-8 border-y transition-colors ${
      darkMode ? 'bg-black border-zinc-800/80 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14 scroll-reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2 block">
            Comprehensive Clinical Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Medical Services & Practice Programs
          </h2>
          <p className="text-zinc-400 font-medium text-sm mt-3 leading-relaxed">
            Delivering evidence-based diagnostic screenings and personalized treatment plans in a serene, private clinical setting.
          </p>
        </div>

        {/* 6-Card Services Grid with Scroll Reveal Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const delayClass = `delay-${(idx % 3) + 1}`;
            return (
              <div
                key={idx}
                className={`scroll-reveal ${delayClass} p-8 rounded-3xl border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  darkMode ? 'bg-zinc-900/80 border-zinc-800 hover:border-teal-500/50' : 'bg-white border-slate-200 hover:border-teal-500/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold mb-2">{service.title}</h3>
                  <p className="text-zinc-400 font-medium text-xs leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-semibold">Est. Duration: {service.duration}</span>
                  <button
                    onClick={() => setActiveModal(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer"
                  >
                    <span>Clinical Details</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clinical Service Details Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl border ${
            darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-gray-200 text-zinc-900'
          }`}>
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full cursor-pointer"
            >
              <X size={20} />
            </button>

            <span className="text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full mb-3 inline-block border border-teal-500/20">
              {activeModal.category} • {activeModal.duration}
            </span>

            <h3 className="text-2xl font-extrabold mb-3">{activeModal.title}</h3>
            <p className="text-sm text-zinc-300 font-medium leading-relaxed mb-6">{activeModal.fullDesc}</p>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 mb-6 space-y-2">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal-400" />
                <span>Patient Preparation Instructions</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium pl-6">{activeModal.prep}</p>
            </div>

            <button
              onClick={() => {
                const name = activeModal.title;
                setActiveModal(null);
                onBookService(name);
              }}
              className="w-full py-3.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-xs transition-colors cursor-pointer shadow-md"
            >
              Request Appointment for This Service
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
