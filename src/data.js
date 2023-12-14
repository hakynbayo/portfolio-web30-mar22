import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/smoozemusic.png";
import img2 from "./images/ecommerce.png";
import img3 from "./images/profiles.jpeg";
import img4 from "./images/smoozemovie.png";
import img5 from "./images/acepay.png";

export const Experience = [
  {
    id: 1,
    date: "APR 2023 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "THRINDLE. ",
    location: "LAGOS, NIGERIA",
    description:
    "Contributed to the development of web pages and web-based applications using HTML, React.js, and Next.js. Collaborated closely with the design team to implement UI/UX designs for websites, ensuring a seamless and visually appealing user experience. Conducted code debugging to identify and resolve errors, enhancing the overall functionality of the applications.Actively participated in team meetings, providing valuable insights, and contributing to discussions on project progress and challenges."  
   
  },
  {
    id: 2, 
    date: "2022 - Mar 2023",
    iconsSrc: <IoCodeWorking />,
    title: "ASSOCIATE FRONTEND DEVELOPER/DECAGON.",
    location: "LAGOS, NIGERIA",
    description:
      "Built projects with Nodejs, React.js, Typescript, and Javascript. "
  },
  {
    id: 3,
    date: " JAN 2020 - DEC 2022",
    iconsSrc: <IoCodeWorking />,
    title: "CUSTOMER SERVICE/GTBANK",
    location: "LAGOS, NIGERIA",
    description:
      "Key individual to providing expert knowledge relating to products and services to new and existing clients. Providing customer services, to resolve and answer various banking questions.",
  },

];

export const Projects = [
  {
    id: 1,
    name: "Smooze Music",
    imageSrc: img1,
    techs: "ReactJs,Typescript, ContextApi, React Icon, Firebase, Postgres",
    github: "https://github.com/hakynbayo/Music-App",
    link: "https://smooze.netlify.app/"
  },
  {
    id: 2,
    name: "Smooze Movie",
    imageSrc: img4,
    techs: "ReactJs,Typescript, Redux, React Icon, Firebase",
    github: "https://github.com/hakynbayo/Smooze-movie",
    link: "https://smooze-movie.netlify.app/"
  },
  {
    id: 3,
    name: "Ecommerce App ",
    imageSrc: img2,
    techs: "React Js, Sanity,TypeScript,SwiperJs, Tailwind CSS",
    github: "https://github.com/hakynbayo/Ecommerice-Website-in-React",
    link: "https://faithy-store.netlify.app/"
  },
  {
    id: 4,
    name: "Profiles HQ",
    imageSrc: img3,
    techs: "React, Tailwind CSS, TypeScript, ExpressJs, MongoDB ",
    github: "https://github.com/hakynbayo",
    link: "https://profiles.decagonhq.com/"
  },
  {
    id: 5,
    name: "Ace Pay",
    imageSrc: img5,
    techs: "ReactJs, Tailwind CSS, TypeScript, React Icons ",
    github: "https://github.com/hakynbayo",
    link: "https://acepay-t7jh.onrender.com/"
  },
  
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/hakynbayo?tab=repositories",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akinwande-akinbayo-8b18a0143/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=+2347061511468&text&app_absent=0"
  },
];
