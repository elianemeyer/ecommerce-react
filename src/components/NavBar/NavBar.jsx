import React from 'react';

import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <nav className="nav-bar">
        <div>
            <a className="logo" href="#">
                <img src="/logo.png" width="115px" alt="Nature Mission"/>
            </a>
        </div>
        <div>
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>

              <NavLink to="/category/canvas">
                <li>Textile Art</li>
              </NavLink>

              <NavLink to="/category/clothing">
                <li>Clothing</li>
              </NavLink>

              <NavLink to="/category/deco">
                <li>Deco</li>
              </NavLink>

                <li><CartWidget /></li>
            </ul>
        </div>
      </nav>
    );
  }
  
  export default NavBar;