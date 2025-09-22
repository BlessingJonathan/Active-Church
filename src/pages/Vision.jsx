
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Container, Typography, Box, Grid } from "@mui/material";
function Vision() {
  return (
    <div>
 
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
     <section
  className="our-vision-content"
  style={{ padding: "2rem", marginTop: "4rem" }} // added margin-top
>
  <Container>
    <div
      style={{
        display: "flex",
        alignItems: "center", // center "Our Vision" vertically
        justifyContent: "flex-start",
        gap: "2rem",
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
        The Active Church was birthed in 2004 in our home when God called us
        very specifically to reach a nation by reaching the forgotten. The
        calling was affirmed and we went from helping churches build youth
        groups to starting a church that was youth oriented. We have had the
        privilege since the birth of this vision of seeing the youth grow into
        adults who have overcome the challenges of their youth and situations
        and are now married with children of their own who are planted and
        flourishing in their lives. The upliftment of lives has always made us
        so grateful for the calling.
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
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontStyle: "italic",
                  fontFamily: "'Inter', 'sans-serif'",
                }}
              >
                Active Children's Church
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
              <Typography
                variant="h4"
                sx={{ mb: 2, fontStyle: "italic", fontFamily: "'Inter-sans" }}
              >
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
              mb: 1,
              color: "black",
            }}
          >
            What We Believe
          </Typography>
          <Typography sx={{ textAlign: "center", mb: 6 }}>
            Our beliefs are rooted in Scripture and centered on the Gospel of
            Jesus Christ.
          </Typography>

          {/* Cards Grid */}
          <Grid
  container
  spacing={4}
  justifyContent="center"
  alignItems="stretch"
  sx={{ textAlign: "center" }}
>
  {/* Card 1 */}
  <Grid item xs={12} sm={6} md={5} lg={4}>
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: "20px",
        boxShadow: "0 0 8px rgba(0,0,0,0.15)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "1.5rem",
        backdropFilter: "blur(12px)",
        margin: "0 auto",
        maxWidth: "400px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "50%",
            width: 70,
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "1rem",
          }}
        >
          <ImportContactsIcon sx={{ color: "red", fontSize: "36px" }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          Scripture
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: "black",
          lineHeight: 1.6,
          marginTop: "0.75rem",
          textAlign: "left",
        }}
      >
        The Bible is God’s inspired Word and our guide for life.
      </Typography>
    </Box>
  </Grid>

  {/* Card 2 */}
  <Grid item xs={12} sm={6} md={5} lg={4}>
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: "20px",
        boxShadow: "0 0 8px rgba(0,0,0,0.15)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "1.5rem",
        backdropFilter: "blur(12px)",
        margin: "0 auto",
        maxWidth: "400px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "50%",
            width: 70,
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "1rem",
          }}
        >
          <FavoriteBorderOutlinedIcon sx={{ color: "red", fontSize: "36px" }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          Salvation
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: "black",
          lineHeight: 1.6,
          marginTop: "0.75rem",
          textAlign: "left",
        }}
      >
        Salvation is by grace through faith in Jesus alone.
      </Typography>
    </Box>
  </Grid>

  {/* Card 3 */}
  <Grid item xs={12} sm={6} md={5} lg={4}>
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: "20px",
        boxShadow: "0 0 8px rgba(0,0,0,0.15)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "1.5rem",
        backdropFilter: "blur(12px)",
        margin: "0 auto",
        maxWidth: "400px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "50%",
            width: 70,
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "1rem",
          }}
        >
          <PeopleAltOutlinedIcon sx={{ color: "red", fontSize: "36px" }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          Community
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: "black",
          lineHeight: 1.6,
          marginTop: "0.75rem",
          textAlign: "left",
        }}
      >
        We value fellowship and supporting one another in faith.
      </Typography>
    </Box>
  </Grid>

  {/* Card 4 */}
  <Grid item xs={12} sm={6} md={5} lg={4}>
    <Box
      sx={{
        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: "20px",
        boxShadow: "0 0 8px rgba(0,0,0,0.15)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "1.5rem",
        backdropFilter: "blur(12px)",
        margin: "0 auto",
        maxWidth: "400px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            backgroundColor: "black",
            borderRadius: "50%",
            width: 70,
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "1rem",
          }}
        >
          <LanguageOutlinedIcon sx={{ color: "red", fontSize: "36px" }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          Mission
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: "black",
          lineHeight: 1.6,
          marginTop: "0.75rem",
          textAlign: "left",
        }}
      >
        We’re called to make disciples locally and globally.
      </Typography>
    </Box>
  </Grid>
</Grid>

        </Container>
      </section>
      {/* Meet Our Leadership Section */}
      {/* Wrapper to add spacing around the image section */}
 <Box
  sx={{
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      width: "80%",
      borderRadius: "20px",
      overflow: "hidden",
      backgroundColor: "white",
      height: "100%",
      textAlign: "center",
      position: "relative",
    }}
  >
    {/* Background Image Section */}
    <section
      style={{
        position: "relative",
        margin: 0,
        backgroundImage: "url('src/assets/Group 105.png')",
        backgroundSize: "contain", // keeps it filled
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Top Titles */}
      <Box
        sx={{
          position: "absolute",
          top: "1rem",
          left: "50%",
          transform:" translate(-50%, 20%)",
          textAlign: "center",
          zIndex: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "black" }}
        >
          Our Leadership
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "grey", mt: 0.5 }}
        >
          Meet our Pastors
        </Typography>
      </Box>

      {/* Bottom Title */}
      <Box
        sx={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform:" translate(-50%, -40%)",
          textAlign: "center",
          zIndex: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "black" }}
        >
          Pastor Gavin & Pastor Vicky
        </Typography>
      </Box>
    </section>
  </div>
</Box>

    </div>
  );
}

export default Vision;
