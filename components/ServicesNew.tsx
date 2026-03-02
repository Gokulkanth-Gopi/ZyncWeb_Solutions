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
    <div className="bg-[#4ade80] py-4 overflow-hidden flex whitespace-nowrap relative z-10 border-y border-black/10 dark:border-white/10">
      <motion.div 
        className="flex gap-12 items-center text-black font-bold text-xl uppercase tracking-wider"
        animate={{ x: direction === 'left' ? '-50%' : '50%' }}
        initial={{ x: 0 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span>Web Design</span>
            <span className="text-3xl">*</span>
            <span>App Design</span>
            <span className="text-3xl">*</span>
            <span>Dashboard</span>
            <span className="text-3xl">*</span>
            <span>Wireframe</span>
            <span className="text-3xl">*</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function ServicesNew() {
  return (
    <section className="bg-white dark:bg-black transition-colors duration-300 overflow-hidden pt-20">
      
      {/* Page Header */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Services</h1>
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <span>Home</span>
          <span className="text-[#4ade80] mx-1">/</span>
          <span className="text-[#4ade80]">Services</span>
        </div>
      </div>

      {/* Top Marquee */}
      <Marquee direction="left" />

      <div className="py-24 px-6 max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">My Specialization</span>
            <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Services I Provide
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#4ade80] transition-colors duration-300">
                 <service.icon className="w-6 h-6 text-gray-900 dark:text-white group-hover:text-black transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#4ade80] transition-colors">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Let&apos;s Create an Amazing<br />
            <span className="text-[#4ade80]">Project Together!</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
             {['Prototype', 'Mobile App Design', 'Website Design', 'Illustration', 'Brand Identity', 'Dashboard', 'UI Design', 'Product Design', 'Landing Page'].map((tag, i) => (
               <span 
                key={tag} 
                className={`px-6 py-2 rounded-full text-sm font-bold shadow-sm border transform transition-transform hover:scale-105 cursor-default
                  ${i % 2 === 0 ? 'bg-[#4ade80] text-black border-[#4ade80]' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700'}
                  ${i === 0 ? '-rotate-3' : i === 1 ? 'rotate-2' : i === 3 ? '-rotate-2' : 'rotate-0'}
                `}
               >
                 {tag}
               </span>
             ))}
          </div>

          <Link href="/contact" className="inline-block bg-[#4ade80] text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-[#4ade80]/20">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Marquee */}
      <Marquee direction="right" />

      {/* Contact Form Section */}
      <div className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Contact Me</span>
            <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let&apos;s Talk for Your <br />
            <span className="text-[#4ade80]">Next Projects</span>
          </h2>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name *</label>
              <input type="text" className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition-all" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
              <input type="email" className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition-all" placeholder="Enter your email" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
              <input type="text" className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition-all" placeholder="Enter your address" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Budget</label>
              <input type="text" className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition-all" placeholder="$1000 - $5000" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea rows={6} className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition-all resize-none" placeholder="Tell us about your project"></textarea>
          </div>
          <div className="text-center pt-4">
            <button type="submit" className="bg-[#4ade80] text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-[#3ecf72] transition-colors shadow-lg shadow-[#4ade80]/20 inline-flex items-center gap-2">
              Send Message <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

    </section>
  );
}
