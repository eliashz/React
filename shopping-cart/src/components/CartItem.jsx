import React from "react";

const CartItem = ({ thumbnail, title, price, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small onClick={addToCart}>Qty: {quantity}</small>
        <button>+</button>
      </footer>
    </li>
  );
};

export default CartItem;
