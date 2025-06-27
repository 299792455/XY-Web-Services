"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://i.postimg.cc/qRxQ15SW/Extension-deal-Scout-OS.png",
    title: "DealScout",
    link: "#",
    description: "Extension d'extraction des offres commerciales Youtube.",
    objectif: "Scanner la page, identifiez les patterns de vente, extraire les offres, affichage des infos pertinentes.",
    stack: ["JavaScript", "Chrome API", "Regex", "AI lite"],
  },
  {
    image: "https://i.postimg.cc/yYdnTnPr/Online-Dreams-Makers-Agency.png",
    title: "Agence OnlineDreamsMakers",
    link: "https://www.onlinedreamsmakers.es/",
    description:
      "Création d'une vitrine moderne pour une agence de communication en ligne.",
    objectif:
      "Présenter Entreprise & Services, transmettre un branding pro & exclusif, formulmaire de contact",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "VPS + Docker"],
  },
 
  {
    image: "https://i.postimg.cc/63cLrGGX/DJ-Sergio-Telmo.png",
    title: "DJ Sergio Telmo",
    link: "https://djsergiotelmo.com/",
    description:
      "Site vitrine/Portfolio pour un jeune DJ galicien prometteur.",
    objectif:
      "Version Mobile optimisée, style visuel impactant, agenda, player audio, formulaire de contact.",
    stack: ["Next.js", "Tailwind CSS", "Swiper.js", "Framer Motion"],
  },
  {
    image: "https://i.postimg.cc/BQk5B3tX/Application-Equi-X.png",
    title: "Application EquiX (En Développement)",
    link: "#",
    description: "Plateforme de gestion pour centres équestres.",
    objectif: "Calendrier, réservations, gestion users/Admin/Chevaux, statistiques, notifications, etc.",
    stack: ["React", "Next.js", "MongoDB", "Big Calendar"],
  },
];

export default function PortfolioSlider() {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="portfolio" className="px-4 py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-snug bg-white bg-clip-text text-transparent">
          Nos dernières réalisations
        </h2>
        <span className="block w-12 h-2 bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></span>
        <p className="text-gray-400 max-w-xl">
          Découvrez nos derniers cas clients et les solutions développées pour eux
        </p>

        <div className="relative w-full flex justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="w-full sm:w-[90%] md:w-[720px] max-w-full aspect-[16/9] bg-cover bg-center rounded-xl shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${slides[index].image})` }}
              onClick={() => setShowModal(true)}
            />
          </AnimatePresence>
        </div>

        <div className="mt-6">
          <motion.h3
            key={"title-" + index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-white text-2xl md:text-3xl font-semibold"
          >
            {slides[index].title}
          </motion.h3>

          <motion.a
            key={"link-" + index}
            href={slides[index].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-2 inline-block text-sm text-white border-b-2 border-white hover:opacity-80 cursor-pointer"
          >
            View Case
          </motion.a>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-9 h-5 relative group cursor-pointer`}
            >
              <span className="absolute inset-y-1 top-[calc(50%-1px)] left-0 w-full bg-gradient-to-r from-indigo-900/90 to-purple-900/90"></span>
              <motion.span
                layoutId="active-bar"
                className="absolute top-[calc(50%-1.5px)] left-0 w-full h-[3px] bg-[#fff]"
                initial={false}
                animate={{ opacity: index === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </button>
          ))}
        </div>

        {showModal && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-[2px] bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-xl w-full max-w-md"
            >
              <div className="text-left bg-black/70 backdrop-blur-sm text-white rounded-[10px] p-6 shadow-2xl relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
                <h3 className=" text-xl font-bold mb-1">{slides[index].title}</h3>
                <p className="text-sm text-white mb-4">{slides[index].description}</p>
                <h4 className="font-semibold text-sm text-white mb-1">Objectif :</h4>
                <p className="text-sm text-white mb-4">{slides[index].objectif}</p>
                <h4 className="font-semibold text-sm text-white mb-2">Stack utilisée :</h4>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {slides[index].stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
