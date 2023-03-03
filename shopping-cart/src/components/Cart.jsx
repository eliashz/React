import "./Cart.css";
import React, { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";

const Cart = () => {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/30/3.jpg"
              alt="key"
            />
          </li>
          <div>
            <strong>Key</strong> - $12
          </div>
          <footer>
            <small>Qty: 1</small>
            <button>+</button>
          </footer>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
