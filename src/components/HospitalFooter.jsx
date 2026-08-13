import { HeartPulse, ArrowUp } from 'lucide-react';

export default function HospitalFooter({ darkMode, onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`pt-12 pb-8 border-t text-xs transition-colors ${
      darkMode ? 'bg-black text-zinc-400 border-zinc-800' : 'bg-slate-50 text-slate-600 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className={`flex items-center gap-2 font-bold text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                <HeartPulse size={18} />
              </div>
              <span>Dr. Leelavati Salunkhe</span>
            </div>
            <p className="text-xs font-medium leading-relaxed opacity-80">
              Dr. Leelavati Salunkhe, M.D., FACP — Senior Consultant Physician in Internal Medicine, Preventative Cardiology, and Longevity Healthspan.
            </p>
          </div>

          {/* Clinical Practice Areas */}
          <div className="space-y-2">
            <div className={`font-bold text-xs mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>Clinical Practice</div>
            <ul className="space-y-2 font-medium">
              <li><a href="#specialties" className="hover:text-teal-400 transition-colors">Preventative Cardiology</a></li>
              <li><a href="#specialties" className="hover:text-teal-400 transition-colors">Executive Annual Physicals</a></li>
              <li><a href="#specialties" className="hover:text-teal-400 transition-colors">Chronic Disease Management</a></li>
              <li><a href="#specialties" className="hover:text-teal-400 transition-colors">Carotid & Vascular Ultrasound</a></li>
            </ul>
          </div>

          {/* Patient Quick Links */}
          <div className="space-y-2">
            <div className={`font-bold text-xs mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>Portfolio Links</div>
            <ul className="space-y-2 font-medium">
              <li><a href="#diagnostics" className="hover:text-teal-400 transition-colors">3D Anatomy Explorer</a></li>
              <li><a href="#credentials" className="hover:text-teal-400 transition-colors">Doctor Qualifications</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">Patient FAQ</a></li>
              <li><button onClick={onOpenBooking} className="text-teal-400 hover:text-teal-300 font-bold cursor-pointer">Request Appointment</button></li>
            </ul>
          </div>

          {/* Practice Office */}
          <div className="space-y-2">
            <div className={`font-bold text-xs mb-3 ${darkMode ? 'text-white' : 'text-slate-950'}`}>Clinic Office</div>
            <p className="text-xs font-medium leading-relaxed opacity-80">
              5th Avenue Medical Center<br />
              Suite 600, New York, NY 10022<br />
              Direct Email: dr.leelavati@salunkhehealth.com
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Back To Top Button */}
        <div className="pt-8 border-t border-zinc-800/60 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-[11px] font-medium opacity-70">
          <div>
            © 2026 Dr. Leelavati Salunkhe, M.D. — Personal Doctor Portfolio. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-teal-400 hover:text-teal-300 font-bold cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
