import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  BookOpen, 
  UserX,
  FileCheck2,
  CalendarCheck,
  Search,
  Filter,
  Check,
  ChevronDown,
  ChevronUp,
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
  Legend,
  LineChart,
  Line
} from 'recharts';
import { WeekMIS, PROGRAMMES } from '../data/schoolData';

interface AssignmentsSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const AssignmentsSection: React.FC<AssignmentsSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const [showNotes, setShowNotes] = useState(false);

  // Weekly Non-submission / Late HR tasks data
  const hrTrend = [
    { week: '21-26 Sep', EYP: 0, PYP: 15, CIE_LS: 2, CIE_IGCSE_AS: 7, delayedEvaluations: 0, totalNonSubmission: 24 },
    { week: '28 Sep-1 Oct', EYP: 0, PYP: 15, CIE_LS: 2, CIE_IGCSE_AS: 7, delayedEvaluations: 0, totalNonSubmission: 24 },
    { week: '5-10 Oct', EYP: 2, PYP: 26, CIE_LS: 7, CIE_IGCSE_AS: 10, delayedEvaluations: 0, totalNonSubmission: 45 },
    { week: '12-22 Oct', EYP: 6, PYP: 18, CIE_LS: 0, CIE_IGCSE_AS: 0, delayedEvaluations: 0, totalNonSubmission: 24 },
    { week: '26-30 Oct', EYP: 0, PYP: 20, CIE_LS: 0, CIE_IGCSE_AS: 1, delayedEvaluations: 0, totalNonSubmission: 21 },
    { week: '3-6 Nov', EYP: 6, PYP: 20, CIE_LS: 0, CIE_IGCSE_AS: 0, delayedEvaluations: 0, totalNonSubmission: 26 },
    { week: '10-13 Nov', EYP: 0, PYP: 20, CIE_LS: 0, CIE_IGCSE_AS: 0, delayedEvaluations: 0, totalNonSubmission: 20 },
  ];

  const currentHr = hrTrend[hrTrend.length - 1];

  // Cohort breakdown for HR tasks in current week
  const cohortBreakdown = [
    { cohort: 'PYP Grade 3', learnersFlagged: 6, subject: 'Math & Language HR', followUp: 'Homeroom diary note sent to parents' },
    { cohort: 'PYP Grade 4', learnersFlagged: 8, subject: 'UOI Project Sheets', followUp: 'Study planner review in homeroom' },
    { cohort: 'PYP Grade 5', learnersFlagged: 6, subject: 'Inquiry Portfolios', followUp: 'Zero period completion support' },
    { cohort: 'CIE Lower Sec', learnersFlagged: 0, subject: 'All Subjects', followUp: '100% On-Time Submission' },
    { cohort: 'CIE IGCSE/AS', learnersFlagged: 0, subject: 'All Subjects', followUp: '100% On-Time Submission' },
    { cohort: 'EYP', learnersFlagged: 0, subject: 'Reinforcement Packets', followUp: 'Completed in Home Routine' }
  ];

  const sectionII = currentWeek.sections.find(s => s.id === 'II');
  const metrics = sectionII?.metrics || [];

  return (
    <div className="space-y-6 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#A7F3D0]/35 via-[#7DD3FC]/25 to-[#FDE68A]/30 p-6 rounded-4xl border border-[#A7F3D0]/50 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-emerald-700 shadow-sm border border-emerald-200 flex items-center justify-center text-xl">
              📝
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                Home Reinforcement & Assignments (Section II)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                Monitoring repetitive non-submission, late task submissions, and faculty evaluation turnaround SLA (&lt; 7 days).
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-white text-[#065F46] border border-[#A7F3D0] shadow-2xs flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            100% Marking SLA Compliance (&lt; 7 Days)
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0FDF4] border border-[#A7F3D0]">
          <div className="flex items-center justify-between text-xs font-black text-[#065F46] uppercase tracking-wider mb-2">
            <span>Delayed Marking (&gt; 7 Days)</span>
            <FileCheck2 className="w-4 h-4 text-[#10B981]" />
          </div>
          <div className="text-3xl font-black text-navy font-display">0 Assignments</div>
          <p className="text-xs text-[#047857] font-bold mt-1">
            Zero delayed corrections across all faculties for 7 consecutive weeks.
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-3 pt-3 border-t border-emerald-200/50">
            SLA: Faculty evaluate assignments within 7 calendar days.
          </div>
        </div>

        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#FFFDF0] border border-[#FDE68A]">
          <div className="flex items-center justify-between text-xs font-black text-amber-800 uppercase tracking-wider mb-2">
            <span>Repeated Late / Non-submissions</span>
            <UserX className="w-4 h-4 text-[#F59E0B]" />
          </div>
          <div className="text-3xl font-black text-navy font-display">20 Learners</div>
          <p className="text-xs text-amber-700 font-bold mt-1">
            Concentrated in PYP Grades 3 to 5.
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-3 pt-3 border-t border-amber-200/50">
            Criteria: Non-submission or late submission for &gt; once.
          </div>
        </div>

        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0F9FF] border border-[#7DD3FC]">
          <div className="flex items-center justify-between text-xs font-black text-sky-800 uppercase tracking-wider mb-2">
            <span>Secondary Divisions Rate</span>
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
          </div>
          <div className="text-3xl font-black text-navy font-display">100% On-Time</div>
          <p className="text-xs text-sky-700 font-bold mt-1">
            CIE LS (0) & CIE IGCSE/AS (0) fully compliant this week.
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-3 pt-3 border-t border-sky-200/50">
            All secondary homework submissions verified.
          </div>
        </div>
      </div>

      {/* Weekly HR Trend Chart & Cohort Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Trend Chart (7 cols) */}
        <div className="lg:col-span-7 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Home Reinforcement Submission Trajectory (7 Weeks)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Tracking repeated non-submissions across academic divisions.
              </p>
            </div>
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#A7F3D0]/70 text-[#065F46] border border-[#A7F3D0]">
              PYP Stable at 20
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hrTrend} margin={{ top: 15, right: 20, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="week" tick={{ fill: '#475569', fontSize: 11 }} />
                <YAxis tick={{ fill: '#64748B', fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="PYP" name="PYP (Primary)" fill="#0284C7" radius={[6, 6, 0, 0]} barSize={22} />
                <Bar dataKey="CIE_IGCSE_AS" name="IGCSE / AS" fill="#8B5CF6" radius={[6, 6, 0, 0]} barSize={22} />
                <Bar dataKey="CIE_LS" name="Lower Secondary" fill="#7DD3FC" radius={[6, 6, 0, 0]} barSize={22} />
                <Bar dataKey="EYP" name="Early Years" fill="#10B981" radius={[6, 6, 0, 0]} barSize={22} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cohort Breakdown (5 cols) */}
        <div className="lg:col-span-5 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Cohort Intervention Status
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Homeroom follow-ups for flagged learners.
              </p>
            </div>
          </div>

          <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            {cohortBreakdown.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2.5xl border border-slate-200/80 bg-[#FAF8FF] flex items-center justify-between text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-navy">{item.cohort}</span>
                    <span className="text-[10px] text-slate-400 font-bold">({item.subject})</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5 font-medium">{item.followUp}</div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black border ${
                  item.learnersFlagged > 0 ? 'bg-[#FDE68A]/80 text-amber-900 border-[#FDE68A]' : 'bg-[#A7F3D0]/80 text-[#065F46] border-[#A7F3D0]'
                }`}>
                  {item.learnersFlagged} Flagged
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section II Metrics Detail Preservation */}
      <div className="dashboard-card p-6 bg-white/95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h3 className="text-sm font-black text-navy font-display">
            Authentic Section II MIS Metrics
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
