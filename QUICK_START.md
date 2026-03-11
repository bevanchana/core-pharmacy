# ⚡ Quick Start Guide

Get Core Pharmacy running in 3 minutes!

## 🚀 For Developers

### 1. Clone & Install (1 minute)
```bash
git clone https://github.com/bevanchana/core-pharmacy.git
cd core-pharmacy
npm install
```

### 2. Run Development Server (30 seconds)
```bash
npm run dev
```

Open: http://localhost:3000

### 3. Build for Production (30 seconds)
```bash
npm run build
npm run preview
```

## 🎯 Quick Navigation

### Public Storefront
- **URL**: `/` or `http://localhost:3000`
- **Features**: Search, filter by category/location, reserve via WhatsApp

### Admin Dashboard
- **URL**: `/admin` or `http://localhost:3000/admin`
- **Password**: `admin123` (change this!)
- **Features**: View inventory, upload CSV, monitor stock

## ⚙️ Quick Configuration

### Update WhatsApp Number
**File**: `src/constants.ts`
```typescript
export const WHATSAPP_NUMBER = "237XXXXXXXXX"; // ← Change this
```

### Update Admin Password
**File**: `src/pages/Admin.tsx`
```typescript
if (password === 'admin123') { // ← Change this
  setIsLoggedIn(true);
}
```

### Add Medications
**File**: `src/constants.ts`
```typescript
export const MOCK_MEDICATIONS: Medication[] = [
  {
    id: 13, // ← Increment ID
    tradeName: "Your Medicine",
    genericName: "Generic Name",
    strength: "500mg",
    dosageForm: "Tablet",
    category: "Pain Relief",
    stockStatus: "In Stock",
    quantity: 100,
    price: "1,000 FCFA",
    pharmacyName: "Core Pharmacy Douala",
    location: "Douala"
  },
  // ... add more
];
```

## 📱 Quick Test

### Test Search
1. Go to http://localhost:3000
2. Type "Panadol" in search bar
3. Should see Panadol medication card

### Test Filters
1. Click "Douala" location filter
2. Click "Pain Relief" category filter
3. Should see filtered results

### Test WhatsApp
1. Click "Reserve via WhatsApp" on any medication
2. Should open WhatsApp with pre-filled message
3. Verify phone number is correct

### Test Admin
1. Go to http://localhost:3000/admin
2. Enter password: `admin123`
3. Should see dashboard with inventory stats

## 🚀 Quick Deploy

### Vercel (Fastest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod
```

### Manual
```bash
npm run build
# Upload dist/ folder to your host
```

## 📚 Quick Links

- **Full Documentation**: [CURRENT_STATE.md](CURRENT_STATE.md)
- **Deployment Guide**: [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- **Integration Details**: [INTEGRATION_SUMMARY.md](INTEGRATION_SUMMARY.md)
- **Configuration**: [CONFIGURATION.md](CONFIGURATION.md)
- **GitHub**: https://github.com/bevanchana/core-pharmacy

## 🆘 Quick Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Node Version Error
```bash
# Check Node version (need 20.19+)
node --version

# Update Node if needed
# macOS: brew install node
# Or use nvm: nvm install 25
```

### Build Errors
```bash
# Clean and rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

### WhatsApp Not Opening
- Check WhatsApp number format: `237XXXXXXXXX`
- Test on mobile device
- Ensure WhatsApp is installed

## 💡 Quick Tips

1. **Development**: Use `npm run dev` for hot reload
2. **Production**: Always test with `npm run build` first
3. **Testing**: Test on mobile devices before deploying
4. **Security**: Change admin password before production
5. **Performance**: Keep bundle size under 500KB

## 📊 Quick Stats

- **Build Time**: ~2 seconds
- **Bundle Size**: 448 KB (141 KB gzipped)
- **Medications**: 12 items
- **Locations**: 5 cities
- **Categories**: 9 types

## ✅ Quick Checklist

Before deploying:
- [ ] Update WhatsApp number
- [ ] Change admin password
- [ ] Test all features
- [ ] Build successfully
- [ ] Test on mobile

## 🎉 You're Ready!

The app is production-ready. Just update the configuration and deploy!

Need help? Check the full documentation or open an issue on GitHub.

---

**Quick Start Version**: 1.0
**Last Updated**: March 11, 2026
