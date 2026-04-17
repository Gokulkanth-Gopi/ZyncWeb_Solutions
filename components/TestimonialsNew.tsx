'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Morgan",
    role: "CEO, InnovateX",
    image: "https://picsum.photos/seed/alex/200/200",
    quote: "ZyncWeb Solutions transformed our digital presence. Their attention to detail and technical expertise are unmatched."
  },
  {
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    image: "https://picsum.photos/seed/sarah/200/200",
    quote: "The team delivered a scalable architecture that helped us handle 10x traffic growth. Highly recommended!"
  },
  {
    name: "Michael Ross",
    role: "Director, FutureCorp",
    image: "https://picsum.photos/seed/michael/200/200",
    quote: "Professional, timely, and innovative. ZyncWeb is the partner you need for complex web engineering."
  }
];

export default function TestimonialsNew() {
  return (
    <section className="py-32 px-6 bg-[#eaeff3] dark:bg-[#231f20] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-8">
            Client<br />
            <span className="text-gray-400">Voices.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="mb-8">
                <Quote className="w-12 h-12 text-[#3fbfb8] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center gap-6 border-t border-gray-100 dark:border-white/10 pt-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
