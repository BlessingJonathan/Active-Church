import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./GivePage.css";

const GivePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = (open) => () => setSidebarOpen(open);

  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar className="navbar">
          <img src="images/Vector.png" alt="logo" className="logo" />
          <div className="nav-links">
            {["HOME", "OUR VISION", "GIVE", "WATCH LIVE", "CONTACT US"].map(
              (link) => (
                <Button key={link} color="inherit" href={`${link}.html`}>
                  {link}
                </Button>
              )
            )}
          </div>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar(true)}
            className="mobile-menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={sidebarOpen} onClose={toggleSidebar(false)}>
        <List>
          {["HOME", "OUR VISION", "GIVE", "WATCH LIVE", "CONTACT US"].map(
            (link) => (
              <ListItem
                button
                key={link}
                component="a"
                href={`${link}.html`}
                onClick={toggleSidebar(false)}
              >
                <ListItemText primary={link} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Typography variant="h3" gutterBottom>
            Give
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Your generosity helps us serve our community and spread God's love.
            <br /> Thank you for partnering with us in ministry.
          </Typography>
        </Container>
      </section>

      {/* Ways to Give */}
      <section className="section">
        <Container>
          <Typography variant="h4" gutterBottom align="center">
            Ways to Give
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Choose the giving method that works best for you
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              {
                title: "Online Giving",
                icon: "💳",
                items: [
                  "One-time or recurring gifts",
                  "Secure SSL encryption",
                  "Instant confirmation",
                ],
              },
              {
                title: "In-Person",
                icon: "🏢",
                items: [
                  "Cash or check",
                  "Offering envelopes",
                  "Anonymous giving",
                ],
              },
            ].map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.title}>
                <Card className="give-card">
                  <CardContent>
                    <Typography variant="h3" align="center">
                      {card.icon}
                    </Typography>
                    <Typography
                      variant="h5"
                      align="center"
                      className="card-title"
                    >
                      {card.title}
                    </Typography>
                    <ul>
                      {card.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Bank Details */}
      <section className="section alt-section">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                EFT / Direct Deposit
              </Typography>
              <Typography>
                Bank Name: <strong>Nedbank</strong>
                <br />
                Account Name: <strong>Active Church</strong>
                <br />
                Account Number: <strong>1385041315</strong>
              </Typography>
              <Typography>
                Kindly use your name as the payment reference.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Debit Order
              </Typography>
             
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Why We Give */}
      <section className="section">
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Why We Give
          </Typography>
          <Typography align="center" variant="h6" className="scripture">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."
          </Typography>
          <Typography align="center" variant="subtitle1" gutterBottom>
            2 Corinthians 9:7
          </Typography>
          <Typography align="center" variant="body1">
            Giving is an act of worship and a way to participate in God's work
            in the world. When we give, we express our trust in God's provision
            and our commitment to His kingdom.
          </Typography>
        </Container>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <img
                src="images/Vector-1.png"
                alt="The Active Church Logo"
                className="footer-logo"
              />
              <Typography>A Church Raising A New Generation</Typography>
              <Typography>A Generation That Will Change This Nation</Typography>
              <Typography>To God Be The Glory.</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Quick Links</Typography>
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
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Contact</Typography>
              <Typography>72 Marlborough Road, Springfield</Typography>
              <Typography>info@theactivechurch.org</Typography>
            </Grid>
          </Grid>
          <hr />
          <Typography align="center" variant="body2">
            © 2025 The Active Church. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default GivePage;
