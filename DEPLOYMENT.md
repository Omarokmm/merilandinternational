# Deployment Guide - Meriland International Website

This guide provides step-by-step instructions for deploying the Meriland International website to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)

**Vercel is the easiest and most optimized platform for Next.js applications.**

#### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/meriland-international.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - In your Vercel dashboard, go to project settings
   - Add your custom domain (e.g., merilandinternational.com)
   - Update DNS records as instructed

### 2. Netlify

#### Steps:
1. **Build the project**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect your GitHub repository

### 3. AWS Amplify

#### Steps:
1. **Push to GitHub** (same as Vercel)

2. **Deploy to AWS Amplify**
   - Go to AWS Amplify Console
   - Click "New App" → "Host web app"
   - Connect your GitHub repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

## 🔧 Pre-Deployment Checklist

### 1. Update Configuration Files

**Update `app/layout.tsx`:**
```typescript
// Replace with your actual domain
metadataBase: new URL('https://yourdomain.com'),
```

**Update `public/sitemap.xml`:**
```xml
<!-- Replace with your actual domain -->
<loc>https://yourdomain.com/</loc>
```

**Update `public/robots.txt`:**
```txt
# Replace with your actual domain
Sitemap: https://yourdomain.com/sitemap.xml
```

### 2. Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### 3. SEO Optimization

- Update meta titles and descriptions
- Add your Google Analytics ID
- Configure Google Search Console
- Set up Google My Business

### 4. Performance Optimization

```bash
# Build and test performance
npm run build
npm run start

# Check Lighthouse scores
# - Performance: 90+
# - Accessibility: 100
# - Best Practices: 100
# - SEO: 100
```

## 🌐 Domain Setup

### 1. Domain Registration
- Register your domain (e.g., merilandinternational.com)
- Recommended registrars: Namecheap, GoDaddy, Google Domains

### 2. DNS Configuration

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

## 📊 Analytics & Monitoring

### 1. Google Analytics
1. Create Google Analytics account
2. Add tracking code to `app/layout.tsx`
3. Set up goals and conversions

### 2. Google Search Console
1. Add your domain to Search Console
2. Verify ownership
3. Submit sitemap
4. Monitor performance

### 3. Uptime Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure alerts for downtime

## 🔒 Security & SSL

### 1. SSL Certificate
- Vercel/Netlify provide automatic SSL
- For custom servers, use Let's Encrypt

### 2. Security Headers
Already configured in `next.config.js`:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

### 3. Content Security Policy
Add to `app/layout.tsx`:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;">
```

## 📱 PWA Configuration

### 1. Icons
Add these files to `public/`:
- `favicon.ico` (32x32)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

### 2. Manifest
Already configured in `public/site.webmanifest`

## 🚀 Post-Deployment

### 1. Testing Checklist
- [ ] Website loads correctly
- [ ] All links work
- [ ] Contact form functions
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] SSL certificate active
- [ ] Analytics tracking
- [ ] Search console verified

### 2. Performance Monitoring
- Monitor Core Web Vitals
- Set up performance alerts
- Regular Lighthouse audits

### 3. Content Updates
- Update contact information
- Add real testimonials
- Include actual case studies
- Add team photos and bios

## 🔄 Maintenance

### 1. Regular Updates
```bash
# Update dependencies monthly
npm update

# Check for security vulnerabilities
npm audit

# Update Next.js and React
npm install next@latest react@latest
```

### 2. Backup Strategy
- Regular database backups (if applicable)
- Version control with GitHub
- Document all customizations

### 3. Monitoring
- Set up error tracking (Sentry)
- Monitor uptime and performance
- Track user analytics

## 🆘 Troubleshooting

### Common Issues:

1. **Build Errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install
   npm run build
   ```

2. **Domain Issues**
   - Check DNS propagation (24-48 hours)
   - Verify SSL certificate
   - Check redirects

3. **Performance Issues**
   - Optimize images
   - Enable compression
   - Use CDN for static assets

## 📞 Support

For deployment issues:
- Check platform documentation
- Review error logs
- Contact platform support
- Consult with your development team

---

**Meriland International** - Professional website deployment guide 