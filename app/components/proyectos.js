"use client";

import { motion } from "framer-motion";

const proyectos = [
  {
    titulo: "Ahorcado C",
    descripcion: "Un juego de ahorcado en lenguaje C. Utilizando archivos, librería time.h para registrar la hora de finalización de la partida y para generar una palabra al azar",
    imagen: "/ahorcado.png",
    repo: "https://github.com/FacuPompa/Ahorcado",
    demo: "",
  },
  {
    titulo: "Ajedréz Python",
    descripcion: "Un juego de ajedréz hecho en Python.",
    imagen: "/chess.jpg",
    repo: "https://github.com/FacuPompa/ChessGame",
    demo: "",
  },

];

export default function Proyectos() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-start text-left px-6"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      <h2 className="text-4xl font-bold font-mono text-blue-300 mb-8">Proyectos</h2>

      <div className="font-mono space-y-12">
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row bg-gray-800 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >

            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full sm:w-1/3 rounded-lg shadow-md"
            />

            <div className="sm:ml-8 mt-4 sm:mt-0 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-blue-300">{proyecto.titulo}</h3>
              <p className="text-gray-300 mt-2 max-w-2xl">{proyecto.descripcion}</p>

              <div className="mt-4 flex space-x-4">
                <a
                  href={proyecto.repo}
                  target="_blank"
                  className={`relative text-white font-bold bg-blue-500 text-center rounded-xl font-mono mx-15 py-2 px-4 transition-all duration-300
                    before:absolute before:inset-0 before:rounded-md 
                    before:bg-blue-500 before:opacity-0 before:blur-md before:scale-110 
                    before:transition-all before:duration-300 
                    hover:before:opacity-50`}
                >
                  Ver Repositorio
                </a>
                <a
                  href={proyecto.demo}
                  target="_blank"
                  className={`relative bg-green-500 text-white px-4 py-2 text-center rounded-xl hover:bg-green-600
                  before:absolute before:inset-0 before:rounded-md 
                  before:bg-green-500 before:opacity-0 before:blur-md before:scale-110 
                  before:transition-all before:duration-300 
                  hover:before:opacity-50`}
                >
                  Ver Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
