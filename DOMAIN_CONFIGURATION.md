# Domain Configuration for InnoGenius.ai

This file provides instructions for configuring your website to use the domain www.InnoGenius.ai.

## Next.js Configuration

1. Update the `next.config.js` file to include your domain:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['innogenius.ai', 'www.innogenius.ai'],
  },
  env: {
    SITE_URL: 'https://www.innogenius.ai',
  },
};

module.exports = nextConfig;
```

2. In your `src/app/layout.tsx` file, ensure the metadata includes your domain:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://www.innogenius.ai'),
  title: 'InnoGenius.ai - AI-Powered Tools for Productivity',
  description: 'AI-driven services including AI Humanizer, Text Detector, CV Writer, Fitness Plan, Grammar Checker, and Plagiarism Checker.',
  // ...other metadata
};
```

## Vercel Domain Configuration

1. After deploying to Vercel, go to your project dashboard
2. Navigate to "Settings" > "Domains"
3. Add your domain: `www.innogenius.ai`
4. Follow Vercel's instructions to configure your DNS settings:
   - Option 1: Update nameservers at your domain registrar to use Vercel's nameservers
   - Option 2: Add the required A, CNAME, or ALIAS records at your domain registrar

## DNS Configuration

If you're using Option 2 above, you'll typically need to add these records at your domain registrar:

1. A Record:
   - Name: `@` (or leave blank)
   - Value: `76.76.21.21` (Vercel's IP address)
   - TTL: 3600 (or default)

2. CNAME Record:
   - Name: `www`
   - Value: `cname.vercel-dns.com.`
   - TTL: 3600 (or default)

## SSL Configuration

Vercel automatically provides SSL certificates for custom domains. Once your DNS is properly configured, HTTPS will be enabled automatically.

## Redirect Configuration

To ensure users are always directed to www.innogenius.ai (with the www prefix):

1. In Vercel, go to your project settings
2. Navigate to "Domains"
3. For the apex domain (innogenius.ai), click the three dots menu
4. Select "Redirect to www"

This will ensure that anyone visiting innogenius.ai will be automatically redirected to www.innogenius.ai.

## Testing Your Domain

After configuration is complete:

1. Visit https://www.innogenius.ai in your browser
2. Verify that the site loads correctly with HTTPS
3. Check that visiting http://innogenius.ai redirects to https://www.innogenius.ai
