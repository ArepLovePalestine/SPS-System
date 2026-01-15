
import { LucideIcon } from 'lucide-react';

export type Language = 'EN' | 'BM';

export interface NavItem {
  label: {
    EN: string;
    BM: string;
  };
  href: string;
  children?: NavItem[];
}

export interface SlideData {
  url: string;
  title: string;
  subtitle: string;
}

export interface AcademicBlock {
  id: string;
  image: string;
  title: { EN: string; BM: string };
  description: { EN: string; BM: string };
  cta: { EN: string; BM: string };
  layout: 'left' | 'right';
}

export interface AdmissionStep {
  number: string;
  icon: LucideIcon;
  title: { EN: string; BM: string };
  description: { EN: string; BM: string };
  imageUrl?: string;
}

export interface FeatureCard {
  id: string;
  icon: LucideIcon;
  title: { EN: string; BM: string };
  description: { EN: string; BM: string };
}

export interface Testimonial {
  name: string;
  location: string;
  degree: string;
  batch: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}
