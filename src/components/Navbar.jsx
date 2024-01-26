import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "../styles/Navbar.css";
import Logo from '../assets/Logo.png';
const Navbar=() => {


  return (
    <header>
    <nav id="navbar" className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:"#f3f3f3"}}>
      <div className="container">
    <img id="logo-img" src={Logo}/><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button><div className="collapse navbar-collapse" id="navbarNav">
      {/* <Link to="/">Home</Link>
        <Link to="/about">About </Link>*/}
        <Link to="/menu">Menu</Link>
    {/* <Link to="/book" style={{marginLeft:"5px"}}>Book</Link>*/}
      
      </div></div>
    </nav></header>
  );
}

export default Navbar;