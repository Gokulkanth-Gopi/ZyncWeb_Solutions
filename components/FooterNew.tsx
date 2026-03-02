'use client';

import { ArrowRight, Star, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function FooterNew() {
  return (
    <footer className="bg-[#121212] text-white p-4 md:p-10">
      <div className="max-w-[1400px] mx-auto bg-[#1a1a1a] rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
        {/* Background Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 800 400">
          <path d="M0,200 Q200,50 400,200 T800,200" fill="none" stroke="white" strokeWidth="2" />
          <path d="M0,250 Q200,100 400,250 T800,250" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        <div className="relative z-10">
          {/* Top Section */}
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="w-24 h-24 mb-6 text-[#ccff00]">
              <Star className="w-full h-full fill-current" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-2">ZyncWeb</h2>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Solutions</h2>
            <p className="text-gray-400 italic text-lg">Engineering the future.</p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-800 pt-16">
            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">100 Tech Plaza,</p>
              <p className="text-gray-400 text-sm mb-2">San Francisco, CA</p>
              <p className="text-gray-400 text-sm mb-2">+1 (555) 123-4567</p>
              <a href="mailto:hello@zyncweb.com" className="text-gray-400 text-sm underline hover:text-white">
                hello@zyncweb.com
              </a>
              <div className="mt-8 flex gap-4">
                <div className="bg-gray-800 px-3 py-1 rounded text-[10px] font-bold text-[#ccff00] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ccff00]"></span> 
                  4.9/5 Client Score
                </div>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-xl font-bold mb-6">Connect</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all group">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all group">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all group">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all group">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <button className="bg-[#ccff00] text-black px-6 py-4 rounded-full font-bold flex items-center justify-between hover:opacity-90 transition">
                Start Project 
                <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
              <button className="bg-[#0b4d32] text-white px-6 py-4 rounded-full font-bold flex items-center justify-between hover:bg-opacity-90 transition">
                Join Team
                <div className="bg-[#ccff00] text-black w-6 h-6 rounded-full flex items-center justify-center text-[10px]">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3 text-sm text-gray-400">
                  <a href="#" className="block hover:text-white">About</a>
                  <a href="#" className="block hover:text-white">Services</a>
                  <a href="#" className="block hover:text-white">Careers</a>
                </div>
                <div className="space-y-3 text-sm text-gray-400">
                  <a href="#" className="block hover:text-white">Blog</a>
                  <a href="#" className="block hover:text-white">Contact</a>
                  <a href="#" className="block hover:text-white">Privacy</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 flex justify-end">
            <div className="bg-[#fcf8e3] text-black px-6 py-2 rounded-lg text-xs font-medium flex gap-6">
              <a href="#">Cookies policy</a>
              <a href="#">Privacy policy</a>
              <span>©2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
