import { useLocation, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/project";
import {
  ArrowLeftCircle,
  ChevronLeft,
  ChevronRight,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export default function ProjectDetail() {
  const [currentIndex, setcurrentIndex] = useState<number | null>(null);

  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project)
    return (
      <div className="p-10 text-center text-zinc-600 dark:text-zinc-300">
        Project not found.
      </div>
    );

  const navigate = useNavigate();
  const location = useLocation();

  //Next and prev
  const goNext = () => {
    if (currentIndex === null || !project.images) return null;
    setcurrentIndex((currentIndex + 1) % project.images.length);
  };

  const goPrev = () => {
    if (currentIndex === null || !project.images) return null;
    setcurrentIndex(
      (currentIndex - 1 + project.images.length) % project.images.length
    );
  };

  const handleBack = () => {
    if (location.state?.from === "projects") {
      navigate("/", { state: { scrollTo: "projects" } });
    } else {
      navigate("/");
    }
  };
  return (
    <div className=" mx-auto px-6 py-30 ">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4 mb-6">
        <ArrowLeftCircle onClick={handleBack} className="cursor-arrow" />
        <h1 className="text-xl font-bold">{project.title}</h1>
      </div>
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
                onClick={() => setcurrentIndex(index)}
                className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </>
      )}

      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/50  backdrop-blur-sm z-50 
          flex items-center justify-center"
          onClick={() => setcurrentIndex(null)}
        >
          <div
            className="relative flex items-center justify-center 
          max-w-full max-h-hull p-4"
          >
            <img
              src={project.images?.[currentIndex] ?? ""}
              alt={`Image ${currentIndex + 1}`}
              className="w-full max-w-[90%] max-h-[90%] md:max-w-[70%] md:max-h-[80%] rounded-lg"
              onClick={(e) => e.stopPropagation()} // to prevent closing when clicking the image
            />
            <XCircle
              onClick={() => setcurrentIndex(null)}
              className="absolute top-4 right-4 text-white w-8 h-8 cursor-pointer"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-3 py-2 
              bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold px-3 py-2 
              bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
