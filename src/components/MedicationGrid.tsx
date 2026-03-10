import type { Medication } from '../types';
import { MedicationCard } from './MedicationCard';
import { SkeletonLoader } from './SkeletonLoader';

interface MedicationGridProps {
  medications: Medication[];
  isLoading: boolean;
  searchTerm: string;
  onReserve: (medicationName: string) => void;
}

export function MedicationGrid({ 
  medications, 
  isLoading, 
  searchTerm, 
  onReserve 
}: MedicationGridProps) {
  // Show skeleton loaders during loading
  if (isLoading) {
    return (
      <section 
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Loading medications"
        aria-busy="true"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </section>
    );
  }

  // Show empty state when no results found
  if (medications.length === 0) {
    return (
      <section 
        className="text-center py-12"
        role="status"
        aria-live="polite"
      >
        <p className="text-gray-600 text-lg mb-2">
          No medications found for '{searchTerm}'
        </p>
        <p className="text-gray-500 text-sm">
          Try checking your spelling or search by category
        </p>
      </section>
    );
  }

  // Display medication cards in responsive grid
  return (
    <section 
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      aria-label="Medication catalog"
    >
      {/* Screen reader announcement for search results */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {searchTerm 
          ? `Found ${medications.length} medication${medications.length !== 1 ? 's' : ''} matching "${searchTerm}"`
          : `Showing ${medications.length} medication${medications.length !== 1 ? 's' : ''}`
        }
      </div>
      
      {medications.map((medication) => (
        <MedicationCard
          key={medication.id}
          medication={medication}
          onReserve={onReserve}
        />
      ))}
    </section>
  );
}
