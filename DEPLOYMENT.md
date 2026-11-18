# Vercel Production Deployment Guide

This guide provides end-to-end instructions for deploying **The NEST School ERP Dashboard** to Vercel.

---

## 📋 Pre-Deployment Audit Checklist

| Item | Status | Notes |
|------|--------|-------|
| Framework Detection | ✅ Verified | Vite automatically detected |
| Build Command | ✅ Verified | `npm run build` (`tsc && vite build`) passes with 0 errors |
| Output Directory | ✅ Verified | `dist/` configured in `vite.config.ts` |
| SPA Fallback Rewrites | ✅ Configured | `vercel.json` rewrites all requests to `/index.html` |
| File Case Sensitivity | ✅ Verified | 100% of import statements match disk casing |
| Dependencies & Lockfile | ✅ Verified | `package.json` & `package-lock.json` synchronized |
| Broken Assets/Images | ✅ Protected | In-app fallback SVG avatar handlers implemented |
| Secret Leakage Check | ✅ Clean | No API keys or secrets in source code |

---

## 🚀 Quick Deployment to Vercel

### Step 1: Create GitHub Repository

Run the following commands in the project folder:

```bash
git add .
git commit -m "feat: complete NEST School ERP production release ready for Vercel"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Import into Vercel

1. Navigate to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Locate your repository in the Git list and click **Import**.
4. In the **Configure Project** screen:
   - **Framework Preset**: `Vite` (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
5. Under **Environment Variables**:
   - No required environment variables are mandatory for this application since all data is bundled in-memory.
   - If you want to customize the application title or point to an external API later, you can add variables defined in `.env.example`.
6. Click **Deploy**.

---

## 🔍 Post-Deployment Verification

Once Vercel finishes the build (typically ~20-30 seconds):

1. **Verify Home Route**: Open the deployed URL (e.g. `https://nest-school.vercel.app`). Ensure the overview metrics and charts appear immediately.
2. **Verify Client-side Navigation**: Click through each navigation item in the sidebar:
   - Classroom Dashboard
   - Assignments
   - Assessments
   - Learner Attendance
   - Teacher Attendance
   - Learner Support (SEN)
   - Observations
   - NPD Analytics
   - Reports
   - Settings
3. **Verify Page Refresh (SPA Fallback)**:
   - Navigate to `/#/classroom-dashboard` or direct path.
   - Press **Ctrl+F5** / **Cmd+Shift+R** to hard-refresh.
   - The page should reload gracefully without a 404 error (handled by `vercel.json`).
4. **Verify Theme Switching**: Toggle between the Light mode and Midnight Dark mode using the sun/moon button in the top navbar.
5. **Verify Modal Drawers**: Click on any student profile in the Classroom Dashboard to confirm the student details drawer opens and displays with no broken images.

---

## 🛠️ Vercel Configuration Reference (`vercel.json`)

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This rewrite ensures that client-side routes (e.g. `/overview`, `/classroom-dashboard`, etc.) are routed directly to `/index.html` by Vercel edge routers.
