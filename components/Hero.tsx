'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_25%)] opacity-20 blur-[100px] animate-pulse" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm">
            Next-Gen Digital Solutions
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Engineering Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Digital Infrastructure
            </span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            We build scalable, secure, and future-proof enterprise solutions that drive digital transformation and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center gap-3 font-medium">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-white" />
              </div>
              View Showreel
            </button>
          </div>
        </motion.div>
      </div>

      {/* Abstract Shape */}
      <motion.div
        className="absolute -z-10 opacity-30"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-[800px] h-[800px] border border-white/5 rounded-full" />
      </motion.div>
    </section>
  );
}
