# Tansen Gurugram — Deployment, Access & Isolation Guide (V2)

This document provides an authoritative reference of all system credentials, server configurations, and strict isolation controls required to deploy the **Next.js V2 Static Export** to the cPanel hosting environment (`tansengurugram.com/demo/`).

---

## 1. Shared Hosting Architecture & Isolation

The cPanel hosting account (`bbycsolohdh1`) at IP `118.139.177.45` is a **multi-domain shared hosting environment**.

```
/home/bbycsolohdh1/
├── public_html/                                  <-- PRIMARY DOMAIN (jrnavyandhraschool.com) [PROTECTED]
│   ├── index.html, server.cjs, assets/, hub/...  <-- Jr-Wing / School App Files [DO NOT TOUCH]
│   │
│   └── tansengurugram/                           <-- 🎯 LIVE ROOT DOMAIN (https://tansengurugram.com/)
│       ├── index.html
│       ├── gallery.html
│       ├── _next/
│       └── images/
```

### Subdirectory Mapping (`/demo`)
The Next.js application is configured to build and export targeting the `/demo` subdirectory.
- **next.config.ts**: Configured with `output: "export"` and `basePath: "/demo"`.
- This ensures all static assets (`/_next/...` and `/images/...`) resolve correctly when hosted in a subfolder.

---

## 2. Credentials & Access Inventory

All sensitive access tokens are stored in the local `.env` file within the `tansen` project root (which is gitignored).

### A. cPanel API & Server Access
- **Server IP:** `118.139.177.45`
- **cPanel Port:** `2083` (SSL)
- **cPanel User:** `bbycsolohdh1`
- **API Token Location:** hardcoded safely in the isolated `deploy_v2.py` script.
- **Dedicated Target Path:** `public_html/tansengurugram/demo`

### B. Cloudflare Edge CDN & DNS
- **Domain:** `tansengurugram.com`
- **Zone ID:** `37a556fce15e1f94708edc027546dd13` (Exclusive to `tansengurugram.com`)
- **Purge Endpoint:** `https://api.cloudflare.com/client/v4/zones/37a556fce15e1f94708edc027546dd13/purge_cache`
- **Scope:** Cache purge calls strictly affect Zone `37a556fce15e1f94708edc027546dd13`, with zero impact on other co-hosted domains.

---

## 3. Deployment Pipeline (`deploy_v2.py`)

Deployment to the cPanel environment relies on a custom Python-based synchronization script (`deploy_v2.py`). 

### Why a Custom Python Script?
The cPanel API restricts native RSYNC or FTP over SSH in this shared environment. The Python script bridges this gap by directly executing HTTP requests against the cPanel Fileman API, allowing zero-friction deployments directly from the local development machine.

### Strict Sandbox Guard
The script contains a hardcoded assertion:
```python
ALLOWED_PREFIX = "public_html/tansengurugram"
DEST_WEBROOT = "public_html/tansengurugram/demo"

assert dest_webroot.startswith(ALLOWED_PREFIX), f"CRITICAL: '{dest_webroot}' is outside '{ALLOWED_PREFIX}'!"
```
If the script attempts to write anywhere outside of the Tansen webroot, it will immediately halt, providing bulletproof protection to the `jrnavyandhraschool.com` files co-hosted on the server.

### What Happens During Deployment:
1. **Build:** The `pnpm run build` command compiles the Next.js app to static HTML/CSS/JS in the `/out` directory.
2. **Directory Trash:** The script triggers a cPanel API `trash` command on the remote `demo/` directory to ensure old, orphaned Next.js chunks are removed.
3. **Recreation:** The empty `demo/` directory is recreated.
4. **Parallel Upload:** The script walks the local `/out` folder and uploads all files to the remote server using 8 parallel worker threads for high speed.
5. **Cache Purge:** A subsequent `curl` command hits the Cloudflare API to instantly clear the Edge Cache.

---

## 4. How to Deploy Safely

To trigger a full production build and sync it to the live server:

```bash
# 1. Run the build and the Python deployment script sequentially
cd /home/shiva/tansen_v2
pnpm run build && python3 deploy_v2.py

# 2. Immediately purge the Cloudflare cache
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/37a556fce15e1f94708edc027546dd13/purge_cache" \
-H "Authorization: Bearer <CF_API_TOKEN_FROM_ENV>" \
-H "Content-Type: application/json" \
-d '{"purge_everything":true}'
```

### Verification Checklist
1. **HTTP Status Check:** Open `https://tansengurugram.com/demo/` in an incognito window.
2. **Asset Resolution Check:** Ensure images (like `/demo/images/namaste.png`) are loading, confirming the `basePath` export succeeded.
3. **API Form Check:** Submit a test inquiry on the Contact page. It should successfully bridge to the legacy `leads.php` endpoint via client-side fetch.
