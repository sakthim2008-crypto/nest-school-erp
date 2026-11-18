import React from 'react';
import { 
  Eye, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  GraduationCap, 
  Target,
  BookOpen,
  UserCheck,
  TrendingUp,
  Clock
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { 
  CLASSROOM_OBSERVATIONS_LOG, 
  NPD_CORE_SCORES, 
  WeekMIS,
  PROGRAMMES 
} from '../data/schoolData';
import { ProgressRing } from './ProgressRing';

interface ObservationsSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const ObservationsSection: React.FC<ObservationsSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const chartData = [
    { programme: 'EYP', avgScore: 76.6, target: 60, color: '#10B981' },
    { programme: 'PYP', avgScore: 67.2, target: 60, color: '#0284C7' },
    { programme: 'CIE LS', avgScore: 60.1, target: 60, color: '#8B5CF6' },
    { programme: 'CIE IGCSE/AS', avgScore: 66.0, target: 60, color: '#EF4444' },
  ];

  const sectionVII = currentWeek.sections.find(s => s.id === 'VII');
  const metrics = sectionVII?.metrics || [];

  return (
    <div className="space-y-6 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#7DD3FC]/35 via-[#A7F3D0]/25 to-[#C4B5FD]/25 p-6 rounded-4xl border border-[#7DD3FC]/50 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-sky-700 shadow-sm border border-sky-200 flex items-center justify-center text-xl">
              🔍
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                Classroom Observations & Faculty Appraisals (Section VII)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                Monitoring scheduled learning walks, teaching practice scores, pedagogical rubrics, and feedback loops.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-white text-[#065F46] border border-[#A7F3D0] shadow-2xs flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            0 Observations Pending (68 of 68 Completed)
          </span>
        </div>
      </div>

      {/* 3 Core Requirements KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Requirement 1: Pending teacher observations */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0FDF4] border border-[#A7F3D0] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-[#065F46] uppercase tracking-wider mb-1">
              Pending Observations
            </div>
            <div className="text-3xl font-black text-navy font-display">
              0 Pending
            </div>
            <p className="text-xs text-[#047857] font-bold mt-1">
              68 of 68 completed as per plan.
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              100% of faculty appraised this cycle
            </div>
          </div>
          <ProgressRing progress={100} size={64} strokeWidth={6} color="#10B981" />
        </div>

        {/* Requirement 2: Average observation scores */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#FAF8FF] border border-[#C4B5FD] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-purple-800 uppercase tracking-wider mb-1">
              Average Observation Score
            </div>
            <div className="text-3xl font-black text-navy font-display">
              67.5%
            </div>
            <p className="text-xs text-purple-700 font-bold mt-1">
              EYP Lead at 76.6% • Benchmark: &ge; 60%
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              School-wide pedagogical quality index
            </div>
          </div>
          <ProgressRing progress={67.5} size={64} strokeWidth={6} color="#8B5CF6" />
        </div>

        {/* Requirement 3: Teachers scoring below 50% */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0F9FF] border border-[#7DD3FC] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-sky-800 uppercase tracking-wider mb-1">
              Teachers Below 50% Floor
            </div>
            <div className="text-3xl font-black text-navy font-display">
              0 (NIL)
            </div>
            <p className="text-xs text-sky-700 font-bold mt-1">
              Zero sub-standard teaching appraisals.
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              100% faculty above quality threshold
            </div>
          </div>
          <ProgressRing progress={100} size={64} strokeWidth={6} color="#0284C7" />
        </div>

      </div>

      {/* Observation Score Comparison Chart + Qualitative Appraisals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Score Chart (6 cols) */}
        <div className="lg:col-span-6 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Average Observation Score by Academic Division
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Evaluated against standardized teaching rubric (Benchmark: &ge; 60%).
              </p>
            </div>
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#A7F3D0]/70 text-[#065F46] border border-[#A7F3D0]">
              All &ge; 60%
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 15, right: 20, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="programme" tick={{ fill: '#475569', fontSize: 11, fontWeight: 700 }} />
                <YAxis domain={[50, 90]} tick={{ fill: '#64748B', fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="avgScore" name="Avg Score %" radius={[8, 8, 0, 0]} barSize={36}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Division Qualitative Appraisal Cards (6 cols) */}
        <div className="lg:col-span-6 dashboard-card p-6 bg-white/95">
          <h3 className="text-sm font-black text-navy font-display mb-1">
            Qualitative Observation Findings & Focus Areas
          </h3>
          <p className="text-xs text-slate-500 mb-4 font-semibold">
            Strengths and actionable developmental goals from learning walks.
          </p>

          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {CLASSROOM_OBSERVATIONS_LOG.map((obs) => (
              <div
                key={obs.programme}
                className="p-4 rounded-3xl border border-slate-200/90 bg-[#FAF8FF] hover:bg-white transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-navy text-xs sm:text-sm">
                      {obs.programme}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">
                      ({obs.observedTeachers} Faculty Observed)
                    </span>
                  </div>
                  <span className="text-xs font-black text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-200">
                    {obs.avgScore}% Avg
                  </span>
                </div>

                <div className="mt-2 text-xs">
                  <div className="text-[#047857]">
                    <span className="font-black text-navy">Strong Areas: </span>
                    <span className="font-medium">{obs.strongAreas}</span>
                  </div>
                  <div className="text-purple-800 mt-1">
                    <span className="font-black text-navy">Pedagogical Focus: </span>
                    <span className="font-medium">{obs.focusAreas}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section VII MIS Data Table */}
      <div className="dashboard-card p-6 bg-white/95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h3 className="text-sm font-black text-navy font-display">
            Authentic Section VII MIS Metrics
          </h3>
          <span className="text-xs font-black text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
            Week {currentWeek.week_index} Record
          </span>
        </div>

        <div className="space-y-3">
          {metrics.map((m) => (
            <div key={m.row} className="p-4 rounded-3xl border border-slate-200 bg-white shadow-2xs">
              <div className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {m.s_no}
                </span>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-black text-navy">{m.description}</h4>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-[#A7F3D0]/60 text-[#065F46] border border-[#A7F3D0] font-black">
                      EYP: {m.eyp ?? 'NIL'}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-[#7DD3FC]/60 text-[#075985] border border-[#7DD3FC] font-black">
                      PYP: {m.pyp ?? 'NIL'}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-[#C4B5FD]/60 text-[#5B21B6] border border-[#C4B5FD] font-black">
                      CIE LS: {m.cie_ls ?? 'NIL'}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-[#FDBAAB]/60 text-[#9A3412] border border-[#FDBAAB] font-black">
                      IGCSE/AS: {m.cie_igcse_as ?? 'NIL'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
