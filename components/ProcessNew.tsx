'use client';

import { motion } from 'motion/react';

const steps = [
  { id: '01', title: 'Define', desc: 'We start by defining the scope and objectives of your project.', rotate: 'rotate-[-3deg]', top: '0', right: '10%' },
  { id: '02', title: 'Design', desc: 'Our team creates visually stunning and functional designs.', rotate: 'rotate-[4deg]', top: '180px', left: '10%' },
  { id: '03', title: 'Build', desc: 'We bring the designs to life with clean, efficient code.', rotate: 'rotate-[-2deg]', top: '360px', right: '10%' },
  { id: '04', title: 'Launch', desc: 'We ensure a smooth launch and provide ongoing support.', rotate: 'rotate-[2deg]', top: '540px', left: '10%' },
];

export default function ProcessNew() {
  return (
    <section className="py-32 px-6 bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-8">
            Our Studio<br />
            <span className="text-gray-400">Process.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="text-7xl md:text-8xl font-black text-gray-200 dark:text-[#2a2627] mb-8 group-hover:text-[#3fbfb8] transition-colors duration-500">
                {step.id}
              </div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 group-hover:translate-x-2 transition-transform">
                {step.title}
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
