"use client";

import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram, FaEnvelope, FaCopy } from "react-icons/fa6";
import { useState } from "react";

const socialLinks = [
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/facundo-pompa-a25570357/" },
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/FacuPompa" },
  { name: "Twitter", icon: <FaXTwitter/>, url: "https://x.com/facuupompa" },
  { name: "Instagram", icon: <FaInstagram/>, url: "https://www.instagram.com/facuupompa/" },
];

const email = "pompafacundo4@gmail.com";

export default function Contacto() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col justify-start items-start text-left px-10 pt-24">
      <h2 className="text-4xl font-bold font-mono text-blue-400 mb-8">Contacto</h2>
      <p className="text-lg text-gray-300 font-mono max-w-2xl mb-6">
        Podés contactarme en mis redes o por email.
      </p>

      <div className="flex space-x-6 mb-6 relative z-10">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-400 transition-all duration-300 hover:text-gray-300"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4 relative z-10">
        <span className="text-lg text-gray-300 font-mono">{email}</span>
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-md flex items-center space-x-2 hover:bg-blue-600 transition-all duration-300"
        >
          <FaCopy />
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </section>
  );
}