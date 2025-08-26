import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav style={{background:"#333", padding:"10px"}}>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Header;