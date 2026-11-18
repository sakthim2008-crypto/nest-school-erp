import React, { useState } from 'react';
import { 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ArrowRight,
  TrendingDown,
  Filter,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { 
  WeekMIS, 
  AUTHENTIC_SUBJECT_DEVIATIONS, 
  PROGRAMMES 
} from '../data/schoolData';

interface SyllabusSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const SyllabusSection: React.FC<SyllabusSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('ALL');

  // Multi-week deviation history from authentic data
  const deviationTrend = [
    { week: '21-26 Sep', EYP: 1, PYP: 1, CIE_LS: 2, CIE_IGCSE_AS: 8, Total: 12 },
    { week: '28 Sep-1 Oct', EYP: 0, PYP: 2, CIE_LS: 2, CIE_IGCSE_AS: 4, Total: 8 },
    { week: '5-10 Oct', EYP: 0, PYP: 2, CIE_LS: 2, CIE_IGCSE_AS: 3, Total: 7 },
    { week: '12-22 Oct', EYP: 3, PYP: 2, CIE_LS: 2, CIE_IGCSE_AS: 2, Total: 9 },
    { week: '26-30 Oct', EYP: 3, PYP: 1, CIE_LS: 2, CIE_IGCSE_AS: 2, Total: 8 },
    { week: '3-6 Nov', EYP: 0, PYP: 1, CIE_LS: 2, CIE_IGCSE_AS: 2, Total: 5 },
    { week: '10-13 Nov', EYP: 0, PYP: 1, CIE_LS: 0, CIE_IGCSE_AS: 1, Total: 2 },
  ];

  const filteredDeviations = AUTHENTIC_SUBJECT_DEVIATIONS.filter(item => {
    if (selectedProgramme !== 'ALL' && item.programme !== selectedProgramme) return false;
    if (filterStatus !== 'ALL' && item.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className="space-y-6 mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-navy-950">Syllabus Progression & Curriculum Planners</h2>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Plan vs. actual curriculum pacing, planner evaluation status, and catch-up schedules.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <TrendingDown className="w-3.5 h-3.5" />
            Deviations down 83% (12 → 2)
          </span>
        </div>
      </div>

      {/* Top 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="dashboard-card p-5 border-l-4 border-l-amber-500">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span>Large Deviations (&gt; 1 Week)</span>
            <AlertCircle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-extrabold text-navy-950">2 Classes</div>
          <p className="text-xs text-slate-500 mt-1">
            PYP Grade 1 Math (+1 wk) & AS Practical Labs (+1.5 wks).
          </p>
        </div>

        <div className="dashboard-card p-5 border-l-4 border-l-rose-500">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span>Incomplete Planners</span>
            <Clock className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-3xl font-extrabold text-navy-950">21 Planners</div>
          <p className="text-xs text-slate-500 mt-1">
            11 in PYP & 10 in IGCSE/AS pending coordinator review.
          </p>
        </div>

        <div className="dashboard-card p-5 border-l-4 border-l-teal-500">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span>Innovative Pedagogy Evidence</span>
            <Sparkles className="w-4 h-4 text-teal-500" />
          </div>
          <div className="text-3xl font-extrabold text-navy-950">International</div>
          <p className="text-xs text-slate-500 mt-1">
            Joint inquiry projects with partner schools in Oman & Dhaka.
          </p>
        </div>
      </div>

      {/* Chart: 7-Week Deviation Trajectory */}
      <div className="dashboard-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold text-navy-950">
              Syllabus Deviation Trajectory (Weeks 1 to 7)
            </h3>
            <p className="text-xs text-slate-500">
              Weekly count of classes with &gt; 1 week deviation across divisions.
            </p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Source: Section I Metric 2.0
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={deviationTrend} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="week" tick={{ fill: '#64748b', fontSize: 11 }} />
              <YAxis domain={[0, 14]} tick={{ fill: '#64748b', fontSize: 11 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0a192f', borderColor: '#1e3a8a', borderRadius: '12px', color: '#fff', fontSize: '12px' }} 
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Line type="monotone" dataKey="Total" stroke="#0f172a" strokeWidth={3} dot={{ r: 4 }} name="Whole School Total" />
              <Line type="monotone" dataKey="CIE_IGCSE_AS" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} name="CIE IGCSE/AS" />
              <Line type="monotone" dataKey="PYP" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} name="PYP" />
              <Line type="monotone" dataKey="CIE_LS" stroke="#0284c7" strokeWidth={2} dot={{ r: 3 }} name="CIE Lower Sec" />
              <Line type="monotone" dataKey="EYP" stroke="#0d9488" strokeWidth={2} dot={{ r: 3 }} name="EYP" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Subject Deviation & Catch-Up Plan Table */}
      <div className="dashboard-card overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-navy-950 text-base">
              Subject Deviations & Formal Catch-Up Plans
            </h3>
            <p className="text-xs text-slate-500">
              Subject-level tracking extracted from coordinator reviews.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Status:
            </span>
            {['ALL', 'Critical', 'Moderate', 'Resolved'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  filterStatus === st
                    ? 'bg-navy-900 text-white font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/80 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-4">Programme & Grade</th>
                <th className="py-3 px-4">Subject & Faculty</th>
                <th className="py-3 px-4">Deviation</th>
                <th className="py-3 px-4">Root Cause</th>
                <th className="py-3 px-4">Approved Catch-Up Strategy</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDeviations.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-bold text-navy-950 block">{item.programme}</span>
                    <span className="text-[11px] text-slate-500">{item.grade}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-slate-800 block">{item.subject}</span>
                    <span className="text-[11px] text-teal-700">{item.teacher}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded-full font-bold text-xs bg-amber-50 text-amber-700 border border-amber-200">
                      +{item.deviationWeeks} wks
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 max-w-xs leading-relaxed">
                    {item.reason}
                  </td>
                  <td className="py-3 px-4 text-slate-700 max-w-sm leading-relaxed font-medium">
                    {item.catchUpPlan}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      item.status === 'Critical' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                      item.status === 'Moderate' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {item.status}
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
