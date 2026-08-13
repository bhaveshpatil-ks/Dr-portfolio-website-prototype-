import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ClinicalShowcaseBanner from './components/ClinicalShowcaseBanner.jsx';
import GitHubShowcase from './components/GitHubShowcase.jsx';
import DifferencesBento from './components/DifferencesBento.jsx';
import SpecialtiesBento from './components/SpecialtiesBento.jsx';
import MedicalServices from './components/MedicalServices.jsx';
import AnatomyExplorer from './components/AnatomyExplorer.jsx';
import DoctorCredentials from './components/DoctorCredentials.jsx';
import PatientAppointmentForm from './components/PatientAppointmentForm.jsx';
import PatientFAQ from './components/PatientFAQ.jsx';
import QuickLinksCard from './components/QuickLinksCard.jsx';
import ClinicLocation from './components/ClinicLocation.jsx';
import HospitalFooter from './components/HospitalFooter.jsx';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState('');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // IntersectionObserver for Scroll Swipe Up Animation Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.08 }
      );

      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const navigateTo = (pageName, service = '') => {
    if (service) setSelectedService(service);
    setCurrentPage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      darkMode ? 'bg-[#000000] text-zinc-100 selection:bg-teal-500 selection:text-black' : 'bg-[#f4f4f5] text-zinc-900 selection:bg-zinc-950 selection:text-white'
    }`}>
      {/* Persistent Floating Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentPage={currentPage}
        setCurrentPage={(page) => navigateTo(page)}
      />

      {/* Main Multi-Page Route Render Container */}
      <main className="pt-24 pb-16">
        {/* Page Breadcrumb Header (when not on home page) */}
        {currentPage !== 'home' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-2 flex items-center justify-between">
            <button
              onClick={() => navigateTo('home')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                darkMode
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800'
                  : 'bg-white hover:bg-slate-100 text-slate-900 border-slate-200'
              }`}
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </button>

            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
              darkMode ? 'bg-zinc-900 text-teal-400 border-zinc-800' : 'bg-slate-200 text-teal-700 border-slate-300'
            }`}>
              Page View: {currentPage.toUpperCase()}
            </span>
          </div>
        )}

        {/* 1. HOME PAGE VIEW */}
        {currentPage === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <Hero darkMode={darkMode} onNavigate={navigateTo} />
            <ClinicalShowcaseBanner darkMode={darkMode} onNavigate={navigateTo} />
            <GitHubShowcase darkMode={darkMode} />
            <DifferencesBento darkMode={darkMode} />
            <QuickLinksCard darkMode={darkMode} onNavigate={navigateTo} />
          </div>
        )}

        {/* 2. SPECIALTIES PAGE VIEW */}
        {currentPage === 'specialties' && (
          <div className="space-y-12 animate-fade-in">
            <SpecialtiesBento darkMode={darkMode} />
            <ClinicalShowcaseBanner darkMode={darkMode} onNavigate={navigateTo} />
            <QuickLinksCard darkMode={darkMode} onNavigate={navigateTo} />
          </div>
        )}

        {/* 3. SERVICES PAGE VIEW */}
        {currentPage === 'services' && (
          <div className="space-y-12 animate-fade-in">
            <MedicalServices darkMode={darkMode} onBookService={(service) => navigateTo('appointment', service)} />
            <div id="diagnostics">
              <AnatomyExplorer darkMode={darkMode} onBookConsultation={() => navigateTo('appointment')} />
            </div>
          </div>
        )}

        {/* 4. EXPERIENCE & CREDENTIALS PAGE VIEW */}
        {currentPage === 'experience' && (
          <div className="space-y-12 animate-fade-in">
            <DoctorCredentials darkMode={darkMode} onNavigate={navigateTo} />
            <QuickLinksCard darkMode={darkMode} onNavigate={navigateTo} />
          </div>
        )}

        {/* 5. APPOINTMENT BOOKING PAGE VIEW */}
        {currentPage === 'appointment' && (
          <div className="animate-fade-in">
            <PatientAppointmentForm darkMode={darkMode} initialService={selectedService} />
          </div>
        )}

        {/* 6. PATIENT FAQ PAGE VIEW */}
        {currentPage === 'faq' && (
          <div className="animate-fade-in">
            <PatientFAQ darkMode={darkMode} />
          </div>
        )}

        {/* 7. CONTACT PAGE VIEW */}
        {currentPage === 'contact' && (
          <div className="space-y-12 animate-fade-in">
            <ClinicLocation darkMode={darkMode} />
            <PatientAppointmentForm darkMode={darkMode} initialService={selectedService} />
          </div>
        )}
      </main>

      {/* Persistent Hospital Footer */}
      <HospitalFooter darkMode={darkMode} onOpenBooking={() => navigateTo('appointment')} />
    </div>
  );
}
