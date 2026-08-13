import { Home, Scissors, CheckCircle, Briefcase, Mail, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'specialties', name: 'Specialties', icon: Scissors },
    { id: 'services', name: 'Services', icon: CheckCircle },
    { id: 'experience', name: 'Experience', icon: Briefcase },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
      <nav className={`w-full max-w-4xl rounded-3xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl transition-all duration-300 border ${
        darkMode
          ? 'bg-zinc-900/90 text-white border-zinc-800 backdrop-blur-xl'
          : 'bg-white/90 text-slate-950 border-slate-200/80 backdrop-blur-xl shadow-slate-200/60'
      }`}>
        {/* Left: Avatar & Doctor Profile Details */}
        <button
          onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 text-left cursor-pointer group border-none bg-transparent"
        >
          <div className="relative">
            <img
              src="/doctor_portrait.jpg"
              alt="Dr. Leelavati Salunkhe, M.D."
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-teal-500 shadow-md group-hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="hidden sm:block">
            <div className={`text-sm font-extrabold tracking-tight leading-none ${darkMode ? 'text-white' : 'text-slate-950'}`}>
              Dr. Leelavati <span className="text-teal-600 font-bold">Salunkhe</span> <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ml-1 border ${
                darkMode ? 'bg-teal-950/60 text-teal-400 border-teal-800' : 'bg-teal-50 text-teal-800 border-teal-200'
              }`}>M.D.</span>
            </div>
            <div className={`text-[11px] font-semibold tracking-tight mt-0.5 ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              dr.leelavati@salunkhehealth.com
            </div>
          </div>
        </button>

        {/* Center: Navigation Links (Reroutes to Separate Page Views) */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? darkMode
                      ? 'bg-zinc-800 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-950 shadow-xs'
                    : darkMode
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-teal-500' : ''} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Theme Toggle Slider & Contact Page Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 rounded-full flex items-center gap-1 transition-colors cursor-pointer border ${
              darkMode ? 'bg-zinc-800 border-zinc-700 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}
            title="Toggle Light / Dark Mode"
          >
            <div className={`p-1 rounded-full ${!darkMode ? 'bg-white shadow-xs' : ''}`}>
              <Sun size={13} />
            </div>
            <div className={`p-1 rounded-full ${darkMode ? 'bg-zinc-700 shadow-xs' : ''}`}>
              <Moon size={13} />
            </div>
          </button>

          <button
            onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer border ${
              darkMode
                ? 'bg-white hover:bg-zinc-200 text-zinc-950 border-white'
                : 'bg-slate-950 hover:bg-slate-850 text-white border-slate-950'
            }`}
          >
            <span>Contact</span>
            <Mail size={13} />
          </button>
        </div>
      </nav>
    </div>
  );
}
