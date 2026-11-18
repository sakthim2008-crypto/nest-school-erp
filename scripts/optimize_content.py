import os
import re

base_dir = r'C:\Users\M MARISAKTHI\.gemini\antigravity\scratch\school-performance-dashboard\src'

# 1. Optimize schoolData.ts
school_data_path = os.path.join(base_dir, 'data', 'schoolData.ts')
with open(school_data_path, 'r', encoding='utf-8') as f:
    sd_content = f.read()

replacements_sd = [
    (
        'Parent meeting held regarding peer interactions and classroom conduct; mentoring plan active with fortnightly review.',
        'Parent meeting held on peer conduct; fortnightly mentoring active.'
    ),
    (
        'Counselling session completed with school counsellor; emotional regulation and positive peer engagement strategies shared.',
        'Counselling complete; emotional regulation and positive peer strategies active.'
    ),
    (
        'Parent intervention scheduled; focused classroom observation in progress for disruptive tendencies.',
        'Parent consult scheduled; classroom observation active for focus and conduct.'
    ),
    (
        'Remedial subject support initiated for Science and Mathematics; targeted worksheets provided.',
        'Remedial Science & Math initiated with targeted practice sets.'
    ),
    (
        'SEN target plan revised; 1-on-1 differentiated learning support during study periods.',
        'SEN target plan revised; 1-on-1 differentiated support active.'
    ),
    (
        'Mentoring sessions conducted; examination preparation and study schedule alignment for SA1.',
        'Mentoring active; SA1 study schedules and exam prep aligned.'
    ),
    (
        'Subject-specific booster modules in Economics and Chemistry; weekly progress tracking.',
        'Economics & Chemistry booster modules active with weekly tracking.'
    ),
    (
        'Early childhood phonics and foundational number concept reinforcement with homeroom facilitator.',
        'Early phonics and foundational numeracy reinforcement active.'
    ),
    (
        'Sensory integration and speech articulation activities integrated into daily routine.',
        'Sensory integration and speech articulation routines active.'
    ),
    (
        'Rigorous laboratory practical sessions and complex quantum atomic theory unit extension.',
        'Lab practical extensions and complex atomic theory unit.'
    ),
    (
        'Extra 45-minute zero-period laboratory sessions scheduled on Tuesdays and Thursdays.',
        'Zero-period lab practicals on Tuesdays & Thursdays.'
    ),
    (
        'Case study analysis and SA1 pre-board revision cycle integration.',
        'Case study modules and SA1 pre-board revision cycle.'
    ),
    (
        'Curated self-paced asynchronous flipped classroom modules provided via LMS.',
        'Self-paced flipped classroom modules assigned via LMS.'
    ),
    (
        'Grammar conjugation mastery and assembly presentation rehearsals.',
        'Grammar conjugation drills and assembly rehearsals.'
    ),
    (
        'Combined interactive reading circles and targeted vocabulary drills during homeroom.',
        'Interactive reading circles and homeroom vocabulary drills.'
    ),
    (
        'Concrete foundational manipulative concepts required extra reinforcement.',
        'Foundational concrete math concepts needed reinforcement.'
    ),
    (
        'Integrated math centers into inquiry unit (UOI) for experiential numeracy application.',
        'Math centers integrated into UOI inquiry units.'
    ),
    (
        'Exhibition planning orientation and scientific inquiry data collection phase.',
        'Exhibition orientation and inquiry data collection.'
    ),
    (
        'Block scheduling implemented to combine Math data handling with UOI inquiry.',
        'Block scheduling active combining Math with UOI inquiry.'
    ),
    (
        'Second Saturday PD reflections on Reggio Emilia inquiry pedagogy recorded and reviewed.',
        'Reggio Emilia inquiry reflections applied.'
    ),
    (
        'Global collaboration initiated with partner IB/Cambridge schools in Dhaka and Oman.',
        'Global collaboration active with partner schools in Dhaka & Oman.'
    ),
    (
        'Transferable skills rubric deployed across science and humanities projects.',
        'Transferable skills rubrics deployed in science & humanities.'
    ),
    (
        'Standardized assessment calibration and mark scheme moderation executed.',
        'Standardized assessment calibration and mark schemes completed.'
    ),
]

for old, new in replacements_sd:
    if old in sd_content:
        sd_content = sd_content.replace(old, new)
        print(f"Replaced in schoolData.ts: '{old[:30]}...'")
    else:
        print(f"NOT FOUND in schoolData.ts: '{old[:30]}...'")

with open(school_data_path, 'w', encoding='utf-8') as f:
    f.write(sd_content)

print("schoolData.ts optimized successfully!")
