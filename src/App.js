import { Spline } from "@splinetool/react-spline";
import Akinbayo from "./images/akinbayo.JPG";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { IoLogoGithub, IoMenu, IoSunny, IoMoon } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize with saved theme or default to dark
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : true;
    
    // Apply theme immediately on initialization
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return isDark;
  });

  useEffect(() => {
    // This effect only runs when isDarkMode changes after initialization
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <AnimatePresence initial={false}>
      <div className={`flex w-screen min-h-screen flex-col items-center justify-center relative pb-20 transition-colors duration-300 ${isDarkMode ? 'bg-primary' : 'bg-white'}`}>
        <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center">
          <div className=" w-full md:w-880 bg-lightNavBar dark:bg-navBar p-4 rounded-2xl flex items-center gap-4">
            <p className="text-base dark:text-slate-200 font-bold">
              Akinbayo Akinwande
            </p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer duration-100 ease-in"
              >
                Contact
              </a>
              
              
            </div>

            <motion.div
              whileTap={{ scale: 0.6 }}
              className="block md:hidden  ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-lightTextSecondary dark:text-textBase" />
            </motion.div>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-lightNavBar dark:bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
                
                {/* Mobile Theme Toggle */}
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={() => {
                    toggleTheme();
                    setIsActive(false);
                  }}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {isDarkMode ? <IoSunny className="text-xl" /> : <IoMoon className="text-xl" />}
                </motion.button>

                <a
                  href="#"
                  className="text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer border border-lightTextSecondary dark:border-textBase px-2 py-1 rounded-xl hover:border-lightText dark:hover:border-gray-100 duration-100 ease-in"
                  onClick={() => setIsActive(false)}
                >
                  Download
                </a>
              </motion.div>
            )}
            {/* Theme Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {isDarkMode ? <IoSunny className="text-xl" /> : <IoMoon className="text-xl" />}
              </motion.button>

              <a
                href="https://docs.google.com/document/d/12q9QaxHLzmG504oCIV5hEG4ShkVCyhB-/edit?usp=sharing&ouid=102353437795558446276&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-base text-lightTextSecondary dark:text-textBase font-medium hover:text-lightText dark:hover:text-slate-100 cursor-pointer border border-lightTextSecondary dark:border-textBase px-2 py-1 rounded-xl hover:border-lightText dark:hover:border-gray-100 duration-100 ease-in"
              >
                Resume
              </a>
          </div>
        </nav>

        {/* <div className="relative" id="home">
          <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
          <div className="absolute bottom-10 w-full flex justify-center items-center">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              <p className="text-white">Press and drag to orbit</p>
            </div>
          </div>
        </div> */}

        <main className="w-[80%] mt-4">
          {/* About Section */}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            <div className="col-span-1 md:col-span-2 mb-8">
              <h2 className="text-4xl font-bold text-lightText dark:text-white text-center">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-600 mx-auto mt-4"></div>
            </div>
            
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
                <img
                  src={Akinbayo}
                  alt=""
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full h-420 flex flex-col items-center justify-center ">
              <p className="text-lg text-lightTextSecondary dark:text-textBase text-center">
                A Proactive, smart, and driven engineer with 2 years of
                development experience. Expertise in HTML, CSS, SASS,Typescript
                JavaScript etc and front-end frameworks such as ReactJs for the
                web and React Native for mobile development with knowledge of
                UI/UX using Figma. Proficient in developing clean and semantic
                code, ensuring accessibility, and optimizing website performance
                for the best user experience.
              </p>

              <a
                href="https://docs.google.com/document/d/12q9QaxHLzmG504oCIV5hEG4ShkVCyhB-/edit?usp=sharing&ouid=102353437795558446276&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 dark:text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
              >
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Resume
                </span>
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section className="w-full flex flex-col items-center justify-center my-24">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-lightText dark:text-white text-center">
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-600 mx-auto mt-4"></div>
            </div>
            
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: isDarkMode ? "rgb(21, 24, 31)" : "rgb(248, 249, 250)",
                      color: isDarkMode ? "#888" : "#374151",
                    }}
                    contentArrowStyle={{
                      borderRight: isDarkMode ? "7px solid  rgb(21, 24, 31)" : "7px solid rgb(248, 249, 250)",
                    }}
                    date={n.date}
                    iconStyle={{ 
                      background: isDarkMode ? "rgb(21, 24, 31)" : "rgb(248, 249, 250)", 
                      color: isDarkMode ? "#888" : "#374151" 
                    }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          {/* Projects Section */}
          <section
            className="flex flex-col items-center justify-center my-24"
            id="projects"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-lightText dark:text-white text-center">
                Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-600 mx-auto mt-4"></div>
            </div>
            
            <div className="flex flex-wrap items-center justify-evenly gap-4">
              {Projects &&
                Projects.map((n, i) => (
                  <motion.div
                    key={n.id}
                    className="border border-gray-300 dark:border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-gray-400 dark:hover:border-zinc-600 duration-100 ease-in-out"
                  >
                    <p className="text-lg text-lightText dark:text-textBase font-medium uppercase">
                      {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                    </p>

                    <a href={n.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={n.imageSrc}
                        className="w-full h-full object-cover rounded-md my-4"
                        alt="project image"
                      />
                    </a>

                    <div className="flex flex-1 items-center justify-between">
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        Technologies
                        <span className="block text-sm text-gray-400 dark:text-gray-500">
                          {n.techs}
                        </span>
                      </p>
                      <a href={n.github} target="_blank" rel="noopener noreferrer">
                        <motion.div whileTap={{ scale: 0.5 }}>
                          <IoLogoGithub className="text-lightText dark:text-textBase text-3xl cursor-pointer" />
                        </motion.div>
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-lightText dark:text-white text-center">
                Contact
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-600 mx-auto mt-4"></div>
            </div>
            
            <p className="text-2xl text-gray-600 dark:text-gray-400 capitalize mb-8">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-gray-300 dark:border-zinc-800 rounded-2xl hover:border-gray-400 dark:hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-lightText dark:text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
