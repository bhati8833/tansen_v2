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

# Get page rules
req = urllib.request.Request(
    f"https://api.cloudflare.com/client/v4/zones/{zone_id}/pagerules",
    headers={"Authorization": f"Bearer {env['CLOUDFLARE_API_TOKEN']}"}
)
rules = json.loads(urllib.request.urlopen(req).read().decode())
print("PAGE RULES:")
print(json.dumps(rules['result'], indent=2))

# Get rulesets (redirects, etc)
req = urllib.request.Request(
    f"https://api.cloudflare.com/client/v4/zones/{zone_id}/rulesets",
    headers={"Authorization": f"Bearer {env['CLOUDFLARE_API_TOKEN']}"}
)
rulesets = json.loads(urllib.request.urlopen(req).read().decode())
for rs in rulesets['result']:
    if rs['phase'] == 'http_request_dynamic_redirect':
        print("\nREDIRECT RULESET FOUND:", rs['id'])
        req = urllib.request.Request(
            f"https://api.cloudflare.com/client/v4/zones/{zone_id}/rulesets/{rs['id']}",
            headers={"Authorization": f"Bearer {env['CLOUDFLARE_API_TOKEN']}"}
        )
        rs_detail = json.loads(urllib.request.urlopen(req).read().decode())
        print(json.dumps(rs_detail['result'], indent=2))

