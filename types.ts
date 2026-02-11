export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  specialties: string[];
}

export interface Review {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  imageUrl?: string;
}

export interface PriceItem {
  service: string;
  price: string;
}

export interface PricingCategory {
  category: string;
  items: PriceItem[];
}