import { createContext, useContext, useState } from "react";

// CONTEXT
const CartContext = createContext();

// PROVIDER
function CartProvider({ children }) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function toggleCart() {
    setCartIsOpen(!cartIsOpen);
  }

  function closeCart() {
    setCartIsOpen(false);
  }

  function openCart() {
    setCartIsOpen(true);
  }

  return (
    <CartContext.Provider
      value={{ cartIsOpen, toggleCart, closeCart, openCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// USE-CART
function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CountProvider");
  }

  return context;
}

export { CartProvider, useCart };
