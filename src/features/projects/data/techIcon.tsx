import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPhp,
  SiXampp,
  SiCss3,
  SiGoogleappsscript,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Icon {
  name: string;
  icon: IconType;
  className: string;
}

export const techIcons: Icon[] = [
  { name: "React", icon: SiReact, className: "hover:text-cyan-400" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "hover:text-yellow-400",
  },
  { name: "TypeScript", icon: SiTypescript, className: "hover:text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, className: "hover:text-green-600" },
  { name: "Express", icon: SiExpress, className: "hover:text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, className: "hover:text-green-500" },
  { name: "Mongoose", icon: SiMongoose, className: "hover:text-red-600" },
  { name: "PHP", icon: SiPhp, className: "hover:text-indigo-500" },
  { name: "XAMPP", icon: SiXampp, className: "hover:text-orange-500" },
  { name: "CSS3", icon: SiCss3, className: "hover:text-blue-400" },
  {
    name: "Google Apps Script",
    icon: SiGoogleappsscript,
    className: "hover:text-green-400",
  },
];
