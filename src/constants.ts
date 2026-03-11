export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

export interface Medication {
  id: number;
  tradeName: string;
  genericName: string;
  strength: string;
  dosageForm: string;
  category: string;
  stockStatus: StockStatus;
  quantity: number;
  price: string;
  pharmacyName: string;
  location: string;
}

export const MOCK_MEDICATIONS: Medication[] = [
  { 
    id: 1, 
    tradeName: "Panadol", 
    genericName: "Paracetamol", 
    strength: "500mg", 
    dosageForm: "Tablet", 
    category: "Pain Relief", 
    stockStatus: "In Stock", 
    quantity: 150,
    price: "500 FCFA",
    pharmacyName: "Core Pharmacy Douala",
    location: "Douala"
  },
  { 
    id: 2, 
    tradeName: "Coartem", 
    genericName: "Artemether-Lumefantrine", 
    strength: "20/120mg", 
    dosageForm: "Tablet", 
    category: "Antimalarial", 
    stockStatus: "Low Stock", 
    quantity: 12,
    price: "1,500 FCFA",
    pharmacyName: "Core Pharmacy Yaoundé",
    location: "Yaoundé"
  },
  { 
    id: 3, 
    tradeName: "Amoxil", 
    genericName: "Amoxicillin", 
    strength: "500mg", 
    dosageForm: "Capsule", 
    category: "Antibiotic", 
    stockStatus: "In Stock", 
    quantity: 85,
    price: "2,000 FCFA",
    pharmacyName: "Core Pharmacy Douala",
    location: "Douala"
  },
  { 
    id: 4, 
    tradeName: "Redoxon", 
    genericName: "Vitamin C", 
    strength: "1000mg", 
    dosageForm: "Effervescent Tablet", 
    category: "Vitamins", 
    stockStatus: "In Stock", 
    quantity: 45,
    price: "1,200 FCFA",
    pharmacyName: "Core Pharmacy Bafoussam",
    location: "Bafoussam"
  },
  { 
    id: 5, 
    tradeName: "Advil", 
    genericName: "Ibuprofen", 
    strength: "400mg", 
    dosageForm: "Tablet", 
    category: "Pain Relief", 
    stockStatus: "Out of Stock", 
    quantity: 0,
    price: "800 FCFA",
    pharmacyName: "Core Pharmacy Douala",
    location: "Douala"
  },
  { 
    id: 6, 
    tradeName: "Zyrtec", 
    genericName: "Cetirizine", 
    strength: "10mg", 
    dosageForm: "Tablet", 
    category: "Allergy", 
    stockStatus: "In Stock", 
    quantity: 60,
    price: "1,000 FCFA",
    pharmacyName: "Core Pharmacy Yaoundé",
    location: "Yaoundé"
  },
  { 
    id: 7, 
    tradeName: "Glucophage", 
    genericName: "Metformin", 
    strength: "500mg", 
    dosageForm: "Tablet", 
    category: "Diabetes", 
    stockStatus: "Low Stock", 
    quantity: 8,
    price: "1,800 FCFA",
    pharmacyName: "Core Pharmacy Bamenda",
    location: "Bamenda"
  },
  { 
    id: 8, 
    tradeName: "Losec", 
    genericName: "Omeprazole", 
    strength: "20mg", 
    dosageForm: "Capsule", 
    category: "Digestive Health", 
    stockStatus: "In Stock", 
    quantity: 120,
    price: "2,500 FCFA",
    pharmacyName: "Core Pharmacy Douala",
    location: "Douala"
  },
  { 
    id: 9, 
    tradeName: "Ventolin", 
    genericName: "Salbutamol", 
    strength: "100mcg", 
    dosageForm: "Inhaler", 
    category: "Respiratory", 
    stockStatus: "In Stock", 
    quantity: 30,
    price: "3,500 FCFA",
    pharmacyName: "Core Pharmacy Yaoundé",
    location: "Yaoundé"
  },
  { 
    id: 10, 
    tradeName: "Claritin", 
    genericName: "Loratadine", 
    strength: "10mg", 
    dosageForm: "Tablet", 
    category: "Allergy", 
    stockStatus: "Out of Stock", 
    quantity: 0,
    price: "900 FCFA",
    pharmacyName: "Core Pharmacy Garoua",
    location: "Garoua"
  },
  { 
    id: 11, 
    tradeName: "Augmentin", 
    genericName: "Amoxicillin/Clavulanic Acid", 
    strength: "625mg", 
    dosageForm: "Tablet", 
    category: "Antibiotic", 
    stockStatus: "In Stock", 
    quantity: 40,
    price: "4,500 FCFA",
    pharmacyName: "Core Pharmacy Douala",
    location: "Douala"
  },
  { 
    id: 12, 
    tradeName: "Voltaren", 
    genericName: "Diclofenac", 
    strength: "50mg", 
    dosageForm: "Tablet", 
    category: "Pain Relief", 
    stockStatus: "In Stock", 
    quantity: 100,
    price: "1,200 FCFA",
    pharmacyName: "Core Pharmacy Yaoundé",
    location: "Yaoundé"
  },
];

export const WHATSAPP_NUMBER = "237600000000"; 
