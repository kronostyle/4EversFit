import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonalTraining() {
  const navigate = useNavigate();

  const handleRedirectToContact = () => {
    navigate('/');
    setTimeout(() => {
      window.location.hash = '#contact';
    }, 100);
  };

  const bodyTypes = [
    {
      title: 'ECTOMORFO',
      subtitle: 'Complexión delgada / Estructura ósea ligera',
      description: 'Metabolismo muy rápido que dificulta ganar masa muscular y peso corporal. Sus extremidades suelen ser largas y delgadas.',
      strategy: 'Entrenamiento de fuerza con cargas pesadas y bajo volumen. Superávit calórico controlado y descanso prolongado para estimular el desarrollo muscular.',
      routine: '3-4 días de pesas enfocados en ejercicios compuestos (sentadillas, peso muerto, press). Mínimo cardio para conservar energía.',
      img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80' // Imagen enfocada en estructura delgada y tonificada
    },
    {
      title: 'MESOMORFO',
      subtitle: 'Complexión atlética / Muscular por naturaleza',
      description: 'Predisposición genética favorable para desarrollar masa muscular de forma natural y mantener niveles bajos de grasa corporal con facilidad.',
      strategy: 'Equilibrio perfecto entre entrenamiento de fuerza, hipertrofia y acondicionamiento metabólico (HIIT). Rotar estímulos para evitar estancamientos.',
      routine: '4-5 días de entrenamiento mixto. Nutrición balanceada adaptada a etapas de mantenimiento o definición.',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' // Imagen enfocada en musculatura atlética definida
    },
    {
      title: 'ENDOMORFO',
      subtitle: 'Complexión robusta / Metabolismo lento',
      description: 'Facilidad para almacenar energía en forma de grasa corporal y perder peso con mayor lentitud, pero poseen una gran fuerza y potencia base.',
      strategy: 'Resistencia cardiovascular combinada con rutinas de fuerza de alta densidad y poco descanso. Estricto control de carbohidratos refinados.',
      routine: '4-6 días semanales integrando cardio constante, spinning o entrenamiento funcional de alta intensidad.',
      img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80' // Imagen enfocada en fuerza, potencia y complexión robusta
    }
  ];

  const supplements = [
    {
      name: 'PROTEÍNA WEY (WHEY PROTEIN)',
      role: 'Recuperación y Síntesis Muscular',
      mechanism: 'Aporta aminoácidos esenciales de rápida absorción al torrente sanguíneo, reparando de forma inmediata las micro-lesiones musculares generadas durante el entrenamiento de alta intensidad.',
      dosage: '25g a 30g disueltos en agua o leche descremada, dentro de los 45 minutos posteriores a finalizar el ejercicio.',
      benefit: 'Acelera drásticamente la recuperación, previene el catabolismo y promueve el desarrollo de masa muscular tonificada.'
    },
    {
      name: 'CREATINA MONOHIDRATADA',
      role: 'Potencia Explosiva y Energía Celular',
      mechanism: 'Regenera rápidamente el trifosfato de adenosina (ATP) muscular, que es la principal fuente de energía rápida para esfuerzos cortos, pesados y explosivos.',
      dosage: '3g a 5g diarios tomados de forma constante y sostenida en cualquier momento del día.',
      benefit: 'Aumenta de manera comprobada la fuerza máxima, mejora el rendimiento general y favorece la hidratación e hipertrofia celular.'
    },
    {
      name: 'OMEGA-3 (ÁCIDOS GRASOS)',
      role: 'Salud Articular y Antiinflamatorio',
      mechanism: 'Modula la respuesta inflamatoria sistémica a nivel celular y protege las membranas frente al estrés oxidativo inducido por el esfuerzo físico.',
      dosage: '1,000mg a 2,000mg diarios repartidos equitativamente con las comidas principales.',
      benefit: 'Reduce el dolor muscular tardío (DOMS), protege el sistema cardiovascular y lubrica las articulaciones de alto impacto.'
    }
  ];

  return (
    <div className="w-full text-zinc-100">
      {/* HERO BANNER DE ANCHO COMPLETO */}
      <div className="relative w-full min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden border-b border-white/10 mb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-[2px] scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[3px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16">
          <span className="text-xs font-black tracking-widest px-4 py-2 rounded-xl bg-lime-400 text-zinc-950 inline-block uppercase shadow-[0_0_20px_rgba(163,230,53,0.4)] mb-6">
            ASESORÍA Y RENDIMIENTO PROFESIONAL
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-6 uppercase drop-shadow-lg">
            PERSONAL <span className="text-lime-400">TRAINING</span>
          </h1>
          <p className="text-zinc-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Un enfoque científico y fluido para entender tu cuerpo, optimizar tus entrenamientos, potenciar tu nutrición y alcanzar un estado físico saludable y tonificado.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* SECCIÓN 1: TIPOS DE CUERPO (Estilo editorial con filas e imágenes laterales únicas) */}
        <section>
          <div className="text-center mb-20">
            <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">GENÉTICA Y RENDIMIENTO</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
              CONOCE TU <span className="text-lime-400">TIPO DE CUERPO</span>
            </h2>
            <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-24">
            {bodyTypes.map((type, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  <span className="text-lime-400 font-mono text-sm tracking-widest uppercase block">0{idx + 1} // SOMATOTIPO</span>
                  <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">{type.title}</h3>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider -mt-4">{type.subtitle}</p>
                  
                  <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                    <p><strong className="text-white font-bold">Perfil:</strong> {type.description}</p>
                    <p><strong className="text-lime-400 font-bold">Estrategia:</strong> {type.strategy}</p>
                  </div>

                  <div className="pt-2 text-sm text-zinc-400 bg-zinc-900/40 p-4 rounded-2xl border border-white/5">
                    <strong className="text-white block mb-1">Rutina sugerida:</strong> {type.routine}
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="rounded-3xl overflow-hidden h-[380px] relative shadow-2xl border border-white/10">
                    <img 
                      src={type.img} 
                      alt={type.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 2: SUPLEMENTACIÓN */}
        <section className="pt-10">
          <div className="text-center mb-16">
            <span className="text-sm font-extrabold tracking-widest text-lime-400 uppercase block mb-2">SOPORTE NUTRICIONAL</span>
            <h2 className="text-5xl sm:text-6xl font-black tracking-tight uppercase">
              CIENCIA DE <span className="text-lime-400">RENDIMIENTO</span>
            </h2>
            <div className="w-28 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {supplements.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between space-y-6 p-8 rounded-3xl bg-gradient-to-b from-zinc-900/50 to-transparent border border-white/10">
                <div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 inline-block uppercase mb-4 tracking-wider">
                    {item.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-5 tracking-tight">{item.name}</h3>
                  <p className="text-zinc-200 text-base sm:text-lg leading-relaxed mb-6">
                    <strong className="text-white font-bold">Acción:</strong> {item.mechanism}
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base">
                    <strong className="text-lime-400 font-bold">Dosis:</strong> {item.dosage}
                  </p>
                </div>
                <div className="pt-5 border-t border-white/10 text-sm sm:text-base text-zinc-200">
                  <strong className="text-white font-bold">Beneficio:</strong> {item.benefit}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN 3: VESTIMENTA TÉCNICA */}
        <section className="py-12 border-t border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block">INDUMENTARIA 4EVERS GEAR</span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Vestimenta Técnica de Alto Rendimiento</h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                Nuestra línea de ropa deportiva está fabricada con tejidos inteligentes de alta transpirabilidad y tecnología dry-fit que evacúa el sudor de forma instantánea. Diseñadas con patronaje ergonómico, permiten total libertad de movimiento en ejercicios de alta exigencia.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2"><span className="text-lime-400 font-bold">•</span> Telas ultra-elásticas con compresión focalizada.</li>
                <li className="flex items-center gap-2"><span className="text-lime-400 font-bold">•</span> Costuras planas anti-fricción de máxima durabilidad.</li>
                <li className="flex items-center gap-2"><span className="text-lime-400 font-bold">•</span> Control de humedad y propiedades antibacterianas.</li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden h-[380px] relative shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80" 
                alt="Vestimenta Técnica 4Evers" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* LLAMADO A LA ACCIÓN FINAL FLUIDO */}
        <section className="text-center pb-20 pt-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              ¿Listo para un plan <span className="text-lime-400">100% personalizado</span>?
            </h3>
            <p className="text-zinc-300 text-lg">
              Agenda una asesoría con nuestros entrenadores profesionales y descubre el plan de nutrición y suplementación exacto para tu somatotipo.
            </p>
            <div className="pt-4">
              <button 
                onClick={handleRedirectToContact}
                className="px-10 py-5 rounded-2xl bg-lime-400 text-zinc-950 font-black text-xs tracking-widest uppercase shadow-[0_10px_25px_rgba(163,230,53,0.3)] hover:bg-lime-300 cursor-pointer inline-block transition-all"
              >
                ¡Quiero mi asesoría personalizada!
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}