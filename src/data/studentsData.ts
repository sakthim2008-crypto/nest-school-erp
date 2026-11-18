export interface SubjectGrade {
  subject: string;
  score: number;
  maxScore: number;
  grade: string;
  term: string;
  remarks: string;
}

export interface MonthlyAttendance {
  month: string;
  workingDays: number;
  presentDays: number;
  absentDays: number;
  lateDays: number;
  percentage: number;
}

export interface Competency {
  domain: string;
  competency: string;
  level: 'Mastered' | 'Proficient' | 'Developing' | 'Emerging';
  scorePercent: number;
  notes: string;
}

export interface StudentProfile {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: 'Male' | 'Female';
  dob: string;
  grade: string;
  section: string;
  classAndSection: string;
  rollNumber: number;
  academicYear: string;
  admissionDate: string;
  parentName: string;
  parentContact: string;
  parentEmail: string;
  address: string;
  bloodGroup: string;
  house: string;
  senStatus?: string;
  senConfidentialNotes?: string;
  overallGpa: number;
  overallPercentage: number;
  academicRank: number;
  subjectGrades: SubjectGrade[];
  overallAttendancePercentage: number;
  monthlyAttendance: MonthlyAttendance[];
  competencies: Competency[];
  avatar: string;
}

export const AUTHENTIC_STUDENTS: StudentProfile[] = [
  {
    id: "s1",
    studentId: "NEST-2025-001",
    firstName: "Aarav",
    lastName: "Patel",
    fullName: "Aarav Patel",
    gender: "Male",
    dob: "2009-04-12",
    grade: "Grade 10",
    section: "A",
    classAndSection: "Grade 10-A",
    rollNumber: 1,
    academicYear: "2026-2027",
    admissionDate: "2020-06-15",
    parentName: "Vikram Patel",
    parentContact: "+91 98401 23456",
    parentEmail: "vikram.patel@example.com",
    address: "42 Harrington Road, Chetpet, Chennai",
    bloodGroup: "O+",
    house: "Ruby Red",
    senStatus: "Gifted & Talented",
    senConfidentialNotes: "Advanced analytical capabilities; recommended for accelerated STEM and Olympiad training.",
    overallGpa: 3.92,
    overallPercentage: 94.5,
    academicRank: 1,
    subjectGrades: [
      { subject: "Mathematics", score: 98, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Exceptional problem-solving skills" },
      { subject: "Science", score: 95, maxScore: 100, grade: "A*", term: "Term 1", remarks: "High proficiency in physics and chemistry labs" },
      { subject: "English Literature", score: 91, maxScore: 100, grade: "A", term: "Term 1", remarks: "Strong critical analysis essays" },
      { subject: "Social Studies", score: 93, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Active contributor in historical debates" },
      { subject: "Computer Science", score: 99, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Built impressive Python automation projects" },
      { subject: "Art & Design", score: 91, maxScore: 100, grade: "A", term: "Term 1", remarks: "Creative perspective in architectural sketches" }
    ],
    overallAttendancePercentage: 96.8,
    monthlyAttendance: [
      { month: "Aug", workingDays: 22, presentDays: 22, absentDays: 0, lateDays: 0, percentage: 100 },
      { month: "Sep", workingDays: 21, presentDays: 20, absentDays: 1, lateDays: 1, percentage: 95.2 },
      { month: "Oct", workingDays: 23, presentDays: 22, absentDays: 1, lateDays: 0, percentage: 95.6 },
      { month: "Nov", workingDays: 20, presentDays: 19, absentDays: 1, lateDays: 0, percentage: 95.0 }
    ],
    competencies: [
      { domain: "Critical Inquiry", competency: "Hypothesis Formulation & Testing", level: "Mastered", scorePercent: 96, notes: "Consistently demonstrates rigorous scientific method." },
      { domain: "Mathematical Modeling", competency: "Algebraic & Geometric Proofs", level: "Mastered", scorePercent: 98, notes: "Solves complex non-routine equations with ease." },
      { domain: "Digital Fluency", competency: "Algorithmic Thinking & Coding", level: "Mastered", scorePercent: 99, notes: "Commands core computer science concepts thoroughly." },
      { domain: "Communication", competency: "Persuasive Writing & Rhetoric", level: "Proficient", scorePercent: 91, notes: "Articulate presentations with structured arguments." }
    ],
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "s2",
    studentId: "NEST-2025-002",
    firstName: "Sophia",
    lastName: "Chen",
    fullName: "Sophia Chen",
    gender: "Female",
    dob: "2010-02-18",
    grade: "Grade 9",
    section: "A",
    classAndSection: "Grade 9-A",
    rollNumber: 2,
    academicYear: "2026-2027",
    admissionDate: "2021-04-10",
    parentName: "David Chen",
    parentContact: "+91 98402 34567",
    parentEmail: "d.chen@example.com",
    address: "18 Boat Club Road, RA Puram, Chennai",
    bloodGroup: "A+",
    house: "Sapphire Blue",
    senStatus: "None",
    overallGpa: 3.88,
    overallPercentage: 92.4,
    academicRank: 2,
    subjectGrades: [
      { subject: "Mathematics", score: 92, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Strong geometric proofs" },
      { subject: "Science", score: 96, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Top score in biology research project" },
      { subject: "English Literature", score: 94, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Fluent vocabulary and eloquent prose" },
      { subject: "Social Studies", score: 88, maxScore: 100, grade: "A", term: "Term 1", remarks: "Insightful comparative geography" },
      { subject: "Computer Science", score: 91, maxScore: 100, grade: "A", term: "Term 1", remarks: "Solid web design foundations" },
      { subject: "Art & Design", score: 94, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Masterful watercolor technique" }
    ],
    overallAttendancePercentage: 98.2,
    monthlyAttendance: [
      { month: "Aug", workingDays: 22, presentDays: 22, absentDays: 0, lateDays: 0, percentage: 100 },
      { month: "Sep", workingDays: 21, presentDays: 21, absentDays: 0, lateDays: 0, percentage: 100 },
      { month: "Oct", workingDays: 23, presentDays: 22, absentDays: 1, lateDays: 0, percentage: 95.6 },
      { month: "Nov", workingDays: 20, presentDays: 20, absentDays: 0, lateDays: 0, percentage: 100 }
    ],
    competencies: [
      { domain: "Scientific Literacy", competency: "Empirical Investigation", level: "Mastered", scorePercent: 96, notes: "Exemplary lab hygiene and methodical reporting." },
      { domain: "Creative Expression", competency: "Visual Communication", level: "Mastered", scorePercent: 94, notes: "Exhibited artwork at inter-school showcase." }
    ],
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "s3",
    studentId: "NEST-2025-003",
    firstName: "Tariq",
    lastName: "Al-Mansoor",
    fullName: "Tariq Al-Mansoor",
    gender: "Male",
    dob: "2011-09-05",
    grade: "Grade 7",
    section: "B",
    classAndSection: "Grade 7-B",
    rollNumber: 3,
    academicYear: "2026-2027",
    admissionDate: "2022-06-01",
    parentName: "Omar Al-Mansoor",
    parentContact: "+91 98403 45678",
    parentEmail: "omar.mansoor@example.com",
    address: "77 Kothari Road, Nungambakkam, Chennai",
    bloodGroup: "B+",
    house: "Emerald Green",
    senStatus: "Remedial Math Support",
    senConfidentialNotes: "Benefiting from peer tutoring and manipulative-based algebra drills; showing rapid 15% progression.",
    overallGpa: 3.42,
    overallPercentage: 83.0,
    academicRank: 12,
    subjectGrades: [
      { subject: "Mathematics", score: 76, maxScore: 100, grade: "B", term: "Term 1", remarks: "Positive growth in fractions and ratios" },
      { subject: "Science", score: 85, maxScore: 100, grade: "A", term: "Term 1", remarks: "Enthusiastic experimental participant" },
      { subject: "English Literature", score: 88, maxScore: 100, grade: "A", term: "Term 1", remarks: "Expressive oral storytelling" },
      { subject: "Social Studies", score: 84, maxScore: 100, grade: "A", term: "Term 1", remarks: "Good grasp of ancient civilizations" },
      { subject: "Computer Science", score: 89, maxScore: 100, grade: "A", term: "Term 1", remarks: "Quick learner in Scratch block coding" },
      { subject: "Art & Design", score: 79, maxScore: 100, grade: "B", term: "Term 1", remarks: "Steady clay sculpting improvement" }
    ],
    overallAttendancePercentage: 94.1,
    monthlyAttendance: [
      { month: "Aug", workingDays: 22, presentDays: 21, absentDays: 1, lateDays: 0, percentage: 95.5 },
      { month: "Sep", workingDays: 21, presentDays: 20, absentDays: 1, lateDays: 1, percentage: 95.2 },
      { month: "Oct", workingDays: 23, presentDays: 21, absentDays: 2, lateDays: 0, percentage: 91.3 },
      { month: "Nov", workingDays: 20, presentDays: 19, absentDays: 1, lateDays: 0, percentage: 95.0 }
    ],
    competencies: [
      { domain: "Collaboration", competency: "Team Project Execution", level: "Proficient", scorePercent: 88, notes: "Reliable team player who supports peers." },
      { domain: "Resilience", competency: "Iterative Learning", level: "Proficient", scorePercent: 85, notes: "Demonstrates persistence when working through challenging topics." }
    ],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "s4",
    studentId: "NEST-2025-004",
    firstName: "Maya",
    lastName: "Sharma",
    fullName: "Maya Sharma",
    gender: "Female",
    dob: "2013-11-20",
    grade: "Grade 5",
    section: "A",
    classAndSection: "Grade 5-A",
    rollNumber: 4,
    academicYear: "2026-2027",
    admissionDate: "2021-06-15",
    parentName: "Sanjay Sharma",
    parentContact: "+91 98404 56789",
    parentEmail: "sanjay.sharma@example.com",
    address: "12 Poes Garden, Chennai",
    bloodGroup: "AB+",
    house: "Topaz Yellow",
    senStatus: "None",
    overallGpa: 3.95,
    overallPercentage: 96.2,
    academicRank: 1,
    subjectGrades: [
      { subject: "Mathematics", score: 99, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Mental math champion" },
      { subject: "Science", score: 97, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Inquisitive nature in environmental units" },
      { subject: "English Literature", score: 95, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Avid reader with high comprehension" },
      { subject: "Social Studies", score: 94, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Engaged in classroom government simulations" },
      { subject: "Computer Science", score: 96, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Excels in logic puzzles" },
      { subject: "Art & Design", score: 96, maxScore: 100, grade: "A*", term: "Term 1", remarks: "Vibrant mixed media creations" }
    ],
    overallAttendancePercentage: 97.6,
    monthlyAttendance: [
      { month: "Aug", workingDays: 22, presentDays: 22, absentDays: 0, lateDays: 0, percentage: 100 },
      { month: "Sep", workingDays: 21, presentDays: 20, absentDays: 1, lateDays: 0, percentage: 95.2 },
      { month: "Oct", workingDays: 23, presentDays: 23, absentDays: 0, lateDays: 0, percentage: 100 },
      { month: "Nov", workingDays: 20, presentDays: 19, absentDays: 1, lateDays: 0, percentage: 95.0 }
    ],
    competencies: [
      { domain: "Leadership", competency: "Student Council & Mentorship", level: "Mastered", scorePercent: 98, notes: "Leads with empathy and organization." },
      { domain: "Critical Inquiry", competency: "Questioning & Conceptual Synthesis", level: "Mastered", scorePercent: 97, notes: "Generates insightful interdisciplinary inquiries." }
    ],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
  }
];
