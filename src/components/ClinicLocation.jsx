import { MapPin, Phone, Mail, Clock, Car, Navigation } from 'lucide-react';

export default function ClinicLocation({ darkMode }) {
  return (
    <section id="contact" className={`py-20 sm:py-28 px-4 sm:px-8 border-t transition-colors ${
      darkMode ? 'bg-black border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14 scroll-reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2 block">
            Clinic Access & Hours
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Location, Parking & Direct Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location & Hours Details */}
          <div className={`scroll-reveal delay-1 lg:col-span-6 p-8 rounded-3xl border shadow-xs space-y-6 flex flex-col justify-between ${
            darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-slate-200'
          }`}>
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold">Apex Health Institute Center</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-xs text-zinc-300 font-medium">
                  <MapPin size={18} className="text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Physical Clinic Address</div>
                    <div>5th Avenue Medical Center, Suite 600, New York, NY 10022</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-zinc-300 font-medium">
                  <Phone size={18} className="text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Telephone Lines</div>
                    <div>Direct Reception: (212) 555-0198 • Fax: (212) 555-0199</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-zinc-300 font-medium">
                  <Mail size={18} className="text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Email Communication</div>
                    <div>dr.leelavati@salunkhehealth.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-zinc-300 font-medium">
                  <Clock size={18} className="text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Operating Clinic Hours</div>
                    <div>Monday - Friday: 8:00 AM - 5:00 PM EST</div>
                    <div>Saturday: 9:00 AM - 1:00 PM (Urgent Screening Only)</div>
                    <div>Sunday: Closed (24/7 Helpline Active)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center gap-3 text-xs font-semibold text-teal-300">
              <Car size={20} className="text-teal-400 shrink-0" />
              <span>Valet parking available at 5th Avenue main entrance. Underground garage parking validation provided.</span>
            </div>
          </div>

          {/* Right Column: Clinic Lounge & Directions Card */}
          <div className="scroll-reveal delay-2 lg:col-span-6 bg-zinc-900 text-white rounded-3xl overflow-hidden shadow-xl border border-zinc-800 flex flex-col justify-between relative min-h-[380px]">
            <img
              src="/clinic_interior.jpg"
              alt="Apex Health Clinic Interior"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />

            <div className="relative z-10 p-8 bg-gradient-to-t from-black via-black/70 to-transparent h-full flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-2">
                  Modern Serene Environment
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-2">State-of-the-Art Care Facility</h3>
                <p className="text-xs text-zinc-300 font-medium max-w-md leading-relaxed">
                  Our private consultation suites are designed for peaceful, relaxed health assessments with zero crowd wait times.
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-3 rounded-xl font-bold text-xs hover:bg-zinc-200 transition-colors self-start cursor-pointer shadow-lg"
              >
                <Navigation size={15} />
                <span>Get Driving Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
