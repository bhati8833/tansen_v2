import urllib.request, json, os, pathlib
SCRIPT_DIR = pathlib.Path(__file__).parent
CREDS_FILE = SCRIPT_DIR / "secret" / "credentials.env"
env = {}
with open(CREDS_FILE) as f:
    for line in f:
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, _, v = line.partition("=")
            env[k.strip()] = v.strip().strip('"').strip("'")

# Find the zone id for tansengurugram.com
req = urllib.request.Request(
    "https://api.cloudflare.com/client/v4/zones?name=tansengurugram.com",
    headers={"Authorization": f"Bearer {env['CLOUDFLARE_API_TOKEN']}"}
)
res = json.loads(urllib.request.urlopen(req).read().decode())
zone_id = res['result'][0]['id']

# Get workers routes
req = urllib.request.Request(
    f"https://api.cloudflare.com/client/v4/zones/{zone_id}/workers/routes",
    headers={"Authorization": f"Bearer {env['CLOUDFLARE_API_TOKEN']}"}
)
routes = json.loads(urllib.request.urlopen(req).read().decode())
print("WORKERS ROUTES:")
print(json.dumps(routes['result'], indent=2))
