'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-emerald-900/50 to-black border border-white/10 p-12 md:p-24 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_50%)] opacity-20 blur-[100px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Ready to Accelerate Your <br />
              <span className="text-emerald-400">Digital Growth?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Let&apos;s build something extraordinary together. Contact us today to discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
