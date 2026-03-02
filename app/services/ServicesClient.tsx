'use client';

import { motion } from 'motion/react';
import { 
  Layout, Smartphone, Globe, PenTool, Box, 
  LayoutDashboard, User, Image as ImageIcon, Monitor, 
  ArrowRight, Star 
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences that delight your customers and drive conversions.',
  },
  {
    icon: Smartphone,
    title: 'Application Design',
    description: 'Designing mobile applications that are both beautiful and functional across all devices.',
  },
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Building responsive and modern websites that represent your brand and reach your audience.',
  },
  {
    icon: PenTool,
    title: 'UI Design',
    description: 'Crafting pixel-perfect user interfaces with attention to detail and modern aesthetics.',
  },
  {
    icon: Box,
    title: 'Design System',
    description: 'Developing comprehensive design systems to ensure consistency and scalability.',
  },
  {
    icon: LayoutDashboard,
    title: 'Wireframing',
    description: 'Creating structural blueprints to plan and organize content effectively.',
  },
  {
    icon: User,
    title: 'Brand Identity',
    description: 'Defining your brand\'s visual language, from logos to color palettes and typography.',
  },
  {
    icon: ImageIcon,
    title: 'Illustration',
    description: 'Custom illustrations to add personality and uniqueness to your digital products.',
  },
  {
    icon: Monitor,
    title: 'Web App Design',
    description: 'Designing complex web applications with a focus on usability and workflow efficiency.',
  },
];

const tags = [
  'Prototype', 'Mobile App Design', 'Website Design', 'Illustration', 
  'UX/UI Design', 'Brand Identity', 'Dashboard', 'Landing Page', 
  'UI Design', 'Product Design', 'Wireframe'
];

export default function ServicesClient() {
  return (
    <div className="bg-white dark:bg-black min-h-screen pt-24 pb-20 transition-colors duration-300 font-sans overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-sm text-gray-500 mb-4 font-medium">
          Home / <span className="text-[#ccff00]">Services</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Services</h1>
      </div>

      {/* Marquee Banner */}
      <div className="bg-[#ccff00] py-4 overflow-hidden transform -rotate-1 mb-20">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 text-black font-bold text-xl uppercase">
              <span>Web Design</span>
              <Star className="w-6 h-6 fill-black" />
              <span>App Design</span>
              <Star className="w-6 h-6 fill-black" />
              <span>Dashboard</span>
              <Star className="w-6 h-6 fill-black" />
              <span>Wireframe</span>
              <Star className="w-6 h-6 fill-black" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-24 relative">
          <span className="text-[6rem] md:text-[10rem] font-bold text-gray-50 dark:text-gray-900/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none leading-none opacity-50 dark:opacity-100">
            SERVICES
          </span>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-500">My Specialization</span>
              <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Services I <span className="text-gray-900 dark:text-white">Provide</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 hover:border-[#ccff00] dark:hover:border-[#ccff00] group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm relative overflow-hidden group-hover:bg-[#ccff00] transition-colors">
                   <service.icon className="w-6 h-6 text-gray-900 dark:text-white group-hover:text-black transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#ccff00] group-hover:text-[#b3e600] transition-colors">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center px-6 mb-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gray-900 dark:text-white">
          Let&apos;s Create an <span className="text-[#ccff00]">Amazing</span><br />
          Project Together!
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
          {tags.map((tag, i) => (
            <motion.span 
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-3 rounded-full text-sm font-bold cursor-default ${
                i % 2 === 0 
                  ? 'bg-[#ccff00] text-black' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
              }`}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <Link href="/contact" className="inline-block bg-[#ccff00] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b3e600] transition-colors shadow-lg shadow-[#ccff00]/20">
          Contact Us
        </Link>
      </div>

      {/* Bottom Marquee */}
      <div className="bg-[#ccff00] py-4 overflow-hidden transform rotate-1 mb-32">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 text-black font-bold text-xl uppercase">
              <span>Web Design</span>
              <Star className="w-6 h-6 fill-black" />
              <span>App Design</span>
              <Star className="w-6 h-6 fill-black" />
              <span>Dashboard</span>
              <Star className="w-6 h-6 fill-black" />
              <span>Wireframe</span>
              <Star className="w-6 h-6 fill-black" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full"></span>
             <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Contact Me</span>
             <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full"></span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Let&apos;s Talk for Your <span className="text-[#ccff00]">Next Projects</span></h2>
        </div>
        
        <form className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name *" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 outline-none focus:border-[#ccff00] transition-colors dark:text-white" />
              <input type="email" placeholder="Email *" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 outline-none focus:border-[#ccff00] transition-colors dark:text-white" />
           </div>
           <input type="text" placeholder="Subject" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 outline-none focus:border-[#ccff00] transition-colors dark:text-white" />
           <textarea placeholder="Message" rows={6} className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 outline-none focus:border-[#ccff00] transition-colors dark:text-white resize-none"></textarea>
           <button className="bg-[#ccff00] text-black px-10 py-4 rounded-full font-bold w-full hover:bg-[#b3e600] transition-colors shadow-lg shadow-[#ccff00]/20">
             Send Message
           </button>
        </form>
      </div>

    </div>
  );
}
