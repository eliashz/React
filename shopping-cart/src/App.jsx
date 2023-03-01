import { useEffect, useState } from "react";
import Products from "./components/Products";
import { useFetch } from "./hooks/";
import { url } from "./constants";
import Header from "./components/Header";

function App() {
  const { data, loading, isError, isSuccess } = useFetch(url.products);
  const [products, setProducts] = useState([]);
  // const [max, setMax] = useState();

  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 0,
  });

  useEffect(() => {
    if (!data) return;
    setProducts(data);
    setFilters({
      ...filters,
      maxPrice: Math.max(...products.map((d) => d.price)),
    });
    console.log();
  }, [data]);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price <= filters.maxPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      {loading && <h5>Loading...</h5>}
      {isError && <h5>Error</h5>}
      {isSuccess && <Products products={filteredProducts} />}
      {/* <Products products={products} /> */}
    </>
  );
}

export default App;
