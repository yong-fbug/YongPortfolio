import { motion } from "framer-motion";
import myImage from "../assets/myImage/jaspherflores.jpeg";

export const HomeSection = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between
       bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-6 md:px-20 pt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {/* Left: Text */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Hi, I'm Jaspher Flores
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-6">
          A React + Node.js Developer focused on building modern and maintainable web applications.
        </p>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth"});
          }}
          
          className="inline-block px-6 py-3 mb-5 bg-zinc-900 dark:bg-white text-white dark:text-black 
          rounded-lg font-medium hover:opacity-90 transition duration-300"
        >
          View Projects
        </a>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-zinc-300 dark:border-zinc-700 shadow-lg mb-10 md:mb-0"
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
