"use client";

import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-left items-left text-left "
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      <img
        src="/foto.png"
        alt="Facundo Pompa Fernández de Cieza"
        className="relative w-70 h-70 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-400/50 transition-all duration-300 
                hover:shadow-blue-500 hover:shadow-2xl
                  before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:opacity-0 
                  before:scale-125 before:blur-xl before:transition-all before:duration-300 
                  hover:before:opacity-40"
      />
      <h1 className="text-5xl font-bold font-mono pt-10 bg-gradient-to-r from-blue-400 to-blue-50 text-transparent bg-clip-text mt-4">
        Facundo Pompa Fernández de Cieza
      </h1>
      <h2 className="text-2xl text-gray-300 font-mono mt-4">Fullstack Developer</h2>
      <p className="mt-2 text-lg font-mono text-gray-300 opacity-70 max-w-230">
        Desarrollando aplicaciones web con enfoque en <b>react</b>. Mi objetivo es transformar ideas en productos digitales funcionales, asegurando una <b>experiencia de usuario</b> fluída y un rendimiento optimizado en cada proyecto.
      </p>
    </motion.section>
  );
}
