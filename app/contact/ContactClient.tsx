'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
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
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email Us</h4>
                    <p className="text-white/60">hello@zyncweb.com</p>
                    <p className="text-white/60">support@zyncweb.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Call Us</h4>
                    <p className="text-white/60">+1 (555) 123-4567</p>
                    <p className="text-white/60">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                    <p className="text-white/60">
                      100 Tech Plaza, Suite 500<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-white/40 font-mono text-sm">
                [Google Map Placeholder]
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 relative"
          >
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6">
              {/* ... form fields ... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">First Name</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Last Name</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email Address</label>
                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Subject</label>
                <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors">
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors" placeholder="Tell us about your project..." />
              </div>

              <button type="submit" className="w-full bg-emerald-500 text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* WhatsApp Floating Button */}
        <motion.a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:shadow-emerald-500/50 transition-shadow"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
