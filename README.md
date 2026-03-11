# 💊 Core Pharmacy - National Pharmacy Network

<div align="center">

**Modern pharmacy inventory system connecting patients to pharmacies across Cameroon**

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Live Demo](#) • [Documentation](CURRENT_STATE.md) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 🌟 Features

### Public Storefront
- 🔍 **Smart Search** - Search by trade name, generic name, or category
- 📍 **Multi-Location** - Find medications across 5+ cities in Cameroon
- 🏷️ **Category Filters** - Quick access to Pain Relief, Antibiotics, Vitamins, and more
- 💬 **WhatsApp Integration** - Reserve medications with one click
- 📱 **Responsive Design** - Perfect experience on mobile, tablet, and desktop
- ⚡ **Real-time Updates** - Live stock status and availability
- 🎨 **Modern UI** - Professional clinical design with smooth animations

### Admin Dashboard
- 🔐 **Secure Access** - Password-protected admin portal
- 📊 **Inventory Overview** - Track total products, low stock, and out of stock items
- 📤 **CSV Upload** - Bulk import medication data
- 📋 **Detailed Tables** - View and manage all medications
- 🏥 **Multi-Pharmacy** - Support for pharmacy network management

## 🚀 Quick Start

### Prerequisites
- Node.js 20.19+ (recommended: 25.8.0)
- npm 11+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bevanchana/core-pharmacy.git
   cd core-pharmacy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📱 Usage

### For Patients
1. Visit the storefront
2. Search for medications by name or browse categories
3. Filter by location to find nearby pharmacies
4. Click "Reserve via WhatsApp" to contact the pharmacy
5. Complete your reservation through WhatsApp

### For Pharmacy Owners
1. Navigate to `/admin`
2. Login with admin credentials (default: `admin123`)
3. View inventory dashboard
4. Upload new medications via CSV
5. Monitor stock levels

## 🗂️ Project Structure

```
pharmacy-app/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── MedicationCard.tsx
│   │   ├── MedicationGrid.tsx
│   │   ├── FloatingWhatsAppButton.tsx
│   │   ├── CSVUploadModal.tsx
│   │   └── SkeletonLoader.tsx
│   ├── pages/
│   │   └── Admin.tsx        # Admin dashboard
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── types/               # TypeScript types
│   ├── constants.ts         # Medication data & config
│   ├── config.ts            # App configuration
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── dist/                    # Production build
└── docs/                    # Documentation
```

## 🎨 Tech Stack

- **Frontend**: React 19, TypeScript 5.8
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion (motion)
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Build Tool**: Vite 6.2
- **CSV Parsing**: PapaParse

## ⚙️ Configuration

### Update WhatsApp Number

Edit `src/constants.ts`:
```typescript
export const WHATSAPP_NUMBER = "237XXXXXXXXX"; // Replace with actual number
```

### Update Admin Password

Edit `src/pages/Admin.tsx`:
```typescript
if (password === 'admin123') { // Change this password
  setIsLoggedIn(true);
}
```

For detailed configuration, see [CONFIGURATION.md](CONFIGURATION.md)

## 📊 Current Inventory

- **12 medications** across **5 locations**
- **9 categories**: Pain Relief, Antibiotic, Antimalarial, Vitamins, Allergy, Respiratory, Diabetes, Digestive Health
- **Locations**: Douala, Yaoundé, Bafoussam, Bamenda, Garoua

## 🧪 Testing

```bash
# Type checking
npm run lint

# Build verification
npm run build
```

## 📚 Documentation

- [Current State](CURRENT_STATE.md) - Complete application overview
- [Setup Guide](SETUP.md) - Initial setup documentation
- [Configuration](CONFIGURATION.md) - Configuration guide
- [GitHub Setup](GITHUB_SETUP.md) - Deployment guide
- [WhatsApp Testing](TESTING_WHATSAPP.md) - WhatsApp integration testing

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
See [GITHUB_SETUP.md](GITHUB_SETUP.md) for detailed instructions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For support, email support@corepharmacy.cm or join our WhatsApp community.

## 🔗 Links

- **Repository**: https://github.com/bevanchana/core-pharmacy
- **AI Studio**: https://ai.studio/apps/d81a2619-e0b5-426e-8617-6c72f3bbb2a7
- **Documentation**: [CURRENT_STATE.md](CURRENT_STATE.md)

---

<div align="center">
Made with ❤️ for the people of Cameroon
</div>
