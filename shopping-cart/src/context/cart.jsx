import React, { createContext, useReducer } from "react";
import { cartInitialState, Actions, cartReducer } from "../reducers/cart";

export const CartContext = createContext();

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    dispatch({ type: Actions.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: Actions.REMOVE_FROM_CART, payload: product });
  };

  const removeOneFromCart = (product) => {
    dispatch({ type: Actions.REMOVE_ONE_FROM_CART, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: Actions.CLEAR_CART });
  };

  return { state, addToCart, removeFromCart, removeOneFromCart, clearCart };
};

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, removeOneFromCart, clearCart } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
