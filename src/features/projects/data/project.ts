
//PMS img
import pmsImage from "../img/PMS/pms.jpg";
import sampleImg from "../img/PMS/ewan.jpg";

//TAE img
import TAEImg from "../img/TAE/title_0.png";
import _1 from "../img/TAE/_1.png";
import _2 from "../img/TAE/_2.png";
import _3 from "../img/TAE/_3.png";
import _4 from "../img/TAE/_4.png";
import _5 from "../img/TAE/_5.png";
import _6 from "../img/TAE/_6.png";    
import _7 from "../img/TAE/_7.png";
import _8 from "../img/TAE/_8.png";
import _9 from "../img/TAE/_9.png"
import _10 from "../img/TAE/_10.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc?: string; 
  images?: string[];
  content: string;
  className?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Pabook',
    description: 'A web application integrating Internet of Things (IoT) technology to automate and streamline the parking process.',
    imgSrc: pmsImage,
    images: [
      sampleImg,
    ],
    content: "Development of a web-based intelligent parking management system with online booking designed for the City of Malabon University, improving parking efficiency and user convenience.",
    className: "border-blue-400 shadow-blue-300 h-10",
  },

  {
    id: 2,
    title: 'Daily Ticket Report',
    description: 'A ticket tracking Report vizualize, anaylze and tracks ticket within a day or weekly.',
    imgSrc: TAEImg,
    content: "Details about project..",
    
  },
  {
    id: 3,
    title: 'Ticket Assessment Explorer',
    description: 'A ticket dashboard to vizuals trends, filter data within a day, weekly, monthly, or yearly',
    imgSrc: TAEImg,
    images: [
      _1, _2, _3, _4, _5, _6, _7, _8, _9, _10,
    ],
    content: "Details about project ..",
  },
  {
  id: 4,
  title: 'Beverage Inventory Management',
  description: 'A system to efficiently track and manage beverage stock levels, ensuring timely restocking and minimizing wastage.',
  imgSrc: TAEImg,
  content: "A web application that helps businesses monitor their beverage inventory by tracking quantities, categories, and stock changes. Features include adding new items, updating stock, and generating alerts for low inventory."
}

];
