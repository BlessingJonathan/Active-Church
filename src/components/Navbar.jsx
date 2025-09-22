import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ActiveLogo from "../assets/Vector.png";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "OUR VISION", path: "/ourvision" },
    { label: "GIVE", path: "/give" },
    { label: "WATCH LIVE", path: "/watchlive" },
    { label: "CONTACT US", path: "/contactus" },
  ];

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={ActiveLogo} alt="The Active Church Logo" style={{ cursor: "pointer" }} />
      </div>

      <nav className="nav-links">
        {navItems.map((item) => (
          <span
            key={item.path}
            onClick={() => navigate(item.path)}
            className={location.pathname === item.path ? "active-nav" : ""}
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            {item.label}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
