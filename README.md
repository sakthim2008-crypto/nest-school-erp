# The NEST School | Next-Gen ERP & Educational Intelligence Dashboard

A modern, student-centric Educational Intelligence and School ERP dashboard built for **The NEST School**. Built with React 18, TypeScript, Tailwind CSS, Lucide Icons, and Recharts, optimized for lightning-fast performance and seamless production deployment on **Vercel**.

---

## 🚀 Key Modules & Capabilities

- 📊 **Executive Overview**: High-level MIS metrics, week-by-week progress indicators, dynamic programme breakdown, critical deviation alerts.
- 🏫 **Classroom Dashboard**: Real-time subject pacing, catch-up schedules, lesson plan tracking, and student rosters with detail modal drawer.
- 📝 **Home Reinforcement & Assignments**: Completion analytics, turn-in velocity, subject-level assignment performance.
- 🎯 **Assessments & Competency Mapping**: Formative & summative examination tracking, GPA analytics, and skill proficiency matrices.
- 👥 **Learner & Teacher Attendance**: Daily/weekly roll-call metrics, chronic absenteeism monitoring, staff duty logs.
- 🤝 **Pastoral Care & Learner Support**: SEN (Special Educational Needs) tracking, counselling case notes, parental intervention follow-ups.
- 🔍 **Classroom Observations**: Pedagogical audits, instructional feedback, and teacher mentoring rubrics.
- 💡 **NPD (New Pedagogical Directions)**: Innovation initiatives, project-based learning logs, and holistic educational milestones.
- 📄 **Reports & Analytics**: Comprehensive term report cards, exportable summaries, and PDF print readiness.
- ⚙️ **School Settings**: Academic year selection, role-based view toggles, and notification preferences.
- 🎨 **Visual Themes**: Dual-mode support (Extraordinary Light & Midnight Cosmic Dark Mode) with smooth CSS transitions.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Visual Icons**: [Lucide React](https://lucide.dev/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Deployment Platform**: [Vercel](https://vercel.com/) (Optimized with `vercel.json` SPA routing)

---

## 🏁 Local Development

### Prerequisites

- Node.js `18.x` or higher
- npm `9.x` or higher

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Type check TypeScript
npm run typecheck

# 4. Production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 🚢 Deploying to Vercel (Step-by-Step)

This repository is 100% pre-configured for Vercel.

### Method 1: Git-Integrated Deployment (Recommended)

1. **Push this project to your GitHub account**:
   ```bash
   git add .
   git commit -m "feat: complete NEST School ERP production release"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New...** > **Project**.
   - Select your newly pushed GitHub repository.
   - Vercel automatically detects the **Vite** framework preset:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **Deploy**.

3. **Enjoy your live site**:
   - Vercel will build and publish your dashboard at a global HTTPS URL (e.g., `https://nest-school-erp.vercel.app`).
   - The included `vercel.json` handles Single Page Application (SPA) routing, so all routes and page refreshes work smoothly without 404 errors.

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
NEST SCHOOL PROJECT/
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore configuration
├── index.html                # Entry HTML with typography & favicon
├── package.json              # NPM scripts and production dependencies
├── package-lock.json         # Pinned dependency lockfile
├── postcss.config.js         # PostCSS plugins (Tailwind, Autoprefixer)
├── public/
│   ├── favicon.svg           # Scalable vector favicon
│   └── robots.txt            # Search crawler directives
├── scripts/
│   ├── verify_imports.py     # Linux/Vercel case-sensitivity validation tool
│   └── *.py                  # Data generation & scraping utilities
├── src/
│   ├── components/           # 25+ Modular UI components
│   ├── context/              # ThemeContext & GamificationContext
│   ├── data/                 # Authentic school & student datasets
│   ├── App.tsx               # Main dashboard router & layout
│   ├── index.css             # Tailwind utilities & theme animations
│   └── main.tsx              # React DOM root entry
├── tailwind.config.js        # Custom palette & design tokens
├── tsconfig.json             # TypeScript compiler settings
├── tsconfig.node.json        # Vite node configuration
├── vercel.json               # Vercel SPA rewrite rules
├── vite.config.ts            # Vite bundler options & chunk splitting
└── README.md                 # Project documentation
```
