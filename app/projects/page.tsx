import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Featured Projects - ZyncWeb Solutions',
  description: 'Browse our portfolio of successful projects across FinTech, E-Commerce, Healthcare, and more.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
