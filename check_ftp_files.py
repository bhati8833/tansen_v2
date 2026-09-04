import ftplib, pathlib
SCRIPT_DIR = pathlib.Path(__file__).parent
CREDS_FILE = SCRIPT_DIR / "secret" / "credentials.env"
env = {}
with open(CREDS_FILE) as f:
    for line in f:
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, _, v = line.partition("=")
            env[k.strip()] = v.strip().strip('"').strip("'")

ftp = ftplib.FTP(env['CPANEL_FTP_HOST'], env['CPANEL_FTP_USER'], env['CPANEL_FTP_PASS'])
ftp.cwd("public_html/tansengurugram")
print("Files in public_html/tansengurugram:")
ftp.dir()
