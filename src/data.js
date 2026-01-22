import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/Ireti.png";
import img2 from "./images/ecommerce.png";
import img3 from "./images/profiles.jpeg";
import img4 from "./images/snaarp.png";
import img5 from "./images/thrindle.png";

export const Experience = [
  {
    id: 1,
    date: "Jan 2024 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "Frontend Developer at Product Studio.",
    location: "LAGOS, NIGERIA",
    description:
      "Contributed to the development of web pages and web-based applications using HTML, React.js, and Next.js. Collaborated closely with the design team to implement UI/UX designs for websites, ensuring a seamless and visually appealing user experience. Conducted code debugging to identify and resolve errors, enhancing the overall functionality of the applications.Actively participated in team meetings, providing valuable insights, and contributing to discussions on project progress and challenges.",
  },
  {
    id: 2,
    date: "May 2023 - Jan 2024",
    iconsSrc: <IoCodeWorking />,
    title: "Frontend Developer at Thrindle. ",
    location: "LAGOS, NIGERIA",
    description:
      "Built projects with NextJs, React.js, Typescript, and Javascript. ",
  },

  {
    id: 3,
    date: "2022 - April 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Associate Software Developer at Decagon.",
    location: "LAGOS, NIGERIA",
    description:
      "Built projects with Nodejs, React.js, Typescript, and Javascript. ",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Snaarp File Transfer",
    imageSrc: img4,
    techs: "NextJs, Typescript, Redux, Tailwind, ShadCN, Tanstack, Lucid React",
    github: "#",
    link: "https://app.snaarp.com/",
  },
  {
    id: 2,
    name: "Thrindle LandingPage",
    imageSrc: img5,
    techs: "NextJstJs, Tailwind CSS, TypeScript, React Icons ",
    github: "#",
    link: "https://thrindle.com",
  },

  
  {
    id: 3,
    name: "Ecommerce App ",
    imageSrc: img2,
    techs: "React Js, Sanity,TypeScript,SwiperJs, Tailwind CSS",
    github: "https://github.com/hakynbayo/Ecommerice-Website-in-React",
    link: "https://faithy-store.netlify.app/",
  },
  {
    id: 4,
    name: "Ireti Foundation",
    imageSrc: img1,
    techs: "ReactJs,Typescript, ContextApi, React-Icon",
    github: "https://github.com/hakynbayo/ireti",
    link: "https://iretifoundation.ng/",
  },

  {
    id: 5,
    name: "Profiles HQ",
    imageSrc: img3,
    techs: "React, Tailwind CSS, TypeScript, ExpressJs, MongoDB ",
    github: "https://github.com/hakynbayo",
    link: "https://profiles.decagonhq.com/",
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
    link: "https://x.com/mistayagi",
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
    link: "https://wa.me/2347061511468",
  },
];
