import "./Cart.css";
import React, { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, total, removeOneFromCart } = useCart();
  console.log("cart", cart.products.length);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.products.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeOneFromCart={() => removeOneFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <div>{cart.total > 0 && <strong>TOTAL: ${cart.total}</strong>}</div>
        {cart.products.length === 0 ? (
          "Cart Empty"
        ) : (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  );
};

export default Cart;
