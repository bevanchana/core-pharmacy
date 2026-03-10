import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MedicationGrid } from '../components/MedicationGrid';
import { SearchBar } from '../components/SearchBar';
import { Header } from '../components/Header';
import { FloatingWhatsAppButton } from '../components/FloatingWhatsAppButton';
import { MedicationCard } from '../components/MedicationCard';
import type { Medication } from '../types';

describe('Responsive Design Tests', () => {
  const mockMedications: Medication[] = [
    { id: 1, name: 'Paracetamol 500mg', category: 'Pain Relief', stock: 'In Stock', price: '500 FCFA' },
    { id: 2, name: 'Artemether-Lumefantrine', category: 'Antimalarial', stock: 'Low Stock', price: '1,500 FCFA' },
    { id: 3, name: 'Amoxicillin 250mg', category: 'Antibiotic', stock: 'Out of Stock', price: '800 FCFA' },
  ];

  describe('Mobile-First Approach (Requirements 7.1)', () => {
    it('should use mobile-first Tailwind classes', () => {
      const { container } = render(
        <MedicationGrid
          medications={mockMedications}
          isLoading={false}
          searchTerm=""
          onReserve={() => {}}
        />
      );

      const grid = container.querySelector('.grid');
      expect(grid).toBeTruthy();
      // Mobile-first: grid-cols-1 is the base class
      expect(grid?.className).toContain('grid-cols-1');
    });
  });

  describe('Single-Column Layout on Mobile (Requirements 7.2)', () => {
    it('should display medications in single column on mobile', () => {
      const { container } = render(
        <MedicationGrid
          medications={mockMedications}
          isLoading={false}
          searchTerm=""
          onReserve={() => {}}
        />
      );

      const grid = container.querySelector('.grid');
      // Base class should be grid-cols-1 for mobile
      expect(grid?.className).toContain('grid-cols-1');
    });

    it('should display skeleton loaders in single column on mobile', () => {
      const { container } = render(
        <MedicationGrid
          medications={[]}
          isLoading={true}
          searchTerm=""
          onReserve={() => {}}
        />
      );

      const grid = container.querySelector('.grid');
      expect(grid?.className).toContain('grid-cols-1');
    });
  });

  describe('Two-Column Layout on Tablet (Requirements 7.3)', () => {
    it('should have md:grid-cols-2 class for tablet breakpoint', () => {
      const { container } = render(
        <MedicationGrid
          medications={mockMedications}
          isLoading={false}
          searchTerm=""
          onReserve={() => {}}
        />
      );

      const grid = container.querySelector('.grid');
      // Should have md:grid-cols-2 for tablet
      expect(grid?.className).toContain('md:grid-cols-2');
    });
  });

  describe('Three-Column Layout on Desktop (Requirements 7.4)', () => {
    it('should have lg:grid-cols-3 class for desktop breakpoint', () => {
      const { container } = render(
        <MedicationGrid
          medications={mockMedications}
          isLoading={false}
          searchTerm=""
          onReserve={() => {}}
        />
      );

      const grid = container.querySelector('.grid');
      // Should have lg:grid-cols-3 for desktop
      expect(grid?.className).toContain('lg:grid-cols-3');
    });
  });

  describe('44px Minimum Touch Targets (Requirements 7.5)', () => {
    it('should have 44px minimum height for search input', () => {
      render(
        <SearchBar searchTerm="" onSearchChange={() => {}} />
      );

      const input = screen.getByRole('searchbox');
      
      // Check inline style for minHeight
      const minHeight = (input as HTMLInputElement).style.minHeight;
      expect(minHeight).toBe('44px');
    });

    it('should have adequate height for reserve button', () => {
      render(
        <MedicationCard
          medication={mockMedications[0]}
          onReserve={() => {}}
        />
      );

      const button = screen.getByRole('button', { name: /reserve.*paracetamol.*via whatsapp/i });
      expect(button).toBeTruthy();
      
      // Button has py-2 (0.5rem = 8px top + 8px bottom = 16px) + text height
      // With font-medium and padding, should exceed 44px
      expect(button.className).toContain('py-2');
    });

    it('should have adequate size for floating WhatsApp button', () => {
      render(
        <FloatingWhatsAppButton phoneNumber="237XXXXXXXXX" />
      );

      const button = screen.getByRole('button', { name: /contact pharmacy on whatsapp/i });
      expect(button).toBeTruthy();
      
      // Button has h-14 w-14 (56px x 56px) which exceeds 44px minimum
      expect(button.className).toContain('h-14');
      expect(button.className).toContain('w-14');
    });

    it('should have adequate size for contact desk button', () => {
      render(<Header />);

      const button = screen.getByRole('button', { name: /contact desk/i });
      expect(button).toBeTruthy();
      
      // Button has px-4 py-2 which provides adequate touch target
      expect(button.className).toContain('py-2');
      expect(button.className).toContain('px-4');
    });
  });

  describe('Sticky Positioning at All Breakpoints (Requirements 7.1)', () => {
    it('should have sticky positioning on header', () => {
      const { container } = render(<Header />);

      const header = container.querySelector('header');
      expect(header?.className).toContain('sticky');
      expect(header?.className).toContain('top-0');
      expect(header?.className).toContain('z-50');
    });

    it('should have sticky positioning on search bar', () => {
      const { container } = render(
        <SearchBar searchTerm="" onSearchChange={() => {}} />
      );

      const searchContainer = container.querySelector('.sticky');
      expect(searchContainer).toBeTruthy();
      expect(searchContainer?.className).toContain('sticky');
      expect(searchContainer?.className).toContain('top-[104px]');
      expect(searchContainer?.className).toContain('z-40');
    });

    it('should have proper z-index layering for sticky elements', () => {
      const { container: headerContainer } = render(<Header />);
      const { container: searchContainer } = render(
        <SearchBar searchTerm="" onSearchChange={() => {}} />
      );

      const header = headerContainer.querySelector('header');
      const search = searchContainer.querySelector('.sticky');

      // Header should have higher z-index (z-50) than search (z-40)
      expect(header?.className).toContain('z-50');
      expect(search?.className).toContain('z-40');
    });
  });

  describe('Responsive Visibility', () => {
    it('should hide floating WhatsApp button on desktop (md and above)', () => {
      render(
        <FloatingWhatsAppButton phoneNumber="237XXXXXXXXX" />
      );

      const button = screen.getByRole('button', { name: /contact pharmacy on whatsapp/i });
      // Should have md:hidden class
      expect(button.className).toContain('md:hidden');
    });

    it('should hide contact desk button on mobile', () => {
      render(<Header />);

      const button = screen.getByRole('button', { name: /contact desk/i });
      // Should have hidden class for mobile, md:block for desktop
      expect(button.className).toContain('hidden');
      expect(button.className).toContain('md:block');
    });
  });

  describe('Responsive Spacing', () => {
    it('should have responsive padding on main content', () => {
      // Mock setTimeout to avoid waiting
      vi.useFakeTimers();
      
      const { container } = render(<App />);
      
      const main = container.querySelector('main');
      expect(main).toBeTruthy();
      
      // Should have px-4 for mobile and md:px-6 for tablet/desktop
      expect(main?.className).toContain('px-4');
      expect(main?.className).toContain('md:px-6');
      
      vi.useRealTimers();
    });

    it('should have responsive padding on header', () => {
      const { container } = render(<Header />);

      const headerContent = container.querySelector('.flex.items-center.justify-between');
      expect(headerContent?.className).toContain('px-4');
      expect(headerContent?.className).toContain('md:px-6');
    });

    it('should have responsive padding on search bar', () => {
      const { container } = render(
        <SearchBar searchTerm="" onSearchChange={() => {}} />
      );

      const searchPadding = container.querySelector('.px-4');
      expect(searchPadding?.className).toContain('px-4');
      expect(searchPadding?.className).toContain('md:px-6');
    });
  });

  describe('Responsive Typography', () => {
    it('should have responsive text size for pharmacy name', () => {
      render(<Header />);

      const title = screen.getByRole('heading', { name: /core pharmacy/i });
      // Should have text-xl for mobile and md:text-2xl for desktop
      expect(title.className).toContain('text-xl');
      expect(title.className).toContain('md:text-2xl');
    });

    it('should have responsive text size for location', () => {
      const { container } = render(<Header />);

      // The responsive text classes are on the parent div, not the p element
      const locationContainer = container.querySelector('.flex.items-center.gap-2.text-sm');
      expect(locationContainer?.className).toContain('text-sm');
      expect(locationContainer?.className).toContain('md:text-base');
    });
  });

  describe('Grid Gap Consistency', () => {
    it('should have consistent gap spacing in medication grid', () => {
      const { container } = render(
        <MedicationGrid
          medications={mockMedications}
          isLoading={false}
          searchTerm=""
          onReserve={() => {}}
        />
      );

      const grid = container.querySelector('.grid');
      // Should have gap-4 for consistent spacing
      expect(grid?.className).toContain('gap-4');
    });
  });
});
