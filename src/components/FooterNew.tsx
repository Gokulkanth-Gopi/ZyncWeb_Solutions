"use client";

import { ArrowRight, Star, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterNew() {
  return (
    <footer className="bg-[#eaeff3] dark:bg-[#231f20] text-gray-900 dark:text-white py-32 px-6 border-t border-gray-100 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          <div className="max-w-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16">
                <Image 
                  src="/assets/Main%20logoDP.png" 
                  alt="ZYNC Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
              Crafting bold brands and immersive digital experiences that help modern businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Studio</h4>
              <ul className="space-y-4 text-lg font-bold">
                <li><Link href="/about" className="hover:text-[#3fbfb8] transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-[#3fbfb8] transition-colors">Services</Link></li>
                <li><Link href="/work" className="hover:text-[#3fbfb8] transition-colors">Work</Link></li>
                <li><Link href="/contact" className="hover:text-[#3fbfb8] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Social</h4>
              <ul className="space-y-4 text-lg font-bold">
                <li><a href="#" className="hover:text-[#3fbfb8] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#3fbfb8] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#3fbfb8] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#3fbfb8] transition-colors">Facebook</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">Contact</h4>
              <ul className="space-y-4 text-lg font-bold">
                <li><a href="mailto:hello@zyncweb.com" className="hover:text-[#3fbfb8] transition-colors">hello@zyncweb.com</a></li>
                <li><a href="tel:+15551234567" className="hover:text-[#3fbfb8] transition-colors">+1 (555) 123-4567</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 dark:border-white/10 gap-8">
          <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest text-xs">
            © 2026 ZYNCWEB SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest text-xs">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
