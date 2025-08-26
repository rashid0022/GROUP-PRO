import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{background:"#333", padding:"10px"}}>
      <NavLink to="/" end style={{margin:"0 10px", color:"#fff"}}>Home</NavLink>
      <NavLink to="/about" style={{margin:"0 10px", color:"#fff"}}>About</NavLink>
      <NavLink to="/contact" style={{margin:"0 10px", color:"#fff"}}>Contact</NavLink>
    </nav>
  );
}
