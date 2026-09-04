import urllib.request
import urllib.parse
try:
    req = urllib.request.Request("http://127.0.0.1/", headers={"Host": "tansengurugram.com"})
    resp = urllib.request.urlopen(req, timeout=10)
    print(resp.status, resp.headers)
    print(resp.read().decode())
except urllib.error.HTTPError as e:
    print(e.code, e.headers)
    print(e.read().decode())

print("--- jr-wing ---")
try:
    req = urllib.request.Request("http://127.0.0.1/jr-wing/", headers={"Host": "tansengurugram.com"})
    resp = urllib.request.urlopen(req, timeout=10)
    print(resp.status, resp.headers)
    print(resp.read().decode())
except urllib.error.HTTPError as e:
    print(e.code, e.headers)
    print(e.read().decode())
