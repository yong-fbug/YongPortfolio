import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen  flex flex-col items-center justify-center pt-20 px-4 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3}}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex gap-8 mb-8">
        <a href="https://github.com/yong-fbug" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-7 h-7 hover:text-blue-600 transition" />
        </a>
        <a href="https://linkedin.com/in/jaspher-flores" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-7 h-7 hover:text-blue-600 transition" />
        </a>
        <a href="mailto:jaspherflores2001@gmail.com" aria-label="Email">
          <Mail className="w-7 h-7 hover:text-blue-600 transition" />
        </a>
      </div>
      <a
        // href="/resume.pdf" 
        download
        className="flex items-center gap-2 px-5 py-3 border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        aria-label="Download Resume"
      >
        <Download className="w-5 h-5" />
        Download Resume
      </a>
    </motion.section>
  );
};
