import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { MedicationCard } from '../components/MedicationCard';
import { MedicationGrid } from '../components/MedicationGrid';
import { FloatingWhatsAppButton } from '../components/FloatingWhatsAppButton';
import { SkeletonLoader } from '../components/SkeletonLoader';
import type { Medication } from '../types';

describe('Accessibility Features (Requirements 8.5)', () => {
  const mockMedication: Medication = {
    id: 1,
    name: 'Paracetamol 500mg',
    category: 'Pain Relief',
    stock: 'In Stock',
    price: '500 FCFA',
  };

  const mockMedications: Medication[] = [mockMedication];

  describe('Semantic HTML Elements', () => {
    it('should use semantic header element', () => {
      const { container } = render(<Header />);
      const header = container.querySelector('header');
      expect(header).toBeTruthy();
    });

    it('should use semantic article element for medication cards', () => {
      const { container } = render(
        <MedicationCard medication={mockMedication} onReserve={() => {}} />
      );
      const article = container.querySelector('article');
      expect(article).toBeTruthy();
    });

    it('should use semantic section element for medication grid', () => {
      const { container } = render(
        <MedicationGrid
          medications={mockMedications}
          isLoading={false}
          searchTerm=""
          onReserve={() => {}}
        />
      );
      const section = container.querySelector('section');
      expect(section).toBeTruthy();
    });

    it('should use semantic heading for medication name', () => {
      render(<MedicationCard medication={mockMedication} onReserve={() => {}} />);
      const heading = screen.getByRole('heading', { name: /paracetamol 500mg/i });
      expect(heading).toBeTruthy();
    });
  });

  describe('ARIA Labels on Icon Buttons', () => {
    it('should have aria-label on contact desk button', () => {
      render(<Header />);
      const button = screen.getByRole('button', { name: /contact desk/i });
      expect(button).toBeTruthy();
      expect(button.getAttribute('aria-label')).toBe('Contact desk');
    });

    it('should have aria-label on floating WhatsApp button', () => {
      render(<FloatingWhatsAppButton phoneNumber="237XXXXXXXXX" />);
      const button = screen.getByRole('button', { name: /contact pharmacy on whatsapp/i });
      expect(button).toBeTruthy();
      expect(button.getAttribute('aria-label')).toBe('Contact pharmacy on WhatsApp');
    });

    it('should have aria-label on reserve button', () => {
      render(<MedicationCard medication={mockMedication} onReserve={() => {}} />);
      const button = screen.getByRole('button', { name: /reserve paracetamol.*via whatsapp/i });
      expect(button).toBeTruthy();
      expect(button.getAttribute('aria-label')).toContain('Reserve');
      expect(button.getAttribute('aria-label')).toContain('Paracetamol 500mg');
    });

    it('should have descriptive aria-label on unavailable button', () => {
      const outOfStockMed = { ...mockMedication, stock: 'Out of Stock' as const };
      render(<MedicationCard medication={outOfStockMed} onReserve={() => {}} />);
      const button = screen.getByRole('button', { name: /unavailable/i });
      expect(button).toBeTruthy();
      expect(button.getAttribute('aria-label')).toContain('unavailable');
    });
  });

  describe('Keyboard Navigation', () => {
    it('should have focusable search input', () => {
      render(<SearchBar searchTerm="" onSearchChange={() => {}} />);
      const input = screen.getByRole('searchbox');
      expect(input).toBeTruthy();
      expect(input.tabIndex).toBeGreaterThanOrEqual(0);
    });

    it('should have focusable reserve button', () => {
      render(<MedicationCard medication={mockMedication} onReserve={() => {}} />);
      const button = screen.getByRole('button', { name: /reserve.*via whatsapp/i });
      expect(button).toBeTruthy();
      expect(button.tabIndex).toBeGreaterThanOrEqual(0);
    });

    it('should have focusable contact desk button', () => {
      render(<Header />);
      const button = screen.getByRole('button', { name: /contact desk/i });
      expect(button).toBeTruthy();
      expect(button.tabIndex).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Focus Indicators', () => {
    it('should have focus ring on search input', () => {
      const { container } = render(<SearchBar searchTerm="" onSearchChange={() => {}} />);
      const input = container.querySelector('input');
      expect(input?.className).toContain('focus:ring');
      expect(input?.className).toContain('focus:outline-none');
    });

    it('should have focus ring on reserve button', () => {
      render(<MedicationCard medication={mockMedication} onReserve={() => {}} />);
      const button = screen.getByRole('button', { name: /reserve.*via whatsapp/i });
      expect(button.className).toContain('focus:ring');
      expect(button.className).toContain('focus:outline-none');
    });

    it('should have focus ring on contact desk button', () => {
      render(<Header />);
      const button = screen.getByRole('button', { name: /contact desk/i });
      expect(button.className).toContain('focus:ring');
      expect(button.className).toContain('focus:outline-none');
    });

    it('should have focus ring on floating WhatsApp button', () => {
      render(<FloatingWhatsAppButton phoneNumber="237XXXXXXXXX" />);
      const button = screen.getByRole('button', { name: /contact pharmacy on whatsapp/i });
      expect(button.className).toContain('focus:ring');
      expect(button.className).toContain('focus:outline-none');
    });
  });

  describe('Screen Reader Announcements', () => {
    it('should announce search results count', () => {
      const { container } = render(
        <MedicationGrid
          medications={mockMedications}
          isLoading={false}
          searchTerm="para"
          onReserve={() => {}}
        />
      );
      
      const announcement = container.querySelector('[role="status"][aria-live="polite"]');
      expect(announcement).toBeTruthy();
      expect(announcement?.textContent).toContain('1 medication');
      expect(announcement?.textContent).toContain('para');
    });

    it('should announce when no results found', () => {
      const { container } = render(
        <MedicationGrid
          medications={[]}
          isLoading={false}
          searchTerm="xyz"
          onReserve={() => {}}
        />
      );
      
      const announcement = container.querySelector('[role="status"][aria-live="polite"]');
      expect(announcement).toBeTruthy();
      expect(announcement?.textContent).toContain('No medications found');
    });

    it('should announce loading state', () => {
      const { container } = render(
        <MedicationGrid
          medications={[]}
          isLoading={true}
          searchTerm=""
          onReserve={() => {}}
        />
      );
      
      const section = container.querySelector('section[aria-busy="true"]');
      expect(section).toBeTruthy();
      expect(section?.getAttribute('aria-label')).toBe('Loading medications');
    });

    it('should have screen reader text for loading skeleton', () => {
      const { container } = render(<SkeletonLoader />);
      const srText = container.querySelector('.sr-only');
      expect(srText).toBeTruthy();
      expect(srText?.textContent).toContain('Loading medication information');
    });

    it('should have screen reader labels for price and category', () => {
      const { container } = render(
        <MedicationCard medication={mockMedication} onReserve={() => {}} />
      );
      
      const srTexts = container.querySelectorAll('.sr-only');
      const srTextArray = Array.from(srTexts).map(el => el.textContent);
      
      expect(srTextArray).toContain('Category: ');
      expect(srTextArray).toContain('Price: ');
    });
  });

  describe('Color Contrast (WCAG AA)', () => {
    it('should use high contrast colors for text', () => {
      const { container } = render(
        <MedicationCard medication={mockMedication} onReserve={() => {}} />
      );
      
      // Medication name should be dark gray on white (high contrast)
      const heading = screen.getByRole('heading', { name: /paracetamol/i });
      expect(heading.className).toContain('text-gray-900');
      
      // Category should be medium gray on white (still meets WCAG AA)
      const category = container.querySelector('.text-gray-600');
      expect(category).toBeTruthy();
    });

    it('should use sufficient contrast for buttons', () => {
      render(<MedicationCard medication={mockMedication} onReserve={() => {}} />);
      const button = screen.getByRole('button', { name: /reserve.*via whatsapp/i });
      
      // Blue button with white text (high contrast)
      expect(button.className).toContain('bg-blue-600');
      expect(button.className).toContain('text-white');
    });

    it('should use sufficient contrast for disabled buttons', () => {
      const outOfStockMed = { ...mockMedication, stock: 'Out of Stock' as const };
      render(<MedicationCard medication={outOfStockMed} onReserve={() => {}} />);
      const button = screen.getByRole('button', { name: /unavailable/i });
      
      // Gray button with darker gray text
      expect(button.className).toContain('bg-gray-300');
      expect(button.className).toContain('text-gray-500');
    });
  });

  describe('Additional Accessibility Features', () => {
    it('should hide decorative icons from screen readers', () => {
      const { container } = render(<Header />);
      const icons = container.querySelectorAll('[aria-hidden="true"]');
      expect(icons.length).toBeGreaterThan(0);
    });

    it('should use proper search input type', () => {
      render(<SearchBar searchTerm="" onSearchChange={() => {}} />);
      const input = screen.getByRole('searchbox');
      expect(input.getAttribute('type')).toBe('search');
    });

    it('should have proper label for search input', () => {
      const { container } = render(<SearchBar searchTerm="" onSearchChange={() => {}} />);
      const label = container.querySelector('label[for="medication-search"]');
      expect(label).toBeTruthy();
      expect(label?.textContent).toContain('Search medications');
    });

    it('should have aria-describedby for search instructions', () => {
      render(<SearchBar searchTerm="" onSearchChange={() => {}} />);
      const input = screen.getByRole('searchbox');
      expect(input.getAttribute('aria-describedby')).toBe('search-instructions');
    });

    it('should have stock status with role="status"', () => {
      const { container } = render(
        <MedicationCard medication={mockMedication} onReserve={() => {}} />
      );
      const status = container.querySelector('[role="status"]');
      expect(status).toBeTruthy();
      expect(status?.getAttribute('aria-label')).toContain('Stock status');
    });
  });
});
