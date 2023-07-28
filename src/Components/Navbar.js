import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    let navBox={
        padding: "10px",
        margin: "20px",
        textAlign: "center",
        display: "flex",
        justifyContent:"space-around",
    }
  return (
    <div style={navBox}>
        
      
        <Link to="/home">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
}
