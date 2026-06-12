"use client";

import { motion } from 'motion/react';

const timeline = [
  { year: '2014', title: 'Founded', description: 'ZyncWeb Solutions was established with a vision to revolutionize digital infrastructure.' },
  { year: '2016', title: 'Global Expansion', description: 'Opened offices in London and Singapore to serve international clients.' },
  { year: '2019', title: 'Enterprise Focus', description: 'Shifted focus to large-scale enterprise solutions and cloud architecture.' },
  { year: '2022', title: 'Innovation Award', description: 'Recognized as "Top Digital Innovator" by TechReview Global.' },
  { year: '2025', title: 'AI Integration', description: 'Launched dedicated AI division to integrate machine learning into all projects.' },
];

export default function About() {
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
            About <span className="text-emerald-400">ZyncWeb</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            We are a team of visionary engineers, designers, and strategists dedicated to building the digital infrastructure of tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To empower businesses with intelligent, scalable, and secure digital solutions that drive sustainable growth and competitive advantage.
            </p>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To be the global leader in engineering the next generation of digital infrastructure, setting new standards for performance and innovation.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-emerald-400 font-mono text-sm mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 max-w-xl">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
