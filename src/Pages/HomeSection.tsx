import { motion } from "framer-motion";
import myImage from "../assets/myImage/jaspherflores.jpeg";
import { Background } from "../utils/Background";
import { Typewriter } from "react-simple-typewriter";

import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { Hand } from "lucide-react";

export const HomeSection = () => {
  return (
    <motion.section
      id="home"
      className={`snap-center relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between
        px-6 md:px-20 pt-20 ${Background}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {/* Left: Text and Typewriter */}
      <motion.div
        className="z-10 w-full md:w-1/2 text-center md:text-left"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          <span>{`Hi        `} </span>
          <motion.div
            style={{ display: "inline-block", cursor: "pointer" }}
            whileHover={{
              rotate: [0, 20, -10, 20, 0],
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            // className="flex items-center justify-start gap-5"
          >
            <Hand size={35} strokeWidth={2} />
          </motion.div>
          <span>,</span>

          <div>
            <h1 className="">I'm Jaspher Flores</h1>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
          React Developer and Node.js Developer
        </h2>

        {/* <p className="italic text-zinc-500 dark:text-zinc-400 mb-2">
          React Developer Node.js Developer
        </p> */}
        <p className="italic text-zinc-500 dark:text-zinc-400 mb-2">
          <Typewriter
            words={["More Monkey, More fun."]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mt-2 mb-5 dark:bg-green-900 dark:text-green-300">
          Open to Freelance & Collaboration
        </span>

        <div>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
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
        </div>
      </motion.div>

      {/* Right: Profile Image */}
      <motion.div
        className="z-10 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-lg mb-10 md:mb-0"
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
    </motion.section>
  );
};
