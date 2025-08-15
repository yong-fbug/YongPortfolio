import { motion } from "framer-motion";
import { Background } from "../utils/Background";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className={`snap-center relative min-h-screen flex flex-col-reverse md:flex-row
         items-center justify-between px-6 md:px-20 pt-20 ${Background}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full absolute top-24 left-0 p-4 space-y-2">
        <div className="flex flex-row gap-2">
          <div className="bg-teal-600 w-80 h-56 rounded-xl p-3 ">
            <p>Internship exp</p>
          </div>
          <div className="bg-red-600 flex-1 h-auto rounded-xl p-3">
            <p>About me here</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="bg-red-600 flex-1 h-50 rounded-xl p-3">
            <p>All stack I use here</p>
          </div>
          <div className="bg-blue-600 w-80 h-auto rounded-xl p-3">
            <p>Cat and resume here</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
