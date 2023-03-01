import React from "react";
import "./Filters.css";

const Filters = () => {
  return (
    <section>
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" id="id" min="0" max="1900" />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="sampartphones">Smart Phones</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
