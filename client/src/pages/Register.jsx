import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setIsLoading(true);

    // Simulación de creación de usuario
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1200);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        {/* ENCABEZADO */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white mb-2">
            Crear <span className="text-lime-400">Cuenta</span>
          </h1>
          <p className="text-xs text-zinc-400 tracking-wider uppercase">
            Únete a la comunidad y empieza a entrenar hoy
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center rounded-xl font-semibold">
            {error}
          </div>
        )}

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NOMBRE */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan Pérez"
              className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
            />
          </div>

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
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                minLength={6}
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

          {/* CONFIRMAR CONTRASEÑA */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              Confirmar Contraseña
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
            />
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
              'Crear mi cuenta'
            )}
          </button>
        </form>

        {/* PIE / LINK A LOGIN */}
        <div className="mt-8 text-center pt-6 border-t border-white/5">
          <p className="text-xs text-zinc-400">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="text-lime-400 font-bold hover:underline ml-1">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}