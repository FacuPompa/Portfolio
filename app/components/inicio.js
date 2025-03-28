"use client";

import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <motion.section
        className="min-h-screen flex flex-col justify-left items-left text-left"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.5 }}
    >
      <img
        src="/foto.png"
        alt="Facundo Pompa Fernández de Cieza"
        className="w-70 h-70 rounded-full border-3 border-blue-400 shadow-lg"
      />
      <h1 className="text-5xl font-bold font-mono pt-10 text-blue-400 mt-4">
        Facundo Pompa Fernández de Cieza
      </h1>
      <h2 className="text-xl text-gray-300 font-mono mt-4">Fullstack Developer</h2>
      <p className="mt-2 text-lg font-mono text-gray-400 max-w-lg">
        "Desarrollando soluciones web con pasión y creatividad."
      </p>
    </motion.section>
  );
}
