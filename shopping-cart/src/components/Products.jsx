import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart, useFilters } from "../hooks";
import formatCurrency from "../helpers/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../store/products.slice";

const Products = ({ setSkip }) => {
  const { addToCart, removeFromCart, cart } = useCart();
  const { data } = useSelector((state) => state.products);
  console.log(data);
  const { filterProducts } = useFilters();

  const products = filterProducts(data);

  const checkProductInCart = (product) =>
    cart.products.some((item) => item.id === product.id);

  const handleClick = (e) => {
    e.preventDefault();
    setSkip((prevState) => prevState + 9);
  };

  return (
    <>
      <main className="products">
        <ul>
          {products /* .slice(0, 9) */
            .map((product) => {
              const isProductInCart = checkProductInCart(product);
              return (
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div>
                    <strong>{product.title}</strong> -{" "}
                    {formatCurrency(product.price)}
                  </div>
                  <div>
                    <button
                      style={{
                        backgroundColor: isProductInCart ? "red" : "#09f",
                      }}
                      onClick={() =>
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product)
                      }
                    >
                      {isProductInCart ? (
                        <RemoveFromCartIcon />
                      ) : (
                        <AddToCartIcon />
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </main>
      <button className="loadMore-btn" onClick={(e) => handleClick(e)}>
        Load More
      </button>
    </>
  );
};

export default Products;
