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

url = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/pagerules"
req = urllib.request.Request(url, headers=headers)
try:
    resp = urllib.request.urlopen(req)
    res = json.loads(resp.read().decode())
    print("Page Rules:", res)
except Exception as e:
    print(e)
    
url2 = f"https://api.cloudflare.com/client/v4/zones/{zone_id}/rulesets"
req2 = urllib.request.Request(url2, headers=headers)
try:
    resp2 = urllib.request.urlopen(req2)
    res2 = json.loads(resp2.read().decode())
    for ruleset in res2.get('result', []):
        if ruleset['phase'] == 'http_request_dynamic_redirect':
            print("Redirect Ruleset ID:", ruleset['id'])
            # fetch the rules
            req3 = urllib.request.Request(f"https://api.cloudflare.com/client/v4/zones/{zone_id}/rulesets/{ruleset['id']}", headers=headers)
            res3 = json.loads(urllib.request.urlopen(req3).read().decode())
            print("Redirect Rules:", res3)
except Exception as e:
    print(e)
