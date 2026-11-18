import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  Layers,
  ArrowRight,
  GraduationCap,
  Award,
  Users,
  Compass,
  Star,
  BookOpen
} from 'lucide-react';
import { WeekMIS, PROGRAMMES } from '../data/schoolData';
import { 
  NestieMascot, 
  IllustrationBooks, 
  IllustrationPencilStationery, 
  IllustrationGraduationCap,
  IllustrationTrophy
} from './EducationalIllustrations';

interface WelcomeBannerProps {
  currentWeek: WeekMIS;
  weeks: WeekMIS[];
  selectedWeekIndex: number;
  onSelectWeek: (idx: number) => void;
  selectedProgramme: string;
  onSelectProgramme: (prog: string) => void;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  currentWeek,
  weeks,
  selectedWeekIndex,
  onSelectWeek,
  selectedProgramme,
  onSelectProgramme
}) => {
  return (
    <div className="relative overflow-hidden rounded-4xl bg-gradient-to-r from-[#C4B5FD]/35 via-[#7DD3FC]/25 via-[#A7F3D0]/20 to-[#FDBAAB]/25 dark:from-purple-950/40 dark:via-sky-950/30 dark:via-emerald-950/20 dark:to-slate-900 border border-[#C4B5FD]/50 dark:border-purple-900/50 p-6 sm:p-8 shadow-pastel dark:shadow-none mb-8 transition-colors duration-200">
      {/* Decorative Pastel Mesh Blobs & Floating Shapes */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#C4B5FD]/40 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none animate-pulse-soft"></div>
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#7DD3FC]/40 dark:bg-sky-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FDE68A]/25 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating Decorative Little Stars and Sparkles */}
      <div className="absolute top-6 right-1/4 pointer-events-none hidden sm:block animate-float">
        <span className="text-xl">✨</span>
      </div>
      <div className="absolute bottom-6 left-1/3 pointer-events-none hidden sm:block animate-float-delayed">
        <span className="text-base">⭐</span>
      </div>
      <div className="absolute top-1/3 right-12 pointer-events-none hidden lg:block animate-gentle opacity-80">
        <IllustrationPencilStationery size={42} />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          {/* Main Context with Mascot and Greeting */}
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/90 dark:bg-slate-900/90 text-purple-800 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Next-Gen Educational Intelligence
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/90 dark:bg-slate-900/90 text-[#065F46] dark:text-emerald-300 border border-[#A7F3D0] dark:border-emerald-800 shadow-2xs">
                <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                Term 1 Active Review
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/90 dark:bg-slate-900/90 text-amber-900 dark:text-amber-300 border border-[#FDE68A] dark:border-amber-800 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                Week {currentWeek?.week_index} ({currentWeek?.week_label})
              </span>
            </div>

            <div className="flex items-start sm:items-center gap-3.5 mt-2">
              <div className="hidden sm:block flex-shrink-0 animate-bounce-gentle">
                <NestieMascot size={64} variant="celebrating" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-navy dark:text-white font-display leading-tight">
                  The NEST School Intelligence Dashboard
                </h1>
                <p className="mt-1.5 text-navy-700 dark:text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
                  Synthesized academic performance, curriculum pacing, attendance telemetry, and pastoral care analytics for HoA & HoS executive review.
                </p>
              </div>
            </div>

            {/* Scope Badge & Programme Quick Switcher */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-navy dark:text-slate-200 font-black flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Active Scope:
              </span>
              
              <button
                onClick={() => onSelectProgramme('ALL')}
                className={`px-3.5 py-1.5 rounded-2xl font-black transition-all pop-btn ${
                  selectedProgramme === 'ALL'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-pastel-sm ring-2 ring-purple-300 dark:ring-purple-700'
                    : 'bg-white/90 dark:bg-slate-900/90 text-navy dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 border border-[#C4B5FD]/70 dark:border-slate-700 shadow-2xs'
                }`}
              >
                All Divisions (Whole School)
              </button>

              {PROGRAMMES.map((prog) => {
                const isSelected = selectedProgramme === prog.id;
                const activeColor = 
                  prog.id === 'EYP' ? 'bg-[#10B981] text-white ring-[#A7F3D0]' :
                  prog.id === 'PYP' ? 'bg-[#0284C7] text-white ring-[#7DD3FC]' :
                  prog.id === 'CIE_LS' ? 'bg-[#7C3AED] text-white ring-[#C4B5FD]' :
                  'bg-[#EF4444] text-white ring-[#FDBAAB]';

                return (
                  <button
                    key={prog.id}
                    onClick={() => onSelectProgramme(prog.id)}
                    className={`px-3 py-1.5 rounded-2xl font-black transition-all flex items-center gap-1.5 pop-btn ${
                      isSelected
                        ? `${activeColor} shadow-pastel-sm ring-2`
                        : 'bg-white/90 dark:bg-slate-900/90 text-navy dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs'
                    }`}
                  >
                    <span>{prog.name}</span>
                    <span className="text-[10px] opacity-80 hidden sm:inline">({prog.grades})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Highlights: 4 Diverse Asymmetric Pastel Stat Cards */}
          <div className="grid grid-cols-2 gap-3 lg:w-80 flex-shrink-0">
            {/* Stat 1: Pastel Mint */}
            <div className="bg-gradient-to-br from-white via-white to-[#F0FDF4] dark:from-[#131D31] dark:via-[#131D31] dark:to-emerald-950/40 p-4 rounded-3xl border border-[#A7F3D0] dark:border-emerald-800/80 shadow-pastel-sm dark:shadow-none hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#065F46] dark:text-emerald-400">Peak Attendance</span>
                <span className="text-base">☀️</span>
              </div>
              <div className="text-2xl font-black text-navy dark:text-white font-display">96.0%</div>
              <p className="text-[10px] text-[#047857] dark:text-emerald-400 font-extrabold mt-0.5">CIE LS Cohort Top</p>
            </div>

            {/* Stat 2: Sky Blue */}
            <div className="bg-gradient-to-br from-white via-white to-[#F0F9FF] dark:from-[#131D31] dark:via-[#131D31] dark:to-sky-950/40 p-4 rounded-3xl border border-[#7DD3FC] dark:border-sky-800/80 shadow-pastel-sm dark:shadow-none hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#075985] dark:text-sky-400">Observations</span>
                <span className="text-base">🔍</span>
              </div>
              <div className="text-2xl font-black text-navy dark:text-white font-display">68 of 68</div>
              <p className="text-[10px] text-[#0284C7] dark:text-sky-400 font-extrabold mt-0.5">100% Target Met</p>
            </div>

            {/* Stat 3: Sunshine Yellow */}
            <div className="bg-gradient-to-br from-white via-white to-[#FFFDF0] dark:from-[#131D31] dark:via-[#131D31] dark:to-amber-950/40 p-4 rounded-3xl border border-[#FDE68A] dark:border-amber-800/80 shadow-pastel-sm dark:shadow-none hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#854D0E] dark:text-amber-400">Marking SLA</span>
                <span className="text-base">📝</span>
              </div>
              <div className="text-2xl font-black text-navy dark:text-white font-display">0 Delayed</div>
              <p className="text-[10px] text-[#B45309] dark:text-amber-400 font-extrabold mt-0.5">&lt; 7 Days SLA (100%)</p>
            </div>

            {/* Stat 4: Soft Lavender */}
            <div className="bg-gradient-to-br from-white via-white to-[#FAF8FF] dark:from-[#131D31] dark:via-[#131D31] dark:to-purple-950/40 p-4 rounded-3xl border border-[#C4B5FD] dark:border-purple-800/80 shadow-pastel-sm dark:shadow-none hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#5B21B6] dark:text-purple-400">Staff Leaves</span>
                <span className="text-base">🎓</span>
              </div>
              <div className="text-2xl font-black text-navy dark:text-white font-display">0 Unexp.</div>
              <p className="text-[10px] text-[#6D28D9] dark:text-purple-400 font-extrabold mt-0.5">100% Accounted</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
