import React, { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCart = state.findIndex((item) => item.id === id);
      console.log("id", productInCart);

      if (productInCart >= 0) {
        const newState = structuredClone(state);
        newState[productInCart].quantity += 1;
        return newState;
      }

      return [...state, { ...actionPayload, quantity: 1 }];
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }

    case "REMOVE_ONE_FROM_CART": {
      actionPayload.quantity--;
      return state;
    }

    case "CLEAR_CART": {
      return initialState;
    }
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setTotal((prevState) => prevState + product.price);
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    const productInCart = state.findIndex((item) => item.id === product.id);
    setTotal(
      (prevState) => prevState - product.price * state[productInCart].quantity
    );
  };

  const removeOneFromCart = (product) => {
    dispatch({ type: "REMOVE_ONE_FROM_CART", payload: product });
    setTotal((prevState) => prevState - product.price);
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
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
