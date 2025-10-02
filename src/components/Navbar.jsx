import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ActiveLogo from "../assets/Vector.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "OUR VISION", path: "/ourvision" },
    { label: "GIVE", path: "/give" },
    { label: "WATCH LIVE", path: "/watchlive" },
    { label: "CONTACT US", path: "/contactus" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={ActiveLogo} alt="The Active Church Logo" />
      </div>

      {/* Desktop Links */}
      <nav className="nav-links desktop">
        {navItems.map((item) => (
          <span
            key={item.path}
            onClick={() => handleNavClick(item.path)}
            className={location.pathname === item.path ? "active-nav" : ""}
          >
            {item.label}
          </span>
        ))}
      </nav>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Overlay + Slide Panel */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
      <nav className={`mobile-panel ${menuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        {navItems.map((item) => (
          <span
            key={item.path}
            onClick={() => handleNavClick(item.path)}
            className={location.pathname === item.path ? "active-nav" : ""}
          >
            {item.label}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
