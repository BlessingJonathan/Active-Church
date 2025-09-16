import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Typography, Box, Grid } from "@mui/material";
function Vision() {
  return (
    <div>
      <Navbar />
      <section
        style={{
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage:
            "url('src/assets/SnapInsta.to_503671807_18325249375205809_7112355811609069840_n.png')",
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
            Our Vision
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: "600px",
              margin: "0 auto",
              textShadow: "0 4px 8px rgba(0,0,0,0.5)",
            }}
          >
            Discover our mission,beliefs,values that guide everything we do as a
            community of faith
          </Typography>
        </Container>
      </section>
      <section className="our-vision-content" style={{ padding: "2rem" }}>
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start", // align text at the top
              justifyContent: "flex-start",
              gap: "2rem", // space between title and paragraph
              flexWrap: "wrap", // stack on small screens
            }}
          >
            {/* Left: Our Vision */}
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                whiteSpace: "nowrap",
              }}
            >
              Our Vision
            </Typography>

            {/* Right: Paragraph */}
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "left", maxWidth: "700px" }}
            >
              The Active Church was birthed in 2004 in our home when God called
              us very specifically to reach a nation by reaching the forgotten.
              The calling was affirmed and we went from helping churches build
              youth groups to starting a church that was youth oriented. We have
              had the privilege since the birth of this vision of seeing the
              youth grow into adults who have overcome the challenges of their
              youth and situations and are now married with children of their
              own who are planted and flourishing in their lives. The upliftment
              of lives has always made us so grateful for the calling.
            </Typography>
          </div>
        </Container>
      </section>

      <section style={{ padding: "2rem 0" }}>
        <Container>
          {/* Row 1: Image Left, Text Right */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 6, // spacing between rows
              gap: "2rem",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="src/assets/kidschurch.jpg" // Change path
              alt="Active Church Kids"
              sx={{
                width: { xs: "100%", md: "40%" },
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                objectFit: "cover",
              }}
            />
            {/* Text */}
            <Box sx={{ flex: 1, maxWidth: "600px" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Active Church Kids
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Kids can learn about Jesus and how to have a relationship with
                Him in a very exciting way, bringing the Bible to life for them.
                We are committed to providing a fun and safe environment where
                children can grow spiritually and connect with others.
              </Typography>
            </Box>
          </Box>

          {/* Row 2: Text Left, Image Right */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap-reverse", // reverse order for mobile
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            {/* Text */}
            <Box sx={{ flex: 1, maxWidth: "600px" }}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Active Youth
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                Active Youth is about young people who are passionate about
                Christ. It’s about youth who are winning in their lives and
                pursuing a relationship with their Saviour as they change the
                world around them. Enjoy a great variety of entertaining
                evenings mixed with the power of the Word.
              </Typography>
            </Box>
            {/* Image */}
            <Box
              component="img"
              src="src/assets/youth.jpg" // Change path
              alt="Active Youth"
              sx={{
                width: { xs: "100%", md: "40%" },
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                objectFit: "cover",
              }}
            />
          </Box>
        </Container>
      </section>

      <section
        style={{
          position: "relative",
          padding: "4rem 0",
          backgroundImage: "url('src/assets/img4.jpeg')", // Change this path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Full White Blur Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.4)", // Soft white
            backdropFilter: "blur(2px)", // Strong blur effect
            zIndex: 1,
          }}
        ></div>

        <Container sx={{ position: "relative", zIndex: 2 }}>
          {/* Section Title */}
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              mb: 6,
              color: "black",
            }}
          >
            What We Believe
          </Typography>

          {/* Cards Grid */}
          <Grid container spacing={4}>
            {/* Card 1 */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)", // Transparent card
                  borderRadius: "20px",
                  boxShadow: "0 0 8px rgba(0,0,0,0.15)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  padding: "1.5rem",
                  backdropFilter: "blur(12px)", // Frosted glass effect
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "red", fontSize: "36px" }}>★</span>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black", mb: 1 }}
                  >
                    Scripture
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", lineHeight: 1.6 }}
                  >
                    The Bible is God’s inspired Word and our guide for life.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                  boxShadow: "0 0 8px rgba(0,0,0,0.15)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  padding: "1.5rem",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "red", fontSize: "36px" }}>★</span>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black", mb: 1 }}
                  >
                    Salvation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", lineHeight: 1.6 }}
                  >
                    Salvation is by grace through faith in Jesus alone.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                  boxShadow: "0 0 8px rgba(0,0,0,0.15)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  padding: "1.5rem",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "red", fontSize: "36px" }}>★</span>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black", mb: 1 }}
                  >
                    Community
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", lineHeight: 1.6 }}
                  >
                    We value fellowship and supporting one another in faith.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Card 4 */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                  boxShadow: "0 0 8px rgba(0,0,0,0.15)",
                  minHeight: "150px",
                  display: "flex",
                  alignItems: "center",
                  padding: "1.5rem",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: 70,
                    height: 70,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "red", fontSize: "36px" }}>★</span>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "black", mb: 1 }}
                  >
                    Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "black", lineHeight: 1.6 }}
                  >
                    We’re called to make disciples locally and globally.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
<section  style={{
          position: "relative",
          padding: "4rem 0",
          backgroundImage: "url('src/assets/Group 105.jpeg')", // Change this path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width:"100%",
          height:"15%"
        }}>

</section>

<section
  style={{
    position: "relative",
    padding: "6rem 0",
    backgroundImage: "url('src/assets/leadership-bg.jpg')", // Replace with your leadership background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    textAlign: "center",
  }}
>
  {/* Overlay for blur / dim effect */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(2px)",
      zIndex: 1,
    }}
  ></div>

  <Container sx={{ position: "relative", zIndex: 2 }}>
    {/* Section Title */}
    <Typography
      variant="h3"
      sx={{
        fontWeight: "bold",
        mb: 4,
      }}
    >
      Meet Our Leadership
    </Typography>
    <Typography
      variant="h5"
      sx={{ mb: 6 }}
    >
      Meet Our Pastors
    </Typography>

    {/* Leadership Grid */}
    <Grid container spacing={4} justifyContent="center">
      {/* Example Pastor Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "1.5rem",
            textAlign: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            component="img"
            src="src/assets/pastor1.jpg" // Replace with pastor image
            alt="Pastor Name"
            sx={{
              width: "100%",
              borderRadius: "50%",
              mb: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              objectFit: "cover",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Pastor Name
          </Typography>
          <Typography variant="body2">
            Brief description about the pastor.
          </Typography>
        </Box>
      </Grid>

      {/* Repeat more pastor cards */}
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "1.5rem",
            textAlign: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            component="img"
            src="src/assets/pastor2.jpg"
            alt="Pastor Name"
            sx={{
              width: "100%",
              borderRadius: "50%",
              mb: 2,
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              objectFit: "cover",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Pastor Name
          </Typography>
          <Typography variant="body2">
            Brief description about the pastor.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
</section>

      <Footer />
    </div>
  );
}

export default Vision;
