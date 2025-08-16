import {
  SiCss3,
  SiExpress,
  SiGoogleappsscript,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTypescript,
  SiXampp,
} from "react-icons/si";
import type { JSX } from "react";

export const techIcons: Record<string, JSX.Element> = {
  React: <SiReact className="hover:text-cyan-400" />, // React blue-cyan
  JavaScript: <SiJavascript className="hover:text-yellow-400" />, // JS yellow
  TypeScript: <SiTypescript className="hover:text-blue-500" />, // TS blue
  Nodejs: <SiNodedotjs className="hover:text-green-600" />, // Node green
  Express: <SiExpress className="hover:text-gray-400" />, // Express gray
  Mongodb: <SiMongodb className="hover:text-green-500" />, // Mongo green
  Mongoose: <SiMongoose className="hover:text-red-600" />, // Mongoose red
  PHP: <SiPhp className="hover:text-indigo-500" />, // PHP purple
  XAMPP: <SiXampp className="hover:text-orange-500" />, // XAMPP orange
  CSS3: <SiCss3 className="hover:text-blue-400" />, // CSS blue
  GoogleAppscript: <SiGoogleappsscript className="hover:text-green-400" />, // Apps Script green
};
