// components/ContactInterface.jsx  (déjà en Client Component)
'use client';

import React from 'react';

const ContactInterface = () => (
  <>
    <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-black min-h-screen">
      <div
        className="fixed inset-0 bg-repeat bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMjAiPjxzdHlsZT4uc3Qwe2ZpbGw6IzAwZmZlYTtvcGFjaXR5OjAuMjt9PC9zdHlsZT48cmVjdCBjbGFzcz0iczAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjIwIi8+PC9zdmc+')] 
                     animate-scanline opacity-30"
      ></div>

      <div className="relative max-w-4xl mx-auto p-6 md:p-12">
        <div className="relative bg-black bg-opacity-60 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-1 h-full bg-blue-500 opacity-20 left-1/4 transform -translate-x-1/2"></div>
            <div className="absolute w-1 h-full bg-purple-500 opacity-20 right-1/4 transform translate-x-1/2"></div>
            <div className="absolute h-1 w-full bg-pink-500 opacity-20 top-1/4 transform -translate-y-1/2"></div>
            <div className="absolute h-1 w-full bg-cyan-500 opacity-20 bottom-1/4 transform translate-y-1/2"></div>
          </div>

          <div className="relative z-10 space-y-8">
            <h1
              className="text-5xl md:text-6xl font-black text-transparent bg-clip-text 
                         bg-gradient-to-r from-cyan-400 to-purple-500 animate-neon-glow"
            >
              CONTACT<span className="text-pink-500">.</span>INTERFACE
            </h1>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="NAME"
                    className="block w-full bg-gray-800 bg-opacity-50 border border-transparent 
                               focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 
                               rounded-lg px-6 py-4 text-white placeholder-gray-400"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 
                                    transform scale-x-0 transition-transform duration-300 
                                    group-hover:scale-x-100"></div>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="block w-full bg-gray-800 bg-opacity-50 border border-transparent 
                               focus:border-purple-500 focus:ring-2 focus:ring-purple-500 
                               rounded-lg px-6 py-4 text-white placeholder-gray-400"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 
                                    transform scale-x-0 transition-transform duration-300 
                                    group-hover:scale-x-100"></div>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  placeholder="MESSAGE"
                  rows={4}
                  className="block w-full bg-gray-800 bg-opacity-50 border border-transparent 
                             focus:border-pink-500 focus:ring-2 focus:ring-pink-500 
                             rounded-lg px-6 py-4 text-white placeholder-gray-400"
                ></textarea>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 
                                  transform scale-x-0 transition-transform duration-300 
                                  group-hover:scale-x-100"></div>
              </div>

              <button
                type="submit"
                className="relative w-full md:w-auto px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 
                           rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-shadow 
                           group active:scale-95 transform"
              >
                <span>SEND DATA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 
                                  rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </button>
            </form>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <a href="#" className="group relative text-2xl text-white">
                <i className="fab fa-twitter"></i>
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 
                                  group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a href="#" className="group relative text-2xl text-white">
                <i className="fab fa-instagram"></i>
                <div className="absolute inset-0 rounded-full bg-pink-500 opacity-0 
                                  group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a href="#" className="group relative text-2xl text-white">
                <i className="fab fa-discord"></i>
                <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-0 
                                  group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a href="#" className="group relative text-2xl text-white">
                <i className="fab fa-youtube"></i>
                <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 
                                  group-hover:opacity-20 transition-opacity"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100vh; }
        }
        @keyframes hologram {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes neon-glow {
          0% { text-shadow: 0 0 5px #00ffea, 0 0 10px #00ffea; }
          50% { text-shadow: 0 0 15px #00ffea, 0 0 20px #00ffea; }
          100% { text-shadow: 0 0 5px #00ffea, 0 0 10px #00ffea; }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        .animate-neon-glow {
          animation: neon-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ContactInterface;
