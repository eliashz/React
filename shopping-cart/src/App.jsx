import { useEffect, useState } from "react";
import Products from "./components/Products";
import { useFilters } from "./hooks/";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { findCategories } from "./helpers";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cart";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/products.slice";

function App() {
  const { data, isError, isLoading, isSuccess } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  console.log("data", data);

  const { filterProducts, setFilters, filters } = useFilters();

  const filteredProducts = filterProducts(data);

  // const orderedProducts = orderProductsByPrice(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  /*   useEffect(() => {
    if (!data) return;
    setProducts(data.products);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Math.min(...data.products.map((d) => d.price)),
      maxPrice: Math.max(...data.products.map((d) => d.price)),
      maxValue: Math.max(...data.products.map((d) => d.price)),
    }));
  }, [data]); */

  return (
    <>
      {isLoading && <h5>Loading...</h5>}
      {isError && <h5>Error</h5>}
      {isSuccess && (
        <CartProvider>
          <Header categories={findCategories(data)} />
          <Cart />
          <Products products={filteredProducts} />
          {/* <Footer /> */}
        </CartProvider>
      )}
    </>
  );
}

export default App;
