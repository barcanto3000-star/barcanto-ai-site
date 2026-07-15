# Barcanto AI Website

Static website package for `https://barcanto.ai/`.

The current local rebuild presents Barcanto as a modular AI service platform: customers start with one practical service (Inbox Cleanup), then unlock additional skills as their needs grow. See `PRODUCT_DIRECTION.md` for the product starting point and staged build order.

## Contents

- `index.html` — public landing page
- `styles.css` — shared responsive styling
- `app.js` — navigation and interactive toolkit preview
- `PRODUCT_DIRECTION.md` — MVP positioning, skill model, agent boundaries, and staged build order
- `privacy.html` — privacy page for platform app review/OAuth setup
- `terms.html` — terms page for platform app review/OAuth setup
- `oauth2callback/` — TikTok OAuth callback landing route for authorized local setup
- `robots.txt` / `sitemap.xml` — crawler basics
- `tiktok*.txt` — TikTok Developer Center verification files

## Local preview

```bash
cd /Users/luna/.openclaw/workspace/projects/barcanto-ai-website
python3 -m http.server 8088
# open http://127.0.0.1:8088/
```

## Deploy target

Deploy the contents of this folder to the web root of `barcanto.ai`.

Recommended simple route: Cloudflare Pages or another static host with HTTPS.

## Required public checks before TikTok Verify

```bash
curl -fsS https://barcanto.ai/
curl -fsS https://barcanto.ai/privacy.html
curl -fsS https://barcanto.ai/terms.html
curl -fsS https://barcanto.ai/oauth2callback/
curl -fsS https://barcanto.ai/tiktokNSA6WrjEbFUJYjgT1fOTYWDkHca40oPk.txt
```

The verification file must return exactly:

```text
tiktok-developers-site-verification=NSA6WrjEbFUJYjgT1fOTYWDkHca40oPk
```

## Gates

Do not perform DNS/hosting account changes, TikTok verification clicks, app-review submission, paid route setup, or public posting without Antonio's explicit approval for that exact action.
