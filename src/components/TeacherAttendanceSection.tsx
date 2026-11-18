import React from 'react';
import { 
  UserCheck, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  UserX, 
  FileText,
  User,
  School,
  Heart
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { WeekMIS, PROGRAMMES } from '../data/schoolData';
import { ProgressRing } from './ProgressRing';

interface TeacherAttendanceSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const TeacherAttendanceSection: React.FC<TeacherAttendanceSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const teacherHistory = [
    { week: '21-26 Sep', leavesOver3Days: { EYP: 0, PYP: 1, CIE_LS: 2, IGCSE: 0 }, lateOver3Times: { EYP: 0, PYP: 3, CIE_LS: 1, IGCSE: 0 }, unexplained: 0 },
    { week: '28 Sep-1 Oct', leavesOver3Days: { EYP: 1, PYP: 1, CIE_LS: 1, IGCSE: 1 }, lateOver3Times: { EYP: 0, PYP: 3, CIE_LS: 1, IGCSE: 1 }, unexplained: 0 },
    { week: '5-10 Oct', leavesOver3Days: { EYP: 1, PYP: 1, CIE_LS: 0, IGCSE: 0 }, lateOver3Times: { EYP: 0, PYP: 3, CIE_LS: 1, IGCSE: 0 }, unexplained: 0 },
    { week: '12-22 Oct', leavesOver3Days: { EYP: 2, PYP: 1, CIE_LS: 0, IGCSE: 0 }, lateOver3Times: { EYP: 1, PYP: 3, CIE_LS: 0, IGCSE: 0 }, unexplained: 0 },
    { week: '26-30 Oct', leavesOver3Days: { EYP: 2, PYP: 1, CIE_LS: 0, IGCSE: 0 }, lateOver3Times: { EYP: 2, PYP: 3, CIE_LS: 0, IGCSE: 0 }, unexplained: 0 },
    { week: '3-6 Nov', leavesOver3Days: { EYP: 2, PYP: 1, CIE_LS: 0, IGCSE: 0 }, lateOver3Times: { EYP: 1, PYP: 3, CIE_LS: 0, IGCSE: 0 }, unexplained: 0 },
    { week: '10-13 Nov', leavesOver3Days: { EYP: 2, PYP: 1, CIE_LS: 0, IGCSE: 0 }, lateOver3Times: { EYP: 1, PYP: 3, CIE_LS: 0, IGCSE: 0 }, unexplained: 0 },
  ];

  // Authentic sanctioned leaves log from sheet notes
  const sanctionedLeavesLog = [
    {
      teacher: 'Srilakshmi',
      division: 'EYP',
      reason: 'House construction and house warming ceremony',
      days: 4,
      status: 'Approved & Covered',
      substitute: 'Internal homeroom team cover'
    },
    {
      teacher: 'Krishna Kumari Anand',
      division: 'CIE LS',
      reason: 'Husband was unwell; under quarantine protocol',
      days: 5,
      status: 'Sanctioned Medical',
      substitute: 'Science department team cover'
    },
    {
      teacher: 'Rosaline',
      division: 'CIE LS',
      reason: "Bereavement (Father's demise)",
      days: 4,
      status: 'Compassionate Leave',
      substitute: 'Department head cover'
    },
    {
      teacher: 'Senior Faculty Member',
      division: 'PYP',
      reason: 'Planned family commitment',
      days: 3.5,
      status: 'Sanctioned',
      substitute: 'Homeroom partner coverage'
    }
  ];

  // Punctuality advisory log
  const punctualityLog = [
    { teacher: 'Priya', division: 'EYP', instances: 4, status: 'Counseled & Timetable Adjusted' },
    { teacher: 'Ms Mohanasri', division: 'CIE LS', instances: 4, status: 'Transport Schedule Recalibrated' },
    { teacher: '3 Faculty Members', division: 'PYP', instances: 3, status: 'Homeroom Early Shift Addressed' },
  ];

  const sectionV = currentWeek.sections.find(s => s.id === 'V');
  const metrics = sectionV?.metrics || [];

  return (
    <div className="space-y-6 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#7DD3FC]/35 via-[#C4B5FD]/25 to-[#A7F3D0]/25 p-6 rounded-4xl border border-[#7DD3FC]/50 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-sky-700 shadow-sm border border-sky-200 flex items-center justify-center text-xl">
              👨‍🏫
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                Teacher Attendance & Punctuality Governance (Section V)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                Monitoring faculty leaves (&gt; 3 days), late arrivals (&gt; 3 occasions), unexplained absences, and substitution continuity.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-white text-[#065F46] border border-[#A7F3D0] shadow-2xs flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            0 Unexplained Absences (100% Sanctioned)
          </span>
        </div>
      </div>

      {/* 3 Core Requirements KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Requirement 1: Teachers absent for > 3 days */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#FFFDF0] border border-[#FDE68A] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-amber-800 uppercase tracking-wider mb-1">
              Absent &gt; 3 Days (Current Month)
            </div>
            <div className="text-3xl font-black text-navy font-display">
              3 Teachers
            </div>
            <p className="text-xs text-amber-700 font-bold mt-1">
              EYP (2) • PYP (1) • All officially approved
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              Leaves with verified reasons & substitute cover
            </div>
          </div>
          <ProgressRing progress={95} size={64} strokeWidth={6} color="#F59E0B" showText={false} />
        </div>

        {/* Requirement 2: Teachers late on > 3 occasions */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#FFF5F5] border border-[#FDBAAB] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-red-800 uppercase tracking-wider mb-1">
              Late &gt; 3 Occasions (In Month)
            </div>
            <div className="text-3xl font-black text-navy font-display">
              4 Teachers
            </div>
            <p className="text-xs text-red-600 font-bold mt-1">
              PYP (3) • EYP (1: Priya)
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              Morning bus route & commute counseling
            </div>
          </div>
          <ProgressRing progress={88} size={64} strokeWidth={6} color="#EF4444" showText={false} />
        </div>

        {/* Requirement 3: Unexplained absences */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0FDF4] border border-[#A7F3D0] flex items-center justify-between">
          <div>
            <div className="text-xs font-black text-[#065F46] uppercase tracking-wider mb-1">
              Unexplained Absences
            </div>
            <div className="text-3xl font-black text-navy font-display">
              0 (NIL)
            </div>
            <p className="text-xs text-[#047857] font-bold mt-1">
              100% verified staff attendance
            </p>
            <div className="text-[11px] text-slate-500 font-medium mt-2">
              Zero unexcused absence for 7 consecutive weeks
            </div>
          </div>
          <ProgressRing progress={100} size={64} strokeWidth={6} color="#10B981" />
        </div>

      </div>

      {/* Sanctioned Leaves Detail + Punctuality Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sanctioned Leaves Register (7 cols) */}
        <div className="lg:col-span-7 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Extended Faculty Leaves Registry (&gt; 3 Days)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Authentic faculty records and sanctioned substitute arrangements.
              </p>
            </div>
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#A7F3D0]/70 text-[#065F46] border border-[#A7F3D0]">
              100% Substitution Covered
            </span>
          </div>

          <div className="space-y-3">
            {sanctionedLeavesLog.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-3xl border border-slate-200/80 bg-[#FAF8FF] hover:bg-white transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-navy text-xs sm:text-sm">
                      {item.teacher}
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                      {item.division}
                    </span>
                  </div>
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-[#A7F3D0]/70 text-[#065F46] border border-[#A7F3D0]">
                    {item.status}
                  </span>
                </div>
                <div className="text-xs text-navy-700 mt-1.5 font-medium">
                  <span className="font-black text-navy">Reason: </span>
                  {item.reason}
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                  <span>Duration: {item.days} Days</span>
                  <span className="text-purple-700">Coverage: {item.substitute}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Punctuality Governance & HoS Comments (5 cols) */}
        <div className="lg:col-span-5 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Punctuality Counseling & Transport
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Arrival tracking on &gt; 3 occasions.
              </p>
            </div>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>

          <div className="space-y-3">
            {punctualityLog.map((log, idx) => (
              <div key={idx} className="p-4 rounded-3xl border border-amber-200/70 bg-[#FFFDF0]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-navy">{log.teacher}</span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-black text-[10px]">
                    {log.division} ({log.instances}x)
                  </span>
                </div>
                <div className="text-xs text-navy-700 font-semibold mt-1.5">
                  Action: {log.status}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-3xl bg-gradient-to-r from-[#FAF8FF] to-[#F0FDF4] border border-[#C4B5FD] text-xs">
            <span className="font-black text-purple-900 block mb-1">HoS Weekly Directive:</span>
            <p className="text-navy-700 font-medium leading-relaxed">
              &ldquo;Morning supervision rotas rebalanced with homeroom co-teachers to guarantee zero disruption to first-period instructional start time.&rdquo;
            </p>
          </div>
        </div>

      </div>

      {/* Section V Metrics Detail Preservation */}
      <div className="dashboard-card p-6 bg-white/95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h3 className="text-sm font-black text-navy font-display">
            Authentic Section V MIS Metrics
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
