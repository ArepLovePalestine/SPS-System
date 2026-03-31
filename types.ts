
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

export interface Programme {
  id: string;
  title: { EN: string; BM: string };
  description: { EN: string; BM: string };
  image: string;
  mode: { EN: string; BM: string };
  duration: { EN: string; BM: string };
  faculty: string; // Faculty ID
  category: 'taught' | 'research' | 'phd' | 'engd';
  link?: string;
}

export interface FacultyDetail {
  id: string;
  shortName: string;
  fullName: { EN: string; BM: string };
  image: string;
  bannerImage: string;
}

export interface MQADocument {
  id: string;
  title: { EN: string; BM: string };
  edition: string;
  year: string;
  category: 'MQF' | 'Engineering' | 'Computing' | 'Business';
  tag?: 'New' | 'Updated' | 'Popular';
  fileUrl: string;
  fileSize?: string;
  publishDate?: string;
}
