import { describe, it, expect } from 'vitest';
import { PHARMACY_CONFIG } from './config';

describe('Pharmacy Configuration', () => {
  describe('Pharmacy Information', () => {
    it('should have correct pharmacy name', () => {
      expect(PHARMACY_CONFIG.name).toBe('Core Pharmacy');
    });

    it('should have correct location', () => {
      expect(PHARMACY_CONFIG.location).toBe(
        'Likomba, South-West | Near PCC & Redeemed House of Prayer'
      );
    });
  });

  describe('WhatsApp Configuration', () => {
    it('should have WhatsApp number configured', () => {
      // Should have a WhatsApp number (even if placeholder)
      expect(PHARMACY_CONFIG.whatsappNumber).toBeDefined();
      expect(PHARMACY_CONFIG.whatsappNumber).toMatch(/^237/);
      expect(PHARMACY_CONFIG.whatsappNumber.length).toBeGreaterThan(3);
    });

    it('should generate correct reservation message', () => {
      const medicationName = 'Paracetamol 500mg';
      const message = PHARMACY_CONFIG.reservationMessageTemplate(medicationName);
      
      expect(message).toContain('Hello');
      expect(message).toContain('reserve');
      expect(message).toContain(medicationName);
    });

    it('should generate unique messages for different medications', () => {
      const med1 = 'Paracetamol 500mg';
      const med2 = 'Ibuprofen 400mg';
      
      const message1 = PHARMACY_CONFIG.reservationMessageTemplate(med1);
      const message2 = PHARMACY_CONFIG.reservationMessageTemplate(med2);
      
      expect(message1).not.toBe(message2);
      expect(message1).toContain(med1);
      expect(message2).toContain(med2);
    });
  });
});
