import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col md:flex-col px-6 py-20 border-t-5 border-zinc-300 bg-zinc-100 
      dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 pt-44"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-semibold mb-6">About Me</h2>
      <p className="leading-relaxed text-lg">
        I'm a passionate frontend developer with experience in React, TypeScript, and TailwindCSS.
        I enjoy building clean, performant, and accessible web applications.
      </p>
    </motion.section>
  );
};
