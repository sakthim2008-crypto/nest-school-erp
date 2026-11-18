import urllib.request, re

base = 'https://nest-school-erp-2.vercel.app'
chunks = [
    '/assets/index-eL7vV66w.js',
    '/assets/vendor-react-BBmXDjQK.js',
    '/assets/vendor-icons-BsuOOn3E.js',
    '/assets/vendor-charts-BVHSpveZ.js'
]

for ch in chunks:
    try:
        url = base + ch
        content = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
        print(f"\n--- Chunk: {ch} (size: {len(content)}) ---")
        for kw in ['overview', 'classroom', 'attendance', 'planner', 'syllabus', 'assessment', 'counselling', 'counsel', 'observation', 'npd']:
            m = re.findall(kw, content, re.IGNORECASE)
            if m:
                print(f"  {kw}: {len(m)} matches")
    except Exception as e:
        print(ch, e)

# Also let's search if there are other JS files referenced inside index
index_content = urllib.request.urlopen(urllib.request.Request(base + '/assets/index-eL7vV66w.js', headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
other_js = re.findall(r'["\'](/assets/[^"\']+\.js)["\']', index_content)
print("Other JS in index:", set(other_js))
