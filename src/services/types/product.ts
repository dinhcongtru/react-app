export interface Product {
  id: number;
  name: string;
  data?: {
    color?: string;
    price?: string;
    generation?: string;
  }
}