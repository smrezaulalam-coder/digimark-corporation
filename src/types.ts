export type CategoryId = 'sec' | 'att' | 'fire' | 'pa';

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  shortDesc: string;
  color: string;
  accentBg: string;
  badgeBorder: string;
  icon: string;
  popularApplications: string[];
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  brand: string;
  model: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  icon: string;
  popular?: boolean;
  warranty: string;
  inStock: boolean;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}
