import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  // Bloquear el scroll del body cuando el drawer está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Manejar la redirección al checkout
  const handleGoToCheckout = () => {
    onClose(); // Primero cerramos el panel
    navigate('/checkout'); // Redirigimos a la página de pago
  };

  return (
    <>
      {/* OVERLAY OSCURO (Fondo clickeable para cerrar) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      {/* DRAWER / PANEL LATERAL */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-zinc-950 border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* ENCABEZADO DEL DRAWER */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2">
            Tu Carrito 
            <span className="bg-lime-400 text-zinc-950 text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-lime-400 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors"
            aria-label="Cerrar carrito"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* CONTENIDO DEL CARRITO */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-500 space-y-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-zinc-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-sm font-semibold uppercase tracking-widest text-center">Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 bg-zinc-900/50 p-3 rounded-2xl border border-white/5">
                {/* Imagen del producto */}
                <div className="w-20 h-24 shrink-0 bg-zinc-800 rounded-xl overflow-hidden border border-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Detalles e interactividad */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-white leading-tight line-clamp-2">{item.title}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-zinc-500 hover:text-red-400 transition-colors ml-2"
                        aria-label="Eliminar producto"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 uppercase">Talla: <span className="text-lime-400 font-bold">{item.selectedSize}</span></p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    {/* Control de cantidad */}
                    <div className="flex items-center bg-zinc-950 border border-white/10 rounded-lg h-8">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        className="px-2.5 text-zinc-400 hover:text-lime-400 transition-colors"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-white w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        className="px-2.5 text-zinc-400 hover:text-lime-400 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    {/* Precio individual * cantidad */}
                    <p className="text-sm font-black text-white">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* PIE DEL DRAWER (Total y Botón de Pago) */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-zinc-950/80 backdrop-blur-md">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Total Estimado</span>
              <span className="text-2xl font-black text-lime-400">${totalPrice.toFixed(2)}</span>
            </div>
            
            <button
              onClick={handleGoToCheckout}
              className="w-full py-4 bg-lime-400 text-zinc-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] flex justify-center items-center gap-2"
            >
              Proceder al Pago
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}