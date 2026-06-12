"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/fintech/800/600',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
  },
  {
    title: 'Healthcare Portal',
    category: 'Enterprise System',
    image: 'https://picsum.photos/seed/healthcare/800/600',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Selected <br />
              <span className="text-emerald-400">Projects</span>
            </h2>
            <p className="text-white/60 text-lg">
              Explore our portfolio of successful digital transformations.
            </p>
          </div>
          <Link href="/projects" className="text-white border-b border-emerald-400 pb-1 hover:text-emerald-400 transition-colors">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-emerald-400 text-sm font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{project.category}</span>
                <h3 className="text-2xl font-bold text-white flex items-center justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                  <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-emerald-500 group-hover:text-black transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
