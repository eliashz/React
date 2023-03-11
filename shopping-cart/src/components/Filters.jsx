import React, { useId } from "react";
import formatCurrency from "../helpers/formatCurrency";
import { useFilters } from "../hooks";
import "./Filters.css";
import { useSelector } from "react-redux";

const Filters = () => {
  const { setFilters, filters, orderProductsByPrice } = useFilters();
  const { categories } = useSelector((state) => state.products);

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
        <span>{formatCurrency(filters.minPrice)}</span>
        <input
          type="range"
          id={maxPriceFilterId}
          min={filters.minPrice}
          max={filters.maxValue}
          value={filters.maxPrice}
          onChange={handleChangeMaxPrice}
        />
        <span>{formatCurrency(filters.maxPrice)}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">all</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => alert("Fuerte chichón.")}>
        {filters.lowToHigh ? "Lowest to Highest" : "Highest to Lowest"}
      </button>
    </section>
  );
};

export default Filters;
