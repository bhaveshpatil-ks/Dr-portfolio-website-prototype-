import { useState } from 'react';
import { CheckCircle2, Shield, Phone, ArrowRight } from 'lucide-react';

export default function PatientAppointmentForm({ darkMode, initialService = '' }) {
  const [department, setDepartment] = useState(initialService || 'Preventative Cardiology');
  const [insurance, setInsurance] = useState('Blue Cross Blue Shield');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('2026-08-18');
  const [preferredTime, setPreferredTime] = useState('10:30 AM');
  const [notes, setNotes] = useState('');

  const [ticket, setTicket] = useState(null);

  const departments = [
    'Preventative Cardiology',
    'Executive Annual Physicals',
    'Internal Medicine Consultation',
    'Chronic Disease Management',
    'Non-Invasive Diagnostic Ultrasound',
  ];

  const insuranceProviders = [
    'Blue Cross Blue Shield',
    'Aetna Healthcare',
    'Cigna Healthcare',
    'Medicare / Senior Advantage',
    'UnitedHealthcare',
    'Self-Pay / Concierge Executive Plan',
  ];

  const timeSlots = ['09:00 AM', '10:30 AM', '01:15 PM', '02:45 PM', '04:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmationCode = 'APEX-' + Math.floor(100000 + Math.random() * 900000);
    setTicket({
      code: confirmationCode,
      department,
      insurance,
      date: preferredDate,
      time: preferredTime,
      patientName,
    });
  };

  return (
    <section id="appointment" className={`py-20 sm:py-28 px-4 sm:px-8 border-t transition-colors ${
      darkMode ? 'bg-black border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Instructions & Direct Line */}
          <div className="scroll-reveal delay-1 lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
              Patient Scheduling & Registration
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Request a Clinical Consultation
            </h2>

            <p className="text-zinc-400 font-medium text-sm leading-relaxed">
              Dr. Leelavati Salunkhe welcomes new patient referrals and direct appointments. Please complete your registration information below, and our clinic reception team will confirm your time slot within 4 business hours.
            </p>

            <div className={`p-6 rounded-2xl border shadow-xs space-y-4 ${
              darkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3 text-xs font-bold">
                <Shield size={18} className="text-teal-400 shrink-0" />
                <span>Insurance Coverage & Verification</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                We directly verify in-network coverage with major national providers prior to your arrival to ensure zero unexpected out-of-pocket expenses.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-bold">Need Immediate Assistance?</div>
                <div className="text-zinc-400">Call Direct Reception: <strong>(212) 555-0198</strong></div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Booking Form */}
          <div className={`scroll-reveal delay-2 lg:col-span-7 p-8 sm:p-10 rounded-3xl border shadow-2xl ${
            darkMode ? 'bg-zinc-900/90 border-zinc-800 text-white' : 'bg-white border-slate-200 text-zinc-900'
          }`}>
            {ticket ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-extrabold">Appointment Requested!</h3>
                <p className="text-xs text-zinc-400 font-medium max-w-sm mx-auto">
                  Thank you, <strong>{ticket.patientName}</strong>. Your consultation request with Dr. Leelavati Salunkhe has been registered with Apex Healthcare.
                </p>

                <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-left max-w-md mx-auto space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-bold">CONFIRMATION REF</span>
                    <span className="font-mono font-bold text-teal-400">{ticket.code}</span>
                  </div>
                  <div className="text-sm font-bold">{ticket.department}</div>
                  <div className="text-xs text-zinc-300 font-medium">
                    Date: <strong>{ticket.date}</strong> at <strong>{ticket.time}</strong>
                  </div>
                  <div className="text-xs text-zinc-400">
                    Insurance: {ticket.insurance}
                  </div>
                </div>

                <button
                  onClick={() => setTicket(null)}
                  className="px-6 py-2.5 bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-2">Patient Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1">Medical Department</label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className={`w-full px-3 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
                      }`}
                    >
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1">Insurance Provider</label>
                    <select
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      className={`w-full px-3 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
                      }`}
                    >
                      {insuranceProviders.map((ins) => (
                        <option key={ins} value={ins}>{ins}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">Full Patient Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 019-2834"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="patient@example.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      min="2026-08-14"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-400 mb-1">Preferred Time Slot</label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className={`w-full px-3 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                        darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
                      }`}
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">Medical Symptoms or Reason for Visit</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your symptoms or health goals..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none ${
                      darkMode ? 'bg-zinc-950 border-zinc-800 text-white' : 'bg-slate-50 border-slate-200 text-zinc-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Appointment Request</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
