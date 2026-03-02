'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function AboutNew() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
              About us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              Meet ZyncWeb: Your <br /> Digital Partners
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-12">
              We&apos;re not just developers; we&apos;re architects, strategists, and your brand&apos;s technical backbone. At ZyncWeb, we live and breathe code, from robust backends to seamless user interfaces. Think of us as an extension of your team.
            </p>

            {/* Stats Card */}
            <div className="bg-[#121212] dark:bg-gray-900 rounded-[2rem] p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-6xl font-bold mb-2 block">40%</span>
                <p className="text-gray-400 text-lg mb-8">Increased operational efficiency</p>
                <div className="flex flex-wrap gap-2">
                  {['Cloud', 'DevOps', 'Security', 'Scale', 'AI', 'Analytics'].map((tag) => (
                    <span key={tag} className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Decorative Curves */}
              <svg className="absolute bottom-0 right-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 200">
                <path d="M0,100 Q100,20 200,100 T400,100" fill="none" stroke="white" strokeWidth="0.5" />
                <path d="M0,110 Q100,30 200,110 T400,110" fill="none" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-8 items-end">
              <div className="rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-square relative">
                <Image 
                  src="https://picsum.photos/seed/team1/400/400" 
                  alt="Team member" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex justify-end">
                <div className="w-20 h-20 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center bg-white dark:bg-black">
                  <span className="text-3xl">☀️</span>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-800 h-64 relative">
              <Image 
                src="https://picsum.photos/seed/meeting/800/600" 
                alt="Team meeting" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
