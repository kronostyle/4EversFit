import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Trainers() {
  const navigate = useNavigate();

  const handleRedirectToContact = () => {
    navigate('/');
    setTimeout(() => {
      window.location.hash = '#contact';
    }, 100);
  };

  const trainersList = [
    {
      name: 'MATÍAS VALENZUELA',
      role: 'Head Coach & Especialista en Fuerza',
      bio: 'Con más de 10 años de trayectoria en el alto rendimiento, Matías combina la ciencia del levantamiento con una mentoría cercana. Su filosofía se basa en que el rendimiento físico debe reflejar disciplina, seguridad y una presencia impecable dentro y fuera del gimnasio.',
      specialty: 'Fuerza Máxima e Hipertrofia',
      img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'SOFÍA RIVERA',
      role: 'Directora de Acondicionamiento y Nutrición',
      bio: 'Apasionada por transformar hábitos desde la raíz, Sofía guía a cada alumno hacia su mejor versión combinando nutrición inteligente, entrenamiento funcional dinámico y un estilo de vida enfocado en el bienestar integral.',
      specialty: 'Acondicionamiento Metabólico y Nutrición',
      img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'CARLOS "CHASCO" MENDOZA',
      role: 'Coach Senior de Personal Training',
      bio: 'Especialista en biomecánica y corrección postural. Carlos cree firmemente que estar bien acompañado durante el proceso es la clave del éxito. Su cercanía y exigencia garantizan resultados reales y sostenibles.',
      specialty: 'Biomecánica y Recomposición Corporal',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const testimonials = [
    {
      quote: "Entrenar con Matías y el equipo de 4Evers cambió por completo mi perspectiva. No solo logré la recomposición corporal que buscaba, sino que el acompañamiento y la calidad de la indumentaria te hacen sentir en otro nivel.",
      author: "Alejandro Silva",
      role: "Miembro desde 2024"
    },
    {
      quote: "La atención personalizada de Sofía y su enfoque en nutrición y bienestar hicieron que finalmente pudiera mantener hábitos sostenibles. Sentirse respaldada en cada paso no tiene precio.",
      author: "Valentina Morales",
      role: "Atleta de Personal Training"
    },
    {
      quote: "El nivel técnico y humano de los entrenadores es excepcional. Te exigen con una base científica real y se nota que les importa tanto tu salud física como tu confianza personal.",
      author: "Ignacio Rojas",
      role: "Miembro Elite"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full text-zinc-100">
      {/* HERO BANNER DE ANCHO COMPLETO */}
      <div className="relative w-full min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden border-b border-white/10 mb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-[2px] scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[3px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16">
          <span className="text-xs font-black tracking-widest px-4 py-2 rounded-xl bg-lime-400 text-zinc-950 inline-block uppercase shadow-[0_0_20px_rgba(163,230,53,0.4)] mb-6">
            EXCELENCIA Y LIDERAZGO HUMANO
          </span>
          <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tight mb-6 uppercase drop-shadow-lg">
            EQUIPO DE <span className="text-lime-400">ENTRENADORES</span>
          </h1>
          <p className="text-zinc-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Más que profesionales del fitness, somos mentores apasionados por tu evolución integral, tu estética y tu confianza en cada etapa del camino.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* SECCIÓN: MISIÓN Y VISIÓN */}
        <section className="grid lg:grid-cols-2 gap-16 items-center border-b border-white/10 pb-24">
          <div className="space-y-8 text-left">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">IDENTIDAD 4EVERS</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
                NUESTRA <span className="text-lime-400">MISIÓN</span>
              </h2>
            </div>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              En <strong className="text-white font-bold">4Evers Gym</strong> no concebimos el entrenamiento como una simple rutina de esfuerzo aislado. Nuestra misión es transformar vidas a través de un acompañamiento cercano, un rigor científico inquebrantable y una cultura donde <strong className="text-lime-400">el bienestar físico, el verse bien vestidos y el sentirse respaldados</strong> van de la mano.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Creemos que la indumentaria técnica de alta calidad y la asesoría personalizada elevan la autoestima y potencian el rendimiento real de cada persona.
            </p>
          </div>

          <div className="space-y-8 text-left bg-zinc-900/30 p-10 rounded-3xl border border-white/5">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">PROYECCIÓN DE MARCA</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
                NUESTRA <span className="text-lime-400">VISIÓN</span>
              </h2>
            </div>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Ser el referente indiscutible de la cultura fitness moderna, destacando por una comunidad unida donde el estilo, la estética y el desarrollo personal convergen. 
            </p>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Aspiramos a expandir un concepto donde cada miembro entienda que entrenar con elegancia, lucir indumentaria de alto nivel y contar con un equipo apasionado a su lado marca la diferencia definitiva.
            </p>
          </div>
        </section>

        {/* SECCIÓN: LOS ENTRENADORES */}
        <section>
          <div className="text-center mb-20">
            <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">MENTORES DE ÉXITO</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase">
              CONOCE A <span className="text-lime-400">NUESTRO EQUIPO</span>
            </h2>
            <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-24">
            {trainersList.map((trainer, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  <span className="text-lime-400 font-mono text-sm tracking-widest uppercase block">COACH 0{idx + 1} // {trainer.specialty}</span>
                  <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight">{trainer.name}</h3>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider -mt-4">{trainer.role}</p>
                  
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="pt-2 text-sm text-zinc-300 bg-zinc-900/40 p-4 rounded-2xl border border-white/5">
                    <span className="text-lime-400 font-bold block mb-1">Filosofía de acompañamiento:</span>
                    "Nunca entrenas solo. Te acompañamos a superar tus límites visuales y físicos con elegancia y método."
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="rounded-3xl overflow-hidden h-[400px] relative shadow-2xl border border-white/10">
                    <img 
                      src={trainer.img} 
                      alt={trainer.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN: TESTIMONIOS (CARRUSEL) */}
        <section className="py-12 border-t border-b border-white/10">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold tracking-widest text-lime-400 uppercase block mb-2">EXPERIENCIAS REALES</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
              LO QUE DICEN <span className="text-lime-400">NUESTROS ATLETAS</span>
            </h2>
            <div className="w-24 h-1 bg-lime-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto relative bg-zinc-900/30 p-8 sm:p-14 rounded-3xl border border-white/10 text-center">
            <div className="absolute top-6 left-8 text-lime-400 text-6xl font-serif opacity-30 select-none">“</div>
            
            <div className="min-h-[140px] flex flex-col justify-center items-center relative z-10 px-4">
              <p className="text-zinc-200 text-lg sm:text-xl italic leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <h4 className="text-white font-black text-base uppercase tracking-wider">{testimonials[currentTestimonial].author}</h4>
                <p className="text-xs text-lime-400 uppercase tracking-widest mt-1">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Controles del Carrusel */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-zinc-800 border border-white/15 flex items-center justify-center text-lime-400 hover:bg-lime-400 hover:text-zinc-950 transition-all cursor-pointer"
                aria-label="Testimonio anterior"
              >
                &larr;
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentTestimonial === i ? 'w-8 bg-lime-400' : 'w-2 bg-zinc-700'
                    }`}
                    aria-label={`Ir al testimonio ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-zinc-800 border border-white/15 flex items-center justify-center text-lime-400 hover:bg-lime-400 hover:text-zinc-950 transition-all cursor-pointer"
                aria-label="Siguiente testimonio"
              >
                &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* LLAMADO A LA ACCIÓN FINAL FLUIDO */}
        <section className="text-center pb-20 pt-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              ¿Listo para entrenar con el <span className="text-lime-400">mejor equipo</span>?
            </h3>
            <p className="text-zinc-300 text-lg">
              Únete a nuestra comunidad, descubre tu mejor versión física y vive la experiencia 4Evers con el respaldo de profesionales apasionados.
            </p>
            <div className="pt-4">
              <button 
                onClick={handleRedirectToContact}
                className="px-10 py-5 rounded-2xl bg-lime-400 text-zinc-950 font-black text-xs tracking-widest uppercase shadow-[0_10px_25px_rgba(163,230,53,0.3)] hover:bg-lime-300 cursor-pointer inline-block transition-all"
              >
                ¡Únete a 4Evers Gym ahora!
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}