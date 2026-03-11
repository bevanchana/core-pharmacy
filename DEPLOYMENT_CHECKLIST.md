# 🚀 Deployment Checklist

Use this checklist before deploying Core Pharmacy to production.

## Pre-Deployment Configuration

### 1. Update WhatsApp Number ⚠️ REQUIRED
- [ ] Open `src/constants.ts`
- [ ] Replace `237600000000` with actual pharmacy WhatsApp number
- [ ] Format: `237` + 9-digit number (e.g., `237612345678`)
- [ ] Test the number works on WhatsApp

### 2. Update Admin Password ⚠️ REQUIRED
- [ ] Open `src/pages/Admin.tsx`
- [ ] Change password from `admin123` to a secure password
- [ ] Consider implementing proper authentication (JWT, OAuth, etc.)
- [ ] Document the new password securely

### 3. Review Medication Data
- [ ] Check `src/constants.ts` for accuracy
- [ ] Verify all medication details are correct
- [ ] Update prices if needed
- [ ] Confirm stock levels are current
- [ ] Add/remove medications as needed

### 4. Update Pharmacy Information
- [ ] Verify pharmacy names in `src/constants.ts`
- [ ] Confirm locations are accurate
- [ ] Check operating hours (if displayed)
- [ ] Update contact information

## Build & Test

### 5. Local Testing
- [ ] Run `npm run dev` and test all features
- [ ] Test search functionality
- [ ] Test location filters
- [ ] Test category filters
- [ ] Test WhatsApp links (both desktop and mobile)
- [ ] Test admin dashboard login
- [ ] Test CSV upload functionality
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices (iOS and Android)

### 6. Build Verification
- [ ] Run `npm run build` successfully
- [ ] Check build output for errors
- [ ] Run `npm run preview` to test production build
- [ ] Verify bundle size is acceptable
- [ ] Check for console errors in production build

### 7. Code Quality
- [ ] Run `npm run lint` and fix any issues
- [ ] Review code for hardcoded values
- [ ] Check for TODO comments
- [ ] Verify no sensitive data in code
- [ ] Remove console.log statements

## Deployment Setup

### 8. Choose Hosting Platform
Select one:
- [ ] **Vercel** (Recommended - automatic deployments)
- [ ] **Netlify** (Easy setup, good performance)
- [ ] **GitHub Pages** (Free, good for static sites)
- [ ] **AWS S3 + CloudFront** (Scalable, professional)
- [ ] **Other**: _________________

### 9. Environment Configuration
- [ ] Set up environment variables (if needed)
- [ ] Configure build settings
- [ ] Set Node.js version (20.19+ or 25.8.0)
- [ ] Configure build command: `npm run build`
- [ ] Configure output directory: `dist`

### 10. Domain Setup (Optional)
- [ ] Purchase/configure custom domain
- [ ] Set up DNS records
- [ ] Configure SSL certificate
- [ ] Test domain resolution

## Security

### 11. Security Checklist
- [ ] Admin password is strong and secure
- [ ] No API keys or secrets in code
- [ ] HTTPS is enabled
- [ ] CORS is properly configured (if using API)
- [ ] Rate limiting considered (if needed)
- [ ] Input validation in place

### 12. Privacy & Compliance
- [ ] Privacy policy created (if collecting data)
- [ ] Terms of service created
- [ ] Cookie consent (if using cookies)
- [ ] GDPR compliance (if applicable)
- [ ] Health data regulations compliance

## Performance

### 13. Performance Optimization
- [ ] Images are optimized
- [ ] Bundle size is reasonable (<500KB)
- [ ] Lazy loading implemented where needed
- [ ] Caching headers configured
- [ ] CDN configured (if using)

### 14. SEO (Optional)
- [ ] Meta tags added
- [ ] Open Graph tags for social sharing
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] Analytics tracking added

## Monitoring

### 15. Analytics & Monitoring
- [ ] Google Analytics (or alternative) set up
- [ ] Error tracking (Sentry, LogRocket, etc.)
- [ ] Performance monitoring
- [ ] Uptime monitoring
- [ ] User feedback mechanism

## Post-Deployment

### 16. Launch Verification
- [ ] Visit production URL
- [ ] Test all features on production
- [ ] Test WhatsApp links from production
- [ ] Test admin dashboard on production
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate
- [ ] Test from different locations/networks

### 17. Documentation
- [ ] Update README with production URL
- [ ] Document deployment process
- [ ] Create user guide (if needed)
- [ ] Document admin procedures
- [ ] Create troubleshooting guide

### 18. Backup & Recovery
- [ ] Set up automated backups
- [ ] Document recovery procedures
- [ ] Test backup restoration
- [ ] Keep local copy of production data

## Marketing & Launch

### 19. Soft Launch
- [ ] Share with small test group
- [ ] Gather initial feedback
- [ ] Fix any critical issues
- [ ] Monitor error logs

### 20. Public Launch
- [ ] Announce on social media
- [ ] Share with pharmacy customers
- [ ] Create promotional materials
- [ ] Train pharmacy staff
- [ ] Monitor user feedback

## Maintenance

### 21. Ongoing Maintenance
- [ ] Schedule regular updates
- [ ] Monitor error logs weekly
- [ ] Update medication inventory regularly
- [ ] Review analytics monthly
- [ ] Update dependencies quarterly
- [ ] Backup data regularly

## Quick Deployment Commands

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd pharmacy-app
vercel

# Production deployment
vercel --prod
```

### Netlify Deployment
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd pharmacy-app
npm run build
netlify deploy

# Production deployment
netlify deploy --prod
```

### Manual Deployment
```bash
# Build
cd pharmacy-app
npm run build

# Upload dist/ folder to your hosting service
```

## Emergency Contacts

- **Developer**: _________________
- **Hosting Support**: _________________
- **Domain Registrar**: _________________
- **Pharmacy Owner**: _________________

## Rollback Plan

If issues occur after deployment:

1. **Immediate**: Revert to previous deployment
2. **Investigate**: Check error logs and monitoring
3. **Fix**: Address the issue locally
4. **Test**: Verify fix in staging/preview
5. **Redeploy**: Deploy fixed version

## Notes

- Keep this checklist updated as requirements change
- Document any custom deployment steps
- Share with team members
- Review before each deployment

---

**Last Updated**: March 11, 2026
**Version**: 1.0
**Status**: Ready for Production ✅
