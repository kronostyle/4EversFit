import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  // Datos simulados del pedido recién completado (luego vendrán del estado de la pasarela o backend)
  const orderDetails = {
    orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    email: 'cliente@ejemplo.com',
    total: 55.00,
    paymentMethod: 'Tarjeta de Crédito / Stripe',
    items: [
      { name: 'Franela Oversize Heavyweight', size: 'L', quantity: 1, price: 25.00 },
      { name: 'Gorra Tactical 4EVERS', size: 'Única', quantity: 1, price: 30.00 }
    ]
  };

  return (
    <div className="min-h-[85vh] bg-zinc-950 text-white pt-28 pb-16 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-zinc-900/50 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        
        {/* EFECTO DE LUZ DE FONDO */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* ICONO DE ÉXITO */}
        <div className="w-20 h-20 bg-lime-400/10 border border-lime-400/20 text-lime-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(163,230,53,0.15)]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* TÍTULOS */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
            ¡Pago Exitoso!
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight mt-3 mb-2">Gracias por tu compra</h1>
          <p className="text-xs text-zinc-400 uppercase tracking-wider">
            Hemos recibido tu pedido y estamos preparando todo para el envío.
          </p>
        </div>

        {/* DETALLES GENERALES DEL PEDIDO */}
        <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-5 mb-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">Número de Pedido</span>
            <span className="text-xs font-black text-white">{orderDetails.orderId}</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">Fecha</span>
            <span className="text-xs font-black text-white">{orderDetails.date}</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">Total Pagado</span>
            <span className="text-xs font-black text-lime-400">${orderDetails.total.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-bold">Método</span>
            <span className="text-xs font-black text-white truncate block">{orderDetails.paymentMethod}</span>
          </div>
        </div>

        {/* RESUMEN DE PRODUCTOS */}
        <div className="space-y-3 mb-8">
          <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-3">Artículos del Pedido</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-zinc-950/40 border border-white/5 p-3.5 rounded-xl text-xs">
                <div>
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-zinc-500">Talla: <span className="text-lime-400">{item.size}</span> | Cant: {item.quantity}</p>
                </div>
                <span className="font-black text-white">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTONES DE ACCIÓN */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
          <Link
            to="/profile"
            className="flex-1 py-3.5 bg-lime-400 text-zinc-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-lime-300 transition-all text-center shadow-[0_0_20px_rgba(163,230,53,0.3)]"
          >
            Ver mis pedidos
          </Link>
          <Link
            to="/shop"
            className="flex-1 py-3.5 bg-zinc-950 border border-white/10 text-zinc-300 font-bold uppercase text-xs tracking-widest rounded-xl hover:text-white hover:border-white/20 transition-all text-center"
          >
            Seguir comprando
          </Link>
        </div>

      </div>
    </div>
  );
}