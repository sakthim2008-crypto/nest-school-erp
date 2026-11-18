import React, { useState, useMemo, useEffect } from 'react';
import { 
  WEEKS_DATA, 
  PROGRAMMES, 
  WeekMIS,
  AUTHENTIC_SUPPORT_CASES,
  AUTHENTIC_SUBJECT_DEVIATIONS
} from './data/schoolData';
import { TopNavbar } from './components/TopNavbar';
import { Sidebar, NavSection } from './components/Sidebar';
import { WelcomeBanner } from './components/WelcomeBanner';
import { KpiCardsRow } from './components/KpiCardsRow';
import { ProgrammeComparison } from './components/ProgrammeComparison';
import { ClassroomDashboardSection } from './components/ClassroomDashboardSection';
import { AssignmentsSection } from './components/AssignmentsSection';
import { AssessmentsSection } from './components/AssessmentsSection';
import { AttendanceSection } from './components/AttendanceSection';
import { TeacherAttendanceSection } from './components/TeacherAttendanceSection';
import { LearnerSupportSection } from './components/LearnerSupportSection';
import { ObservationsSection } from './components/ObservationsSection';
import { NpdAnalyticsSection } from './components/NpdAnalyticsSection';
import { ReportsSection } from './components/ReportsSection';
import { SettingsSection } from './components/SettingsSection';
import { CriticalIssuesSection } from './components/CriticalIssuesSection';
import { ExportModal } from './components/ExportModal';
import { GamificationProvider } from './context/GamificationContext';
import { ThemeProvider } from './context/ThemeContext';
import { 
  Search, 
  X, 
  ExternalLink, 
  BookOpen, 
  HeartHandshake, 
  GraduationCap,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

function DashboardContent() {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState<number>(WEEKS_DATA.length - 1); // latest week (Week 7)
  const [selectedProgramme, setSelectedProgramme] = useState<string>('ALL');
  
  // URL Route Synchronization
  const getInitialSection = (): NavSection => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const validSections: NavSection[] = [
      'overview',
      'classroom-dashboard',
      'assignments',
      'assessments',
      'learner-attendance',
      'teacher-attendance',
      'learner-support',
      'observations',
      'npd',
      'reports',
      'settings'
    ];
    if (validSections.includes(hash as NavSection)) {
      return hash as NavSection;
    }
    // Check aliases
    if (hash === 'student-attendance') return 'learner-attendance';
    if (hash === 'academic-progress' || hash === 'syllabus') return 'classroom-dashboard';
    if (hash === 'npd-analytics') return 'npd';
    if (hash === 'reports-settings') return 'reports';
    return 'overview';
  };

  const [currentSection, setCurrentSection] = useState<NavSection>(getInitialSection);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [academicYear, setAcademicYear] = useState<string>('2026-2027');

  // Sync hash when section changes
  const handleSelectSection = (sec: NavSection) => {
    // Normalization
    let normalized = sec;
    if ((sec as any) === 'student-attendance') normalized = 'learner-attendance';
    if ((sec as any) === 'academic-progress' || (sec as any) === 'syllabus') normalized = 'classroom-dashboard';
    if ((sec as any) === 'npd-analytics') normalized = 'npd';
    if ((sec as any) === 'reports-settings') normalized = 'reports';

    setCurrentSection(normalized);
    window.location.hash = `#/${normalized}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentSection(getInitialSection());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const input = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
        if (input) input.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentWeek = WEEKS_DATA[selectedWeekIndex] || WEEKS_DATA[WEEKS_DATA.length - 1];

  // Search Results across metrics, cases, and deviations
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();

    const results: Array<{
      category: string;
      title: string;
      subtitle: string;
      badge: string;
      targetSection: NavSection;
    }> = [];

    // Search metrics in current week
    currentWeek.sections.forEach(sec => {
      sec.metrics.forEach(m => {
        if (
          m.description.toLowerCase().includes(q) ||
          m.comments.pyp?.toLowerCase().includes(q) ||
          m.comments.cie_igcse_as?.toLowerCase().includes(q) ||
          m.comments.cie_ls?.toLowerCase().includes(q) ||
          m.comments.eyp?.toLowerCase().includes(q)
        ) {
          results.push({
            category: `Section ${sec.id} Metric`,
            title: m.description,
            subtitle: `Values: EYP ${m.eyp ?? '-'} | PYP ${m.pyp ?? '-'} | CIE LS ${m.cie_ls ?? '-'} | IGCSE ${m.cie_igcse_as ?? '-'}`,
            badge: sec.name,
            targetSection: sec.id === 'I' ? 'classroom-dashboard' :
                          sec.id === 'II' ? 'assignments' :
                          sec.id === 'III' ? 'assessments' :
                          sec.id === 'IV' ? 'learner-attendance' :
                          sec.id === 'V' ? 'teacher-attendance' :
                          sec.id === 'VI' ? 'learner-support' :
                          sec.id === 'VII' ? 'observations' :
                          sec.id === 'VIII' ? 'npd' : 'overview'
          });
        }
      });
    });

    // Search Support Cases
    AUTHENTIC_SUPPORT_CASES.forEach(c => {
      if (
        c.studentName.toLowerCase().includes(q) ||
        c.grade.toLowerCase().includes(q) ||
        c.actionTaken.toLowerCase().includes(q) ||
        c.coordinator.toLowerCase().includes(q)
      ) {
        results.push({
          category: 'Learner Support & SEN Case',
          title: `${c.studentName} (${c.grade})`,
          subtitle: `${c.category} • ${c.actionTaken}`,
          badge: c.status,
          targetSection: 'learner-support'
        });
      }
    });

    // Search Subject Deviations
    AUTHENTIC_SUBJECT_DEVIATIONS.forEach(d => {
      if (
        d.subject.toLowerCase().includes(q) ||
        d.teacher.toLowerCase().includes(q) ||
        d.reason.toLowerCase().includes(q) ||
        d.grade.toLowerCase().includes(q)
      ) {
        results.push({
          category: 'Syllabus Deviation',
          title: `${d.subject} (${d.grade})`,
          subtitle: `Faculty: ${d.teacher} • Deviation: ${d.deviationWeeks} wks • ${d.catchUpPlan}`,
          badge: d.status,
          targetSection: 'classroom-dashboard'
        });
      }
    });

    return results;
  }, [searchQuery, currentWeek]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Header Navigation */}
      <TopNavbar
        weeks={WEEKS_DATA}
        selectedWeekIndex={selectedWeekIndex}
        onSelectWeek={setSelectedWeekIndex}
        selectedProgramme={selectedProgramme}
        onSelectProgramme={setSelectedProgramme}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        academicYear={academicYear}
        onAcademicYearChange={setAcademicYear}
        currentSection={currentSection}
      />

      <div className="flex flex-1 relative">
        {/* Collapsible Modern Sidebar */}
        <Sidebar
          currentSection={currentSection}
          onSelectSection={handleSelectSection}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          criticalIssuesCount={2}
        />

        {/* Main Content Area */}
        <main
          className={`flex-1 transition-all duration-300 p-4 sm:p-6 lg:p-8 ${
            isSidebarCollapsed ? 'ml-20' : 'ml-72'
          }`}
        >
          <div className="max-w-[1560px] mx-auto">
            
            {/* Live Search Overlay Results */}
            {searchQuery && (
              <div className="mb-8 bg-white/95 dark:bg-[#131D31]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl dark:shadow-none animate-in fade-in duration-150">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white font-display">
                      Search Results for &ldquo;{searchQuery}&rdquo;
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 font-extrabold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {searchResults.length} Matches Found
                    </span>
                  </div>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {searchResults.length === 0 ? (
                  <p className="text-sm text-slate-500 dark:text-slate-400 py-6 text-center font-medium">
                    No matching records found across weekly metrics, student cases, or faculty notes.
                  </p>
                ) : (
                  <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                    {searchResults.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          handleSelectSection(item.targetSection);
                          setSearchQuery('');
                        }}
                        className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 hover:bg-indigo-50/60 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-slate-700 cursor-pointer transition-all flex items-center justify-between gap-4 group pop-btn"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-100/70 dark:bg-indigo-950/70 px-2 py-0.5 rounded">
                              {item.category}
                            </span>
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{item.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                            {item.badge}
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* SECTION 1: Overview */}
            {currentSection === 'overview' && (
              <>
                <WelcomeBanner
                  currentWeek={currentWeek}
                  weeks={WEEKS_DATA}
                  selectedWeekIndex={selectedWeekIndex}
                  onSelectWeek={setSelectedWeekIndex}
                  selectedProgramme={selectedProgramme}
                  onSelectProgramme={setSelectedProgramme}
                />

                <KpiCardsRow
                  currentWeek={currentWeek}
                  selectedProgramme={selectedProgramme}
                  onNavigateSection={handleSelectSection}
                />

                <ProgrammeComparison
                  currentWeek={currentWeek}
                  onSelectProgramme={(prog) => {
                    setSelectedProgramme(prog);
                    handleSelectSection('classroom-dashboard');
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Pacing Preview */}
                  <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#F0F9FF] dark:from-[#131D31] dark:to-sky-950/30 border border-[#7DD3FC] dark:border-sky-800/80">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                        <h3 className="font-black text-base text-navy dark:text-white font-display">
                          Syllabus Pacing Summary (Plan vs Actual)
                        </h3>
                      </div>
                      <button
                        onClick={() => handleSelectSection('classroom-dashboard')}
                        className="text-xs text-sky-700 dark:text-sky-400 hover:underline font-black flex items-center gap-1 pop-btn"
                      >
                        <span>View Pacing</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                      Section I pacing audit and catch-up schedules for deviations &gt; 1 week.
                    </p>
                    <div className="space-y-2.5">
                      {AUTHENTIC_SUBJECT_DEVIATIONS.slice(0, 3).map((dev, i) => (
                        <div key={i} className="p-3.5 bg-white/90 dark:bg-slate-900/90 rounded-2.5xl border border-sky-100 dark:border-slate-800 flex items-center justify-between text-xs shadow-2xs">
                          <div>
                            <span className="font-black text-navy dark:text-white">{dev.subject}</span>
                            <span className="text-slate-400 font-bold ml-2">({dev.grade})</span>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium line-clamp-1 mt-0.5">{dev.reason}</p>
                          </div>
                          <span className={`px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase border ${
                            dev.status === 'Critical' ? 'bg-[#FDBAAB]/80 dark:bg-red-950/80 text-red-900 dark:text-red-300 border-[#FDBAAB] dark:border-red-800' : 'bg-[#FDE68A]/80 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border-[#FDE68A] dark:border-amber-800'
                          }`}>
                            +{dev.deviationWeeks} wks
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pastoral Care Preview */}
                  <div className="dashboard-card p-6 bg-gradient-to-br from-white to-[#FAF8FF] dark:from-[#131D31] dark:to-purple-950/30 border border-[#C4B5FD] dark:border-purple-800/80">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <HeartHandshake className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <h3 className="font-black text-base text-navy dark:text-white font-display">
                          Active Pastoral & SEN Interventions
                        </h3>
                      </div>
                      <button
                        onClick={() => handleSelectSection('learner-support')}
                        className="text-xs text-purple-700 dark:text-purple-400 hover:underline font-black flex items-center gap-1 pop-btn"
                      >
                        <span>View SEN Log</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                      Section VI remedial, counselling, and parental follow-ups coordinated by Pooja.
                    </p>
                    <div className="space-y-2.5">
                      {AUTHENTIC_SUPPORT_CASES.slice(0, 3).map((cs) => (
                        <div key={cs.id} className="p-3.5 bg-white/90 dark:bg-slate-900/90 rounded-2.5xl border border-purple-100 dark:border-slate-800 flex items-center justify-between text-xs shadow-2xs">
                          <div>
                            <span className="font-black text-navy dark:text-white">{cs.studentName}</span>
                            <span className="text-slate-400 font-bold ml-2">({cs.grade})</span>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium line-clamp-1 mt-0.5">{cs.actionTaken}</p>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#C4B5FD]/70 dark:bg-purple-950/70 text-[#5B21B6] dark:text-purple-300 border border-[#C4B5FD] dark:border-purple-800">
                            {cs.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <CriticalIssuesSection currentWeek={currentWeek} />
              </>
            )}

            {/* SECTION 2: Classroom Dashboard */}
            {currentSection === 'classroom-dashboard' && (
              <ClassroomDashboardSection
                currentWeek={currentWeek}
                selectedProgramme={selectedProgramme}
              />
            )}

            {/* SECTION 3: Home Reinforcement & Assignments */}
            {currentSection === 'assignments' && (
              <AssignmentsSection
                currentWeek={currentWeek}
                selectedProgramme={selectedProgramme}
              />
            )}

            {/* SECTION 4: Assessments */}
            {currentSection === 'assessments' && (
              <AssessmentsSection
                currentWeek={currentWeek}
                selectedProgramme={selectedProgramme}
              />
            )}

            {/* SECTION 5: Learner Attendance */}
            {currentSection === 'learner-attendance' && (
              <AttendanceSection
                currentWeek={currentWeek}
                selectedProgramme={selectedProgramme}
              />
            )}

            {/* SECTION 6: Teacher Attendance */}
            {currentSection === 'teacher-attendance' && (
              <TeacherAttendanceSection
                currentWeek={currentWeek}
                selectedProgramme={selectedProgramme}
              />
            )}

            {/* SECTION 7: SEN / Counselling / Mentoring */}
            {currentSection === 'learner-support' && (
              <LearnerSupportSection
                currentWeek={currentWeek}
                selectedProgramme={selectedProgramme}
              />
            )}

            {/* SECTION 8: Classroom Observations */}
            {currentSection === 'observations' && (
              <ObservationsSection
                currentWeek={currentWeek}
                selectedProgramme={selectedProgramme}
              />
            )}

            {/* SECTION 9: NPD */}
            {currentSection === 'npd' && (
              <NpdAnalyticsSection
                currentWeek={currentWeek}
                selectedProgramme={selectedProgramme}
              />
            )}

            {/* SECTION 10: Reports */}
            {currentSection === 'reports' && (
              <ReportsSection
                currentWeek={currentWeek}
                academicYear={academicYear}
                onOpenExportModal={() => setIsExportModalOpen(true)}
              />
            )}

            {/* SECTION 11: Settings */}
            {currentSection === 'settings' && (
              <SettingsSection
                academicYear={academicYear}
                onAcademicYearChange={setAcademicYear}
              />
            )}

          </div>
        </main>
      </div>

      {/* Export Modal Dialog */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        currentWeek={currentWeek}
        academicYear={academicYear}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <GamificationProvider>
        <DashboardContent />
      </GamificationProvider>
    </ThemeProvider>
  );
}

export default App;
