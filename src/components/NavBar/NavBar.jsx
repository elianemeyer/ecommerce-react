import React from 'react';

import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
      <nav className="nav-bar">
        <div>
            <a className="logo" href="#">
                <img src="logo.png" width="115px" alt="Nature Mission"/>
            </a>
        </div>
        <div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#textile-art">Textile Art</a></li>
                <li><a href="#clothing">Clothing</a></li>
                <li><a href="#home-and-deco">Home & Deco</a></li>
                <li><CartWidget /></li>
            </ul>
        </div>
      </nav>
    );
  }
  
  export default NavBar;