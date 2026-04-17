'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Image from 'next/image';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-8 left-0 right-0 z-50 px-6 transition-all duration-300`}
    >
      <div className="max-w-5xl mx-auto">
        <div className={`backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-[#231f20]/90 border border-gray-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-[#3fbfb8]/5' 
            : 'bg-white/50 dark:bg-[#231f20]/50 border border-transparent'
        }`}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 group-hover:rotate-12 transition-transform duration-500">
              <Image 
                src="/logo.png" 
                alt="ZYNC Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-xs font-black uppercase tracking-widest transition-all hover:text-[#3fbfb8] ${
                  pathname === item.path 
                    ? 'text-[#3fbfb8]' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#3fbfb8] dark:hover:bg-[#3fbfb8] hover:text-white transition-all text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Contact Button */}
            <button className="bg-black dark:bg-[#255ba9] text-white dark:text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Start Project
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="text-gray-900 dark:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 bg-[#eaeff3] dark:bg-[#231f20] border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-[#3fbfb8]"
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-[#231f20] dark:bg-[#3fbfb8] text-white dark:text-black px-6 py-3 rounded-full text-sm font-medium w-full mt-2">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
