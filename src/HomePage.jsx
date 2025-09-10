import React from "react";

const HomePage = () => {
  // Sidebar toggle functions (replace with React state if needed)
  const showSidebar = () => {
    document.querySelector(".sidebar").style.display = "block";
  };
  const closeSidebar = () => {
    document.querySelector(".sidebar").style.display = "none";
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src="images/Vector.png" alt="logo" />
        </div>
        <nav className="nav-links">
          <a href="index.html">HOME</a>
          <a href="OurVision.html">OUR VISION</a>
          <a href="offering.html">GIVE</a>
          <a href="watchlive.html">WATCH LIVE</a>
          <a href="ContactUs.html">CONTACT US</a>
        </nav>
        <button
          className="showonmobile"
          onClick={showSidebar}
          aria-label="Open Sidebar"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#1f1f1f">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
        <nav className="sidebar" style={{ display: "none" }}>
          <ul>
            <li className="showonmobile">
              <a href="#" onClick={closeSidebar} aria-label="Close Sidebar">
                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#1f1f1f">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </a>
            </li>
            <li className="dontshowonmobile">
              <a href="index.html">HOME</a>
            </li>
            <li className="dontshowonmobile">
              <a href="OurVision.html">OUR VISION</a>
            </li>
            <li className="dontshowonmobile">
              <a href="offering.html">GIVE</a>
            </li>
            <li className="dontshowonmobile">
              <a href="watchlive.html">WATCH LIVE</a>
            </li>
            <li className="dontshowonmobile">
              <a href="ContactUs.html">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="banner">
        <div className="hero-text">
          <h1>
            Welcome To <br />
            <span>The Active Church</span>
          </h1>
          <p>
            A place where faith, hope, and love come together. <br /> Join our welcoming
            community as we grow in Christ and serve others.
          </p>
          <div className="hero-buttons">
            <a href="index.html" className="btn primary">
              <span className="iconjoin">
                <i className="fas fa-users"></i>
              </span>{" "}
              Join Our Services
            </a>
            <a href="watchlive.html" className="btn secondary">
              Watch Live
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="images/1.png" alt="Hero Image" />
        </div>
      </div>

      <section className="welcome-section">
        <h1 className="welcome-title">Welcome Home</h1>
        <p className="welcome-subtitle">
          Whether you're new to faith or have been walking with Christ for years,
          <br />
          The Active Church is a place where you can belong, grow, and serve.
        </p>

        <div className="pillars-container">
          <div className="pillar">
            <span className="iconpillar">
              <i className="fas fa-heart"></i>
            </span>
            <h3 className="pillar-title">Belong</h3>
            <p className="pillar-description">
              Find your place in our loving community where everyone is welcome.
            </p>
          </div>

          <div className="pillar">
            <span className="iconpillar">
              <i className="fas fa-book-open"></i>
            </span>
            <h3 className="pillar-title">Grow</h3>
            <p className="pillar-description">
              Deepen your faith through worship, study, and fellowship.
            </p>
          </div>

          <div className="pillar">
            <span className="iconpillar">
              <i className="fas fa-users"></i>
            </span>
            <h3 className="pillar-title">Serve</h3>
            <p className="pillar-description">
              Make a difference in our community and beyond through service.
            </p>
          </div>
        </div>

        <div className="upcoming-events" id="ourservice">
          <h2 className="events-title">Upcoming Events</h2>
          <p className="events-subtitle">
            Join us for worship, fellowship, and spiritual growth
          </p>

          <div className="events-container">
            <div className="event-card">
              <h3 className="event-title">Sunday Service</h3>
              <p className="event-description">
                Join us for worship, prayer, and fellowship
              </p>
              <div className="event-details">
                <div className="event-detail">
                  <span className="detail-text">
                    <span className="icon">
                      <i className="fas fa-calendar"></i>
                    </span>{" "}
                    Every Sunday
                  </span>
                </div>
                <div className="event-detail">
                  <span className="detail-text">
                    <span className="icon">
                      <i className="fas fa-clock"></i>
                    </span>{" "}
                    9:00 AM
                  </span>
                </div>
                <div className="event-detail">
                  <span className="detail-text">
                    <span className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>{" "}
                    72 Marlborough rd, Springfield
                  </span>
                </div>
              </div>
            </div>

            <div className="event-card">
              <h3 className="event-title">Youth Group</h3>
              <p className="event-description">
                Fun activities and spiritual growth for teens
              </p>
              <div className="event-details">
                <div className="event-detail">
                  <span className="detail-text">
                    <span className="icon">
                      <i className="fas fa-calendar"></i>
                    </span>{" "}
                    Fridays
                  </span>
                </div>
                <div className="event-detail">
                  <span className="detail-text">
                    <span className="icon">
                      <i className="fas fa-clock"></i>
                    </span>{" "}
                    6:30 PM
                  </span>
                </div>
                <div className="event-detail">
                  <span className="detail-text">
                    <span className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>{" "}
                    72 Marlborough rd, Springfield
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h1>Ready to Take the Next Step?</h1>
        <p>We'd love to meet you and help you on your spiritual journey</p>
        <a href="ContactUs.html" className="contact-btn">
          Contact Us
        </a>
      </section>
      {/* footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-column1">
            <img src="images/Vector-1.png" alt="The Active Church Logo" className="footer-logo" />
            <p>A Church Raising A New Generation</p>
            <p>A Generation That Will Change This Nation</p>
            <p>To God Be The Glory.</p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="OurVision.html">Our Vision</a>
              </li>
              <li>
                <a href="watchlive.html">Service Times</a>
              </li>
              <li>
                <a href="offering.html">Give Online</a>
              </li>
              <li>
                <a href="watchlive.html">Watch Live</a>
              </li>
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
    </>
  );
};

export default HomePage;
