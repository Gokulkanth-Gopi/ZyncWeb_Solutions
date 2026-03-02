'use client';

import { motion } from 'motion/react';

const metrics = [
  { label: 'Projects Delivered', value: '250+' },
  { label: 'Client Retention', value: '98%' },
  { label: 'Global Partners', value: '40+' },
  { label: 'Years Experience', value: '12+' },
];

export default function TrustMetrics() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {metric.value}
              </h3>
              <p className="text-white/40 text-sm uppercase tracking-wider font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
