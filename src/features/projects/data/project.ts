
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

//DTR img
import DtrBackground from "../img/DTR/dtr-background.png";
import dtr_one from "../img/DTR/dtr_one.png";
import dtr_two from "../img/DTR/dtr_two.png"
import dtr_three from "../img/DTR/dtr_three.png"
import dtr_four from "../img/DTR/dtr_four.png"
import dtr_five from "../img/DTR/dtr_five.png"
import dtr_six from "../img/DTR/dtr_six.png"
import dtr_seven from "../img/DTR/dtr_seven.png"
import dtr_eight from "../img/DTR/dtr_eight.png"
import dtr_nine from "../img/DTR/dtr_nine.png"

//Beverage
import beberage from "../img/Beverage/beverageBackground.png";
import beberage_one from "../img/Beverage/beberage_one.png";
import beberage_two from "../img/Beverage/beberage_two.png";
import beberage_three from "../img/Beverage/beberage_three.png";
import beberage_four from "../img/Beverage/beberage_four.png";
import beberage_five from "../img/Beverage/beberage_five.png";

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
    imgSrc: DtrBackground,
    images: [
    dtr_one, dtr_two, dtr_three, dtr_four, dtr_five, dtr_six, dtr_seven, dtr_eight, dtr_nine 
  ],
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
  imgSrc: beberage,
  images: [
    beberage, beberage_one, beberage_two, beberage_three, beberage_four, beberage_five
  ],
  content: "A web application that helps businesses monitor their beverage inventory by tracking quantities, categories, and stock changes. Features include adding new items, updating stock, and generating alerts for low inventory."
}

];
