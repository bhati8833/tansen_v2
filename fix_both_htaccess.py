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

def upload_file_content(target_dir, filename, content):
    url = f"https://{env['CPANEL_HOST']}:{env['CPANEL_PORT']}/execute/Fileman/upload_files"
    boundary = "----TansenBoundary2026"
    body = bytearray()
    body.extend(f"--{boundary}\r\n".encode())
    body.extend(b'Content-Disposition: form-data; name="dir"\r\n\r\n')
    body.extend(f"{target_dir}\r\n".encode())
    body.extend(f"--{boundary}\r\n".encode())
    body.extend(b'Content-Disposition: form-data; name="overwrite"\r\n\r\n')
    body.extend(b"1\r\n")
    body.extend(f"--{boundary}\r\n".encode())
    body.extend(f'Content-Disposition: form-data; name="file-1"; filename="{filename}"\r\n'.encode())
    body.extend(b"Content-Type: text/plain\r\n\r\n")
    body.extend(content.encode())
    body.extend(b"\r\n")
    body.extend(f"--{boundary}--\r\n".encode())

    req = urllib.request.Request(url, data=bytes(body), headers={
        "Authorization": f"cpanel {env['CPANEL_USER']}:{env['CPANEL_TOKEN']}",
        "Content-Type": f"multipart/form-data; boundary={boundary}"
    })
    resp = urllib.request.urlopen(req, context=ctx, timeout=60)
    result = json.loads(resp.read().decode())
    return result

htaccess_content = """<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /

# 1. Protect index.html from being rewritten again
RewriteRule ^index\.html$ - [L]

# 2. If it's the jr-wing route, serve the old SPA index.html
RewriteCond %{REQUEST_URI} ^/jr-wing [NC]
RewriteRule ^ /index.html [L]

# 3. If it's a known admin/api route, allow it to pass through to old SPA/PHP
RewriteCond %{REQUEST_URI} ^/(admin|api|assets|prerender|resources|uploads|video) [NC]
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteCond %{REQUEST_URI} ^/(admin|api) [NC]
RewriteRule ^ /index.html [L]

# 4. Rewrite everything else to the tansengurugram folder (Next.js app)
RewriteCond %{HTTP_HOST} ^(www\.)?tansengurugram\.com$ [NC]
RewriteCond %{REQUEST_URI} !^/tansengurugram/
RewriteRule ^(.*)$ /tansengurugram/$1 [L]
</IfModule>
"""

print("Uploading smart .htaccess to public_html...")
res = upload_file_content("public_html", ".htaccess", htaccess_content)
print(res)

