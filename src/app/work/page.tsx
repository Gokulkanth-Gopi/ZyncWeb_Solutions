import { projects } from '../../lib/projects-data';
import Link from 'next/link';

export default function WorkPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.slug} className="bg-white/5 rounded-2xl p-6">
              <img src={p.heroImage} alt={p.title} className="w-full h-44 object-cover rounded-xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
              <p className="text-white/60 mb-4">{p.description}</p>
              <Link href={`/work/${p.slug}`} className="text-emerald-400 font-bold">Read More →</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
