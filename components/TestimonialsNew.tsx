'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function TestimonialsNew() {
  return (
    <section className="py-32 px-6 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Image Grid */}
        <div className="mb-20 flex flex-wrap justify-center gap-4 max-w-5xl">
          {[...Array(7)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-gray-100 dark:bg-gray-800 ${i % 2 === 0 ? 'mt-0' : 'mt-8 md:mt-12'}`}
            >
              <Image 
                src={`https://picsum.photos/seed/face${i}/200/200`} 
                alt="Leader" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-3xl">
          <span className="inline-block px-4 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-semibold mb-8 text-gray-600 dark:text-gray-400">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 dark:text-white">
            Trusted by leaders
          </h2>
          <h2 className="text-4xl md:text-6xl font-black text-gray-300 dark:text-gray-700 mb-8">
            from various industries
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-12">
            Learn why professionals trust our solutions to complete their customer journeys.
          </p>
          <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Read Success Stories <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
