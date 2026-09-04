import ssl
import socket
import http.client

host = 'tansengurugram.com'
ip = '118.139.177.45'

context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE

sock = socket.create_connection((ip, 443))
ssock = context.wrap_socket(sock, server_hostname=host)

conn = http.client.HTTPSConnection(host, context=context)
conn.sock = ssock

conn.request("GET", "/", headers={"Host": host})
res = conn.getresponse()
print(res.status, res.headers)

conn.request("GET", "/jr-wing/", headers={"Host": host})
res = conn.getresponse()
print(res.status, res.headers)
