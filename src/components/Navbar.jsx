import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import ActiveLogo from '../assets/Vector.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={ActiveLogo} alt="The Active Church Logo" />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/vision">OUR VISION</Link>
        <Link to="/give">GIVE</Link>
        <Link to="/watch">WATCH LIVE</Link>
        <Link to="/contact">CONTACT US</Link>
      </nav>
    </header>
  );
};

export default Navbar;
