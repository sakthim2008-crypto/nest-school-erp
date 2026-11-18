import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  FileSpreadsheet,
  Layers,
  ChevronRight,
  ExternalLink,
  Award
} from 'lucide-react';
import { WeekMIS, WEEKS_DATA, PROGRAMMES } from '../data/schoolData';

interface ReportsSectionProps {
  currentWeek: WeekMIS;
  academicYear: string;
  onOpenExportModal: () => void;
}

export const ReportsSection: React.FC<ReportsSectionProps> = ({
  currentWeek,
  academicYear,
  onOpenExportModal
}) => {
  const auditLogs = [
    {
      timestamp: '13-Nov-2026 09:30 AM',
      coordinator: 'Priyanga Rajan (PYP)',
      action: 'Weekly MIS Week 7 Submitted & Signed Off',
      notes: '11 planners pending evaluation; 20 HR non-submissions flagged.',
      status: 'Verified'
    },
    {
      timestamp: '13-Nov-2026 09:15 AM',
      coordinator: 'Shyamala Rupavahini (CIE IGCSE/AS)',
      action: 'Weekly MIS Week 7 Submitted & Signed Off',
      notes: '10 planners in review; AS Physics practical catch-up scheduled.',
      status: 'Verified'
    },
    {
      timestamp: '13-Nov-2026 08:50 AM',
      coordinator: 'Bhagyashree Ganesh (CIE LS)',
      action: 'Weekly MIS Week 7 Submitted & Signed Off',
      notes: '96.0% attendance recorded; zero delayed evaluations.',
      status: 'Verified'
    },
    {
      timestamp: '13-Nov-2026 08:30 AM',
      coordinator: 'Praseeda Pradeep (EYP)',
      action: 'Weekly MIS Week 7 Submitted & Signed Off',
      notes: 'Reggio Emilia inquiry centers active; 30 learners supported.',
      status: 'Verified'
    },
    {
      timestamp: '13-Nov-2026 08:00 AM',
      coordinator: 'Pooja (Learner Support)',
      action: 'SEN & Pastoral Registry Updated',
      notes: 'Arnav Vinayak parent consultation logged; 100% resolution < 2 days.',
      status: 'Verified'
    }
  ];

  const reportPacks = [
    {
      title: 'Executive Weekly MIS Summary',
      period: `Week ${currentWeek.week_index} (${currentWeek.week_label})`,
      desc: 'Synthesized 8-section telemetry for HoA and HoS review.',
      badge: 'Official MIS',
      badgeClass: 'bg-[#C4B5FD]/70 text-[#5B21B6] border-[#C4B5FD]',
      cardBg: 'bg-gradient-to-br from-white to-[#FAF8FF]',
      cardBorder: 'border-[#C4B5FD]'
    },
    {
      title: 'Curriculum Pacing & Planner Audit',
      period: 'Term 1 Progression',
      desc: 'Syllabus plan vs actual audit, deviations, and catch-up schedules.',
      badge: 'Academic Audit',
      badgeClass: 'bg-[#7DD3FC]/70 text-[#075985] border-[#7DD3FC]',
      cardBg: 'bg-gradient-to-br from-white to-[#F0F9FF]',
      cardBorder: 'border-[#7DD3FC]'
    },
    {
      title: 'Pastoral Care & SEN Term Registry',
      period: 'AY 2026-2027 Confidential',
      desc: 'Remedial cases, mentoring sessions, and parent interventions log.',
      badge: 'Confidential',
      badgeClass: 'bg-[#FDBAAB]/70 text-[#9A3412] border-[#FDBAAB]',
      cardBg: 'bg-gradient-to-br from-white to-[#FFF5F5]',
      cardBorder: 'border-[#FDBAAB]'
    },
    {
      title: 'Faculty Appraisal & Observation Index',
      period: '68 Faculty Appraisals',
      desc: 'Pedagogical scores, classroom strengths, and development rubrics.',
      badge: 'HR / Academic',
      badgeClass: 'bg-[#A7F3D0]/70 text-[#065F46] border-[#A7F3D0]',
      cardBg: 'bg-gradient-to-br from-white to-[#F0FDF4]',
      cardBorder: 'border-[#A7F3D0]'
    }
  ];

  return (
    <div className="space-y-6 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#FDE68A]/35 via-[#7DD3FC]/25 to-[#C4B5FD]/25 p-6 rounded-4xl border border-[#FDE68A]/60 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-amber-700 shadow-sm border border-amber-200 flex items-center justify-center text-xl">
              📜
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                Institutional Reports & Archival Exports (Section IX)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                Generate executive packages, printable compliance audits, and coordinator sign-off records.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenExportModal}
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs flex items-center gap-1.5 shadow-pastel-sm pop-btn"
          >
            <Download className="w-4 h-4" />
            <span>Generate MIS Pack</span>
          </button>
        </div>
      </div>

      {/* Report Packs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reportPacks.map((pack, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-3xl border shadow-pastel-sm flex flex-col justify-between ${pack.cardBg} ${pack.cardBorder}`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${pack.badgeClass}`}>
                  {pack.badge}
                </span>
                <span className="text-xs text-slate-400 font-bold">{pack.period}</span>
              </div>
              <h3 className="text-base font-black text-navy font-display">{pack.title}</h3>
              <p className="text-xs text-navy-700 font-medium mt-1 leading-relaxed">{pack.desc}</p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500">PDF & Excel Ready</span>
              <button
                onClick={onOpenExportModal}
                className="text-xs font-black text-purple-700 hover:text-purple-900 flex items-center gap-1 pop-btn"
              >
                <span>Download Report</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Coordinator Sign-off Audit Log */}
      <div className="dashboard-card p-6 bg-white/95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div>
            <h3 className="text-sm font-black text-navy font-display">
              Coordinator Sign-off Audit Trail (Week 7)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified timestamps of coordinator submission into Central MIS.
            </p>
          </div>
          <span className="text-xs font-black text-[#047857] bg-[#A7F3D0]/60 px-3 py-1 rounded-full border border-[#A7F3D0]">
            5 of 5 Verified
          </span>
        </div>

        <div className="space-y-3">
          {auditLogs.map((log, idx) => (
            <div
              key={idx}
              className="p-4 rounded-3xl border border-slate-200/90 bg-[#FAF8FF] hover:bg-white transition-all shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span className="text-xs font-black text-navy">{log.coordinator}</span>
                  <span className="text-[10px] text-slate-400 font-bold">• {log.timestamp}</span>
                </div>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#A7F3D0]/70 text-[#065F46] border border-[#A7F3D0] self-start sm:self-auto">
                  {log.status}
                </span>
              </div>
              <p className="text-xs text-navy-700 font-medium mt-1 pl-6">
                {log.notes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
