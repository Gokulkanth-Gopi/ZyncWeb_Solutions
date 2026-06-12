import Contact from './ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - ZyncWeb Solutions',
  description: 'Contact ZyncWeb Solutions for project inquiries, partnerships, and support.',
};

export default function ContactPage() {
  return <Contact />;
}
