export type BakeryCategory = 'all' | 'pastries' | 'viennoiserie' | 'cakes' | 'cookies' | 'sourdough';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  category: BakeryCategory;
  available: boolean;
  batchNumber: string;
  bakedAt: string;
  image: string;
  secondaryImage?: string;
  badge?: string;
  badgeColor?: 'cherry' | 'butter' | 'pistachio' | 'chocolate' | 'burgundy';
  accentColor: string;
  bgTint: string;
  ingredients: string[];
  allergens: string[];
  bakerNote: string;
  butterPercentage?: string;
  pairingRecommendation: string;
  flavorProfile: {
    sweetness: number;
    flakiness: number;
    richness: number;
    crunch: number;
  };
}

export interface BoxItem {
  product: Product;
  quantity: number;
}

export interface RecipeStep {
  stepNumber: string;
  title: string;
  duration: string;
  temperature?: string;
  description: string;
  bakerSecret: string;
  ingredients: { name: string; amount: string }[];
  image: string;
}

export interface CustomerArtifact {
  id: string;
  type: 'napkin' | 'receipt' | 'polaroid' | 'text' | 'sticker';
  author: string;
  date: string;
  content: string;
  subtext?: string;
  itemOrdered?: string;
  rating?: string;
  tiltAngle: number;
  bgStyle: string;
  badge?: string;
  photoUrl?: string;
}

export interface SocialPost {
  id: string;
  imageUrl: string;
  caption: string;
  author: string;
  likes: string;
  tag: string;
  aspect: 'square' | 'tall' | 'wide';
  tilt: number;
  tapePosition?: 'top' | 'corner' | 'dual';
}

export interface StoreLocation {
  name: string;
  address: string;
  neighborhood: string;
  hours: {
    days: string;
    open: string;
    close: string;
  }[];
  phone: string;
  email: string;
  currentStatus: 'open' | 'baking' | 'closed';
  pickupWindow: string;
  features: string[];
}
