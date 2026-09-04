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

# Fileman::extractfiles doesn't exist in api2, use fileop op=extract
# wait, actually cPanel API 2 Fileman::fileop op=extract takes sourcefiles and destfiles
# Let's just run a cron job? No, too slow.
# Let's use Fileman::fileop op=extract on public_html_backup_2026-07-10_00:15:54.tar.gz into a temp dir!
res = cpanel_api("Fileman", "mkdir", path=".", name="temp_extract")
res = cpanel_api("Fileman", "fileop", op="extract", sourcefiles="public_html_backup_2026-07-10_00:15:54.tar.gz", destfiles="temp_extract")
print("Extracting...", res)
