import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Plans() {
  const navigate = useNavigate();

  const handleRedirectToContact = () => {
    navigate('/');
    setTimeout(() => {
      window.location.hash = '#contact';
    }, 100);
  };

  const plans = [
    {
      name: 'Membresía Base',
      price: '$39',
      period: '/ mes',
      description: 'Acceso total a las instalaciones y equipamiento premium para quienes entrenan por su cuenta con disciplina.',
      features: [
        'Acceso ilimitado al gimnasio 24/7',
        'Zonas de peso libre y máquinas guiadas',
        'Uso de vestuarios y duchas premium',
        'App 4Evers para registro de accesos'
      ],
      recommended: false
    },
    {
      name: 'Plan Pro + Asesoría',
      price: '$79',
      period: '/ mes',
      description: 'El equilibrio perfecto entre entrenamiento autónomo y guía profesional para maximizar tus resultados.',
      features: [
        'Todo lo de la Membresía Base',
        '1 Evaluación física mensual',
        'Rutina de entrenamiento personalizada',
        '10% OFF en indumentaria 4Evers Gear'
      ],
      recommended: true
    },
    {
      name: 'Élite Personalizado',
      price: '$149',
      period: '/ mes',
      description: 'La experiencia definitiva. Acompañamiento absoluto, nutrición y estilo integrados en tu día a día.',
      features: [
        'Todo lo del Plan Pro',
        'Personal Trainer 3 veces por semana',
        'Plan nutricional y de suplementación',
        'Kit de bienvenida (Camiseta técnica dry-fit)'
      ],
      recommended: false
    }
  ];

  const benefits = [
    {
      title: 'EQUIPAMIENTO DE VANGUARDIA',
      desc: 'Maquinaria de última generación con biomecánica avanzada para garantizar la máxima hipertrofia previniendo lesiones.'
    },
    {
      title: 'AMBIENTE EXCLUSIVO',
      desc: 'Aforo limitado y controlado para que nunca tengas que esperar por una máquina. Entrena con fluidez y concentración total.'
    },
    {
      title: 'MENTORÍA CONTINUA',
      desc: 'Nuestro equipo no solo observa; corrige, motiva y se asegura de que cada repetición cuente hacia tu objetivo.'
    }
  ];

  const faqs = [
    {
      q: '¿Puedo cambiar de plan en cualquier momento?',
      a: 'Sí, puedes hacer un upgrade a Pro o Élite en cualquier momento del mes pagando solo la diferencia proporcional.'
    },
    {
      q: '¿Los planes incluyen la ropa 4Evers Gear?',
      a: 'El plan Élite incluye un kit de bienvenida técnico. Los demás planes cuentan con descuentos exclusivos para adquirir indumentaria en nuestra tienda.'
    },
    {
      q: '¿Cómo funciona la asesoría nutricional?',
      a: 'En el plan Élite, tendrás una consulta mensual detallada donde ajustaremos tus macros y suplementación según tu somatotipo y progreso.'
    }
  ];

  return (
    <div className="w-full text-zinc-100">
      
      {/* HERO BANNER */}
      <div className="relative w-full min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden border-b border-white/10 mb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-[2px] scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540496905036-5937c10647cc?auto=format&fit=crop&w=1920&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[3px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16">
          <span className="text-xs font-black tracking-widest px-4 py-2 rounded-xl bg-lime-400 text-zinc-950 inline-block uppercase shadow-[0_0_20px_rgba(163,230,53,0.4)] mb-6">
            INVIERTE EN TU MEJOR VERSIÓN
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-6 uppercase drop-shadow-lg">
            PLANES DE <span className="text-lime-400">ENTRENAMIENTO</span>
          </h1>
          <p className="text-zinc-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Diseñados para adaptarse a tu nivel de compromiso. Desde acceso libre hasta un acompañamiento absoluto donde la estética y el rendimiento son prioridad.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* SECCIÓN 1: LOS PLANES (Diseño sutil, sin cajas pesadas) */}
        <section>
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                  plan.recommended 
                  ? 'border-lime-400/50 bg-gradient-to-b from-lime-400/10 to-zinc-900/50 transform lg:-translate-y-4 shadow-[0_20px_40px_rgba(163,230,53,0.1)]' 
                  : 'border-white/10 bg-gradient-to-b from-zinc-900/50 to-transparent'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-zinc-950 text-[10px] font-black uppercase tracking-widest shadow-lg">
                    El Más Elegido
                  </span>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black text-lime-400">{plan.price}</span>
                    <span className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">{plan.period}</span>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed min-h-[60px]">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="text-lime-400 font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={handleRedirectToContact}
                  className={`w-full py-4 rounded-xl font-black text-xs tracking-widest uppercase transition-all ${
                    plan.recommended 
                    ? 'bg-lime-400 text-zinc-950 hover:bg-lime-300 shadow-[0_10px_20px_rgba(163,230,53,0.2)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  Seleccionar Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 2: ¿POR QUÉ ELEGIRNOS? (Estilo Editorial) */}
        <section className="pt-10 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block">EL ESTÁNDAR 4EVERS</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase leading-none">
                MÁS QUE UN GIMNASIO, <br/>UNA <span className="text-lime-400">DECLARACIÓN</span>
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed pt-4">
                No creemos en el entrenamiento mediocre. Elegir 4Evers significa rodearte de personas que persiguen la excelencia. Combinamos la ciencia del deporte con un entorno estético donde te sientes poderoso desde el momento en que cruzas la puerta.
              </p>
              <div className="pt-4 flex gap-8">
                <div>
                  <span className="block text-3xl font-black text-lime-400">100%</span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Enfoque Real</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-white">0%</span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Excusas</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden h-[450px] relative border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80" 
                  alt="Instalaciones 4Evers" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: BENEFICIOS (Cuadrícula limpia sin bordes pesados) */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
              BENEFICIOS <span className="text-lime-400">EXCLUSIVOS</span>
            </h2>
            <div className="w-16 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400 transition-colors duration-300">
                  <span className="text-lime-400 group-hover:text-zinc-950 text-2xl font-black">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-black text-white tracking-tight uppercase mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 4: LA EXPERIENCIA (Full Width Banner Inmersivo) */}
        <section className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[400px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1200&q=80')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
          
          <div className="relative z-10 p-10 sm:p-16 max-w-2xl text-left">
            <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-3">LA CULTURA 4EVERS</span>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-6">
              ENTRENA DURO, <br/> LÚCETE <span className="text-lime-400">SIEMPRE</span>
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Sabemos que verte bien impulsa tu motivación. Al unirte a nuestros planes superiores, pasas a formar parte de una comunidad que viste nuestra indumentaria de alto rendimiento. Porque el éxito también es una cuestión de actitud y presencia.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5: PREGUNTAS FRECUENTES (FAQ Limpio) */}
        <section className="pt-10 pb-12 border-b border-white/10">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">RESOLVEMOS TUS DUDAS</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
              PREGUNTAS <span className="text-lime-400">FRECUENTES</span>
            </h2>
            <div className="w-16 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5 text-left">
                <h4 className="text-lg font-black text-white mb-2">{faq.q}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LLAMADO A LA ACCIÓN FINAL FLUIDO */}
        <section className="text-center pb-20 pt-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              COMIENZA TU <span className="text-lime-400">TRANSFORMACIÓN</span>
            </h3>
            <p className="text-zinc-300 text-lg">
              No esperes a mañana. Elige tu membresía, reserva tu cupo y da el primer paso hacia la disciplina y la estética.
            </p>
            <div className="pt-4">
              <button 
                onClick={handleRedirectToContact}
                className="px-10 py-5 rounded-2xl bg-lime-400 text-zinc-950 font-black text-xs tracking-widest uppercase shadow-[0_10px_25px_rgba(163,230,53,0.3)] hover:bg-lime-300 cursor-pointer inline-block transition-all"
              >
                Inscribirme Ahora
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}