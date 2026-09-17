import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Inicializamos el carrito con lo que haya en localStorage (si existe)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('4evers_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem('4evers_cart', JSON.stringify(cart));
  }, [cart]);

  // Añadir producto (si ya existe, sumamos la cantidad)
  const addToCart = (product, size = 'L', quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.id === product.id && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { ...product, selectedSize: size, quantity }];
      }
    });
  };

  // Remover producto individual
  const removeFromCart = (id, size) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  // Actualizar cantidad de un producto (+ y - en el carrito)
  const updateQuantity = (id, size, newQuantity) => {
    // Evitamos que la cantidad baje de 1
    if (newQuantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        (item.id === id && item.selectedSize === size) 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  // Vaciar carrito completo
  const clearCart = () => setCart([]);

  // Calcular precio total (como variable de número, no como función string)
  const totalPrice = cart.reduce((total, item) => {
    const cleanPrice = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('$', '')) 
      : item.price;
      
    // Validamos que el precio sea un número válido para evitar errores NaN
    const validPrice = isNaN(cleanPrice) ? 0 : cleanPrice;
    
    return total + (validPrice * item.quantity);
  }, 0);

  // Cantidad total de ítems en el icono del carrito
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        totalPrice, 
        totalItems 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}