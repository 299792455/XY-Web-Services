"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/lmgonzalves/momentum-slider@3b3037f7f1bab402fe3c75cd20ab18e04e1cbe0b/portfolio-carousel/img/harvey-gibson-498362-unsplash.jpg",
    title: "DealScout",
    link: "View Case",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/lmgonzalves/momentum-slider@3b3037f7f1bab402fe3c75cd20ab18e04e1cbe0b/portfolio-carousel/img/andre-hunter-461305-unsplash.jpg",
    title: "Equi-X",
    link: "View Case",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/lmgonzalves/momentum-slider@3b3037f7f1bab402fe3c75cd20ab18e04e1cbe0b/portfolio-carousel/img/joanna-nix-389128-unsplash.jpg",
    title: "Agence OnlineDreamsMakers",
    link: "View Case",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/lmgonzalves/momentum-slider@3b3037f7f1bab402fe3c75cd20ab18e04e1cbe0b/portfolio-carousel/img/jurica-koletic-321003-unsplash.jpg",
    title: "DJ Sergio Telmo",
    link: "View Case",
  },
];

export default function PortfolioSlider() {
  const [index, setIndex] = useState(0);

  const handlePagination = (i: number) => setIndex(i);

  return (
    
    <div className="relative min-h-[500px] flex items-center justify-center  overflow-hidden px-6 py-20">
      <div className="absolute inset-0 -rotate-45  scale-[3] z-0"></div>

      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-center text-white text-4xl font-bold uppercase mb-12">
  Nos réalisations
  <span className="block w-12 h-1 mt-4 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></span>
</h2>
        <div className="relative overflow-hidden h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="w-[700px] h-[400px] bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${slides[index].image})` }}
            />
          </AnimatePresence>
        </div>

        <div className="mt-8 text-center">
          <motion.h3
            key={"title-" + index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-white text-3xl font-semibold"
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

        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handlePagination(i)}
              className={`w-9 h-5 relative group cursor-pointer`}
            >
              <span className="absolute inset-y-1 top-[calc(50%-1px)] left-0 w-full bg-[#6A3836]"></span>
              <motion.span
                layoutId="active-bar"
                className="absolute top-[calc(50%-1.5px)] left-0 w-full h-[3px] bg-[#DC4540]"
                initial={false}
                animate={{ opacity: index === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
