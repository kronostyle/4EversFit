import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('membership'); // 'membership', 'orders', 'settings'
  const navigate = useNavigate();

  // Datos simulados de usuario
  const [user, setUser] = useState({
    name: 'Antonio Azaf',
    email: 'antonio@example.com',
    phone: '+58 412 000 0000',
    memberSince: 'Enero 2026',
  });

  // Datos simulados de membresía
  const activePlan = {
    name: 'Plan Personalizado Pro',
    type: 'Personal Training + Nutrición',
    status: 'Activo',
    renewsOn: '15 de Octubre, 2026',
    trainer: 'Carlos Mendoza',
    progress: 68, // Porcentaje del mes completado
  };

  // Datos simulados de historial de compras
  const mockOrders = [
    {
      id: 'ORD-84920',
      date: '10 Sep 2026',
      total: 55.00,
      status: 'Entregado',
      items: [
        { name: 'Franela Oversize Heavyweight', size: 'L', qty: 1, price: 25.00 },
        { name: 'Gorra Tactical 4EVERS', size: 'Única', qty: 1, price: 30.00 },
      ],
    },
    {
      id: 'ORD-73119',
      date: '28 Ago 2026',
      total: 45.00,
      status: 'En camino',
      items: [
        { name: 'Whey Protein Isolate 2kg', size: 'Vainilla', qty: 1, price: 45.00 },
      ],
    },
  ];

  const handleLogout = () => {
    // Aquí se limpiará la sesión en el backend / localStorage más adelante
    navigate('/login');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* ENCABEZADO DEL PERFIL */}
      <div className="bg-zinc-900/60 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 text-zinc-950 font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg shadow-lime-400/20 shrink-0">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-black text-white">{user.name}</h1>
              <span className="bg-lime-400/10 text-lime-400 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase border border-lime-400/20">
                Miembro PRO
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">{user.email} • Cliente desde {user.memberSince}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl text-xs font-bold text-zinc-400 hover:text-red-400 hover:border-red-400/30 transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar Sesión
        </button>
      </div>

      {/* PESTAÑAS DE NAVEGACIÓN */}
      <div className="flex border-b border-white/10 space-x-6 mb-8 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveTab('membership')}
          className={`pb-4 text-xs font-extrabold uppercase tracking-widest transition-all relative whitespace-nowrap ${
            activeTab === 'membership' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Mi Plan / Membresía
          {activeTab === 'membership' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 rounded-full" />}
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`pb-4 text-xs font-extrabold uppercase tracking-widest transition-all relative whitespace-nowrap ${
            activeTab === 'orders' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Historial de Compras ({mockOrders.length})
          {activeTab === 'orders' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 rounded-full" />}
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`pb-4 text-xs font-extrabold uppercase tracking-widest transition-all relative whitespace-nowrap ${
            activeTab === 'settings' ? 'text-lime-400' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Ajustes de Cuenta
          {activeTab === 'settings' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 rounded-full" />}
        </button>
      </div>

      {/* CONTENIDO DE PESTAÑA: MEMBRESÍA */}
      {activeTab === 'membership' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-zinc-900/40 border border-white/10 p-6 sm:p-8 rounded-3xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-extrabold text-lime-400 uppercase tracking-widest">Plan Actual</span>
                <h2 className="text-2xl font-black text-white mt-1">{activePlan.name}</h2>
                <p className="text-xs text-zinc-400">{activePlan.type}</p>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full">
                {activePlan.status}
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-zinc-400 uppercase">Progreso del Mes</span>
                  <span className="text-white">{activePlan.progress}%</span>
                </div>
                <div className="w-full bg-zinc-950 rounded-full h-2.5 overflow-hidden border border-white/5">
                  <div className="bg-lime-400 h-full rounded-full" style={{ width: `${activePlan.progress}%` }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                <div>
                  <span className="text-zinc-500 uppercase block font-semibold">Próxima Renovación</span>
                  <span className="text-white font-bold">{activePlan.renewsOn}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase block font-semibold">Entrenador Asignado</span>
                  <span className="text-white font-bold">{activePlan.trainer}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-3 bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl hover:bg-lime-300 transition-colors">
                Renovar o Cambiar Plan
              </button>
              <button className="px-5 py-3 bg-zinc-950 border border-white/10 text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-xl hover:text-white transition-colors">
                Contactar Entrenador
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-lime-400/20 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black uppercase text-white mb-2">Rutina de Hoy</h3>
              <p className="text-xs text-zinc-400 mb-6">Hipertrofia - Pecho y Tríceps (Semana 3)</p>
              
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-400" /> Press de Banca Plano: 4x8
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-400" /> Press Inclinado c/ Mancuernas: 3x10
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-400" /> Fondos en Paralelas: 3xFallo
                </li>
              </ul>
            </div>

            <button className="w-full mt-6 py-3 bg-zinc-900 border border-white/10 text-lime-400 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors">
              Ver Rutina Completa
            </button>
          </div>
        </div>
      )}

      {/* CONTENIDO DE PESTAÑA: PEDIDOS */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-zinc-900/40 border border-white/10 p-6 rounded-3xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/5 gap-2">
                <div>
                  <span className="text-sm font-black text-white">{order.id}</span>
                  <span className="text-xs text-zinc-500 ml-3">{order.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                    order.status === 'Entregado' 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {order.status}
                  </span>
                  <span className="text-sm font-black text-lime-400">${order.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-zinc-300 font-medium">
                      {item.qty}x {item.name} <span className="text-zinc-500">({item.size})</span>
                    </span>
                    <span className="text-zinc-400 font-bold">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CONTENIDO DE PESTAÑA: AJUSTES */}
      {activeTab === 'settings' && (
        <div className="max-w-2xl bg-zinc-900/40 border border-white/10 p-6 sm:p-8 rounded-3xl">
          <h2 className="text-lg font-black uppercase text-white mb-6">Editar Datos Personales</h2>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">Nombre Completo</label>
              <input 
                type="text" 
                value={user.name} 
                onChange={(e) => setUser({...user, name: e.target.value})}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">Correo Electrónico</label>
              <input 
                type="email" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">Teléfono</label>
              <input 
                type="text" 
                value={user.phone} 
                onChange={(e) => setUser({...user, phone: e.target.value})}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
              />
            </div>

            <button 
              type="submit" 
              className="mt-4 px-6 py-3 bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl hover:bg-lime-300 transition-colors"
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      )}

    </div>
  );
}