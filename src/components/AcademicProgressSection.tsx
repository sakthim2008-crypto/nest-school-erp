import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Globe, 
  Target, 
  Award, 
  ArrowUpRight,
  TrendingDown,
  Layers,
  Search,
  Filter
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell, 
  PieChart, 
  Pie, 
  Legend 
} from 'recharts';
import { WeekMIS, PROGRAMMES } from '../data/schoolData';
import { ProgressRing } from './ProgressRing';

interface AcademicProgressSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const AcademicProgressSection: React.FC<AcademicProgressSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Planner status data across 4 programmes
  const plannerData = [
    { programme: 'EYP', totalPlanners: 24, completed: 24, pending: 0, coordinator: 'Praseeda Pradeep', color: '#16B8A6' },
    { programme: 'PYP', totalPlanners: 48, completed: 37, pending: 11, coordinator: 'Priyanga Rajan', color: '#3457D5' },
    { programme: 'CIE LS', totalPlanners: 32, completed: 32, pending: 0, coordinator: 'Bhagyashree Ganesh', color: '#0284C7' },
    { programme: 'CIE IGCSE/AS', totalPlanners: 36, completed: 26, pending: 10, coordinator: 'Shyamala Rupavahini', color: '#6366F1' },
  ];

  // Learning Outcomes Achievement Distribution (Donut Chart)
  const outcomesDistribution = [
    { name: 'Exceeding Expectations (>85%)', value: 58, color: '#16B8A6' },
    { name: 'Meeting Expectations (70-84%)', value: 36, color: '#3457D5' },
    { name: 'Targeted Remedial Support (<70%)', value: 6, color: '#F0A83B' },
  ];

  // Section I metrics from current week
  const sectionI = currentWeek.sections.find(s => s.id === 'I');
  const metrics = sectionI?.metrics || [];

  const filteredMetrics = metrics.filter(m => 
    m.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 mb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-saas-card">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-royal-50 text-royal">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-midnight">Academic Performance & Curriculum Progress</h2>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Curriculum planners, learning outcome benchmarks, innovative pedagogy, and transferable skills.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-aqua-50 text-aqua-900 border border-aqua-100 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-aqua" />
            0 Classes Below 70% LO Threshold
          </span>
        </div>
      </div>

      {/* Top 3 High-Impact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card p-6 border-l-4 border-l-aqua">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span>Learning Outcome Achievement</span>
            <Target className="w-4 h-4 text-aqua" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-midnight">94.0%</span>
            <span className="text-xs font-bold text-emerald-600">+1.2% this term</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Zero classes below 70% in Formative Assessment learning outcomes.
          </p>
        </div>

        <div className="dashboard-card p-6 border-l-4 border-l-royal">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span>Curriculum Planners Evaluated</span>
            <Award className="w-4 h-4 text-royal" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-midnight">119 of 140</span>
            <span className="text-xs font-bold text-amber-600">21 Pending Review</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            EYP and CIE Lower Secondary achieved 100% planner completion.
          </p>
        </div>

        <div className="dashboard-card p-6 border-l-4 border-l-gold">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            <span>Global Pedagogical Exchange</span>
            <Globe className="w-4 h-4 text-gold" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-midnight">Active</span>
            <span className="text-xs font-bold text-gold-900">Oman & Dhaka</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Active joint inquiry units with Cambridge/IB schools in Oman and Dhaka.
          </p>
        </div>
      </div>

      {/* Two Grid Charts: Planners Bar Chart & Learning Outcomes Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Planners Bar Chart */}
        <div className="lg:col-span-7 dashboard-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-midnight">Curriculum Planners Completion by Programme</h3>
              <p className="text-xs text-slate-500">Completed vs Pending Recommendations (Week 7 MIS Review)</p>
            </div>
            <span className="text-xs font-bold text-royal bg-royal-50 px-2.5 py-1 rounded-lg border border-royal-100">
              Target: 100%
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={plannerData} margin={{ top: 10, right: 20, left: -10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="programme" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} />
                <YAxis domain={[0, 55]} tick={{ fill: '#64748B', fontSize: 11 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111C35', borderColor: '#253966', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="completed" name="Completed Planners" fill="#16B8A6" radius={[6, 6, 0, 0]} barSize={28} />
                <Bar dataKey="pending" name="Pending Review" fill="#F0A83B" radius={[6, 6, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Learning Outcomes Donut Chart */}
        <div className="lg:col-span-5 dashboard-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-midnight">Learning Outcomes Distribution</h3>
              <span className="text-[10px] font-bold text-aqua bg-aqua-50 px-2 py-0.5 rounded border border-aqua-100">
                FA Calibrated
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Formative assessment outcomes across all cohorts.
            </p>

            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={outcomesDistribution}
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {outcomesDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111C35', borderColor: '#253966', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                    formatter={(val: any) => [`${val}% of Classes`]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs">
            {outcomesDistribution.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-600 text-[11px] truncate">{item.name}</span>
                </div>
                <span className="font-bold text-midnight">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section I Official Metrics Table */}
      <div className="dashboard-card overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-midnight text-base">
              Section I: Classroom Dashboard — Official Weekly MIS Records
            </h3>
            <p className="text-xs text-slate-500">
              Seven core indicators verified by Coordinators for HoS review.
            </p>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter section metrics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/30"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-cloud-100 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-3 px-4">S.No</th>
                <th className="py-3 px-4">Metric Description</th>
                <th className="py-3 px-4 text-center">EYP</th>
                <th className="py-3 px-4 text-center">PYP</th>
                <th className="py-3 px-4 text-center">CIE LS</th>
                <th className="py-3 px-4 text-center">CIE IGCSE/AS</th>
                <th className="py-3 px-4">Coordinator Review Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredMetrics.map((m) => (
                <tr key={m.row} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-400">{m.s_no}</td>
                  <td className="py-3 px-4 font-semibold text-midnight max-w-sm">
                    {m.description}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-slate-700">{m.eyp ?? '-'}</td>
                  <td className="py-3 px-4 text-center font-bold text-royal">{m.pyp ?? '-'}</td>
                  <td className="py-3 px-4 text-center font-bold text-sky-700">{m.cie_ls ?? '-'}</td>
                  <td className="py-3 px-4 text-center font-bold text-indigo-700">{m.cie_igcse_as ?? '-'}</td>
                  <td className="py-3 px-4 text-slate-500 max-w-xs leading-relaxed text-[11px]">
                    {m.comments.pyp || m.comments.cie_igcse_as || m.comments.cie_ls || m.comments.eyp || 'Optimal adherence recorded.'}
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
