import { useParams } from "react-router-dom";
import { projects } from "../../../data/project";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <div className="p-10 text-center">Project not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img src={project.imgSrc} alt={project.title} className="w-full rounded-lg mb-6" />
      <p className="text-lg">{project.content}</p>
    </div>
  );
}
