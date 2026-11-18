import React, { useState } from 'react';
import { 
  Settings, 
  Save, 
  Check, 
  Clock, 
  ShieldCheck, 
  Users, 
  Calendar, 
  Layers, 
  Sparkles, 
  School, 
  SlidersHorizontal, 
  Mail, 
  UserCheck,
  CheckCircle2,
  BellRing
} from 'lucide-react';
import { PROGRAMMES } from '../data/schoolData';

interface SettingsSectionProps {
  academicYear: string;
  onAcademicYearChange: (year: string) => void;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  academicYear,
  onAcademicYearChange
}) => {
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [attendanceTarget, setAttendanceTarget] = useState('90');
  const [markingSla, setMarkingSla] = useState('7');
  const [incidentSla, setIncidentSla] = useState('48');
  const [observationFloor, setObservationFloor] = useState('60');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const coordinators = [
    {
      name: 'Praseeda Pradeep',
      role: 'Early Years Coordinator',
      division: 'EYP (Pre-KG to UKG)',
      email: 'praseeda.p@thenest.edu.in',
      avatarBg: 'bg-[#10B981]'
    },
    {
      name: 'Priyanga Rajan',
      role: 'Primary Years Coordinator',
      division: 'PYP (Grades 1 to 5)',
      email: 'priyanga.r@thenest.edu.in',
      avatarBg: 'bg-[#0284C7]'
    },
    {
      name: 'Bhagyashree Ganesh',
      role: 'Lower Secondary Coordinator',
      division: 'CIE LS (Grades 6 to 8)',
      email: 'bhagyashree.g@thenest.edu.in',
      avatarBg: 'bg-[#8B5CF6]'
    },
    {
      name: 'Shyamala Rupavahini',
      role: 'Upper Secondary & AS Level Coordinator',
      division: 'CIE IGCSE & AS Level',
      email: 'shyamala.r@thenest.edu.in',
      avatarBg: 'bg-[#EF4444]'
    },
    {
      name: 'Pooja',
      role: 'Head of Learner Support & Wellbeing',
      division: 'School-wide SEN & Counselling',
      email: 'pooja.pastoral@thenest.edu.in',
      avatarBg: 'bg-[#EC4899]'
    }
  ];

  return (
    <div className="space-y-6 mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#C4B5FD]/35 via-[#7DD3FC]/25 to-[#FDE68A]/30 dark:from-purple-950/40 dark:via-sky-950/30 dark:to-slate-900 p-6 rounded-4xl border border-[#C4B5FD]/50 dark:border-slate-800 shadow-pastel dark:shadow-none">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 shadow-sm border border-purple-200 dark:border-slate-700 flex items-center justify-center text-xl">
              ⚙️
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy dark:text-white tracking-tight font-display">
                Institutional ERP Settings & Configurations
              </h2>
              <p className="text-xs text-navy-700 dark:text-slate-300 font-semibold mt-0.5">
                Manage academic periods, RAG SLA thresholds, coordinators directory, and notification policies.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs flex items-center gap-2 shadow-pastel-sm pop-btn self-start sm:self-auto"
        >
          {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
          <span>{savedSuccess ? 'Configuration Saved!' : 'Save System Settings'}</span>
        </button>
      </div>

      {/* Grid: Thresholds & Configurations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* SLA Thresholds (7 cols) */}
        <div className="lg:col-span-7 dashboard-card p-6 bg-white/95 dark:bg-[#0E1729]/95 border border-slate-200/90 dark:border-slate-800">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
            <SlidersHorizontal className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <h3 className="text-sm font-black text-navy dark:text-white font-display">
              Executive RAG Thresholds & Compliance SLAs
            </h3>
          </div>

          <div className="space-y-4">
            {/* Card 1: Attendance Target */}
            <div className="p-4 rounded-3xl bg-[#FAF8FF] dark:bg-[#111C30] border border-[#C4B5FD]/70 dark:border-purple-700/70 hover:dark:border-purple-500 flex items-center justify-between transition-all shadow-2xs">
              <div className="pr-4">
                <label className="text-xs font-black text-navy dark:text-white block">
                  Student Attendance Target Floor (%)
                </label>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  Trigger amber alert if whole-school or division average dips below.
                </span>
              </div>
              <input
                type="number"
                value={attendanceTarget}
                onChange={(e) => setAttendanceTarget(e.target.value)}
                className="w-20 px-3 py-2 rounded-2xl border border-purple-200 dark:border-purple-600/70 text-center text-sm font-black text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white dark:bg-[#080E1C] shadow-inner"
              />
            </div>

            {/* Card 2: Assignment Marking SLA */}
            <div className="p-4 rounded-3xl bg-[#F0FDF4] dark:bg-[#111C30] border border-[#A7F3D0]/80 dark:border-emerald-700/70 hover:dark:border-emerald-500 flex items-center justify-between transition-all shadow-2xs">
              <div className="pr-4">
                <label className="text-xs font-black text-navy dark:text-white block">
                  Assignment Marking SLA (Calendar Days)
                </label>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  Maximum allowable days before marking is classified delayed.
                </span>
              </div>
              <input
                type="number"
                value={markingSla}
                onChange={(e) => setMarkingSla(e.target.value)}
                className="w-20 px-3 py-2 rounded-2xl border border-emerald-200 dark:border-emerald-600/70 text-center text-sm font-black text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white dark:bg-[#080E1C] shadow-inner"
              />
            </div>

            {/* Card 3: SEN SLA */}
            <div className="p-4 rounded-3xl bg-[#F0F9FF] dark:bg-[#111C30] border border-[#7DD3FC]/80 dark:border-sky-700/70 hover:dark:border-sky-500 flex items-center justify-between transition-all shadow-2xs">
              <div className="pr-4">
                <label className="text-xs font-black text-navy dark:text-white block">
                  SEN / Pastoral Intervention Resolution SLA (Hours)
                </label>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  Mandatory consultation and parent contact window.
                </span>
              </div>
              <input
                type="number"
                value={incidentSla}
                onChange={(e) => setIncidentSla(e.target.value)}
                className="w-20 px-3 py-2 rounded-2xl border border-sky-200 dark:border-sky-600/70 text-center text-sm font-black text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white dark:bg-[#080E1C] shadow-inner"
              />
            </div>

            {/* Card 4: Observation Floor */}
            <div className="p-4 rounded-3xl bg-[#FFFDF0] dark:bg-[#111C30] border border-[#FDE68A]/80 dark:border-amber-700/70 hover:dark:border-amber-500 flex items-center justify-between transition-all shadow-2xs">
              <div className="pr-4">
                <label className="text-xs font-black text-navy dark:text-white block">
                  Observation Score Benchmark Floor (%)
                </label>
                <span className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  Pedagogical quality minimum standard for faculty.
                </span>
              </div>
              <input
                type="number"
                value={observationFloor}
                onChange={(e) => setObservationFloor(e.target.value)}
                className="w-20 px-3 py-2 rounded-2xl border border-amber-200 dark:border-amber-600/70 text-center text-sm font-black text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white dark:bg-[#080E1C] shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* System & Notification Policies (5 cols) */}
        <div className="lg:col-span-5 dashboard-card p-6 bg-white/95 dark:bg-[#0E1729]/95 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
              <Mail className="w-4 h-4 text-purple-600 dark:text-purple-300" />
              <h3 className="text-sm font-black text-navy dark:text-white font-display">
                Automated Digest & Alerts
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-3xl bg-slate-50 dark:bg-[#111C30] border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-2xs">
                <div>
                  <span className="text-xs font-black text-navy dark:text-white block">
                    Critical Red SLA Push Notifications
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-300 block">
                    Immediate notification on delays &gt; 1 week.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-3xl bg-slate-50 dark:bg-[#111C30] border border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-2xs">
                <div>
                  <span className="text-xs font-black text-navy dark:text-white block">
                    Monday Executive MIS Digest
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-300 block">
                    Auto-compile 8-section report every Monday 08:00 AM.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={weeklyDigest}
                  onChange={(e) => setWeeklyDigest(e.target.checked)}
                  className="w-4 h-4 accent-purple-600 rounded cursor-pointer"
                />
              </div>

              {/* Active Academic Session Card - Fully themed for dark and light mode with high contrast */}
              <div className="p-4 rounded-3xl bg-[#FAF8FF] dark:bg-[#111C30] border border-[#C4B5FD] dark:border-purple-700/70 text-xs shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-black text-purple-900 dark:text-purple-200 block text-sm">Active Academic Session</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#A7F3D0]/70 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border border-[#A7F3D0] dark:border-emerald-700">
                    Live
                  </span>
                </div>
                <p className="text-navy-700 dark:text-slate-200 font-semibold">The NEST School • Academic Year {academicYear}</p>
                <div className="mt-2.5 pt-2 border-t border-purple-200/60 dark:border-purple-800/60 text-[11px] text-purple-700 dark:text-purple-300 font-bold flex items-center justify-between">
                  <span>Status: Term 1 Active Review</span>
                  <span className="text-slate-400 dark:text-slate-300 text-[10px]">v3.0 Next-Gen</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Database Synced</span>
            <span className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              All Channels Operational
            </span>
          </div>
        </div>
      </div>

      {/* Division Coordinators Directory */}
      <div className="dashboard-card p-6 bg-white/95 dark:bg-[#0E1729]/95 border border-slate-200/90 dark:border-slate-800">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-600 dark:text-purple-300" />
            <h3 className="text-sm font-black text-navy dark:text-white font-display">
              Division Coordinators Directory & Access Control
            </h3>
          </div>
          <span className="text-xs font-black text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
            5 Coordinators Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {coordinators.map((c, idx) => (
            <div key={idx} className="p-3.5 rounded-2.5xl bg-slate-50/80 dark:bg-[#111C30] border border-slate-200/80 dark:border-slate-800 hover:border-[#C4B5FD] dark:hover:border-purple-600/70 transition-all text-xs group pop-btn">
              <div className="flex items-center gap-2.5 mb-2">
                <div className={`w-8 h-8 rounded-xl ${c.avatarBg} text-white font-black text-xs flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  {c.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="truncate">
                  <div className="font-extrabold text-navy dark:text-white truncate">{c.name}</div>
                  <div className="text-[10px] text-purple-700 dark:text-purple-300 font-bold truncate">{c.division.split(' ')[0]}</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-300 font-medium line-clamp-1">{c.role}</p>
              <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-400 truncate">
                {c.email}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
