import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import Classes from './pages/Classes';
import PersonalTraining from './pages/PersonalTraining';
import Trainers from './pages/Trainers';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import Shop from './pages/Shop'; // Importa la página de la tienda


// Componente auxiliar para manejar el retraso de la animación de 1 segundo al cambiar de ruta
function AnimatedRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 segundo exacto de animación de carga

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <PageLoader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clases" element={<Classes />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      
    </>

    
  );
}

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-lime-400 selection:text-zinc-950 scroll-smooth">
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          * {
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 400ms;
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>

        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}