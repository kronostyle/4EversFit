import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Mock Database de productos
  const products = [
    {
      id: 1,
      name: 'Camiseta Técnica Oversize',
      category: 'Indumentaria',
      price: '$35.00',
      description: 'Diseñada con algodón peinado ultrasuave y fibras elásticas de alta resistencia. Corte oversized que otorga libertad total de movimiento durante los levantamientos más pesados.',
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
      details: ['95% Algodón Premium, 5% Elastano', 'Tejido transpirable de secado rápido', 'Ajuste holgado deportivo', 'Estampado de alta durabilidad']
    },
    {
      id: 2,
      name: 'Short de Compresión Élite',
      category: 'Indumentaria',
      price: '$28.00',
      description: 'Soporte muscular óptimo para entrenamientos de alta intensidad. Minimiza la fatiga articular y previene rozaduras.',
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&w=800&q=80',
      details: ['Compresión graduada', 'Bolsillo lateral para smartphone', 'Cintura elástica antiderrapante']
    },
    {
      id: 3,
      name: 'Whey Protein Isolate - 2lbs',
      category: 'Suplementos',
      price: '$45.00',
      description: 'Aislado de proteína de suero de máxima pureza. 25g de proteína por porción con absorción ultra rápida para optimizar la síntesis proteica post-entrenamiento.',
      sizes: ['Única'],
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80',
      details: ['25g Proteína por scoop', '0g Azúcares añadidos', 'Fácil digestión', 'Sabor Chocolate Suizo']
    },
    {
      id: 4,
      name: 'Muñequeras de Fuerza (Par)',
      category: 'Accesorios',
      price: '$18.00',
      description: 'Estabilidad extrema para tus muñecas en empujes pesados de press banca y overhead. Cierre de velcro grado militar.',
      sizes: ['Única'],
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
      details: ['Elástico denso reforzado', 'Presilla de pulgar de seguridad', '45cm de longitud total']
    },
    {
      id: 5,
      name: 'Hoodie 4Evers Premium',
      category: 'Indumentaria',
      price: '$55.00',
      description: 'Abastecimiento térmico ideal para antes y después de entrenar. Interior afelpado extremadamente cálido y confortable.',
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
      details: ['Algodón fleece pesado', 'Capucha estructurada de doble capa', 'Bolsillo canguro frontal']
    },
    {
      id: 6,
      name: 'Creatina Monohidratada - 300g',
      category: 'Suplementos',
      price: '$25.00',
      description: '100% Creatina micronizada de máxima solubilidad. Aumenta la potencia explosiva, la fuerza máxima y el volumen celular.',
      sizes: ['Única'],
      image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=800&q=80',
      details: ['300g - 60 Servicios', '5g de creatina pura por scoop', 'Sin saborizantes ni rellenos']
    }
  ];

  const product = products.find(p => p.id === parseInt(id)) || products[0];

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="w-full text-zinc-100 min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
          <Link to="/shop" className="hover:text-lime-400 transition-colors">Tienda</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-zinc-300">{product.name}</span>
        </div>

        {/* DETALLE PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* IMAGEN PRINCIPAL */}
          <div className="relative aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* INFORMACIÓN DEL PRODUCTO */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-black text-lime-400 uppercase tracking-widest mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
              {product.name}
            </h1>
            <div className="text-2xl font-black text-zinc-200 mb-6">
              {product.price}
            </div>

            <p className="text-zinc-400 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* SELECTOR DE TALLA (si aplica) */}
            {product.sizes.length > 0 && product.sizes[0] !== 'Única' && (
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-3">
                  Seleccionar Talla:
                </label>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${
                        selectedSize === size
                          ? 'bg-lime-400 text-zinc-950 border-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                          : 'bg-zinc-900 text-zinc-400 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CANTIDAD Y BOTÓN DE AÑADIR */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-between bg-zinc-900 border border-white/10 rounded-xl p-2 w-full sm:w-36">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white font-black text-lg"
                >
                  -
                </button>
                <span className="font-black text-zinc-100">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white font-black text-lg"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-grow py-4 bg-lime-400 text-zinc-950 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg shadow-lime-400/10 flex items-center justify-center gap-2"
              >
                <span>Añadir al Carrito</span>
                <span>•</span>
                <span>
                  ${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}
                </span>
              </button>
            </div>

            {/* AVISO DE CONFIRMACIÓN */}
            {addedToast && (
              <div className="p-4 bg-lime-400/10 border border-lime-400/30 rounded-xl text-lime-400 text-xs font-bold uppercase tracking-widest text-center animate-fade-in mb-6">
                ✓ Producto añadido correctamente al carrito
              </div>
            )}

            {/* ESPECIFICACIONES */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-300">Características:</h4>
              <ul className="space-y-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="text-xs text-zinc-400 flex items-center gap-2">
                    <span className="text-lime-400">•</span> {detail}
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