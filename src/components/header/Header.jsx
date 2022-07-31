import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Search properties to rent</h1>
      <select className="search">
        <option value="">Search with Search Bar</option>
      </select>
    </div>
  );
};

export default Header;
