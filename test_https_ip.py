import socket, ssl, http.client

host = 'tansengurugram.com'
ip = '118.139.177.45'
port = 443

context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE

conn = http.client.HTTPSConnection(ip, port, context=context)
# Force SNI
conn.set_tunnel(host) # this is for proxies, wait.
