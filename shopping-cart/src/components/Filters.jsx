import React, { useId } from "react";
import { useFilters } from "../hooks";
import "./Filters.css";

const Filters = ({ categories }) => {
  const { setFilters, filters, filterProducts } = useFilters();

  const maxPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMaxPrice = (e) => {
    setFilters((prevState) => ({ ...prevState, maxPrice: e.target.value }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({ ...prevState, category: e.target.value }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={maxPriceFilterId}>Price</label>
        <input
          type="range"
          id={maxPriceFilterId}
          min={filters.minPrice}
          max={filters.maxValue}
          value={filters.maxPrice}
          onChange={handleChangeMaxPrice}
        />
        <span>${filters.maxPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filters;
