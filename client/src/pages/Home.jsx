import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const classesPreview = [
    { name: 'MAXFIT', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80' },
    { name: 'CAMPFIT', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80' },
    { name: 'POWERFIT', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80' },
    { name: 'SPINFIT', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80' },
  ];

  const trainers = [
    { name: 'AMELIA PETERSON', role: 'Head Coach / Functional', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80' },
    { name: 'STEVE HUNTER', role: 'Strength & Conditioning', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80' },
    { name: 'MARY GREY', role: 'Pilates & Mobility', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80' },
  ];

  const pricingPlans = [
    {
      title: 'UNLIMITED',
      price: '$249',
      period: '/MONTH',
      description: 'Unlimited classes',
      features: ['Yoga and pool', 'Any fitness programs', '-20% on additional services', '5 personal training sessions']
    },
    {
      title: '10 CLASSES',
      price: '$160',
      period: '',
      description: '10 group classes',
      features: ['Any fitness programs', '-15% on additional services', '$15 per each extra training', 'No individual sessions']
    },
    {
      title: 'OPEN GYM',
      price: '$12',
      period: '/TRAINING',
      description: '2-hour training',
      features: ['Full access to the gym', 'Open from 8am to 9-10pm', '50+ gym machines', '-10% on additional services']
    }
  ];

  const latestArticles = [
    {
      author: 'Rolland Frank',
      date: 'September 22, 2024',
      title: 'SWEAT AND HAPPY THOUGHTS CAN\'T CURE DEPRESSION',
      excerpt: 'We understand that nowadays people live in a rush. Everyday routine is full of duties but you should stop and think about your health...',
      img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80'
    },
    {
      author: 'Rolland Frank',
      date: 'June 30, 2024',
      title: 'STOP TRYING AND START TRAINING',
      excerpt: 'Our team of coaches mainly train muscles. We are lucky to train nearly a hundred people who are serious about their body shapes...',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80'
    },
    {
      author: 'Rolland Frank',
      date: 'May 02, 2024',
      title: 'REASONS TO CHANGE YOUR LIFESTYLE',
      excerpt: 'Everybody knows how it feels like to wake up in the morning, drink your favorite coffee or tea, and think about your future plans...',
      img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80'
  ];

  const testimonials = [
    {
      quote: "I'm so happy I found this fitness club! It's 2 minutes away from my office and I attend group classes each evening.",
      author: "Daniel Peterson",
      date: "December 15, 2024"
    },
    {
      quote: "The personal training sessions completely changed my body structure and posture. Coaches are true professionals.",
      author: "Sofia Martínez",
      date: "January 10, 2025"
    },
    {
      quote: "Amazing equipment and a very clean environment. The open gym pass is super convenient for my fluid work schedule.",
      author: "Marcus Vance",
      date: "February 03, 2025"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fadeTestimonial, setFadeTestimonial] = useState(true);

  const [currentGallery, setCurrentGallery] = useState(0);
  const [fadeGallery, setFadeGallery] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Training',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario de contacto:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeTestimonial(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFadeTestimonial(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const galleryTimer = setInterval(() => {
      setFadeGallery(false);
      setTimeout(() => {
        setCurrentGallery((prev) => (prev + 1) % galleryImages.length);
        setFadeGallery(true);
      }, 300);
    }, 5000);
    return () => clearInterval(galleryTimer);
  }, [galleryImages.length]);

  const changeTestimonial = (index) => {
    setFadeTestimonial(false);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setFadeTestimonial(true);
    }, 300);
  };

  const prevTestimonial = () => {
    const newIndex = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
    changeTestimonial(newIndex);
  };

  const nextTestimonial = () => {
    const newIndex = (currentTestimonial + 1) % testimonials.length;
    changeTestimonial(newIndex);
  };

  const changeGallery = (index) => {
    setFadeGallery(false);
    setTimeout(() => {
      setCurrentGallery(index);
      setFadeGallery(true);
    }, 300);
  };

  const prevGallery = () => {
    const newIndex = currentGallery === 0 ? galleryImages.length - 1 : currentGallery - 1;
    changeGallery(newIndex);
  };

  const nextGallery = () => {
    const newIndex = (currentGallery + 1) % galleryImages.length;
    changeGallery(newIndex);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section id="about" className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none text-white mb-6">
            ¡PONTE EN FORMA Y <br />
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              SIÉNTETE GENIAL!
            </span>
          </h1>
          <p className="text-zinc-400 text-lg mb-8 max-w-lg">
            Nuestros instructores profesionales te ayudarán a mantenerte activo, saludable y alcanzar tu máximo potencial.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#start" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-lime-400 text-zinc-950 font-black tracking-wider text-sm shadow-[0_10px_25px_rgba(163,230,53,0.3)] hover:bg-lime-300">
              <span>&gt;</span> ÚNETE AHORA
            </a>
            <button 
              onClick={() => navigate('/clases')}
              className="px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-xs uppercase hover:border-lime-400 hover:text-lime-400 cursor-pointer"
            >
              Ver Clases Especializadas
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" 
              alt="Atleta 4Evers Gym" 
              className="w-full h-[480px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* PREVIEW DE CLASES */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-white">NUESTRAS <span className="text-lime-400">CLASES</span></h2>
            <p className="text-zinc-400 mt-2">Sin importar cuáles sean tus objetivos, nuestros instructores te ayudarán a alcanzarlos.</p>
          </div>
          <button 
            onClick={() => navigate('/clases')}
            className="px-6 py-3 rounded-xl bg-zinc-900 border border-white/10 text-lime-400 font-bold text-xs uppercase hover:border-lime-400 cursor-pointer"
          >
            Ver Catálogo Completo (8 Clases) &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {classesPreview.map((cls, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-md shadow-lg hover:border-lime-400/50">
              <div className="h-72 overflow-hidden">
                <img src={cls.img} alt={cls.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex items-center justify-between border-t border-white/10">
                <span className="font-extrabold text-white group-hover:text-lime-400">{cls.name}</span>
                <span className="text-lime-400 font-bold text-lg">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PERSONAL TRAINING */}
      <section id="personal" className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" 
            alt="Entrenamiento Personalizado" 
            className="w-full h-[450px] object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl font-black text-white mb-4">ENTRENAMIENTO <br /><span className="text-lime-400">PERSONALIZADO</span></h2>
          <h3 className="text-zinc-300 font-semibold mb-4">Resultados máximos y horarios de entrenamiento flexibles.</h3>
          <p className="text-zinc-400 leading-relaxed mb-8">
            El entrenamiento grupal no es para todos. Si prefieres entrenar 1 a 1, 4Evers Gym te ofrece entrenamiento personal para trabajar en tus habilidades individuales y alcanzar metas específicas.
          </p>
          <button className="px-8 py-3.5 rounded-2xl border border-white/20 text-white font-bold text-xs uppercase hover:border-lime-400 hover:text-lime-400">
            EXPLORAR ENTRENAMIENTO
          </button>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-16 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-white/30">
            <div className="text-lime-400 text-3xl mb-4">🏋️</div>
            <h4 className="font-extrabold text-white mb-2">GIMNASIO EQUIPADO</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">Instalaciones espaciosas aptas para clases grupales con toda la maquinaria moderna necesaria.</p>
          </div>
          <div className="p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-white/30">
            <div className="text-lime-400 text-3xl mb-4">🥤</div>
            <h4 className="font-extrabold text-white mb-2">ELIGE TU ACTIVIDAD</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">Selecciona las actividades que mejor se adapten a ti sin pagar por lo que no utilizas.</p>
          </div>
          <div className="p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-white/30">
            <div className="text-lime-400 text-3xl mb-4">🤸</div>
            <h4 className="font-extrabold text-white mb-2">ABIERTO A TODOS</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">Sin importar tu nivel de condición física, puedes integrarte a nuestras clases en cualquier momento.</p>
          </div>
          <div className="p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-white/30">
            <div className="text-lime-400 text-3xl mb-4">📋</div>
            <h4 className="font-extrabold text-white mb-2">TARIFAS FLEXIBLES</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">Elige tu plan de entrenamiento, instructor y horarios que más te acomoden.</p>
          </div>
        </div>
      </section>

      {/* OUR TRAINERS */}
      <section id="trainers" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white">NUESTROS <span className="text-lime-400">ENTRENADORES</span></h2>
          <p className="text-zinc-400 mt-2">Nuestro equipo de instructores certificados te guiará paso a paso hacia tus metas.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((t, idx) => (
            <div key={idx} className="rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 overflow-hidden text-center p-4 hover:border-lime-400/40">
              <img src={t.img} alt={t.name} className="w-full h-80 object-cover rounded-2xl mb-4" />
              <h3 className="font-extrabold text-white text-lg">{t.name}</h3>
              <p className="text-lime-400 text-xs font-semibold mt-1 uppercase">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING PLANS */}
      <section id="pricing" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">PRICING <span className="text-lime-400">PLANS</span></h2>
          <p className="text-zinc-400 mt-3 text-base">Choose a pricing plan which suits your fitness goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className="rounded-3xl bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.5),inset_3px_3px_6px_rgba(255,255,255,0.05)] hover:border-lime-400/50">
              <div>
                <h3 className="text-sm font-extrabold tracking-wider text-zinc-400 mb-4">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-lime-400">{plan.price}</span>
                  <span className="text-xs font-bold text-zinc-400">{plan.period}</span>
                </div>
                <p className="text-zinc-300 text-sm font-medium mb-8">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="w-5 h-5 rounded-full bg-zinc-800 text-lime-400 flex items-center justify-center text-[10px] font-black shrink-0 border border-white/10">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-3.5 rounded-2xl bg-lime-400 text-zinc-950 font-black text-xs tracking-wider uppercase shadow-md hover:bg-lime-300 flex items-center justify-center gap-2">
                <span>&gt;</span> SELECT PLAN
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="px-6 py-20 bg-zinc-900/20 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative px-12">
          
          <button 
            onClick={prevTestimonial}
            aria-label="Anterior testimonio" 
            className="absolute left-0 top-1/2 -translate-y-1/2 text-lime-400 text-2xl font-black p-2 cursor-pointer z-10"
          >
            &lt;
          </button>

          <div className="inline-flex text-lime-400 text-3xl mb-6 bg-zinc-900/60 p-3 rounded-2xl border border-white/10">
            ❝ ❞
          </div>

          <div className={`min-h-[140px] flex flex-col justify-center transition-opacity duration-300 ${fadeTestimonial ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg sm:text-xl font-medium italic text-zinc-200 leading-relaxed mb-6">
              “{testimonials[currentTestimonial].quote}”
            </p>

            <h4 className="font-extrabold text-white text-base">{testimonials[currentTestimonial].author}</h4>
            <p className="text-zinc-500 text-xs mt-1">{testimonials[currentTestimonial].date}</p>
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => changeTestimonial(dotIdx)}
                className={`h-2 rounded-full cursor-pointer ${
                  currentTestimonial === dotIdx ? 'w-8 bg-lime-400' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Ir al testimonio ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            aria-label="Siguiente testimonio" 
            className="absolute right-0 top-1/2 -translate-y-1/2 text-lime-400 text-2xl font-black p-2 cursor-pointer z-10"
          >
            &gt;
          </button>

        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section id="articles" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">LATEST <span className="text-white font-light">ARTICLES</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestArticles.map((article, idx) => (
            <article key={idx} className="flex flex-col group">
              <div className="rounded-3xl overflow-hidden border border-white/10 h-64 mb-6 shadow-lg">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-xs text-zinc-400 mb-3 font-medium">
                Posted by <span className="text-zinc-200">{article.author}</span> | {article.date}
              </div>

              <h3 className="text-lg font-extrabold text-lime-400 tracking-tight mb-3 hover:underline cursor-pointer">
                {article.title}
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="mt-auto">
                <a href="#" className="inline-block text-xs font-black tracking-widest text-white hover:text-lime-400 uppercase">
                  READ MORE
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT INFO CON FORMULARIO Y GOOGLE MAPS DE SANTIAGO DE CHILE */}
      <section id="contact" className="px-6 py-24 bg-zinc-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">LET'S GET STARTED</h2>
            <p className="text-white font-semibold text-base mb-6">Fill out the form or contact us directly.</p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              In order to offer you the best pricing plan, our managers will contact you as soon as possible and ask some questions about your health, fitness goals, expectations, and your favorite sports activities.
            </p>

            {/* FORMULARIO */}
            <form onSubmit={handleFormSubmit} className="bg-zinc-900/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 mb-8 text-left">
              <div>
                <label htmlFor="name" className="block text-xs font-extrabold tracking-widest text-white uppercase mb-2">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Ej. Juan Pérez"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:border-lime-400 outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-extrabold tracking-widest text-white uppercase mb-2">
                  CORREO ELECTRÓNICO
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:border-lime-400 outline-none"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-extrabold tracking-widest text-white uppercase mb-2">
                  ACTIVIDAD O SERVICIO DE INTERÉS
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:border-lime-400 outline-none"
                >
                  <option value="General Training" className="bg-zinc-900">Entrenamiento General</option>
                  <option value="Personal Training" className="bg-zinc-900">Entrenamiento Personal 1 a 1</option>
                  <option value="Group Classes" className="bg-zinc-900">Clases Grupales (Pilates / Yoga)</option>
                  <option value="Open Gym" className="bg-zinc-900">Open Gym</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-extrabold tracking-widest text-white uppercase mb-2">
                  METAS O DETALLES ADICIONALES
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Cuéntanos brevemente sobre tus metas o expectativas..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:border-lime-400 outline-none resize-none"
                ></textarea>
              </div>
            </form>

            <button 
              type="button" 
              onClick={handleFormSubmit}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-lime-400 text-zinc-950 font-black text-xs tracking-wider uppercase shadow-[0_10px_25px_rgba(163,230,53,0.3)] hover:bg-lime-300 text-center cursor-pointer"
            >
              GET FREE CONSULTATION
            </button>
          </div>

          {/* APARTADO DERECHO CENTRADO CON INFORMACIÓN Y GOOGLE MAPS */}
          <div className="space-y-6 bg-zinc-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col justify-center h-full">
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white uppercase mb-1">ADDRESS</h3>
              <p className="text-zinc-400 text-sm">Santiago, Chile</p>
            </div>
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white uppercase mb-1">PHONE</h3>
              <p className="text-zinc-400 text-sm">+56 9 1234 5678</p>
            </div>
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white uppercase mb-1">E-MAIL</h3>
              <p className="text-zinc-400 text-sm">contacto@4eversgym.cl</p>
            </div>
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white uppercase mb-1">REGULAR OPERATING HOURS:</h3>
              <p className="text-zinc-400 text-sm">Mon-Fri 8:00AM-10:00PM</p>
              <p className="text-zinc-400 text-sm">Sat-Sun 8:00AM-09:00PM</p>
            </div>

            <div className="w-full h-56 rounded-2xl overflow-hidden border border-white/10 shadow-lg pt-2">
              <iframe
                title="Ubicación Santiago de Chile"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106148.47395096538!2d-70.7107736657904!3d-33.472472782352115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a0dad2487f%3A0x33486a4c28f32a52!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
      <section className="px-6 py-16 bg-zinc-950 relative overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto relative px-12">
          
          <button 
            onClick={prevGallery}
            aria-label="Anterior imagen de galería" 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-lime-400 text-zinc-950 font-black text-xl flex items-center justify-center shadow-lg cursor-pointer z-10"
          >
            &lt;
          </button>

          <div className={`transition-opacity duration-300 ${fadeGallery ? 'opacity-100' : 'opacity-0'}`}>
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 h-[420px] shadow-2xl relative">
              <img 
                src={galleryImages[currentGallery]} 
                alt={`Galería de gimnasio ${currentGallery + 1}`} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10 text-xs font-bold text-lime-400">
                {currentGallery + 1} / {galleryImages.length}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            {galleryImages.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => changeGallery(dotIdx)}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  currentGallery === dotIdx ? 'w-8 bg-lime-400' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Ir a imagen ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextGallery}
            aria-label="Siguiente imagen de galería" 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-lime-400 text-zinc-950 font-black text-xl flex items-center justify-center shadow-lg cursor-pointer z-10"
          >
            &gt;
          </button>

        </div>
      </section>
    </div>
  );
}