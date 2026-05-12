export type Pricing = "Free" | "Freemium" | "Paid";

export interface Category {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  pricing: Pricing;
  rating: number;
  reviews: number;
  featured: boolean;
  trending: boolean;
  tags: string[];
  initials: string;
  accent: string;
}
