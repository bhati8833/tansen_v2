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

headers = {
    "Authorization": f"Bearer {env['CF_TOKEN']}",
    "Content-Type": "application/json"
}
zone_id = env['CF_ZONE_ID']

url = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/settings/ssl"
req = urllib.request.Request(url, headers=headers)
try:
    resp = urllib.request.urlopen(req)
    res = json.loads(resp.read().decode())
    print("SSL Setting:", res)
except Exception as e:
    print(e)
