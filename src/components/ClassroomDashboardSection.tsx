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
  Filter, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Compass, 
  FileCheck2, 
  CalendarCheck, 
  UserCheck,
  User,
  Star
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
  Legend, 
  LineChart, 
  Line 
} from 'recharts';
import { 
  WeekMIS, 
  PROGRAMMES, 
  AUTHENTIC_SUBJECT_DEVIATIONS,
  SubjectDeviation 
} from '../data/schoolData';
import { AUTHENTIC_STUDENTS, StudentProfile } from '../data/studentsData';
import { StudentDetailModal } from './StudentDetailModal';
import { ProgressRing } from './ProgressRing';
import { IllustrationBooks, IllustrationPencilStationery } from './EducationalIllustrations';

interface ClassroomDashboardSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const ClassroomDashboardSection: React.FC<ClassroomDashboardSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'planners' | 'pacing' | 'students' | 'pedagogy'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMetrics, setExpandedMetrics] = useState<number[]>([]);
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'Critical' | 'Moderate' | 'Resolved'>('ALL');
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

  const toggleExpand = (row: number) => {
    if (expandedMetrics.includes(row)) {
      setExpandedMetrics(expandedMetrics.filter(r => r !== row));
    } else {
      setExpandedMetrics([...expandedMetrics, row]);
    }
  };

  const handleOpenStudent = (student: StudentProfile) => {
    setSelectedStudent(student);
    setIsStudentModalOpen(true);
  };

  // Section I metrics from current week
  const sectionI = currentWeek.sections.find(s => s.id === 'I');
  const metrics = sectionI?.metrics || [];

  // Planner status data across 4 programmes
  const plannerData = [
    { programme: 'EYP', totalPlanners: 24, completed: 24, pending: 0, coordinator: 'Praseeda Pradeep', color: '#10B981' },
    { programme: 'PYP', totalPlanners: 48, completed: 37, pending: 11, coordinator: 'Priyanga Rajan', color: '#0284C7' },
    { programme: 'CIE LS', totalPlanners: 32, completed: 32, pending: 0, coordinator: 'Bhagyashree Ganesh', color: '#8B5CF6' },
    { programme: 'CIE IGCSE/AS', totalPlanners: 36, completed: 26, pending: 10, coordinator: 'Shyamala Rupavahini', color: '#EF4444' },
  ];

  // Learning Outcomes Achievement Distribution
  const outcomesDistribution = [
    { name: 'Exceeding Expectations (>85%)', value: 58, color: '#10B981' },
    { name: 'Meeting Expectations (70-84%)', value: 36, color: '#0284C7' },
    { name: 'Targeted Remedial Support (<70%)', value: 6, color: '#F59E0B' },
  ];

  // Syllabus deviation multi-week trend
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
    if (statusFilter !== 'ALL' && item.status !== statusFilter) return false;
    return true;
  });

  const filteredMetrics = metrics.filter(m => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      m.description.toLowerCase().includes(q) ||
      m.comments.pyp?.toLowerCase().includes(q) ||
      m.comments.cie_igcse_as?.toLowerCase().includes(q) ||
      m.comments.cie_ls?.toLowerCase().includes(q) ||
      m.comments.eyp?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#C4B5FD]/35 via-[#7DD3FC]/25 to-[#FDBAAB]/30 p-6 rounded-4xl border border-[#C4B5FD]/50 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-purple-700 shadow-sm border border-purple-200 flex items-center justify-center text-xl">
              📚
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                Classroom Dashboard (Section I)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                Curriculum planners, syllabus progression (Plan vs Actual), clarifications, learner support, and pedagogy.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-white text-[#065F46] border border-[#A7F3D0] shadow-2xs flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            0 Classes Below 70% LO Threshold
          </span>
        </div>
      </div>

      {/* Top 4 Section I Core KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1: Planners */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#FFFDF0] border border-[#FDE68A]">
          <div className="flex items-center justify-between text-xs font-black text-amber-800 uppercase tracking-wider mb-1">
            <span>Incomplete Planners</span>
            <BookOpen className="w-4 h-4 text-[#F59E0B]" />
          </div>
          <div className="text-2xl font-black text-navy font-display">
            21 Planners
          </div>
          <p className="text-xs text-amber-700 font-bold mt-1">
            PYP (11) • CIE IGCSE/AS (10)
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-2 pt-2 border-t border-amber-200/50">
            Evaluated with recommendations
          </div>
        </div>

        {/* 2: Syllabus Progression */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#FFF5F5] border border-[#FDBAAB]">
          <div className="flex items-center justify-between text-xs font-black text-red-800 uppercase tracking-wider mb-1">
            <span>Plan vs Actual Deviation</span>
            <TrendingDown className="w-4 h-4 text-red-500" />
          </div>
          <div className="text-2xl font-black text-navy font-display">
            2 Classes (&gt; 1 Wk)
          </div>
          <p className="text-xs text-[#047857] font-bold mt-1">
            Down 83% from 12 classes (Wk 1)
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-2 pt-2 border-t border-red-200/50">
            AS Practicals & G1 Math catch-up
          </div>
        </div>

        {/* 3: Subject Clarifications */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#F0F9FF] border border-[#7DD3FC]">
          <div className="flex items-center justify-between text-xs font-black text-sky-800 uppercase tracking-wider mb-1">
            <span>Subject Clarifications</span>
            <HelpCircle className="w-4 h-4 text-[#0284C7]" />
          </div>
          <div className="text-2xl font-black text-navy font-display">
            30 Learners
          </div>
          <p className="text-xs text-sky-700 font-bold mt-1">
            16 in IGCSE/AS • 8 in EYP
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-2 pt-2 border-t border-sky-200/50">
            Clarifications answered in class
          </div>
        </div>

        {/* 4: Additional Support */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#FAF8FF] border border-[#C4B5FD]">
          <div className="flex items-center justify-between text-xs font-black text-purple-800 uppercase tracking-wider mb-1">
            <span>Additional Support</span>
            <Target className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-navy font-display">
            72 Learners
          </div>
          <p className="text-xs text-purple-700 font-bold mt-1">
            PYP (51) • EYP (30) • IGCSE (12)
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-2 pt-2 border-t border-purple-200/50">
            Differentiated remedial active
          </div>
        </div>
      </div>

      {/* Subtab Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 p-2.5 rounded-3xl border border-[#C4B5FD]/40 shadow-pastel-sm">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all pop-btn ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-pastel-sm'
                : 'text-navy-700 hover:bg-purple-50'
            }`}
          >
            All 7 Classroom Metrics
          </button>
          <button
            onClick={() => setActiveTab('planners')}
            className={`px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all pop-btn ${
              activeTab === 'planners'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-pastel-sm'
                : 'text-navy-700 hover:bg-purple-50'
            }`}
          >
            Planner Evaluation Analytics
          </button>
          <button
            onClick={() => setActiveTab('pacing')}
            className={`px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all pop-btn ${
              activeTab === 'pacing'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-pastel-sm'
                : 'text-navy-700 hover:bg-purple-50'
            }`}
          >
            Syllabus Progression
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all pop-btn ${
              activeTab === 'students'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-pastel-sm'
                : 'text-navy-700 hover:bg-purple-50'
            }`}
          >
            ⭐ Student Roster & Dossiers
          </button>
          <button
            onClick={() => setActiveTab('pedagogy')}
            className={`px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all pop-btn ${
              activeTab === 'pedagogy'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-pastel-sm'
                : 'text-navy-700 hover:bg-purple-50'
            }`}
          >
            Innovative Practices
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-purple-600" />
          <input
            type="text"
            placeholder="Search Section I metrics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-2xl bg-[#FFFDF7] border border-[#C4B5FD]/60 text-xs text-navy placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
        </div>
      </div>

      {/* TAB CONTENT: Student Profiles & Dossiers (Spotlight) */}
      {(activeTab === 'all' || activeTab === 'students') && (
        <div className="dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-black text-navy font-display flex items-center gap-2">
                <span>Featured Student Academic Profiles</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">Interactive Dossier</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Click any learner card to open their comprehensive academic, attendance, and competency dossier.
              </p>
            </div>
            <span className="text-xs font-black text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              {AUTHENTIC_STUDENTS.length} Cohort Samples
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUTHENTIC_STUDENTS.map((st) => (
              <div
                key={st.id}
                onClick={() => handleOpenStudent(st)}
                className="p-4 rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-[#FAF8FF] hover:border-[#C4B5FD] shadow-pastel-sm hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={st.avatar}
                    alt={st.fullName}
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' fill='%23C4B5FD'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='%2326334D'>${encodeURIComponent(st.fullName.charAt(0))}</text></svg>`;
                    }}
                    className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-2xs group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-sm font-black text-navy group-hover:text-purple-700 transition-colors">
                      {st.fullName}
                    </h4>
                    <span className="text-[11px] font-bold text-slate-500 block">
                      {st.classAndSection} • #{st.rollNumber}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center my-3">
                  <div className="p-2 rounded-2xl bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold block">Score</span>
                    <span className="text-sm font-black text-navy font-display">{st.overallPercentage}%</span>
                  </div>
                  <div className="p-2 rounded-2xl bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold block">Attendance</span>
                    <span className="text-sm font-black text-[#047857] font-display">{st.overallAttendancePercentage}%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-lg">
                    {st.house} House
                  </span>
                  <span className="text-xs font-black text-purple-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: Planners & Learning Outcomes */}
      {(activeTab === 'all' || activeTab === 'planners') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Planner Status Chart (7 cols) */}
          <div className="lg:col-span-7 dashboard-card p-6 bg-white/95">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-black text-navy tracking-tight font-display">
                  Curriculum Planner Submissions & Completion
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Completed vs Pending Evaluated Planners across 4 programmes.
                </p>
              </div>
              <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-[#A7F3D0]/70 text-[#065F46] border border-[#A7F3D0]">
                EYP & CIE LS 100% Complete
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={plannerData} margin={{ top: 15, right: 20, left: -10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="programme" tick={{ fill: '#475569', fontSize: 12, fontWeight: 700 }} />
                  <YAxis tick={{ fill: '#64748B', fontSize: 11 }} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="bg-white p-3 rounded-2xl shadow-xl border border-purple-200 text-xs text-navy">
                            <div className="font-black text-navy">{d.programme} Planners</div>
                            <div className="text-slate-500 mt-1">Total Planners: {d.totalPlanners}</div>
                            <div className="text-[#047857] font-black">Completed: {d.completed}</div>
                            <div className="text-amber-600 font-black">Pending Review: {d.pending}</div>
                            <div className="text-slate-400 text-[10px] mt-1">Lead: {d.coordinator}</div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="completed" name="Completed" fill="#10B981" radius={[8, 8, 0, 0]} barSize={28} />
                  <Bar dataKey="pending" name="Pending Evaluated" fill="#F59E0B" radius={[8, 8, 0, 0]} barSize={28} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold">Whole School: 119 Completed / 21 Pending</span>
              <span className="text-purple-700 font-black">Completion Rate: 85.0%</span>
            </div>
          </div>

          {/* Learning Outcomes Donut Chart (5 cols) */}
          <div className="lg:col-span-5 dashboard-card p-6 bg-white/95">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-black text-navy tracking-tight font-display">
                  Learning Outcomes Achievement (FAs)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Classes benchmarked through formative assessments.
                </p>
              </div>
              <Target className="w-4 h-4 text-emerald-500" />
            </div>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={outcomesDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {outcomesDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="bg-white p-2.5 rounded-2xl shadow-lg border border-purple-200 text-xs">
                            <span className="font-black text-navy">{d.name}</span>
                            <div className="font-black text-purple-700 text-sm mt-1">{d.value}% of Cohorts</div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-1.5 mt-2">
              {outcomesDistribution.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-navy-700 font-semibold">{item.name}</span>
                  </div>
                  <span className="font-black text-navy">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: Syllabus Progression (Plan vs Actual) */}
      {(activeTab === 'all' || activeTab === 'pacing') && (
        <div className="dashboard-card p-6 bg-white/95">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <h3 className="text-base font-black text-navy tracking-tight font-display">
                  Syllabus Progression: Plan vs Actual Pacing Breakdown
                </h3>
              </div>
              <p className="text-xs text-navy-600 font-semibold mt-1">
                Authentic subject-wise deviations, faculty owners, verified delay reasons, and catch-up plans.
              </p>
            </div>

            {/* Filter by status */}
            <div className="flex items-center gap-1.5 bg-[#FAF8FF] p-1 rounded-2.5xl border border-[#C4B5FD]/50">
              <button
                onClick={() => setStatusFilter('ALL')}
                className={`px-3 py-1 rounded-2xl text-xs font-black pop-btn ${
                  statusFilter === 'ALL' ? 'bg-white text-navy shadow-xs border border-purple-200' : 'text-slate-500'
                }`}
              >
                All ({AUTHENTIC_SUBJECT_DEVIATIONS.length})
              </button>
              <button
                onClick={() => setStatusFilter('Critical')}
                className={`px-2.5 py-1 rounded-2xl text-xs font-black pop-btn ${
                  statusFilter === 'Critical' ? 'bg-[#FDBAAB]/80 text-red-900 border border-[#FDBAAB]' : 'text-red-600 hover:bg-red-50'
                }`}
              >
                Critical
              </button>
              <button
                onClick={() => setStatusFilter('Moderate')}
                className={`px-2.5 py-1 rounded-2xl text-xs font-black pop-btn ${
                  statusFilter === 'Moderate' ? 'bg-[#FDE68A]/80 text-amber-900 border border-[#FDE68A]' : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                Moderate
              </button>
              <button
                onClick={() => setStatusFilter('Resolved')}
                className={`px-2.5 py-1 rounded-2xl text-xs font-black pop-btn ${
                  statusFilter === 'Resolved' ? 'bg-[#A7F3D0]/80 text-emerald-900 border border-[#A7F3D0]' : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                Resolved
              </button>
            </div>
          </div>

          {/* Deviation Trend Chart */}
          <div className="my-5 p-4 rounded-3xl bg-[#FAF8FF] border border-[#C4B5FD]/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-navy">7-Week Syllabus Deviation Trajectory</span>
              <span className="text-xs font-black text-[#047857]">83% Reduction (12 → 2)</span>
            </div>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={deviationTrend} margin={{ top: 10, right: 20, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="week" tick={{ fill: '#64748B', fontSize: 10 }} />
                  <YAxis tick={{ fill: '#64748B', fontSize: 10 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="Total" stroke="#EF4444" strokeWidth={3} dot={{ r: 4, fill: '#EF4444' }} name="Total Deviations" />
                  <Line type="monotone" dataKey="CIE_IGCSE_AS" stroke="#8B5CF6" strokeWidth={2} dot={false} name="IGCSE/AS" />
                  <Line type="monotone" dataKey="PYP" stroke="#0284C7" strokeWidth={2} dot={false} name="PYP" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Subject Deviations Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDeviations.map((dev, idx) => (
              <div
                key={idx}
                className="p-4 rounded-3xl border border-slate-200/90 bg-white hover:border-[#C4B5FD] transition-all shadow-pastel-sm relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-100">
                    {dev.programme.replace('_', ' ')}
                  </span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                    dev.status === 'Critical' ? 'bg-[#FDBAAB]/80 text-red-900 border-[#FDBAAB]' :
                    dev.status === 'Moderate' ? 'bg-[#FDE68A]/80 text-amber-900 border-[#FDE68A]' :
                    'bg-[#A7F3D0]/80 text-emerald-900 border-[#A7F3D0]'
                  }`}>
                    {dev.status} (+{dev.deviationWeeks} wks)
                  </span>
                </div>

                <h4 className="text-sm font-black text-navy font-display">
                  {dev.subject}
                </h4>
                <div className="text-xs text-slate-500 font-bold mt-0.5">
                  {dev.grade} • Faculty: {dev.teacher}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 text-xs">
                  <div className="text-navy-700">
                    <span className="font-black text-navy">Reason: </span>
                    {dev.reason}
                  </div>
                  <div className="mt-2 text-purple-900 bg-[#FAF8FF] p-2.5 rounded-2xl border border-purple-100 font-bold text-[11px]">
                    <span className="font-black text-purple-900">Catch-up Plan: </span>
                    {dev.catchUpPlan}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: Pedagogy & Real-World Application */}
      {(activeTab === 'all' || activeTab === 'pedagogy') && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="dashboard-card p-6 bg-white/95">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="text-sm font-black text-navy font-display">
                Innovative Teaching Practices (Section I: Metric 6)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-4 font-semibold">
              Pedagogical strategies, learning tools, and assessment innovation logged across divisions.
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2.5xl bg-gradient-to-r from-white to-[#FAF8FF] border border-[#C4B5FD]/70">
                <div className="flex items-center justify-between text-xs font-black text-purple-900">
                  <span>CIE IGCSE / AS Level</span>
                  <span className="px-2 py-0.5 rounded-lg bg-purple-100 text-purple-800">19 Classes</span>
                </div>
                <p className="text-xs text-navy-700 font-medium mt-1">
                  Past-paper calibration rubrics, digital mark schemes, and flipped classroom LMS modules for complex science units.
                </p>
              </div>

              <div className="p-3.5 rounded-2.5xl bg-gradient-to-r from-white to-[#F0FDF4] border border-[#A7F3D0]/70">
                <div className="flex items-center justify-between text-xs font-black text-[#065F46]">
                  <span>Cambridge Lower Secondary</span>
                  <span className="px-2 py-0.5 rounded-lg bg-[#A7F3D0]/70 text-[#065F46]">3 Classes</span>
                </div>
                <p className="text-xs text-navy-700 font-medium mt-1">
                  Science lab student-led inquiry stations and interactive grammar vocabulary circles in second languages.
                </p>
              </div>

              <div className="p-3.5 rounded-2.5xl bg-gradient-to-r from-white to-[#F0F9FF] border border-[#7DD3FC]/70">
                <div className="flex items-center justify-between text-xs font-black text-sky-900">
                  <span>Early Years (EYP)</span>
                  <span className="px-2 py-0.5 rounded-lg bg-[#7DD3FC]/70 text-[#075985]">Active</span>
                </div>
                <p className="text-xs text-navy-700 font-medium mt-1">
                  Reggio Emilia exploratory centers, tactile math manipulatives, and structured sensory routines.
                </p>
              </div>
            </div>
          </div>

          <div className="dashboard-card p-6 bg-white/95">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-sky-600" />
              <h3 className="text-sm font-black text-navy font-display">
                Real-World Connections (Section I: Metric 7)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-4 font-semibold">
              Authentic applications, guest masterclasses, and global citizenship contexts.
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2.5xl bg-gradient-to-r from-white to-[#FFFDF0] border border-[#FDE68A]/70">
                <div className="flex items-center justify-between text-xs font-black text-amber-900">
                  <span>Primary Years (PYP)</span>
                  <span className="px-2 py-0.5 rounded-lg bg-amber-100 text-amber-800">4 Classes</span>
                </div>
                <p className="text-xs text-navy-700 font-medium mt-1">
                  UOI field research in Chennai coastal wetlands biodiversity & sustainable urban architecture prototypes.
                </p>
              </div>

              <div className="p-3.5 rounded-2.5xl bg-gradient-to-r from-white to-[#FFF5F5] border border-[#FDBAAB]/70">
                <div className="flex items-center justify-between text-xs font-black text-red-900">
                  <span>Secondary Business & Economics</span>
                  <span className="px-2 py-0.5 rounded-lg bg-red-100 text-red-800">3 Masterclasses</span>
                </div>
                <p className="text-xs text-navy-700 font-medium mt-1">
                  Fintech case study workshops on emerging payment rails & simulated equity market portfolio balancing.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expandable Notes for Section I Metrics */}
      <div className="dashboard-card p-6 bg-white/95">
        <h3 className="text-base font-black text-navy mb-4 font-display">
          Section I Authentic Weekly Coordinator Notes & Metrics
        </h3>
        <div className="space-y-2.5">
          {filteredMetrics.map((m) => {
            const isExpanded = expandedMetrics.includes(m.row);
            const hasComments = m.comments.eyp || m.comments.pyp || m.comments.cie_ls || m.comments.cie_igcse_as || m.comments.general;

            return (
              <div
                key={m.row}
                className="p-4 rounded-3xl border border-slate-200/90 bg-white hover:bg-[#FAF8FF] transition-all shadow-2xs"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {m.s_no}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-navy leading-snug">
                        {m.description}
                      </h4>
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

                  {hasComments && (
                    <button
                      onClick={() => toggleExpand(m.row)}
                      className="self-end md:self-center flex items-center gap-1 text-xs font-black text-purple-700 hover:text-purple-900 transition-colors p-1"
                    >
                      <span>{isExpanded ? 'Hide Notes' : 'View Notes'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  )}
                </div>

                {isExpanded && hasComments && (
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs bg-[#FAF8FF] p-3.5 rounded-2xl space-y-2 text-navy">
                    {m.comments.eyp && (
                      <div>
                        <span className="font-black text-[#047857]">EYP Note: </span>
                        <span className="text-navy-700 whitespace-pre-line font-medium">{m.comments.eyp}</span>
                      </div>
                    )}
                    {m.comments.pyp && (
                      <div>
                        <span className="font-black text-[#0284C7]">PYP Note: </span>
                        <span className="text-navy-700 whitespace-pre-line font-medium">{m.comments.pyp}</span>
                      </div>
                    )}
                    {m.comments.cie_ls && (
                      <div>
                        <span className="font-black text-[#6D28D9]">CIE LS Note: </span>
                        <span className="text-navy-700 whitespace-pre-line font-medium">{m.comments.cie_ls}</span>
                      </div>
                    )}
                    {m.comments.cie_igcse_as && (
                      <div>
                        <span className="font-black text-red-700">CIE IGCSE/AS Note: </span>
                        <span className="text-navy-700 whitespace-pre-line font-medium">{m.comments.cie_igcse_as}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Student Dossier Detail Modal */}
      <StudentDetailModal
        student={selectedStudent}
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
      />
    </div>
  );
};
