import { useEffect, useState } from "react";
import Products from "./components/Products";
import { useFetch, useFilters } from "./hooks/";
import { url } from "./constants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { findCategories } from "./helpers";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cart";
//

function App() {
  const { data, loading, isError, isSuccess } = useFetch(url.products);
  const [products, setProducts] = useState([]);

  const { filterProducts, setFilters, filters, orderProductsByPrice } =
    useFilters();

  const filteredProducts = filterProducts(products);

  const orderedProducts = orderProductsByPrice(products);

  useEffect(() => {
    if (!data) return;
    setProducts(data.products);
    setFilters({
      ...filters,
      minPrice: Math.min(...products.map((d) => d.price)),
      maxPrice: Math.max(...products.map((d) => d.price)),
      maxValue: Math.max(...products.map((d) => d.price)),
    });
  }, [data]);

  console.log(data);
  return (
    <>
      {loading && <h5>Loading...</h5>}
      {isError && <h5>Error</h5>}
      {isSuccess && (
        <CartProvider>
          <Header categories={findCategories(products)} />
          <Cart />
          <Products products={filteredProducts} />
          <Footer />
        </CartProvider>
      )}
    </>
  );
}

export default App;
