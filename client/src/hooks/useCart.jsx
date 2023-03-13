import { useContext } from "react";
import { CartContext } from "../context/cart";

const useCart = () => {
  const cart = useContext(CartContext);
  if (cart === undefined)
    throw new Error("userCart must be used within a CartProvider");
  return cart;
};

export default useCart;
