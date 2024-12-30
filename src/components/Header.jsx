import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdContacts } from "react-icons/io";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";

import "./header.css"

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <img src="src\assets\logo.png" alt="Logo" />
      </div>
      <nav className='nav'>
        <ul className='navul'>
          <li><Link to="/" className='li'><IoMdContacts className='icons'/>Resolve Your issue <br />+918619448841</Link></li>
          <li><Link to="/features" className='li'><FaProjectDiagram className='icons'/>My Projects</Link></li>
          <li><Link to="/pricing" className='li'><FaUser className='icons'/>Sign In</Link></li>
          <li><Link to="/contact" className='li'><BsCartCheck className='icons'/>Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
