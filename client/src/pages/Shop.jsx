import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Datos simulados del catálogo
  const products = [
    {
      id: 1,
      name: 'Camiseta Técnica Oversize',
      category: 'Indumentaria',
      price: '$35.00',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80',
      tag: 'Nuevo',
      isBestSeller: true
    },
    {
      id: 2,
      name: 'Short de Compresión Élite',
      category: 'Indumentaria',
      price: '$28.00',
      image: 'https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&w=600&q=80',
      tag: null,
      isBestSeller: false
    },
    {
      id: 3,
      name: 'Whey Protein Isolate - 2lbs',
      category: 'Suplementos',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80',
      tag: 'Más Vendido',
      isBestSeller: true
    },
    {
      id: 4,
      name: 'Muñequeras de Fuerza (Par)',
      category: 'Accesorios',
      price: '$18.00',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80',
      tag: null,
      isBestSeller: false
    },
    {
      id: 5,
      name: 'Hoodie 4Evers Premium',
      category: 'Indumentaria',
      price: '$55.00',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80',
      tag: 'Edición Limitada',
      isBestSeller: true
    },
    {
      id: 6,
      name: 'Creatina Monohidratada - 300g',
      category: 'Suplementos',
      price: '$25.00',
      image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=600&q=80',
      tag: null,
      isBestSeller: false
    }
  ];

  const categories = ['Todos', 'Indumentaria', 'Suplementos', 'Accesorios'];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const bestSellers = products.filter(p => p.isBestSeller);

  // Componente interno o función limpia para renderizar la tarjeta de producto de forma segura
  const renderProductCard = (item) => (
    <Link to={`/producto/${item.id}`} key={item.id} className="group cursor-pointer flex flex-col block">
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden mb-5 border border-white/5 group-hover:border-lime-400/30 transition-colors">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badge (Etiqueta) */}
        {item.tag && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-zinc-950/80 backdrop-blur-md border border-white/10 text-lime-400 text-[10px] font-black uppercase tracking-widest rounded-full">
              {item.tag}
            </span>
          </div>
        )}

        {/* Overlay Hover - Añadir al Carrito */}
        <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault(); 
              console.log(`Añadir al carrito rápido: ${item.name}`);
            }}
            className="w-full py-4 bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-widest rounded-xl translate-y-4 group-hover:translate-y-0 transition-all shadow-lg hover:bg-white hover:text-zinc-950"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>

      {/* Info del Producto */}
      <div className="flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
          {item.category}
        </span>
        <h3 className="text-lg font-black text-white leading-tight mb-2 group-hover:text-lime-400 transition-colors">
          {item.name}
        </h3>
        <div className="mt-auto">
          <span className="text-xl font-bold text-zinc-300">
            {item.price}
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="w-full text-zinc-100 min-h-screen pb-24">
      {/* HERO BANNER - TIENDA */}
      <div className="relative w-full min-h-[400px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-[2px] scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e07?auto=format&fit=crop&w=1920&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[3px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
          <span className="text-xs font-black tracking-widest px-4 py-2 rounded-xl bg-lime-400 text-zinc-950 inline-block uppercase shadow-[0_0_20px_rgba(163,230,53,0.4)] mb-4">
            4EVERS GEAR & NUTRITION
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase drop-shadow-lg mb-6">
            LA TIENDA
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Eleva tu rendimiento con nuestra línea exclusiva de indumentaria y suplementación premium.
          </p>
        </div>
      </div>

      {/* SECCIÓN 1: TRUST BADGES (Barra de Beneficios) */}
      <div className="bg-zinc-900/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center gap-2 py-2">
              <span className="text-2xl">📦</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Envíos a todo el país</span>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <span className="text-2xl">🔒</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Pagos 100% Seguros</span>
            </div>
            <div className="flex flex-col items-center gap-2 py-2">
              <span className="text-2xl">⚡</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest">Calidad Premium</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32 pt-20">
        
        {/* SECCIÓN 2: COLECCIONES DESTACADAS */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Performance<br/>Apparel</h3>
              <p className="text-zinc-300 text-sm mb-6">Indumentaria diseñada para resistir tus entrenamientos más exigentes.</p>
              <button type="button" className="px-6 py-3 bg-white text-zinc-950 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-lime-400 transition-colors">
                Ver Colección
              </button>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=800&q=80')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Nutrición<br/>Avanzada</h3>
              <p className="text-zinc-300 text-sm mb-6">Suplementos científicamente probados para acelerar tu recuperación.</p>
              <button type="button" className="px-6 py-3 bg-white text-zinc-950 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-lime-400 transition-colors">
                Ver Colección
              </button>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: LO MÁS VENDIDO */}
        <section>
          <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-1">ATLETAS FAVORITOS</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">LO MÁS VENDIDO</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {bestSellers.map((prod) => renderProductCard(prod))}
          </div>
        </section>

        {/* SECCIÓN 4: CATÁLOGO COMPLETO CON FILTROS */}
        <section id="catalogo">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
              EXPLORA EL <span className="text-lime-400">CATÁLOGO</span>
            </h2>
            <div className="w-16 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-zinc-900/30 p-4 rounded-2xl border border-white/5">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? 'bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]' 
                    : 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest self-start md:self-auto px-4">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((prod) => renderProductCard(prod))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="w-full py-24 flex flex-col items-center justify-center text-center border border-white/5 rounded-3xl bg-zinc-900/20 mt-8">
              <span className="text-4xl mb-4">🔍</span>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">No se encontraron productos</h3>
              <p className="text-zinc-400">Intenta seleccionando otra categoría.</p>
            </div>
          )}
        </section>

        {/* SECCIÓN 5: NEWSLETTER / LEAD CAPTURE */}
        <section className="relative rounded-3xl overflow-hidden border border-lime-400/30 bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-transparent"></div>
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 text-left">
              <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">ÚNETE AL CLUB</span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
                OBTÉN UN 10% DE DESCUENTO EN TU PRIMERA COMPRA
              </h3>
              <p className="text-zinc-400 text-sm">
                Suscríbete para recibir acceso anticipado a nuevas colecciones de 4Evers Gear, rutinas exclusivas y promociones especiales.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="flex-grow bg-zinc-950 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-colors whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}