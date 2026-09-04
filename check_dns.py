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
    "Authorization": f"Bearer {env['CLOUDFLARE_API_TOKEN']}",
    "Content-Type": "application/json"
}
zone_id = env['CLOUDFLARE_ZONE_ID']

url = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/dns_records"
req = urllib.request.Request(url, headers=headers)
try:
    resp = urllib.request.urlopen(req)
    res = json.loads(resp.read().decode())
    for record in res.get('result', []):
        print(record['name'], record['type'], record['content'], record['proxied'])
except Exception as e:
    print(e)
