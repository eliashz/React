import { useState } from "react";
import Products from "./components/Products";
import { useFetch } from "./hooks/";
import { url } from "./constants";
import { products as initialProducts } from "../db.json";

function App() {
  // const { data, loading, isError, isSuccess } = useFetch(url.products);

  const [products] = useState(initialProducts);

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return (
    <>
      {/*       {loading && <h5>Loading...</h5>}
      {isError && <h5>Error</h5>}
      {isSuccess && <Products products={products} />} */}
      <Products products={products} />
    </>
  );
}

export default App;
