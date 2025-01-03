import React from 'react';
import logo from "../assets/logo.png"

import "./header.css"

const Header = () => {
  return (
      <nav className='nav'>
        <img src={logo} alt="Logo" />
        <ul className="navul">
          <li>My Projects</li>
          <li>Services</li>
          <li>Cart</li>
        </ul>
      </nav>
  );
};

export default Header;
