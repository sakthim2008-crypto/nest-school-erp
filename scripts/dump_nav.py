import urllib.request, re

base = 'https://nest-school-erp-2.vercel.app'
url = base + '/assets/index-eL7vV66w.js'
content = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')

# Find the definition of k=[{name:
m = re.search(r'k=\[(\{name:\"Overview\"[^\;]+?)\]', content)
if m:
    print("Found navigation items:")
    items = re.findall(r'\{name:\"([^\"]+)\",path:\"([^\"]+)\"[^}]*?(?:emoji:\"([^\"]+)\")?[^}]*?\}', m.group(1))
    for item in items:
        print(item)
    print("\nFull string:\n", m.group(1))
else:
    print("Not found with regex, let's search name:\"Overview\"")
    pos = content.find('{name:"Overview"')
    print(content[pos:pos+2000])
