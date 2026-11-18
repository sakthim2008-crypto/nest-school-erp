import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  AlertOctagon, 
  Filter, 
  Clock, 
  User, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { WeekMIS, PROGRAMMES } from '../data/schoolData';

interface CriticalIssuesSectionProps {
  currentWeek: WeekMIS;
}

export const CriticalIssuesSection: React.FC<CriticalIssuesSectionProps> = ({
  currentWeek
}) => {
  const [filterRag, setFilterRag] = useState<'ALL' | 'red' | 'amber' | 'green'>('ALL');
  const [resolvedIds, setResolvedIds] = useState<number[]>([]);

  const toggleResolve = (id: number) => {
    if (resolvedIds.includes(id)) {
      setResolvedIds(resolvedIds.filter(i => i !== id));
    } else {
      setResolvedIds([...resolvedIds, id]);
    }
  };

  const ragItems = [
    {
      id: 1,
      rag: 'red',
      section: 'Section I: 1.0',
      title: 'Incomplete Curriculum Planners (21 Total)',
      programme: 'PYP (11) & CIE IGCSE/AS (10)',
      description: '21 planners evaluated with pending recommendations awaiting teacher completion before HoS review.',
      owner: 'Priyanga Rajan & Shyamala Rupavahini',
      deadline: 'Monday 09:30 AM Sync',
      recommendedAction: 'Conduct Friday planner completion clinic before HoS review sign-off.',
      cardBg: 'bg-gradient-to-br from-white via-white to-[#FFF5F5] dark:from-[#162032] dark:via-[#162032] dark:to-rose-950/30',
      cardBorder: 'border-[#FDBAAB] dark:border-rose-800/80',
      badgeClass: 'bg-[#FDBAAB]/80 dark:bg-rose-950/80 text-[#9A3412] dark:text-rose-300 border-[#FDBAAB] dark:border-rose-800',
      iconEmoji: '🚨'
    },
    {
      id: 2,
      rag: 'amber',
      section: 'Section I: 2.0',
      title: 'Syllabus Progression Deviation (> 1 Week)',
      programme: 'PYP Grade 1 & CIE AS Level',
      description: 'PYP G1 Math (-1 wk, manipulatives reinforcement) & AS Physics/Chem Lab Practicals (-1.5 wks).',
      owner: 'Shruthi & Specialist Faculty',
      deadline: 'Bi-weekly Review',
      recommendedAction: 'Run zero-period Tuesday/Thursday practical catch-up labs and flipped LMS modules.',
      cardBg: 'bg-gradient-to-br from-white via-white to-[#FFFDF0] dark:from-[#162032] dark:via-[#162032] dark:to-amber-950/30',
      cardBorder: 'border-[#FDE68A] dark:border-amber-800/80',
      badgeClass: 'bg-[#FDE68A]/80 dark:bg-amber-950/80 text-[#854D0E] dark:text-amber-300 border-[#FDE68A] dark:border-amber-800',
      iconEmoji: '⚠️'
    },
    {
      id: 3,
      rag: 'amber',
      section: 'Section II: 1.0',
      title: 'Home Reinforcement Non-Submission Repeated (> 1 Time)',
      programme: 'PYP Grades 3 to 5 (20 Learners)',
      description: '20 learners flagged for non-submission/delayed HR tasks for more than once. SLA for teacher correction remains 100% compliant.',
      owner: 'Priyanga Rajan (PYP Coordinator)',
      deadline: 'Immediate Homeroom Follow-up',
      recommendedAction: 'Homeroom teachers contacting parents via ERP portal; student study planners assigned.',
      cardBg: 'bg-gradient-to-br from-white via-white to-[#FFFDF0] dark:from-[#162032] dark:via-[#162032] dark:to-amber-950/30',
      cardBorder: 'border-[#FDE68A] dark:border-amber-800/80',
      badgeClass: 'bg-[#FDE68A]/80 dark:bg-amber-950/80 text-[#854D0E] dark:text-amber-300 border-[#FDE68A] dark:border-amber-800',
      iconEmoji: '📝'
    },
    {
      id: 4,
      rag: 'green',
      section: 'Section V: 3.0',
      title: 'Faculty Attendance & Punctuality Governance',
      programme: 'Whole School (68 Faculty)',
      description: 'Zero unexplained absences recorded across all divisions. 100% of staff leaves officially sanctioned with substitute coverage active.',
      owner: 'Head of Academics & Coordinators',
      deadline: 'Status Verified',
      recommendedAction: 'Maintain current proactive substitution schedule.',
      cardBg: 'bg-gradient-to-br from-white via-white to-[#F0FDF4] dark:from-[#162032] dark:via-[#162032] dark:to-emerald-950/30',
      cardBorder: 'border-[#A7F3D0] dark:border-emerald-800/80',
      badgeClass: 'bg-[#A7F3D0]/80 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800',
      iconEmoji: '✅'
    }
  ];

  const filteredItems = ragItems.filter(item => {
    if (filterRag === 'ALL') return true;
    return item.rag === filterRag;
  });

  return (
    <div className="dashboard-card p-6 mb-8 bg-white/95 dark:bg-[#131D31]/95 border border-slate-200/90 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#FDBAAB] to-[#FDE68A] flex items-center justify-center text-navy shadow-xs font-black">
              🎯
            </div>
            <div>
              <h2 className="text-lg font-black text-navy dark:text-white tracking-tight font-display">
                Executive Action Center & RAG Alerts
              </h2>
              <p className="text-xs text-navy-600 dark:text-slate-400 font-semibold">
                High-priority academic governance decisions requiring HoS / HoA intervention.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-[#FAF8FF] dark:bg-slate-900 p-1 rounded-2.5xl border border-[#C4B5FD]/50 dark:border-slate-800">
          <button
            onClick={() => setFilterRag('ALL')}
            className={`px-3 py-1 rounded-2xl text-xs font-extrabold transition-all pop-btn ${
              filterRag === 'ALL'
                ? 'bg-white dark:bg-slate-800 text-navy dark:text-white shadow-xs border border-purple-200 dark:border-slate-700'
                : 'text-slate-500 dark:text-slate-400 hover:text-navy dark:hover:text-white'
            }`}
          >
            All ({ragItems.length})
          </button>
          <button
            onClick={() => setFilterRag('red')}
            className={`px-2.5 py-1 rounded-2xl text-xs font-extrabold transition-all pop-btn ${
              filterRag === 'red'
                ? 'bg-[#FDBAAB]/80 dark:bg-rose-950/80 text-red-900 dark:text-rose-300 shadow-xs border border-[#FDBAAB] dark:border-rose-800'
                : 'text-red-600 dark:text-rose-400 hover:bg-red-50 dark:hover:bg-slate-800'
            }`}
          >
            Critical
          </button>
          <button
            onClick={() => setFilterRag('amber')}
            className={`px-2.5 py-1 rounded-2xl text-xs font-extrabold transition-all pop-btn ${
              filterRag === 'amber'
                ? 'bg-[#FDE68A]/80 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 shadow-xs border border-[#FDE68A] dark:border-amber-800'
                : 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-slate-800'
            }`}
          >
            Moderate
          </button>
          <button
            onClick={() => setFilterRag('green')}
            className={`px-2.5 py-1 rounded-2xl text-xs font-extrabold transition-all pop-btn ${
              filterRag === 'green'
                ? 'bg-[#A7F3D0]/80 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-300 shadow-xs border border-[#A7F3D0] dark:border-emerald-800'
                : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800'
            }`}
          >
            Verified
          </button>
        </div>
      </div>

      {/* Action Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {filteredItems.map((item) => {
          const isResolved = resolvedIds.includes(item.id);

          return (
            <div
              key={item.id}
              className={`p-5 rounded-3xl border shadow-pastel-sm dark:shadow-none transition-all duration-300 relative ${item.cardBg} ${item.cardBorder} ${
                isResolved ? 'opacity-60 grayscale-[0.2]' : 'hover:-translate-y-1'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.iconEmoji}</span>
                  <div>
                    <span className="text-[10px] font-black uppercase text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-100 dark:border-purple-800">
                      {item.section}
                    </span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ml-1.5 ${item.badgeClass}`}>
                      {item.programme}
                    </span>
                  </div>
                </div>

                {/* Resolve Checkbox */}
                <button
                  onClick={() => toggleResolve(item.id)}
                  title={isResolved ? 'Mark as Open' : 'Mark as Acknowledged'}
                  className={`p-1.5 rounded-xl border transition-all pop-btn ${
                    isResolved 
                      ? 'bg-[#10B981] border-[#10B981] text-white shadow-xs' 
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-navy dark:hover:text-white hover:border-purple-300 dark:hover:border-purple-600'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className={`text-sm font-black text-navy dark:text-white ${isResolved ? 'line-through text-slate-500 dark:text-slate-500' : ''}`}>
                {item.title}
              </h3>
              <p className="text-xs text-navy-700 dark:text-slate-300 font-medium mt-1 leading-relaxed">
                {item.description}
              </p>

              {/* Recommended Action Box */}
              <div className="mt-3 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 text-xs text-navy dark:text-slate-200">
                <span className="font-black text-purple-800 dark:text-purple-300 block text-[10px] uppercase">Intervention Strategy:</span>
                <p className="mt-0.5 text-slate-700 dark:text-slate-300 font-semibold">{item.recommendedAction}</p>
              </div>

              {/* Footer Owner and Deadline */}
              <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  {item.owner}
                </span>
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-extrabold">
                  <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  {item.deadline}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
