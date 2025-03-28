"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Html5", image: "/html5.png" },
  { name: "Css3", image: "/css.png" },
  { name: "Sass", image: "/sass.png" },
  { name: "Tailwind CSS", image: "/tailwind.png" },
  { name: "JavaScript", image: "/js.png" },
  { name: "Git", image: "/git.png" },
  { name: "NodeJS", image: "/node.png" },
  { name: "NextJS", image: "/next.png" },
  { name: "React", image: "/react.png" },
  { name: "Firebase", image: "/firebase.png" },
  { name: "MongoDB", image: "/mongo.png" },
  { name: "C", image: "/c.png" },
  { name: "Python", image: "/python.png" },
  { name: "Golang", image: "/go.png" },
  { name: "Java", image: "/java.png" },
];

export default function SobreMi() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-left items-start text-left px-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      <h2 className="text-4xl font-bold font-mono text-blue-400 mb-8">
        Sobre Mí
      </h2>
      <p className="text-lg text-gray-300 font-mono max-w-2xl">
        Soy un apasionado desarrollador Fullstack especializado en tecnologías modernas para la web.
      </p>

      <div className="mt-8 grid grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center justify-center w-24 h-24"
            whileHover={{ scale: 1.1 }}
          >
            <img src={skill.image} alt={skill.name} className="w-14 h-14" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
