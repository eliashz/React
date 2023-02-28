import Products from "./components/Products";
import { useFetch } from "./hooks/";
import { url } from "./constants";

function App() {
  const { data, loading, isError, isSuccess } = useFetch(url.products);

  return (
    <>
      {loading && <h5>Loading...</h5>}
      {isError && <h5>Error</h5>}
      {isSuccess && <Products products={data} />}
    </>
  );
}

export default App;
