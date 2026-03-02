'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Process', path: '/process' },
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
        <div className={`backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800' 
            : 'bg-white/50 dark:bg-gray-900/50 border border-transparent'
        }`}>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">ZW</div>
            <span className="font-bold text-gray-800 dark:text-white">ZyncWeb</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-500 dark:hover:text-blue-400 ${
                  pathname === item.path 
                    ? 'bg-white dark:bg-gray-800 px-4 py-1.5 rounded-full shadow-sm text-gray-900 dark:text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Contact Button */}
            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition">
              <span className="w-2 h-2 bg-blue-400 rotate-45"></span> Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="text-gray-900 dark:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
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
            className="absolute top-20 left-6 right-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500"
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full text-sm font-medium w-full mt-2">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
