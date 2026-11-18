import React from 'react';
import { 
  Sparkles, 
  Award, 
  Globe, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  Calendar, 
  Layers, 
  ArrowUpRight, 
  TrendingUp, 
  Target 
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
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';
import { WeekMIS, NPD_CORE_SCORES, PROGRAMMES } from '../data/schoolData';
import { ProgressRing } from './ProgressRing';

interface NpdAnalyticsSectionProps {
  currentWeek: WeekMIS;
  selectedProgramme: string;
}

export const NpdAnalyticsSection: React.FC<NpdAnalyticsSectionProps> = ({
  currentWeek,
  selectedProgramme
}) => {
  const radarData = [
    { capability: 'Inquiry Pedagogy', EYP: 85, PYP: 90, CIE_LS: 75, IGCSE: 80 },
    { capability: 'Assessment Rubrics', EYP: 80, PYP: 85, CIE_LS: 85, IGCSE: 95 },
    { capability: 'Differentiated Learning', EYP: 90, PYP: 88, CIE_LS: 70, IGCSE: 78 },
    { capability: 'Transferable Skills', EYP: 75, PYP: 92, CIE_LS: 85, IGCSE: 85 },
    { capability: 'Global Collaboration', EYP: 70, PYP: 95, CIE_LS: 80, IGCSE: 88 },
  ];

  const pdInitiatives = [
    {
      title: 'Global School Collaboration Exchange',
      partner: 'Partner Cambridge & IB World Schools in Oman & Dhaka',
      programme: 'PYP & Lower Secondary',
      status: 'Active Implementation',
      takeaways: 'Joint inquiry units on sustainability and cultural exchange.',
      facultyInvolved: 18,
      rating: '4.8 / 5.0',
      badgeClass: 'bg-[#A7F3D0]/70 text-[#065F46] border-[#A7F3D0]'
    },
    {
      title: 'Second Saturday PD: Differentiated Mark Schemes',
      partner: 'Cambridge International Assessment Specialists',
      programme: 'CIE IGCSE / AS Level',
      status: 'Calibrated',
      takeaways: 'Mark scheme standardization across Science, Commerce & Math.',
      facultyInvolved: 14,
      rating: '4.6 / 5.0',
      badgeClass: 'bg-[#C4B5FD]/70 text-[#5B21B6] border-[#C4B5FD]'
    },
    {
      title: 'Reggio Emilia Inquiry Centers & Foundational Numeracy',
      partner: 'Early Childhood Education Leadership Forum',
      programme: 'EYP (Early Years)',
      status: 'Integrated in Planners',
      takeaways: 'Sensory math learning stations and phonics integration.',
      facultyInvolved: 12,
      rating: '4.7 / 5.0',
      badgeClass: 'bg-[#7DD3FC]/70 text-[#075985] border-[#7DD3FC]'
    },
    {
      title: 'Transferable Skills Cross-Curricular Rubrics',
      partner: 'Internal Pedagogical Leadership Team',
      programme: 'All Programmes (School-wide)',
      status: 'Rolled Out',
      takeaways: 'Student reflection self-assessments and real-world connection rubrics.',
      facultyInvolved: 24,
      rating: '4.5 / 5.0',
      badgeClass: 'bg-[#FDE68A]/70 text-[#854D0E] border-[#FDE68A]'
    }
  ];

  const sectionVIII = currentWeek.sections.find(s => s.id === 'VIII');
  const metrics = sectionVIII?.metrics || [];

  return (
    <div className="space-y-6 mb-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#FDBAAB]/35 via-[#C4B5FD]/25 to-[#7DD3FC]/25 p-6 rounded-4xl border border-[#FDBAAB]/50 shadow-pastel">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2.5xl bg-white text-pink-700 shadow-sm border border-pink-200 flex items-center justify-center text-xl">
              🌟
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight font-display">
                New Pedagogical Development (NPD - Section VIII)
              </h2>
              <p className="text-xs text-navy-700 font-semibold mt-0.5">
                Core team pedagogical capability ratings, second Saturday professional development, and curricular takeaways.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl text-xs font-black bg-white text-purple-800 border border-purple-200 shadow-2xs flex items-center gap-1.5">
            <Award className="w-4 h-4 text-purple-600" />
            Core Team Rating: 3.5 / 5.0
          </span>
        </div>
      </div>

      {/* 2 Core Requirements KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Requirement 1: Average NPD score of the Core Team */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#FAF8FF] border border-[#C4B5FD]">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xs font-black text-purple-800 uppercase tracking-wider">
                Average NPD Score of Core Team
              </div>
              <div className="text-3xl font-black text-navy font-display mt-1">
                3.5 / 5.0
              </div>
            </div>
            <span className="text-3xl">🏆</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3 pt-3 border-t border-purple-100">
            {NPD_CORE_SCORES.map((core) => (
              <div key={core.programme} className="p-3 rounded-2.5xl bg-white border border-purple-100 shadow-2xs text-center">
                <div className="text-[11px] font-black text-navy">{core.programme}</div>
                <div className="text-lg font-black text-purple-700 font-display mt-0.5">{core.score} / 5.0</div>
                <div className="text-[9px] text-slate-400 font-bold truncate">{core.coordinator}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirement 2: Real-World Global Exchange */}
        <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0FDF4] border border-[#A7F3D0] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-black text-[#065F46] uppercase tracking-wider">
                International School Partnerships
              </div>
              <Globe className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-navy font-display">
              Oman & Dhaka Collaborative Hub
            </div>
            <p className="text-xs text-navy-700 font-medium mt-1 leading-relaxed">
              Joint science and humanities units with international Cambridge & IB partner schools, fostering intercultural perspective.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-bold">18 Faculty • 6 Inter-School Units</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#A7F3D0]/70 text-[#065F46] font-black text-[11px]">
              Active Exchange
            </span>
          </div>
        </div>

      </div>

      {/* Radar Chart + Initiatives Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Capability Radar (5 cols) */}
        <div className="lg:col-span-5 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Pedagogical Competency Radar
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Transdisciplinary capability progression.
              </p>
            </div>
            <Sparkles className="w-4 h-4 text-purple-600" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#E2E8F0" />
                <PolarAngleAxis dataKey="capability" tick={{ fill: '#475569', fontSize: 10, fontWeight: 700 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94A3B8', fontSize: 9 }} />
                <Radar name="PYP" dataKey="PYP" stroke="#0284C7" fill="#0284C7" fillOpacity={0.35} />
                <Radar name="IGCSE" dataKey="IGCSE" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* PD Initiatives (7 cols) */}
        <div className="lg:col-span-7 dashboard-card p-6 bg-white/95">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-black text-navy tracking-tight font-display">
                Second Saturday Professional Development Highlights
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Staff workshops and classroom implementation reviews.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {pdInitiatives.map((init, idx) => (
              <div
                key={idx}
                className="p-4 rounded-3xl border border-slate-200/90 bg-[#FAF8FF] hover:bg-white transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-navy text-xs sm:text-sm">
                    {init.title}
                  </span>
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${init.badgeClass}`}>
                    {init.status}
                  </span>
                </div>
                <div className="text-[11px] text-purple-700 font-bold mt-1">
                  Partner: {init.partner}
                </div>
                <p className="text-xs text-navy-700 font-medium mt-1">
                  {init.takeaways}
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500 font-bold">
                  <span>Scope: {init.programme} ({init.facultyInvolved} Faculty)</span>
                  <span className="text-amber-600 font-black">Rating: {init.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Section VIII Authentic MIS Table */}
      <div className="dashboard-card p-6 bg-white/95">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <h3 className="text-sm font-black text-navy font-display">
            Authentic Section VIII MIS Metrics
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
