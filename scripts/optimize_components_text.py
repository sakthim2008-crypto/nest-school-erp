import os
import sys

# Ensure UTF-8 printing in Windows console
sys.stdout.reconfigure(encoding='utf-8')

base_dir = r'C:\Users\M MARISAKTHI\.gemini\antigravity\scratch\school-performance-dashboard\src'

def update_file(rel_path, replacements):
    filepath = os.path.join(base_dir, rel_path)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = 0
    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            changed += 1
            print(f"[{rel_path}] Replaced: {old[:40]}... -> {new[:40]}...")
        else:
            print(f"[{rel_path}] NOT FOUND: {old[:40]}...")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"[{rel_path}] Total changes: {changed}")

# 1. TopNavbar.tsx
update_file(os.path.join('components', 'TopNavbar.tsx'), [
    ('Music, FL, UOI & Math planners pending evaluation for Grade 1-5.', 'Grade 1-5 planners pending evaluation.'),
    ('Physics & Chemistry practical modules running 1.5 weeks behind schedule.', 'Practical modules 1.5 weeks behind plan.'),
    ('68 of 68 planned teacher observations completed with 0 pending.', 'All 68 observations completed on schedule.'),
    ('Scheduled with Arnav Vinayak parents regarding peer conduct.', 'Parent meeting scheduled regarding peer conduct.'),
    ('Search metrics, students, faculties, subjects...', 'Search metrics, students, faculty, subjects...'),
])

# 2. WelcomeBanner.tsx
update_file(os.path.join('components', 'WelcomeBanner.tsx'), [
    (
        'Synthesized operations, curriculum pacing, attendance analytics and pastoral support data for weekly executive review by the Head of Academics & Head of School.',
        'Synthesized academic performance, curriculum pacing, attendance, and pastoral care analytics for HoA & HoS executive review.'
    ),
    ('0 teachers &lt; 50%', '100% ≥ 50% benchmark'),
    ('0 unresolved &gt; 2 days', '100% resolved < 48h'),
    ('Zero delayed &gt; 7 days', '100% on-time turnaround'),
    ('Review Cycle History (7 Weeks Recorded)', 'Weekly Review History (7 Cycles)'),
])

# 3. KpiCardsRow.tsx
update_file(os.path.join('components', 'KpiCardsRow.tsx'), [
    ('Institutional Target: ≥ 90%', 'Target: ≥ 90%'),
    ('0 Classes Below 60% Average', '0 Classes < 60% Average'),
    ('100% Assessments Conducted', '100% On-Schedule'),
    ('11 PYP learners in booster cycle', '11 PYP learners in booster plan'),
    ('100% Resolved in < 2 Days', '100% Resolved < 48h'),
    ('Active Pastoral Care', 'Active Pastoral'),
    ('2 Parent consults underway', '2 Parent consults active'),
    ('Curriculum Evaluation Recommendations', 'Planners Awaiting Sign-off'),
    ('68 of 68 Faculty Appraisals Done', '68 of 68 Appraisals Completed'),
    ('0 Teachers Below 50%', '0 Teachers < 50%'),
    ('Full Compliance', '100% Compliance'),
    ('EYP leads with 76.6% average', 'EYP leads with 76.6% avg'),
])

# 4. ProgrammeComparison.tsx
update_file(os.path.join('components', 'ProgrammeComparison.tsx'), [
    ('Overall weekly learner attendance rate by academic programme.', 'Weekly student attendance rate by programme.'),
    ('Count of curriculum planners evaluated with pending recommendations.', 'Planners with pending recommendations.'),
    ('Identified learners receiving 1-on-1 differentiated remedial support.', 'Students receiving active 1-on-1 remedial support.'),
    ('Formal pedagogical observation rating evaluated against standard rubrics.', 'Formal observation appraisal average score.'),
    ('New Pedagogical Development and implementation of Saturday PD takeaways.', 'Core NPD team rating and PD implementation.'),
    ('Cross-programme benchmarking across EYP, PYP, CIE Lower Secondary, and CIE IGCSE/AS Level.', 'Cross-programme benchmarks across EYP, PYP, CIE Lower Secondary, and CIE IGCSE/AS.'),
    ('High inquiry engagement & parent involvement.', 'High inquiry engagement & parent involvement.'),
    ('Global collaboration with Oman & Dhaka schools.', 'Global partner collaboration with Oman & Dhaka.'),
    ('96%+ attendance & zero overdue mark sheets.', '96%+ attendance & 100% on-time marking.'),
    ('SA1 pre-board assessment rubrics aligned.', 'SA1 pre-board exam rubrics aligned.'),
    ('11 incomplete planners in Grade 1-5 to be signed.', '11 incomplete planners awaiting sign-off.'),
    ('Hindi & French assembly rehearsals deviation.', 'Language catch-up active (assembly rehearsals).'),
    ('AS Chemistry & Physics lab practical catch-up.', 'AS lab practical zero-period catch-up active.'),
])

# 5. AcademicProgressSection.tsx
update_file(os.path.join('components', 'AcademicProgressSection.tsx'), [
    (
        'Section I Governance: Curriculum planner evaluations, learning outcome benchmarks, innovative pedagogy, and transferable skills.',
        'Curriculum planners, learning outcome benchmarks, innovative pedagogy, and transferable skills.'
    ),
    (
        '0 classes/subjects flagged below 70% learning outcomes measured via Formative Assessments.',
        'Zero classes below 70% in Formative Assessment learning outcomes.'
    ),
    (
        'EYP & CIE Lower Secondary achieved 100% planner submission and evaluation compliance.',
        'EYP and CIE Lower Secondary achieved 100% planner completion.'
    ),
    (
        'International peer teaching and student collaborative units documented in weekly evidence logs.',
        'Active joint inquiry units with Cambridge/IB schools in Oman and Dhaka.'
    ),
    (
        'Formative assessment benchmarks measured across all year groups.',
        'Formative assessment outcomes across all cohorts.'
    ),
    (
        'All 7 core indicators verified by Programme Coordinators for Head of School sign-off.',
        'Seven core indicators verified by Coordinators for HoS review.'
    ),
])

# 6. SyllabusSection.tsx
update_file(os.path.join('components', 'SyllabusSection.tsx'), [
    (
        'Monitoring plan vs. actual curriculum pace, planner evaluations, and pedagogical delivery.',
        'Plan vs. actual curriculum pacing, planner evaluation status, and catch-up schedules.'
    ),
    ('PYP Grade 1 Math (1 wk) & IGCSE/AS Lab Practicals (1.5 wks).', 'PYP Grade 1 Math (+1 wk) & AS Practical Labs (+1.5 wks).'),
    ('11 in PYP (Music, UOI, Math) and 10 in IGCSE/AS awaiting final review.', '11 in PYP & 10 in IGCSE/AS pending coordinator review.'),
    ('Active global peer-collaboration with Cambridge/IB schools in Oman and Dhaka.', 'Joint inquiry projects with partner schools in Oman & Dhaka.'),
    (
        'Weekly count of classes/subjects with &gt; 1 week deviation across all academic divisions.',
        'Weekly count of classes with &gt; 1 week deviation across divisions.'
    ),
    (
        'Granular subject-level tracking extracted directly from coordinator notes and reviews.',
        'Subject-level tracking extracted from coordinator reviews.'
    ),
])

# 7. AssignmentsSection.tsx
update_file(os.path.join('components', 'AssignmentsSection.tsx'), [
    (
        'Monitoring homework submission adherence, marking turnaround SLA (&lt; 7 days), and student engagement.',
        'Homework submission tracking and teacher evaluation SLA (&lt; 7 days) compliance.'
    ),
    (
        'Zero overdue marking across all faculties for 7 consecutive weeks.',
        'Zero delayed corrections across all faculties for 7 weeks.'
    ),
    (
        'Concentrated in PYP Grades 3-5; homeroom mentors following up with parents.',
        'PYP Grades 3-5 cohort; homeroom parent follow-ups active.'
    ),
    (
        'Faculties returning student feedback on assignments within 3-4 days.',
        'Average teacher evaluation returned within 3.4 days.'
    ),
    (
        'Tracking Section II Metrics 1.0 & 2.0 across all seven review weeks.',
        'Section II Metrics 1.0 & 2.0 across all 7 review cycles.'
    ),
])

# 8. AssessmentsSection.tsx
update_file(os.path.join('components', 'AssessmentsSection.tsx'), [
    (
        'Formative (FA) and Summative (SA1) evaluation outcomes, class averages, and grade descriptor tracking.',
        'FA & SA1 assessment results, class averages, and grade descriptor progression.'
    ),
    ('100% of classes achieving &ge; 60% average.', '100% of classes maintain &ge; 60% average.'),
    ('Even score distribution across all cohorts.', 'Normal score distribution across all cohorts.'),
    ('PYP cohort identified; remedial worksheets issued.', '11 PYP students in structured booster cycles.'),
    ('100% assessments recorded and conducted per calendar.', '100% conducted as per examination schedule.'),
    (
        'Monitoring learners not yet improved by one grade descriptor (Section III Metric 4.0).',
        'Grade descriptor decline monitoring (Section III Metric 4.0).'
    ),
    (
        'Standard Operating Procedure (SOP) triggered whenever a student drops &ge; 1 grade descriptor:',
        'Protocol triggered when a student declines &ge; 1 grade descriptor:'
    ),
    ('Teacher identifies conceptual vs procedural missteps within 48 hours.', 'Conceptual vs procedural missteps identified within 48h.'),
    ('Differentiated practice sets assigned via Google Classroom.', 'Differentiated practice sets assigned via LMS.'),
    ('Coordinators audit post-intervention re-assessment scores every Monday.', 'Re-assessment outcomes reviewed every Monday.'),
])

# 9. AttendanceSection.tsx
update_file(os.path.join('components', 'AttendanceSection.tsx'), [
    (
        'Multi-week turnout trends, cohort distribution, daily day-by-day profiles, and consecutive absence monitoring.',
        'Weekly turnout trajectories, cohort distribution, daily patterns, and consecutive leaves.'
    ),
    ('Highest attendance record across the school (Grades 6-8).', 'Institutional record attendance (Grades 6-8).'),
    ('Thursday consistently logs highest student participation.', 'Consistent weekly turnout peak across PYP.'),
    ('Veera Chitran & Adithya (EYP) — medical certificates documented.', 'Medical leave documentation verified for both learners.'),
    ('Veera Chitran & Adithya (EYP) — verified medical certificates on file.', 'Medical leave documentation verified for both learners.'),
    ('Weekly percentage rates for EYP, PYP, CIE Lower Secondary, and CIE IGCSE/AS.', 'Weekly attendance rates across all four divisions.'),
    (
        'Action Note: AS Level attendance (74%) dipped due to intense external laboratory practice schedules; attendance recovery protocol activated.',
        'Note: AS Level attendance (74%) dipped due to external lab sessions; recovery plan active.'
    ),
])

# 10. TeacherAttendanceSection.tsx
update_file(os.path.join('components', 'TeacherAttendanceSection.tsx'), [
    (
        'Monthly absence monitoring (&gt; 3 days), late arrivals tracking, and substitution coverage.',
        'Faculty absence tracking (&gt; 3 days), late arrivals, and substitution continuity.'
    ),
    ('100% staff attendance accounted with prior sanctions.', '100% staff attendance accounted with verified sanctions.'),
    ('2 in EYP (Srilakshmi - house warming; Priya) & 1 in PYP.', '2 in EYP (Srilakshmi, Priya) & 1 in PYP.'),
    ('3 in PYP & 1 in EYP (Priya) flagged for HR punctuality review.', '3 in PYP & 1 in EYP (Priya) under punctuality review.'),
    ('Audited for the current review month under Section V Guidelines.', 'Audited for the review month under Section V standards.'),
    ('Verified substitution protocol managed under HoA oversight:', 'Substitution protocol under HoA oversight:'),
    ('Sanctioned personal leave; full lesson plans shared with substitute educator.', 'Sanctioned personal leave; lesson plans shared with substitute.'),
    ('Punctuality log reviewed by Coordinator; timetable adjusted for commute feasibility.', 'Punctuality review complete; commute schedule adjusted.'),
    ('100% replacement coverage recorded across all classrooms.', '100% substitution coverage recorded across classrooms.'),
])

# 11. LearnerSupportSection.tsx
update_file(os.path.join('components', 'LearnerSupportSection.tsx'), [
    ('Lead: Pooja (Head of Learner Support) • Holistic emotional, behavioural, and specialized academic support.', 'Lead: Pooja (Learner Support) • Holistic emotional, behavioural, and remedial support.'),
    ('Horizontal breakdown of students receiving pastoral, remedial, and specialized SEN care.', 'Breakdown of learners receiving pastoral, remedial, and SEN care.'),
    ('All 8 standard KPIs recorded across early years, primary, lower secondary and upper secondary.', 'Eight standard KPIs recorded across early years, primary, and secondary.'),
    ('Verified records extracted from Pooja\'s Learner Support and Coordinator reviews.', 'Verified records from Learner Support and Coordinator reviews.'),
])

# 12. ObservationsSection.tsx
update_file(os.path.join('components', 'ObservationsSection.tsx'), [
    (
        'Formal pedagogical quality appraisals (Section VII) against international teaching rubrics and standard learning walk observations.',
        'Pedagogical appraisals (Section VII) against teaching rubrics and learning walk observations.'
    ),
    ('100% of planned teacher observations completed.', '100% of scheduled observations completed.'),
    ('Zero sub-standard scores across all four wings.', 'Zero sub-standard scores across all divisions.'),
    ('EYP leading institutional benchmark with 76.6%.', 'EYP leads institutional rating with 76.6%.'),
    (
        'Detailed observation averages, commendations and growth focus areas for each academic division.',
        'Observation averages, commendations, and growth focus areas by division.'
    ),
])

# 13. NpdAnalyticsSection.tsx
update_file(os.path.join('components', 'NpdAnalyticsSection.tsx'), [
    (
        'Section VIII: New Pedagogical Development, Core Team capability ratings, and translation of PD session reflections into classroom learning.',
        'Section VIII: New Pedagogical Development ratings and implementation of PD workshop takeaways.'
    ),
    (
        'Evaluating 5 teaching dimensions across programmes',
        'Five teaching dimensions evaluated across programmes'
    ),
    ('Joint inquiry projects on climate sustainability and cultural exchange webinars.', 'Joint inquiry units on sustainability and cultural exchange.'),
    ('Standardized marking standardization across Economics, Physics, Chemistry and Math.', 'Mark scheme standardization across Science, Commerce & Math.'),
    ('Sensory math learning centers and structured phonics integration.', 'Sensory math learning stations and phonics integration.'),
    ('Critical thinking and real-world problem solving rubrics deployed in student planners.', 'Critical thinking rubrics integrated into student planners.'),
])

# 14. ReportsSettingsSection.tsx
update_file(os.path.join('components', 'ReportsSettingsSection.tsx'), [
    ('Institutional Reports, Governance & Parameters', 'Institutional Reports & Governance Settings'),
    (
        'System configuration, data export utilities, Quality floor parameters, and Monday MIS coordinator audit logs.',
        'Threshold parameters, export utilities, and Monday MIS coordinator audit logs.'
    ),
    ('Operational benchmarks evaluated across all 4 coordinators.', 'Operational standards evaluated across coordinators.'),
    ('Triggers amber warning badge below this floor.', 'Triggers amber alert below this floor.'),
    ('Maximum turnaround time for teacher evaluations.', 'Maximum correction turnaround allowance.'),
    ('Resolution window for major student/parent cases.', 'Target resolution window for urgent cases.'),
    ('Minimum acceptable faculty classroom appraisal score.', 'Institutional passing appraisal floor.'),
    ('Approved by: Head of School & Executive Board', 'Approved: HoS & Academic Council'),
    ('Generate executive MIS summaries for leadership review.', 'Generate executive MIS summaries for leadership.'),
    ('7-week synthesized visual report', 'Synthesized 7-week board report'),
    ('Complete Excel workbook data dump', 'Full multi-week workbook export'),
    (
        'Verified log of weekly Monday submissions received by the Head of Academics.',
        'Timestamped Monday submissions verified by the Head of Academics.'
    ),
])

# 15. CriticalIssuesSection.tsx
update_file(os.path.join('components', 'CriticalIssuesSection.tsx'), [
    (
        'Red, Amber, Green status matrix highlighting operational risks, compliance exceptions, and institutional achievements.',
        'RAG status matrix highlighting operational priorities, compliance tracking, and achievements.'
    ),
    (
        '21 total planners evaluated with pending recommendations awaiting teacher completion and coordinator sign-off.',
        '21 planners evaluated with pending recommendations awaiting teacher completion.'
    ),
    (
        'Schedule dedicated Friday planner remediation hour before HoS submission.',
        'Conduct Friday planner completion clinic before HoS review.'
    ),
    (
        'PYP Grade 1 Math is running 1 week behind due to foundational hands-on math manipulatives. AS Physics/Chemistry lab practicals behind 1.5 weeks.',
        'PYP G1 Math (-1 wk, manipulatives) & AS Lab Practicals (-1.5 wks).'
    ),
    (
        'Execute zero-period Tuesday/Thursday practical catch-up sessions.',
        'Run zero-period Tuesday/Thursday practical catch-up labs.'
    ),
    (
        '20 students identified with non-submission or delayed submission on multiple assignments.',
        '20 students flagged for multiple assignment delays across PYP Grades 3–5.'
    ),
    (
        'Homeroom facilitators issue weekly digital homework tracker to parents.',
        'Issue weekly digital assignment logs to parents via LMS.'
    ),
    (
        '4 faculty members exceeded monthly punctuality allowance; commute issues cited.',
        '4 faculty members exceeded monthly late threshold; commute delays cited.'
    ),
    (
        'Conduct HR advisory meeting and provide flexible transit adjustment where permissible.',
        'Conduct HR punctuality advisory and transit schedule alignment.'
    ),
    (
        'Parent consultations active for Arnav Vinayak (peer dynamics/conduct) and Mikail (attention focus).',
        'Active parent consultations for Arnav Vinayak (conduct) and Mikail (focus).'
    ),
    (
        '0 assignments delayed beyond 7 days for teacher correction. 100% on-time feedback returned.',
        'Zero assignments overdue > 7 days across all wings; 100% SLA met.'
    ),
    (
        'Commend faculty during Friday staff briefing for rigorous adherence.',
        'Sustain prompt 3.4-day evaluation turnaround time.'
    ),
    (
        'Zero classes or subjects have an average below the 60% institutional floor.',
        'All classes perform at or above the 60% class average benchmark.'
    ),
    (
        'Continue differentiated formative assessment checks.',
        'Maintain differentiated formative assessment pacing.'
    ),
    (
        'Zero major behavioural or academic issues remain unresolved beyond 48 hours.',
        'Zero major behavioural or academic incidents unresolved beyond 48 hours.'
    ),
    (
        'Institutional standard maintained across all wings.',
        'Sustain rapid 48-hour case resolution protocol.'
    ),
    (
        '68 of 68 planned teacher observations completed; zero observations pending.',
        '68 of 68 scheduled observations completed; zero observations pending.'
    ),
    (
        'Proceed to Term 2 peer cross-observation cycle.',
        'Initiate Term 2 cross-wing peer observation cycle.'
    ),
])

# 16. App.tsx
update_file('App.tsx', [
    (
        'Plan vs. actual curriculum tracking under Section I of the HoS MIS review.',
        'Section I pacing audit and catch-up schedules.'
    ),
    (
        'Recent pastoral care, academic remedial, and counselling cases from Pooja\'s team.',
        'Section VI remedial, counselling, and parental follow-ups.'
    ),
])

print("All components text optimized successfully!")
