import os, urllib.request, urllib.parse, ssl, json, pathlib

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

def cpanel_api(module, func, **params):
    qs = "&".join(f"{k}={urllib.parse.quote(str(v))}" for k, v in params.items())
    url = f"https://{env['CPANEL_HOST']}:{env['CPANEL_PORT']}/json-api/cpanel?cpanel_jsonapi_user={env['CPANEL_USER']}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module={module}&cpanel_jsonapi_func={func}&{qs}"
    req = urllib.request.Request(url, headers={"Authorization": f"cpanel {env['CPANEL_USER']}:{env['CPANEL_TOKEN']}"})
    resp = urllib.request.urlopen(req, context=ctx, timeout=30)
    return json.loads(resp.read().decode())

res = cpanel_api("Fileman", "getfilecontent", dir="public_html_backup_php", file=".htaccess")
data = res.get("cpanelresult", {}).get("data", [])
if data and "content" in data[0]:
    print("Found in public_html_backup_php:")
    print(data[0]["content"])
else:
    res = cpanel_api("Fileman", "getfilecontent", dir="public_html_backup_20260607_073938", file=".htaccess")
    data = res.get("cpanelresult", {}).get("data", [])
    if data and "content" in data[0]:
        print("Found in public_html_backup_20260607_073938:")
        print(data[0]["content"])
    else:
        print("Not found in backups")
