"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowRight, Star } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimeBackground from './AnimeBackground';

const clientLogos = [
  { name: 'FutureCorp', icon: '⚡' },
  { name: 'InnovateX', icon: '💠' },
  { name: 'GlobalSystems', icon: '🌐' },
  { name: 'TechFlow', icon: '🌊' },
  { name: 'MindSync', icon: '🧠' },
];

export default function HeroNew() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center pt-32 md:pt-48 pb-20 overflow-hidden bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300">

      {/* Scalient-style Grid Background */}
      <div className="absolute inset-0 z-0">
        <AnimeBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#255ba9]/10 dark:bg-[#255ba9]/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center max-w-5xl px-6 w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-black uppercase tracking-widest text-[#3fbfb8] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3fbfb8] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3fbfb8]"></span>
          </span>
          Next Generation Studio
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.8] mb-10"
        >
          Fueling the<br />
          <span className="text-gray-400">Next Era.</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-14 font-medium leading-relaxed"
        >
          At Zync, we believe growth is about connecting bold ideas with flawless execution. We help modern brands dominate the digital landscape with purpose and precision.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <button className="bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center gap-2 group shadow-2xl shadow-blue-500/20" aria-label="Get started with Zync">
            Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link href="/work" className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-colors flex items-center gap-2" aria-label="View our case studies">
            View Work
          </Link>
        </motion.div>

        {/* Featured Logos Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {clientLogos.map((client) => (
            <div key={client.name} className="flex items-center gap-2 font-black text-xl tracking-tighter text-gray-900 dark:text-white">
              <span className="text-2xl">{client.icon}</span>
              {client.name}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Main Visual Mockup */}
      <motion.div 
        style={{ y, scale, willChange: 'transform, opacity' }}
        className="relative z-10 w-full max-w-7xl px-6 mt-32"
      >
        <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#231f20] shadow-2xl group">
          <Image 
            src="https://picsum.photos/seed/agency/1920/1080" 
            alt="Studio Showcase" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-24 h-24 bg-[#3fbfb8] rounded-full flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform">
              <Play className="w-8 h-8 fill-white" />
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
