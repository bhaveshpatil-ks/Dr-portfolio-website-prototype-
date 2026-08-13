import { useState } from 'react';
import { CheckCircle2, ArrowRight, Eye } from 'lucide-react';

export default function AnatomyExplorer({ darkMode, onBookConsultation }) {
  const [activeCategory, setActiveCategory] = useState('cardio');
  const [activeHotspot, setActiveHotspot] = useState('coronary');
  const [activeStep, setActiveStep] = useState(1);
  const [occlusionLevel, setOcclusionLevel] = useState(35);

  const hotspots = {
    cardio: [
      {
        id: 'coronary',
        title: 'Left Anterior Descending (LAD) Artery',
        x: 48,
        y: 42,
        region: 'Coronary Vessel Architecture',
        metric: 'Arterial Lumen Diameter',
        value: `${(4.2 * (1 - occlusionLevel / 100)).toFixed(1)} mm`,
        status: occlusionLevel > 60 ? 'warning' : 'optimal',
        procedureSteps: [
          {
            step: 1,
            title: 'Wrist Radial Access Placement',
            description: 'A 2mm micro-sheath is introduced painlessly through the radial artery in the wrist under local anesthesia.',
            recoveryTime: 'Immediate walking after procedure',
          },
          {
            step: 2,
            title: 'High-Definition OCT Optical Scan',
            description: 'Sub-millimeter infrared laser imaging maps lipid plaque thickness and arterial wall vulnerability.',
            recoveryTime: 'Real-time 3D diagnostic readout',
          },
          {
            step: 3,
            title: 'Bioresorbable Stent Deployment',
            description: 'Precision balloon expansion restores full blood lumen without open-heart surgical incision.',
            recoveryTime: 'Arterial flow restored to 100%',
          },
          {
            step: 4,
            title: 'Same-Day Discharge & Monitoring',
            description: 'Patient rests comfortably for 2 hours and returns home the same evening with full mobility.',
            recoveryTime: '24-48 Hours full recovery',
          },
        ],
      },
      {
        id: 'aortic',
        title: 'Aortic Valve Junction',
        x: 52,
        y: 28,
        region: 'Valvular Hemodynamics',
        metric: 'Transvalvular Flow Velocity',
        value: `${(1.2 + occlusionLevel * 0.02).toFixed(1)} m/s`,
        status: 'normal',
        procedureSteps: [
          {
            step: 1,
            title: 'Pre-Procedure Echocardiogram',
            description: 'Non-invasive 3D Doppler ultrasound evaluates valve leaflet mobility and pressure gradient.',
            recoveryTime: 'Non-invasive outpatient scan',
          },
          {
            step: 2,
            title: 'Transcatheter Valve Positioning (TAVR)',
            description: 'A replacement valve is guided through a micro-catheter into the aortic position.',
            recoveryTime: 'Zero chest wall incision',
          },
          {
            step: 3,
            title: 'Hemodynamic Verification',
            description: 'Real-time cardiac pressure monitoring confirms zero paravalvular regurgitation.',
            recoveryTime: 'Normal blood flow restored',
          },
          {
            step: 4,
            title: 'Rapid Recovery Protocol',
            description: 'Patient ambulates within 12 hours with significant relief from shortness of breath.',
            recoveryTime: '48 Hours recovery time',
          },
        ],
      },
    ],
    cerebro: [
      {
        id: 'carotid',
        title: 'Carotid Artery Bifurcation',
        x: 46,
        y: 22,
        region: 'Cerebrovascular Flow',
        metric: 'Peak Systolic Velocity',
        value: '110 cm/s',
        status: 'optimal',
        procedureSteps: [
          {
            step: 1,
            title: 'Carotid Duplex Ultrasound',
            description: 'High-frequency Doppler screening measures blood flow velocity and intima-media thickness.',
            recoveryTime: 'Outpatient 20-min screening',
          },
          {
            step: 2,
            title: 'Targeted Neuro-Protection',
            description: 'Embolic protection filter deployed prior to arterial plaque stabilization.',
            recoveryTime: 'Brain tissue protected',
          },
          {
            step: 3,
            title: 'Microstent Implantation',
            description: 'Self-expanding nitinol stent secures carotid lumen and prevents stroke risk.',
            recoveryTime: 'Stroke risk reduced by 94%',
          },
          {
            step: 4,
            title: 'Overnight Monitoring',
            description: 'Blood pressure optimized overnight with next-morning discharge.',
            recoveryTime: '24 Hours observation',
          },
        ],
      },
    ],
    metabolic: [
      {
        id: 'endothelial',
        title: 'Microvascular Endothelial Bed',
        x: 54,
        y: 58,
        region: 'Endothelial Function',
        metric: 'Reactive Hyperemia Index',
        value: '2.4 (Optimal)',
        status: 'optimal',
        procedureSteps: [
          {
            step: 1,
            title: 'EndoPAT Nitric Oxide Testing',
            description: 'Non-invasive peripheral arterial tone measurement assesses vascular endothelial wellness.',
            recoveryTime: '15-min painless exam',
          },
          {
            step: 2,
            title: 'ApoB & Lp(a) Biomarker Panel',
            description: 'Advanced lipid particle counting quantifies atherogenic plaque risk before symptoms occur.',
            recoveryTime: 'Comprehensive lab report',
          },
          {
            step: 3,
            title: 'Targeted PCSK9 Protocol',
            description: 'Customized preventative regimen lowers ApoB by up to 60% safely.',
            recoveryTime: 'Long-term vascular defense',
          },
          {
            step: 4,
            title: 'Annual Healthspan Review',
            description: 'Progress tracked with repeat non-invasive endothelial scans.',
            recoveryTime: 'Ongoing longevity monitoring',
          },
        ],
      },
    ],
  };

  const currentHotspots = hotspots[activeCategory] || hotspots['cardio'];
  const activeData = currentHotspots.find((h) => h.id === activeHotspot) || currentHotspots[0];

  return (
    <section className={`py-20 sm:py-28 px-6 sm:px-12 md:px-20 lg:px-28 transition-colors ${
      darkMode ? 'bg-black border-t border-zinc-800 text-white' : 'bg-white border-t border-gray-200 text-zinc-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-12 scroll-reveal">
          <span className="text-[12px] font-bold uppercase tracking-wider text-teal-400 mb-2 block">
            Interactive Diagnostic Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            3D Anatomy & Procedure Explorer
          </h2>
          <p className="text-zinc-400 font-medium text-sm mt-3 leading-relaxed">
            Click on interactive hotspots below to inspect vessel hemodynamics and walk through our minimally invasive clinical procedures step-by-step.
          </p>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="scroll-reveal delay-1 flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => {
              setActiveCategory('cardio');
              setActiveHotspot('coronary');
              setActiveStep(1);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'cardio'
                ? 'bg-white text-zinc-950 shadow-md'
                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
            }`}
          >
            🫀 Cardiovascular Arteries & Valves
          </button>
          <button
            onClick={() => {
              setActiveCategory('cerebro');
              setActiveHotspot('carotid');
              setActiveStep(1);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'cerebro'
                ? 'bg-white text-zinc-950 shadow-md'
                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
            }`}
          >
            🧠 Cerebrovascular & Carotid Bed
          </button>
          <button
            onClick={() => {
              setActiveCategory('metabolic');
              setActiveHotspot('endothelial');
              setActiveStep(1);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === 'metabolic'
                ? 'bg-white text-zinc-950 shadow-md'
                : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800'
            }`}
          >
            🩺 Endothelial & ApoB Biomarkers
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 3D Diagram Visualizer Card */}
          <div className="scroll-reveal delay-2 lg:col-span-6 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
            {/* Background Medical Diagram Grid */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4 z-10 relative">
                <span className="text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                  {activeData.region}
                </span>
                <span className="text-xs font-mono font-bold text-zinc-400">HOTSPOTS ACTIVE: {currentHotspots.length}</span>
              </div>

              {/* Central Visual Representative Anatomy Canvas */}
              <div className="relative w-full h-[280px] my-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden">
                {/* Organ Background Silhouette Graphic */}
                <div className="absolute w-48 h-48 rounded-full bg-teal-500/10 blur-2xl animate-pulse" />

                {/* Simulated Vessel Diagram Graphic */}
                <svg className="w-64 h-64 opacity-80" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="70" stroke="#0f766e" strokeWidth="4" strokeDasharray="6 6" className="animate-spin" style={{ animationDuration: '40s' }} />
                  <path d="M 60 100 Q 100 40 140 100 Q 100 160 60 100 Z" stroke="#0f766e" strokeWidth="3" fill="rgba(15, 118, 110, 0.05)" />
                  <circle cx="100" cy="100" r="24" fill="#0f766e" fillOpacity="0.15" stroke="#0f766e" strokeWidth="2" />
                </svg>

                {/* Hotspot Interactive Target Markers */}
                {currentHotspots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => {
                      setActiveHotspot(spot.id);
                      setActiveStep(1);
                    }}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${
                      activeHotspot === spot.id ? 'scale-125 z-30' : 'scale-100 z-20 hover:scale-110'
                    }`}
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activeHotspot === spot.id ? 'bg-teal-500' : 'bg-blue-400'}`}></span>
                      <span className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center text-[10px] font-bold text-white shadow-lg ${activeHotspot === spot.id ? 'bg-teal-600' : 'bg-zinc-700'}`}>
                        <Eye size={12} />
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Occlusion Level Parameter Simulation Slider */}
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 z-10 relative">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold text-zinc-300">Simulated Plaque Occlusion</span>
                <span className="font-extrabold text-teal-400">{occlusionLevel}% Restenosis Risk</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={occlusionLevel}
                onChange={(e) => setOcclusionLevel(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-semibold mt-1">
                <span>Minimal Stenosis (10%)</span>
                <span>Severe Stenosis (90%)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Procedure Walkthrough Modal Card */}
          <div className="scroll-reveal delay-3 lg:col-span-6 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  Target Inspection
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  activeData.status === 'warning' ? 'bg-amber-500/20 text-amber-300' : 'bg-teal-500/20 text-teal-300'
                }`}>
                  {activeData.metric}: {activeData.value}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2">{activeData.title}</h3>
              <p className="text-xs text-zinc-400 font-semibold mb-6">Interactive 4-Step Surgical Walkthrough:</p>

              {/* Interactive Step Navigator Pills */}
              <div className="flex gap-2 mb-6">
                {activeData.procedureSteps.map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(s.step)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeStep === s.step
                        ? 'bg-teal-500 text-zinc-950 shadow-sm'
                        : 'bg-zinc-950 text-zinc-400 hover:bg-zinc-800'
                    }`}
                  >
                    Step {s.step}
                  </button>
                ))}
              </div>

              {/* Active Step Walkthrough Content */}
              {activeData.procedureSteps
                .filter((s) => s.step === activeStep)
                .map((stepData) => (
                  <div key={stepData.step} className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm shrink-0">
                        {stepData.step}
                      </div>
                      <h4 className="text-base font-bold text-white">{stepData.title}</h4>
                    </div>

                    <p className="text-sm text-zinc-300 font-medium leading-relaxed pl-11">
                      {stepData.description}
                    </p>

                    <div className="pl-11 pt-2 flex items-center gap-2 text-xs font-bold text-teal-400">
                      <CheckCircle2 size={16} />
                      <span>Clinical Outcome: {stepData.recoveryTime}</span>
                    </div>
                  </div>
                ))}
            </div>

            {/* Bottom Consultation CTA */}
            <div className="pt-6 mt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-xs text-zinc-400 font-semibold">
                Have questions about {activeData.title}?
              </div>

              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-200 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consult Dr. Leelavati Salunkhe</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
