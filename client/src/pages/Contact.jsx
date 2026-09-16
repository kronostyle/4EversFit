import React, { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulamos el envío del formulario
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };

  const faqs = [
    {
      q: '¿Cuánto tardan en responder?',
      a: 'Nuestro equipo de soporte suele contactarte en un plazo máximo de 24 horas hábiles.'
    },
    {
      q: '¿Puedo agendar una visita de prueba?',
      a: 'Sí, escríbenos seleccionando "Visita de Prueba" en el asunto y te coordinaremos un pase de 1 día.'
    },
    {
      q: '¿Tienen soporte para compras de ropa?',
      a: 'Absolutamente. Si tienes dudas con tu pedido de 4Evers Gear, envíanos tu número de orden en el mensaje.'
    }
  ];

  return (
    <div className="w-full text-zinc-100">
      
      {/* HERO BANNER */}
      <div className="relative w-full min-h-[400px] sm:min-h-[480px] flex items-center justify-center overflow-hidden border-b border-white/10 mb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-[2px] scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593079831268-3381b0c4239b?auto=format&fit=crop&w=1920&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[3px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16">
          <span className="text-xs font-black tracking-widest px-4 py-2 rounded-xl bg-lime-400 text-zinc-950 inline-block uppercase shadow-[0_0_20px_rgba(163,230,53,0.4)] mb-6">
            ESTAMOS PARA ESCUCHARTE
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-6 uppercase drop-shadow-lg">
            CONTÁCTANOS
          </h1>
          <p className="text-zinc-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            ¿Dudas sobre planes, nuestra línea de indumentaria o membresías corporativas? Háblanos.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* SECCIÓN 1: FORMULARIO E INFO DIRECTA */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Directa */}
          <div className="space-y-10 text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-4">
                LÍNEA <span className="text-lime-400">DIRECTA</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                Utiliza cualquiera de nuestros canales oficiales. Si prefieres atención inmediata, nuestro WhatsApp está disponible para miembros y futuros atletas.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-zinc-900/40 rounded-2xl border border-white/5 flex flex-col gap-2 hover:border-lime-400/30 transition-colors">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Corporativo</span>
                <a href="mailto:info@4eversgym.com" className="text-xl font-bold text-white hover:text-lime-400 transition-colors">
                  info@4eversgym.com
                </a>
              </div>
              
              <div className="p-6 bg-zinc-900/40 rounded-2xl border border-white/5 flex flex-col gap-2 hover:border-lime-400/30 transition-colors">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">WhatsApp Soporte</span>
                <a href="tel:+1234567890" className="text-xl font-bold text-white hover:text-lime-400 transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
            </div>

            <button className="px-8 py-4 rounded-xl bg-white/5 text-white border border-white/10 font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-3">
              <span>Abrir Chat de WhatsApp</span>
              <span className="text-lime-400 text-lg">→</span>
            </button>
          </div>

          {/* Formulario */}
          <div className="bg-zinc-900/30 p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Nombre Completo</label>
                  <input required type="text" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email</label>
                  <input required type="email" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all" placeholder="tu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Asunto</label>
                <select className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all appearance-none cursor-pointer">
                  <option value="membresias">Información de Membresías</option>
                  <option value="indumentaria">Soporte Indumentaria 4Evers</option>
                  <option value="prueba">Visita de Prueba</option>
                  <option value="otro">Otras consultas</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Mensaje</label>
                <textarea required rows="4" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className={`w-full py-4 rounded-xl font-black text-xs tracking-widest uppercase transition-all shadow-[0_10px_20px_rgba(163,230,53,0.1)] ${
                  formStatus === 'success' 
                  ? 'bg-zinc-800 text-lime-400 cursor-default'
                  : 'bg-lime-400 text-zinc-950 hover:bg-lime-300'
                }`}
              >
                {formStatus === 'idle' && 'Enviar Mensaje'}
                {formStatus === 'submitting' && 'Enviando...'}
                {formStatus === 'success' && '¡Mensaje Enviado!'}
              </button>
            </form>
          </div>
        </section>

        {/* SECCIÓN 2: NUESTRO ESPACIO (Ubicación) */}
        <section className="pt-10 border-t border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-3xl overflow-hidden h-[350px] relative border border-white/10 group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="text-lime-400 text-xs font-black uppercase tracking-widest block mb-1">HQ 4Evers Gym</span>
                  <p className="text-white font-semibold">Distrito Financiero, Av. Principal 456</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center font-black hover:bg-white transition-colors">
                  ↗
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">VISÍTANOS</span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
                  NUESTRO <span className="text-lime-400">ESPACIO</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-zinc-300 font-semibold">Lunes a Viernes</span>
                  <span className="text-lime-400 font-bold">05:00 - 23:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-zinc-300 font-semibold">Sábados</span>
                  <span className="text-lime-400 font-bold">07:00 - 20:00</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-zinc-300 font-semibold">Domingos y Feriados</span>
                  <span className="text-lime-400 font-bold">08:00 - 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: ALIANZAS Y CARRERAS (B2B) */}
        <section className="bg-zinc-900/30 p-10 sm:p-16 rounded-3xl border border-white/5 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="w-16 h-16 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-6">
              <span className="text-lime-400 text-2xl">🤝</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
              ALIANZAS Y <span className="text-lime-400">CARRERAS</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              ¿Eres un entrenador élite buscando unirte al staff? ¿O representas a una marca deportiva interesada en colaborar con nuestra línea 4Evers Gear? 
            </p>
            <div className="pt-4">
              <a href="mailto:partners@4eversgym.com" className="inline-block px-8 py-3 rounded-xl border border-lime-400 text-lime-400 font-black text-xs tracking-widest uppercase hover:bg-lime-400 hover:text-zinc-950 transition-all">
                Escribir a Partners
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: COMUNIDAD (Redes Sociales) */}
        <section className="text-center">
          <div className="mb-12">
            <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">ÚNETE AL MOVIMIENTO</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              COMUNIDAD <span className="text-lime-400">4EVERS</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Cajas simulando posts de IG o accesos directos */}
            {[1, 2, 3, 4].map((item) => (
              <a key={item} href="#" className="aspect-square rounded-2xl overflow-hidden relative group block border border-white/10">
                <img 
                  src={`https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80&sig=${item}`} 
                  alt="4Evers Community" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-lime-400 font-black text-sm uppercase tracking-widest">Ver en IG</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SECCIÓN 5: PREGUNTAS FRECUENTES (FAQ Rápido para Soporte) */}
        <section className="pt-12 pb-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
              ANTES DE <span className="text-lime-400">ESCRIBIRNOS</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-zinc-900/20 p-6 rounded-2xl border border-white/5 text-left hover:border-white/10 transition-colors">
                <h4 className="text-lg font-black text-white mb-2">{faq.q}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}