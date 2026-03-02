'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/fintech/800/600',
    metrics: ['+45% User Engagement', '2ms Latency', '99.9% Uptime'],
  },
  {
    title: 'E-Commerce Platform',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    metrics: ['200% Sales Growth', '50k+ Daily Users', '4.9 App Rating'],
  },
  {
    title: 'Healthcare Portal',
    category: 'Enterprise System',
    image: 'https://picsum.photos/seed/healthcare/800/600',
    metrics: ['HIPAA Compliant', '30% Cost Reduction', 'Secure Data'],
  },
  {
    title: 'Smart City IoT',
    category: 'IoT Solution',
    image: 'https://picsum.photos/seed/iot/800/600',
    metrics: ['10k+ Sensors', 'Real-time Analytics', 'Energy Efficient'],
  },
  {
    title: 'EduTech Platform',
    category: 'Learning Management',
    image: 'https://picsum.photos/seed/edutech/800/600',
    metrics: ['1M+ Students', 'Interactive AI', 'Global Reach'],
  },
  {
    title: 'Logistics Tracker',
    category: 'Supply Chain',
    image: 'https://picsum.photos/seed/logistics/800/600',
    metrics: ['Real-time Tracking', 'Route Optimization', 'Cost Saving'],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Featured <span className="text-emerald-400">Projects</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Showcasing our best work and the impact we&apos;ve delivered for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-emerald-400 text-sm font-medium mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((metric, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
