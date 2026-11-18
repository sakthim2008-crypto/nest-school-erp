import React from 'react';
import { 
  Users, 
  UserCheck, 
  GraduationCap, 
  HeartHandshake, 
  AlertCircle, 
  Eye, 
  TrendingUp, 
  TrendingDown, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  ClipboardCheck, 
  Sparkles, 
  ArrowUpRight, 
  Heart, 
  CheckCircle2 
} from 'lucide-react';
import { WeekMIS, SectionData, MetricItem } from '../data/schoolData';
import { NavSection } from './Sidebar';
import { AnimatedCounter } from './AnimatedCounter';
import { ProgressRing } from './ProgressRing';

interface KpiCardsRowProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
  onNavigateSection: (section: NavSection) => void;
}

export const KpiCardsRow: React.FC<KpiCardsRowProps> = ({
  currentWeek,
  selectedProgramme,
  onNavigateSection
}) => {
  const getSectionMetric = (secId: string, metricSno: string): MetricItem | undefined => {
    const sec = currentWeek.sections.find((s: SectionData) => s.id === secId);
    if (!sec) return undefined;
    return sec.metrics.find((m: MetricItem) => m.s_no === metricSno);
  };

  const plannersMetric = getSectionMetric('I', '1');
  
  // Dynamic planners count
  let incompletePlanners = 21;
  if (selectedProgramme === 'PYP') incompletePlanners = Number(plannersMetric?.pyp) || 11;
  else if (selectedProgramme === 'CIE_IGCSE_AS') incompletePlanners = Number(plannersMetric?.cie_igcse_as) || 10;
  else if (selectedProgramme === 'EYP') incompletePlanners = 0;
  else if (selectedProgramme === 'CIE_LS') incompletePlanners = 0;

  // Learner support count
  let learnerSupportCount = 72;
  if (selectedProgramme === 'PYP') learnerSupportCount = 51;
  else if (selectedProgramme === 'CIE_IGCSE_AS') learnerSupportCount = 12;
  else if (selectedProgramme === 'EYP') learnerSupportCount = 30;
  else if (selectedProgramme === 'CIE_LS') learnerSupportCount = 9;

  // Attendance rate
  let attendanceRate = 86.8;
  if (selectedProgramme === 'CIE_LS') attendanceRate = 96.0;
  else if (selectedProgramme === 'PYP') attendanceRate = 88.5;
  else if (selectedProgramme === 'CIE_IGCSE_AS') attendanceRate = 88.0;
  else if (selectedProgramme === 'EYP') attendanceRate = 84.0;

  // Observation score
  let observationScore = 67.2;
  if (selectedProgramme === 'EYP') observationScore = 76.6;
  else if (selectedProgramme === 'CIE_IGCSE_AS') observationScore = 66.0;
  else if (selectedProgramme === 'CIE_LS') observationScore = 60.1;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-black text-navy dark:text-white tracking-tight font-display flex items-center gap-2">
            <span>Executive Academic Performance Indicators</span>
            <span className="text-sm">📊</span>
          </h2>
          <p className="text-xs text-navy-600 dark:text-slate-400 font-semibold mt-0.5">
            Synthesized metrics across curriculum, attendance, pedagogy, and student wellbeing.
          </p>
        </div>
        <span className="text-xs font-black text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 shadow-2xs">
          6 Core KRAs
        </span>
      </div>

      {/* Grid with Diverse Creative Card Layouts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* CARD 1: Learner Attendance (Circular Progress Ring Layout) */}
        <div
          onClick={() => onNavigateSection('learner-attendance')}
          className="dashboard-card p-5 cursor-pointer group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white via-white to-[#F0FDF4] dark:from-[#131D31] dark:via-[#131D31] dark:to-emerald-950/40 border border-[#A7F3D0] dark:border-emerald-800/80"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#A7F3D0]/60 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform text-lg">
                ☀️
              </div>
              <div>
                <span className="text-xs font-black text-navy dark:text-white block group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Learner Attendance
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border mt-0.5 inline-block bg-[#A7F3D0]/70 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800">
                  Optimal (≥86%)
                </span>
              </div>
            </div>

            <ProgressRing
              progress={attendanceRate}
              size={48}
              strokeWidth={5}
              color="#10B981"
              showText={false}
            />
          </div>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-navy dark:text-white tracking-tight font-display">
              <AnimatedCounter value={attendanceRate} decimals={1} />
            </span>
            <span className="text-sm font-black text-[#047857] dark:text-emerald-400">% Presence</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 dark:text-slate-400 font-semibold truncate max-w-[65%]">
              CIE LS Peak 96.0% • Thu Peak 92.8%
            </span>
            <span className="font-black text-[#047857] dark:text-emerald-400 flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" />
              +0.5% Prev Wk
            </span>
          </div>
        </div>

        {/* CARD 2: Teacher Attendance (Illustrated Faculty Panel) */}
        <div
          onClick={() => onNavigateSection('teacher-attendance')}
          className="dashboard-card p-5 cursor-pointer group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white via-white to-[#F0F9FF] dark:from-[#131D31] dark:via-[#131D31] dark:to-sky-950/40 border border-[#7DD3FC] dark:border-sky-800/80"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#7DD3FC]/50 dark:bg-sky-950/80 text-[#075985] dark:text-sky-300 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform text-lg">
                👨‍🏫
              </div>
              <div>
                <span className="text-xs font-black text-navy dark:text-white block group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Teacher Attendance
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border mt-0.5 inline-block bg-[#7DD3FC]/70 dark:bg-sky-950/80 text-[#075985] dark:text-sky-300 border-[#7DD3FC] dark:border-sky-800">
                  100% Accounted
                </span>
              </div>
            </div>

            <ProgressRing
              progress={98.2}
              size={48}
              strokeWidth={5}
              color="#0284C7"
              showText={false}
            />
          </div>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-navy dark:text-white tracking-tight font-display">
              <AnimatedCounter value={98.2} decimals={1} />
            </span>
            <span className="text-sm font-black text-[#0284C7] dark:text-sky-400">% Turnout</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 dark:text-slate-400 font-semibold truncate max-w-[65%]">
              Substitution coverage active
            </span>
            <span className="font-black text-[#065F46] dark:text-emerald-400 flex items-center gap-0.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              0 Unexp.
            </span>
          </div>
        </div>

        {/* CARD 3: Curriculum Planners (Split Action Style) */}
        <div
          onClick={() => onNavigateSection('classroom-dashboard')}
          className="dashboard-card p-5 cursor-pointer group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FFFDF0] dark:from-[#131D31] dark:via-[#131D31] dark:to-amber-950/40 border border-[#FDE68A] dark:border-amber-800/80"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#FDE68A]/60 dark:bg-amber-950/80 text-[#854D0E] dark:text-amber-300 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform text-lg">
                📚
              </div>
              <div>
                <span className="text-xs font-black text-navy dark:text-white block group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Curriculum Planners
                </span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border mt-0.5 inline-block ${
                  incompletePlanners > 0 ? 'bg-[#FDE68A]/80 dark:bg-amber-950/80 text-[#854D0E] dark:text-amber-300 border-[#FDE68A] dark:border-amber-800' : 'bg-[#A7F3D0]/80 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800'
                }`}>
                  {incompletePlanners > 0 ? 'Review Needed' : 'Completed'}
                </span>
              </div>
            </div>

            <ProgressRing
              progress={Math.max(0, 100 - (incompletePlanners / 35) * 100)}
              size={48}
              strokeWidth={5}
              color="#F59E0B"
              showText={false}
            />
          </div>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-navy dark:text-white tracking-tight font-display">
              <AnimatedCounter value={incompletePlanners} decimals={0} />
            </span>
            <span className="text-sm font-black text-amber-700 dark:text-amber-400">Pending Review</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 dark:text-slate-400 font-semibold truncate max-w-[65%]">
              PYP (11) • IGCSE (10)
            </span>
            <span className="font-black text-amber-700 dark:text-amber-400 flex items-center gap-0.5">
              <span>View Clinics</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* CARD 4: Syllabus Pacing Deviations (Milestone Progress Card) */}
        <div
          onClick={() => onNavigateSection('classroom-dashboard')}
          className="dashboard-card p-5 cursor-pointer group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FFF5F5] dark:from-[#131D31] dark:via-[#131D31] dark:to-rose-950/40 border border-[#FDBAAB] dark:border-rose-800/80"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#FDBAAB]/60 dark:bg-rose-950/80 text-[#9A3412] dark:text-rose-300 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform text-lg">
                ⏱️
              </div>
              <div>
                <span className="text-xs font-black text-navy dark:text-white block group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Syllabus Deviations
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border mt-0.5 inline-block bg-[#FDBAAB]/70 dark:bg-rose-950/80 text-[#9A3412] dark:text-rose-300 border-[#FDBAAB] dark:border-rose-800">
                  Catch-up Active
                </span>
              </div>
            </div>

            <span className="p-2 rounded-2xl bg-white dark:bg-slate-800 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 shadow-2xs group-hover:scale-105 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-navy dark:text-white tracking-tight font-display">
              <AnimatedCounter value={selectedProgramme === 'ALL' ? 2 : 1} decimals={0} />
            </span>
            <span className="text-sm font-black text-red-600 dark:text-red-400">Classes &gt; 1 Week</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 dark:text-slate-400 font-semibold truncate max-w-[65%]">
              AS Lab Practicals & G1 Math
            </span>
            <span className="font-black text-[#047857] dark:text-emerald-400 flex items-center gap-0.5">
              <TrendingDown className="w-3.5 h-3.5 text-[#10B981]" />
              Down 83% Wk 1
            </span>
          </div>
        </div>

        {/* CARD 5: Learner Pastoral & SEN (Heart-Centered Care Card) */}
        <div
          onClick={() => onNavigateSection('learner-support')}
          className="dashboard-card p-5 cursor-pointer group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FAF8FF] dark:from-[#131D31] dark:via-[#131D31] dark:to-purple-950/40 border border-[#C4B5FD] dark:border-purple-800/80"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#C4B5FD]/50 dark:bg-purple-950/80 text-[#5B21B6] dark:text-purple-300 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform text-lg">
                💖
              </div>
              <div>
                <span className="text-xs font-black text-navy dark:text-white block group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Pastoral & SEN Care
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border mt-0.5 inline-block bg-[#C4B5FD]/70 dark:bg-purple-950/80 text-[#5B21B6] dark:text-purple-300 border-[#C4B5FD] dark:border-purple-800">
                  Zero Escalations
                </span>
              </div>
            </div>

            <ProgressRing
              progress={96}
              size={48}
              strokeWidth={5}
              color="#8B5CF6"
              showText={false}
            />
          </div>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-navy dark:text-white tracking-tight font-display">
              <AnimatedCounter value={learnerSupportCount} decimals={0} />
            </span>
            <span className="text-sm font-black text-purple-700 dark:text-purple-300">Learners Supported</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 dark:text-slate-400 font-semibold truncate max-w-[65%]">
              Lead: Pooja • Mentoring active
            </span>
            <span className="font-black text-[#047857] dark:text-emerald-400 flex items-center gap-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
              SLA &lt; 2 Days
            </span>
          </div>
        </div>

        {/* CARD 6: Faculty Observations (Achievement Trophy Card) */}
        <div
          onClick={() => onNavigateSection('observations')}
          className="dashboard-card p-5 cursor-pointer group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-white via-white to-[#F0FDF4] dark:from-[#131D31] dark:via-[#131D31] dark:to-emerald-950/40 border border-[#A7F3D0] dark:border-emerald-800/80"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#A7F3D0]/60 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform text-lg">
                ⭐
              </div>
              <div>
                <span className="text-xs font-black text-navy dark:text-white block group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Faculty Observations
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full border mt-0.5 inline-block bg-[#A7F3D0]/70 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800">
                  0 Below 50% Floor
                </span>
              </div>
            </div>

            <ProgressRing
              progress={observationScore}
              size={48}
              strokeWidth={5}
              color="#0D9488"
              showText={false}
            />
          </div>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-navy dark:text-white tracking-tight font-display">
              <AnimatedCounter value={observationScore} decimals={1} />
            </span>
            <span className="text-sm font-black text-[#047857] dark:text-emerald-400">% Pedagogy Score</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 dark:text-slate-400 font-semibold truncate max-w-[65%]">
              68 of 68 Completed (100%)
            </span>
            <span className="font-black text-[#047857] dark:text-emerald-400 flex items-center gap-0.5">
              <Award className="w-3.5 h-3.5 text-[#10B981]" />
              Target Met
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
