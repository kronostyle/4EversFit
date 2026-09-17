import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-zinc-950 text-white px-6 flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        
        {/* NÚMERO 404 ESTILIZADO */}
        <div className="relative mb-6">
          <span className="text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-lime-400 bg-lime-400/10 border border-lime-400/20 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(163,230,53,0.2)]">
              Página no encontrada
            </span>
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">
          Te has salido del <span className="text-lime-400">camino</span>
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 uppercase tracking-wider mb-8 leading-relaxed">
          La página que buscas no existe, fue movida o el enlace es incorrecto. Regresa a la zona principal para continuar.
        </p>

        {/* ACCIONES */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="py-3.5 px-6 bg-lime-400 text-zinc-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] text-center"
          >
            Volver al inicio
          </Link>
          <Link
            to="/shop"
            className="py-3.5 px-6 bg-zinc-900 border border-white/10 text-zinc-300 font-bold uppercase text-xs tracking-widest rounded-xl hover:text-white hover:border-white/20 transition-all text-center"
          >
            Ir a la tienda
          </Link>
        </div>

      </div>
    </div>
  );
}