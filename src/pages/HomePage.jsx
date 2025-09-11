import { Link } from "react-router-dom";
import React from "react";
import "./HomePage.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCollage from '../assets/WhatsApp Image 2025-09-10 at 11.54.50_ef357714.jpg';

const HomePage = () => {
  return (
    <div>
  <Navbar />

      <section className="banner">
        <div className="hero-left">
          <h1>
            Welcome To
            <span>The Active Church</span>
          </h1>
          <p>
            A place where faith, hope, and love come together. Join our welcoming community as we grow in Christ and serve others.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn primary"><span className="iconjoin"><i className="fas fa-users"></i></span> Join Our Services</a>
            <a href="#" className="btn secondary">Watch Live</a>
          </div>
        </div>
        <div className="hero-right">
          <img src={HeroCollage} alt="Hero Collage" className="hero-collage" />
        </div>
      </section>

      <section className="welcome-section">
        <h1 className="welcome-title">Welcome Home</h1>
        <p className="welcome-subtitle">Whether you're new to faith or have been walking with Christ for years,<br />The Active Church is a place where you can belong, grow, and serve.</p>
        <div className="pillars-container">
          <div className="pillar">
            <span className="iconpillar"><i className="fas fa-heart"></i></span>
            <h3 className="pillar-title">Belong</h3>
            <p className="pillar-description">Find your place in our loving community where everyone is welcome.</p>
          </div>
          <div className="pillar">
            <span className="iconpillar"><i className="fas fa-book-open"></i></span>
            <h3 className="pillar-title">Grow</h3>
            <p className="pillar-description">Deepen your faith through worship, study, and fellowship.</p>
          </div>
          <div className="pillar">
            <span className="iconpillar"><i className="fas fa-users"></i></span>
            <h3 className="pillar-title">Serve</h3>
            <p className="pillar-description">Make a difference in our community and beyond through service.</p>
          </div>
        </div>

        <div className="upcoming-events" id="ourservice">
          <h2 className="events-title">Upcoming Events</h2>
          <p className="events-subtitle">Join us for worship, fellowship, and spiritual growth</p>
          <div className="events-container">
            <div className="event-card">
              <h3 className="event-title">Sunday Service</h3>
              <p className="event-description">Join us for worship, prayer, and fellowship</p>
              <div className="event-details">
                <div className="event-detail"><span className="detail-text"><span className="icon"><i className="fas fa-calendar"></i></span> Every Sunday</span></div>
                <div className="event-detail"><span className="detail-text"><span className="icon"><i className="fas fa-clock"></i></span> 9:00 AM</span></div>
                <div className="event-detail"><span className="detail-text"><span className="icon"><i className="fas fa-map-marker-alt"></i></span> 72 Marlborough rd, Springfield</span></div>
              </div>
            </div>
            <div className="event-card">
              <h3 className="event-title">Youth Group</h3>
              <p className="event-description">Fun activities and spiritual growth for teens</p>
              <div className="event-details">
                <div className="event-detail"><span className="detail-text"><span className="icon"><i className="fas fa-calendar"></i></span> Fridays</span></div>
                <div className="event-detail"><span className="detail-text"><span className="icon"><i className="fas fa-clock"></i></span> 6:30 PM</span></div>
                <div className="event-detail"><span className="detail-text"><span className="icon"><i className="fas fa-map-marker-alt"></i></span> 72 Marlborough rd, Springfield</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h1>Ready to Take the Next Step?</h1>
        <p>We'd love to meet you and help you on your spiritual journey</p>
        <a href="#" className="contact-btn">Contact Us</a>
      </section>

  <Footer />
    </div>
  );
};

export default HomePage;
