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
    setMenuOpen(false); // close menu on link click
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img
          src={ActiveLogo}
          alt="The Active Church Logo"
          style={{ cursor: "pointer" }}
        />
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
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

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
