import { useParams } from "react-router-dom";
import { projects } from "../data/project";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return (
    <div className="p-10 text-center text-zinc-600 dark:text-zinc-300">
      Project not found.
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>


      {/* Project content */}
      <p className="text-lg leading-relaxed mb-12">{project.content}</p>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
