import { motion } from "framer-motion";
import { Background } from "../utils/Background";
// import { projects } from "../features/projects/data/project";
import { techIcons } from "../features/projects/data/techIcon";
import { techUrl } from "../features/projects/data/techUrl";
import { useState } from "react";
import { Download } from "lucide-react";
import Wanda from "../assets/wanda/WandaCrop.jpg";
import WandaDigital from "../assets/wanda/wandaCute.png";

export const AboutSection = () => {
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);
  const [hoverWanda, setHoverWanda] = useState(false);

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

  // const techList = Array.from(new Set(projects.flatMap((p) => p.stack || [])));

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
      <div className="w-full p-4 space-y-4">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Tech stack */}
          <div
            className="flex flex-row flex-wrap items-center justify-center h-auto 
          rounded-xl p-4 gap-6 sm:gap-12"
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
                  className="absolute top-full mt-2 py-1 px-2 text-xs sm:text-sm text-white opacity-0
                     group-hover:opacity-100 transition-opacity duration-200 pointer-events-none tracking-widest
                     select-none"
                >
                  {name}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resume / Cat */}
          <div
            className="relative md:absolute md:top-21 md:right-15 shadow-lg rounded-xl p-4 
            w-full sm:w-72 md:w-80 max-w-full mx-auto md:mx-0 text-center"
          >
            <motion.img
              key={hoverWanda ? "Wanda-real" : "Wanda Digita"}
              src={hoverWanda ? Wanda : WandaDigital}
              title="Wanda"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              onHoverStart={() => setHoverWanda(true)}
              onHoverEnd={() => setHoverWanda(false)}
              className="w-60 h-80 object-cover rounded border-2 overflow-hidden mx-auto"
            />

            <a
              download
              className="flex items-center justify-center gap-2 px-5 py-3 border
               border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800
                transition cursor-pointer mt-5"
              aria-label="Download Resume"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 pb-30">
          {/* Internship card */}
          <div className="w-full md:w-96 rounded-xl p-4 shadow-lg border-2">
            <h1 className="uppercase tracking-widest font-bold">
              Internship Experience
            </h1>
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
          <div className="shadow-lg border-2 flex-1 rounded-xl p-4 md:mr-80">
            <p className="uppercase tracking-widest font-bold">About me</p>
            <h1 className="mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
              I am a web developer specializing in React, TypeScript, and the
              MERN stack with experience building inventory systems,
              authentication systems, and data dashboards.
            </h1>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
