with open(r'C:\Users\M MARISAKTHI\AppData\Local\Programs\antigravity\downloaded_site_sample.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
students = re.findall(r'studentId:"(NEST-[^"]+)",firstName:"([^"]+)",lastName:"([^"]+)"', text)
print(f"Found {len(students)} students:")
for sid, fn, ln in students[:15]:
    print(f"  {sid}: {fn} {ln}")
