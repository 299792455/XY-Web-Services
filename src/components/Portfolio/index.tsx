"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://i.postimg.cc/qRxQ15SW/Extension-deal-Scout-OS.png",
    title: "DealScout",
    link: "View Case",
  },
  {
    image: "https://i.postimg.cc/yYdnTnPr/Online-Dreams-Makers-Agency.png",
    title: "Agence OnlineDreamsMakers",
    link: "View Case",
  },
  {
    image: "https://i.postimg.cc/63cLrGGX/DJ-Sergio-Telmo.png",
    title: "DJ Sergio Telmo",
    link: "View Case",
  },
  {
    image: "https://i.postimg.cc/BQk5B3tX/Application-Equi-X.png",
    title: "Application EquiX",
    link: "View Case",
  },
];

export default function PortfolioSlider() {
  const [index, setIndex] = useState(0);

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
              className="w-full sm:w-[90%] md:w-[720px] max-w-full aspect-[16/9] bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${slides[index].image})` }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-2 inline-block text-sm text-white border-b-2 border-white hover:opacity-80 cursor-pointer"
          >
            {slides[index].link}
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
      </div>
    </section>
  );
}
