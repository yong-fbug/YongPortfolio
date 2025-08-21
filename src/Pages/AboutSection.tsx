import { motion } from "framer-motion";
import { techIcons } from "../features/projects/data/techIcon";
import { techUrl } from "../features/projects/data/techUrl";
import { useState } from "react";
import { Download } from "lucide-react";

export const AboutSection = () => {
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);

  const iconnVariants = {
    idle: { scale: 1 },
    wave: (distance: number) => ({
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        delay: distance * 0.08,
      },
    }),
    hover: { scale: 1.2 },
  };

  return (
    <motion.section
      id="about"
      className={`snap-start relative flex flex-col-reverse md:flex-row
         items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 pt-20`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full p-4 space-y-12">
        {/* Tech stack */}
        <div
          className="flex flex-wrap items-center justify-center 
          rounded-2xl  backdrop-blur-sm
          shadow-md p-6 gap-6 sm:gap-10"
        >
          {techIcons.map(({ name, icon: Icon, className }, index) => (
            <motion.div
              key={name}
              className="relative group flex flex-col items-center"
            >
              <motion.a
                rel="noopener noreferrer"
                className="text-3xl"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
                transition={{ type: "keyframes", stiffness: 300 }}
              >
                <motion.div
                  custom={
                    hoverIcon
                      ? Math.abs(
                          index -
                            techIcons.findIndex((t) => t.name === hoverIcon)
                        )
                      : 0
                  }
                  variants={iconnVariants}
                  animate={
                    hoverIcon === name
                      ? "hover"
                      : hoverIcon !== null
                      ? "wave"
                      : "idle"
                  }
                  onHoverStart={() => setHoverIcon(name)}
                  onHoverEnd={() => setHoverIcon(null)}
                  onDoubleClick={() => window.open(techUrl[name], "_blank")}
                  className="text-3xl cursor-pointer"
                >
                  <Icon className={className} />
                </motion.div>
              </motion.a>

              <div
                className="absolute top-full mt-2 py-1 px-2 rounded-md
                bg-black/80 text-white text-xs sm:text-sm opacity-0
                group-hover:opacity-100 transition duration-300
                pointer-events-none tracking-wide select-none"
              >
                {name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Internship card */}
          <div
            className="w-full md:w-96 rounded-2xl p-6 shadow-lg border 
          bg-white/80 dark:bg-zinc-900/40 backdrop-blur-sm 
          hover:shadow-xl transition"
          >
            <h1 className="uppercase tracking-widest font-bold text-lg text-blue-600 dark:text-blue-400">
              Internship Experience
            </h1>
            <div className="mt-3 space-y-1">
              <h2 className="font-semibold text-base">
                Information Technology Coordinator
              </h2>
              <span className="text-sm opacity-80">at Ravago Inc</span>

              <ul className="list-disc list-inside text-sm space-y-1 mt-3">
                <li>IT support</li>
                <li>Hardware and software troubleshooting</li>
                <li>AppScript and Appsheet</li>
                <li>Ticket Analysis Report</li>
              </ul>
            </div>
          </div>

          {/* About me card */}
          <div
            className="flex-1 rounded-2xl p-6 shadow-lg border
          bg-white/80 dark:bg-zinc-900/40 backdrop-blur-sm 
          hover:shadow-xl transition"
          >
            <p className="uppercase tracking-widest font-bold text-lg text-blue-600 dark:text-blue-400">
              About me
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I am a web developer specializing in React, TypeScript, and the
              MERN stack with experience building inventory systems,
              authentication systems, and data dashboards.
            </p>
            <a
              download
              className="flex items-center justify-center gap-2 px-5 py-3 border
              border-zinc-300 dark:border-zinc-700 rounded-md font-medium
              hover:bg-zinc-100 dark:hover:bg-zinc-800
              transition mt-6 text-sm"
              aria-label="Download Resume"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
