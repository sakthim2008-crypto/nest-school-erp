import React from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  Award,
  ShieldCheck, 
  FileSpreadsheet, 
  ArrowRight, 
  Target, 
  Sparkles 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line 
} from 'recharts';
import { WeekMIS } from '../data/schoolData';
import { ProgressRing } from './ProgressRing';
import { IllustrationGraduationCap, IllustrationTrophy } from './EducationalIllustrations';

interface AssessmentsSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const AssessmentsSection: React.FC<AssessmentsSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const declinedTrend = [
    { week: '21-26 Sep', EYP: 0, PYP: 1, CIE_LS: 0, CIE_IGCSE_AS: 1, Total: 2 },
    { week: '28 Sep-1 Oct', EYP: 0, PYP: 1, CIE_LS: 0, CIE_IGCSE_AS: 0, Total: 1 },
    { week: '5-10 Oct', EYP: 0, PYP: 11, CIE_LS: 1, CIE_IGCSE_AS: 0, Total: 12 },
    { week: '12-22 Oct', EYP: 0, PYP: 11, CIE_LS: 0, CIE_IGCSE_AS: 5, Total: 16 },
    { week: '26-30 Oct', EYP: 0, PYP: 11, CIE_LS: 6, CIE_IGCSE_AS: 7, Total: 24 },
    { week: '3-6 Nov', EYP: 3, PYP: 11, CIE_LS: 0, CIE_IGCSE_AS: 0, Total: 14 },
    { week: '10-13 Nov', EYP: 0, PYP: 11, CIE_LS: 0, CIE_IGCSE_AS: 0, Total: 11 },
  ];

  const sectionIII = currentWeek.sections.find(s => s.id === 'III');
  const metrics = sectionIII?.metrics || [];

  return (
    <div className="space-y-6 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#C4B5FD]/35 via-[#7DD3FC]/25 to-[#FDBAAB]/30 p-6 rounded-4xl border border-[#C4B5FD]/50 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-purple-700 shadow-sm border border-purple-200 flex items-center justify-center text-xl">
              🎓
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                Assessments & Examination Standards (Section III)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                FA & SA1 assessment scheduling, class average benchmarks (&ge;60%), score distributions, and descriptor progression.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-white text-[#065F46] border border-[#A7F3D0] shadow-2xs flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            0 Classes Below 60% Benchmark
          </span>
        </div>
      </div>

      {/* 5 Core Health Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Metric 1 */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#F0FDF4] border border-[#A7F3D0]">
          <div className="text-[11px] font-black text-[#065F46] uppercase tracking-wider mb-1">
            Tasks Not Recorded
          </div>
          <div className="text-2xl font-black text-navy font-display">0 (NIL)</div>
          <p className="text-xs text-[#047857] font-bold mt-1">
            100% on schedule as per timeline.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#F0FDF4] border border-[#A7F3D0]">
          <div className="text-[11px] font-black text-[#065F46] uppercase tracking-wider mb-1">
            Classes with Avg &lt; 60%
          </div>
          <div className="text-2xl font-black text-navy font-display">0 Classes</div>
          <p className="text-xs text-[#047857] font-bold mt-1">
            All classes maintain &ge; 60% average.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#F0F9FF] border border-[#7DD3FC]">
          <div className="text-[11px] font-black text-[#075985] uppercase tracking-wider mb-1">
            &gt; 40% Below Class Avg
          </div>
          <div className="text-2xl font-black text-navy font-display">0 Classes</div>
          <p className="text-xs text-sky-700 font-bold mt-1">
            Balanced normal distribution.
          </p>
        </div>

        {/* Metric 4 */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#FFFDF0] border border-[#FDE68A]">
          <div className="text-[11px] font-black text-amber-800 uppercase tracking-wider mb-1">
            Declined Performance
          </div>
          <div className="text-2xl font-black text-navy font-display">11 Learners</div>
          <p className="text-xs text-amber-700 font-bold mt-1">
            PYP cohort; remedial support active.
          </p>
        </div>

        {/* Metric 5 */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#FAF8FF] border border-[#C4B5FD]">
          <div className="text-[11px] font-black text-purple-800 uppercase tracking-wider mb-1">
            Significant Improvement
          </div>
          <div className="text-2xl font-black text-navy font-display">4 Cohorts</div>
          <p className="text-xs text-purple-700 font-bold mt-1">
            Following strategy deployment.
          </p>
        </div>
      </div>

      {/* Chart: Declined Performance Trajectory across 7 weeks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Declined Performance & Remedial Recovery Trajectory
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Tracking learners who declined by &ge; 1 grade descriptor across 7-week cycles.
              </p>
            </div>
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#A7F3D0]/70 text-[#065F46] border border-[#A7F3D0]">
              Down from 24 Peak
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={declinedTrend} margin={{ top: 15, right: 20, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="week" tick={{ fill: '#475569', fontSize: 11 }} />
                <YAxis tick={{ fill: '#64748B', fontSize: 11 }} />
                <Tooltip />
                <Line type="monotone" dataKey="Total" stroke="#EF4444" strokeWidth={3} dot={{ r: 4 }} name="Total Declined" />
                <Line type="monotone" dataKey="PYP" stroke="#0284C7" strokeWidth={2} dot={false} name="PYP" />
                <Line type="monotone" dataKey="CIE_IGCSE_AS" stroke="#8B5CF6" strokeWidth={2} dot={false} name="IGCSE / AS" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cambridge & IB Quality Standards Card */}
        <div className="lg:col-span-4 dashboard-card p-6 bg-gradient-to-br from-white to-[#FAF8FF] border border-[#C4B5FD] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-purple-600" />
              <h3 className="text-sm font-black text-navy font-display">
                Assessment Moderation
              </h3>
            </div>
            <p className="text-xs text-navy-700 leading-relaxed font-medium">
              Standardized mark scheme moderation conducted across Cambridge Lower Secondary, IGCSE, and IB Primary Years Programme.
            </p>

            <div className="space-y-2.5 mt-4">
              <div className="p-3.5 rounded-2.5xl bg-white/90 border border-purple-100 text-xs shadow-2xs">
                <span className="font-black text-purple-900">FA Pacing:</span>
                <p className="text-slate-600 mt-0.5 font-medium">Formative tests aligned with learning outcomes with zero delays.</p>
              </div>

              <div className="p-3.5 rounded-2.5xl bg-white/90 border border-emerald-100 text-xs shadow-2xs">
                <span className="font-black text-[#047857]">SA1 Preparedness:</span>
                <p className="text-slate-600 mt-0.5 font-medium">Pre-board and summative revision schedules verified by coordinators.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-bold">
            <span>Lead: Shyamala Rupavahini</span>
            <span className="text-purple-700 font-black">Standardized</span>
          </div>
        </div>
      </div>

      {/* Section III Metrics Authentic Preservation */}
      <div className="dashboard-card p-6 bg-white/95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h3 className="text-sm font-black text-navy font-display">
            Authentic Section III MIS Metrics
          </h3>
          <span className="text-xs font-black text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
            Week {currentWeek.week_index} Record
          </span>
        </div>

        <div className="space-y-3">
          {metrics.map((m) => (
            <div key={m.row} className="p-4 rounded-3xl border border-slate-200 bg-white shadow-2xs">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {m.s_no}
                  </span>
                  <div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
