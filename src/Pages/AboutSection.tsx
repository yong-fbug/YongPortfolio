import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import { SiJavascript, SiTypescript } from "react-icons/si";

import { projects } from "../features/projects/data/project";
import { ContactSection } from "../components/ContactSection";
import { Background } from "../utils/Background";

const techs = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-10 h-10 text-yellow-500" />,
    color: "bg-yellow-400 dark:bg-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10 text-blue-500" />,
    color: "bg-blue-100 dark:bg-blue-900",
  },
];

export const AboutSection = () => {
  const [scrollToNextTech, setScrollToNextTech] = useState(0);
  const [scrollToNextProject, setScrollToNextProject] = useState(0);

  const nextTech = () => setScrollToNextTech((i) => (i + 1) % techs.length);
  const prevTech = () =>
    setScrollToNextTech((i) => (i - 1 + techs.length) % techs.length);
  const nextProject = () =>
    setScrollToNextProject((i) => (i + 1) % projects.length);
  const prevProject = () =>
    setScrollToNextProject((i) => (i - 1 + projects.length) % projects.length);

  return (
    <motion.section
      id="about"
      className={`relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-20 ${Background}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 space-y-6 transition-all">
          <div className="flex items-center">
            {/* <img
              src={myImage}
              alt="Jaspher Flores"
              className="w-20 h-20 rounded-full border-4 border-gray-700 object-cover mr-4"
            />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              I'm Jaspher Flores
            </h1> */}
          </div>
          <p className="text-base leading-relaxed tracking-tight text-gray-700 dark:text-gray-300">
            I am a React and Node.js developer who thrives on crafting clean,
            scalable interfaces with modern technologies.
          </p>
          <ContactSection />
        </div>

        {/* RIGHT */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Tech Card */}
          <div
            className={`rounded-xl p-6 shadow-md transition-transform hover:scale-[1.02] ${techs[scrollToNextTech].color} flex flex-col items-center`}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white select-none">
              Programming
            </h2>
            <div className="flex items-center justify-between w-full max-w-xs">
              <button
                onClick={prevTech}
                aria-label="Previous Technology"
                className="cursor-pointer text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-transform hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex flex-col items-center select-none">
                {techs[scrollToNextTech].icon}
                <p className="mt-2 text-lg font-bold text-gray-800 dark:text-white">
                  {techs[scrollToNextTech].name}
                </p>
              </div>

              <button
                onClick={nextTech}
                aria-label="Next Technology"
                className="cursor-pointer text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-transform hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Projects Card */}
          <div
            className="rounded-xl p-6 shadow-md min-h-[150px] bg-cover bg-center bg-no-repeat text-white relative overflow-hidden"
            style={{
              backgroundImage: `url(${projects[scrollToNextProject].imgSrc})`,
            }}
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <Presentation />
                <h2 className="text-lg font-semibold">Projects</h2>
              </div>

              <div className="flex items-center justify-between">
                <ChevronLeft onClick={prevProject} className="cursor-pointer" />
                <p className="text-sm text-center px-4 truncate max-w-[150px]">
                  {projects[scrollToNextProject].title}
                </p>
                <ChevronRight
                  onClick={nextProject}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="rounded-xl p-6 shadow-md bg-zinc-100 dark:bg-zinc-800 dark:text-white hover:scale-[1.02] transition-transform">
            <h2 className="text-xl font-bold mb-2">Tech Stack</h2>
            <ul className="text-sm space-y-1 list-disc list-inside text-gray-800 dark:text-gray-200">
              <li>React</li>
              <li>TailwindCSS</li>
              <li>Node.js + Express</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="rounded-xl p-6 shadow-md bg-green-100 dark:bg-green-900 text-gray-900 dark:text-white flex flex-col items-center hover:scale-[1.02] transition-transform">
            <h2 className="text-xl font-bold mb-2">Soft Skill</h2>
            <p className="text-center text-sm">
              Strong communicator and collaborative team player who values clean
              code and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
