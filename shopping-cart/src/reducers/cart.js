export const Actions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const cartInitialState = JSON.parse(
  window.localStorage.getItem("cart")
) || {
  products: [],
  total: 0,
};

console.log(cartInitialState);

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (action.type) {
    case Actions.ADD_TO_CART: {
      const { id, price } = actionPayload;
      const productInCart = state.products.findIndex((item) => item.id === id);

      if (productInCart >= 0) {
        const newCart = structuredClone(state.products);
        newCart[productInCart].quantity += 1;

        const newState = {
          products: [...newCart],
          total: state.total + price,
        };

        updateLocalStorage(newState);

        return newState;
      }

      const newState = {
        products: [...state.products, { ...actionPayload, quantity: 1 }],
        total: state.total + price,
      };

      updateLocalStorage(newState);
      return newState;
    }

    case Actions.REMOVE_FROM_CART: {
      const { id, price } = actionPayload;

      const productInCart = state.products.filter((item) => item.id === id);

      const newState = {
        products: [...state.products.filter((item) => item.id !== id)],
        total: state.total - price * productInCart[0].quantity,
      };
      updateLocalStorage(newState);

      return newState;
    }

    case Actions.REMOVE_ONE_FROM_CART: {
      const { price } = actionPayload;

      actionPayload.quantity--;
      const newState = { ...state, total: state.total - price };
      updateLocalStorage(newState);

      return newState;
    }

    case Actions.CLEAR_CART: {
      const newState = {
        products: [],
        total: 0,
      };
      updateLocalStorage(newState);
      return newState;
    }
    default:
      return state;
  }
};
