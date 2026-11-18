import urllib.request, re

url = 'https://nest-school-erp-2.vercel.app/assets/index-eL7vV66w.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    content = urllib.request.urlopen(req).read().decode('utf-8')
    print('JS size:', len(content))
    with open('downloaded_site_sample.js', 'w', encoding='utf-8') as f:
        f.write(content[:100000])
    
    # check for strings containing router or routes
    routes = set(re.findall(r'["\'](/[\w\-/]+)["\']', content))
    route_candidates = [r for r in routes if any(k in r for k in ['overview', 'class', 'attend', 'assess', 'npd', 'sen', 'counsel', 'report', 'setting', 'assign', 'home'])]
    print('Found routes:', route_candidates)
except Exception as e:
    print('Error:', e)
