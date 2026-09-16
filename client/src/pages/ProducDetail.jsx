import React, { useState } from 'react';

export default function ProductDetail() {
  // Estados para la interactividad
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Datos simulados del producto individual
  const product = {
    id: 1,
    name: 'Camiseta Técnica Oversize',
    category: 'Indumentaria / Hombre',
    price: '$35.00',
    description: 'Diseñada para el máximo rendimiento y confort. Esta camiseta oversize está fabricada con nuestra mezcla patentada de algodón peinado y elastano, ofreciendo un ajuste holgado que no compromete la movilidad durante tus levantamientos más pesados.',
    features: [
      'Tejido transpirable de secado rápido.',
      'Costuras reforzadas para mayor durabilidad.',
      'Corte oversize (recomendamos pedir tu talla habitual para un look holgado).',
      'Logo 4Evers reflectante en el pecho.'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
    ]
  };

  const handleQuantityChange = (type) => {
    if (type === 'decrease' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'increase' && quantity < 10) setQuantity(quantity + 1);
  };

  return (
    <div className="w-full text-zinc-100 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BREADCRUMBS (Migas de pan) */}
        <nav className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
          <span className="hover:text-white cursor-pointer transition-colors">Inicio</span> 
          <span className="mx-2">/</span> 
          <span className="hover:text-white cursor-pointer transition-colors">Tienda</span>
          <span className="mx-2">/</span> 
          <span className="text-lime-400">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* COLUMNA IZQUIERDA: Galería de Imágenes */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Miniaturas */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 shrink-0 hide-scrollbar">
              {product.images.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-[3/4] w-20 md:w-full rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === index ? 'border-lime-400' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Imagen Principal */}
            <div className="relative aspect-[3/4] w-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/5">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: Información y Compra */}
          <div className="w-full lg:w-1/2 flex flex-col py-4">
            <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
              {product.name}
            </h1>
            <span className="text-3xl font-bold text-zinc-300 mb-8">
              {product.price}
            </span>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Selector de Tallas */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-white">Talla</span>
                <button className="text-xs font-bold text-zinc-500 underline hover:text-lime-400 transition-colors">
                  Guía de tallas
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 flex items-center justify-center rounded-xl text-sm font-black transition-all ${
                      selectedSize === size 
                      ? 'bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]' 
                      : 'bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Cantidad y Botón de Añadir */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 sm:w-1/3">
                <button 
                  onClick={() => handleQuantityChange('decrease')}
                  className="text-zinc-400 hover:text-lime-400 p-2 transition-colors"
                >
                  -
                </button>
                <span className="text-white font-black">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange('increase')}
                  className="text-zinc-400 hover:text-lime-400 p-2 transition-colors"
                >
                  +
                </button>
              </div>
              
              <button className="flex-grow py-4 bg-lime-400 text-zinc-950 font-black text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                Añadir al Carrito - ${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}
              </button>
            </div>

            {/* Detalles Extra (Viñetas y Badges) */}
            <div className="border-t border-white/10 pt-8 mt-auto">
              <h3 className="text-xs font-black uppercase tracking-widest text-white mb-4">Características</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-lime-400 mt-1">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                <div className="flex items-center gap-2 bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                  <span className="text-lg">🚚</span> Envíos en 24/48h
                </div>
                <div className="flex items-center gap-2 bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                  <span className="text-lg">🔄</span> 30 Días de retorno
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}