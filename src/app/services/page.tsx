import type { Metadata } from 'next';
import ServicesNew from '../../components/ServicesNew';

export const metadata: Metadata = {
  title: 'Services - ZyncWeb Solutions',
  description: 'Explore ZyncWeb Solutions services, including UI/UX, web development, branding, and digital product design.',
};

export default function ServicesPage() {
  return <ServicesNew />;
}