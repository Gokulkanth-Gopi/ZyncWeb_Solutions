'use client';

import { motion } from 'motion/react';
import { ArrowRight, Layout, Smartphone, Monitor, PenTool, Figma, Code, Palette, Globe, Database, Send } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
  {
    icon: Smartphone,
    title: 'Application Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
  {
    icon: Figma,
    title: 'UI Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
  {
    icon: PenTool,
    title: 'Design System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
  {
    icon: Layout,
    title: 'Wireframing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
  {
    icon: PenTool,
    title: 'Illustration',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
  {
    icon: Globe,
    title: 'Web App Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ..',
  },
];

const Marquee = ({ direction = 'left' }: { direction?: 'left' | 'right' }) => {
  return (
    <div className="bg-[#231f20] py-6 overflow-hidden flex whitespace-nowrap relative z-10 border-y border-white/10">
      <motion.div 
        className="flex gap-16 items-center text-[#3fbfb8] font-black text-2xl uppercase tracking-tighter"
        animate={{ x: direction === 'left' ? '-50%' : '50%' }}
        initial={{ x: 0 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center gap-16">
            <span>Bold Brands</span>
            <span className="text-4xl opacity-30">/</span>
            <span>Digital Impact</span>
            <span className="text-4xl opacity-30">/</span>
            <span>Strategic Design</span>
            <span className="text-4xl opacity-30">/</span>
            <span>Modern Growth</span>
            <span className="text-4xl opacity-30">/</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ServicesNew() {
  return (
    <section className="bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300 overflow-hidden">
      
      {/* Top Marquee */}
      <Marquee direction="left" />

      <div className="py-32 px-6 max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-8">
            Our Studio<br />
            <span className="text-gray-400">Expertise.</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl font-medium">
            We craft immersive digital experiences that help modern businesses grow with impact.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-2 md:row-span-2 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] p-12 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                <Layout className="w-8 h-8 text-[#255ba9]" />
              </div>
              <h3 className="text-4xl font-black mb-6 text-gray-900 dark:text-white">UI/UX Design</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-sm">
                Creating intuitive and visually stunning interfaces that prioritize user experience and brand identity.
              </p>
            </div>
            <div className="relative z-10 mt-12">
              <Link href="/services" className="inline-flex items-center gap-3 text-lg font-bold text-gray-900 dark:text-white group-hover:gap-5 transition-all">
                View Details <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />
          </motion.div>

          {/* Medium Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-2 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Web Development</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                  Building scalable and high-performance web applications using modern technologies.
                </p>
              </div>
              <div className="w-14 h-14 bg-[#eaeff3] dark:bg-white/10 rounded-2xl flex items-center justify-center shadow-lg">
                <Code className="w-7 h-7 text-[#3fbfb8]" />
              </div>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 font-bold text-gray-900 dark:text-white mt-8">
              Explore <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between group"
          >
            <div className="w-12 h-12 bg-[#eaeff3] dark:bg-white/10 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <Smartphone className="w-6 h-6 text-[#3fbfb8]" />
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 text-gray-900 dark:text-white">Mobile Apps</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Crafting seamless mobile experiences.
              </p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] p-10 flex flex-col justify-between group"
          >
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <Palette className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-xl font-black mb-2 text-gray-900 dark:text-white">Branding</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Defining bold visual identities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 px-6 bg-[#231f20] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.8]">
            Let&apos;s build<br />
            <span className="text-[#3fbfb8]">Something Bold.</span>
          </h2>
          <Link href="/contact" className="inline-block bg-[#255ba9] text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform">
            Get in Touch
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#255ba9]/30 rounded-full blur-[120px]" />
        </div>
      </div>

      {/* Bottom Marquee */}
      <Marquee direction="right" />
    </section>
  );
}
