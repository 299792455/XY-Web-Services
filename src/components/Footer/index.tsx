"use client";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/30 px-3 py-1 bg-gray-900"> 
        <div className="flex items-center text-center justify-center max-w-7xl mx-auto">
          <div className="textl-l font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          © {new Date().getFullYear()} XY Web Services. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}