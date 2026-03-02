'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ZyncWeb transformed our digital presence. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
  },
  {
    quote: "The team delivered a scalable solution that exceeded our expectations. Highly recommended for enterprise projects.",
    author: "Michael Chen",
    role: "Director of Engineering, Innovate Inc.",
  },
  {
    quote: "Professional, reliable, and innovative. ZyncWeb is the partner you need for complex digital challenges.",
    author: "Emily Davis",
    role: "Product Manager, FutureSoft",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Client <span className="text-emerald-400">Testimonials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <h4 className="font-bold text-white">{testimonial.author}</h4>
                <p className="text-white/40 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
