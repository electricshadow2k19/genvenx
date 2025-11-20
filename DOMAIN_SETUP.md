# Custom Domain Setup for genvenx.com

## Step 1: Configure GitHub Pages

1. Go to your repository settings: https://github.com/electricshadow2k19/genvenx/settings/pages
2. In the "Custom domain" section, enter: `genvenx.com`
3. Click "Save"
4. GitHub will automatically create a CNAME file (or update the existing one)

## Step 2: Configure DNS in GoDaddy

Go to your GoDaddy DNS management and add/update these records:

### For www.genvenx.com (CNAME Record):
- **Type:** CNAME
- **Name:** `www`
- **Value:** `electricshadow2k19.github.io`
- **TTL:** 1 Hour (or 3600 seconds)

### For genvenx.com (A Records):
You need to add 4 A records pointing to GitHub Pages IP addresses:

- **Type:** A
- **Name:** `@` (or leave blank for root domain)
- **Value:** `185.199.108.153`
- **TTL:** 1 Hour

- **Type:** A
- **Name:** `@`
- **Value:** `185.199.109.153`
- **TTL:** 1 Hour

- **Type:** A
- **Name:** `@`
- **Value:** `185.199.110.153`
- **TTL:** 1 Hour

- **Type:** A
- **Name:** `@`
- **Value:** `185.199.111.153`
- **TTL:** 1 Hour

### Important Notes:
- Delete or update the existing CNAME for `www` that points to `genvenx.com.` - it should point to `electricshadow2k19.github.io` instead
- Keep your NS records as they are (ns41.domaincontrol.com and ns42.domaincontrol.com)
- Keep your SOA and TXT records (like DMARC) as they are

## Step 3: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate, but usually work within a few hours
- You can check propagation status at: https://www.whatsmydns.net/

## Step 4: Enable HTTPS

1. After DNS propagates, go back to GitHub Pages settings
2. Check "Enforce HTTPS" (it may take a few minutes to become available)
3. GitHub will automatically provision an SSL certificate

## Verification

Once configured, both should work:
- https://genvenx.com
- https://www.genvenx.com

Both will point to your GitHub Pages site.

