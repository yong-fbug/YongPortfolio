import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../features/projects/data/project";
import { Background } from "../utils/Background";

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className={`relative min-h-screen flex flex-col px-6 py-20 pt-44 border-t-5 ${Background}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-semibold mb-20 text-center">Projects</h2>

      <div className="flex flex-col justify-between items-center">
        {projects.map(({ id, title, description, imgSrc, stack }, index) => (
          <div
            key={id}
            className={`flex flex-col md:flex-row ${
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
                className={` object-cover rounded-xl shadow-lg ${
                  index === 0 ? "w-[400px] h-[250px]" : "w-[350px] h-[200px]"
                }`}
              />
              <span className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View Project
              </span>
            </Link>

            {/* Text content */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 w-[365px]">{title}</h3>
              <p>Capstone-project:</p>
              <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
              {stack?.map((icon, i) => (
                <span key={i} className="text-xl">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
