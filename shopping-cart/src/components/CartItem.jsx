import React from "react";

const CartItem = ({
  thumbnail,
  title,
  price,
  quantity,
  addToCart,
  removeOneFromCart,
}) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong>: ${price}
      </div>
      <footer>
        <button disabled={quantity === 1} onClick={removeOneFromCart}>
          -
        </button>

        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};

export default CartItem;
