# Barcanto AI Website

Static website package for `https://barcanto.ai/`.

## Contents

- `index.html` — public landing page
- `privacy.html` — privacy page for platform app review/OAuth setup
- `terms.html` — terms page for platform app review/OAuth setup
- `styles.css` — shared styling
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
curl -fsS https://barcanto.ai/tiktokWuHCOtIQQmStvGPmBxaJvTKGicsgdl5W.txt
```

The verification file must return exactly:

```text
tiktok-developers-site-verification=WuHCOtIQQmStvGPmBxaJvTKGicsgdl5W
```

## Gates

Do not perform DNS/hosting account changes, TikTok verification clicks, app-review submission, paid route setup, or public posting without Antonio's explicit approval for that exact action.
