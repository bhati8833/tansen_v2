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

print("Attempting to restore .htaccess from public_html_backup_php...")
# First, let's rename the current .htaccess just in case
cpanel_api("Fileman", "renamefiles", sourcefiles=".htaccess", destfiles=".htaccess_bad", dir="public_html")

# Copy from backup
res = cpanel_api("Fileman", "copyfiles", sourcefiles=".htaccess", destfiles=".htaccess", sourcepath="public_html_backup_php", destpath="public_html")
print(res)

print("Checking if .htaccess restored successfully...")
res = cpanel_api("Fileman", "listfiles", dir="public_html", showdotfiles=1)
files = [f["file"] for f in res.get("cpanelresult", {}).get("data", [])]
print(".htaccess in public_html:" , ".htaccess" in files)
