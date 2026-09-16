import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams(); // Obtenemos el ID de la URL
  
  // Estados para la interactividad
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Todo el catálogo simulado para poder buscar por ID
  const allProducts = [
    {
      id: 1,
      name: 'Camiseta Técnica Oversize',
      category: 'Indumentaria',
      price: '$35.00',
      description: 'Diseñada para el máximo rendimiento y confort. Esta camiseta oversize está fabricada con nuestra mezcla patentada de algodón peinado y elastano, ofreciendo un ajuste holgado que no compromete la movilidad durante tus levantamientos más pesados.',
      features: ['Tejido transpirable de secado rápido.', 'Costuras reforzadas.', 'Corte oversize.', 'Logo reflectante.'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      images: [
        'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 2,
      name: 'Short de Compresión Élite',
      category: 'Indumentaria',
      price: '$28.00',
      description: 'Optimiza tu circulación y reduce la fatiga muscular. Ideales para entrenamientos de alta intensidad.',
      features: ['Compresión graduada.', 'Bolsillo lateral oculto.', 'Banda elástica anti-deslizante.'],
      sizes: ['S', 'M', 'L', 'XL'],
      images: [
        'https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 3,
      name: 'Whey Protein Isolate - 2lbs',
      category: 'Suplementos',
      price: '$45.00',
      description: 'Proteína aislada de suero de leche de altísima pureza. 25g de proteína por servicio con cero azúcares añadidos.',
      features: ['Absorción ultra rápida.', 'Enriquecida con BCAAs.', 'Sabor a chocolate suizo.'],
      sizes: ['2 lbs', '5 lbs'],
      images: [
        'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 4,
      name: 'Muñequeras de Fuerza (Par)',
      category: 'Accesorios',
      price: '$18.00',
      description: 'Soporte rígido para tus articulaciones durante levantamientos pesados como press de banca o press militar.',
      features: ['Velcro de grado industrial.', 'Bucle para el pulgar.', 'Material elástico de alta densidad.'],
      sizes: ['Estándar'],
      images: [
        'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 5,
      name: 'Hoodie 4Evers Premium',
      category: 'Indumentaria',
      price: '$55.00',
      description: 'El clásico reinventado. Interior abrigado, exterior resistente al desgaste, ideal para calentar o para el día a día.',
      features: ['Algodón premium pesado.', 'Capucha de doble forro.', 'Bolsillo canguro amplio.'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      images: [
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 6,
      name: 'Creatina Monohidratada - 300g',
      category: 'Suplementos',
      price: '$25.00',
      description: '100% Creatina Monohidratada pura. Mejora la fuerza, la potencia y estimula el crecimiento muscular magro.',
      features: ['60 servicios por envase.', 'Sin sabor (fácil de mezclar).', 'Micronizada para mejor absorción.'],
      sizes: ['300g', '500g'],
      images: [
        'https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  // Buscamos el producto específico usando el ID de la URL
  const product = allProducts.find(p => p.id === parseInt(id));

  // Manejo de error si el ID no existe
  if (!product) {
    return (
      <div className="w-full text-zinc-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black uppercase text-white mb-4">Producto no encontrado</h1>
        <Link to="/tienda" className="text-lime-400 hover:underline font-bold">Volver a la tienda</Link>
      </div>
    );
  }

  const handleQuantityChange = (type) => {
    if (type === 'decrease' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'increase' && quantity < 10) setQuantity(quantity + 1);
  };

  return (
    <div className="w-full text-zinc-100 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BREADCRUMBS (Migas de pan) conectadas */}
        <nav className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-white cursor-pointer transition-colors">Inicio</Link> 
          <span className="mx-2">/</span> 
          <Link to="/tienda" className="hover:text-white cursor-pointer transition-colors">Tienda</Link>
          <span className="mx-2">/</span> 
          <span className="text-lime-400">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* COLUMNA IZQUIERDA: Galería de Imágenes */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
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
            
            <div className="relative aspect-[3/4] w-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/5">
              {/* Se valida si existe la imagen activa para evitar errores si un producto solo tiene 1 imagen */}
              <img 
                src={product.images[activeImage] || product.images[0]} 
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

            {/* Selector de Tallas/Variantes */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-black uppercase tracking-widest text-white">Variante / Talla</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-14 px-6 flex items-center justify-center rounded-xl text-sm font-black transition-all ${
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
              
              <button 
                onClick={() => console.log(`Añadido: ${quantity} x ${product.name} (${selectedSize})`)}
                className="flex-grow py-4 bg-lime-400 text-zinc-950 font-black text-sm uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)]"
              >
                Añadir al Carrito - ${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}
              </button>
            </div>

            {/* Detalles Extra */}
            <div className="border-t border-white/10 pt-8 mt-auto">
              <h3 className="text-xs font-black uppercase tracking-widest text-white mb-4">Características</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-lime-400 mt-1">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}