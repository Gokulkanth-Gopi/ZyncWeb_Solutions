import type { Metadata } from 'next';
import ProcessNew from '@/components/ProcessNew';

export const metadata: Metadata = {
  title: 'Our Process - ZyncWeb Solutions',
  description: 'Discover our proven methodology for delivering successful digital products, from definition to launch.',
};

export default function ProcessPage() {
  return <ProcessNew />;
}
