# Deployment Guide

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser at `http://localhost:5173`

## Building for Production

1. Build the project:
```bash
npm run build
```

2. The production files will be in the `dist` directory

## Deployment Options

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy automatically on git push

### Vercel

1. Import your GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy automatically

### AWS S3 + CloudFront

1. Build the project
2. Upload `dist` folder to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (genvenx.com)

## Environment Variables

No environment variables required for basic setup.

## Custom Domain Setup

1. Point your domain (genvenx.com) to your hosting provider
2. Configure SSL certificate
3. Update DNS records as needed

