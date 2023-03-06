import React, { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);

    if (productInCart >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCart].quantity += 1;
      setTotal((prevState) => prevState + product.price);
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);

    setTotal((prevState) => prevState + product.price);
  };

  const removeFromCart = (product) => {
    setCart((prevState) =>
      prevState.filter((item) => {
        item.id === product.id &&
          setTotal((prevState) => prevState - product.price * item.quantity);
        return item.id !== product.id;
      })
    );
  };

  const removeOneFromCart = (product) => {
    product.quantity--;

    setTotal((prevState) => prevState - product.price);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
