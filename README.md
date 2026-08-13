<div align="center">

  # 🩺 Dr. Leelavati Salunkhe, M.D.
  ### Modern, High-Performance Doctor Portfolio & Clinical Practice Website

  A sleek, evidence-based doctor portfolio designed for Senior Consultant Physicians specializing in **Preventative & Clinical Cardiology**. Features an interactive 3D vascular anatomy explorer, multi-page navigation, appointment scheduling, dual academic/experience timelines, and smooth scroll swipe-up card animations.

  <br />

  [![Live Website](https://img.shields.io/badge/%E2%9C%A8_LIVE_WEBSITE-DOCTOR--DEMO--WE.NETLIFY.APP-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://doctor-demo-we.netlify.app/)
  [![GitHub Repository](https://img.shields.io/badge/%F0%9F%93%96_GITHUB-REPOSITORY-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bhaveshpatil-ks/Dr-portfolio-website-prototype-)
  [![Specialty](https://img.shields.io/badge/%F0%9F%AB%80_SPECIALTY-CARDIOLOGY-0f766e?style=for-the-badge)](https://doctor-demo-we.netlify.app/)

  <br />

  [![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![License](https://img.shields.io/badge/License-MIT-green.style=flat-square)](LICENSE)

</div>

---

## 📖 Overview

**Dr. Leelavati Salunkhe, M.D.** is a high-performance, patient-centered medical doctor portfolio website engineered to deliver a world-class first impression for clinical clients. 

Instead of traditional generic templates, this portfolio focuses on a single, prestigious medical specialty — **Preventative & Clinical Cardiology** — showcasing advanced diagnostic procedures, biomarker lipid panels, non-invasive imaging, and verifiable academic credentials.

🔗 **Live Production Demo**: [https://doctor-demo-we.netlify.app/](https://doctor-demo-we.netlify.app/)

---

## ✨ Key Features

- 🫀 **Single Specialty Cardiology Focus**: Tailored specifically for cardiology consultations, ApoB lipidomics, 2D/3D echocardiography, and carotid ultrasound screening.
- ☀️ **Day Theme Default**: Bright, clean, professional daylight mode (`#f8fafc`) by default with dark mode toggle.
- 🌊 **Scroll Swipe-Up Reveal Animations**: Dynamic card scroll animations with `cubic-bezier` motion powered by Lenis smooth scrolling.
- 📱 **Multi-Page Navigation**: Dedicated views for Home, Specialties, Services, Experience, Appointment, Patient FAQ, and Contact.
- 🎓 **Verified Doctor Bio & Dual Timelines**: Features a verified doctor bio card alongside 2-column Academic (Education) and Practical (Experience) vertical timelines.
- 📅 **Patient Appointment Scheduling**: Built-in consultation request form with insurance provider selection and real-time confirmation receipt generation.
- 🔬 **3D Anatomy & Procedure Explorer**: Interactive hotspot visualizer allowing patients to inspect vessel hemodynamics and step-by-step minimally invasive procedures.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React 19 (JSX / Plain JavaScript)
- **Build Tool**: Vite 8.2
- **Styling & Design Tokens**: Vanilla CSS + Tailwind CSS v4
- **Iconography**: Lucide React
- **Smooth Scroll Engine**: Lenis Smooth Scroll
- **Deployment Platform**: Netlify

---

## 📁 Project Structure

```
Dr portfolio/
├── public/
│   ├── clinic_interior.jpg
│   ├── doctor_portrait.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnatomyExplorer.jsx        # Interactive 3D Anatomy Visualizer
│   │   ├── ClinicLocation.jsx         # Contact, Hours & Driving Directions
│   │   ├── ClinicalShowcaseBanner.jsx # Cardiology Focus Banner
│   │   ├── DifferencesBento.jsx       # 3-Card Clinical Differentiators
│   │   ├── DoctorCredentials.jsx      # Doctor Bio & Dual Timelines
│   │   ├── GitHubShowcase.jsx         # Clinical Research Repositories
│   │   ├── Hero.jsx                   # Instant Hero Banner
│   │   ├── HospitalFooter.jsx         # Portfolio Footer
│   │   ├── MedicalServices.jsx        # 6 Practice Service Cards
│   │   ├── Navbar.jsx                 # Persistent Floating Navbar
│   │   ├── PatientAppointmentForm.jsx # Registration & Scheduling Form
│   │   ├── PatientFAQ.jsx             # Patient Support FAQ Accordion
│   │   ├── QuickLinksCard.jsx         # 8-Capsule Navigation Grid
│   │   └── SpecialtiesBento.jsx       # 4 Cardiology Practice Bento Cards
│   ├── App.jsx                        # Multi-Page Routing & Theme State
│   ├── index.css                      # Core Design System & Scroll Reveal Rules
│   └── main.jsx                       # Entry Point
├── package.json
├── index.html
└── vite.config.js
```

---

## ⚡ Local Development Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhaveshpatil-ks/Dr-portfolio-website-prototype-.git
   cd Dr-portfolio-website-prototype-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🚀 Netlify Deployment Instructions

### Option 1: Automatic Deploys via GitHub
1. Connect your Netlify account to your GitHub repository `bhaveshpatil-ks/Dr-portfolio-website-prototype-`.
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`

### Option 2: Drag & Drop Deploy
1. Run `npm run build` locally.
2. Open Netlify, go to **Deploys**.
3. Drag and drop **ONLY the `dist` folder** into Netlify!

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <sub>Built with ❤️ for Dr. Leelavati Salunkhe, M.D. • Live at <a href="https://doctor-demo-we.netlify.app/">doctor-demo-we.netlify.app</a></sub>
</div>
