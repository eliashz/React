import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ filters, setFilters, categories }) => {
  const handleChangeMaxPrice = (e) => {
    setFilters({ ...filters, maxPrice: e.target.value });
  };

  const handleChangeCategory = (e) => {
    setFilters({ ...filters, category: e.target.value });
    console.log(e.target.value);
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="id"
          min={filters.minPrice}
          max={filters.maxValue}
          onChange={handleChangeMaxPrice}
        />
        <span>${filters.maxPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChangeCategory}>
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
