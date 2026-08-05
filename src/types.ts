export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

export interface VisaRequirement {
  status: 'visa-free' | 'evisa' | 'voa' | 'visa-required' | 'schengen';
  badgeText: string;
  badgeColor: string;
  maxDays: number;
  description: string;
  schengenRule?: boolean;
  notes?: string[];
}

export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
  colSpan?: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  country: string;
  flag: string;
  quote: string;
  rating: number;
}
