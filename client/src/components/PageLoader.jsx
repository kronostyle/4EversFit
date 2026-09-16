import React from 'react';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/95 backdrop-blur-md transition-opacity duration-300">
      <div className="flex flex-col items-center space-y-6 animate-pulse">
        
        {/* Ícono de levantamiento de pesas / músculos (SVG animado) */}
        <div className="w-20 h-20 rounded-2xl bg-lime-400 text-zinc-950 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.5)] animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-12 h-12" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.5"
          >
            {/* Representación de mancuerna / fuerza */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 7h11M6.5 17h11M4 10h2v4H4v-4zm14 0h2v4h-2v-4zM2 11h2v2H2v-2zm18 0h2v2h-2v-2zM9 9h6v6H9V9z" />
          </svg>
        </div>

        {/* Nombre de la marca */}
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-widest text-white">
            4EVERS <span className="text-lime-400">GYM</span>
          </h2>
          <p className="text-xs text-zinc-400 tracking-wider uppercase mt-1">Preparando tu entrenamiento...</p>
        </div>

        {/* Barra de carga sutil */}
        <div className="w-48 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="w-full h-full bg-lime-400 animate-[indeterminate_1s_infinite_linear]" style={{
            backgroundImage: 'linear-gradient(to right, transparent, #a3e635, transparent)',
            animation: 'shimmer 1.5s infinite'
          }}></div>
        </div>
      </div>
    </div>
  );
}