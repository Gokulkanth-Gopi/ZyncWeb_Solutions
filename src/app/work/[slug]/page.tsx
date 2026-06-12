import { projects } from '../../../lib/projects-data';

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <div className="p-12">Project not found</div>;

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <img src={project.heroImage} alt={project.title} className="w-full h-96 object-cover rounded-3xl mb-8" />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-white/60 mb-8">{project.description}</p>
        <h2 className="text-2xl font-bold mb-2">Challenge</h2>
        <p className="text-white/60 mb-6">{project.challenge}</p>
        <h2 className="text-2xl font-bold mb-2">Solution</h2>
        <p className="text-white/60 mb-6">{project.solution}</p>
        <h2 className="text-2xl font-bold mb-2">Results</h2>
        <ul className="list-disc pl-6 text-white/60">
          {project.results.map((r, idx) => (
            <li key={idx}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
