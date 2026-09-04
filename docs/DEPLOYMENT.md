# Tansen Deployment Guide

## Overview

Tansen website 3 platforms pe deploy hota hai:
1. **cPanel Hosting** (primary - tansengurugram.com)
2. **GitHub Pages** (backup/alternative)
3. **Cloudflare Pages** (CDN + performance)

---

## Credentials Structure

```
secret/
  credentials.env    ← Sab API tokens & secrets (local + git only, hosting pe NAHI jaata)
```

**⚠️ SECURITY:**
- `secret/` folder Git mein track hota hai (private repo only)
- `out/` folder (build output) mein `secret/` kabhi include nahi hota
- Live hosting pe sirf `out/` upload hota hai

---

## Cloudflare API Tokens

### Token 1: READ Token (tansengurugram.com Zone Only)

| Property | Value |
|----------|-------|
| **Name** | Read all resources of tansengurugram.com |
| **Token** | `See CLOUDFLARE_API_TOKEN in secret/credentials.env` |
| **Account** | Tansengurugram@gmail.com's Account |
| **Zone** | tansengurugram.com ONLY |
| **Scope** | Zone-level read only (no account access) |

**Zone Permissions (tansengurugram.com):**
- DNS:Read, Zone:Read, Zone Settings:Read
- SSL and Certificates:Read, Analytics:Read
- Page Rules:Read, Cache Rules:Read, Transform Rules:Read
- Firewall Services:Read, WAF:Read, Bot Management:Read
- Health Checks:Read, Waiting Room:Read
- Workers Routes:Read, Logs:Read, Load Balancers:Read
- **+ 40+ additional zone read permissions**

**Use Case:**
- DNS records verify karna
- SSL status check karna
- Analytics padhna
- Firewall rules dekhna
- Workers status check karna

**⚠️ Scope:** Sirf `tansengurugram.com` zone. Account-level ya dusre zones ka access NAHI.

---

### Token 2: EDIT Token (All Resources)

| Property | Value |
|----------|-------|
| **Name** | tansengurugam all resources API token |
| **Token** | `See CLOUDFLARE_DNS_EDIT_TOKEN in secret/credentials.env` |
| **Account** | Tansengurugram@gmail.com's Account |
| **Zone** | tansengurugram.com |
| **Permissions** | All resources edit access (AI Crawl Control, Bot Management, DNS, Firewall Services, WAF, etc.) |

**EDIT Permissions:**
- AI Crawl Control:Edit, Access: Apps and Policies:Edit, Analytics:Read, Bot Management Feedback:Edit, Bot Management:Edit, Cache Rules:Edit, Cloud Connector:Edit, Config Rules:Edit, Custom Error Rules:Read, Custom Pages:Edit, DNS:Edit, Disable ESC:Edit, API Gateway:Edit, Client-side security:Edit, Single Redirect:Edit, Email Routing Rules:Edit, Dmarc Management:Edit, Firewall Services:Edit, AI Security for Apps:Edit, Fraud Detection:Edit, HTTP DDoS Managed Ruleset:Edit, Health Checks:Edit, Load Balancers:Edit, Logs:Edit, Managed Headers:Edit, Origin Rules:Edit, Page Rules:Edit, Response Compression:Edit, SSL and Certificates:Edit, Sanitize:Edit, Snippets:Edit, Waiting Room:Edit, Web3 Hostnames:Edit, Workers Routes:Edit, Zaraz:Edit and Publish, Zone Custom Assets:Edit, DNS Settings:Edit, Zone:Edit, Zone Security Center Insights:Edit, Zone Settings:Edit, Transform Rules:Edit, Zone Versioning:Edit, Zone WAF:Edit

**Use Case:**
- Complete zone management for all resources
- DNS records manage karna
- SSL mode change karna (Flexible/Full/Full Strict)
- Always Use HTTPS enable/disable
- Cache purge karna
- Page rules, Firewall, WAF, Bot Management create/edit karna

---

## Credentials.env Reference

```env
# ============================================================
# CPANEL HOSTING
# ============================================================
CPANEL_TOKEN="<see_credentials.env>"
CPANEL_USER="bbycsolohdh1"
CPANEL_HOST="118.139.177.45"
CPANEL_PORT="2083"

# ============================================================
# DOMAIN
# ============================================================
DOMAIN="tansengurugram.com"
SITE_URL="https://tansengurugram.com"
DEPLOY_PATH="public_html/tansengurugram"

# ============================================================
# GITHUB
# ============================================================
GITHUB_USERNAME="bhati8833"
GITHUB_EMAIL="vle.bhati@gmail.com"
GITHUB_PAT_TOKEN="<see_credentials.env>"
GITHUB_REPO="tansen_v1"
GITHUB_API_BASE="https://api.github.com"

# ============================================================
# CLOUDFLARE
# ============================================================
CLOUDFLARE_API_TOKEN="<see_credentials.env>"      # READ (tansengurugram.com only)
CLOUDFLARE_ACCOUNT_ID="277042770849ef381158bb62663d4ca6"
CLOUDFLARE_ZONE_ID="37a556fce15e1f94708edc027546dd13"
CLOUDFLARE_DNS_EDIT_TOKEN="<see_credentials.env>"  # EDIT (Zone All Resources)

# ============================================================
# DEPLOYMENT
# ============================================================
DEPLOY_WORKERS="4"
BUILD_DIR="out"
NODE_ENV="production"
```

---

## Deployment Methods

### Method 1: cPanel (Current Primary) ✅ ACTIVE

```bash
# Step 1: Build
npm run build

# Step 2: Add deployment files (build overwrites them)
# CNAME, _headers, _redirects manually add karo out/ mein

# Step 3: Deploy
python3 deploy_v2.py
```

**How it works:**
1. `npm run build` → `out/` folder banta hai
2. `deploy_v2.py` → `secret/credentials.env` se cPanel creds read karta hai
3. Remote directory empty karta hai (trash + recreate)
4. 251 files 8 parallel workers se upload hota hai

**⚠️ IMPORTANT:** `npm run build` ke baad `out/CNAME`, `out/_headers`, `out/_redirects` delete ho jaate hain. Deploy se pehle wapas add karna zaroori hai.

**Deploy command (single line):**
```bash
npm run build && cp out/CNAME.bak out/CNAME && python3 deploy_v2.py
```

---

### Method 2: GitHub Pages (Auto-Deploy)

```bash
# Push to main branch
git add .
git commit -m "deploy: update site"
git push origin main
```

**How it works:**
1. `.github/workflows/deploy.yml` automatically trigger hota hai
2. Node.js setup → npm install → npm run build
3. `out/` folder GitHub Pages pe deploy hota hai
4. Custom domain `tansengurugram.com` pe live

**Setup (one-time):**
1. GitHub Repo → Settings → Pages
2. Source: **GitHub Actions**
3. Domain: `tansengurugram.com`

---

### Method 3: Cloudflare Pages

```bash
# Direct deploy via Wrangler
npx wrangler pages deploy out/
```

**Setup (one-time):**
1. Cloudflare Dashboard → Pages → Create a project
2. Connect GitHub repo (auto-deploy on push)
3. OR direct upload via Wrangler CLI

---

## Domain DNS Configuration

### Current DNS (tansengurugram.com):
```
Type    Name    Value               TTL     Proxy
A       @       118.139.177.45      Auto    ✅ Proxied
CNAME   www     tansengurugram.com  Auto    ✅ Proxied
CNAME   _domainconnect  _domainconnect.gd.domaincontrol.com  Auto  ✅
TXT     _dmarc  v=DMARC1; p=quarantine...  Auto  ❌
```

### For GitHub Pages (if switching):
```
Type    Name    Value                   TTL
A       @       185.199.108.153         Auto
A       @       185.199.109.153         Auto
A       @       185.199.110.153         Auto
A       @       185.199.111.153         Auto
CNAME   www     bhati8833.github.io    Auto
```

---

## File Structure

```
tansen_v1/
├── secret/
│   ├── credentials.env      ← ALL API tokens (local + git only)
│   └── .gitkeep
├── .github/
│   └── workflows/
│       └── deploy.yml       ← GitHub Pages auto-deploy
├── deploy_v2.py             ← cPanel deploy script (reads from credentials.env)
├── wrangler.toml            ← Cloudflare Pages config
├── out/                     ← Build output (auto-ignored in git)
│   ├── .htaccess            ← Apache rewrite rules
│   ├── CNAME                ← Custom domain (re-add after build)
│   ├── _headers             ← Security headers (re-add after build)
│   ├── _redirects           ← URL redirects (re-add after build)
│   ├── index.html
│   ├── _next/
│   └── ...
├── docs/
│   └── DEPLOYMENT.md        ← This file
├── .env.local               ← Next.js local dev vars
├── .gitignore               ← Ignores out/, .env*, but NOT secret/
└── next.config.ts           ← output: 'export' (static site)
```

---

## Security Notes

1. **Never commit real tokens to public repos**
2. **`secret/` is tracked in git** - only safe for private repos
3. **`out/` is gitignored** - credentials never reach hosting
4. **`deploy_v2.py`** reads from `credentials.env` at runtime
5. **Cloudflare READ token** - restricted to tansengurugram.com zone only
6. **Cloudflare EDIT token** - Zone All Resources edit access
7. **SSL Mode** - Flexible (cPanel pe SSL nahi hai, Cloudflare→cPanel HTTP)
8. **All images** - Converted to WebP (58MB→18MB, 69% reduction)
9. **Cache Purge** - EDIT token se Cloudflare cache purge hota hai

---

## Troubleshooting

### "credentials.env not found"
```bash
ls -la secret/
cat secret/credentials.env
```

### Build overwrites deployment files
```bash
# After npm run build, re-add these files to out/:
# - CNAME (contains: tansengurugram.com)
# - _headers (security headers)
# - _redirects (URL redirects)
```

### cPanel upload fails / timeout
```bash
# Test cPanel connection first
curl -sk --connect-timeout 10 "https://118.139.177.45:2083/json-api/cpanel?cpanel_jsonapi_user=bbycsolohdh1&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=Fileman&cpanel_jsonapi_func=listfiles&path=public_html" \
  -H "Authorization: cpanel bbycsolohdh1:<YOUR_CPANEL_TOKEN_FROM_ENV>"

# If connection OK but upload slow, increase timeout:
python3 deploy_v2.py  # Takes ~5-10 min for 251 files
```

### Cloudflare API test
```bash
# Test READ token (should return only tansengurugram.com zone)
curl -s "https://api.cloudflare.com/client/v4/zones" \
  -H "Authorization: Bearer <YOUR_CLOUDFLARE_API_TOKEN_FROM_ENV>" | python3 -m json.tool

# Test EDIT token
curl -s "https://api.cloudflare.com/client/v4/user/tokens/verify" \
  -H "Authorization: Bearer <YOUR_CLOUDFLARE_DNS_EDIT_TOKEN_FROM_ENV>"
```

### Cache Purge
```bash
# Purge all Cloudflare cache (after deploy)
python3 -c "
import urllib.request, ssl, json
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
url = 'https://api.cloudflare.com/client/v4/zones/37a556fce15e1f94708edc027546dd13/purge_cache'
data = json.dumps({'purge_everything': True}).encode()
req = urllib.request.Request(url, data=data, method='DELETE', headers={
    'Authorization': 'Bearer <YOUR_CLOUDFLARE_DNS_EDIT_TOKEN_FROM_ENV>',
    'Content-Type': 'application/json'
})
resp = urllib.request.urlopen(req, context=ctx, timeout=30)
print(json.loads(resp.read().decode()))
"
```

### Pages returning 404
```bash
# Check if files exist on cPanel
curl -sk "https://118.139.177.45:2083/json-api/cpanel?cpanel_jsonapi_user=bbycsolohdh1&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=Fileman&cpanel_jsonapi_func=listfiles&path=public_html/tansengurugram" \
  -H "Authorization: cpanel bbycsolohdh1:<YOUR_CPANEL_TOKEN_FROM_ENV>"

# Re-deploy if files missing
python3 deploy_v2.py
```

---

## Live Site Verification (Last: 2026-09-03)

| Page | Status |
|------|--------|
| Homepage (/) | ✅ Working |
| About (/about/) | ✅ Working |
| Courses (/courses/) | ✅ Working |
| Course Detail (/courses/music/classical-vocal-singing/) | ✅ Working |
| Blog (/blog/) | ✅ Working |
| Gallery (/gallery/) | ✅ Working |
| FAQ (/faq/) | ✅ Working |
| Contact (/contact/) | ✅ Working |
| Privacy (/privacy/) | ✅ Working |
| Terms (/terms/) | ✅ Working |

---

## Image Optimization (WebP)

All PNG/JPG images converted to WebP format for 69% size reduction:

| Directory | Before | After | Reduction |
|-----------|--------|-------|-----------|
| public/assets/ | 58MB | 18MB | 69% |
| courses/ | 15MB | 7MB | 53% |
| testimonials/ | 16MB | 10MB | 38% |
| gallery/ | 2.5MB | 2.1MB | 16% |
| affiliations/ | 1MB | 0.3MB | 70% |

**Conversion command:**
```bash
# Convert all PNG to WebP
find public/assets -name "*.png" -exec sh -c 'cwebp -q 95 "$1" -o "${1%.png}.webp" && rm "$1"' _ {} \;

# Convert all JPG to WebP
find public/assets -name "*.jpg" -exec sh -c 'cwebp -q 90 "$1" -o "${1%.jpg}.webp" && rm "$1"' _ {} \;
```

**Code references updated:** All `.png` and `.jpg` references in `src/` changed to `.webp`.
