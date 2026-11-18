import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  Legend
} from 'recharts';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  HeartHandshake, 
  Eye, 
  Award, 
  ArrowUpRight, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles, 
  School, 
  GraduationCap 
} from 'lucide-react';
import { PROGRAMMES, WeekMIS } from '../data/schoolData';
import { useTheme } from '../context/ThemeContext';

interface ProgrammeComparisonProps {
  currentWeek: WeekMIS;
  onSelectProgramme: (prog: string) => void;
}

export const ProgrammeComparison: React.FC<ProgrammeComparisonProps> = ({
  currentWeek,
  onSelectProgramme
}) => {
  const [activeMetric, setActiveMetric] = useState<'attendance' | 'planners' | 'support' | 'observation' | 'npd'>('attendance');
  const { theme } = useTheme();

  // Comparison metrics dataset across the 4 authentic programmes
  const comparisonData = [
    {
      programme: 'EYP',
      fullName: 'Early Years (Pre-KG - UKG)',
      coordinator: 'Praseeda Pradeep',
      attendance: 84.0,
      planners: 0,
      support: 30,
      observation: 76.6,
      npd: 3.0,
      color: '#10B981', // pastel mint
      cardBg: 'bg-gradient-to-br from-white via-white to-[#F0FDF4] dark:from-[#162032] dark:via-[#162032] dark:to-emerald-950/30',
      cardBorder: 'border-[#A7F3D0] dark:border-emerald-800/80',
      badgeClass: 'bg-[#A7F3D0]/70 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800',
      grades: 'Pre-KG, LKG, UKG',
      highlight: 'Top Observation Score (76.6%)'
    },
    {
      programme: 'PYP',
      fullName: 'Primary Years (Grades 1-5)',
      coordinator: 'Priyanga Rajan',
      attendance: 88.5,
      planners: 11,
      support: 51,
      observation: 67.2,
      npd: 4.0,
      color: '#0284C7', // sky blue
      cardBg: 'bg-gradient-to-br from-white via-white to-[#F0F9FF] dark:from-[#162032] dark:via-[#162032] dark:to-sky-950/30',
      cardBorder: 'border-[#7DD3FC] dark:border-sky-800/80',
      badgeClass: 'bg-[#7DD3FC]/70 dark:bg-sky-950/80 text-[#075985] dark:text-sky-300 border-[#7DD3FC] dark:border-sky-800',
      grades: 'Grades 1 to 5',
      highlight: 'Highest NPD Score (4.0 / 5.0)'
    },
    {
      programme: 'CIE LS',
      fullName: 'Lower Secondary (Grades 6-8)',
      coordinator: 'Bhagyashree Ganesh',
      attendance: 96.0,
      planners: 0,
      support: 9,
      observation: 60.1,
      npd: 3.0,
      color: '#8B5CF6', // soft lavender
      cardBg: 'bg-gradient-to-br from-white via-white to-[#FAF8FF] dark:from-[#162032] dark:via-[#162032] dark:to-purple-950/30',
      cardBorder: 'border-[#C4B5FD] dark:border-purple-800/80',
      badgeClass: 'bg-[#C4B5FD]/70 dark:bg-purple-950/80 text-[#5B21B6] dark:text-purple-300 border-[#C4B5FD] dark:border-purple-800',
      grades: 'Grades 6 to 8',
      highlight: 'Top School Attendance (96.0%)'
    },
    {
      programme: 'CIE IGCSE/AS',
      fullName: 'Upper Secondary & AS Level',
      coordinator: 'Shyamala Rupavahini',
      attendance: 88.0,
      planners: 10,
      support: 12,
      observation: 66.0,
      npd: 3.5,
      color: '#EF4444', // peach pink
      cardBg: 'bg-gradient-to-br from-white via-white to-[#FFF5F5] dark:from-[#162032] dark:via-[#162032] dark:to-rose-950/30',
      cardBorder: 'border-[#FDBAAB] dark:border-rose-800/80',
      badgeClass: 'bg-[#FDBAAB]/70 dark:bg-rose-950/80 text-[#9A3412] dark:text-rose-300 border-[#FDBAAB] dark:border-rose-800',
      grades: 'Grades 9, 10 & AS Level',
      highlight: 'Zero Unexplained Leaves'
    }
  ];

  const metricTabs = [
    { id: 'attendance', label: 'Attendance %', icon: Users, unit: '%', max: 100 },
    { id: 'planners', label: 'Pending Planners', icon: BookOpen, unit: ' Planners', max: 20 },
    { id: 'support', label: 'Pastoral Cases', icon: HeartHandshake, unit: ' Learners', max: 60 },
    { id: 'observation', label: 'Observations %', icon: Eye, unit: '%', max: 100 },
    { id: 'npd', label: 'NPD Rating', icon: Sparkles, unit: ' / 5.0', max: 5 }
  ];

  const currentTab = metricTabs.find(t => t.id === activeMetric)!;

  // Custom Chart Tooltip with Deep Navy / Dark Mode typography
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white/95 dark:bg-[#0F172A] backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#C4B5FD]/70 dark:border-slate-700 text-xs text-navy dark:text-white">
          <div className="flex items-center gap-1.5 font-black text-sm">
            <span>{data.programme}</span>
            <span className="text-slate-400 font-normal">({data.grades})</span>
          </div>
          <div className="text-slate-500 dark:text-slate-400 font-medium text-[11px] mt-0.5">{data.coordinator}</div>
          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 font-black">
            <span className="text-slate-600 dark:text-slate-300">{currentTab.label}:</span>
            <span className="text-purple-700 dark:text-purple-300 text-sm font-display">
              {payload[0].value} {currentTab.unit}
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard-card p-6 mb-8 bg-white/95 dark:bg-[#131D31]/95 border border-slate-200/90 dark:border-slate-800">
      {/* Header and Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#C4B5FD] to-[#7DD3FC] flex items-center justify-center text-navy shadow-xs font-black">
              📊
            </div>
            <div>
              <h2 className="text-lg font-black text-navy dark:text-white tracking-tight font-display">
                Inter-Divisional Academic Comparison
              </h2>
              <p className="text-xs text-navy-600 dark:text-slate-400 font-semibold">
                Side-by-side performance across EYP, PYP, Cambridge Lower Secondary, and IGCSE/AS Level.
              </p>
            </div>
          </div>
        </div>

        {/* Metric Selector Pills */}
        <div className="flex items-center gap-1 bg-[#FAF8FF] dark:bg-slate-900 p-1 rounded-2.5xl border border-[#C4B5FD]/50 dark:border-slate-800 overflow-x-auto">
          {metricTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeMetric === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveMetric(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-black transition-all whitespace-nowrap pop-btn ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-pastel-sm'
                    : 'text-navy-700 dark:text-slate-300 hover:text-navy dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="my-6">
        <div className="h-64 sm:h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={comparisonData}
              margin={{ top: 20, right: 20, left: -10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="eypGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#A7F3D0" stopOpacity={0.5} />
                </linearGradient>
                <linearGradient id="pypGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#7DD3FC" stopOpacity={0.5} />
                </linearGradient>
                <linearGradient id="lsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#C4B5FD" stopOpacity={0.5} />
                </linearGradient>
                <linearGradient id="igcseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#FDBAAB" stopOpacity={0.5} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#1E293B' : '#F1F5F9'} />
              <XAxis
                dataKey="programme"
                stroke={theme === 'dark' ? '#94A3B8' : '#64748B'}
                fontSize={12}
                fontWeight={800}
                tickLine={false}
              />
              <YAxis
                stroke={theme === 'dark' ? '#94A3B8' : '#64748B'}
                fontSize={11}
                fontWeight={700}
                tickLine={false}
                axisLine={false}
                domain={[0, currentTab.max]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey={activeMetric}
                radius={[12, 12, 0, 0]}
                barSize={56}
                animationDuration={800}
              >
                {comparisonData.map((entry, index) => {
                  const fillUrl = 
                    entry.programme === 'EYP' ? 'url(#eypGradient)' :
                    entry.programme === 'PYP' ? 'url(#pypGradient)' :
                    entry.programme === 'CIE LS' ? 'url(#lsGradient)' : 'url(#igcseGradient)';
                  return <Cell key={`cell-${index}`} fill={fillUrl} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 4 Distinct Asymmetric Division Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {comparisonData.map((prog) => (
          <div
            key={prog.programme}
            onClick={() => onSelectProgramme(prog.programme === 'CIE IGCSE/AS' ? 'CIE_IGCSE_AS' : prog.programme === 'CIE LS' ? 'CIE_LS' : prog.programme)}
            className={`p-4 rounded-3xl border shadow-pastel-sm dark:shadow-none hover:-translate-y-1 transition-all cursor-pointer group ${prog.cardBg} ${prog.cardBorder}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border shadow-2xs ${prog.badgeClass}`}>
                {prog.programme}
              </span>
              <span className="text-xs font-black text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            <h4 className="text-xs font-black text-navy dark:text-white">{prog.fullName}</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              Coord: <span className="font-bold text-navy-700 dark:text-slate-200">{prog.coordinator}</span>
            </p>

            <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-[11px] font-extrabold text-navy dark:text-white font-display">
                {activeMetric === 'attendance' ? `${prog.attendance}% Turnout` :
                 activeMetric === 'planners' ? `${prog.planners} Pending` :
                 activeMetric === 'support' ? `${prog.support} Cases` :
                 activeMetric === 'observation' ? `${prog.observation}% Score` :
                 `${prog.npd} / 5.0 Rating`}
              </span>
              <span className="text-[10px] font-bold text-purple-700 dark:text-purple-400">Explore &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
