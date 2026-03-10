import type { Medication } from '../types';
import { PHARMACY_CONFIG } from '../config';

export const mockDatabase: Medication[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    stock: "In Stock",
    price: "500 FCFA"
  },
  {
    id: 2,
    name: "Artemether-Lumefantrine",
    category: "Antimalarial",
    stock: "Low Stock",
    price: "1,500 FCFA"
  },
  {
    id: 3,
    name: "Amoxicillin 250mg",
    category: "Antibiotic",
    stock: "In Stock",
    price: "1,200 FCFA"
  },
  {
    id: 4,
    name: "Vitamin C 1000mg",
    category: "Vitamins",
    stock: "Out of Stock",
    price: "800 FCFA"
  },
  {
    id: 5,
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    stock: "In Stock",
    price: "600 FCFA"
  },
  {
    id: 6,
    name: "Cough Syrup",
    category: "Cold & Flu",
    stock: "Low Stock",
    price: "1,000 FCFA"
  },
  {
    id: 7,
    name: "Multivitamin Complex",
    category: "Vitamins",
    stock: "In Stock",
    price: "2,500 FCFA"
  },
  {
    id: 8,
    name: "Ciprofloxacin 500mg",
    category: "Antibiotic",
    stock: "In Stock",
    price: "1,800 FCFA"
  },
  {
    id: 9,
    name: "Aspirin 75mg",
    category: "Pain Relief",
    stock: "Out of Stock",
    price: "400 FCFA"
  },
  {
    id: 10,
    name: "Chloroquine Phosphate",
    category: "Antimalarial",
    stock: "In Stock",
    price: "1,300 FCFA"
  }
];

/**
 * Filters medications by search term (case-insensitive name matching)
 * @param medications - Array of medications to filter
 * @param searchTerm - Search term to filter by
 * @returns Filtered array of medications
 */
export function filterMedications(
  medications: Medication[],
  searchTerm: string
): Medication[] {
  // If search term is empty, return all medications
  if (!searchTerm.trim()) {
    return medications;
  }

  // Filter medications by case-insensitive name matching
  const lowerSearchTerm = searchTerm.toLowerCase();
  return medications.filter((medication) =>
    medication.name.toLowerCase().includes(lowerSearchTerm)
  );
}

/**
 * Maps stock status to Tailwind CSS color classes for badge styling
 * @param stock - The stock status of the medication
 * @returns Tailwind CSS classes for the badge
 */
export function getBadgeStyle(stock: Medication['stock']): string {
  switch (stock) {
    case "In Stock":
      return "bg-green-100 text-green-800";
    case "Low Stock":
      return "bg-yellow-100 text-yellow-800";
    case "Out of Stock":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

/**
 * Handles WhatsApp reservation by opening WhatsApp with a pre-filled message
 * @param medicationName - Name of the medication to reserve
 * @param phoneNumber - Pharmacy WhatsApp phone number (format: 237XXXXXXXXX)
 */
export function handleWhatsAppReserve(
  medicationName: string,
  phoneNumber: string = PHARMACY_CONFIG.whatsappNumber
): void {
  // Create pre-filled message with medication name
  const message = PHARMACY_CONFIG.reservationMessageTemplate(medicationName);
  
  // URL-encode the message text
  const encodedMessage = encodeURIComponent(message);
  
  // Generate wa.me URL with phone number and encoded message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Open link in new tab/window
  window.open(whatsappUrl, '_blank');
}
