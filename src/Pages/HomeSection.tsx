import { motion } from "framer-motion";
import myImage from "../assets/myImage/jaspherflores.jpeg";
import { Background } from "../utils/Background";

import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { MapPin } from "lucide-react";

export const HomeSection = () => {
  return (
    <motion.section
      id="home"
      className={`snap-center relative min-h-screen flex flex-col md:flex-row items-center justify-center
         gap-6 md:gap-12 px-4 sm:px-6  md:px-16 pt-16 sm:pt-16 ${Background}
        overflow-x-hidden`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {/* Right: Profile Image */}
      <motion.div
        className="z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full overflow-hidden 
        border-4 border-gray-300 dark:border-gray-700 shadow-lg mb-8 md:mb-20"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={myImage}
          alt="Jaspher Flores"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Left: Text and Typewriter */}
      <motion.div
        className="z-10 w-full md:w-1/2 text-center md:text-left"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className=" leading-tight mb-2">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hi, I'm Jaspher Flores
            </h1>
            <h3 className="flex items-center gap-1 text-base justify-center sm:justify-start sm:text-lg pt-2">
              <MapPin size={19} /> Philippines Malabon
            </h3>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
          React and Node.js Developer
        </h2>

        {/* <p className="italic text-zinc-500 dark:text-zinc-400 mb-2">
          React Developer Node.js Developer
        </p> */}
        {/* <p className="italic text-zinc-500 dark:text-zinc-400 mb-2">
          <Typewriter
            words={["More Monkey, More fun."]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p> */}

        <span
          className="inline-block text-sm font-medium px-3 py-1 rounded-full mt -2 mb-5 
        select-none"
        >
          <div className="flex gap-8 mt-3.5">
            <a
              href="https://github.com/yong-fbug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="Gitghub"
            >
              <SiGithub className="w-7 h-7 hover:text-blue-600 transition" />
            </a>
            <a
              href="https://linkedin.com/in/jaspher-flores"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkIn"
            >
              <SiLinkedin className="w-7 h-7 hover:text-blue-600 transition" />
            </a>
            <a
              href="mailto:jaspherflores.ox@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <SiGmail className="w-7 h-7 hover:text-blue-600 transition" />
            </a>
          </div>
        </span>

        <div className="flex justify-center sm:justify-start items-center  gap-10">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className=" px-6 py-3 bg-zinc-900 dark:bg-white text-white
             dark:text-black rounded-lg font-medium hover:opacity-90 transition duration-300
      "
          >
            View Projects
          </a>
          {/* Tech Stack Icons */}
          {/* <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {[
              {
                icon: <SiReact className="text-blue-500 dark:text-blue-700" />,
                alt: "React",
              },
              {
                icon: (
                  <SiNodedotjs className="text-green-500 dark:text-green-700" />
                ),
                alt: "Node.js",
              },
              {
                icon: (
                  <SiTailwindcss className="text-sky-500 dark:text-sky-700" />
                ),
                alt: "Tailwind CSS",
              },
              {
                icon: (
                  <SiTypescript className="text-blue-500 dark:text-blue-700" />
                ),
                alt: "JavaScript",
              },
              {
                icon: (
                  <SiJavascript className="text-yellow-500 dark:text-yellow-700" />
                ),
                alt: "JavaScript",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                title={tech.alt}
                className="w-10 h-10 text-2xl"
                transition={{ duration: 0.2 }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div> */}
        </div>
      </motion.div>
    </motion.section>
  );
};
