import React from 'react';
import './Footer.css';
import FooterLogo from '../assets/Vector-1.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column1">
          <img src={FooterLogo} alt="The Active Church Logo" className="footer-logo" />
          <p>A Church Raising A New Generation</p>
          <p>A Generation That Will Change This Nation</p>
          <p>To God Be The Glory.</p>
          <div className="footer-social">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">YT</a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Our Vision</a></li>
            <li><a href="#">Service Times</a></li>
            <li><a href="#">Give Online</a></li>
            <li><a href="#">Watch Live</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>72 Marlborough Road, Springfield</p>
          <p>info@theactivechurch.org</p>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2025 The Active Church. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
