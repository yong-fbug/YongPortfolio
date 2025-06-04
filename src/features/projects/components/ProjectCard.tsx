// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// interface Props {
//   id: number;
//   title: string;
//   description: string;
//   imgSrc: string;
// }

// export const ProjectCard = ({ id, title, description, imgSrc }: Props) => (
//   <motion.div
//     whileHover={{ scale: 1.03 }}
//     whileTap={{ scale: 0.97 }}
//     className="rounded-lg overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-700"
//   >
//     <Link to={`/projects/${id}`}>
//       <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4 bg-white dark:bg-zinc-800">
//         <h3 className="text-xl font-bold mb-2">{title}</h3>
//         <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
//       </div>
//     </Link>
//   </motion.div>
// );
