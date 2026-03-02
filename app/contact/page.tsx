import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us - ZyncWeb Solutions',
  description: 'Get in touch with ZyncWeb Solutions for your next project. We are ready to help you achieve your digital goals.',
};

export default function ContactPage() {
  return <ContactClient />;
}
