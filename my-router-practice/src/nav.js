import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
  <nav>
      <h3>
          Log
      </h3>
      <ul className="nav-links">
          <Link style={navStyle} to='/about'><li>about</li></Link>
          <Link style ={navStyle} to='/shop'><li>shop</li></Link>
      </ul>
  </nav>
  );
}

export default Nav;