import React from "react";
import Filters from "./Filters";

const Header = ({ filters, setFilters, categories }) => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
      />
    </header>
  );
};

export default Header;
