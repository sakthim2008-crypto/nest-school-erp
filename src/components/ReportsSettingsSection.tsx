import React, { useState } from 'react';
import { 
  Settings, 
  FileSpreadsheet, 
  Download, 
  Printer, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Calendar,
  Layers,
  Sparkles,
  Save,
  Check
} from 'lucide-react';
import { WeekMIS, WEEKS_DATA, PROGRAMMES } from '../data/schoolData';

interface ReportsSettingsSectionProps {
  currentWeek: WeekMIS;
  academicYear: string;
  onOpenExportModal: () => void;
}

export const ReportsSettingsSection: React.FC<ReportsSettingsSectionProps> = ({
  currentWeek,
  academicYear,
  onOpenExportModal
}) => {
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [attendanceTarget, setAttendanceTarget] = useState('90');
  const [markingSla, setMarkingSla] = useState('7');
  const [incidentSla, setIncidentSla] = useState('48');
  const [observationFloor, setObservationFloor] = useState('60');

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

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

  return (
    <div className="space-y-6 mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-saas-card">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-royal-50 text-royal">
              <Settings className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-midnight">Institutional Reports & Governance Settings</h2>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Threshold parameters, export utilities, and Monday MIS coordinator audit logs.
          </p>
        </div>

        <button
          onClick={onOpenExportModal}
          className="flex items-center gap-2 bg-gradient-to-r from-aqua to-teal-500 text-midnight font-bold text-xs px-4 py-2.5 rounded-xl shadow-glow-aqua transition-all transform active:scale-95"
        >
          <Download className="w-4 h-4 text-midnight" />
          <span>Launch Export Center</span>
        </button>
      </div>

      {/* Two Column Grid: System Parameters & Export Center */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Quality Floor & SLA Configuration */}
        <div className="lg:col-span-7 dashboard-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-midnight">Institutional SLA & Threshold Standards</h3>
              <p className="text-xs text-slate-500">Operational standards evaluated across coordinators.</p>
            </div>
            <span className="text-xs font-bold text-royal bg-royal-50 px-2.5 py-1 rounded-lg">
              AY {academicYear}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-cloud-100 rounded-xl border border-slate-200/80">
              <label className="text-xs font-bold text-midnight block mb-1">
                Student Attendance Target (%)
              </label>
              <p className="text-[11px] text-slate-500 mb-2">Triggers amber alert below this floor.</p>
              <input
                type="number"
                value={attendanceTarget}
                onChange={(e) => setAttendanceTarget(e.target.value)}
                className="w-full px-3 py-1.5 text-xs font-bold bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal/30"
              />
            </div>

            <div className="p-4 bg-cloud-100 rounded-xl border border-slate-200/80">
              <label className="text-xs font-bold text-midnight block mb-1">
                Marking Feedback SLA (Days)
              </label>
              <p className="text-[11px] text-slate-500 mb-2">Maximum correction turnaround allowance.</p>
              <input
                type="number"
                value={markingSla}
                onChange={(e) => setMarkingSla(e.target.value)}
                className="w-full px-3 py-1.5 text-xs font-bold bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal/30"
              />
            </div>

            <div className="p-4 bg-cloud-100 rounded-xl border border-slate-200/80">
              <label className="text-xs font-bold text-midnight block mb-1">
                Pastoral Incident SLA (Hours)
              </label>
              <p className="text-[11px] text-slate-500 mb-2">Target resolution window for urgent cases.</p>
              <input
                type="number"
                value={incidentSla}
                onChange={(e) => setIncidentSla(e.target.value)}
                className="w-full px-3 py-1.5 text-xs font-bold bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal/30"
              />
            </div>

            <div className="p-4 bg-cloud-100 rounded-xl border border-slate-200/80">
              <label className="text-xs font-bold text-midnight block mb-1">
                Observation Passing Score (%)
              </label>
              <p className="text-[11px] text-slate-500 mb-2">Institutional passing appraisal floor.</p>
              <input
                type="number"
                value={observationFloor}
                onChange={(e) => setObservationFloor(e.target.value)}
                className="w-full px-3 py-1.5 text-xs font-bold bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal/30"
              />
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Approved: HoS & Academic Council
            </span>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-royal text-white hover:bg-royal-700 transition-colors flex items-center gap-1.5"
            >
              {savedSuccess ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
              <span>{savedSuccess ? 'Settings Saved!' : 'Save Parameters'}</span>
            </button>
          </div>
        </div>

        {/* Quick Export Cards */}
        <div className="lg:col-span-5 dashboard-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-midnight">Institutional Reporting Suite</h3>
                <p className="text-xs text-slate-500">Generate executive MIS summaries for leadership.</p>
              </div>
              <span className="text-xs font-bold text-aqua bg-aqua-50 px-2.5 py-1 rounded-lg">
                Ready
              </span>
            </div>

            <div className="space-y-3">
              <div 
                onClick={onOpenExportModal}
                className="p-3.5 bg-cloud-100 hover:bg-royal-50/50 rounded-xl border border-slate-200/80 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-royal text-white">
                    <Printer className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-midnight block">Executive Board PDF</span>
                    <span className="text-[11px] text-slate-500">Synthesized 7-week board report</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-royal group-hover:underline">Export →</span>
              </div>

              <div 
                onClick={onOpenExportModal}
                className="p-3.5 bg-cloud-100 hover:bg-aqua-50/50 rounded-xl border border-slate-200/80 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-aqua text-midnight font-bold">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-midnight block">Raw Coordinator CSV Dataset</span>
                    <span className="text-[11px] text-slate-500">Full multi-week workbook export</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-teal-700 group-hover:underline">Export →</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
            Source Data: Weekly MIS by Coordinators for review by HoA and HoS on Monday.
          </div>
        </div>

      </div>

      {/* Coordinator Sign-off Audit Trail Table */}
      <div className="dashboard-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-midnight">Coordinator Submission & Sign-Off Audit Trail</h3>
            <p className="text-xs text-slate-500">Timestamped Monday submissions verified by the Head of Academics.</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            100% Submissions Verified
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-cloud-100 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-4">Submission Timestamp</th>
                <th className="py-3 px-4">Coordinator & Wing</th>
                <th className="py-3 px-4">Governance Action</th>
                <th className="py-3 px-4">Submission Notes</th>
                <th className="py-3 px-4 text-center">Audit Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {auditLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-bold text-midnight flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {log.timestamp}
                  </td>
                  <td className="py-3 px-4 text-royal font-semibold">{log.coordinator}</td>
                  <td className="py-3 px-4 text-slate-800">{log.action}</td>
                  <td className="py-3 px-4 text-slate-500 max-w-sm text-[11px]">{log.notes}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
