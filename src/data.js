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
import img6 from "./images/platoonco.png";

export const Experience = [
  {
    id: 1,
    date: "June 2025 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "NextJs/React Developer at Snaarp Inc",
    location: "GLASGOW, SCOTLAND",
    description:
      "Develop and maintain web applications using Next.js, React, and TypeScript. Translate UI/UX designs into responsive, reusable components. Optimize applications for performance, SEO, and accessibility. Integrate frontend applications with REST or GraphQL APIs. Collaborate with cross-functional teams to deliver features on time. Write clean, maintainable, and well-documented code. Fix bugs and improve existing features.",
  },
  {
    id: 2,
    date: "October 2024 - May 2025",
    iconsSrc: <IoCodeWorking />,
    title: "VueJs Developer at PlantoonCo",
    location: "LAGOS, NIGERIA",
    description:
      "Designed and implemented responsive user interfaces for web applications using ReactJs. Collaborated with cross-functional teams to translate design mockups into functional code. Optimized website performance through efficient coding practices and browser compatibility testing. Conducted regular code reviews and provided feedback to improve overall code quality and maintainability.",
  },
  {
    id: 3,
    date: "Jan 2024 - September 2024",
    iconsSrc: <IoCodeWorking />,
    title: "NextJs/React Developer at Product Studio",
    location: "LAGOS, NIGERIA",
    description:
      "Developed interactive user interfaces using NextJs, improving user engagement and reducing load times. Collaborated with cross-functional teams to implement new features and enhancements. Conducted code reviews and implemented best practices for scalability. Utilized Redux for state management and API integration to optimize data flow.",
  },
  {
    id: 4,
    date: "May 2023 - Jan 2024",
    iconsSrc: <IoCodeWorking />,
    title: "React / Next.Js Developer at Thrindle",
    location: "LAGOS, NIGERIA",
    description:
      "Designed and implemented responsive user interfaces for web applications using ReactJs. Collaborated with cross-functional teams to translate design mockups into functional code. Optimized website performance through efficient coding practices and browser compatibility testing. Conducted regular code reviews and provided feedback to improve overall code quality and maintainability.",
  },
  {
    id: 5,
    date: "Jun 2021 - Apr 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Frontend (React) Developer at Hopewell Engineering Company",
    location: "LAGOS, NIGERIA",
    description:
      "Spearheaded the development of dynamic web pages and web-based applications utilizing HTML, React.js, and Next.js to optimize user engagement and interaction. Partnered closely with the design team to transform UI/UX designs into responsive and visually appealing interfaces, guaranteeing an intuitive user experience. Executed comprehensive code debugging sessions to swiftly identify and rectify errors, ultimately enhancing application performance and reliability.",
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
    name: "Payroll Management and Payslip Generator",
    imageSrc: img6,
    techs: "VueJs, NextJs, Typescript, Redux, Tailwind, Icons",
    github: "#",
    link: "https://platoonco.com/",
  },
  {
    id: 3,
    name: "Thrindle LandingPage",
    imageSrc: img5,
    techs: "NextJstJs, Tailwind CSS, TypeScript, React Icons ",
    github: "#",
    link: "https://thrindle.com",
  },

  
  {
    id: 4,
    name: "Ecommerce App ",
    imageSrc: img2,
    techs: "React Js, Sanity,TypeScript,SwiperJs, Tailwind CSS",
    github: "https://github.com/hakynbayo/Ecommerice-Website-in-React",
    link: "https://faithy-store.netlify.app/",
  },
  {
    id: 5,
    name: "Ireti Foundation",
    imageSrc: img1,
    techs: "ReactJs,Typescript, ContextApi, React-Icon",
    github: "https://github.com/hakynbayo/ireti",
    link: "https://iretifoundation.ng/",
  },

  {
    id: 6,
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
