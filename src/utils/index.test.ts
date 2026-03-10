import { describe, it, expect } from 'vitest';
import { filterMedications, mockDatabase } from './index';
import type { Medication } from '../types';

describe('filterMedications', () => {
  const testMedications: Medication[] = [
    { id: 1, name: "Paracetamol 500mg", category: "Pain Relief", stock: "In Stock", price: "500 FCFA" },
    { id: 2, name: "Ibuprofen 400mg", category: "Pain Relief", stock: "In Stock", price: "600 FCFA" },
    { id: 3, name: "Vitamin C 1000mg", category: "Vitamins", stock: "Out of Stock", price: "800 FCFA" },
  ];

  it('should return all medications when search term is empty', () => {
    const result = filterMedications(testMedications, '');
    expect(result).toEqual(testMedications);
    expect(result.length).toBe(3);
  });

  it('should return all medications when search term is only whitespace', () => {
    const result = filterMedications(testMedications, '   ');
    expect(result).toEqual(testMedications);
  });

  it('should filter medications by name (case-insensitive)', () => {
    const result = filterMedications(testMedications, 'para');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Paracetamol 500mg');
  });

  it('should handle uppercase search terms', () => {
    const result = filterMedications(testMedications, 'VITAMIN');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Vitamin C 1000mg');
  });

  it('should handle mixed case search terms', () => {
    const result = filterMedications(testMedications, 'IbUpRoFeN');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Ibuprofen 400mg');
  });

  it('should return empty array when no matches found', () => {
    const result = filterMedications(testMedications, 'aspirin');
    expect(result).toEqual([]);
  });

  it('should match partial medication names', () => {
    const result = filterMedications(testMedications, '500');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Paracetamol 500mg');
  });

  it('should work with mock database', () => {
    const result = filterMedications(mockDatabase, 'amox');
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].name.toLowerCase()).toContain('amox');
  });
});
