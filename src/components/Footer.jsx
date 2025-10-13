import React from 'react';
import './Footer.css';
import FooterLogo from '../assets/Vector-1.png';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Stack } from '@mui/material';
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon fontSize="large" />
            </a>
          </div>

        </div>
        <div className="footer-column">

          <div className="footer-column-2">
            <h4 className='column-header'>Quick Links</h4>
            <ul className='links'>
              <li><a href="/vision">Our Vision</a></li>
              <li><a href="/service">Service Times</a></li>
              <li><a href="/give">Give Online</a></li>
              <li><a href="/watchlive">Watch Live</a></li>
            </ul>
          </div>
          <div className="footer-column-1">
            <h4 className='column-header contact' >Contact</h4>
            <div className='col-1-info'>
              <Stack className='address' direction="row" alignItems="center" spacing={1}>
                <LocationOnOutlinedIcon fontSize="small" className="location-icon" />
                <span>72 Marlborough Road, Springfield</span>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailOutlinedIcon fontSize="small" className="email-icon" />
                <span>info@theactivechurch.org</span>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <hr className='hr' />
      <p className="copyright">© 2025 The Active Church. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
