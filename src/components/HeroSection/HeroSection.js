import React from 'react'
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import "../HeroSection/HeroSection.scss"
import HeroPic from "../../Assets/images/hero_img.svg"
import DownArrow from "../../Assets/images/down_arrow.svg";
import IOS from "../../Assets/images/ios.svg";
import Apple from "../../Assets/images/apple.svg";
import Window from "../../Assets/images/window.svg";
import Chrome from "../../Assets/images/chrome.svg";

const HeroSection = () => {
  return (
      <Box className="hero">
          <Container>
              <Grid container sx={{ pt:6 }}>
                  <Grid item xs={12} md={6}>
                      <Box className="hero_content">
                          <Typography variant="h1">
                              Streamline in-house & remote teams with <span>collaboration tool</span>
                          </Typography>
                          <Box sx={{ my: 4 }}>
                              <input type="text" placeholder="Enter your email"></input>
                              <span>
                                  <Button className="hero_btn">Try invochat It’s FREE</Button>
                              </span>
                          </Box>
                          <Typography variant="h5">
                              Catch up on important conversations and say hi to productive collaboration - An all-in-one solution. Be it tasks or demanding projects our efficient communication platform is always at your service.
                          </Typography>
                      </Box>
                      <Box sx={{ pt: 7 }}>
                          <img src={DownArrow} className="down_arrow" alt="Image-of-scroll-icon" />
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                      <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                          <img src={HeroPic} alt="Image-of-web/mobile-screenshot" />
                      </Box>
                  </Grid>
              </Grid>
              <Grid container sx={{ display: "flex", justifyContent: "center", pt: 10 }}>
                  <Grid item xs={12} md={8} className="hero_social">
                      <Box sx={{ display: "flex", justifyContent: "space-around", py: 1 }}>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                              <img src={IOS} alt="Image-of-web/mobile-screenshot" />
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                              <img src={Apple} alt="Image-of-web/mobile-screenshot" />
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                              <img src={Window} alt="Image-of-web/mobile-screenshot" />
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                              <img src={Chrome} alt="Image-of-web/mobile-screenshot" />
                          </Box>
                      </Box>
                  </Grid>
              </Grid>
              <Box sx={{display:"flex",justifyContent:"center",pt:8}}>
                  <Box className="line"></Box>
              </Box>
          </Container>
      </Box>
  );
}

export default HeroSection
