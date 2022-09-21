import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import Communicate from "../../images/communicate.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../home/Communication.scss";

export default function Communication() {
  return (
    <section className="communicateBack">
      <Container
        sx={{
          padding: "50px 20px",
        }}
      >
        <Box className="communicate-wrapper">
          <Box className="communicate-content">
            <Typography variant="h2">
              Engaging Chatbot for Seamless Communication
            </Typography>
            <Typography variant="h6">
              We believe every customer interaction is an opportunity to build a
              long-lasting relationship.
            </Typography>
            <Link to="https://app.invocom.io/signup">
              <Button className="signUp-btn">
                Sign up for free
                <ArrowForwardIcon sx={{ fill: "white", marginLeft: "10px" }} />
              </Button>
            </Link>
          </Box>
          <Box className="communicate-image">
            <img className="communicateImage" src={Communicate} alt=""/>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
