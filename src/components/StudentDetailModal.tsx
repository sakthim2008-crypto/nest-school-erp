import React, { useState } from 'react';
import { 
  X, 
  User, 
  GraduationCap, 
  Calendar, 
  Clock, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Droplet, 
  Home, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  TrendingUp,
  Download,
  Share2
} from 'lucide-react';
import { StudentProfile } from '../data/studentsData';
import { NestieMascot, IllustrationBooks } from './EducationalIllustrations';

interface StudentDetailModalProps {
  student: StudentProfile | null;
  isOpen: boolean;
  onClose: () => void;
}

export const StudentDetailModal: React.FC<StudentDetailModalProps> = ({
  student,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'academics' | 'attendance' | 'competencies'>('profile');

  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white/95 dark:bg-[#0F172A] rounded-4xl border border-[#C4B5FD]/50 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Pastel Mesh Gradient */}
        <div className="relative px-6 py-6 bg-gradient-to-r from-[#C4B5FD]/35 via-[#7DD3FC]/25 to-[#FDBAAB]/30 dark:from-purple-950/40 dark:via-sky-950/30 dark:to-slate-900 border-b border-[#C4B5FD]/30 dark:border-slate-800">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-2xl bg-white/80 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 text-navy-600 dark:text-slate-300 hover:text-navy dark:hover:text-white border border-purple-200 dark:border-slate-700 shadow-xs transition-all pop-btn"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative">
              <img
                src={student.avatar}
                alt={student.fullName}
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><rect width='40' height='40' fill='%23C4B5FD'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='%2326334D'>${encodeURIComponent(student.fullName.charAt(0))}</text></svg>`;
                }}
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl object-cover border-4 border-white dark:border-slate-800 shadow-pastel"
              />
              <span className="absolute -bottom-1 -right-1 p-1 rounded-xl bg-white dark:bg-slate-800 shadow-xs text-xs">
                ⭐
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-navy dark:text-white font-display">
                  {student.fullName}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-white/90 dark:bg-slate-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-slate-700 shadow-2xs">
                  {student.studentId}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#A7F3D0]/70 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border border-[#A7F3D0] dark:border-emerald-800 shadow-2xs">
                  Rank #{student.academicRank}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs font-bold text-navy-700 dark:text-slate-300">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  {student.classAndSection}
                </span>
                <span>•</span>
                <span>Roll No: {student.rollNumber}</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded-lg bg-white/80 dark:bg-slate-800 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-slate-700">
                  {student.house} House
                </span>
                {student.senStatus && student.senStatus !== 'None' && (
                  <span className="px-2 py-0.5 rounded-lg bg-[#FDBAAB]/70 dark:bg-rose-950/80 text-red-800 dark:text-rose-300 border border-[#FDBAAB] dark:border-rose-800">
                    {student.senStatus}
                  </span>
                )}
              </div>
            </div>

            {/* Quick Metrics Badge */}
            <div className="flex sm:flex-col gap-2 flex-shrink-0">
              <div className="bg-white/90 dark:bg-slate-850 px-3.5 py-1.5 rounded-2xl border border-[#7DD3FC]/80 dark:border-sky-800/80 shadow-2xs text-center dark:bg-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Overall Score</span>
                <span className="text-base font-black text-navy dark:text-white font-display">{student.overallPercentage}%</span>
              </div>
              <div className="bg-white/90 dark:bg-slate-850 px-3.5 py-1.5 rounded-2xl border border-[#A7F3D0]/80 dark:border-emerald-800/80 shadow-2xs text-center dark:bg-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Attendance</span>
                <span className="text-base font-black text-[#047857] dark:text-emerald-400 font-display">{student.overallAttendancePercentage}%</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 mt-5 overflow-x-auto pb-1">
            {[
              { id: 'profile', label: 'Student Profile', icon: User, color: 'text-purple-600 dark:text-purple-400' },
              { id: 'academics', label: 'Academics & Grades', icon: GraduationCap, color: 'text-sky-600 dark:text-sky-400' },
              { id: 'attendance', label: 'Attendance Record', icon: Calendar, color: 'text-emerald-600 dark:text-emerald-400' },
              { id: 'competencies', label: 'Competencies & Growth', icon: Award, color: 'text-amber-600 dark:text-amber-400' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-black transition-all pop-btn ${
                    isActive 
                      ? 'bg-white dark:bg-slate-800 text-navy dark:text-white shadow-pastel-sm border border-[#C4B5FD] dark:border-purple-600' 
                      : 'text-navy-700 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${tab.color}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(92vh-220px)] space-y-6">
          {/* TAB 1: Profile */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Personal Information Grid */}
              <div>
                <h4 className="text-sm font-black text-navy dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Personal Information
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#F0F9FF] dark:bg-sky-950/30 border border-[#7DD3FC]/50 dark:border-sky-800/60">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Date of Birth</span>
                    <p className="text-xs sm:text-sm font-black text-navy dark:text-white mt-1">🎂 {student.dob}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8FF] dark:bg-purple-950/30 border border-[#C4B5FD]/50 dark:border-purple-800/60">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Gender</span>
                    <p className="text-xs sm:text-sm font-black text-navy dark:text-white mt-1">{student.gender}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FFF5F5] dark:bg-rose-950/30 border border-[#FDBAAB]/50 dark:border-rose-800/60">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Blood Group</span>
                    <p className="text-xs sm:text-sm font-black text-red-700 dark:text-rose-300 mt-1">🩸 {student.bloodGroup}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FFFDF0] dark:bg-amber-950/30 border border-[#FDE68A]/50 dark:border-amber-800/60">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Admission Date</span>
                    <p className="text-xs sm:text-sm font-black text-navy dark:text-white mt-1">📅 {student.admissionDate}</p>
                  </div>
                </div>
              </div>

              {/* Guardian & Contact Details */}
              <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <h4 className="text-sm font-black text-navy dark:text-white mb-3 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Parent & Guardian Directory
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Parent / Guardian</span>
                      <span className="font-extrabold text-navy dark:text-white">{student.parentName}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Primary Contact</span>
                      <span className="font-extrabold text-navy dark:text-white">{student.parentContact}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block">Guardian Email</span>
                      <span className="font-extrabold text-navy dark:text-white truncate block">{student.parentEmail}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                  <span className="font-semibold">{student.address}</span>
                </div>
              </div>

              {/* SEN / Pastoral Care Notes */}
              {student.senConfidentialNotes && (
                <div className="p-4 rounded-3xl bg-gradient-to-r from-[#FAF8FF] to-[#FFF5F5] dark:from-purple-950/30 dark:to-rose-950/30 border border-[#C4B5FD] dark:border-purple-800/80 text-xs">
                  <div className="flex items-center gap-2 font-black text-purple-900 dark:text-purple-300 mb-1">
                    <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Pastoral & SEN Profile: {student.senStatus}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {student.senConfidentialNotes}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Academics */}
          {activeTab === 'academics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-navy dark:text-white font-display">Term 1 Formative & Summative Performance</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Subject mastery evaluated against Cambridge and IB standards.</p>
                </div>
                <span className="px-3 py-1 rounded-2xl bg-[#A7F3D0]/60 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 font-black text-xs border border-[#A7F3D0] dark:border-emerald-800">
                  Overall GPA: {student.overallGpa} / 4.0
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {student.subjectGrades.map((sub, idx) => (
                  <div key={idx} className="p-4 rounded-2.5xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-[#C4B5FD] dark:hover:border-purple-600 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-navy dark:text-white">{sub.subject}</span>
                      <span className={`px-2 py-0.5 rounded-lg text-xs font-black ${
                        sub.grade.includes('A') 
                          ? 'bg-[#A7F3D0]/70 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border border-[#A7F3D0] dark:border-emerald-800' 
                          : 'bg-[#7DD3FC]/70 dark:bg-sky-950/80 text-[#075985] dark:text-sky-300 border border-[#7DD3FC] dark:border-sky-800'
                      }`}>
                        {sub.grade} ({sub.score}%)
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#7DD3FC] to-[#C4B5FD] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${sub.score}%` }}
                      ></div>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium italic">
                      &ldquo;{sub.remarks}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Attendance */}
          {activeTab === 'attendance' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-navy dark:text-white font-display">Monthly Attendance Telemetry</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Cumulative presence: {student.overallAttendancePercentage}% (Target: ≥90%)</p>
                </div>
                <span className="px-3 py-1 rounded-2xl bg-[#7DD3FC]/60 dark:bg-sky-950/80 text-[#075985] dark:text-sky-300 font-black text-xs border border-[#7DD3FC] dark:border-sky-800">
                  0 Unexcused Absences
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {student.monthlyAttendance.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2.5xl bg-gradient-to-b from-white to-[#F0FDF4] dark:from-slate-900 dark:to-emerald-950/30 border border-[#A7F3D0]/80 dark:border-emerald-800/80 shadow-2xs text-center">
                    <span className="text-xs font-extrabold text-navy dark:text-slate-200 block">{m.month} 2026</span>
                    <div className="text-2xl font-black text-[#047857] dark:text-emerald-400 my-1 font-display">
                      {m.percentage}%
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block">
                      {m.presentDays} of {m.workingDays} Days Present
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Competencies & Holistic Growth */}
          {activeTab === 'competencies' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-navy dark:text-white font-display">Transdisciplinary Competencies</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Inquiry-based learner profile rubrics.</p>
                </div>
              </div>

              <div className="space-y-3">
                {student.competencies.map((comp, idx) => (
                  <div key={idx} className="p-4 rounded-2.5xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <div>
                        <span className="text-[10px] font-black uppercase text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md">
                          {comp.domain}
                        </span>
                        <h5 className="text-xs font-black text-navy dark:text-white mt-1">{comp.competency}</h5>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#A7F3D0]/70 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border border-[#A7F3D0] dark:border-emerald-800">
                        {comp.level} ({comp.scorePercent}%)
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">
                      {comp.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50/90 dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400 dark:text-slate-500 font-bold">The NEST School • Academic Year 2026-27</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold shadow-pastel-sm hover:opacity-95 transition-all pop-btn"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
