import { motion } from "framer-motion";
import myImage from "../assets/myImage/jaspherflores.jpeg";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import { useState } from "react";
import { projects } from "../features/projects/data/project";
import { SiJavascript, SiTypescript } from "react-icons/si";

const techs = [
  { 
    name: "JavaScript", 
    icon: <SiJavascript className="w-10 h-10 text-yellow-500 dark:text-yellow-500" />, 
    color: "bg-yellow-300 dark:bg-yellow-300"
  },
  { 
    name: "TypeScript", 
    icon: <SiTypescript className="w-10 h-10 text-blue-500 dark:text-blue-500" />,  
    color: "bg-blue-300 dark:bg-blue-300"
  },
];

export const AboutSection = () => {
  const [scrollToNextTech, setScrollToNextTech] = useState(0);
  const [scrollToNextProject, setScrollToNextProject] = useState(0);

  const nextTech = () => setScrollToNextTech((i) => (i + 1) % techs.length);
  const prevTech = () => setScrollToNextTech((i) => (i - 1 + techs.length) % techs.length);
  const nextProject = () => setScrollToNextProject((i) => (i + 1) % projects.length);
  const prevProject = () => setScrollToNextProject((i) => (i - 1 + projects.length) % projects.length);

  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-20 pt-44 border-t-4 border-zinc-300 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex items-center">
            <img
              src={myImage}
              alt="Jaspher Flores"
              className="w-20 h-20 rounded-full border-4 border-gray-700 object-cover mr-4"
            />
            <h1 className="text-2xl font-semibold">I'm Jaspher Flores</h1>
          </div>
          <p className="text-base leading-relaxed">
            I'm a React and Node.js developer who thrives on crafting clean, scalable interfaces with modern technologies.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* Programming      */}
          <div
            className={`rounded-xl p-6 shadow-md transition-all duration-300 ${techs[scrollToNextTech].color} flex flex-col items-center`}
          >
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white select-none">
              Programming
            </h2>
            <div className="flex items-center justify-between w-full max-w-xs">
              <button
                onClick={prevTech}
                aria-label="Previous Technology"
                className="cursor-pointer text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-transform hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex flex-col items-center select-none">
                {techs[scrollToNextTech].icon}
                <p className="mt-2 text-lg font-bold text-black dark:text-white">
                  {techs[scrollToNextTech].name}
                </p>
              </div>

              <button
                onClick={nextTech}
                aria-label="Next Technology"
                className="cursor-pointer text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-transform hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Projects Card */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md min-h-[150px]">
            <div className="flex items-center gap-2 mb-4">
              <Presentation />
              <h2 className="text-lg font-semibold">Projects</h2>
            </div>
            <div className="flex items-center justify-between">
              <ChevronLeft onClick={prevProject} className="cursor-pointer" />
              <p className="text-sm text-center px-4 truncate max-w-[150px]">
                {projects[scrollToNextProject].title}
              </p>
              <ChevronRight onClick={nextProject} className="cursor-pointer" />
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
};
