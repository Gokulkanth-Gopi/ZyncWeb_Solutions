'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';
import { useRef } from 'react';

const tags = [
  { text: '#Innovation', rotate: -6, top: '15%', left: '10%' },
  { text: '#Scalability', rotate: 8, top: '20%', right: '15%' },
  { text: '#Security', rotate: -4, bottom: '25%', left: '15%' },
  { text: '#Performance', rotate: 5, bottom: '30%', right: '10%' },
  { text: '#Cloud', rotate: -8, top: '50%', left: '5%' },
  { text: '#AI', rotate: 6, top: '45%', right: '5%' },
];

export default function HeroNew() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-white dark:bg-black transition-colors duration-300">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10 dark:opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-technology-network-background-2738-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/90 dark:from-gray-950/90 dark:to-black/90" />
      </div>

      {/* Floating Tags */}
      {tags.map((tag, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="absolute hidden md:block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm text-sm font-semibold text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 z-10"
          style={{
            top: tag.top,
            left: tag.left,
            right: tag.right,
            bottom: tag.bottom,
            rotate: `${tag.rotate}deg`,
          }}
        >
          {tag.text}
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
               <div className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                 <div className="w-4 h-4 bg-gray-400 dark:bg-gray-300 rounded-full" />
               </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 text-gray-900 dark:text-white drop-shadow-sm">
            ZyncWeb<br />Solutions
          </h1>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 font-medium">
            Engineering intelligent digital infrastructure for the modern enterprise. Scalable, secure, and future-proof.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Get Started <span className="text-xl">→</span>
            </button>
            <button className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="w-6 h-6 bg-gray-100 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 fill-gray-900 dark:fill-white" />
              </div>
              Watch Video
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Features */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 max-w-6xl mx-auto px-6 pb-20 w-full">
        <div className="text-left">
          <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Why choose ZyncWeb?</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            We are chosen by industry leaders for our technical excellence and commitment to innovation.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-400/20 rounded-full blur-xl" />
          <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Full Development</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">End-to-end solutions from architecture to deployment.</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 text-blue-600 flex items-center justify-center">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
               <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
             </svg>
          </div>
          <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Client Success</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Dedicated to driving measurable growth for our partners.</p>
        </div>
      </div>
    </section>
  );
}
