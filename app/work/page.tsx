'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/projects-data';

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-40 pb-32 bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-8">
              Selected<br />
              <span className="text-gray-400">Works.</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl font-medium leading-relaxed">
              We focus on building impact-driven products that define the next generation of digital excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/work/${project.slug}`} className="block relative">
                <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 shadow-2xl transition-all duration-700 group-hover:scale-[0.98]">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 bg-[#3fbfb8] rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowUpRight className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#3fbfb8] mb-2 block">
                        {project.category}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter shadow-2xl">
                        {project.title}
                      </h2>
                    </div>
                    <div className="hidden md:block">
                      <span className="text-white/60 font-medium">{project.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grid Background Effect */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </main>
  );
}
