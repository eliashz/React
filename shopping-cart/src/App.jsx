import { useEffect, useState } from "react";
import Products from "./components/Products";
import { useFetch } from "./hooks/";
import { url } from "./constants";
import { products as initialProducts } from "../db.json";

function App() {
  const { data, loading, isError, isSuccess } = useFetch(url.products);
  const [products, setProducts] = useState([]);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (!data) return;
    setProducts(data);
    setMax(Math.max(...data.map((d) => d.price)));
    console.log(max);
  }, [data]);
  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: max,
  });

  console.log(filters);

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
      {loading && <h5>Loading...</h5>}
      {isError && <h5>Error</h5>}
      {isSuccess && <Products products={filteredProducts} />}
      {/* <Products products={products} /> */}
    </>
  );
}

export default App;
