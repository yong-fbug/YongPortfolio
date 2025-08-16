import { motion } from "framer-motion";
import { Background } from "../utils/Background";
import { projects } from "../features/projects/data/project";
import { techIcons } from "../features/projects/data/techIcon";
import { techUrl } from "../features/projects/data/techUrl";
import { useState } from "react";

export const AboutSection = () => {
  const [hoverIcon, setHoverIcon] = useState<number | null>(null);

  const iconnVariants = {
    idle: { scale: 1 },
    wave: (distance: number) => ({
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        delay: distance * 0.08,
      },
    }),
    hover: { scale: 1.5 },
  };

  const techList = Array.from(new Set(projects.flatMap((p) => p.stack || [])));

  return (
    <motion.section
      id="about"
      className={`snap-start relative flex flex-col-reverse md:flex-row
         items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-20 ${Background}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full top-24 left-0 p-4 space-y-4">
        {/* Top cards */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Internship card */}
          <div className=" w-full md:w-96 rounded-xl p-4 shadow-lg border-2 ">
            <h1 className="uppercase tracking-widest font-bold">Internship</h1>
            <div className="mt-2 space-y-1">
              <h2 className="font-medium">
                Information Technology Coordinator
              </h2>
              <span className="text-sm">at Ravago Inc</span>

              <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                <li>IT support</li>
                <li>Hardware and software troubleshooting</li>
                <li>AppScript and Appsheet</li>
                <li>Ticket Analysis Report</li>
              </ul>
            </div>
          </div>

          {/* About me card */}
          <div className="shadow-lg  border-2  flex-1 rounded-xl p-4">
            <p className="uppercase tracking-widest font-bold">About me here</p>
            <h1 className="mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
              I am a web developer specializing in React, TypeScript, and the
              MERN stack with experience building inventory systems,
              authentication systems, and data dashboards.
            </h1>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Tech stack */}
          <div className="flex-1 h-50 rounded-xl p-4">
            <div className="flex flex-wrap gap-13 items-center justify-center mt-17">
              {techList.map((tech, i) => (
                <motion.div
                  key={i}
                  className="relative group flex flex-col items-center"
                >
                  <motion.a
                    href={techUrl[tech]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }}
                    transition={{ type: "keyframes", stiffness: 300 }}
                  >
                    <motion.div
                      custom={hoverIcon !== null ? Math.abs(hoverIcon - i) : 0}
                      variants={iconnVariants}
                      animate={
                        hoverIcon === i
                          ? "hover"
                          : hoverIcon !== null
                          ? "wave"
                          : "idle"
                      }
                      onHoverStart={() => setHoverIcon(i)}
                      onHoverEnd={() => setHoverIcon(null)}
                      whileHover={{ scale: 1.3 }}
                    >
                      {techIcons[tech]}
                    </motion.div>
                  </motion.a>

                  <div
                    className="absolute top-full mt-2 py-1 px-2 text-xs sm:text-sm text-white opacity-0
                     group-hover:opacity-100 transition-opacity duration-200 pointer-events-none tracking-widest"
                  >
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resume/Cat */}
          <div className="shadow-lg border-2 w-full lg:w-80 rounded-xl p-4">
            <p className="text-sm sm:text-base">Cat and resume here</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
