import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.location.hash = '#contact';
      }, 100);
    } else {
      window.location.hash = '#contact';
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="w-full border-b border-white/5 bg-zinc-950/90 text-xs text-zinc-400 py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div>E-mail: <span className="text-zinc-200">contacto@4eversgym.cl</span></div>
          <div className="flex items-center gap-6">
            <span>Teléfono: <span className="text-zinc-200">+56 9 1234 5678</span></span>
            <div className="hidden sm:flex items-center gap-2">
              {['FB', 'IG', 'TW', 'YT'].map((s) => (
                <a key={s} href="#" className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center text-[10px] text-lime-400 border border-white/15 hover:border-lime-400">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-wider text-white flex items-center gap-2 opacity-95">
            <span className="bg-lime-400 text-zinc-950 px-2 py-0.5 rounded-lg text-lg">4E</span>
            4EVERS <span className="text-lime-400 font-light">GYM</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <Link to="/" className="hover:text-lime-400">Inicio</Link>
            <Link to="/clases" className="hover:text-lime-400">Clases</Link>
            <Link to="/personal-training" className="hover:text-lime-400">Personal Training</Link>
            <Link to="/trainers" className="hover:text-lime-400">Entrenadores</Link>
            <Link to="/plans" className="hover:text-lime-400">Planes</Link>
            <Link to="/contact" className="hover:text-lime-400">Contacto</Link>
            <Link to="/shop" className="hover:text-lime-400">Tienda</Link>
          </nav>

          <button onClick={goToContact} className="px-5 py-2.5 rounded-2xl bg-zinc-800 text-lime-400 font-bold text-xs border border-white/10 shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.6),inset_3px_3px_6px_rgba(255,255,255,0.08)] cursor-pointer">
            ÚNETE AHORA
          </button>
        </div>
      </header>
    </>
  );
}