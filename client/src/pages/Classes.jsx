import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Classes() {
  const navigate = useNavigate();

  const keyClasses = [
    {
      name: 'MAXFIT',
      focus: 'Alta intensidad / Fuerza',
      description: 'Clases altamente exigentes orientadas a superar tus límites de fuerza y resistencia utilizando peso libre, barras olímpicas y ejercicios compuestos avanzados.',
      purpose: 'Diseñado para desafiar la capacidad aeróbica y anaeróbica al máximo nivel en cada sesión de entrenamiento.',
      benefit: 'Desarrollo muscular integral, quema avanzada de calorías y un aumento notable de la potencia física general.',
      schedule: 'Lunes, Miércoles, Viernes - 08:00 AM',
      img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'CAMPFIT',
      focus: 'Funcional / Agilidad',
      description: 'Circuitos dinámicos en grupo que simulan un entrenamiento de estilo militar combinando saltos, desplazamiento y fuerza con el propio peso corporal.',
      purpose: 'Mejorar la agilidad general y la coordinación motora en espacios dinámicos y de alta exigencia.',
      benefit: 'Mejora la resistencia cardiovascular, quema grasa corporal de forma eficiente y agiliza los reflejos.',
      schedule: 'Martes, Jueves - 09:00 AM',
      img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'POWERFIT',
      focus: 'Fuerza y Halterofilia',
      description: 'Sesiones técnicas focalizadas en el levantamiento de pesas y control de cargas pesadas bajo la supervisión directa de instructores expertos.',
      purpose: 'Construir una base sólida de fuerza pura y corregir la técnica de ejecución de los movimientos de potencia.',
      benefit: 'Incremento de la fuerza máxima, hipertrofia muscular y tonificación profunda.',
      schedule: 'Lunes, Miércoles - 05:00 PM',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'SPINFIT',
      focus: 'Cardio / Ciclismo Indoor',
      description: 'Recorridos virtuales sobre bicicletas estáticas sincronizados al ritmo de música motivadora y cambios de resistencia constantes.',
      purpose: 'Elevar el ritmo cardíaco mediante un entrenamiento aeróbico de bajo impacto articular para todo tipo de usuarios.',
      benefit: 'Quema masiva de calorías, resistencia aeróbica superior y fortalecimiento intensivo del tren inferior.',
      schedule: 'Martes, Jueves, Sábados - 10:00 AM',
      img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'YOGA FLOW',
      focus: 'Flexibilidad y Movilidad',
      description: 'Combinación fluida de posturas físicas (asanas) unidas a una respiración consciente, profunda y restauradora.',
      purpose: 'Encontrar el equilibrio perfecto entre la relajación mental, la paz interior y la tonificación muscular estática.',
      benefit: 'Reducción drástica del estrés, mejora notable de la postura corporal y flexibilidad avanzada.',
      schedule: 'Lunes, Miércoles - 07:00 PM',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'FUNCTIONAL BOX',
      focus: 'Combate y Resistencia',
      description: 'Ejercicios inspirados en técnicas de boxeo, golpeo a sacos y acondicionamiento físico global sin contacto físico directo.',
      purpose: 'Desarrollar potencia explosiva en los brazos y una alta capacidad de resistencia anaeróbica.',
      benefit: 'Velocidad de reacción optimizada, tonificación general de todo el cuerpo y excelente descarga de tensión.',
      schedule: 'Viernes - 06:00 PM / Sábados - 11:00 AM',
      img: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleRedirectToContact = () => {
    navigate('/');
    setTimeout(() => {
      window.location.hash = '#contact';
    }, 100);
  };

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      {/* Encabezado Principal */}
      <div className="text-center mb-20">
        <span className="text-xs font-black tracking-widest px-4 py-2 rounded-xl bg-lime-400 text-zinc-950 inline-block uppercase shadow-[0_0_20px_rgba(163,230,53,0.4)] mb-4">
          PROGRAMAS Y DISCIPLINAS ÉLITE
        </span>
        <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-6 uppercase">
          NUESTRAS <span className="text-lime-400">CLASES</span>
        </h1>
        <p className="text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
          Explora a fondo cada una de nuestras 6 disciplinas principales. Información detallada, beneficios directos y el impulso que necesitas para transformar tu estilo de vida.
        </p>
      </div>

      {/* Listado de Clases con textos ampliados y sin escala en imágenes */}
      <div className="space-y-20 mb-24">
        {keyClasses.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col lg:flex-row items-center gap-12 bg-zinc-900/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden ${
              idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Línea decorativa superior brillante */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>

            {/* Bloque de Información con textos aumentados */}
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <span className="text-xs font-extrabold tracking-wider px-3 py-1 rounded-lg bg-white/10 text-lime-400 border border-white/10 inline-block uppercase">
                {item.focus}
              </span>

              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                {item.name}
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                <p><strong className="text-lime-400 font-bold">¿Qué se hace?:</strong> {item.description}</p>
                <p><strong className="text-lime-400 font-bold">¿Para qué sirve?:</strong> {item.purpose}</p>
                <p><strong className="text-lime-400 font-bold">Beneficios principales:</strong> {item.benefit}</p>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-white/10 text-base text-zinc-300 flex items-center gap-3">
                <span className="text-xl">🕒</span>
                <span><strong className="text-white font-bold">Horarios Disponibles:</strong> {item.schedule}</span>
              </div>

              <div className="pt-2">
                <button 
                  onClick={handleRedirectToContact}
                  className="px-8 py-4 rounded-2xl bg-lime-400 text-zinc-950 font-black text-xs tracking-widest uppercase shadow-[0_10px_25px_rgba(163,230,53,0.3)] hover:bg-lime-300 cursor-pointer transition-all"
                >
                  ¡Apúntate ya!
                </button>
              </div>
            </div>

            {/* Bloque de Imagen estática (sin scale) */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="rounded-[2.5rem] overflow-hidden border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.7)] w-full max-w-md h-[400px] sm:h-[450px] relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recomendaciones para Nuevos Alumnos */}
      <div className="bg-zinc-900/80 backdrop-blur-2xl p-8 sm:p-14 rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-w-4xl mx-auto text-left relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
        <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Recomendaciones para Nuevos Alumnos</h3>
        <ul className="space-y-4 text-lg text-zinc-300 mb-8">
          <li className="flex items-start gap-3"><span className="text-lime-400 font-bold text-lg">•</span> Asiste con ropa cómoda y calzado deportivo adecuado para alto rendimiento.</li>
          <li className="flex items-start gap-3"><span className="text-lime-400 font-bold text-lg">•</span> Lleva siempre una botella de hidratación personal y una toalla pequeña.</li>
          <li className="flex items-start gap-3"><span className="text-lime-400 font-bold text-lg">•</span> Se recomienda llegar 10 minutos antes de cada clase para un calentamiento previo óptimo.</li>
        </ul>
        <div className="text-center pt-6 border-t border-white/10">
          <p className="text-zinc-300 text-lg mb-6 font-medium">¿Listo para transformar tu condición física? No esperes más y únete a nuestra comunidad.</p>
          <button 
            onClick={handleRedirectToContact}
            className="px-10 py-5 rounded-2xl bg-lime-400 text-zinc-950 font-black text-xs tracking-widest uppercase shadow-[0_10px_25px_rgba(163,230,53,0.3)] hover:bg-lime-300 cursor-pointer inline-block"
          >
            ¡Apúntate ya al formulario de contacto!
          </button>
        </div>
      </div>
    </section>
  );
}