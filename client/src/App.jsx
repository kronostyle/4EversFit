import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import Classes from './pages/Classes';
import PersonalTraining from './pages/PersonalTraining';
import Trainers from './pages/Trainers';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import Shop from './pages/Shop'; 
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext'; // Importamos el contexto del carrito
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import OrderSuccess from './pages/OrderSuccess';
import NotFound from './pages/NotFound';

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
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order-success" element={<OrderSuccess />} />


        {/* RUTA COMODÍN PARA EL ERROR 404 */}
  <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* Envolvemos toda la estructura principal con CartProvider */}
      <CartProvider>
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
      </CartProvider>
    </Router>
  );
}