import { motion } from "framer-motion";
import { Briefcase, Code, UserCheck, Globe, Github, Linkedin } from "lucide-react";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-20 pt-44 border-t-4 border-zinc-300 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-lg">
          I’m a frontend developer who thrives on crafting clean, scalable interfaces with modern technologies.
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Intro Card */}
        <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <img
              src="/profile.jpg" // Replace with your profile image path
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover mr-4"
            />
            <div>
              <h3 className="text-2xl font-semibold">Yong</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Frontend Developer</p>
            </div>
          </div>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
            I’m focused on building modern web interfaces using React, TypeScript, and TailwindCSS. 
            I also work on performance optimization, accessibility, and UX refinement.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <Github />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Right: Skill Highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md">
            <Code className="w-6 h-6 mb-2 text-indigo-600 dark:text-indigo-400" />
            <h4 className="font-semibold text-lg mb-1">Tech Stack</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              React, TypeScript, Tailwind, Vite, Zustand, Chart.js, and more.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md">
            <Briefcase className="w-6 h-6 mb-2 text-teal-600 dark:text-teal-400" />
            <h4 className="font-semibold text-lg mb-1">Projects</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Built ticket dashboards, portfolio sites, and analytics tools using Google Apps Script and APIs.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md">
            <UserCheck className="w-6 h-6 mb-2 text-pink-600 dark:text-pink-400" />
            <h4 className="font-semibold text-lg mb-1">Strengths</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Strong logic, clean code structure, UI/UX sensitivity, and a growth mindset.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md">
            <Globe className="w-6 h-6 mb-2 text-yellow-600 dark:text-yellow-400" />
            <h4 className="font-semibold text-lg mb-1">Learning Goals</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Deep dive into JavaScript ES6+, OOP, Next.js, and backend API architecture.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
