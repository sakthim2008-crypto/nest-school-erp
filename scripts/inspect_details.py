import urllib.request, re

base = 'https://nest-school-erp-2.vercel.app'
url = base + '/assets/index-eL7vV66w.js'
content = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')

# Find gamification / streak / level details
print("Gamification:")
for m in re.finditer(r'(levelTitle|streakDays|stars|addStars|pop-btn)', content):
    start = max(0, match := m.start() - 50)
    end = min(len(content), m.end() + 100)
    print(content[start:end])
    break

# Find level titles
levels = re.findall(r'(\["[A-Za-z\s]+","[A-Za-z\s]+"[^\]]*?\])', content)
for l in levels[:10]:
    if any(k in l for k in ['Novice', 'Scholar', 'Champion', 'Master', 'Explorer']):
        print("Found levels:", l)

# Find CSS classes and theme
css_url = base + '/assets/index-DMMj45h5.css'
css_content = urllib.request.urlopen(urllib.request.Request(css_url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
print("CSS size:", len(css_content))
pop_btn = re.findall(r'\.pop-btn[^{]*?\{[^}]*?\}', css_content)
print("pop-btn CSS:", pop_btn)

doodles = re.findall(r'doodles[^{]*?\{[^}]*?\}', css_content)
print("doodles CSS:", doodles)
