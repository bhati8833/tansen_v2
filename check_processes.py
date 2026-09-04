import urllib.request, json, ssl, pathlib
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

# We can try to use Cron to run `ps aux` and save it to a file
# But cPanel API can't run arbitrary commands easily if we don't have SSH.
# Wait, let's just check the cPanel Cron jobs to see if they are starting a server!
url = f"https://{env['CPANEL_HOST']}:{env['CPANEL_PORT']}/execute/Cron/list_line"
req = urllib.request.Request(url, headers={"Authorization": f"cpanel {env['CPANEL_USER']}:{env['CPANEL_TOKEN']}"})
try:
    resp = urllib.request.urlopen(req, context=ctx, timeout=30)
    res = json.loads(resp.read().decode())
    print("CRON JOBS:")
    print(json.dumps(res, indent=2))
except Exception as e:
    print(e)
