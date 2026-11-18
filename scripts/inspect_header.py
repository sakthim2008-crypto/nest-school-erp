import urllib.request, re

base = 'https://nest-school-erp-2.vercel.app'
url = base + '/assets/index-eL7vV66w.js'
content = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')

# Search for the Header component
pos = content.find('streakDays')
print("Snippet around streakDays:")
print(content[pos-200:pos+800])
