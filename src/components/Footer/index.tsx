"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative mr-2">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-md blur-sm"></div>
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center relative shadow-lg shadow-indigo-800/20">
                <div className="absolute inset-[2px] bg-gray-900 rounded-[3px] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>
                  <div className="font-bold text-xs bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">XY</div>
                </div>
              </div>
            </div>
            <div className="text-lg font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center">
              XY Web Services
            </div>
          </div>

          <div className="flex justify-center mb-4 md:mb-0">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-400 hover:text-cyan-400 mx-2 transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <div className="flex space-x-3">
            {["twitter", "instagram", "linkedin"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-white hover:bg-indigo-800 transition-colors"
              >
                <span className="text-xs capitalize">{platform[0]}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} XY Web Services. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}