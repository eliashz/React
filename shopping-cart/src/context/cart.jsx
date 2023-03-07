import React, { createContext, useReducer, useState } from "react";

export const CartContext = createContext();

// const initialState = [];
const initialState = { products: [], total: 0 };

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCart = state.products.findIndex((item) => item.id === id);
      // console.log("id", state);

      if (productInCart >= 0) {
        const newState = structuredClone(state.products);
        newState[productInCart].quantity += 1;
        return newState;
      }

      return {
        products: [...state.products, { ...actionPayload, quantity: 1 }],
        total: state.total + actionPayload.price,
      };
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      return {
        products: [...state.products.filter((item) => item.id !== id)],
        total: state.total - actionPayload.price,
      };
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const removeOneFromCart = (product) => {
    dispatch({ type: "REMOVE_ONE_FROM_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

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
