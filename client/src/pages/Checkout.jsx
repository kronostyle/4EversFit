import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();

  // Estado del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'Venezuela',
    paymentMethod: 'stripe', // 'stripe' | 'paypal' | 'mercadopago'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulación del proceso de pago
    setTimeout(() => {
      setIsProcessing(false);
      alert('¡Pago procesado con éxito!');
      clearCart();
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-16 px-6 flex flex-col items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-lime-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Tu carrito está vacío</h2>
          <p className="text-zinc-400 text-sm mb-8">Agrega algunos productos antes de proceder a la pantalla de pago.</p>
          <Link
            to="/shop"
            className="inline-block w-full py-3.5 bg-lime-400 text-zinc-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-lime-300 transition-colors"
          >
            Ir a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-8">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-lime-400 transition-colors inline-flex items-center gap-2 mb-4">
            ← Volver a la tienda
          </Link>
          <h1 className="text-3xl font-black uppercase tracking-tight">Finalizar Compra</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* COLUMNA IZQUIERDA: FORMULARIOS (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. INFORMACIÓN PERSONAL */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-sm font-black uppercase tracking-widest text-lime-400 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-lime-400/10 text-lime-400 rounded-full flex items-center justify-center text-xs">1</span>
                Datos Personales
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1.5">Nombre</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1.5">Apellido</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="Pérez"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1.5">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="+58 412 000 0000"
                  />
                </div>
              </div>
            </div>

            {/* 2. DIRECCIÓN DE ENVÍO */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-sm font-black uppercase tracking-widest text-lime-400 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-lime-400/10 text-lime-400 rounded-full flex items-center justify-center text-xs">2</span>
                Dirección de Envío
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1.5">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                    placeholder="Av. Principal, Edificio / Casa #123"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1.5">Ciudad</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                      placeholder="Maturín"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1.5">Código Postal</label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                      placeholder="6201"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1.5">País</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                    >
                      <option value="Venezuela">Venezuela</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Chile">Chile</option>
                      <option value="México">México</option>
                      <option value="España">España</option>
                      <option value="Estados Unidos">Estados Unidos</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. MÉTODO DE PAGO */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-sm font-black uppercase tracking-widest text-lime-400 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-lime-400/10 text-lime-400 rounded-full flex items-center justify-center text-xs">3</span>
                Método de Pago
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* STRIPE / TARJETA */}
                <label className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'stripe' ? 'bg-lime-400/10 border-lime-400 text-lime-400' : 'bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/30'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="stripe"
                    checked={formData.paymentMethod === 'stripe'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-xs font-bold uppercase tracking-wider">Tarjeta (Stripe)</span>
                </label>

                {/* PAYPAL */}
                <label className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'paypal' ? 'bg-lime-400/10 border-lime-400 text-lime-400' : 'bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/30'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-xs font-bold uppercase tracking-wider">PayPal</span>
                </label>

                {/* MERCADO PAGO */}
                <label className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'mercadopago' ? 'bg-lime-400/10 border-lime-400 text-lime-400' : 'bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/30'}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mercadopago"
                    checked={formData.paymentMethod === 'mercadopago'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-xs font-bold uppercase tracking-wider">Mercado Pago</span>
                </label>

              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: RESUMEN DEL PEDIDO (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md sticky top-28">
              <h2 className="text-lg font-black uppercase tracking-tight mb-4 pb-4 border-b border-white/10">
                Resumen de Compra ({totalItems})
              </h2>

              {/* LISTA DE PRODUCTOS */}
              <div className="space-y-4 max-h-72 overflow-y-auto pr-2 mb-6 divide-y divide-white/5">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex items-center gap-4 pt-3 first:pt-0">
                    <img src={item.image} alt={item.title} className="w-14 h-14 object-cover rounded-lg border border-white/10 bg-zinc-950" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">{item.title}</p>
                      <p className="text-xs text-zinc-400">Talla: <span className="text-lime-400">{item.selectedSize}</span> | Cant: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* DETALLES DE PRECIO */}
              <div className="space-y-2 border-t border-white/10 pt-4 text-sm">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span className="text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Envío</span>
                  <span className="text-lime-400 font-semibold">Gratis</span>
                </div>
                <div className="flex justify-between text-base font-black text-white border-t border-white/10 pt-3">
                  <span>TOTAL</span>
                  <span className="text-lime-400">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* BOTÓN DE CONFIRMACIÓN */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full mt-6 py-4 bg-lime-400 text-zinc-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </>
                ) : (
                  `Pagar $${totalPrice.toFixed(2)}`
                )}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}