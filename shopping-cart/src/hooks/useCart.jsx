import React, { useContext } from "react";

const useCart = () => {
  const cart = useContext();
  if (cart === undefined) throw new Error('userCart ')
  return cart;
};

export default useCart;
