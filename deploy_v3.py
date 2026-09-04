#!/usr/bin/env python3
"""Tansen v3 deploy — uploads out/ to cPanel public_html/tansengurugram/
Sandboxed: ONLY touches public_html/tansengurugram/, never touches other folders."""

import os, sys, urllib.request, urllib.parse, ssl, mimetypes, pathlib, json, time, concurrent.futures, threading

SCRIPT_DIR = pathlib.Path(__file__).parent
CREDS_FILE = SCRIPT_DIR / "secret" / "credentials.env"
BUILD_DIR = SCRIPT_DIR / "out"
DEST = "public_html/tansengurugram"

def load_env(path):
    env = {}
    with open(path) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, _, v = line.partition("=")
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env

creds = load_env(CREDS_FILE)
HOST = creds["CPANEL_HOST"]
PORT = creds["CPANEL_PORT"]
USER = creds["CPANEL_USER"]
TOKEN = creds["CPANEL_TOKEN"]
WORKERS = int(creds.get("DEPLOY_WORKERS", "4"))

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def cpanel_api(module, func, **params):
    qs = "&".join(f"{k}={urllib.parse.quote(str(v))}" for k, v in params.items())
    url = f"https://{HOST}:{PORT}/json-api/cpanel?cpanel_jsonapi_user={USER}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module={module}&cpanel_jsonapi_func={func}&{qs}"
    req = urllib.request.Request(url, headers={"Authorization": f"cpanel {USER}:{TOKEN}"})
    resp = urllib.request.urlopen(req, context=ctx, timeout=30)
    return json.loads(resp.read().decode())

def create_dir(path):
    """Create directory on remote. Returns True if created or already exists."""
    try:
        parent = str(pathlib.PurePosixPath(path).parent)
        name = pathlib.PurePosixPath(path).name
        cpanel_api("Fileman", "mkdir", path=parent, name=name)
        return True
    except Exception:
        # Might already exist — try listing to confirm
        try:
            cpanel_api("Fileman", "listfiles", dir=path)
            return True
        except:
            return False

def upload_file(local_path, remote_dir, filename):
    """Upload single file to remote_dir/filename."""
    url = f"https://{HOST}:{PORT}/execute/Fileman/upload_files"
    boundary = "----TansenBoundary2026"
    with open(local_path, "rb") as f:
        data = f.read()

    body = bytearray()
    body.extend(f"--{boundary}\r\n".encode())
    body.extend(b'Content-Disposition: form-data; name="dir"\r\n\r\n')
    body.extend(f"{remote_dir}\r\n".encode())
    body.extend(f"--{boundary}\r\n".encode())
    body.extend(b'Content-Disposition: form-data; name="overwrite"\r\n\r\n')
    body.extend(b"1\r\n")
    body.extend(f"--{boundary}\r\n".encode())
    body.extend(f'Content-Disposition: form-data; name="file-1"; filename="{filename}"\r\n'.encode())
    mime = mimetypes.guess_type(local_path)[0] or "application/octet-stream"
    body.extend(f"Content-Type: {mime}\r\n\r\n".encode())
    body.extend(data)
    body.extend(b"\r\n")
    body.extend(f"--{boundary}--\r\n".encode())

    req = urllib.request.Request(url, data=bytes(body), headers={
        "Authorization": f"cpanel {USER}:{TOKEN}",
        "Content-Type": f"multipart/form-data; boundary={boundary}"
    })
    resp = urllib.request.urlopen(req, context=ctx, timeout=60)
    result = json.loads(resp.read().decode())
    return result.get("status", 0) == 1

# ── Step 1: Create all directories ──
print("📁 Creating directories...")
dirs_needed = set()
for root, dirs, files in os.walk(BUILD_DIR):
    rel = os.path.relpath(root, BUILD_DIR)
    if rel == ".":
        remote = DEST
    else:
        remote = f"{DEST}/{rel}"
    dirs_needed.add(remote)

created = 0
for d in sorted(dirs_needed):
    if create_dir(d):
        created += 1
print(f"  ✅ {created}/{len(dirs_needed)} directories ready")

# ── Step 2: Collect all files ──
files_to_upload = []
for root, dirs, files in os.walk(BUILD_DIR):
    rel = os.path.relpath(root, BUILD_DIR)
    remote_dir = DEST if rel == "." else f"{DEST}/{rel}"
    for f in files:
        local = os.path.join(root, f)
        files_to_upload.append((local, remote_dir, f))

total = len(files_to_upload)
print(f"📤 Uploading {total} files ({WORKERS} workers)...")

# ── Step 3: Upload with progress ──
completed = 0
failed = 0
lock = threading.Lock()
failed_files = []

def progress():
    pct = int(completed * 100 / total) if total else 0
    bar = "█" * (pct // 4) + "░" * (25 - pct // 4)
    fail_s = f" ❌{failed}" if failed else ""
    print(f"\r  [{bar}] {pct}% ({completed}/{total}){fail_s}  ", end="", flush=True)

def upload_one(item):
    global completed, failed
    local_path, remote_dir, filename = item
    for attempt in range(3):
        try:
            ok = upload_file(local_path, remote_dir, filename)
            if ok:
                with lock:
                    completed += 1
                    progress()
                return True
        except Exception as e:
            if attempt < 2:
                time.sleep(2 * (attempt + 1))
    with lock:
        failed += 1
        completed += 1
        failed_files.append(f"{remote_dir}/{filename}")
        progress()
    return False

with concurrent.futures.ThreadPoolExecutor(max_workers=WORKERS) as ex:
    results = list(ex.map(upload_one, files_to_upload))

print()

# ── Step 4: Summary ──
succeeded = sum(1 for r in results if r)
print(f"\n{'='*50}")
print(f"  ✅ Uploaded: {succeeded}/{total}")
if failed:
    print(f"  ❌ Failed:   {failed}/{total}")
    for f in failed_files[:10]:
        print(f"     - {f}")
    if len(failed_files) > 10:
        print(f"     ... and {len(failed_files)-10} more")
else:
    print(f"  🎉 All files uploaded successfully!")
print(f"  🌐 Live: https://tansengurugram.com/")
