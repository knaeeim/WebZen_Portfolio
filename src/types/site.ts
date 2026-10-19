export type SectionType =
  | 'hero'
  | 'stats'
  | 'services'
  | 'projects'
  | 'process'
  | 'pricing'
  | 'techstack'
  | 'calculator'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'custom-banner'
  | 'custom-content';

export interface HeroContent {
  badge: string;
  badgeHighlight: string;
  titlePart1: string;
  titleGradient: string;
  titlePart2: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  stats: { label: string; value: string; suffix?: string }[];
  highlightTags: string[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tags: string[];
  deliverables: string[];
  featured?: boolean;
}

export interface ProjectCategory {
  id: string;
  name: string;
  nameBn?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Applications' | 'Mobile Apps' | 'Enterprise Cloud' | 'AI & Automation' | 'FinTech' | 'HealthTech' | string;
  description: string;
  image: string;
  client: string;
  country: string;
  liveUrl?: string;
  tags: string[];
  metrics: string;
  featured?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceBdt: string;
  priceUsd: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  location: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CustomContentItem {
  heading: string;
  subheading: string;
  body: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl?: string;
  layout: 'left' | 'right' | 'center';
}

export interface SectionItem {
  id: string;
  type: SectionType;
  title: string;
  subtitle: string;
  enabled: boolean;
  order: number;
  customContent?: CustomContentItem;
}

export interface ThemeConfig {
  preset: 'cyber-zen' | 'emerald-matrix' | 'solar-flare' | 'obsidian-glow' | 'aurora-violet';
  accentColor: string;
  glowIntensity: 'subtle' | 'medium' | 'high';
  enableParticles: boolean;
  borderRadius: 'sm' | 'md' | 'lg' | 'full';
  darkNav: boolean;
}

export interface SiteContact {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  locationCity: string;
  officeHours: string;
  googleMapEmbedUrl: string;
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
    twitter: string;
    youtube?: string;
  };
}

export interface SecurityConfig {
  adminPassword?: string;
}

export interface FooterLinkItem {
  id: string;
  label: string;
  labelBn?: string;
  url: string;
}

export interface FooterConfig {
  bio?: string;
  bioBn?: string;
  statusText?: string;
  statusTextBn?: string;
  locationBadge?: string;
  navLinksTitle?: string;
  navLinksTitleBn?: string;
  navLinks?: FooterLinkItem[];
  solutionsTitle?: string;
  solutionsTitleBn?: string;
  solutionsLinks?: FooterLinkItem[];
  helpTitle?: string;
  helpTitleBn?: string;
  helpDesc?: string;
  helpDescBn?: string;
  helpButtonText?: string;
  helpButtonTextBn?: string;
  copyrightText?: string;
  copyrightTextBn?: string;
  bottomLocationText?: string;
}

export interface SeoConfig {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
}

export interface SiteData {
  companyName: string;
  tagline: string;
  shortBio: string;
  hero: HeroContent;
  stats: StatItem[];
  services: ServiceItem[];
  projects: ProjectItem[];
  projectCategories?: ProjectCategory[];
  process: ProcessStep[];
  pricing: PricingPlan[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  contact: SiteContact;
  sections: SectionItem[];
  theme: ThemeConfig;
  security?: SecurityConfig;
  footer?: FooterConfig;
  seo?: SeoConfig;
}
