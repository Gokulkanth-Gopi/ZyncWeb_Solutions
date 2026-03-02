import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import FooterNew from '@/components/FooterNew';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'ZyncWeb Solutions | Intelligent Digital Infrastructure',
  description: 'Engineering scalable enterprise solutions for the modern web.',
};

import FloatingActions from '@/components/FloatingActions';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white antialiased selection:bg-blue-500/30 transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <FooterNew />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
