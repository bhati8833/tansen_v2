import os, urllib.request, ssl, json, pathlib
SCRIPT_DIR = pathlib.Path(__file__).parent
CREDS_FILE = SCRIPT_DIR / "secret" / "credentials.env"
env = {}
with open(CREDS_FILE) as f:
    for line in f:
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, _, v = line.partition("=")
            env[k.strip()] = v.strip().strip('"').strip("'")
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
    req = urllib.request.Request("http://" + env['CPANEL_HOST'] + "/", headers={"Host": "tansengurugram.com"})
    resp = urllib.request.urlopen(req, timeout=10, context=ctx)
    print(resp.status, resp.headers)
except urllib.error.HTTPError as e:
    print(e.code, e.headers)

try:
    req = urllib.request.Request("https://" + env['CPANEL_HOST'] + "/", headers={"Host": "tansengurugram.com"})
    resp = urllib.request.urlopen(req, timeout=10, context=ctx)
    print(resp.status, resp.headers)
except urllib.error.HTTPError as e:
    print(e.code, e.headers)
