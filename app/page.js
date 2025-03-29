"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Inicio from "./components/inicio";
import SobreMi from "./components/sobremi";
import Proyectos from "./components/proyectos";

const sections = [
  { id: "home", title: "Inicio", component: <Inicio /> },
  { id: "about", title: "Sobre Mí", component: <SobreMi /> },
  { id: "projects", title: "Proyectos", component: <Proyectos /> },
  { id: "contact", title: "Contacto" },
];

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen w-full relative">
      <div className="absolute inset-0 bg-repeat bg-[length:20px_20px] bg-[linear-gradient(45deg,_rgba(255,_255,_255,_0.1)_1px,_transparent_1px)]"></div>
      
      <nav className="fixed top-0 w-full bg-gray-800 p-4 shadow-md flex justify-center space-x-4 z-50">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="relative text-blue-400 font-bold font-mono mx-15 py-2 px-4 transition-all duration-300 hover:text-gray-300
              before:absolute before:inset-0 before:rounded-md 
              before:bg-blue-500 before:opacity-0 before:blur-md before:scale-110 
              before:transition-all before:duration-300 
              hover:before:opacity-50"
          >
            {section.title}
          </a>
        ))}
      </nav>

      <div className="pt-40 px-100">
        {sections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="w-full min-h-screen flex justify-start items-start text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {section.component || (
              <h1 className="text-4xl font-bold font-mono text-blue-400">
                {section.title}
              </h1>
            )}
          </motion.section>
        ))}
      </div>
    </div>
  );
}
