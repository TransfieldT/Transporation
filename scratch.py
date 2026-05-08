import urllib.request
import json
url = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/svgs/brands/whatsapp.svg"
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    print("FA WhatsApp:")
    print(html)
except Exception as e:
    print(e)
