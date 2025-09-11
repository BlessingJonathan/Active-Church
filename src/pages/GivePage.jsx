import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  TextField,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "./GivePage.css";

const GivePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = (open) => () => setSidebarOpen(open);
  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      "& fieldset": {
        border: "none", // Remove default border
      },
      "&:hover fieldset": {
        border: "none", // Remove hover border
      },
      "&.Mui-focused fieldset": {
        border: "none", // Remove focus border
      },
    },
  };

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
     <section
  style={{
    color: "white",
    width: "100%", // Full viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundImage:
      "url('src/assets/SnapInsta.to_504361137_18326229442205809_1207328382216318209_n.png')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  }}
>
  {/* Optional dark overlay for better text contrast */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    }}
  ></div>

  <Container
    sx={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <Typography
      variant="h3"
      gutterBottom
      sx={{
        fontWeight: "bold",
        textShadow: "0 4px 8px rgba(0,0,0,0.5)",
      }}
    >
      Give
    </Typography>
    <Typography
      variant="h6"
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        textShadow: "0 4px 8px rgba(0,0,0,0.5)",
      }}
    >
      Your generosity helps us serve our community and spread God's love.
      <br /> Thank you for partnering with us in ministry.
    </Typography>
  </Container>
</section>


      {/* Ways to Give */}
      <section>
        <Typography variant="h4" align="center" gutterBottom sx={{ mt: 10 }}>
          Ways to Give
        </Typography>

        {/* Ways to Give Cards */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
          {/* Online Giving */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "16px",
                boxShadow: 3,
              }}
            >
              <CardContent>
                {/* Icon with circular black background */}
                <Box
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    margin: "0 auto 16px auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CreditCardIcon sx={{ color: "red", fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom>
                  Online Giving
                </Typography>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>One-time or recurring gifts</li>
                  <li>Secure SSL encryption</li>
                  <li>Instant confirmation</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          {/* In-Person Giving */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "16px",
                boxShadow: 3,
              }}
            >
              <CardContent>
                {/* Icon with circular black background */}
                <Box
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    margin: "0 auto 16px auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ApartmentIcon sx={{ color: "red", fontSize: 40 }} />
                </Box>
                <Typography variant="h5" gutterBottom>
                  In-Person
                </Typography>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li>Cash or check</li>
                  <li>Offering envelopes</li>
                  <li>Anonymous giving</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
      <section
      >
        <Container
          sx={{
            position: "relative",
            backgroundColor: "transparent",
            borderRadius: "16px",
            padding: "50px 30px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            maxWidth: "80%",
            backgroundImage: "url('src/assets/Frame 93.png')", // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Title */}

          {/* Banking Details & Debit Order Form */}
          <Grid container spacing={4}>
            {/* Bank Details */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
                EFT / Direct Deposit
              </Typography>
              <Typography sx={{ color: "white" }}>
                Bank Name: <strong>Nedbank</strong>
                <br />
                Account Name: <strong>Active Church</strong>
                <br />
                Account Number: <strong>1385041315</strong>
              </Typography>
              <Typography sx={{ mt: 2, color: "white" }}>
                Kindly use your name as the payment reference.
              </Typography>
            </Grid>

            {/* Debit Order Form */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
                Debit Order
              </Typography>
              <form>
                <TextField
                  label="First Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <TextField
                  label="Last Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <TextField
                  label="Contact Number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <TextField
                  label="Bank Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <TextField
                  label="Branch Number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <TextField
                  label="Account Number"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <TextField
                  label="Date of Debit Order"
                  type="date"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <TextField
                  label="Enter Amount"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                  }}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Why We Give */}
      <section
        style={{
          position: "relative",
          backgroundImage: "url('src/assets/SnapInsta.to_504484732_18326229409205809_958354511391319144_n.png')", // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          marginTop:"8%"
        }}
      >
       
          <Typography variant="h4" align="center" gutterBottom sx={{color:"black", fontWeight:"bold"}}>
            Why We Give
          </Typography>
          <Typography
            align="center"
            variant="h6"
            className="scripture"
            gutterBottom sx={{color:"red", fontStyle:"italic"}}
          >
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."
          </Typography>
          <Typography align="center" variant="subtitle1" gutterBottom sx={{color:"grey"}}>
            2 Corinthians 9:7
          </Typography>
          <Typography align="center" variant="body1" sx={{color:"grey"}}>
            Giving is an act of worship and a way to participate in God's work
            in the world. When we give, we express our trust in God's provision
            and our commitment to His kingdom.
          </Typography>
    
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
