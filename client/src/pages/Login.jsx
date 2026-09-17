import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de autenticación (aquí conectaremos con Neon / Backend más adelante)
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        {/* ENCABEZADO */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
            Iniciar <span className="text-lime-400">Sesión</span>
          </h1>
          <p className="text-xs text-zinc-400 tracking-wider uppercase">
            Ingresa a tu cuenta para gestionar tus pedidos y entrenamiento
          </p>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* EMAIL */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
            />
          </div>

          {/* CONTRASEÑA */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider">
                Contraseña
              </label>
              <a href="#forgot" className="text-[11px] text-lime-400 hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a8.982 8.982 0 013.682-.787c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-1.583 1.583c-1.042.502-2.22.787-3.468.787-4.478 0-8.268-2.943-9.543-7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* BOTÓN SUBMIT */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-lime-400 text-zinc-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] flex justify-center items-center mt-6"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
            ) : (
              'Ingresar a mi cuenta'
            )}
          </button>
        </form>

        {/* PIE / LINK A REGISTRO */}
        <div className="mt-8 text-center pt-6 border-t border-white/5">
          <p className="text-xs text-zinc-400">
            ¿Aún no tienes una cuenta?{' '}
            <Link to="/register" className="text-lime-400 font-bold hover:underline ml-1">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}