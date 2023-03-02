import React from "react";
import Filters from "./Filters";

const Header = ({ categories }) => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters categories={categories} />
    </header>
  );
};

export default Header;
