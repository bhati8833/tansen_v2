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

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

htaccess_content = """# Apache Configuration for Next.js Static Export on tansengurugram.com
RewriteEngine On

# Ensure HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Prevent Cloudflare and Browser Stale Cache for HTML & Manifest files
<IfModule mod_headers.c>
    <FilesMatch "\\.(html|htm|txt|xml|json)$">
        Header set Cache-Control "no-cache, no-store, must-revalidate, max-age=0"
        Header set Pragma "no-cache"
        Header set Expires "0"
    </FilesMatch>
</IfModule>

# Force trailing slash for directories to avoid mod_dir timeout issues
RewriteCond %{REQUEST_FILENAME} -d
RewriteCond %{REQUEST_URI} !/$
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1/ [L,R=301]

# Handle Next.js html pages without .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Handle trailing slash directory index files
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}/index.html -f
RewriteRule ^(.*)$ $1/index.html [L]

# Fallback to 404.html for non-existent routes
ErrorDocument 404 /404.html
"""

boundary = "----TansenBoundary2026"
body = bytearray()
body.extend(f"--{boundary}\r\n".encode())
body.extend(b'Content-Disposition: form-data; name="dir"\r\n\r\n')
body.extend(b"public_html/tansengurugram\r\n")
body.extend(f"--{boundary}\r\n".encode())
body.extend(b'Content-Disposition: form-data; name="overwrite"\r\n\r\n')
body.extend(b"1\r\n")
body.extend(f"--{boundary}\r\n".encode())
body.extend(b'Content-Disposition: form-data; name="file-1"; filename=".htaccess"\r\n')
body.extend(b"Content-Type: text/plain\r\n\r\n")
body.extend(htaccess_content.encode())
body.extend(b"\r\n")
body.extend(f"--{boundary}--\r\n".encode())

url = f"https://{env['CPANEL_HOST']}:{env['CPANEL_PORT']}/execute/Fileman/upload_files"
req = urllib.request.Request(url, data=bytes(body), headers={
    "Authorization": f"cpanel {env['CPANEL_USER']}:{env['CPANEL_TOKEN']}",
    "Content-Type": f"multipart/form-data; boundary={boundary}"
})
try:
    resp = urllib.request.urlopen(req, context=ctx, timeout=60)
    print(json.loads(resp.read().decode()))
except Exception as e:
    print(e)
