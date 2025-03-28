"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Inicio from "./components/inicio";
import SobreMi from "./components/sobremi";

const sections = [
  { id: "home", title: "Inicio", component: <Inicio /> },
  { id: "about", title: "Sobre Mí", component: <SobreMi /> },
  { id: "projects", title: "Proyectos" },
  { id: "contact", title: "Contacto" },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && activeIndex < sections.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeIndex]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white h-screen w-full overflow-hidden">
      <nav className="fixed top-0 w-full bg-gray-800 p-4 shadow-md flex justify-center space-x-4 z-50 overflow-hidden">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setActiveIndex(index)}
            className={`relative text-blue-400 font-bold font-mono mx-15 py-2 px-4 transition-all duration-300
              ${
                activeIndex === index ? "text-gray-300" : "hover:text-gray-300"
              } 
              before:absolute before:inset-0 before:rounded-md 
              before:bg-blue-500 before:opacity-0 before:blur-md before:scale-110 
              before:transition-all before:duration-300 
              hover:before:opacity-50`}
          >
            <span className="relative z-10">{section.title}</span>
          </button>
        ))}
      </nav>

      <div className="relative w-full h-screen mt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="absolute inset-0 bg-repeat bg-[length:20px_20px] bg-[linear-gradient(45deg,_rgba(255,_255,_255,_0.1)_1px,_transparent_1px)]"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={sections[activeIndex].id}
            className="absolute top-0 left-0 w-full h-screen mt-30 flex justify-start items-start text-left ml-100"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
          >
            {sections[activeIndex].component || (
              <h1 className="text-4xl font-bold font-mono text-blue-400">
                {sections[activeIndex].title}
              </h1>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
