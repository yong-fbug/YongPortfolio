import pmsImage from "../img/pms/pms.jpg";
import sampleImg from "../img/pms/ewan.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc: string; //cover
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
    imgSrc: "",
    content: "Details about project..",
    
  },
  {
    id: 3,
    title: 'Ticket Assessment Explorer',
    description: 'A ticket dashboard to vizuals trends, filter data within a day, weekly, monthly, or yearly',
     imgSrc: "/images/project2.jpg",
     content: "Details about project ..",
  },
  {
  id: 4,
  title: 'Beverage Inventory Management',
  description: 'A system to efficiently track and manage beverage stock levels, ensuring timely restocking and minimizing wastage.',
  imgSrc: "/images/project3.jpg",
  content: "A web application that helps businesses monitor their beverage inventory by tracking quantities, categories, and stock changes. Features include adding new items, updating stock, and generating alerts for low inventory."
}

];
