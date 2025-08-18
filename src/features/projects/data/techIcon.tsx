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
  {
    name: "React",
    icon: SiReact,
    className: "text-cyan-400 hover:text-cyan-300",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "text-yellow-400 hover:text-yellow-300",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    className: "text-blue-600 hover:text-blue-500",
  },
  {
    name: "Nodejs",
    icon: SiNodedotjs,
    className: "text-green-700 hover:text-green-600",
  },
  {
    name: "Express",
    icon: SiExpress,
    className: "text-gray-700 hover:text-gray-600",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    className: "text-green-600 hover:text-green-500",
  },
  {
    name: "Mongoose",
    icon: SiMongoose,
    className: "text-red-700 hover:text-red-600",
  },
  {
    name: "PHP",
    icon: SiPhp,
    className: "text-indigo-600 hover:text-indigo-500",
  },
  {
    name: "XAMPP",
    icon: SiXampp,
    className: "text-orange-600 hover:text-orange-500",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    className: "text-blue-500 hover:text-blue-400",
  },
  {
    name: "GoogleAppscript",
    icon: SiGoogleappsscript,
    className: "text-green-500 hover:text-green-400",
  },
];
