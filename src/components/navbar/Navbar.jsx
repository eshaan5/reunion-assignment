import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <BiEnvelopeOpen className="navbar-icon" size={28} />
        <h3>Estatery</h3>
      </a>
      <div className="nav-options">
        <a href="#" className="active">
          Rent
        </a>
        <a href="#">Buy</a>
        <a href="#">Sell</a>
        <select className="nav-select">
          <option value="">Manage Property</option>
        </select>
        <select className="nav-select">
          <option value="">Resources</option>
        </select>
      </div>
      <div className="nav-right">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
