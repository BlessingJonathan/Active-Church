import { Link } from "react-router-dom";
import HeroCollage from "../assets/WhatsApp Image 2025-09-10 at 11.54.50_ef357714.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import "./HomePage.css";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";



import { Stack, Typography } from "@mui/material";
const HomePage = () => {
  return (
    <div>
      <section className="banner">
        <div className="hero-left">
          <h1>
            Welcome To
            <span>The Active Church</span>
          </h1>
          <p>
            A place where faith, hope, and love come together. Join our
            welcoming community as we grow in Christ and serve others.
          </p>
          <div className="hero-buttons">
            <a href='watchlive' className="btn primary">
              <span className="iconjoin">
                <i className="fas fa-users"></i>
              </span>{" "}
              Join Our Services
            </a>
            <a href='watchlive' className="btn secondary">
              Watch Live
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src={HeroCollage} alt="Hero Collage" className="hero-collage" />
        </div>
      </section>

      <section className="welcome-section">
        <h1 className="welcome-title">Welcome Home</h1>
        <p className="welcome-subtitle">
          Whether you're new to faith or have been walking with Christ for
          years,
          <br />
          The Active Church is a place where you can belong, grow, and serve.
        </p>
        <div className="pillars-container">
          <div className="pillar">
            <div className="icon-circle">
              <FavoriteIcon fontSize="large" />
            </div>
            <h3 className="pillar-title">Belong</h3>
            <p className="pillar-description">
              Find your place in our loving community where everyone is welcome.
            </p>
          </div>
          <div className="pillar">
            <div className="icon-circle">
              <MenuBookIcon fontSize="large" />
            </div>
            <h3 className="pillar-title">Grow</h3>
            <p className="pillar-description">
              Deepen your faith through worship, study, and fellowship.
            </p>
          </div>
          <div className="pillar">
            <div className="icon-circle">
              <GroupIcon fontSize="large" />
            </div>
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
              <Typography variant="h6" className="event-title">
                Sunday Service
              </Typography>
              <Typography variant="body2" className="event-description">
                Join us for worship, prayer, and fellowship
              </Typography>
              <Stack spacing={1} mt={3}>
                <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                  <CalendarTodayOutlinedIcon sx={{ color: "grey.600" }} />
                  <span>Every Sunday</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeOutlinedIcon sx={{ color: "grey.600" }} />
                  <span>9:00 AM</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnOutlinedIcon sx={{ color: "grey.600", fontSize: 30 }} />
                  <span>72 Marlborough Rd, Springfield</span>
                </Stack>
              </Stack>
            </div>

            <div className="event-card">
              <Typography variant="h6" className="event-title">
                Youth Group
              </Typography>
              <Typography variant="body2" className="event-description">
                Fun activities and spiritual growth for teens
              </Typography>
              <Stack spacing={1} mt={3}>
                <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                  <CalendarTodayOutlinedIcon sx={{ color: "grey.600" }} />
                  <span>Fridays</span>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <AccessTimeOutlinedIcon sx={{ color: "grey.600" }} />
                  <span>6:30 PM</span>
                </Stack>
                <Stack className="Stack" direction="row" spacing={1} alignItems="center">
                  <LocationOnOutlinedIcon className="LocationOnOutlinedIcon" sx={{ color: "grey.600", fontSize: 30 }} />
                  <span>72 Marlborough Rd, Springfield</span>
                </Stack>
              </Stack>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h1>Ready to Take the Next Step?</h1>
        <p>We'd love to meet you and help you on your spiritual journey</p>
        <a href="contactus" className="contact-btn">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default HomePage;
