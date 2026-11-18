import urllib.request, re

base = 'https://nest-school-erp-2.vercel.app'
url = base + '/assets/index-eL7vV66w.js'
content = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')

for kw in ['overview', 'classroom', 'attendance', 'assessment', 'counsel', 'observation', 'npd']:
    for match in re.finditer(kw, content, re.IGNORECASE):
        start = max(0, match.start() - 100)
        end = min(len(content), match.end() + 100)
        print(f"[{kw}]: {content[start:end]}\n")
