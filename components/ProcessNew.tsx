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
    <section className="py-32 px-6 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center mb-32">
        <span className="inline-block px-4 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-semibold mb-6 text-gray-600 dark:text-gray-400">
          How we work
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Let us show you how we drive your brand to new heights
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          A streamlined process designed for efficiency and excellence.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative h-[800px] hidden md:block">
        {/* Connecting Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40" viewBox="0 0 1000 800">
          <path 
            d="M700,100 Q500,250 300,280 T300,460 T700,640" 
            fill="none" 
            stroke="currentColor" 
            className="text-black dark:text-white"
            strokeWidth="2" 
            strokeDasharray="8 8" 
          />
        </svg>

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`absolute w-80 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800 ${step.rotate}`}
            style={{ 
              top: step.top, 
              left: step.left, 
              right: step.right 
            }}
          >
            <div className="w-2 h-2 bg-black dark:bg-white rounded-full mb-4" />
            <span className="text-sm font-bold opacity-30 text-black dark:text-white">{step.id}</span>
            <h3 className="text-2xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">{step.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}

        <div className="absolute bottom-10 right-20 font-bold italic text-gray-400 rotate-12">
          Ready to be delivered!
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-8">
        {steps.map((step) => (
          <div key={step.id} className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
             <div className="w-2 h-2 bg-black dark:bg-white rounded-full mb-4" />
             <span className="text-sm font-bold opacity-30 text-black dark:text-white">{step.id}</span>
             <h3 className="text-2xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">{step.title}</h3>
             <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
