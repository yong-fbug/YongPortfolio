import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../features/projects/data/project";
import { Background } from "../utils/Background";
import { techIcons } from "../features/projects/data/techIcon";

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className={`snap-start relative h-screen flex flex-col px-6 pt-12 overflow-hidden ${Background}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {/* Inner scroll for project cards */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto scroll-smooth">
        <div className="flex flex-col items-center">
          {projects.map(({ id, title, description, imgSrc, stack }, index) => (
            <div
              key={id}
              className={`flex flex-col md:flex-row z-50 mb-20 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <Link
                to={`/projects/${id}`}
                className=" flex flex-col items-center gap-2"
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
              <div className="p-4 max-w-[365px]">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>Capstone-project:</p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {description}
                </p>
                <div className="flex items-end gap-4 pt-2">
                  {stack?.map((icon, i) => (
                    <span key={i} className="text-3xl">
                      {techIcons[icon]}
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
