import React from 'react';
import Logo from '../assets/logo.png';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <div className="navbar_container">
        <ul className="navbar_left">
          <div className="navbar_left-logo">
            <img src={Logo} alt="logo" />
          </div>
        </ul>
        <ul className="navbar_right">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li> 
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
        
      </div>
    </nav>
  )
}

export default Nav
