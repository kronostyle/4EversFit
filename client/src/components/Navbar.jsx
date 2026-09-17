import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Clases', path: '/clases' },
    { name: 'Personal Training', path: '/personal-training' },
    { name: 'Entrenadores', path: '/trainers' },
    { name: 'Planes', path: '/plans' },
    { name: 'Tienda', path: '/shop' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="text-2xl font-black uppercase tracking-tighter text-white">
            4EVERS<span className="text-lime-400">.</span>
          </Link>

          {/* NAVEGACIÓN DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'text-lime-400'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ACCIONES (ICONO USUARIO + CARRITO + MENÚ MÓVIL) */}
          <div className="flex items-center gap-4">
            
            {/* ICONO ACCESO DE USUARIO (LOGIN / REGISTER) */}
            <Link
              to="/login"
              aria-label="Acceso de usuario"
              className={`p-2.5 rounded-xl border transition-all flex items-center justify-center ${
                isActive('/login') || isActive('/register')
                  ? 'bg-lime-400 text-zinc-950 border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                  : 'bg-zinc-900 border-white/10 text-zinc-300 hover:text-lime-400 hover:border-lime-400/50'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* BOTÓN CARRITO */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Ver carrito"
              className="p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-zinc-300 hover:text-lime-400 hover:border-lime-400/50 transition-all relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-lime-400 text-zinc-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* BOTÓN HAMBURGUESA (MÓVIL) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú"
              className="md:hidden p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-zinc-300 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-zinc-950 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-bold uppercase ${
                  isActive(link.path)
                    ? 'bg-lime-400/10 text-lime-400'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* COMPONENTE DRAWER DEL CARRITO */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}