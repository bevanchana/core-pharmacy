export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";

export interface Medication {
  id: string | number;
  name: string;
  category: string;
  stock: StockStatus;
  price: string;
}
