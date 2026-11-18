import urllib.request, re, json

base = 'https://nest-school-erp-2.vercel.app'
url = base + '/assets/index-eL7vV66w.js'
content = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')

# Search for routes in React Router
routes_def = re.findall(r'path:\s*["\']([^"\']+)["\'],\s*element:', content)
print("React Router paths:", routes_def)

# Search for student data or mock data or school data
data_samples = re.findall(r'(\[\{[^{}]*?name:[^{}]*?grade:[^{}]*?\}\])', content)
print(f"Found {len(data_samples)} data samples")
if data_samples:
    print("Sample data:", data_samples[0][:500])

# Check student count, student fields
students_matches = re.findall(r'\{[^{}]*?studentName:[^{}]*?\}', content)
print(f"studentName matches: {len(students_matches)}")
if students_matches:
    print(students_matches[0])
