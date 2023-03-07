import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = { products: [], total: 0 };

export const Actions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (action.type) {
    case Actions.ADD_TO_CART: {
      const { id, price } = actionPayload;
      const productInCart = state.products.findIndex((item) => item.id === id);

      if (productInCart >= 0) {
        const newState = structuredClone(state.products);
        newState[productInCart].quantity += 1;

        return {
          products: [...newState],
          total: state.total + price,
        };
      }

      return {
        products: [...state.products, { ...actionPayload, quantity: 1 }],
        total: state.total + price,
      };
    }

    case Actions.REMOVE_FROM_CART: {
      const { id, price } = actionPayload;

      const productInCart = state.products.filter((item) => item.id === id);

      return {
        products: [...state.products.filter((item) => item.id !== id)],
        total: state.total - price * productInCart[0].quantity,
      };
    }

    case Actions.REMOVE_ONE_FROM_CART: {
      const { price } = actionPayload;

      actionPayload.quantity--;
      return { ...state, total: state.total - price };
    }

    case Actions.CLEAR_CART: {
      return initialState;
    }
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
