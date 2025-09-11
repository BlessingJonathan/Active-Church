import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ActiveLogo from '../assets/Vector.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/"><img src={ActiveLogo} alt="The Active Church Logo" /></Link>
      </div>
      <nav className="nav-links">
        <a href="#">OUR VISION</a>
        <Link to="/give">GIVE</Link>
        <a href="#">WATCH LIVE</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Navbar;
