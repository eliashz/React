import React, { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

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
            <img src="" alt="" />
          </li>
          <div>
            <strong>iPhone</strong> - $1490
          </div>
        </ul>
      </aside>
    </>
  );
};

export default Cart;
