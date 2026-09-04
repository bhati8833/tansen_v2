import os
import urllib.request
import urllib.parse
import mimetypes
import ssl
import pathlib

# ============================================================
# Load credentials from secret/credentials.env
# ============================================================
SCRIPT_DIR = pathlib.Path(__file__).parent
CREDS_FILE = SCRIPT_DIR / "secret" / "credentials.env"

def load_env_file(path):
    """Parse .env file and return dict of key=value pairs."""
    env = {}
    if not path.exists():
        print(f"❌ credentials.env not found at: {path}")
        print("   Create secret/credentials.env with your credentials.")
        exit(1)
    with open(path, "r") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, _, val = line.partition("=")
                val = val.strip().strip('"').strip("'")
                env[key.strip()] = val
    return env

creds = load_env_file(CREDS_FILE)

# cPanel credentials
cpanel_token = creds.get("CPANEL_TOKEN", "")
remote_user = creds.get("CPANEL_USER", "")
remote_host = creds.get("CPANEL_HOST", "")
remote_port = creds.get("CPANEL_PORT", "2083")

# Domain & paths
DOMAIN = creds.get("DOMAIN", "tansengurugram.com")
DEPLOY_PATH = creds.get("DEPLOY_PATH", "public_html/tansengurugram")
BUILD_DIR = creds.get("BUILD_DIR", "out")

# Build paths
base_dir = str(SCRIPT_DIR / BUILD_DIR)
ALLOWED_PREFIX = DEPLOY_PATH
DEST_WEBROOT = DEPLOY_PATH

# Validate required credentials
missing = []
if not cpanel_token:
    missing.append("CPANEL_TOKEN")
if not remote_user:
    missing.append("CPANEL_USER")
if not remote_host:
    missing.append("CPANEL_HOST")

if missing:
    print(f"❌ Missing required credentials in secret/credentials.env: {', '.join(missing)}")
    exit(1)

print(f"🔐 Credentials loaded from: {CREDS_FILE.relative_to(SCRIPT_DIR)}")
print(f"🌐 Domain: {DOMAIN}")
print(f"🖥️  cPanel Host: {remote_host}")

# SSL context (skip verification for cPanel API)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def empty_remote_dir(target_dir):
    print(f"🗑️  Emptying remote directory: {target_dir}")
    url = f"https://{remote_host}:{remote_port}/json-api/cpanel?cpanel_jsonapi_user={remote_user}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=Fileman&cpanel_jsonapi_func=fileop&op=trash&sourcefiles={target_dir}"
    req = urllib.request.Request(url, headers={"Authorization": f"cpanel {remote_user}:{cpanel_token}"})
    try:
        with urllib.request.urlopen(req, context=ctx) as res:
            print("  Trash response:", res.read().decode())
    except Exception as e:
        print(f"  ❌ Error trashing {target_dir}: {e}")

def create_remote_dir(parent_path, dir_name):
    url = f"https://{remote_host}:{remote_port}/json-api/cpanel?cpanel_jsonapi_user={remote_user}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=Fileman&cpanel_jsonapi_func=mkdir&path={parent_path}&name={dir_name}"
    req = urllib.request.Request(url, headers={"Authorization": f"cpanel {remote_user}:{cpanel_token}"})
    try:
        urllib.request.urlopen(req, context=ctx)
    except Exception:
        pass

def upload_file(local_path, target_dir, filename, retries=3):
    url = f"https://{remote_host}:{remote_port}/execute/Fileman/upload_files"
    boundary = "----WebKitFormBoundary7MA4YWxkTrZu0gW"

    with open(local_path, "rb") as f:
        file_bytes = f.read()

    for attempt in range(retries):
        body = bytearray()
        body.extend(f"--{boundary}\r\n".encode())
        body.extend(f'Content-Disposition: form-data; name="dir"\r\n\r\n'.encode())
        body.extend(f"{target_dir}\r\n".encode())

        body.extend(f"--{boundary}\r\n".encode())
        body.extend(f'Content-Disposition: form-data; name="overwrite"\r\n\r\n'.encode())
        body.extend(f"1\r\n".encode())

        body.extend(f"--{boundary}\r\n".encode())
        body.extend(f'Content-Disposition: form-data; name="file-1"; filename="{filename}"\r\n'.encode())
        mime = mimetypes.guess_type(local_path)[0] or "application/octet-stream"
        if local_path.endswith('.css'):
            mime = "text/css"
        elif local_path.endswith('.js'):
            mime = "application/javascript"
        body.extend(f"Content-Type: {mime}\r\n\r\n".encode())
        body.extend(file_bytes)
        body.extend(b"\r\n")
        body.extend(f"--{boundary}--\r\n".encode())

        req = urllib.request.Request(url, data=bytes(body), headers={
            "Authorization": f"cpanel {remote_user}:{cpanel_token}",
            "Content-Type": f"multipart/form-data; boundary={boundary}"
        })

        try:
            with urllib.request.urlopen(req, context=ctx, timeout=30) as response:
                return response.getcode() == 200
        except Exception as e:
            if attempt < retries - 1:
                import time
                time.sleep(2 * (attempt + 1))
            else:
                print(f"\n  ❌ Error uploading {filename}: {e}")
                return False
    return False

def sync_tree(dest_webroot):
    assert dest_webroot.startswith(ALLOWED_PREFIX), f"CRITICAL: '{dest_webroot}' is outside '{ALLOWED_PREFIX}'!"
    print(f"🔒 Sandboxed Target: '{dest_webroot}'")

    dirs_to_create = []
    files_to_upload = []

    for root, dirs, files in os.walk(base_dir):
        dirs[:] = [d for d in dirs if not (d.startswith('.') and not d == '_next')]

        rel_path = os.path.relpath(root, base_dir)
        target_dir = dest_webroot if rel_path == "." else f"{dest_webroot}/{rel_path}"

        if not target_dir.startswith(ALLOWED_PREFIX):
            raise RuntimeError(f"SECURITY BLOCK: Target '{target_dir}' violates sandbox boundary!")

        for d in dirs:
            dirs_to_create.append((target_dir, d))

        for f in files:
            local_file_path = os.path.join(root, f)
            files_to_upload.append((local_file_path, target_dir, f))

    for parent_p, d_name in dirs_to_create:
        create_remote_dir(parent_p, d_name)

    total = len(files_to_upload)
    worker_count = int(creds.get("DEPLOY_WORKERS", "8"))
    print(f"  📤 Uploading {total} files using {worker_count} parallel workers...")

    import concurrent.futures
    import threading
    completed = 0
    failed = 0
    lock = threading.Lock()

    def print_progress():
        pct = int((completed / total) * 100) if total > 0 else 0
        bar_len = 30
        filled = int(bar_len * completed / total) if total > 0 else 0
        bar = "█" * filled + "░" * (bar_len - filled)
        fail_text = f" | ❌ {failed} failed" if failed > 0 else ""
        print(f"\r  [{bar}] {pct}% ({completed}/{total}){fail_text}  ", end="", flush=True)

    def worker(item):
        nonlocal completed, failed
        l_path, t_dir, fn = item
        import time
        time.sleep(0.1)
        res = upload_file(l_path, t_dir, fn)
        with lock:
            completed += 1
            if not res:
                failed += 1
            print_progress()
        return res

    with concurrent.futures.ThreadPoolExecutor(max_workers=worker_count) as executor:
        results = list(executor.map(worker, files_to_upload))

    print()  # newline after progress bar
    if all(results):
        print(f"  ✨ Successfully uploaded all {total} files to {dest_webroot}")
    else:
        print(f"  ⚠️  {failed} out of {total} files failed to upload.")

if __name__ == "__main__":
    print(f"🗑️  Emptying remote target directory {DEPLOY_PATH}...")
    empty_remote_dir(DEPLOY_PATH)
    print(f"🚀 Syncing production build to {DOMAIN} ({DEPLOY_PATH})...")
    sync_tree(DEST_WEBROOT)
    print(f"  ✅ Live deployment sync finished for {DOMAIN}.")
