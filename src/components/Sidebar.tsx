import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Clock, 
  HeartHandshake, 
  Sparkles, 
  Settings, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft, 
  ClipboardCheck, 
  GraduationCap, 
  Users, 
  UserCheck, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Star, 
  Flame, 
  Compass,
  GraduationCap as StudentIcon,
  ShieldAlert,
  Sliders,
  Layers
} from 'lucide-react';
import { useGamification } from '../context/GamificationContext';
import { useTheme, UserRole } from '../context/ThemeContext';
import { NestieMascot } from './EducationalIllustrations';

export type NavSection = 
  | 'overview'
  | 'classroom-dashboard'
  | 'assignments'
  | 'assessments'
  | 'learner-attendance'
  | 'teacher-attendance'
  | 'learner-support'
  | 'observations'
  | 'npd'
  | 'reports'
  | 'settings';

interface SidebarProps {
  currentSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  criticalIssuesCount?: number;
}

interface NavSubItem {
  id: NavSection;
  label: string;
  sublabel: string;
  code: string;
  emoji: string;
  icon: React.ElementType;
  badge?: string;
  badgeBg?: string;
}

interface NavGroup {
  id: string;
  label: string;
  sublabel?: string;
  emoji: string;
  icon: React.ElementType;
  directSection?: NavSection;
  subItems?: NavSubItem[];
  color: string;
  activeBg: string;
  badge?: string;
  badgeBg?: string;
  allowedRoles?: UserRole[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentSection,
  onSelectSection,
  isCollapsed,
  onToggleCollapse,
  criticalIssuesCount = 2
}) => {
  const { stars, streakDays } = useGamification();
  const { theme, userRole, setUserRole } = useTheme();

  // Navigation Groups Definition (Minimal & Smart)
  const navGroups: NavGroup[] = [
    {
      id: 'overview-group',
      label: 'Overview',
      sublabel: 'School-wide MIS & Highlights',
      emoji: '🏠',
      icon: LayoutDashboard,
      directSection: 'overview',
      color: '#0284C7',
      activeBg: 'bg-gradient-to-r from-[#7DD3FC]/30 to-[#C4B5FD]/20 dark:from-sky-900/40 dark:to-purple-900/40 text-navy dark:text-sky-200 border border-[#7DD3FC]/70 dark:border-sky-500/40 shadow-pastel-sm',
      badge: 'Live',
      badgeBg: 'bg-[#A7F3D0]/60 dark:bg-emerald-950/60 text-[#065F46] dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800'
    },
    {
      id: 'academics-group',
      label: 'Academics',
      sublabel: 'Planners, HR & Benchmarks',
      emoji: '📚',
      icon: BookOpen,
      color: '#7C3AED',
      activeBg: 'bg-gradient-to-r from-[#C4B5FD]/35 to-[#FDBAAB]/20 dark:from-purple-900/40 dark:to-pink-900/40 text-navy dark:text-purple-200 border border-[#C4B5FD]/70 dark:border-purple-500/40 shadow-pastel-sm',
      subItems: [
        {
          id: 'classroom-dashboard',
          label: 'Classroom & Pacing',
          sublabel: 'Unit Planners & Pacing Deviations',
          code: 'M1',
          emoji: '📖',
          icon: BookOpen,
          badge: 'Sec I',
          badgeBg: 'bg-[#C4B5FD]/60 dark:bg-purple-950/60 text-[#5B21B6] dark:text-purple-300 border-[#C4B5FD] dark:border-purple-800'
        },
        {
          id: 'assignments',
          label: 'Assignments & HR',
          sublabel: 'Home Reinforcement & SLA < 7d',
          code: 'M2',
          emoji: '📝',
          icon: ClipboardCheck,
          badge: 'SLA < 7d',
          badgeBg: 'bg-[#A7F3D0]/60 dark:bg-emerald-950/60 text-[#065F46] dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800'
        },
        {
          id: 'assessments',
          label: 'Assessments',
          sublabel: 'FA / SA1 Benchmarks & Moderation',
          code: 'M3',
          emoji: '🎓',
          icon: GraduationCap,
          badge: 'Sec III',
          badgeBg: 'bg-[#FDBAAB]/60 dark:bg-rose-950/60 text-[#9A3412] dark:text-rose-300 border-[#FDBAAB] dark:border-rose-800'
        }
      ]
    },
    {
      id: 'attendance-group',
      label: 'Attendance',
      sublabel: 'Learner & Faculty Turnout',
      emoji: '⏱️',
      icon: Clock,
      color: '#F59E0B',
      activeBg: 'bg-gradient-to-r from-[#FDE68A]/35 to-[#A7F3D0]/20 dark:from-amber-900/40 dark:to-emerald-900/40 text-navy dark:text-amber-200 border border-[#FDE68A]/70 dark:border-amber-500/40 shadow-pastel-sm',
      subItems: [
        {
          id: 'learner-attendance',
          label: 'Student Attendance',
          sublabel: 'Turnout & Medical Leaves',
          code: 'M4',
          emoji: '☀️',
          icon: Users,
          badge: '96% Peak',
          badgeBg: 'bg-[#FDE68A]/60 dark:bg-amber-950/60 text-[#854D0E] dark:text-amber-300 border-[#FDE68A] dark:border-amber-800'
        },
        {
          id: 'teacher-attendance',
          label: 'Faculty Attendance',
          sublabel: 'Leaves & Punctuality Counseling',
          code: 'M5',
          emoji: '👨‍🏫',
          icon: UserCheck,
          badge: '0 Unexp',
          badgeBg: 'bg-[#7DD3FC]/60 dark:bg-sky-950/60 text-[#075985] dark:text-sky-300 border-[#7DD3FC] dark:border-sky-800'
        }
      ]
    },
    {
      id: 'care-group',
      label: 'Student Care',
      sublabel: 'Pastoral & SEN Support',
      emoji: '💖',
      icon: HeartHandshake,
      directSection: 'learner-support',
      color: '#8B5CF6',
      activeBg: 'bg-gradient-to-r from-[#C4B5FD]/35 to-[#FDBAAB]/25 dark:from-purple-900/40 dark:to-rose-900/40 text-navy dark:text-purple-200 border border-[#C4B5FD]/70 dark:border-purple-500/40 shadow-pastel-sm',
      badge: 'Wellbeing',
      badgeBg: 'bg-[#C4B5FD]/60 dark:bg-purple-950/60 text-[#5B21B6] dark:text-purple-300 border-[#C4B5FD] dark:border-purple-800'
    },
    {
      id: 'quality-group',
      label: 'Quality & NPD',
      sublabel: 'Observations & Development',
      emoji: '🔍',
      icon: Sparkles,
      color: '#10B981',
      activeBg: 'bg-gradient-to-r from-[#A7F3D0]/35 to-[#7DD3FC]/25 dark:from-emerald-900/40 dark:to-sky-900/40 text-navy dark:text-emerald-200 border border-[#A7F3D0]/70 dark:border-emerald-500/40 shadow-pastel-sm',
      subItems: [
        {
          id: 'observations',
          label: 'Observations',
          sublabel: '68 of 68 Appraisals Completed',
          code: 'M7',
          emoji: '👁️',
          icon: Eye,
          badge: '68/68',
          badgeBg: 'bg-[#A7F3D0]/60 dark:bg-emerald-950/60 text-[#065F46] dark:text-emerald-300 border-[#A7F3D0] dark:border-emerald-800'
        },
        {
          id: 'npd',
          label: 'NPD Analytics',
          sublabel: 'Core Team & Pedagogical Benchmarks',
          code: 'M8',
          emoji: '🌟',
          icon: Sparkles,
          badge: 'Core Team',
          badgeBg: 'bg-[#FDBAAB]/60 dark:bg-rose-950/60 text-[#9A3412] dark:text-rose-300 border-[#FDBAAB] dark:border-rose-800'
        }
      ]
    },
    {
      id: 'admin-group',
      label: 'Admin & Reports',
      sublabel: 'Exports, Audit & SLA Config',
      emoji: '⚙️',
      icon: Settings,
      color: '#64748B',
      activeBg: 'bg-gradient-to-r from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 text-navy dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-pastel-sm',
      subItems: [
        {
          id: 'reports',
          label: 'Reports & Exports',
          sublabel: 'Division Packs & Sign-offs',
          code: 'M9',
          emoji: '📜',
          icon: FileText,
          badge: 'PDF/CSV',
          badgeBg: 'bg-[#FDE68A]/60 dark:bg-amber-950/60 text-[#854D0E] dark:text-amber-300 border-[#FDE68A] dark:border-amber-800'
        },
        {
          id: 'settings',
          label: 'Settings & SLA',
          sublabel: 'Thresholds, Roles & Directory',
          code: 'M10',
          emoji: '⚙️',
          icon: Settings,
          badge: 'Config',
          badgeBg: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
        }
      ]
    }
  ];

  // Auto-expand group that contains current section
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {
      'academics-group': false,
      'attendance-group': false,
      'quality-group': false,
      'admin-group': false,
    };
    navGroups.forEach(group => {
      if (group.subItems?.some(item => item.id === currentSection)) {
        initial[group.id] = true;
      }
    });
    return initial;
  });

  useEffect(() => {
    navGroups.forEach(group => {
      if (group.subItems?.some(item => item.id === currentSection)) {
        setExpandedGroups(prev => ({ ...prev, [group.id]: true }));
      }
    });
  }, [currentSection]);

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  return (
    <aside 
      className={`fixed top-20 left-0 bottom-0 z-30 bg-white/95 dark:bg-[#080C16]/95 backdrop-blur-md border-r border-[#C4B5FD]/40 dark:border-purple-900/30 text-navy dark:text-slate-200 transition-all duration-300 flex flex-col shadow-pastel dark:shadow-none select-none ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      {/* Fixed Brand Header & Role Perspective Filter */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#C4B5FD]/30 dark:border-slate-800 bg-gradient-to-r from-[#C4B5FD]/20 via-[#7DD3FC]/15 to-white dark:from-purple-950/40 dark:via-sky-950/30 dark:to-[#080C16]">
          {!isCollapsed ? (
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-10 h-10 rounded-2.5xl bg-gradient-to-tr from-[#C4B5FD] via-[#7DD3FC] to-[#A7F3D0] flex items-center justify-center flex-shrink-0 shadow-md p-1">
                <NestieMascot size={32} />
              </div>
              <div className="truncate">
                <div className="text-xs font-black text-navy dark:text-white tracking-wider truncate flex items-center gap-1.5 font-display">
                  <span>THE NEST SCHOOL</span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                </div>
                <div className="text-[10px] text-purple-700 dark:text-purple-300 font-bold truncate flex items-center gap-1">
                  <span>Smart ERP</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="text-slate-500 dark:text-slate-400">Chennai</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-2.5xl bg-gradient-to-tr from-[#C4B5FD] via-[#7DD3FC] to-[#A7F3D0] flex items-center justify-center mx-auto shadow-md">
              <NestieMascot size={30} />
            </div>
          )}
          
          <button
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="p-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-slate-700 text-slate-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all border border-purple-200/80 dark:border-purple-800/60 shadow-xs pop-btn"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400" /> : <ChevronLeft className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
          </button>
        </div>

        {/* Smart Role Perspective Filter (Expanded only) */}
        {!isCollapsed && (
          <div className="px-3.5 py-2.5 border-b border-[#C4B5FD]/20 dark:border-slate-800/80 bg-[#FFFDF7]/60 dark:bg-[#0E1729]/80">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-1.5 px-1">
              <span>View Perspective</span>
              <span className="text-purple-600 dark:text-purple-300 font-extrabold capitalize">{userRole}</span>
            </div>
            <div className="grid grid-cols-3 gap-1 p-0.5 rounded-2xl bg-slate-100/80 dark:bg-[#080E1C] border border-slate-200/80 dark:border-slate-800 text-[10px] font-black">
              <button
                onClick={() => setUserRole('admin')}
                className={`py-1 rounded-xl transition-all ${
                  userRole === 'admin'
                    ? 'bg-white dark:bg-purple-900/60 text-purple-700 dark:text-purple-200 shadow-2xs font-extrabold border border-purple-200/80 dark:border-purple-700/60'
                    : 'text-slate-500 dark:text-slate-400 hover:text-navy dark:hover:text-white'
                }`}
              >
                Leadership
              </button>
              <button
                onClick={() => setUserRole('teacher')}
                className={`py-1 rounded-xl transition-all ${
                  userRole === 'teacher'
                    ? 'bg-white dark:bg-purple-900/60 text-purple-700 dark:text-purple-200 shadow-2xs font-extrabold border border-purple-200/80 dark:border-purple-700/60'
                    : 'text-slate-500 dark:text-slate-400 hover:text-navy dark:hover:text-white'
                }`}
              >
                Teacher
              </button>
              <button
                onClick={() => setUserRole('student')}
                className={`py-1 rounded-xl transition-all ${
                  userRole === 'student' || userRole === 'parent'
                    ? 'bg-white dark:bg-purple-900/60 text-purple-700 dark:text-purple-200 shadow-2xs font-extrabold border border-purple-200/80 dark:border-purple-700/60'
                    : 'text-slate-500 dark:text-slate-400 hover:text-navy dark:hover:text-white'
                }`}
              >
                Student
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Flexible Scrollable Navigation List - Always starts clean at top, never clipped */}
      <div className="flex-1 min-h-0 overflow-y-auto p-3 space-y-1.5">
          {navGroups.map((group) => {
            const hasSubItems = Boolean(group.subItems && group.subItems.length > 0);
            const isGroupActive = group.directSection 
              ? currentSection === group.directSection
              : group.subItems?.some(item => item.id === currentSection);
            const isExpanded = expandedGroups[group.id];

            // If it's a direct item (like Overview or Student Care)
            if (!hasSubItems && group.directSection) {
              const isActive = currentSection === group.directSection;

              return (
                <button
                  key={group.id}
                  onClick={() => onSelectSection(group.directSection!)}
                  title={isCollapsed ? `${group.emoji} ${group.label} — ${group.sublabel}` : undefined}
                  className={`w-full text-left flex items-center transition-all duration-200 rounded-2.5xl group relative pop-btn ${
                    isCollapsed ? 'justify-center p-2.5' : 'justify-between px-3 py-2.5'
                  } ${
                    isActive
                      ? `${group.activeBg} font-extrabold`
                      : 'hover:bg-purple-50/60 dark:hover:bg-slate-800/60 text-navy dark:text-slate-300 hover:text-purple-700 dark:hover:text-white font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-sm transition-transform duration-200 group-hover:scale-110 shadow-xs ${
                        isActive 
                          ? 'bg-white dark:bg-slate-800 shadow-pastel-sm text-navy dark:text-white' 
                          : 'bg-purple-100/60 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300'
                      }`}
                    >
                      <span>{group.emoji}</span>
                    </div>

                    {!isCollapsed && (
                      <div className="truncate">
                        <div className="text-xs truncate font-extrabold leading-tight text-navy dark:text-slate-100">
                          {group.label}
                        </div>
                        <div className={`text-[10px] truncate mt-0.5 leading-tight ${
                          isActive ? 'text-purple-900 dark:text-purple-300 font-bold' : 'text-slate-500 dark:text-slate-400 font-normal'
                        }`}>
                          {group.sublabel}
                        </div>
                      </div>
                    )}
                  </div>

                  {!isCollapsed && group.badge && (
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border shadow-2xs whitespace-nowrap ${group.badgeBg}`}>
                      {group.badge}
                    </span>
                  )}

                  {isCollapsed && isActive && (
                    <span className="absolute right-1.5 top-1/2 -translate-y-1/2 w-2 h-6 rounded-full bg-[#7C3AED] shadow-glow-lavender"></span>
                  )}
                </button>
              );
            }

            // It's a grouped expandable section (Academics, Attendance, Quality & NPD, Admin & Reports)
            return (
              <div key={group.id} className="space-y-1">
                <button
                  onClick={() => {
                    if (isCollapsed) {
                      onToggleCollapse();
                      setExpandedGroups(prev => ({ ...prev, [group.id]: true }));
                    } else {
                      toggleGroup(group.id);
                    }
                  }}
                  title={isCollapsed ? `${group.emoji} ${group.label} (${group.subItems?.length} items)` : undefined}
                  className={`w-full text-left flex items-center transition-all duration-200 rounded-2.5xl group relative pop-btn ${
                    isCollapsed ? 'justify-center p-2.5' : 'justify-between px-3 py-2.5'
                  } ${
                    isGroupActive
                      ? 'bg-purple-100/70 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 border border-purple-200/80 dark:border-purple-800/80 font-bold'
                      : 'hover:bg-purple-50/50 dark:hover:bg-slate-800/50 text-navy dark:text-slate-300 font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-sm transition-transform duration-200 group-hover:scale-110 shadow-xs ${
                        isGroupActive
                          ? 'bg-purple-600 text-white shadow-pastel-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span>{group.emoji}</span>
                    </div>

                    {!isCollapsed && (
                      <div className="truncate">
                        <div className="text-xs truncate font-extrabold leading-tight text-navy dark:text-slate-100 flex items-center gap-1.5">
                          <span>{group.label}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-purple-100/80 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-black">
                            {group.subItems?.length}
                          </span>
                        </div>
                        <div className="text-[10px] truncate mt-0.5 leading-tight text-slate-500 dark:text-slate-400 font-normal">
                          {group.sublabel}
                        </div>
                      </div>
                    )}
                  </div>

                  {!isCollapsed && (
                    <div className="flex items-center gap-1">
                      <ChevronDown
                        className={`w-4 h-4 text-purple-600 dark:text-purple-400 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  )}

                  {isCollapsed && isGroupActive && (
                    <span className="absolute right-1.5 top-1/2 -translate-y-1/2 w-2 h-6 rounded-full bg-[#7C3AED] shadow-glow-lavender"></span>
                  )}
                </button>

                {/* Submenu Items (Smart Expandable Section) */}
                {!isCollapsed && isExpanded && group.subItems && (
                  <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-purple-200 dark:border-purple-800/60 ml-4 animate-in fade-in duration-200">
                    {group.subItems.map(item => {
                      const isSubActive = currentSection === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => onSelectSection(item.id)}
                          className={`w-full text-left flex items-center justify-between px-2.5 py-1.5 rounded-2xl text-xs transition-all pop-btn ${
                            isSubActive
                              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black shadow-md'
                              : 'hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 font-medium'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-xs">{item.emoji}</span>
                            <span className="truncate">{item.label}</span>
                          </div>
                          {item.badge && (
                            <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-md ${
                              isSubActive 
                                ? 'bg-white/20 text-white' 
                                : item.badgeBg || 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      {/* Bottom Footer Info with Gamification Stars */}
      <div className="p-3 border-t border-[#C4B5FD]/30 dark:border-slate-800 bg-gradient-to-b from-white to-[#FAF8FF] dark:from-[#0B1120] dark:to-[#0F172A]">
        {!isCollapsed ? (
          <div className="p-3 rounded-2.5xl bg-gradient-to-r from-[#FFFBEB] via-[#FAF8FF] to-[#F0FDF4] dark:from-slate-900 dark:via-purple-950/20 dark:to-slate-900 border border-[#FDE68A]/80 dark:border-slate-700 shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-black text-navy dark:text-slate-200">
              <span className="flex items-center gap-1.5 text-[#065F46] dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                MIS Live
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-slate-700 font-black">
                AY 2026-27
              </span>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-200/50 dark:border-slate-700 text-[10px]">
              <span className="flex items-center gap-1 text-amber-700 dark:text-amber-400 font-extrabold">
                <Star className="w-3 h-3 fill-[#F59E0B] text-[#F59E0B]" />
                {stars.toLocaleString()} Stars
              </span>
              <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-extrabold">
                <Flame className="w-3 h-3 fill-[#EF4444] text-[#EF4444]" />
                {streakDays}d Streak
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-1">
            <div className="w-3 h-3 rounded-full bg-[#10B981] mx-auto animate-pulse" title="MIS Live"></div>
          </div>
        )}
      </div>
    </aside>
  );
};
