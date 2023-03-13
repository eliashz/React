import React, { useContext } from "react";
import { FiltersContext } from "../context/filters";

const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price <= filters.maxPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const orderProductsByPrice = (products) => {
    return products.sort((a, b) => a.price - b.price);
  };

  return { filterProducts, setFilters, filters, orderProductsByPrice };
};

export default useFilters;
