import {
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./GivePage.css";

const GivePage = () => {
  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      "& fieldset": { border: "none" },
      "&:hover fieldset": { border: "none" },
      "&.Mui-focused fieldset": { border: "none" },
    },
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage:
            "url('src/assets/SnapInsta.to_504361137_18326229442205809_1207328382216318209_n.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          marginTop: "5%", // Add this line
          padding: "4%",
        }}
      >
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
        <Container sx={{ position: "relative", zIndex: 1 }}>
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
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mt: 10, fontWeight: "bold" }}
        >
          Ways to Give
        </Typography>
        <Typography variant="h6" align="center" gutterBottom sx={{ mb: 7 }}>
          Choose the method that works best for you.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            mb: 5,
            width: "100%",
            minHeight: { xs: "auto", md: "440px" }, // increased minHeight for desktop
          }}
        >
          {/* Online Giving */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)", // Thin, even shadow all around
              minHeight: "340px",
              maxWidth: "420px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2.5% 3%",
              marginRight: "3%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                borderRadius: "50%",
                width: 80,
                height: 80,
                margin: "0 auto 20px auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CreditCardIcon sx={{ color: "red", fontSize: 48 }} />
            </Box>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Online Giving
            </Typography>
            <span style={{ textAlign: "center", marginBottom: "16px" }}>
              Secure online donations via credit card or bank transfer
            </span>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "0",
                marginTop: "16px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2em",
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                >
                  &#9679;
                </span>
                <span style={{ color: "black" }}>
                  One-time or recurring gifts
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2em",
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                >
                  &#9679;
                </span>
                <span style={{ color: "black" }}>Secure SSL encryption</span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2em",
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                >
                  &#9679;
                </span>
                <span style={{ color: "black" }}>Instant confirmation</span>
              </li>
            </ul>
          </Box>
          {/* In-Person Giving */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)", // Thin, even shadow all around
              minHeight: "340px",
              maxWidth: "420px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2.5% 3%",
              marginLeft: "3%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                borderRadius: "50%",
                width: 80,
                height: 80,
                margin: "0 auto 20px auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ApartmentIcon sx={{ color: "red", fontSize: 48 }} />
            </Box>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              In-Person
            </Typography>
            <span style={{ textAlign: "center", marginBottom: "16px" }}>
              Traditional offering during Sunday services
            </span>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: "0",
                marginTop: "16px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2em",
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                >
                  &#9679;
                </span>
                <span style={{ color: "black" }}>Cash or check</span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2em",
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                >
                  &#9679;
                </span>
                <span style={{ color: "black" }}>Offering envelopes</span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    color: "red",
                    fontSize: "1.2em",
                    marginRight: "8px",
                    verticalAlign: "middle",
                  }}
                >
                  &#9679;
                </span>
                <span style={{ color: "black" }}>Anonymous giving</span>
              </li>
            </ul>
          </Box>
        </Box>
      </section>
      {/* Banking Details & Debit Order Form with QR code space */}
      <section>
        <Container
          sx={{
            position: "relative",
            backgroundColor: "transparent",
            borderRadius: "16px",
            padding: "5% 3%",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            maxWidth: "80%",
            backgroundImage: "url('src/assets/Frame 93.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mt: 8,
          }}
        >
          {/* Centered QR Code Box */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "2% 4%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                maxWidth: "320px",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "green",
                  textAlign: "center",
                  mb: 2,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                SCAN, PAY, AND ENJOY YOUR DAY
              </Typography>
              <img
                src="src/assets/qrcode.jpeg"
                alt="Payment Options"
                style={{
                  maxWidth: "180px",
                  maxHeight: "120px",
                  marginBottom: "16px",
                }}
              />
              <img
                src="src/assets/QR-code (1)(1).png"
                alt="QR Code"
                style={{ maxWidth: "180px", maxHeight: "120px" }}
              />
            </Box>
          </Box>
          {/* Inline Bank Details and Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {/* Bank Details */}
            <Box sx={{ flex: 1, minWidth: "300px" }}>
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
              {/* Debit Order Heading and Description */}
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "white", mt: 4 }}
              >
                Debit Order
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
                If you feel called to give consistently and support the church
                month-to-month, you can authorize a debit order by completing
                the following details:
              </Typography>
            </Box>
            {/* Debit Order Form */}
            <Box sx={{ flex: 1, minWidth: "300px" }}>
              <form>
                <Grid container spacing={2}>
                  {/* First Name & Last Name */}
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        First Name
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Last Name
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>

                  {/* Contact Number & Email */}
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Contact Number
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Email
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>

                  {/* Bank Name & Branch Number */}
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Bank Name
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Branch Number
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>

                  {/* Account Number & Name Printed */}
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Account Number
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Name Printed
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>

                  {/* Date of Debit Order & Amount */}
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Date of Debit Order
                      </span>
                      <TextField
                        type="date"
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ color: "white", marginBottom: "4px" }}>
                        Amount
                      </span>
                      <TextField
                        fullWidth
                        size="small"
                        variant="outlined"
                        sx={textFieldStyle}
                      />
                    </Box>
                  </Grid>
                </Grid>

                {/* Submit Button */}
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
            </Box>
          </Box>
        </Container>
      </section>

      {/* Why We Give */}
      <section
        style={{
          position: "relative",
          backgroundImage:
            "url('src/assets/SnapInsta.to_504484732_18326229409205809_958354511391319144_n.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          marginTop: "8%",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "black", fontWeight: "bold" }}
        >
          Why We Give
        </Typography>
        <Typography
          align="center"
          variant="h6"
          className="scripture"
          gutterBottom
          sx={{ color: "red", fontStyle: "italic" }}
        >
          "Each of you should give what you have decided in your heart to give,
          not reluctantly or under compulsion, for God loves a cheerful giver."
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          gutterBottom
          sx={{ color: "grey" }}
        >
          2 Corinthians 9:7
        </Typography>
        <Typography align="center" variant="body1" sx={{ color: "grey" }}>
          Giving is an act of worship and a way to participate in God's work in
          the world. When we give, we express our trust in God's provision and
          our commitment to His kingdom.
        </Typography>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GivePage;
