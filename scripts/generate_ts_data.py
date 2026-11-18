import json
import os

with open(r'C:\Users\M MARISAKTHI\.gemini\antigravity\brain\742a125c-4b99-47f5-8732-1c3390d289a6\scratch\cleaned_school_data.json', 'r', encoding='utf-8') as f:
    raw_weeks = json.load(f)

# Build TypeScript file
ts_code = """// Authentic MIS School Performance Dataset from The NEST School, Chennai
// Generated from 'Weekly MIS by Coordinators for review by HoA and HoS on Monday'

export interface ProgrammeCoordinator {
  id: 'EYP' | 'PYP' | 'CIE_LS' | 'CIE_IGCSE_AS';
  name: string;
  fullName: string;
  coordinator: string;
  grades: string;
  color: string;
  badgeBg: string;
}

export const PROGRAMMES: ProgrammeCoordinator[] = [
  {
    id: 'EYP',
    name: 'EYP',
    fullName: 'Early Years Programme',
    coordinator: 'Praseeda Pradeep',
    grades: 'Pre-KG, LKG, UKG',
    color: '#0d9488', // teal-600
    badgeBg: 'bg-teal-50 text-teal-700 border-teal-200'
  },
  {
    id: 'PYP',
    name: 'PYP',
    fullName: 'Primary Years Programme',
    coordinator: 'Priyanga Rajan',
    grades: 'Grades 1 to 5',
    color: '#2563eb', // royal-600
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'CIE_LS',
    name: 'CIE LS',
    fullName: 'Cambridge Lower Secondary',
    coordinator: 'Bhagyashree Ganesh',
    grades: 'Grades 6 to 8',
    color: '#0284c7', // sky-600
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200'
  },
  {
    id: 'CIE_IGCSE_AS',
    name: 'CIE IGCSE/AS',
    fullName: 'Cambridge IGCSE & International AS Level',
    coordinator: 'Shyamala Rupavahini',
    grades: 'Grades 9, 10 & AS Level',
    color: '#4f46e5', // indigo-600
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  }
];

export interface MetricItem {
  row: number;
  s_no: string;
  description: string;
  eyp: number | string | null;
  pyp: number | string | null;
  cie_ls: number | string | null;
  cie_igcse_as: number | string | null;
  comments: {
    eyp: string | null;
    pyp: string | null;
    cie_ls: string | null;
    cie_igcse_as: string | null;
    general: string | null;
  };
}

export interface SectionData {
  id: string;
  code: string;
  name: string;
  metrics: MetricItem[];
}

export interface WeekMIS {
  week_index: number;
  week_label: string;
  sections: SectionData[];
}

export const WEEKS_DATA: WeekMIS[] = """ + json.dumps(raw_weeks, indent=2, ensure_ascii=False) + """;

// Key Performance Indicator thresholds and RAG status evaluator
export type RAGStatus = 'green' | 'amber' | 'red';

export function getRAGStatus(metricName: string, value: number | string | null): { status: RAGStatus; label: string } {
  if (value === null || value === 'NA' || value === undefined) {
    return { status: 'green', label: 'Optimal / Not Applicable' };
  }
  
  const num = typeof value === 'number' ? value : parseFloat(String(value));
  if (isNaN(num)) return { status: 'green', label: 'Normal' };

  const lower = metricName.toLowerCase();

  // Attendance %
  if (lower.includes('overall student attendance') || lower.includes('attendance %')) {
    if (num >= 90) return { status: 'green', label: 'Strong (≥90%)' };
    if (num >= 80) return { status: 'amber', label: 'Moderate (80-89%)' };
    return { status: 'red', label: 'Attention Required (<80%)' };
  }

  // Teacher observations
  if (lower.includes('average score of teachers class observation')) {
    if (num >= 70) return { status: 'green', label: 'Good (≥70%)' };
    if (num >= 60) return { status: 'amber', label: 'Satisfactory (60-69%)' };
    return { status: 'red', label: 'Action Needed (<60%)' };
  }

  // NPD score (out of 5)
  if (lower.includes('npd score')) {
    if (num >= 3.5) return { status: 'green', label: 'High Progress' };
    if (num >= 2.5) return { status: 'amber', label: 'Average' };
    return { status: 'red', label: 'Low (<2.5)' };
  }

  // Incomplete planners
  if (lower.includes('incomplete planners')) {
    if (num === 0) return { status: 'green', label: 'All Planners Complete' };
    if (num <= 5) return { status: 'amber', label: `${num} Pending Recommendations` };
    return { status: 'red', label: `${num} Incomplete Planners` };
  }

  // Syllabus deviation > 1 week
  if (lower.includes('deviation')) {
    if (num === 0) return { status: 'green', label: 'On Schedule' };
    if (num <= 2) return { status: 'amber', label: `${num} Minor Deviation` };
    return { status: 'red', label: `${num} Large Deviations (>1 wk)` };
  }

  // Late/Non-submission HR tasks
  if (lower.includes('non-submission')) {
    if (num === 0) return { status: 'green', label: '100% On-time' };
    if (num <= 10) return { status: 'amber', label: `${num} Delays` };
    return { status: 'red', label: `${num} Late/Non-submissions` };
  }

  // Teachers >3 days off
  if (lower.includes('teachers that have taken more than 3 days off')) {
    if (num === 0) return { status: 'green', label: 'No Prolonged Leaves' };
    if (num <= 1) return { status: 'amber', label: '1 Teacher On Leave' };
    return { status: 'red', label: `${num} Teachers On Extended Leave` };
  }

  // Teachers late >3 occasions
  if (lower.includes('teachers that have been late on more than 3')) {
    if (num === 0) return { status: 'green', label: 'Punctual' };
    if (num <= 2) return { status: 'amber', label: `${num} Punctuality Alerts` };
    return { status: 'red', label: `${num} Frequent Delays` };
  }

  // SEN / Academic decline
  if (lower.includes('declined and not improved') || lower.includes('not showing improvement')) {
    if (num === 0) return { status: 'green', label: 'All Improving' };
    if (num <= 3) return { status: 'amber', label: `${num} Under Monitoring` };
    return { status: 'red', label: `${num} High Support Required` };
  }

  // General issues count (unresolved, parent intervention, bullying, etc.)
  if (num === 0) return { status: 'green', label: 'Clear (0)' };
  if (num <= 2) return { status: 'amber', label: `Warning (${num})` };
  return { status: 'red', label: `Critical Issue (${num})` };
}

// Attendance trends extracted from comments and metrics across all 7 weeks
export const ATTENDANCE_TRENDS = [
  { week: '21-26 Sep', EYP: 90.0, PYP: 86.0, CIE_LS: 85.0, CIE_IGCSE_AS: 96.0, SchoolAvg: 89.25 },
  { week: '28 Sep-1 Oct', EYP: 89.0, PYP: 89.0, CIE_LS: 88.5, CIE_IGCSE_AS: 90.2, SchoolAvg: 89.18 },
  { week: '5-10 Oct', EYP: 83.4, PYP: 85.0, CIE_LS: 89.2, CIE_IGCSE_AS: 88.0, SchoolAvg: 86.40 },
  { week: '12-22 Oct', EYP: 83.0, PYP: 81.6, CIE_LS: 87.5, CIE_IGCSE_AS: 85.0, SchoolAvg: 84.28 },
  { week: '26-30 Oct', EYP: 78.1, PYP: 88.1, CIE_LS: 95.5, CIE_IGCSE_AS: 80.0, SchoolAvg: 85.43 },
  { week: '3-6 Nov', EYP: 83.5, PYP: 89.9, CIE_LS: 97.3, CIE_IGCSE_AS: 87.5, SchoolAvg: 89.55 },
  { week: '10-13 Nov', EYP: 84.0, PYP: 79.3, CIE_LS: 96.0, CIE_IGCSE_AS: 88.0, SchoolAvg: 86.83 },
];

// PYP Daily Attendance Records from MIS comments (Week of Oct 26-30)
export const PYP_DAILY_ATTENDANCE = [
  { day: 'Monday', attendance: 80.92, notes: 'Post-weekend drop' },
  { day: 'Tuesday', attendance: 87.62, notes: 'Steady improvement' },
  { day: 'Wednesday', attendance: 90.72, notes: 'Mid-week peak' },
  { day: 'Thursday', attendance: 92.78, notes: 'Highest weekly turnout' },
  { day: 'Friday', attendance: 88.65, notes: 'Strong engagement' },
];

// Learner Support / SEN Case Studies & Intervention Log (from authentic sheet notes)
export interface SupportCase {
  id: string;
  studentName: string;
  grade: string;
  programme: 'EYP' | 'PYP' | 'CIE_LS' | 'CIE_IGCSE_AS';
  category: 'Academic Performance' | 'Cognitive & Emotional' | 'Behavioural / Peer Dynamics' | 'SEN Plan Met';
  status: 'In Progress' | 'Active Monitoring' | 'Parent Consulted' | 'Resolved';
  actionTaken: string;
  coordinator: string;
  reportedDate: string;
}

export const AUTHENTIC_SUPPORT_CASES: SupportCase[] = [
  {
    id: 'CASE-01',
    studentName: 'Arnav Vinayak',
    grade: 'Grade 7',
    programme: 'CIE_LS',
    category: 'Behavioural / Peer Dynamics',
    status: 'Parent Consulted',
    actionTaken: 'Parent meeting held regarding peer interactions and classroom conduct; mentoring plan active with fortnightly review.',
    coordinator: 'Bhagyashree Ganesh / Pooja',
    reportedDate: '22-Sep-2026'
  },
  {
    id: 'CASE-02',
    studentName: 'Anjana',
    grade: 'Grade 7',
    programme: 'CIE_LS',
    category: 'Behavioural / Peer Dynamics',
    status: 'Parent Consulted',
    actionTaken: 'Counselling session completed with school counsellor; emotional regulation and positive peer engagement strategies shared.',
    coordinator: 'Bhagyashree Ganesh / Pooja',
    reportedDate: '22-Sep-2026'
  },
  {
    id: 'CASE-03',
    studentName: 'Mikail',
    grade: 'Grade 3',
    programme: 'PYP',
    category: 'Behavioural / Peer Dynamics',
    status: 'In Progress',
    actionTaken: 'Parent intervention scheduled; focused classroom observation in progress for disruptive tendencies.',
    coordinator: 'Priyanga Rajan / Pooja',
    reportedDate: '28-Oct-2026'
  },
  {
    id: 'CASE-04',
    studentName: 'Ritesh',
    grade: 'Grade 8',
    programme: 'CIE_LS',
    category: 'Academic Performance',
    status: 'In Progress',
    actionTaken: 'Remedial subject support initiated for Science and Mathematics; targeted worksheets provided.',
    coordinator: 'Bhagyashree Ganesh',
    reportedDate: '22-Sep-2026'
  },
  {
    id: 'CASE-05',
    studentName: 'Vidyuth',
    grade: 'Grade 6',
    programme: 'CIE_LS',
    category: 'Cognitive & Emotional',
    status: 'Active Monitoring',
    actionTaken: 'SEN target plan revised; 1-on-1 differentiated learning support during study periods.',
    coordinator: 'Bhagyashree Ganesh / Pooja',
    reportedDate: '13-Oct-2026'
  },
  {
    id: 'CASE-06',
    studentName: 'Avishka & Mehr',
    grade: 'Grade 6/7',
    programme: 'CIE_LS',
    category: 'Academic Performance',
    status: 'Active Monitoring',
    actionTaken: 'Mentoring sessions conducted; examination preparation and study schedule alignment for SA1.',
    coordinator: 'Bhagyashree Ganesh',
    reportedDate: '13-Oct-2026'
  },
  {
    id: 'CASE-07',
    studentName: 'Kayal, Pranav & Yasothaa',
    grade: 'Grades 9 & 10',
    programme: 'CIE_IGCSE_AS',
    category: 'Academic Performance',
    status: 'In Progress',
    actionTaken: 'Subject-specific booster modules in Economics and Chemistry; weekly progress tracking.',
    coordinator: 'Shyamala Rupavahini',
    reportedDate: '29-Sep-2026'
  },
  {
    id: 'CASE-08',
    studentName: 'Ishaani & Nazhini',
    grade: 'EYP UKG',
    programme: 'EYP',
    category: 'Cognitive & Emotional',
    status: 'Active Monitoring',
    actionTaken: 'Early childhood phonics and foundational number concept reinforcement with homeroom facilitator.',
    coordinator: 'Praseeda Pradeep',
    reportedDate: '22-Sep-2026'
  },
  {
    id: 'CASE-09',
    studentName: 'Nirav, Lian & Lakhagra',
    grade: 'EYP LKG',
    programme: 'EYP',
    category: 'Cognitive & Emotional',
    status: 'In Progress',
    actionTaken: 'Sensory integration and speech articulation activities integrated into daily routine.',
    coordinator: 'Praseeda Pradeep',
    reportedDate: '30-Sep-2026'
  }
];

// Syllabus Progression Subject Breakdown (from comments)
export interface SubjectDeviation {
  programme: 'EYP' | 'PYP' | 'CIE_LS' | 'CIE_IGCSE_AS';
  grade: string;
  subject: string;
  teacher: string;
  deviationWeeks: number;
  reason: string;
  catchUpPlan: string;
  status: 'Critical' | 'Moderate' | 'Resolved';
}

export const AUTHENTIC_SUBJECT_DEVIATIONS: SubjectDeviation[] = [
  {
    programme: 'CIE_IGCSE_AS',
    grade: 'AS Level',
    subject: 'Chemistry & Physics',
    teacher: 'Specialist Faculty',
    deviationWeeks: 1.5,
    reason: 'Rigorous laboratory practical sessions and complex quantum atomic theory unit extension.',
    catchUpPlan: 'Extra 45-minute zero-period laboratory sessions scheduled on Tuesdays and Thursdays.',
    status: 'Moderate'
  },
  {
    programme: 'CIE_IGCSE_AS',
    grade: 'Grade 10',
    subject: 'Economics & Business',
    teacher: 'Senior Commerce Faculty',
    deviationWeeks: 2.0,
    reason: 'Case study analysis and SA1 pre-board revision cycle integration.',
    catchUpPlan: 'Curated self-paced asynchronous flipped classroom modules provided via LMS.',
    status: 'Critical'
  },
  {
    programme: 'CIE_LS',
    grade: 'Grades 6 & 7',
    subject: 'Second Language (Hindi & French)',
    teacher: 'Languages Faculty',
    deviationWeeks: 1.2,
    reason: 'Grammar conjugation mastery and assembly presentation rehearsals.',
    catchUpPlan: 'Combined interactive reading circles and targeted vocabulary drills during homeroom.',
    status: 'Moderate'
  },
  {
    programme: 'PYP',
    grade: 'Grade 1 (3 Sections: A, B, C)',
    subject: 'Mathematics',
    teacher: 'Shruthi & Homeroom Team',
    deviationWeeks: 1.0,
    reason: 'Concrete foundational manipulative concepts required extra reinforcement.',
    catchUpPlan: 'Integrated math centers into inquiry unit (UOI) for experiential numeracy application.',
    status: 'Moderate'
  },
  {
    programme: 'PYP',
    grade: 'Grade 5',
    subject: 'Mathematics & UOI',
    teacher: 'Joyce & Manjula',
    deviationWeeks: 1.0,
    reason: 'Exhibition planning orientation and scientific inquiry data collection phase.',
    catchUpPlan: 'Block scheduling implemented to combine Math data handling with UOI inquiry.',
    status: 'Resolved'
  }
];

// Classroom Observations Data Summary
export const CLASSROOM_OBSERVATIONS_LOG = [
  { programme: 'EYP', observedTeachers: 12, avgScore: 76.6, pending: 0, below50: 0, strongAreas: 'Inquiry questioning, warm classroom environment', focusAreas: 'Transitions between learning stations' },
  { programme: 'PYP', observedTeachers: 24, avgScore: 67.2, pending: 0, below50: 0, strongAreas: 'Transdisciplinary connections, collaborative group work', focusAreas: 'Formative assessment rubrics sharing' },
  { programme: 'CIE LS', observedTeachers: 14, avgScore: 60.1, pending: 0, below50: 0, strongAreas: 'Subject depth, conceptual clarity', focusAreas: 'Student-led inquiry and active participation' },
  { programme: 'CIE IGCSE/AS', observedTeachers: 18, avgScore: 66.0, pending: 0, below50: 0, strongAreas: 'Past-paper exam rubrics, analytical rigor', focusAreas: 'Differentiated pacing for mixed-ability cohorts' },
];

// Pedagogical Development (NPD) Core Scores
export const NPD_CORE_SCORES = [
  { programme: 'EYP', score: 3.0, maxScore: 5.0, coordinator: 'Praseeda Pradeep', implementationNotes: 'Second Saturday PD reflections on Reggio Emilia inquiry pedagogy recorded and reviewed.' },
  { programme: 'PYP', score: 4.0, maxScore: 5.0, coordinator: 'Priyanga Rajan', implementationNotes: 'Global collaboration initiated with partner IB/Cambridge schools in Dhaka and Oman.' },
  { programme: 'CIE LS', score: 3.0, maxScore: 5.0, coordinator: 'Bhagyashree Ganesh', implementationNotes: 'Transferable skills rubric deployed across science and humanities projects.' },
  { programme: 'CIE IGCSE/AS', score: 3.5, maxScore: 5.0, coordinator: 'Shyamala Rupavahini', implementationNotes: 'Standardized assessment calibration and mark scheme moderation executed.' },
];
"""

out_ts_path = r'C:\Users\M MARISAKTHI\.gemini\antigravity\scratch\school-performance-dashboard\src\data\schoolData.ts'
os.makedirs(os.path.dirname(out_ts_path), exist_ok=True)
with open(out_ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_code)

print("Saved src/data/schoolData.ts successfully!")
