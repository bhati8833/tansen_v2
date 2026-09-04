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
url = f"https://{env['CPANEL_HOST']}:{env['CPANEL_PORT']}/execute/Fileman/get_file_content?dir=public_html_backup_20260607_073938&file=.htaccess"
req = urllib.request.Request(url, headers={"Authorization": f"cpanel {env['CPANEL_USER']}:{env['CPANEL_TOKEN']}"})
resp = urllib.request.urlopen(req, context=ctx, timeout=30)
res = json.loads(resp.read().decode())
print(res.get("data", {}).get("content", "NOT FOUND"))
