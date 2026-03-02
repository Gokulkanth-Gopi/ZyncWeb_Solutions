import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us - ZyncWeb Solutions',
  description: 'Learn about ZyncWeb Solutions, our mission, vision, and the team driving digital transformation for enterprises worldwide.',
};

export default function AboutPage() {
  return <AboutClient />;
}
