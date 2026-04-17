'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Share2, Calendar, User, Tag } from 'lucide-react';
import { projects } from '@/lib/projects-data';
import { useRef } from 'react';

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const containerRef = useRef(null);

  if (!project) {
    notFound();
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end pb-32 px-6 overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
        </motion.div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-[#3fbfb8]/10 border border-[#3fbfb8]/20 text-[#3fbfb8] text-xs font-black uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-12">
              <div>
                <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <User className="w-3 h-3" /> Client
                </p>
                <p className="text-white text-lg font-bold">{project.client}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Calendar className="w-3 h-3" /> Date
                </p>
                <p className="text-white text-lg font-bold">{project.date}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Tag className="w-3 h-3" /> Service
                </p>
                <p className="text-white text-lg font-bold">{project.category}</p>
              </div>
              <div className="flex justify-end items-end">
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-48 px-6 bg-[#eaeff3] dark:bg-[#231f20]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight mb-12">
                A mission to redefine how <span className="text-gray-400">digital intelligence</span> shapes the market.
              </h2>
              <p className="text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-16">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#3fbfb8] mb-6">The Challenge</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#3fbfb8] mb-6">The Solution</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-40 bg-white dark:bg-white/5 rounded-[2.5rem] p-12 border border-gray-100 dark:border-white/10">
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-8">Key Outcomes</h4>
                <ul className="space-y-8">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-[#3fbfb8]/10 flex items-center justify-center shrink-0 mt-1">
                        <ArrowRight className="w-3 h-3 text-[#3fbfb8]" />
                      </div>
                      <span className="text-lg font-bold text-gray-800 dark:text-gray-200 leading-tight">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="pb-48 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {project.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] md:aspect-[21/9] rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-gray-900"
            >
              <Image 
                src={img} 
                alt={`${project.title} Visual ${i + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="py-48 px-6 bg-[#231f20] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-12">Next Project</p>
            <Link 
              href={`/work/${projects[(projects.findIndex(p => p.slug === slug) + 1) % projects.length].slug}`}
              className="group block"
            >
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter transition-all duration-700 group-hover:text-[#3fbfb8]">
                {projects[(projects.findIndex(p => p.slug === slug) + 1) % projects.length].title}
              </h2>
              <div className="inline-flex items-center gap-4 text-2xl font-black mt-12 group-hover:gap-8 transition-all">
                View Evolution <ArrowRight className="w-8 h-8 text-[#3fbfb8]" />
              </div>
            </Link>
        </div>
        
        {/* Background Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#255ba9] rounded-full blur-[160px]" />
        </div>
      </section>

    </main>
  );
}
