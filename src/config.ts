/**
 * Core Pharmacy Configuration
 * Centralized configuration for pharmacy-specific details
 */

export const PHARMACY_CONFIG = {
  // Pharmacy Information
  name: "Core Pharmacy",
  location: "Likomba, South-West | Near PCC & Redeemed House of Prayer",
  
  // WhatsApp Contact
  // Format: Country code + phone number (e.g., 237XXXXXXXXX for Cameroon)
  // TODO: Replace with actual pharmacy WhatsApp number
  whatsappNumber: "237XXXXXXXXX",
  
  // WhatsApp Messages
  reservationMessageTemplate: (medicationName: string) => 
    `Hello, I would like to reserve ${medicationName}`,
} as const;
