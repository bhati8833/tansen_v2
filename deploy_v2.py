import os
import urllib.request
import urllib.parse
import mimetypes
import ssl

cpanel_token = "NFGA4F6VCOC16UZ63SQX3JL5HBIIERRA"
remote_user = "bbycsolohdh1"
remote_host = "118.139.177.45"
base_dir = "/home/shiva/tansen_v1/out"

ALLOWED_PREFIX = "public_html/tansengurugram"
DEST_WEBROOT = "public_html/tansengurugram"
DEMO_DIR = "public_html/tansengurugram/demo"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def empty_remote_dir(target_dir):
    print(f"🗑️ Emptying remote directory: {target_dir}")
    # We trash the directory and then recreate it
    url = f"https://{remote_host}:2083/json-api/cpanel?cpanel_jsonapi_user={remote_user}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=Fileman&cpanel_jsonapi_func=fileop&op=trash&sourcefiles={target_dir}"
    req = urllib.request.Request(url, headers={"Authorization": f"cpanel {remote_user}:{cpanel_token}"})
    try:
        with urllib.request.urlopen(req, context=ctx) as res:
            print("Trash response:", res.read().decode())
    except Exception as e:
        print(f"  ❌ Error trashing {target_dir}: {e}")

def create_remote_dir(parent_path, dir_name):
    url = f"https://{remote_host}:2083/json-api/cpanel?cpanel_jsonapi_user={remote_user}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=Fileman&cpanel_jsonapi_func=mkdir&path={parent_path}&name={dir_name}"
    req = urllib.request.Request(url, headers={"Authorization": f"cpanel {remote_user}:{cpanel_token}"})
    try:
        urllib.request.urlopen(req, context=ctx)
    except Exception:
        pass

def upload_file(local_path, target_dir, filename):
    url = f"https://{remote_host}:2083/execute/Fileman/upload_files"
    boundary = "----WebKitFormBoundary7MA4YWxkTrZu0gW"
    
    with open(local_path, "rb") as f:
        file_bytes = f.read()

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
        with urllib.request.urlopen(req, context=ctx) as response:
            return response.getcode() == 200
    except Exception as e:
        print(f"  ❌ Error uploading {filename} to {target_dir}: {e}")
        return False

def sync_tree(dest_webroot):
    assert dest_webroot.startswith(ALLOWED_PREFIX), f"CRITICAL: '{dest_webroot}' is outside '{ALLOWED_PREFIX}'!"
    print(f"🔒 Sandboxed Target: '{dest_webroot}'")
    
    dirs_to_create = []
    files_to_upload = []

    for root, dirs, files in os.walk(base_dir):
        # Allow _next, don't ignore it
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
    print(f"  📤 Uploading {total} files using 8 parallel workers...")

    import concurrent.futures
    completed = 0

    def worker(item):
        nonlocal completed
        l_path, t_dir, fn = item
        res = upload_file(l_path, t_dir, fn)
        completed += 1
        rel_name = os.path.relpath(l_path, base_dir)
        status = "✓" if res else "✗"
        if not res:
             print(f"  [{completed}/{total}] {status} {rel_name}")
        return res

    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        results = list(executor.map(worker, files_to_upload))

    if all(results):
        print(f"  ✨ Successfully uploaded all {total} files to {dest_webroot}")
    else:
        print(f"  ⚠️ Some files failed to upload.")

if __name__ == "__main__":
    print("🗑️ Emptying remote target directory public_html/tansengurugram...")
    empty_remote_dir("public_html/tansengurugram")
    print("🚀 Syncing v1 production build to tansengurugram.com (public_html/tansengurugram)...")
    sync_tree(DEST_WEBROOT)
    print("  ✅ Live deployment sync finished for tansengurugram.com.")
