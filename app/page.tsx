import type { Metadata } from 'next';
import HeroNew from '@/components/HeroNew';
import AboutNew from '@/components/AboutNew';
import ServicesNew from '@/components/ServicesNew';
import ProcessNew from '@/components/ProcessNew';
import TestimonialsNew from '@/components/TestimonialsNew';

export const metadata: Metadata = {
  title: 'ZyncWeb Solutions | Intelligent Digital Infrastructure',
  description: 'ZyncWeb Solutions engineers scalable, secure, and future-proof digital infrastructure for modern enterprises. Partner with us for innovation.',
};

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <HeroNew />
      <AboutNew />
      <ServicesNew />
      <ProcessNew />
      <TestimonialsNew />
    </div>
  );
}
