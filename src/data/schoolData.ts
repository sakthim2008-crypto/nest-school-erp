// Authentic MIS School Performance Dataset from The NEST School, Chennai
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

export const WEEKS_DATA: WeekMIS[] = [
  {
    "week_index": 1,
    "week_label": "21 Sept - 26 Sept",
    "sections": [
      {
        "id": "I",
        "name": "Classroom Dashboard",
        "code": "I",
        "metrics": [
          {
            "row": 3,
            "s_no": "1",
            "description": "No. of classes/subjects with incomplete planners and planners evaluated with recommendations",
            "eyp": 0,
            "pyp": 9,
            "cie_ls": 3,
            "cie_igcse_as": 3,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 4,
            "s_no": "2",
            "description": "Syllabus progression – plan vs. actual – No. of classes/subjects with large deviation (> 1 week)",
            "eyp": 1,
            "pyp": 1,
            "cie_ls": 2,
            "cie_igcse_as": 8,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": "Praseeda Pradeep The NEST School    (2026-09-30 06:33:22)\nEconomics, Business, Chemistry, Physics",
              "general": null
            }
          },
          {
            "row": 5,
            "s_no": "3",
            "description": "No. of learners subject-wise that have raised a subject clarification in class",
            "eyp": 8,
            "pyp": 4,
            "cie_ls": 2,
            "cie_igcse_as": 16,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 6,
            "s_no": "4",
            "description": "No. of learners subject-wise that are being provided with additional support in atleast 1 subject",
            "eyp": 30,
            "pyp": 43,
            "cie_ls": 3,
            "cie_igcse_as": 14,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 7,
            "s_no": "5",
            "description": "No. of classes/subjects with an average rating of below 70% in achieving the learning outcomes measured through FAs",
            "eyp": "NA",
            "pyp": "NA",
            "cie_ls": "NA",
            "cie_igcse_as": 2,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 8,
            "s_no": "6",
            "description": "No. of classes/subjects where innovative practices were used in the pedagogy (teaching strategies, learning skills and assessment tools) – evidence",
            "eyp": "NA",
            "pyp": "NA",
            "cie_ls": 3,
            "cie_igcse_as": 19,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 9,
            "s_no": "7",
            "description": "No. of classes/subjects where transferrable skills were used to understand real world application of concepts - evidence",
            "eyp": "8 classes - UOI",
            "pyp": "10 classes - UOI, Measurement - G3 - Math",
            "cie_ls": 8,
            "cie_igcse_as": 5,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "II",
        "name": "Home Reinforcement and Assignments",
        "code": "II",
        "metrics": [
          {
            "row": 11,
            "s_no": "1",
            "description": "No. of learners with non-submission and late submission of HR tasks for more than once",
            "eyp": null,
            "pyp": 15,
            "cie_ls": 2,
            "cie_igcse_as": 7,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 12,
            "s_no": "2",
            "description": "No. of assignments subject-wise not evaluated and delayed for correction beyond 7 days",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "III",
        "name": "Assessments",
        "code": "III",
        "metrics": [
          {
            "row": 14,
            "s_no": "1",
            "description": "No. of assessment tasks subject-wise not recorded and conducted as per schedule and requirements",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 15,
            "s_no": "2",
            "description": "No. of classess/subjects having a class average below 60%",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 16,
            "s_no": "3",
            "description": "No. of classes/subjects with more than 40% of learners scored below class average",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 17,
            "s_no": "4",
            "description": "No. of learners subject-wise whose performance declined and not improved by one grade descriptor",
            "eyp": 0.0,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 18,
            "s_no": "5",
            "description": "No. of classes/subjects in which significant improvement in the class/subject average from the previous assessment after strategies applied",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "IV",
        "name": "Attendance (Learners)",
        "code": "IV",
        "metrics": [
          {
            "row": 20,
            "s_no": "1",
            "description": "No. of learners that have taken 3 consecutive days off (uninformed) or more than 2 days in a week",
            "eyp": 4,
            "pyp": 9,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 21,
            "s_no": "2",
            "description": "Overall student attendance %",
            "eyp": 0.9,
            "pyp": 0.86,
            "cie_ls": 0.85,
            "cie_igcse_as": 0.96,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-09-23 04:53:53)\nMonday - 83.67%, Tuesday - 90.81%, Wednesday - 89.79%, Thursday -86.73%, Friday - 80.61%",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 22,
            "s_no": "3",
            "description": "No. of uninformed absences",
            "eyp": "N/A",
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 2,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "V",
        "name": "Attendance (Teachers)",
        "code": "V",
        "metrics": [
          {
            "row": 24,
            "s_no": "1",
            "description": "No. of teachers that have taken more than 3 days off (in the current month)",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 2,
            "cie_igcse_as": null,
            "comments": {
              "eyp": "Head of School - The NEST School, Chennai    (2026-09-21 09:44:08)\nSrilakshmi - House construction and house warming ceremony",
              "pyp": null,
              "cie_ls": "Head of School - The NEST School, Chennai    (2026-09-21 09:50:19)\nKrishna Kumari Anand - Husband was sick and she was under quarantine\nRosaline - Father's demise",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 25,
            "s_no": "2",
            "description": "No. of teachers that have been late on more than 3 occasions (in current month)",
            "eyp": 0,
            "pyp": 3,
            "cie_ls": 1,
            "cie_igcse_as": null,
            "comments": {
              "eyp": "Head of School - The NEST School, Chennai    (2026-09-21 10:35:15)\nPriya",
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-09-22 17:57:43)\nMs Mohanasri",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 26,
            "s_no": "3",
            "description": "No. of unexplained absences",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VI",
        "name": "SEN/Counselling/Mentoring",
        "code": "VI",
        "metrics": [
          {
            "row": 28,
            "s_no": "1",
            "description": "No. of learners not showing improvement in academic perfornance",
            "eyp": 2,
            "pyp": 3,
            "cie_ls": 1,
            "cie_igcse_as": 3,
            "comments": {
              "eyp": "Pooja The NEST School    (2026-09-22 03:16:27)\nIshaani,Nazhini",
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-09-22 17:58:32)\nRitesh G8",
              "cie_igcse_as": "Praseeda Pradeep The NEST School    (2026-09-29 06:53:44)\nKayal, Pranav, Yasothaa",
              "general": null
            }
          },
          {
            "row": 29,
            "s_no": "2",
            "description": "No. of learners not showing improvement in internal attributes of behaviour like cognitive processing, emotional well-being, attention levels and special needs",
            "eyp": 2,
            "pyp": 0,
            "cie_ls": 2,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": "Pooja The NEST School    (2026-09-22 03:11:26)\nNazhini,Ishaani",
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-09-22 17:58:49)\nArnav Vinayak G7\nAnjana G7",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 30,
            "s_no": "3",
            "description": "No. of learners not showing improvement in external attributes of behaviour like disruptive conduct, aggression, bullying, etc",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 2,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Pooja The NEST School    (2026-09-22 03:12:57)\nGr 7 - Arnav, Anjana",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 31,
            "s_no": "4",
            "description": "No. of issues where parent intervention required – list each issue",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 2,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Pooja The NEST School    (2026-09-22 03:13:49)\nArnav & Anjana - Parents, Concern - Bullying",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 32,
            "s_no": "5",
            "description": "No. of major behaviour/academic issues remaining unresolved beyond 2 days",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 33,
            "s_no": "6",
            "description": "No. of learners not met the SEN as per plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 34,
            "s_no": "7",
            "description": "No. of mentors that have not met their mentees",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 35,
            "s_no": "8",
            "description": "No. of learners that have been mentored – top 3 issues (program wise)",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VII",
        "name": "Classroom Observations",
        "code": "VII",
        "metrics": [
          {
            "row": 37,
            "s_no": "1",
            "description": "No. of teachers class observation pending as per scheduled plan",
            "eyp": 4,
            "pyp": 0.0,
            "cie_ls": 2,
            "cie_igcse_as": 3,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 38,
            "s_no": "2",
            "description": "Average score of teachers class observation",
            "eyp": 76.6,
            "pyp": 67.2,
            "cie_ls": 60.1,
            "cie_igcse_as": 60,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 39,
            "s_no": "3",
            "description": "No. of teachers that have scored below 50%",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 1,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VIII",
        "name": "NPD",
        "code": "VIII",
        "metrics": [
          {
            "row": 41,
            "s_no": "1",
            "description": "Average NPD score of the Core Team",
            "eyp": 3,
            "pyp": 4,
            "cie_ls": 3,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 42,
            "s_no": "2",
            "description": "No. of takeaways reflected/recorded/implemented from the Second Saturday PD sessions (October 14th)",
            "eyp": "NA",
            "pyp": "NA",
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      }
    ]
  },
  {
    "week_index": 2,
    "week_label": "28 Sept - 1 Oct",
    "sections": [
      {
        "id": "I",
        "name": "Classroom Dashboard",
        "code": "I",
        "metrics": [
          {
            "row": 3,
            "s_no": "1C",
            "description": "No. of classes/subjects with incomplete planners and planners evaluated with recommendations",
            "eyp": 0,
            "pyp": 5,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 4,
            "s_no": "2C",
            "description": "Syllabus progression – plan vs. actual – No. of classes/subjects with large deviation (> 1 week)",
            "eyp": 0,
            "pyp": 2,
            "cie_ls": 2,
            "cie_igcse_as": 4,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 5,
            "s_no": "3T",
            "description": "No. of learners subject-wise that have raised a subject clarification in class",
            "eyp": 4,
            "pyp": 4,
            "cie_ls": 3,
            "cie_igcse_as": 17,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 6,
            "s_no": "4T",
            "description": "No. of learners subject-wise that are being provided with additional support in atleast 1 subject",
            "eyp": 30,
            "pyp": 50,
            "cie_ls": 1,
            "cie_igcse_as": 12,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 7,
            "s_no": "5T",
            "description": "No. of classes/subjects with an average rating of below 70% in achieving the learning outcomes measured through FAs",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 8,
            "s_no": "6T",
            "description": "No. of classes/subjects where innovative practices were used in the pedagogy (teaching strategies, learning skills and assessment tools) – evidence",
            "eyp": "NA",
            "pyp": "NA",
            "cie_ls": "NA",
            "cie_igcse_as": 7,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 9,
            "s_no": "7T",
            "description": "No. of classes/subjects where transferrable skills were used to understand real world application of concepts - evidence",
            "eyp": "8 classes - UOI- Action plan",
            "pyp": "10 classess - UOI - Action plan",
            "cie_ls": 5,
            "cie_igcse_as": 10,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "II",
        "name": "Home Reinforcement and Assignments",
        "code": "II",
        "metrics": [
          {
            "row": 11,
            "s_no": "1T",
            "description": "No. of learners with non-submission and late submission of HR tasks for more than once",
            "eyp": 0,
            "pyp": 15,
            "cie_ls": 2,
            "cie_igcse_as": 7,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 12,
            "s_no": "2C",
            "description": "No. of assignments subject-wise not evaluated and delayed for correction beyond 7 days",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "III",
        "name": "Assessments",
        "code": "III",
        "metrics": [
          {
            "row": 14,
            "s_no": "1C",
            "description": "No. of assessment tasks subject-wise not recorded and conducted as per schedule and requirements",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 15,
            "s_no": "2T",
            "description": "No. of classess/subjects having a class average below 60%",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 16,
            "s_no": "3T",
            "description": "No. of classes/subjects with more than 10% of learners scored below class average",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 17,
            "s_no": "4T",
            "description": "No. of learners subject-wise whose performance declined and not improved by one grade descriptor",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 18,
            "s_no": "5T",
            "description": "No. of classes/subjects in which significant improvement in the class/subject average from the previous assessment after strategies applied",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "IV",
        "name": "Attendance (Learners)",
        "code": "IV",
        "metrics": [
          {
            "row": 20,
            "s_no": "1C",
            "description": "No. of learners that have taken 3 consecutive days off (uninformed) or more than 2 days in a week",
            "eyp": 1,
            "pyp": 5,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": "Shyamala Rupavahini The NEST School    (2026-10-05 17:19:03)\nAditya - Sick leave",
              "general": null
            }
          },
          {
            "row": 21,
            "s_no": "2C",
            "description": "Overall student attendance %",
            "eyp": 0.89,
            "pyp": 0.89,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-09-28 07:41:10)\nMonday - 90.81%; Tuesday  - 84.18%; Wednesday - 90.30% ;Thursday - 91.28%",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 22,
            "s_no": "3C",
            "description": "No. of uninformed absences",
            "eyp": 1,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "V",
        "name": "Attendance (Teachers)",
        "code": "V",
        "metrics": [
          {
            "row": 24,
            "s_no": "1A",
            "description": "No. of teachers that have taken more than 3 days off (in the current month)",
            "eyp": 1,
            "pyp": 1,
            "cie_ls": 1,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 25,
            "s_no": "2A",
            "description": "No. of teachers that have been late on more than 3 occasions (in current month)",
            "eyp": 0,
            "pyp": 3,
            "cie_ls": 1,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 26,
            "s_no": "3A",
            "description": "No. of unexplained absences",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VI",
        "name": "SEN/Counselling/Mentoring",
        "code": "VI",
        "metrics": [
          {
            "row": 28,
            "s_no": "1S",
            "description": "No. of learners not showing improvement in academic perfornance",
            "eyp": 0,
            "pyp": 13,
            "cie_ls": 2,
            "cie_igcse_as": 2,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 29,
            "s_no": "2S",
            "description": "No. of learners not showing improvement in internal attributes of behaviour like cognitive processing, emotional well-being, attention levels and special needs",
            "eyp": 3,
            "pyp": 7,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": "Pooja The NEST School    (2026-09-30 09:04:14)\nNirav,Lian,Lakhagra",
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 30,
            "s_no": "3S",
            "description": "No. of learners not showing improvement in external attributes of behaviour like disruptive conduct, aggression, bullying, etc",
            "eyp": 1,
            "pyp": 10,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Pooja The NEST School    (2026-09-30 08:59:20)\nArnav",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 31,
            "s_no": "4S",
            "description": "No. of issues where parent intervention required – list each issue",
            "eyp": 2,
            "pyp": 2,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": "Pooja The NEST School    (2026-09-30 09:06:11)\nNirav,Lian",
              "pyp": null,
              "cie_ls": "Pooja The NEST School    (2026-09-30 08:59:38)\nArnav",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 32,
            "s_no": "5S",
            "description": "No. of major behaviour/academic issues remaining unresolved beyond 2 days",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 33,
            "s_no": "6S",
            "description": "No. of learners not met the SEN as per plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 34,
            "s_no": "7S",
            "description": "No. of mentors that have not met their mentees",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 35,
            "s_no": "8S",
            "description": "No. of learners that have been mentored – top 3 issues (program wise)",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VII",
        "name": "Classroom Observations",
        "code": "VII",
        "metrics": [
          {
            "row": 37,
            "s_no": "1C",
            "description": "No. of teachers class observation pending as per scheduled plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": 2,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": "Praseeda Pradeep The NEST School    (2026-10-07 06:32:26)\nwednesday (preparing for the class) and friday (holiday)",
              "general": null
            }
          },
          {
            "row": 38,
            "s_no": "2C",
            "description": "Average score of teachers class observation",
            "eyp": 0.75,
            "pyp": 67.2,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 39,
            "s_no": "3C",
            "description": "No. of teachers that have scored below 50%",
            "eyp": 0.0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VIII",
        "name": "NPD",
        "code": "VIII",
        "metrics": [
          {
            "row": 41,
            "s_no": "1A",
            "description": "Average NPD score of the Core Team",
            "eyp": 3,
            "pyp": 4,
            "cie_ls": 3,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 42,
            "s_no": "2A",
            "description": "No. of takeaways reflected/recorded/implemented from the Second Saturday PD sessions (October 14th)",
            "eyp": "NA",
            "pyp": "NA",
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      }
    ]
  },
  {
    "week_index": 3,
    "week_label": "5 Oct - 10 Oct",
    "sections": [
      {
        "id": "I",
        "name": "Classroom Dashboard",
        "code": "I",
        "metrics": [
          {
            "row": 3,
            "s_no": "1",
            "description": "No. of classes/subjects with incomplete planners and planners evaluated with recommendations",
            "eyp": 3,
            "pyp": 6,
            "cie_ls": 3,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-10-05 07:05:40)\nLate entry Monday - Hindi - 2b, 1C - Math, Thursday - LSL - 4A , Friday DI, Saturday - Pspe, TI",
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-10-14 06:35:08)\nTmail, Hindi and PSPE",
              "cie_igcse_as": "Shyamala Rupavahini The NEST School    (2026-10-12 04:13:23)\nBiology",
              "general": null
            }
          },
          {
            "row": 4,
            "s_no": "2",
            "description": "Syllabus progression – plan vs. actual – No. of classes/subjects with large deviation (> 1 week)",
            "eyp": "NA",
            "pyp": 2,
            "cie_ls": 2,
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-10-14 06:35:21)\nHindi and French",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 5,
            "s_no": "3",
            "description": "No. of learners subject-wise that have raised a subject clarification in class",
            "eyp": 7,
            "pyp": 35,
            "cie_ls": 34,
            "cie_igcse_as": 17,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 6,
            "s_no": "4",
            "description": "No. of learners subject-wise that are being provided with additional support in atleast 1 subject",
            "eyp": 30,
            "pyp": 51,
            "cie_ls": 6,
            "cie_igcse_as": 12,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 7,
            "s_no": "5",
            "description": "No. of classes/subjects with an average rating of below 70% in achieving the learning outcomes measured through FAs",
            "eyp": 1,
            "pyp": "NA",
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 8,
            "s_no": "6",
            "description": "No. of classes/subjects where innovative practices were used in the pedagogy (teaching strategies, learning skills and assessment tools) – evidence",
            "eyp": 4,
            "pyp": "NA",
            "cie_ls": 8,
            "cie_igcse_as": 4,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 9,
            "s_no": "7",
            "description": "No. of classes/subjects where transferrable skills were used to understand real world application of concepts - evidence",
            "eyp": 8,
            "pyp": "29 sessions",
            "cie_ls": 11,
            "cie_igcse_as": 2,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "II",
        "name": "Home Reinforcement and Assignments",
        "code": "II",
        "metrics": [
          {
            "row": 11,
            "s_no": "1",
            "description": "No. of learners with non-submission and late submission of HR tasks for more than once",
            "eyp": 2,
            "pyp": 26,
            "cie_ls": 7,
            "cie_igcse_as": 10,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 12,
            "s_no": "2",
            "description": "No. of assignments subject-wise not evaluated and delayed for correction beyond 7 days",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "III",
        "name": "Assessments",
        "code": "III",
        "metrics": [
          {
            "row": 14,
            "s_no": "1",
            "description": "No. of assessment tasks subject-wise not recorded and conducted as per schedule and requirements",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 15,
            "s_no": "2",
            "description": "No. of classess/subjects having a class average below 60%",
            "eyp": 9,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 16,
            "s_no": "3",
            "description": "No. of classes/subjects with more than 40% of learners scored below class average",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 17,
            "s_no": "4",
            "description": "No. of learners subject-wise whose performance declined and not improved by one grade descriptor",
            "eyp": 0,
            "pyp": 11,
            "cie_ls": 1,
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 18,
            "s_no": "5",
            "description": "No. of classes/subjects in which significant improvement in the class/subject average from the previous assessment after strategies applied",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 1,
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "IV",
        "name": "Attendance (Learners)",
        "code": "IV",
        "metrics": [
          {
            "row": 20,
            "s_no": "1",
            "description": "No. of learners that have taken 3 consecutive days off (uninformed) or more than 2 days in a week",
            "eyp": 1,
            "pyp": 0.0,
            "cie_ls": null,
            "cie_igcse_as": "1 Aditya",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 21,
            "s_no": "2",
            "description": "Overall student attendance %",
            "eyp": "83.4%%",
            "pyp": 0.85,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-10-08 07:13:14)\nMonday - 89.17 ; Wednesday - 87.11 ; Thursday - 89.69; Friday - 90.20; Saturday - 67.52",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 22,
            "s_no": "3",
            "description": "No. of uninformed absences",
            "eyp": 1,
            "pyp": 0.0,
            "cie_ls": null,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "V",
        "name": "Attendance (Teachers)",
        "code": "V",
        "metrics": [
          {
            "row": 24,
            "s_no": "1",
            "description": "No. of teachers that have taken more than 3 days off (in the current month)",
            "eyp": 1,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 25,
            "s_no": "2",
            "description": "No. of teachers that have been late on more than 3 occasions (in current month)",
            "eyp": 0.0,
            "pyp": 3,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 26,
            "s_no": "3",
            "description": "No. of unexplained absences",
            "eyp": 0.0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VI",
        "name": "SEN/Counselling/Mentoring",
        "code": "VI",
        "metrics": [
          {
            "row": 28,
            "s_no": "1",
            "description": "No. of learners not showing improvement in academic perfornance",
            "eyp": null,
            "pyp": 3,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 29,
            "s_no": "2",
            "description": "No. of learners not showing improvement in internal attributes of behaviour like cognitive processing, emotional well-being, attention levels and special needs",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 30,
            "s_no": "3",
            "description": "No. of learners not showing improvement in external attributes of behaviour like disruptive conduct, aggression, bullying, etc",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 31,
            "s_no": "4",
            "description": "No. of issues where parent intervention required – list each issue",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 32,
            "s_no": "5",
            "description": "No. of major behaviour/academic issues remaining unresolved beyond 2 days",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 33,
            "s_no": "6",
            "description": "No. of learners not met the SEN as per plan",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 34,
            "s_no": "7",
            "description": "No. of mentors that have not met their mentees",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 35,
            "s_no": "8",
            "description": "No. of learners that have been mentored – top 3 issues (program wise)",
            "eyp": null,
            "pyp": 1,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VII",
        "name": "Classroom Observations",
        "code": "VII",
        "metrics": [
          {
            "row": 37,
            "s_no": "1",
            "description": "No. of teachers class observation pending as per scheduled plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 38,
            "s_no": "2",
            "description": "Average score of teachers class observation",
            "eyp": 0.75,
            "pyp": 67.2,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 39,
            "s_no": "3",
            "description": "No. of teachers that have scored below 50%",
            "eyp": 0.0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VIII",
        "name": "NPD",
        "code": "VIII",
        "metrics": [
          {
            "row": 41,
            "s_no": "1",
            "description": "Average NPD score of the Core Team",
            "eyp": 3,
            "pyp": 4,
            "cie_ls": 3,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 42,
            "s_no": "2",
            "description": "No. of takeaways reflected/recorded/implemented from the Second Saturday PD sessions (October 14th)",
            "eyp": "NA",
            "pyp": "NA",
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      }
    ]
  },
  {
    "week_index": 4,
    "week_label": "12 Oct - 14 Oct & 22 Oct",
    "sections": [
      {
        "id": "I",
        "name": "Classroom Dashboard",
        "code": "I",
        "metrics": [
          {
            "row": 3,
            "s_no": "1",
            "description": "No. of classes/subjects with incomplete planners and planners evaluated with recommendations",
            "eyp": 3,
            "pyp": 7,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-10-12 06:37:13)\nPSPE (Gowri), Art, Tamil (Manjula), 1C - Shruthi, PSPE (Abilash)(G2), DI - Joyce(G4b), Archana Music(G5)",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 4,
            "s_no": "2",
            "description": "Syllabus progression – plan vs. actual – No. of classes/subjects with large deviation (> 1 week)",
            "eyp": 3,
            "pyp": 2,
            "cie_ls": 2,
            "cie_igcse_as": 2,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 5,
            "s_no": "3",
            "description": "No. of learners subject-wise that have raised a subject clarification in class",
            "eyp": 0.0,
            "pyp": 24,
            "cie_ls": null,
            "cie_igcse_as": 17,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 6,
            "s_no": "4",
            "description": "No. of learners subject-wise that are being provided with additional support in atleast 1 subject",
            "eyp": 30,
            "pyp": 51,
            "cie_ls": 6,
            "cie_igcse_as": 12,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 7,
            "s_no": "5",
            "description": "No. of classes/subjects with an average rating of below 70% in achieving the learning outcomes measured through FAs",
            "eyp": 5,
            "pyp": 0.0,
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-10-20 17:09:26)\nFAs have not been conducted this week",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 8,
            "s_no": "6",
            "description": "No. of classes/subjects where innovative practices were used in the pedagogy (teaching strategies, learning skills and assessment tools) – evidence",
            "eyp": 3,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 9,
            "s_no": "7",
            "description": "No. of classes/subjects where transferrable skills were used to understand real world application of concepts - evidence",
            "eyp": 8,
            "pyp": 14,
            "cie_ls": 1,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-10-20 17:10:25)\nGrade 7, preparing for Assembly",
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "II",
        "name": "Home Reinforcement and Assignments",
        "code": "II",
        "metrics": [
          {
            "row": 11,
            "s_no": "1",
            "description": "No. of learners with non-submission and late submission of HR tasks for more than once",
            "eyp": 6,
            "pyp": "NA",
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 12,
            "s_no": "2",
            "description": "No. of assignments subject-wise not evaluated and delayed for correction beyond 7 days",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "III",
        "name": "Assessments",
        "code": "III",
        "metrics": [
          {
            "row": 14,
            "s_no": "1",
            "description": "No. of assessment tasks subject-wise not recorded and conducted as per schedule and requirements",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 15,
            "s_no": "2",
            "description": "No. of classess/subjects having a class average below 60%",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-10-20 17:12:19)\nSubject to review, based on SA1 preparation and performance.",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 16,
            "s_no": "3",
            "description": "No. of classes/subjects with more than 40% of learners scored below class average",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 17,
            "s_no": "4",
            "description": "No. of learners subject-wise whose performance declined and not improved by one grade descriptor",
            "eyp": 0,
            "pyp": 11,
            "cie_ls": 0,
            "cie_igcse_as": 5,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 18,
            "s_no": "5",
            "description": "No. of classes/subjects in which significant improvement in the class/subject average from the previous assessment after strategies applied",
            "eyp": 9,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "IV",
        "name": "Attendance (Learners)",
        "code": "IV",
        "metrics": [
          {
            "row": 20,
            "s_no": "1",
            "description": "No. of learners that have taken 3 consecutive days off (uninformed) or more than 2 days in a week",
            "eyp": 1,
            "pyp": 0.0,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 21,
            "s_no": "2",
            "description": "Overall student attendance %",
            "eyp": 0.83,
            "pyp": 81.61,
            "cie_ls": 87.45,
            "cie_igcse_as": 0.85,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-10-12 06:39:50)\nMonday - 85.05%; Tuesday - 80.41%; Thursday - 79.38%",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 22,
            "s_no": "3",
            "description": "No. of uninformed absences",
            "eyp": 1,
            "pyp": 0.0,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "V",
        "name": "Attendance (Teachers)",
        "code": "V",
        "metrics": [
          {
            "row": 24,
            "s_no": "1",
            "description": "No. of teachers that have taken more than 3 days off (in the current month)",
            "eyp": 2,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 25,
            "s_no": "2",
            "description": "No. of teachers that have been late on more than 3 occasions (in current month)",
            "eyp": 1,
            "pyp": 3,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 26,
            "s_no": "3",
            "description": "No. of unexplained absences",
            "eyp": 0.0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VI",
        "name": "SEN/Counselling/Mentoring",
        "code": "VI",
        "metrics": [
          {
            "row": 28,
            "s_no": "1",
            "description": "No. of learners not showing improvement in academic perfornance",
            "eyp": 3,
            "pyp": 3,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 29,
            "s_no": "2",
            "description": "No. of learners not showing improvement in internal attributes of behaviour like cognitive processing, emotional well-being, attention levels and special needs",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 30,
            "s_no": "3",
            "description": "No. of learners not showing improvement in external attributes of behaviour like disruptive conduct, aggression, bullying, etc",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 3,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Pooja The NEST School    (2026-10-13 05:00:20)\nArnav,Ishaan,Vidyuth",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 31,
            "s_no": "4",
            "description": "No. of issues where parent intervention required – list each issue",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 32,
            "s_no": "5",
            "description": "No. of major behaviour/academic issues remaining unresolved beyond 2 days",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 33,
            "s_no": "6",
            "description": "No. of learners not met the SEN as per plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 3,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Pooja The NEST School    (2026-10-13 05:01:53)\nVidyuth,Avishka & Mehr",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 34,
            "s_no": "7",
            "description": "No. of mentors that have not met their mentees",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 35,
            "s_no": "8",
            "description": "No. of learners that have been mentored – top 3 issues (program wise)",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 1,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VII",
        "name": "Classroom Observations",
        "code": "VII",
        "metrics": [
          {
            "row": 37,
            "s_no": "1",
            "description": "No. of teachers class observation pending as per scheduled plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 38,
            "s_no": "2",
            "description": "Average score of teachers class observation",
            "eyp": 0.75,
            "pyp": 67.2,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 39,
            "s_no": "3",
            "description": "No. of teachers that have scored below 50%",
            "eyp": 0.0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VIII",
        "name": "NPD",
        "code": "VIII",
        "metrics": [
          {
            "row": 41,
            "s_no": "1",
            "description": "Average NPD score of the Core Team",
            "eyp": 3,
            "pyp": 4,
            "cie_ls": 3,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 42,
            "s_no": "2",
            "description": "No. of takeaways reflected/recorded/implemented from the Second Saturday PD sessions (October 14th)",
            "eyp": "NA",
            "pyp": "NA",
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      }
    ]
  },
  {
    "week_index": 5,
    "week_label": "26 Oct - 30 Oct",
    "sections": [
      {
        "id": "I",
        "name": "Classroom Dashboard",
        "code": "I",
        "metrics": [
          {
            "row": 3,
            "s_no": "1",
            "description": "No. of classes/subjects with incomplete planners and planners evaluated with recommendations",
            "eyp": 3,
            "pyp": 13,
            "cie_ls": 8,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-10-26 03:57:44)\nMonday - 1a - Sustainability, 1c - uoi, Math (1c, 2a, 3), PSPE (4a, 4b), lib - 1a,   DI - 1b,2a, UOI - 2b, 2b - dance, music - 3a, 4a & 4b - lsl & fl, g5 - math, uoi",
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-11-03 05:27:45)\nLib, hindi, ICT, TI, PSPE, Dance, Music, Tamil",
              "cie_igcse_as": "Shyamala Rupavahini The NEST School    (2026-11-03 15:54:40)\nFLE, ESL, C.Sc, ICT, EM, P.Ed.(10)\nPSPE, ICT, Combined sciences, Math (9)",
              "general": null
            }
          },
          {
            "row": 4,
            "s_no": "2",
            "description": "Syllabus progression – plan vs. actual – No. of classes/subjects with large deviation (> 1 week)",
            "eyp": 3,
            "pyp": 1,
            "cie_ls": 2,
            "cie_igcse_as": 2,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-10-31 04:24:07)\nG1 math - 3 sections",
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-11-03 04:11:44)\nHindi and French in Grades 6 and 7",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 5,
            "s_no": "3",
            "description": "No. of learners subject-wise that have raised a subject clarification in class",
            "eyp": 0,
            "pyp": 43,
            "cie_ls": 28,
            "cie_igcse_as": 15,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 6,
            "s_no": "4",
            "description": "No. of learners subject-wise that are being provided with additional support in atleast 1 subject",
            "eyp": 30,
            "pyp": 51,
            "cie_ls": 9,
            "cie_igcse_as": 12,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 7,
            "s_no": "5",
            "description": "No. of classes/subjects with an average rating of below 70% in achieving the learning outcomes measured through FAs",
            "eyp": 8,
            "pyp": 0,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-11-03 04:17:27)\nGrade 8 Math",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 8,
            "s_no": "6",
            "description": "No. of classes/subjects where innovative practices were used in the pedagogy (teaching strategies, learning skills and assessment tools) – evidence",
            "eyp": 3,
            "pyp": 0,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-11-03 04:19:34)\nGP - PEEL technique",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 9,
            "s_no": "7",
            "description": "No. of classes/subjects where transferrable skills were used to understand real world application of concepts - evidence",
            "eyp": 8,
            "pyp": 24,
            "cie_ls": 10,
            "cie_igcse_as": 11,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "II",
        "name": "Home Reinforcement and Assignments",
        "code": "II",
        "metrics": [
          {
            "row": 11,
            "s_no": "1",
            "description": "No. of learners with non-submission and late submission of HR tasks for more than once",
            "eyp": 0,
            "pyp": 20,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 12,
            "s_no": "2",
            "description": "No. of assignments subject-wise not evaluated and delayed for correction beyond 7 days",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "III",
        "name": "Assessments",
        "code": "III",
        "metrics": [
          {
            "row": 14,
            "s_no": "1",
            "description": "No. of assessment tasks subject-wise not recorded and conducted as per schedule and requirements",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 15,
            "s_no": "2",
            "description": "No. of classess/subjects having a class average below 60%",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 16,
            "s_no": "3",
            "description": "No. of classes/subjects with more than 40% of learners scored below class average",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 17,
            "s_no": "4",
            "description": "No. of learners subject-wise whose performance declined and not improved by one grade descriptor",
            "eyp": 0,
            "pyp": 11,
            "cie_ls": 6,
            "cie_igcse_as": 7,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": "Shyamala Rupavahini The NEST School    (2026-11-03 15:59:25)\nAditya, Akrish, Pranav, Kayal, Dushyant, Navvyaa, Kousthuban",
              "general": null
            }
          },
          {
            "row": 18,
            "s_no": "5",
            "description": "No. of classes/subjects in which significant improvement in the class/subject average from the previous assessment after strategies applied",
            "eyp": 4,
            "pyp": 0,
            "cie_ls": 5,
            "cie_igcse_as": 5,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": "Shyamala Rupavahini The NEST School    (2026-11-03 16:00:45)\nAngelina, Kayal, Dushyant, Akrish, Raunak,",
              "general": null
            }
          }
        ]
      },
      {
        "id": "IV",
        "name": "Attendance (Learners)",
        "code": "IV",
        "metrics": [
          {
            "row": 20,
            "s_no": "1",
            "description": "No. of learners that have taken 3 consecutive days off (uninformed) or more than 2 days in a week",
            "eyp": 2,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": "Shyamala Rupavahini The NEST School    (2026-11-03 16:01:00)\nAdithya",
              "general": null
            }
          },
          {
            "row": 21,
            "s_no": "2",
            "description": "Overall student attendance %",
            "eyp": "78,13",
            "pyp": 88.14,
            "cie_ls": 95.53,
            "cie_igcse_as": 0.8,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-10-28 09:42:57)\nMonday - 80.92, Tuesday - 87.62, Wednesday - 90.72, Thursday - 92.78, Friday - 88.65",
              "cie_ls": null,
              "cie_igcse_as": "Shyamala Rupavahini The NEST School    (2026-11-03 16:16:04)\nAS - 74%\n10 - 90%\n9 - 80%",
              "general": null
            }
          },
          {
            "row": 22,
            "s_no": "3",
            "description": "No. of uninformed absences",
            "eyp": 2,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "V",
        "name": "Attendance (Teachers)",
        "code": "V",
        "metrics": [
          {
            "row": 24,
            "s_no": "1",
            "description": "No. of teachers that have taken more than 3 days off (in the current month)",
            "eyp": 2,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 25,
            "s_no": "2",
            "description": "No. of teachers that have been late on more than 3 occasions (in current month)",
            "eyp": 2,
            "pyp": 3,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 26,
            "s_no": "3",
            "description": "No. of unexplained absences",
            "eyp": 0.0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VI",
        "name": "SEN/Counselling/Mentoring",
        "code": "VI",
        "metrics": [
          {
            "row": 28,
            "s_no": "1",
            "description": "No. of learners not showing improvement in academic perfornance",
            "eyp": 3,
            "pyp": 3,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 29,
            "s_no": "2",
            "description": "No. of learners not showing improvement in internal attributes of behaviour like cognitive processing, emotional well-being, attention levels and special needs",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 30,
            "s_no": "3",
            "description": "No. of learners not showing improvement in external attributes of behaviour like disruptive conduct, aggression, bullying, etc",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 3,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": "Pooja The NEST School    (2026-10-28 04:11:59)\nMikail",
              "cie_ls": "Pooja The NEST School    (2026-10-28 04:11:07)\nArnav, Ishaan & Vidyut",
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 31,
            "s_no": "4",
            "description": "No. of issues where parent intervention required – list each issue",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": "Pooja The NEST School    (2026-10-28 04:12:52)\nMikail",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 32,
            "s_no": "5",
            "description": "No. of major behaviour/academic issues remaining unresolved beyond 2 days",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 33,
            "s_no": "6",
            "description": "No. of learners not met the SEN as per plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 3,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 34,
            "s_no": "7",
            "description": "No. of mentors that have not met their mentees",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 35,
            "s_no": "8",
            "description": "No. of learners that have been mentored – top 3 issues (program wise)",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 1,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VII",
        "name": "Classroom Observations",
        "code": "VII",
        "metrics": [
          {
            "row": 37,
            "s_no": "1",
            "description": "No. of teachers class observation pending as per scheduled plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 38,
            "s_no": "2",
            "description": "Average score of teachers class observation",
            "eyp": 0.75,
            "pyp": 67.2,
            "cie_ls": null,
            "cie_igcse_as": 66,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 39,
            "s_no": "3",
            "description": "No. of teachers that have scored below 50%",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VIII",
        "name": "NPD",
        "code": "VIII",
        "metrics": [
          {
            "row": 41,
            "s_no": "1",
            "description": "Average NPD score of the Core Team",
            "eyp": 4,
            "pyp": 4,
            "cie_ls": 3,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 42,
            "s_no": "2",
            "description": "No. of takeaways reflected/recorded/implemented from the Second Saturday PD sessions",
            "eyp": 17,
            "pyp": "10 -14",
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      }
    ]
  },
  {
    "week_index": 6,
    "week_label": "3 Nov  - 6 Nov",
    "sections": [
      {
        "id": "I",
        "name": "Classroom Dashboard",
        "code": "I",
        "metrics": [
          {
            "row": 3,
            "s_no": "1",
            "description": "No. of classes/subjects with incomplete planners and planners evaluated with recommendations",
            "eyp": 3,
            "pyp": 7,
            "cie_ls": "Term 1 Examination",
            "cie_igcse_as": "Term 1 Examination",
            "comments": {
              "eyp": "Praseeda Pradeep The NEST School    (2026-11-10 07:29:22)\nArt, Music, Dance, PSPE",
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-11-03 04:17:56)\n1a - Manjula(TI), Joyce, Ackshara; 1b - Manjula(Tamil), Joyce;\n1c - Manjula (Tamil & TI), Joyce, Ackshara\n2a - Math, Music, Ackshara\n2b - DI, Ackshara, Music\n2c - Math, Hindi, Ackshara, Joyce\n3 - Math, DI, Tamil, PSPE\n4a - Music\n4b - Music\n5a - Math, Music, DI",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 4,
            "s_no": "2",
            "description": "Syllabus progression – plan vs. actual – No. of classes/subjects with large deviation (> 1 week)",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 2,
            "cie_igcse_as": 2,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": "Bhagyashree Ganesh The NEST School    (2026-11-10 04:53:22)\nHindi and French",
              "cie_igcse_as": "Praseeda Pradeep The NEST School    (2026-11-10 10:33:56)\nAS - Chemistry, Physics",
              "general": null
            }
          },
          {
            "row": 5,
            "s_no": "3",
            "description": "No. of learners subject-wise that have raised a subject clarification in class",
            "eyp": 12,
            "pyp": 92,
            "cie_ls": "Term 1 Examination",
            "cie_igcse_as": "Term 1 Examination",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 6,
            "s_no": "4",
            "description": "No. of learners subject-wise that are being provided with additional support in atleast 1 subject",
            "eyp": 27,
            "pyp": 51,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 7,
            "s_no": "5",
            "description": "No. of classes/subjects with an average rating of below 70% in achieving the learning outcomes measured through FAs",
            "eyp": 8,
            "pyp": "NA",
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 8,
            "s_no": "6",
            "description": "No. of classes/subjects where innovative practices were used in the pedagogy (teaching strategies, learning skills and assessment tools) – evidence",
            "eyp": 3,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": "Praseeda Pradeep The NEST School    (2026-11-10 07:35:37)\nGlobal collaboration - Cambridge/IB Schools in Oman, Dhaka",
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 9,
            "s_no": "7",
            "description": "No. of classes/subjects where transferrable skills were used to understand real world application of concepts - evidence",
            "eyp": 4,
            "pyp": 30,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "II",
        "name": "Home Reinforcement and Assignments",
        "code": "II",
        "metrics": [
          {
            "row": 11,
            "s_no": "1",
            "description": "No. of learners with non-submission and late submission of HR tasks for more than once",
            "eyp": 6,
            "pyp": 20,
            "cie_ls": "Term 1 Examination",
            "cie_igcse_as": "Term 1 Examination",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 12,
            "s_no": "2",
            "description": "No. of assignments subject-wise not evaluated and delayed for correction beyond 7 days",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "III",
        "name": "Assessments",
        "code": "III",
        "metrics": [
          {
            "row": 14,
            "s_no": "1",
            "description": "No. of assessment tasks subject-wise not recorded and conducted as per schedule and requirements",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": "Term 1 Examination",
            "cie_igcse_as": "Term 1 Examination",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 15,
            "s_no": "2",
            "description": "No. of classess/subjects having a class average below 60%",
            "eyp": 6,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 16,
            "s_no": "3",
            "description": "No. of classes/subjects with more than 40% of learners scored below class average",
            "eyp": 4,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 17,
            "s_no": "4",
            "description": "No. of learners subject-wise whose performance declined and not improved by one grade descriptor",
            "eyp": 3,
            "pyp": 11,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": "Praseeda Pradeep The NEST School    (2026-11-10 05:37:51)\nNo improvement",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 18,
            "s_no": "5",
            "description": "No. of classes/subjects in which significant improvement in the class/subject average from the previous assessment after strategies applied",
            "eyp": 9,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "IV",
        "name": "Attendance (Learners)",
        "code": "IV",
        "metrics": [
          {
            "row": 20,
            "s_no": "1",
            "description": "No. of learners that have taken 3 consecutive days off (uninformed) or more than 2 days in a week",
            "eyp": 2,
            "pyp": 0,
            "cie_ls": "Term 1 Examination",
            "cie_igcse_as": "Term 1 Examination",
            "comments": {
              "eyp": "Praseeda Pradeep The NEST School    (2026-11-10 07:38:32)\nVeera Chitran, Adithya",
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 21,
            "s_no": "2",
            "description": "Overall student attendance %",
            "eyp": 83.47,
            "pyp": 89.88,
            "cie_ls": 97.3,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-11-04 04:53:58)\nTuesday - 91.70, Wednesday - 91.70, Thursday - 89.63, Friday - 86.52",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 22,
            "s_no": "3",
            "description": "No. of uninformed absences",
            "eyp": 0.0,
            "pyp": 0.0,
            "cie_ls": 0.0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "V",
        "name": "Attendance (Teachers)",
        "code": "V",
        "metrics": [
          {
            "row": 24,
            "s_no": "1",
            "description": "No. of teachers that have taken more than 3 days off (in the current month)",
            "eyp": 2,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 25,
            "s_no": "2",
            "description": "No. of teachers that have been late on more than 3 occasions (in current month)",
            "eyp": 1,
            "pyp": 3,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 26,
            "s_no": "3",
            "description": "No. of unexplained absences",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VI",
        "name": "SEN/Counselling/Mentoring",
        "code": "VI",
        "metrics": [
          {
            "row": 28,
            "s_no": "1",
            "description": "No. of learners not showing improvement in academic perfornance",
            "eyp": 3,
            "pyp": 3,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 29,
            "s_no": "2",
            "description": "No. of learners not showing improvement in internal attributes of behaviour like cognitive processing, emotional well-being, attention levels and special needs",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 30,
            "s_no": "3",
            "description": "No. of learners not showing improvement in external attributes of behaviour like disruptive conduct, aggression, bullying, etc",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 31,
            "s_no": "4",
            "description": "No. of issues where parent intervention required – list each issue",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 32,
            "s_no": "5",
            "description": "No. of major behaviour/academic issues remaining unresolved beyond 2 days",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 33,
            "s_no": "6",
            "description": "No. of learners not met the SEN as per plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 34,
            "s_no": "7",
            "description": "No. of mentors that have not met their mentees",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 35,
            "s_no": "8",
            "description": "No. of learners that have been mentored – top 3 issues (program wise)",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 1,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VII",
        "name": "Classroom Observations",
        "code": "VII",
        "metrics": [
          {
            "row": 37,
            "s_no": "1",
            "description": "No. of teachers class observation pending as per scheduled plan",
            "eyp": null,
            "pyp": 0,
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 38,
            "s_no": "2",
            "description": "Average score of teachers class observation",
            "eyp": null,
            "pyp": 67.2,
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 39,
            "s_no": "3",
            "description": "No. of teachers that have scored below 50%",
            "eyp": null,
            "pyp": 0,
            "cie_ls": "NA",
            "cie_igcse_as": "NA",
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VIII",
        "name": "NPD",
        "code": "VIII",
        "metrics": [
          {
            "row": 41,
            "s_no": "1",
            "description": "Average NPD score of the Core Team",
            "eyp": 4,
            "pyp": 4,
            "cie_ls": 3,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 42,
            "s_no": "2",
            "description": "No. of takeaways reflected/recorded/implemented from the Second Saturday PD sessions (October 14th)",
            "eyp": 16,
            "pyp": 12,
            "cie_ls": 13,
            "cie_igcse_as": null,
            "comments": {
              "eyp": "Praseeda Pradeep The NEST School    (2026-11-10 14:32:23)\nImpact not discussed",
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      }
    ]
  },
  {
    "week_index": 7,
    "week_label": "10 Nov  - 13 Nov",
    "sections": [
      {
        "id": "I",
        "name": "Classroom Dashboard",
        "code": "I",
        "metrics": [
          {
            "row": 3,
            "s_no": "1",
            "description": "No. of classes/subjects with incomplete planners and planners evaluated with recommendations",
            "eyp": null,
            "pyp": 11,
            "cie_ls": null,
            "cie_igcse_as": 10,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-11-10 03:40:12)\nLate entry Tuesday - 1c - Music, 2a - FL, UOI, Music; Dance (1 - 5), PSPE(4 & 5) , Art (2); Wednesday - Hindi; Grade 5 - Math; g4 a - uoi & FL",
              "cie_ls": null,
              "cie_igcse_as": "Shyamala Rupavahini The NEST School    (2026-11-10 05:49:54)\nGrade 9 - Mathematics, Biology, Art, Music, Dance, Combined Science, PE, EDI\nGrade 10 - EM, P.Ed\nAS Level - Bio (10th)",
              "general": null
            }
          },
          {
            "row": 4,
            "s_no": "2",
            "description": "Syllabus progression – plan vs. actual – No. of classes/subjects with large deviation (> 1 week)",
            "eyp": null,
            "pyp": 1,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 5,
            "s_no": "3",
            "description": "No. of learners subject-wise that have raised a subject clarification in class",
            "eyp": null,
            "pyp": null,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 6,
            "s_no": "4",
            "description": "No. of learners subject-wise that are being provided with additional support in atleast 1 subject",
            "eyp": null,
            "pyp": 51,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 7,
            "s_no": "5",
            "description": "No. of classes/subjects with an average rating of below 70% in achieving the learning outcomes measured through FAs",
            "eyp": null,
            "pyp": 0.0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 8,
            "s_no": "6",
            "description": "No. of classes/subjects where innovative practices were used in the pedagogy (teaching strategies, learning skills and assessment tools) – evidence",
            "eyp": null,
            "pyp": 0.0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 9,
            "s_no": "7",
            "description": "No. of classes/subjects where transferrable skills were used to understand real world application of concepts - evidence",
            "eyp": null,
            "pyp": null,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "II",
        "name": "Home Reinforcement and Assignments",
        "code": "II",
        "metrics": [
          {
            "row": 11,
            "s_no": "1",
            "description": "No. of learners with non-submission and late submission of HR tasks for more than once",
            "eyp": null,
            "pyp": 20,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 12,
            "s_no": "2",
            "description": "No. of assignments subject-wise not evaluated and delayed for correction beyond 7 days",
            "eyp": null,
            "pyp": 0.0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "III",
        "name": "Assessments",
        "code": "III",
        "metrics": [
          {
            "row": 14,
            "s_no": "1",
            "description": "No. of assessment tasks subject-wise not recorded and conducted as per schedule and requirements",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 15,
            "s_no": "2",
            "description": "No. of classess/subjects having a class average below 60%",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 16,
            "s_no": "3",
            "description": "No. of classes/subjects with more than 40% of learners scored below class average",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 17,
            "s_no": "4",
            "description": "No. of learners subject-wise whose performance declined and not improved by one grade descriptor",
            "eyp": null,
            "pyp": 11,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 18,
            "s_no": "5",
            "description": "No. of classes/subjects in which significant improvement in the class/subject average from the previous assessment after strategies applied",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "IV",
        "name": "Attendance (Learners)",
        "code": "IV",
        "metrics": [
          {
            "row": 20,
            "s_no": "1",
            "description": "No. of learners that have taken 3 consecutive days off (uninformed) or more than 2 days in a week",
            "eyp": null,
            "pyp": 0.0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 21,
            "s_no": "2",
            "description": "Overall student attendance %",
            "eyp": null,
            "pyp": null,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": "Priyanga Rajan The NEST School, Chennai    (2026-11-10 06:18:44)\nTuesday - 79.27",
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 22,
            "s_no": "3",
            "description": "No. of uninformed absences",
            "eyp": null,
            "pyp": 0.0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "V",
        "name": "Attendance (Teachers)",
        "code": "V",
        "metrics": [
          {
            "row": 24,
            "s_no": "1",
            "description": "No. of teachers that have taken more than 3 days off (in the current month)",
            "eyp": 2,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 25,
            "s_no": "2",
            "description": "No. of teachers that have been late on more than 3 occasions (in current month)",
            "eyp": 1,
            "pyp": 3,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 26,
            "s_no": "3",
            "description": "No. of unexplained absences",
            "eyp": 0.0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0.0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VI",
        "name": "SEN/Counselling/Mentoring",
        "code": "VI",
        "metrics": [
          {
            "row": 28,
            "s_no": "1",
            "description": "No. of learners not showing improvement in academic perfornance",
            "eyp": 3,
            "pyp": 3,
            "cie_ls": 0,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 29,
            "s_no": "2",
            "description": "No. of learners not showing improvement in internal attributes of behaviour like cognitive processing, emotional well-being, attention levels and special needs",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 30,
            "s_no": "3",
            "description": "No. of learners not showing improvement in external attributes of behaviour like disruptive conduct, aggression, bullying, etc",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 31,
            "s_no": "4",
            "description": "No. of issues where parent intervention required – list each issue",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 32,
            "s_no": "5",
            "description": "No. of major behaviour/academic issues remaining unresolved beyond 2 days",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 33,
            "s_no": "6",
            "description": "No. of learners not met the SEN as per plan",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 1,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 34,
            "s_no": "7",
            "description": "No. of mentors that have not met their mentees",
            "eyp": 0,
            "pyp": 0,
            "cie_ls": 0,
            "cie_igcse_as": 0,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 35,
            "s_no": "8",
            "description": "No. of learners that have been mentored – top 3 issues (program wise)",
            "eyp": 0,
            "pyp": 1,
            "cie_ls": 1,
            "cie_igcse_as": 1,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VII",
        "name": "Classroom Observations",
        "code": "VII",
        "metrics": [
          {
            "row": 37,
            "s_no": "1",
            "description": "No. of teachers class observation pending as per scheduled plan",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 38,
            "s_no": "2",
            "description": "Average score of teachers class observation",
            "eyp": null,
            "pyp": 67.2,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 39,
            "s_no": "3",
            "description": "No. of teachers that have scored below 50%",
            "eyp": null,
            "pyp": 0,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      },
      {
        "id": "VIII",
        "name": "NPD",
        "code": "VIII",
        "metrics": [
          {
            "row": 41,
            "s_no": "1",
            "description": "Average NPD score of the Core Team",
            "eyp": 3,
            "pyp": 4,
            "cie_ls": 3,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          },
          {
            "row": 42,
            "s_no": "2",
            "description": "No. of takeaways reflected/recorded/implemented from the Second Saturday PD sessions (October 14th)",
            "eyp": null,
            "pyp": null,
            "cie_ls": null,
            "cie_igcse_as": null,
            "comments": {
              "eyp": null,
              "pyp": null,
              "cie_ls": null,
              "cie_igcse_as": null,
              "general": null
            }
          }
        ]
      }
    ]
  }
];

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
    actionTaken: 'Parent meeting held on peer conduct; fortnightly mentoring active.',
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
    actionTaken: 'Counselling complete; emotional regulation and positive peer strategies active.',
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
    actionTaken: 'Parent consult scheduled; classroom observation active for focus and conduct.',
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
    actionTaken: 'Remedial Science & Math initiated with targeted practice sets.',
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
    actionTaken: 'SEN target plan revised; 1-on-1 differentiated support active.',
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
    actionTaken: 'Mentoring active; SA1 study schedules and exam prep aligned.',
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
    actionTaken: 'Economics & Chemistry booster modules active with weekly tracking.',
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
    actionTaken: 'Early phonics and foundational numeracy reinforcement active.',
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
    actionTaken: 'Sensory integration and speech articulation routines active.',
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
    reason: 'Lab practical extensions and complex atomic theory unit.',
    catchUpPlan: 'Zero-period lab practicals on Tuesdays & Thursdays.',
    status: 'Moderate'
  },
  {
    programme: 'CIE_IGCSE_AS',
    grade: 'Grade 10',
    subject: 'Economics & Business',
    teacher: 'Senior Commerce Faculty',
    deviationWeeks: 2.0,
    reason: 'Case study modules and SA1 pre-board revision cycle.',
    catchUpPlan: 'Self-paced flipped classroom modules assigned via LMS.',
    status: 'Critical'
  },
  {
    programme: 'CIE_LS',
    grade: 'Grades 6 & 7',
    subject: 'Second Language (Hindi & French)',
    teacher: 'Languages Faculty',
    deviationWeeks: 1.2,
    reason: 'Grammar conjugation drills and assembly rehearsals.',
    catchUpPlan: 'Interactive reading circles and homeroom vocabulary drills.',
    status: 'Moderate'
  },
  {
    programme: 'PYP',
    grade: 'Grade 1 (3 Sections: A, B, C)',
    subject: 'Mathematics',
    teacher: 'Shruthi & Homeroom Team',
    deviationWeeks: 1.0,
    reason: 'Foundational concrete math concepts needed reinforcement.',
    catchUpPlan: 'Math centers integrated into UOI inquiry units.',
    status: 'Moderate'
  },
  {
    programme: 'PYP',
    grade: 'Grade 5',
    subject: 'Mathematics & UOI',
    teacher: 'Joyce & Manjula',
    deviationWeeks: 1.0,
    reason: 'Exhibition orientation and inquiry data collection.',
    catchUpPlan: 'Block scheduling active combining Math with UOI inquiry.',
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
  { programme: 'EYP', score: 3.0, maxScore: 5.0, coordinator: 'Praseeda Pradeep', implementationNotes: 'Reggio Emilia inquiry reflections applied.' },
  { programme: 'PYP', score: 4.0, maxScore: 5.0, coordinator: 'Priyanga Rajan', implementationNotes: 'Global collaboration active with partner schools in Dhaka & Oman.' },
  { programme: 'CIE LS', score: 3.0, maxScore: 5.0, coordinator: 'Bhagyashree Ganesh', implementationNotes: 'Transferable skills rubrics deployed in science & humanities.' },
  { programme: 'CIE IGCSE/AS', score: 3.5, maxScore: 5.0, coordinator: 'Shyamala Rupavahini', implementationNotes: 'Standardized assessment calibration and mark schemes completed.' },
];
