import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../features/projects/data/project";

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col px-6 py-20 pt-44 border-t-5 border-zinc-300 bg-zinc-100 
      dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-semibold mb-10 text-center">Projects</h2>
      <div className="grid gap-12 sm:grid-cols-2">
        {projects.map(({ id, title, description, imgSrc, images }) => (
          <Link to={`/projects/${id}`} key={id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-shadow"
            >
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-48 object-cover"
              />
              {images?.map((_, index) => (
                <div key={index}></div> 
              ))}
              <div className="p-4 bg-white dark:bg-zinc-800">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {description}
                </p>  
              </div>
            </motion.div>
          </Link>
        ))}
        
      </div>
    </motion.section>
  );
};
