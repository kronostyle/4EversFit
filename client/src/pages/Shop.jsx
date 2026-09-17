import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'low-high', 'high-low'

  // Catálogo completo de productos
  const products = [
    {
      id: 1,
      name: 'Camiseta Técnica Oversize',
      category: 'Indumentaria',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80',
      tag: 'Nuevo',
      isBestSeller: true
    },
    {
      id: 2,
      name: 'Short de Compresión Élite',
      category: 'Indumentaria',
      price: 28.00,
      image: 'https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&w=600&q=80',
      tag: null,
      isBestSeller: false
    },
    {
      id: 3,
      name: 'Whey Protein Isolate - 2lbs',
      category: 'Suplementos',
      price: 45.00,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80',
      tag: 'Más Vendido',
      isBestSeller: true
    },
    {
      id: 4,
      name: 'Muñequeras de Fuerza (Par)',
      category: 'Accesorios',
      price: 18.00,
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80',
      tag: null,
      isBestSeller: false
    },
    {
      id: 5,
      name: 'Hoodie 4Evers Premium',
      category: 'Indumentaria',
      price: 55.00,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80',
      tag: 'Edición Limitada',
      isBestSeller: true
    },
    {
      id: 6,
      name: 'Creatina Monohidratada - 300g',
      category: 'Suplementos',
      price: 25.00,
      image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=600&q=80',
      tag: null,
      isBestSeller: false
    }
  ];

  const categories = ['Todos', 'Indumentaria', 'Suplementos', 'Accesorios'];

  // Lógica de filtrado y ordenamiento
  const filteredProducts = products
    .filter(product => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price;
      if (sortBy === 'high-low') return b.price - a.price;
      return 0;
    });

  const bestSellers = products.filter(p => p.isBestSeller);

  const renderProductCard = (item) => (
    <Link to={`/producto/${item.id}`} key={item.id} className="group cursor-pointer flex flex-col block">
      <div className="relative aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden mb-5 border border-white/5 group-hover:border-lime-400/30 transition-colors">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {item.tag && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-zinc-950/80 backdrop-blur-md border border-white/10 text-lime-400 text-[10px] font-black uppercase tracking-widest rounded-full">
              {item.tag}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addToCart(item, 'U', 1);
            }}
            className="w-full py-4 bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-widest rounded-xl translate-y-4 group-hover:translate-y-0 transition-all shadow-lg hover:bg-white hover:text-zinc-950"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
          {item.category}
        </span>
        <h3 className="text-lg font-black text-white leading-tight mb-2 group-hover:text-lime-400 transition-colors">
          {item.name}
        </h3>
        <div className="mt-auto">
          <span className="text-xl font-bold text-zinc-300">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="w-full text-zinc-100 min-h-screen pb-24">
      {/* 1. HERO BANNER */}
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

      <div className="max-w-7xl mx-auto px-6 space-y-24 pt-16">
        
        {/* 2. LO MÁS VENDIDO */}
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

        {/* 3. CATÁLOGO COMPLETO */}
        <section id="catalogo">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
              EXPLORA EL <span className="text-lime-400">CATÁLOGO</span>
            </h2>
            <div className="w-16 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-4 bg-zinc-900/40 border border-white/10 p-5 rounded-3xl backdrop-blur-xl">
            <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? 'bg-lime-400 text-zinc-950 shadow-[0_0_15px_rgba(163,230,53,0.3)]' 
                    : 'bg-zinc-950/60 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Buscar producto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors w-full sm:w-52"
              />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-lime-400 transition-colors cursor-pointer"
              >
                <option value="default">Ordenar por: Destacados</option>
                <option value="low-high">Precio: Menor a Mayor</option>
                <option value="high-low">Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mb-8 px-2">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-zinc-900/30 border border-white/10 rounded-3xl p-16 text-center space-y-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-zinc-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-sm font-bold text-zinc-300 uppercase tracking-widest">No se encontraron productos</p>
              <p className="text-xs text-zinc-500">Intenta buscando con otro término o cambiando de categoría.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((prod) => renderProductCard(prod))}
            </div>
          )}
        </section>

        {/* 4. COLECCIONES DESTACADAS (MOVILIZADAS AL FINAL) */}
        <section className="grid md:grid-cols-2 gap-6 pt-10 border-t border-white/10">
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Performance<br/>Apparel</h3>
              <p className="text-zinc-300 text-sm mb-6">Indumentaria diseñada para resistir tus entrenamientos más exigentes.</p>
              <button 
                type="button" 
                onClick={() => {
                  setActiveCategory('Indumentaria');
                  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white text-zinc-950 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-lime-400 transition-colors"
              >
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
              <button 
                type="button" 
                onClick={() => {
                  setActiveCategory('Suplementos');
                  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white text-zinc-950 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-lime-400 transition-colors"
              >
                Ver Colección
              </button>
            </div>
          </div>
        </section>

        {/* 5. TRUST BADGES (UBICADOS AL CIERRE DE LA PÁGINA) */}
        <section className="bg-zinc-900/50 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
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
        </section>

      </div>
    </div>
  );
}