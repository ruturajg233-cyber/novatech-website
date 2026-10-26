# NovaTech — Modern Technology Startup & Digital Solutions Website

A high-performance, responsive showcase website for **NovaTech**, a modern technology startup specializing in:
- **Website Development** (React, TypeScript, Next-gen architectures)
- **AI-Powered Solutions** (Automation, Machine Learning, Predictive analytics)
- **Digital Marketing** (Growth marketing, SEO, Data-driven campaigns)
- **Promotional Video Production** (Cinematic showreels, 3D motion graphics)

---

## 🚀 Getting Started

All files and dependencies are located directly in this `Website` directory.

### Prerequisites
- Node.js (v18+)
- npm (or pnpm)

### 1. Start the Development Server
Run the following command from the `Website` directory:

```bash
npm run dev
```

The website will be available at:
```
http://localhost:5173/
```

### 2. Build for Production
To generate an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎬 Promotional Video (`promo.mp4`)

- The official promotional video file `promo.mp4` is preserved directly in the project root:
  ```
  Website/promo.mp4
  ```
- **Local & Production Serving**: Configured in `vite.config.ts` with a dedicated server middleware plugin that serves `/promo.mp4` directly with HTTP `206 Partial Content` (byte-range streaming support) in development, and automatically packages it into `dist/promo.mp4` during production builds.
- No files were moved or renamed.

---

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom futuristic dark theme tokens, glassmorphism, and radial glows
- **Animation**: Motion for React (`motion/react`)
- **Icons**: Lucide React (`lucide-react`)
- **Components**: Inspired by 21st.dev animated Testimonials Columns and custom glass-panel UI cards
- **Build Tool**: Vite 6

---

## 📁 Project Structure

```
Website/
├── promo.mp4                                 # Original Google Flow promotional video
├── package.json                              # Project scripts & dependencies
├── tsconfig.json                             # TypeScript compiler configuration with @/* alias
├── tsconfig.node.json                        # TypeScript node config
├── vite.config.ts                            # Vite configuration & promo.mp4 streaming plugin
├── tailwind.config.js                        # Custom dark navy, electric-cyan & purple theme
├── postcss.config.js                         # PostCSS Tailwind plugins
├── index.html                                # SEO meta tags, Google Fonts & root template
├── README.md                                 # Documentation & usage guide
└── src/
    ├── main.tsx                              # Application entry point
    ├── App.tsx                               # Primary layout assembling all sections
    ├── index.css                             # Global CSS, utilities & scrollbar styles
    ├── lib/
    │   └── utils.ts                          # `cn` clsx & tailwind-merge helper
    ├── data/
    │   └── testimonialsData.ts               # Structured demonstration testimonials data
    └── components/
        ├── Navbar.tsx                        # Responsive navbar with logo & mobile menu
        ├── Hero.tsx                          # Futuristic hero section with CTA buttons
        ├── Services.tsx                      # 4 Core services cards with glowing hover states
        ├── Showreel.tsx                      # #showreel section with responsive 16:9 HTML5 video
        ├── About.tsx                         # #about section with Innovation, Quality, Reliability
        ├── Testimonials.tsx                  # #testimonials section wrapper with demo disclaimer
        ├── Contact.tsx                       # #contact section with full real-time form validation
        ├── Footer.tsx                        # Footer with quick links & back-to-top button
        └── ui/
            └── testimonials-columns-1.tsx    # 21st.dev animated continuous vertical marquee
```

---

## 🛡️ Case-Study Demonstration Notes

- **Testimonials**: Displayed as demonstration scenarios to illustrate client outcomes across NovaTech's four service pillars. Real reviews can be inserted by editing `src/data/testimonialsData.ts`.
- **Contact Form**: Performs complete client-side validation (Full Name, Email format, Subject, Message). In demonstration mode, it provides an honest feedback state confirming validation without attempting to dispatch emails to an unconnected mail server.
- **Accuracy**: No fictitious company histories, employee numbers, or addresses have been fabricated.
