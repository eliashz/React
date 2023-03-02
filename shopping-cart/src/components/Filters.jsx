import React, { useId } from "react";
import "./Filters.css";

const Filters = ({ filters, changeFilters, categories }) => {
  const maxPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMaxPrice = (e) => {
    changeFilters((prevState) => ({ ...prevState, maxPrice: e.target.value }));
  };

  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({ ...prevState, category: e.target.value }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={maxPriceFilterId}>Price</label>
        <input
          type="range"
          id={maxPriceFilterId}
          // key={`${Math.floor(Math.random() * 1000)}-min`}
          min={filters.minPrice}
          max={filters.maxValue}
          defaultValue={filters.maxPrice}
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
