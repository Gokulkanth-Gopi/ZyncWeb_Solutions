export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tighter">
            ZyncWeb<span className="text-emerald-400">.</span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Engineering intelligent digital infrastructure for the modern enterprise.
            Scalable, secure, and future-proof solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-emerald-400">Company</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-emerald-400">Services</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>Web Development</li>
            <li>Cloud Infrastructure</li>
            <li>UI/UX Design</li>
            <li>Enterprise Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-emerald-400">Connect</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>GitHub</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>© 2026 ZyncWeb Solutions. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
