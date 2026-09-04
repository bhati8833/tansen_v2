import os, urllib.request, ssl, json, pathlib

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
  
  # FIX CLOUDFLARE FLEXIBLE SSL LOOP
  RewriteCond %{HTTP:X-Forwarded-Proto} https
  RewriteRule ^ - [E=HTTPS:on]

  # OLD SITE SPA RULES
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
"""

print("Uploading htaccess to public_html with Flexible SSL fix...")
res = upload_file_content("public_html", ".htaccess", htaccess_content)
print(res)

