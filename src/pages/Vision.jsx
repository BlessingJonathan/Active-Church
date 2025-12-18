import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Container, Typography, Box, Grid } from "@mui/material";
import Children from "../assets/kidschurch.jpg";
import Youth from "../assets/youth.jpg";
import Banner from "../assets/SnapInsta.to_503671807_18325249375205809_7112355811609069840_n.png"
import WhatWeBelieve from "../assets/img4.jpeg"
import PastorCollage from "../assets/WhatsApp Image 2025-10-02 at 1.29.44 PM.jpeg"
import ActiveTeamsBG from "../assets/WhatsApp Image 2025-12-05 at 21.03.38_32206319.jpg";
import "./Vision.css";

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
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
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
        style={{ padding: "2rem", marginTop: "4rem" }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "2rem",
              flexWrap: "wrap",
              marginTop: "4rem",
              marginBottom: "2rem",
              marginLeft: "2rem",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: "bold",
                textAlign: "left",
                whiteSpace: "nowrap",
                marginRight: "6rem",
              }}
            >
              Our Vision
            </Typography>

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

      <section>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 6,
              gap: "2rem",
            }}
          >
            <Box
              component="img"
              src={Children}
              alt="Active Church Kids"
              sx={{
                width: { xs: "100%", md: "40%" },
                borderRadius: "24px",
                boxShadow: "none",
                objectFit: "cover",
                padding: 0,
                background: "none",
                display: "block",
              }}
            />
            <Box sx={{ flex: 1, maxWidth: "600px" }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontStyle: "italic",
                  fontFamily: "Inter, sans-serif",
                  overflow: "hidden",
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

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <Box sx={{ flex: 1, maxWidth: "600px", overflow: "hidden" }}>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontStyle: "italic",
                  fontFamily: "Inter, sans-serif",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                Active Youth
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.6, overflow: "hidden" }}
              >
                Active Youth is about young people who are passionate about Christ.
                It's about youth who are winning in their lives and pursuing a
                relationship with their Saviour as they change the world around them.
                Enjoy a great variety of entertaining evenings mixed with the power
                of the Word.
              </Typography>
            </Box>

            <Box
              component="img"
              src={Youth}
              alt="Active Youth"
              sx={{
                width: { xs: "100%", md: "40%" },
                borderRadius: "24px",
                boxShadow: "none",
                objectFit: "cover",
                padding: 0,
                background: "none",
                display: "block",
              }}
            />
          </Box>
        </Container>
      </section>

      <section
        style={{
          position: "relative",
          padding: "4rem 0",
          marginTop: "16px",
          backgroundImage: `url(${WhatWeBelieve})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(2px)",
            zIndex: 1,
          }}
        ></div>

        <Container sx={{ position: "relative", zIndex: 2 }}>
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
                <Box className="belief-row" sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Box
                    className="belief-icon"
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: 70,
                      height: 70,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                  The Bible is God's inspired Word and our guide for life.
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
                <Box className="belief-row" sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Box
                    className="belief-icon"
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: 70,
                      height: 70,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                <Box className="belief-row" sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Box
                    className="belief-icon"
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: 70,
                      height: 70,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                <Box className="belief-row" sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Box
                    className="belief-icon"
                    sx={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: 70,
                      height: 70,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                  We're called to make disciples locally and globally.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section
        style={{
          marginTop: "4rem",
          padding: "5rem 0",
          backgroundImage: `url(${ActiveTeamsBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            zIndex: 1,
          }}
        ></div>

        <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 2,
              textShadow: "0 3px 8px rgba(0,0,0,0.6)",
            }}
          >
            Active Teams
          </Typography>

          <Typography
            variant="h6"
            sx={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "white",
              mb: 4,
              lineHeight: 1.7,
              textShadow: "0 3px 6px rgba(0,0,0,0.6)",
            }}
          >
            Active Teams is where leaders grow, disciples are made, and our church
            strengthens its foundation. It empowers members to connect, serve, lead,
            and grow through structured groups and intentional mentorship.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <a
              href="https://teams.theactivechurch.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  padding: "20px 28px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  transition: "0.3s",
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Visit Active Teams
              </button>
            </a>
          </Box>
        </Container>
      </section>

      <Container sx={{ py: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "black", mb: 2 }}
          >
            Meet our Pastors
          </Typography>

          <Box
            component="img"
            src={PastorCollage}
            alt="Pastor Gavin & Pastor Vicky"
            sx={{
              display: "block",
              margin: "0 auto",
              width: "100%",
              maxWidth: "800px",
              height: "700px",
              boxSizing: "border-box",
              borderRadius: "20px",
              boxShadow: "none",
              mb: 3,
              objectFit: "cover",
              objectPosition: "top",
              padding: 0,
              background: "none"
            }}
          />

          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "black" }}
          >
            Pastor Gavin & Pastor Vicky
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Vision;