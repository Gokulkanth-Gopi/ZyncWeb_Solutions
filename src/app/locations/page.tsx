export const metadata = {
  title: 'Locations | ZyncWeb Solutions',
  description: 'ZyncWeb Solutions office locations and contact information',
};

export default function LocationsPage() {
  return (
    <main className="w-full py-24">
      <div className="container section">
        <h1 className="text-4xl font-bold mb-6">Locations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-2">ZyncWeb Solutions — HQ</h3>
            <p className="text-white/80">100 Tech Plaza, Suite 500<br/>San Francisco, CA 94107</p>
            <p className="text-sm text-white/60 mt-3">Open: Mon–Fri, 9am–6pm</p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-white/80">hello@zyncweb.com</p>
            <p className="text-white/80">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </main>
  );
}
