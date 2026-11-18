import urllib.request, re

url = 'https://nest-school-erp-2.vercel.app/assets/index-eL7vV66w.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
content = urllib.request.urlopen(req).read().decode('utf-8')

# Find all occurrences of navigation or sidebar or routes
print("Searching for navigation / routes:")
matches = re.findall(r'\{[^{}]*?(?:path|to|href|label|title)[^{}]*?\}', content)
for m in matches[:30]:
    if any(k in m for k in ['overview', 'Classroom', 'Attendance', 'Assessment', 'SEN', 'NPD']):
        print(m)

# Find sections or metric names
print("\nSearching for metric names:")
keywords = ['planners', 'Syllabus', 'clarification', 'innovative', 'transferrable', 'uninformed', 'late']
for kw in keywords:
    count = len(re.findall(kw, content, re.IGNORECASE))
    print(f"{kw}: {count} occurrences")
