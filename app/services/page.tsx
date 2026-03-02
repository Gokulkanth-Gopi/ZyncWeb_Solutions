import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Our Services - ZyncWeb Solutions',
  description: 'Explore our comprehensive digital services including Web Development, Mobile Solutions, Cloud Infrastructure, and UI/UX Design.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
