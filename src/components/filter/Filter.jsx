import React from "react";
import "./filter.css";

const Filter = ({ setLocation, setRange, setType, filter }) => {
  return (
    <div className="filter">
      <div className="filter-item">
        <label>Location</label>
        <select onChange={(e) => {
          setLocation(e.target.value);
        }}>
          <option value="">Select</option>
          <option value="NY">New York, USA</option>
          <option value="TX">Texus, USA</option>
          <option value="IN">Indiana, USA</option>
        </select>
      </div>
      <div className="hr" />
      <div className="filter-item">
        <label>When</label>
        <input type="text" placeholder="Select Move-in Date" onFocus={(e) => (e.target.type = "date")} />
      </div>
      <div className="hr" />
      <div className="filter-item">
        <label>Price</label>
        <select onChange={(e) => {
          setRange(e.target.value);
        }}>
          <option value="">Select</option>
          <option value="$500 - $2500">$500 - $2500</option>
          <option value="$2500 - $5000">$2500 - $5000</option>
          <option value="$5000 - $7500">$5000 - $7500</option>
        </select>
      </div>
      <div className="hr" />
      <div className="filter-item">
        <label>Property Type</label>
        <select onChange={(e) => {
          setType(e.target.value);
        }}>
          <option value="">Select</option>
          <option value="house">Houses</option>
          <option value="villa">Villas</option>
          <option value="farm">Farm House</option>
        </select>
      </div>
      <div className="hr" />
      <button onClick={filter} className='submit'>Search</button>
    </div>
  );
};

export default Filter;