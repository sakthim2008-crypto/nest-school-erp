import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Search, 
  Bell, 
  Download, 
  ChevronDown, 
  Clock, 
  Sparkles, 
  X,
  Volume2,
  VolumeX,
  Printer,
  Compass,
  CheckCircle2,
  Layers,
  Star,
  Flame,
  ShieldCheck,
  User,
  SlidersHorizontal
} from 'lucide-react';
import { WeekMIS, PROGRAMMES } from '../data/schoolData';
import { NavSection } from './Sidebar';
import { useGamification } from '../context/GamificationContext';
import { useTheme } from '../context/ThemeContext';
import { NestieMascot } from './EducationalIllustrations';
import { AnimatedThemeToggle } from './AnimatedThemeToggle';

interface TopNavbarProps {
  weeks: WeekMIS[];
  selectedWeekIndex: number;
  onSelectWeek: (idx: number) => void;
  selectedProgramme: string;
  onSelectProgramme: (prog: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenExportModal: () => void;
  academicYear: string;
  onAcademicYearChange: (year: string) => void;
  currentSection: NavSection;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  weeks,
  selectedWeekIndex,
  onSelectWeek,
  selectedProgramme,
  onSelectProgramme,
  searchQuery,
  onSearchChange,
  onOpenExportModal,
  academicYear,
  onAcademicYearChange,
  currentSection
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showWeekDropdown, setShowWeekDropdown] = useState(false);
  const [showScopeDropdown, setShowScopeDropdown] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const { theme, userRole } = useTheme();

  const { 
    stars, 
    streakDays, 
    level, 
    levelTitle, 
    soundEnabled, 
    toggleSound, 
    addStars,
  } = useGamification();

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const weekRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setShowProfileMenu(false);
      }
      if (weekRef.current && !weekRef.current.contains(e.target as Node)) {
        setShowWeekDropdown(false);
      }
      if (scopeRef.current && !scopeRef.current.contains(e.target as Node)) {
        setShowScopeDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      type: 'warning',
      title: '11 Incomplete Planners in PYP',
      time: 'Today, 09:30 AM',
      programme: 'PYP',
      desc: 'Grade 1–5 planners evaluated with recommendations awaiting completion.'
    },
    {
      id: 2,
      type: 'critical',
      title: 'Syllabus Deviation in AS Level',
      time: 'Yesterday, 04:15 PM',
      programme: 'CIE IGCSE/AS',
      desc: 'Lab practicals 1.5 wks behind; zero-period catch-up scheduled.'
    },
    {
      id: 3,
      type: 'success',
      title: '100% Observation Target Achieved',
      time: '12 Nov 2026',
      programme: 'Whole School',
      desc: '68 of 68 scheduled faculty appraisals completed with zero below 50% floor.'
    },
    {
      id: 4,
      type: 'success',
      title: 'Zero Unexplained Absences',
      time: '11 Nov 2026',
      programme: 'Faculty Registry',
      desc: '100% of staff leaves verified with sanctioned substitution coverage.'
    }
  ];

  const currentWeek = weeks[selectedWeekIndex] || weeks[weeks.length - 1];

  const currentProgrammeName = selectedProgramme === 'ALL' 
    ? 'All Scope' 
    : (PROGRAMMES.find(p => p.id === selectedProgramme)?.name || selectedProgramme);

  const roleTitle = userRole === 'admin' 
    ? 'Head of School' 
    : userRole === 'teacher' 
    ? 'Faculty Lead' 
    : 'Student & Family';

  const roleAvatar = userRole === 'admin' ? 'HS' : userRole === 'teacher' ? 'FL' : 'ST';

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#080C16]/95 backdrop-blur-md border-b border-[#C4B5FD]/40 dark:border-purple-900/30 shadow-xs transition-colors duration-200">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 sm:gap-4 w-full">
          
          {/* LEFT: Branding & Welcome Greeting (flex-shrink-0 guarantees NO overlap) */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-11 h-11 rounded-2.5xl bg-gradient-to-tr from-[#C4B5FD] via-[#7DD3FC] to-[#A7F3D0] flex items-center justify-center shadow-md p-1 flex-shrink-0 animate-gentle">
              <NestieMascot size={36} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-black text-navy dark:text-white tracking-tight font-display whitespace-nowrap">
                  Welcome, {roleTitle}
                </h1>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#A7F3D0]/60 dark:bg-emerald-950/80 text-[#065F46] dark:text-emerald-300 border border-[#A7F3D0] dark:border-emerald-700 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                  Term 1 Live
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-300 font-medium truncate hidden sm:block">
                The NEST School, Chennai • Smart ERP
              </p>
            </div>
          </div>

          {/* CENTER: Rectified Roomy Global Search Bar (Roomy on XL+ screens, icon on smaller) */}
          <div className="hidden xl:flex items-center relative flex-1 max-w-xs xl:max-w-sm min-w-[210px] mx-2">
            <div className="relative w-full">
              {/* Roomy, Crisp Search Icon */}
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-purple-600 dark:text-purple-300">
                <Search className="w-4 h-4" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search metrics, learners... (⌘K)"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-2.5xl bg-[#FFFDF7] dark:bg-[#0E1729] border border-[#C4B5FD]/70 dark:border-purple-800/60 text-xs text-navy dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 dark:focus:border-purple-400 transition-all shadow-inner font-semibold"
              />
              {searchQuery ? (
                <button
                  onClick={() => onSearchChange('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy dark:hover:text-white p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200/80 dark:border-slate-700">
                  ⌘K
                </span>
              )}
            </div>
          </div>

          {/* Compact Search Trigger Icon for Screen Widths < XL where full bar would crowd */}
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            aria-label="Search"
            className="xl:hidden p-2 rounded-2xl bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-slate-700 border border-purple-200/80 dark:border-purple-800/60 text-purple-600 dark:text-purple-300 transition-all shadow-2xs pop-btn"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* RIGHT CONTROLS: Streamlined, perfectly aligned without horizontal overflow */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            
            {/* EMBEDDED ANIMATED THEME SWITCHER (Animated sun/moon slider) */}
            <AnimatedThemeToggle />

            {/* Division Scope Dropdown (Compact & Clean - Takes only 115px) */}
            <div className="relative" ref={scopeRef}>
              <button
                onClick={() => setShowScopeDropdown(!showScopeDropdown)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2.5xl border text-xs font-black transition-all shadow-2xs pop-btn ${
                  selectedProgramme === 'ALL'
                    ? 'bg-gradient-to-r from-[#FAF8FF] to-[#F0FDF4] dark:from-slate-800 dark:to-slate-900 text-navy dark:text-slate-200 border-[#C4B5FD] dark:border-slate-700'
                    : 'bg-purple-600 text-white border-purple-600 shadow-pastel-sm'
                }`}
                title="Filter Dashboard Scope"
              >
                <Compass className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span className="hidden sm:inline">Scope:</span>
                <span className="truncate max-w-[80px]">{currentProgrammeName}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {showScopeDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-purple-200 dark:border-slate-700 p-2 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-2 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                    Filter Division Scope
                  </div>
                  <div className="space-y-1 mt-1">
                    <button
                      onClick={() => {
                        onSelectProgramme('ALL');
                        setShowScopeDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                        selectedProgramme === 'ALL'
                          ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-extrabold'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-navy dark:text-slate-300'
                      }`}
                    >
                      <span>All Divisions (Whole School)</span>
                      {selectedProgramme === 'ALL' && <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />}
                    </button>
                    {PROGRAMMES.map((prog) => (
                      <button
                        key={prog.id}
                        onClick={() => {
                          onSelectProgramme(prog.id);
                          setShowScopeDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-2xl text-xs font-bold flex items-center justify-between transition-all ${
                          selectedProgramme === prog.id
                            ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-extrabold'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-navy dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            prog.id === 'EYP' ? 'bg-[#10B981]' :
                            prog.id === 'PYP' ? 'bg-[#0284C7]' :
                            prog.id === 'CIE_LS' ? 'bg-[#7C3AED]' : 'bg-[#EF4444]'
                          }`}></span>
                          <span>{prog.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold">{prog.grades}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Week Selector Dropdown */}
            <div className="relative" ref={weekRef}>
              <button
                onClick={() => setShowWeekDropdown(!showWeekDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-2.5xl bg-gradient-to-r from-[#FAF8FF] to-[#F0F9FF] dark:from-slate-800 dark:to-slate-900 border border-[#C4B5FD] dark:border-slate-700 text-xs font-extrabold text-navy dark:text-slate-200 hover:border-purple-400 transition-all shadow-2xs pop-btn"
              >
                <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Wk {currentWeek?.week_index}</span>
                <ChevronDown className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              </button>

              {showWeekDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-purple-200 dark:border-slate-700 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                    Select MIS Review Period
                  </div>
                  <div className="space-y-1 mt-1 max-h-60 overflow-y-auto">
                    {weeks.map((w, idx) => (
                      <button
                        key={w.week_index}
                        onClick={() => {
                          onSelectWeek(idx);
                          setShowWeekDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-2xl text-xs font-semibold flex items-center justify-between transition-all ${
                          selectedWeekIndex === idx
                            ? 'bg-gradient-to-r from-[#FAF8FF] to-[#F0F9FF] dark:from-purple-950/50 dark:to-sky-950/50 text-purple-900 dark:text-purple-300 font-extrabold border border-[#C4B5FD] dark:border-purple-800'
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-navy dark:text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black ${
                            selectedWeekIndex === idx ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}>
                            {w.week_index}
                          </span>
                          <span>{w.week_label}</span>
                        </div>
                        {idx === weeks.length - 1 && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#A7F3D0]/60 dark:bg-emerald-950/60 text-[#065F46] dark:text-emerald-300 font-black">
                            Current
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Export Quick Trigger */}
            <button
              onClick={onOpenExportModal}
              title="Export MIS Executive Report"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2.5xl bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-slate-700 border border-purple-200/80 dark:border-slate-700 text-xs font-extrabold text-navy dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300 transition-all shadow-2xs pop-btn"
            >
              <Download className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Export</span>
            </button>

            {/* Notifications Dropdown */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                aria-label="View notifications"
                className="relative p-2 rounded-2xl bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-slate-700 border border-purple-200/80 dark:border-slate-700 text-navy-600 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-400 transition-all shadow-2xs pop-btn"
              >
                <Bell className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#EF4444] text-white text-[9px] font-black flex items-center justify-center animate-bounce">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-slate-900 rounded-4xl shadow-2xl border border-purple-200 dark:border-slate-700 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-xs font-black text-navy dark:text-white uppercase tracking-wider">
                        Operational Alerts
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FDBAAB]/70 dark:bg-rose-950/70 text-red-800 dark:text-rose-300 font-black">
                        3 Unread
                      </span>
                    </div>
                    <button
                      onClick={() => setShowNotifications(false)}
                      aria-label="Close notifications"
                      className="text-slate-400 hover:text-navy dark:hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-80 overflow-y-auto mt-2 space-y-1">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-2.5 hover:bg-[#FAF8FF] dark:hover:bg-slate-800/60 rounded-2xl px-2.5 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                            n.type === 'critical' ? 'bg-[#FDBAAB]/60 dark:bg-rose-950/60 text-red-800 dark:text-rose-300 border-[#FDBAAB] dark:border-rose-800' :
                            n.type === 'warning' ? 'bg-[#FDE68A]/60 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-[#FDE68A] dark:border-amber-800' :
                            'bg-[#A7F3D0]/60 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800'
                          }`}>
                            {n.programme}
                          </span>
                          <span className="text-[10px] text-slate-400">{n.time}</span>
                        </div>
                        <h4 className="text-xs font-black text-navy dark:text-white mt-1">{n.title}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{n.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-2 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-purple-700 dark:text-purple-400 hover:underline font-extrabold text-[11px]"
                    >
                      Mark all as acknowledged
                    </button>
                    <span className="text-[10px] text-slate-400">Weekly MIS synced</span>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 p-1 sm:px-2.5 sm:py-1 rounded-2.5xl bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-slate-700 border border-purple-200/80 dark:border-slate-700 transition-all shadow-2xs pop-btn"
              >
                <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#C4B5FD] to-[#7DD3FC] text-navy font-black text-xs flex items-center justify-center shadow-xs">
                  {roleAvatar}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-black text-navy dark:text-white leading-none capitalize">
                    {roleTitle}
                  </div>
                  <div className="text-[10px] text-purple-700 dark:text-purple-400 font-extrabold leading-none mt-1">
                    {userRole === 'admin' ? 'Executive' : userRole === 'teacher' ? 'Instructor' : 'Learner'}
                  </div>
                </div>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-slate-900 rounded-4xl shadow-2xl border border-purple-200 dark:border-slate-700 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-3 bg-gradient-to-r from-[#FAF8FF] via-[#F0F9FF] to-[#FFF5F5] dark:from-slate-800 dark:via-purple-950/30 dark:to-slate-800 rounded-3xl border border-purple-100 dark:border-slate-700 mb-2">
                    <div className="text-xs font-black text-navy dark:text-white">
                      {roleTitle}
                    </div>
                    <div className="text-[11px] text-purple-700 dark:text-purple-400 font-extrabold">Executive Reviewer</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">The NEST School, Chennai</div>
                  </div>

                  <div className="space-y-1 text-xs">
                    {/* Audio Sound Toggle */}
                    <button
                      onClick={toggleSound}
                      className="w-full text-left px-3 py-2 rounded-2xl hover:bg-purple-50 dark:hover:bg-slate-800 text-navy dark:text-slate-200 flex items-center justify-between font-bold"
                    >
                      <div className="flex items-center gap-2">
                        {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
                        <span>Interface Sound Feedback</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                        soundEnabled ? 'bg-[#A7F3D0]/70 text-[#065F46]' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {soundEnabled ? 'ON' : 'OFF'}
                      </span>
                    </button>

                    {/* Academic Year Selection */}
                    <div className="px-3 py-2 flex items-center justify-between text-navy dark:text-slate-200 font-bold">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>Academic Session</span>
                      </div>
                      <select
                        value={academicYear}
                        onChange={(e) => onAcademicYearChange(e.target.value)}
                        className="bg-slate-100 dark:bg-slate-800 rounded-lg px-2 py-1 text-xs font-extrabold text-navy dark:text-slate-200 border-none focus:outline-none cursor-pointer"
                      >
                        <option value="2026-2027">2026-2027</option>
                        <option value="2025-2026">2025-2026</option>
                      </select>
                    </div>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        onOpenExportModal();
                      }}
                      className="w-full text-left px-3 py-2 rounded-2xl hover:bg-purple-50 dark:hover:bg-slate-800 text-navy dark:text-slate-200 flex items-center gap-2 font-bold"
                    >
                      <Download className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>Download Executive Pack</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        window.print();
                      }}
                      className="w-full text-left px-3 py-2 rounded-2xl hover:bg-purple-50 dark:hover:bg-slate-800 text-navy dark:text-slate-200 flex items-center gap-2 font-bold"
                    >
                      <Printer className="w-3.5 h-3.5 text-slate-500" />
                      <span>Print Performance Sheet</span>
                    </button>
                    
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-1">
                      <div className="px-3 py-1 text-[10px] text-slate-400 dark:text-slate-500 font-extrabold uppercase">
                        Current Theme: {theme === 'dark' ? 'Midnight Navy' : 'Pastel Day'}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Expandable Mobile Search Dropdown */}
        {isMobileSearchOpen && (
          <div className="lg:hidden pb-3 pt-1 animate-in slide-in-from-top-2 duration-150">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-600 dark:text-purple-400" />
              <input
                type="text"
                placeholder="Search metrics, learners, faculty..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-9 py-2.5 rounded-2.5xl bg-[#FFFDF7] dark:bg-slate-900 border border-[#C4B5FD]/70 dark:border-slate-700 text-xs text-navy dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy dark:hover:text-white p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
