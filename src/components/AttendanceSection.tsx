import React from 'react';
import { 
  Users, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Award,
  Clock,
  Heart,
  UserCheck,
  UserX,
  Compass
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  Cell
} from 'recharts';
import { 
  ATTENDANCE_TRENDS, 
  PYP_DAILY_ATTENDANCE, 
  WeekMIS,
  PROGRAMMES 
} from '../data/schoolData';
import { ProgressRing } from './ProgressRing';

interface AttendanceSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const AttendanceSection: React.FC<AttendanceSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const sectionIV = currentWeek.sections.find(s => s.id === 'IV');
  const metrics = sectionIV?.metrics || [];

  return (
    <div className="space-y-6 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#A7F3D0]/35 via-[#7DD3FC]/25 to-[#FDE68A]/30 p-6 rounded-4xl border border-[#A7F3D0]/50 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-teal-700 shadow-sm border border-teal-200 flex items-center justify-center text-xl">
              ☀️
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                Learner Attendance Intelligence (Section IV)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                Monitoring student attendance percentages, weekly patterns, consecutive uninformed leaves, and cohort trends.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-white text-[#065F46] border border-[#A7F3D0] shadow-2xs flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            0 Uninformed Absences Across School
          </span>
        </div>
      </div>

      {/* 3 Core Learner Attendance KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Requirement 1: Overall Student Attendance % */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0FDF4] border border-[#A7F3D0] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-[#065F46] uppercase tracking-wider mb-1">
              Overall Student Attendance
            </div>
            <div className="text-3xl font-black text-navy font-display">
              86.8%
            </div>
            <p className="text-xs text-[#047857] font-bold mt-1">
              CIE LS Peak: 96.0% • Whole School
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              Benchmark Target: &ge; 90.0%
            </div>
          </div>
          <ProgressRing progress={86.8} size={64} strokeWidth={6} color="#10B981" />
        </div>

        {/* Requirement 2: Consecutive / Extended Absences */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#FFFDF0] border border-[#FDE68A] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-amber-800 uppercase tracking-wider mb-1">
              Consecutive / Extended Absences
            </div>
            <div className="text-3xl font-black text-navy font-display">
              13 Learners
            </div>
            <p className="text-xs text-amber-700 font-bold mt-1">
              PYP (9) • EYP (4) • Secondary (0)
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              &ge; 3 consecutive days or &gt; 2 days/wk
            </div>
          </div>
          <ProgressRing progress={75} size={64} strokeWidth={6} color="#F59E0B" showText={false} />
        </div>

        {/* Requirement 3: Uninformed Absences */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0F9FF] border border-[#7DD3FC] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-sky-800 uppercase tracking-wider mb-1">
              Uninformed Absences
            </div>
            <div className="text-3xl font-black text-navy font-display">
              0 (NIL)
            </div>
            <p className="text-xs text-sky-700 font-bold mt-1">
              100% of leaves informed by parents.
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              Zero unverified leaves school-wide
            </div>
          </div>
          <ProgressRing progress={100} size={64} strokeWidth={6} color="#0284C7" />
        </div>

      </div>

      {/* Attendance Trends Multi-Week Chart + Daily Pattern */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Multi-Week Trend (7 cols) */}
        <div className="lg:col-span-7 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Weekly Student Attendance Trajectory (7 Weeks)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Comparative turnout % across EYP, PYP, CIE LS, and CIE IGCSE/AS.
              </p>
            </div>
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#A7F3D0]/70 text-[#065F46] border border-[#A7F3D0]">
              CIE LS Leading (96%)
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ATTENDANCE_TRENDS} margin={{ top: 15, right: 20, left: -10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="week" tick={{ fill: '#475569', fontSize: 11 }} />
                <YAxis domain={[75, 100]} tick={{ fill: '#64748B', fontSize: 11 }} />
                <Tooltip />
                <Line type="monotone" dataKey="CIE_LS" stroke="#0284C7" strokeWidth={3} dot={{ r: 4 }} name="CIE LS" />
                <Line type="monotone" dataKey="PYP" stroke="#8B5CF6" strokeWidth={2.5} dot={false} name="PYP" />
                <Line type="monotone" dataKey="CIE_IGCSE_AS" stroke="#EF4444" strokeWidth={2.5} dot={false} name="IGCSE / AS" />
                <Line type="monotone" dataKey="EYP" stroke="#10B981" strokeWidth={2} dot={false} name="EYP" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PYP Daily Attendance Pattern (5 cols) */}
        <div className="lg:col-span-5 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                PYP Daily Attendance Trajectory
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Authentic Monday to Friday breakdown reported by Priyanga Rajan.
              </p>
            </div>
            <Calendar className="w-4 h-4 text-purple-600" />
          </div>

          <div className="space-y-3">
            {PYP_DAILY_ATTENDANCE.map((day) => (
              <div key={day.day} className="p-3 rounded-2.5xl bg-[#FAF8FF] border border-[#C4B5FD]/50">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-navy">{day.day}</span>
                  <span className="font-black text-purple-700">{day.attendance}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-1.5">
                  <div 
                    className="bg-gradient-to-r from-[#7DD3FC] to-[#8B5CF6] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${day.attendance}%` }}
                  ></div>
                </div>
                <div className="text-[10px] text-slate-500 font-medium mt-1">{day.notes}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section IV Metrics Detail Preservation */}
      <div className="dashboard-card p-6 bg-white/95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h3 className="text-sm font-black text-navy font-display">
            Authentic Section IV MIS Metrics
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
