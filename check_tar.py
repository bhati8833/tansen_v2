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
# Let's run a shell command via python os.system? No, we are in python but the sandbox has python... wait, I can just use tar command!
