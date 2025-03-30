"use client";

import { motion } from "framer-motion";

const proyectos = [
  {
    titulo: "Ahorcado C",
    descripcion:
      "Un juego de ahorcado en lenguaje C. Utilizando archivos, librería time.h para registrar la hora de finalización de la partida y para generar una palabra al azar.",
    imagen: "/ahorcado.png",
    repo: "https://github.com/FacuPompa/Ahorcado",
    demo: "a",
  },
  {
    titulo: "Ajedrez Python",
    descripcion: "Juego de ajedréz en Python utilizando la librería Pygame. Permite jugar una partida de ajedrez en una misma PC contando con una interfaz gráfica intuitiva y funcionalidades completas para una experiencia de juego satisfactoria.",
    imagen: "/chess.jpg",
    repo: "https://github.com/FacuPompa/ChessGame",
    demo: "a",
  },
];

export default function Proyectos() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-start items-start text-left px-6 scroll-mt-20"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold font-mono text-blue-400 mb-8">Proyectos</h2>

      <div className="font-mono flex flex-col gap-8">
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row bg-gray-800 rounded-xl shadow-lg p-6 transition"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ willChange: "transform" }}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full sm:w-1/3 rounded-lg shadow-md"
            />

            <div className="sm:ml-8 sm:mt-0 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-blue-300">{proyecto.titulo}</h3>
              <p className="text-gray-300 mt-2 max-w-2xl">{proyecto.descripcion}</p>

              <div className="mt-4 flex space-x-4">
                <a
                  href={proyecto.repo}
                  target="_blank"
                  className="bg-blue-400 text-white text-center rounded-xl font-mono py-2 px-4 transition duration-100 hover:bg-blue-500"
                >
                  Ver Repositorio
                </a>
                {proyecto.demo && (
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    className="bg-green-500 text-white px-4 py-2 text-center rounded-xl hover:bg-green-600"
                  >
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
