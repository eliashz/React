import React from "react";
import Filters from "./Filters";

const Header = ({ filters, changeFilters, categories }) => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters
        filters={filters}
        changeFilters={changeFilters}
        categories={categories}
      />
    </header>
  );
};

export default Header;
