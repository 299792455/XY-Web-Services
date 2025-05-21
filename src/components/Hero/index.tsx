"use client";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl" />
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent pb-2 relative">
              XY Web Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-8">
            Interfaces sur-mesure pour mettre en valeur votre savoir-faire dans l’univers digital.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300 transform group-hover:scale-105 group-active:scale-95">
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">Nos Services</span>
              </button>
            </div>
            <button className="px-6 py-3 bg-transparent border border-cyan-500/30 rounded-lg text-cyan-400 text-base font-medium flex items-center justify-center gap-2 hover:bg-cyan-900/10 hover:border-cyan-500/50 transition-all duration-300">
              Notre Projet
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}