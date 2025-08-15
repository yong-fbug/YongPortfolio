import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../features/projects/data/project";
import { Background } from "../utils/Background";

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className={`relative min-h-screen flex flex-col px-6 pt-44 border-t-5 ${Background}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-semibold mb-20 text-center">Projects</h2>

      {/* Scrollable container */}
      <div
        className="p-2 w-full h-auto max-h-[calc(100vh-4rem)] 
        overflow-auto scroll-smooth snap-y snap-mandatory flex flex-col overscroll-auto"
      >
        <div className="flex flex-col justify-between items-center">
          {projects.map(({ id, title, description, imgSrc, stack }, index) => (
            <div
              key={id}
              className={`flex flex-col md:flex-row snap-start z-50 mb-20 min-h-[100vh] ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              {/* Link with image */}
              <Link
                to={`/projects/${id}`}
                className="cursor-crosshair flex flex-col items-center gap-2"
              >
                <img
                  src={imgSrc}
                  alt={title}
                  className={`object-cover rounded-xl shadow-lg ${
                    index === 0 ? "w-[400px] h-[250px]" : "w-[350px] h-[200px]"
                  }`}
                />
                <span className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  View Project
                </span>
              </Link>

              {/* Text content */}
              <div className="p-4 max-w-[365px]">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>Capstone-project:</p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {description}
                </p>

                <div className="flex items-end gap-4 pt-2">
                  {stack?.map((icon, i) => (
                    <span key={i} className="text-3xl">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
