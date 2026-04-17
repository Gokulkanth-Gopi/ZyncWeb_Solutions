'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function AboutNew() {
  return (
    <section className="py-32 px-6 bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-12">
              Our Studio<br />
              <span className="text-gray-400">Philosophy.</span>
            </h2>
            <p className="text-2xl text-gray-500 dark:text-gray-400 leading-relaxed mb-16 font-medium">
              We&apos;re not just developers; we&apos;re architects of digital impact. At ZyncWeb, we craft bold brands and immersive experiences that help modern businesses grow.
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <span className="text-4xl font-black text-[#3fbfb8] mb-2 block">10+</span>
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">Years of Excellence</p>
              </div>
              <div>
                <span className="text-4xl font-black text-[#3fbfb8] mb-2 block">150+</span>
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visuals */}
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-gray-900 group">
              <Image 
                src="https://picsum.photos/seed/studio/800/1000" 
                alt="Our Studio" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                <p className="text-white text-xl font-bold">Crafting the future of digital experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
