'use client';

import { motion } from 'motion/react';
import { Code, Database, Globe, Layers, Smartphone, Zap } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance web applications built with modern frameworks.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
  },
  {
    icon: Database,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture and DevOps automation.',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'User-centric design that drives engagement and conversion.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions for complex business needs.',
  },
  {
    icon: Zap,
    title: 'Digital Strategy',
    description: 'Data-driven insights to guide your digital transformation.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <br />
              <span className="text-emerald-400">Digital Services</span>
            </h2>
            <p className="text-white/60 text-lg">
              We provide end-to-end digital solutions to help your business thrive in the modern economy.
            </p>
          </div>
          <Link href="/services" className="text-white border-b border-emerald-400 pb-1 hover:text-emerald-400 transition-colors">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
