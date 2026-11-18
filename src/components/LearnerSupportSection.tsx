import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Search, 
  Filter, 
  ShieldCheck, 
  UserCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Users,
  MessageSquare,
  Lock,
  Heart,
  Sparkles,
  Eye,
  FileText,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  User
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { 
  AUTHENTIC_SUPPORT_CASES, 
  SupportCase, 
  WeekMIS, 
  PROGRAMMES 
} from '../data/schoolData';
import { AUTHENTIC_STUDENTS, StudentProfile } from '../data/studentsData';
import { StudentDetailModal } from './StudentDetailModal';
import { ProgressRing } from './ProgressRing';

interface LearnerSupportSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const LearnerSupportSection: React.FC<LearnerSupportSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [showConfidentialDetails, setShowConfidentialDetails] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

  // Support category breakdown for Horizontal Bar Chart
  const supportCategoriesData = [
    { category: 'Academic Remedial Support', count: 38, color: '#8B5CF6' },
    { category: 'Foundational Phonics & Math (EYP)', count: 30, color: '#10B981' },
    { category: 'Examination Preparation (SA1)', count: 18, color: '#F59E0B' },
    { category: 'Peer Relations & Conduct', count: 4, color: '#EF4444' },
    { category: 'Special Educational Needs (SEN)', count: 2, color: '#EC4899' },
  ];

  const filteredCases = AUTHENTIC_SUPPORT_CASES.filter(c => {
    if (selectedProgramme !== 'ALL' && c.programme !== selectedProgramme) return false;
    if (statusFilter !== 'ALL' && c.status !== statusFilter) return false;
    if (categoryFilter !== 'ALL' && c.category !== categoryFilter) return false;
    if (searchFilter) {
      const q = searchFilter.toLowerCase();
      return (
        c.studentName.toLowerCase().includes(q) ||
        c.grade.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.actionTaken.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const sectionVI = currentWeek.sections.find(s => s.id === 'VI');
  const metrics = sectionVI?.metrics || [];

  const handleOpenStudentCase = (studentName: string) => {
    const found = AUTHENTIC_STUDENTS.find(s => s.fullName.toLowerCase().includes(studentName.toLowerCase()) || studentName.toLowerCase().includes(s.firstName.toLowerCase()));
    if (found) {
      setSelectedStudent(found);
      setIsStudentModalOpen(true);
    } else {
      setSelectedStudent(AUTHENTIC_STUDENTS[0]);
      setIsStudentModalOpen(true);
    }
  };

  return (
    <div className="space-y-6 mb-8">
      {/* Calm, Supportive Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#C4B5FD]/35 via-[#FDBAAB]/25 to-[#7DD3FC]/25 p-6 rounded-4xl border border-[#C4B5FD]/50 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-purple-700 shadow-sm border border-purple-200 flex items-center justify-center text-xl">
              💖
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                SEN / Counselling / Mentoring (Section VI)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                Lead: Pooja (Learner Support) • Holistic emotional, cognitive, behavioural, and remedial guidance.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-white text-[#065F46] border border-[#A7F3D0] shadow-2xs flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            100% Cases Resolved Within 2 Days SLA
          </span>
        </div>
      </div>

      {/* Confidentiality Notice */}
      <div className="bg-[#FAF8FF] border border-[#C4B5FD]/70 p-3.5 rounded-3xl flex items-center justify-between text-xs text-purple-900 shadow-2xs">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-purple-600 flex-shrink-0" />
          <span className="font-bold">
            Confidential Pastoral Records • Protected under Student Wellbeing Policy • Visible only to Executive Team & Support Specialists
          </span>
        </div>
        <button
          onClick={() => setShowConfidentialDetails(!showConfidentialDetails)}
          className="text-xs font-black text-purple-700 hover:text-purple-900 underline ml-2 whitespace-nowrap"
        >
          {showConfidentialDetails ? 'Mask Names' : 'Show Names'}
        </button>
      </div>

      {/* Core Pastoral Metrics from Prompt Requirements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric A: Academic Improvement Need */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#FAF8FF] border border-[#C4B5FD]">
          <div className="text-xs font-black text-purple-800 uppercase tracking-wider mb-1">
            Academic Remedial Focus
          </div>
          <div className="text-2xl font-black text-navy font-display">
            9 Learners
          </div>
          <p className="text-xs text-purple-700 font-bold mt-1">
            EYP (2), PYP (3), LS (1), IGCSE (3)
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-2 pt-2 border-t border-purple-200/50">
            Targeted booster sessions active
          </div>
        </div>

        {/* Metric B: Cognitive & Emotional Attributes */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#F0F9FF] border border-[#7DD3FC]">
          <div className="text-xs font-black text-sky-800 uppercase tracking-wider mb-1">
            Cognitive / Emotional Support
          </div>
          <div className="text-2xl font-black text-navy font-display">
            4 Learners
          </div>
          <p className="text-xs text-sky-700 font-bold mt-1">
            EYP (2) & CIE LS (2)
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-2 pt-2 border-t border-sky-200/50">
            Speech & regulation routines
          </div>
        </div>

        {/* Metric C: Parent Interventions */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#FFFDF0] border border-[#FDE68A]">
          <div className="text-xs font-black text-amber-800 uppercase tracking-wider mb-1">
            Parent Interventions Required
          </div>
          <div className="text-2xl font-black text-navy font-display">
            2 Cases
          </div>
          <p className="text-xs text-amber-700 font-bold mt-1">
            Gr 7 Arnav & Anjana (Peer conduct)
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-2 pt-2 border-t border-amber-200/50">
            Consultations completed with parents
          </div>
        </div>

        {/* Metric D: Unresolved Beyond 2 Days & SEN Plan */}
        <div className="dashboard-card p-5 bg-gradient-to-br from-white to-[#F0FDF4] border border-[#A7F3D0]">
          <div className="text-xs font-black text-[#065F46] uppercase tracking-wider mb-1">
            Unresolved Beyond 2 Days
          </div>
          <div className="text-2xl font-black text-navy font-display">
            0 (NIL)
          </div>
          <p className="text-xs text-[#047857] font-bold mt-1">
            100% SEN Plans Met As Scheduled
          </p>
          <div className="text-[11px] text-slate-500 font-medium mt-2 pt-2 border-t border-emerald-200/50">
            0 mentors missed meeting mentees
          </div>
        </div>
      </div>

      {/* Support Breakdown Chart + Case Registry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Support Categories Chart (5 cols) */}
        <div className="lg:col-span-5 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Pastoral Support Areas
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Active interventions coordinated by Pooja.
              </p>
            </div>
            <Heart className="w-4 h-4 text-purple-600" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={supportCategoriesData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
                <XAxis type="number" tick={{ fill: '#64748B', fontSize: 10 }} />
                <YAxis dataKey="category" type="category" width={110} tick={{ fill: '#475569', fontSize: 10, fontWeight: 700 }} />
                <Tooltip />
                <Bar dataKey="count" name="Learners" radius={[0, 8, 8, 0]} barSize={18}>
                  {supportCategoriesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Case Studies Registry (7 cols) */}
        <div className="lg:col-span-7 dashboard-card p-6 bg-white/95">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 mb-3">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Intervention & Case Study Log
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Click any case to inspect detailed learner profile.
              </p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search case notes..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="px-3 py-1.5 rounded-2xl bg-[#FFFDF7] border border-[#C4B5FD]/60 text-xs w-36 sm:w-44 focus:outline-none"
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                aria-label="Filter cases by status"
                className="px-2.5 py-1.5 rounded-2xl bg-[#FAF8FF] border border-[#C4B5FD]/60 text-xs text-navy font-bold focus:outline-none"
              >
                <option value="ALL">All Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Active Monitoring">Active Monitoring</option>
                <option value="Parent Consulted">Parent Consulted</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {filteredCases.map((c) => (
              <div
                key={c.id}
                onClick={() => handleOpenStudentCase(c.studentName)}
                className="p-4 rounded-3xl border border-slate-200/90 bg-[#FAF8FF] hover:bg-white hover:border-[#C4B5FD] transition-all shadow-2xs cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-navy group-hover:text-purple-700 transition-colors flex items-center gap-1">
                      <span>{showConfidentialDetails ? c.studentName : `Learner (${c.grade})`}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">({c.grade})</span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                      {c.category}
                    </span>
                  </div>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                    c.status === 'Parent Consulted' ? 'bg-[#FDE68A]/80 text-amber-900 border-[#FDE68A]' :
                    c.status === 'In Progress' ? 'bg-[#7DD3FC]/80 text-[#075985] border-[#7DD3FC]' :
                    'bg-[#A7F3D0]/80 text-[#065F46] border-[#A7F3D0]'
                  }`}>
                    {c.status}
                  </span>
                </div>

                <p className="text-xs text-navy-700 mt-2 leading-relaxed font-medium">
                  <span className="font-black text-navy">Action Plan: </span>
                  {c.actionTaken}
                </p>

                <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500 font-bold">
                  <span>Coordinator / Lead: {c.coordinator}</span>
                  <span>Logged: {c.reportedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section VI Authentic MIS Table */}
      <div className="dashboard-card p-6 bg-white/95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h3 className="text-sm font-black text-navy font-display">
            Authentic Section VI MIS Metrics
          </h3>
          <span className="text-xs font-black text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
            Week {currentWeek.week_index} Record
          </span>
        </div>

        <div className="space-y-3">
          {metrics.map((m) => (
            <div key={m.row} className="p-4 rounded-3xl border border-slate-200 bg-white shadow-2xs">
              <div className="flex items-start gap-2.5">
                <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {m.s_no}
                </span>
                <div className="flex-1">
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

                  {(m.comments.eyp || m.comments.cie_ls || m.comments.cie_igcse_as) && (
                    <div className="mt-2.5 text-[11px] text-navy-700 bg-[#FAF8FF] p-3 rounded-2xl whitespace-pre-line border border-purple-100 space-y-1">
                      {m.comments.eyp && <div><span className="font-black text-[#047857]">Pooja (EYP Note): </span>{m.comments.eyp}</div>}
                      {m.comments.cie_ls && <div><span className="font-black text-[#0284C7]">Bhagyashree / Pooja (LS Note): </span>{m.comments.cie_ls}</div>}
                      {m.comments.cie_igcse_as && <div><span className="font-black text-purple-700">Shyamala (IGCSE Note): </span>{m.comments.cie_igcse_as}</div>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Profile Modal */}
      <StudentDetailModal
        student={selectedStudent}
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
      />
    </div>
  );
};
