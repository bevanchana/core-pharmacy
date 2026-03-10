# 💊 Core Pharmacy - Modern Pharmacy Website

A modern, responsive pharmacy website built with React, TypeScript, and Tailwind CSS. Browse medications, check stock availability, and reserve items via WhatsApp.

![Core Pharmacy](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Modern UI Design** - Beautiful gradient backgrounds, glass morphism effects, and smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🔍 **Real-time Search** - Instant medication filtering as you type
- 💊 **Stock Management** - Visual stock indicators (In Stock, Low Stock, Out of Stock)
- 💬 **WhatsApp Integration** - One-click reservation via WhatsApp
- ♿ **Accessible** - WCAG AA compliant with screen reader support
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🧪 **Well Tested** - 63 passing tests with Vitest and React Testing Library

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/core-pharmacy.git
cd core-pharmacy

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app in action!

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:ui      # Open Vitest UI

# Linting
npm run lint         # Run ESLint
```

## 🏗️ Project Structure

```
pharmacy-app/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── MedicationCard.tsx
│   │   ├── MedicationGrid.tsx
│   │   ├── FloatingWhatsAppButton.tsx
│   │   └── SkeletonLoader.tsx
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── test/               # Test files
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── public/                 # Static assets
└── dist/                   # Production build (generated)
```

## 🎨 Design Features

### Modern UI Elements
- **Gradient Backgrounds** - Smooth blue to indigo gradients
- **Animated Orbs** - Floating, pulsing background elements
- **Glass Morphism** - Frosted glass effects on header and search
- **Hover Effects** - Cards lift and glow on hover
- **Gradient Text** - Eye-catching gradient headings
- **Shadow Depth** - Modern shadow system for depth

### Responsive Design
- **Mobile**: Single column layout with floating WhatsApp button
- **Tablet**: Two-column grid layout
- **Desktop**: Three-column grid with contact desk button

## 🧪 Testing

The project includes comprehensive test coverage:

- **Unit Tests** - Core functionality testing
- **Component Tests** - React component testing
- **Accessibility Tests** - WCAG compliance testing
- **Responsive Tests** - Breakpoint and layout testing

```bash
npm test
```

## 🔧 Configuration

### WhatsApp Integration

Update the pharmacy WhatsApp number in `src/config.ts`:

```typescript
export const PHARMACY_CONFIG = {
  name: "Core Pharmacy",
  location: "Likomba, South-West | Near PCC & Redeemed House of Prayer",
  whatsappNumber: "237XXXXXXXXX", // Replace with actual number
  // ...
}
```

### Medication Database

The mock database is located in `src/utils/index.ts`. Replace with your actual API integration:

```typescript
export const mockDatabase: Medication[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    stock: "In Stock",
    price: "500 FCFA"
  },
  // Add more medications...
];
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/core-pharmacy)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/core-pharmacy)

## 🛠️ Built With

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Vitest](https://vitest.dev/) - Testing framework
- [React Testing Library](https://testing-library.com/react) - Component testing

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Core Pharmacy - Likomba, South-West, Cameroon

Project Link: [https://github.com/YOUR_USERNAME/core-pharmacy](https://github.com/YOUR_USERNAME/core-pharmacy)

---

Made with ❤️ for Core Pharmacy
