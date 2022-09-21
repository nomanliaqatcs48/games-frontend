import React from "react";
import { Link } from "gatsby";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChatBot from "../../images/chatbot.svg";
import '../home/ChatbotSection.scss';

export default function ChatbotSection() {
  return (
    <section className="chatBack">
    <Container>
      <Box className="chatbot-wrapper">
        <Box className="chatbot-image">
          <img className="chatImage" src={ChatBot} alt=""/>
          <Link to="https://app.invocom.io/signup">
            <Button className="image-btn">
              Sign up for free
              <ArrowForwardIcon sx={{fill:"white", marginLeft:'10px'}}/>
            </Button>
          </Link>
        </Box>
        <Box className="chatbot-content" sx={{
          flex:'1',
        }}>
          <Typography variant="h2">
            Engaging Chatbot for Seamless Communication
          </Typography>
          <Typography variant="h6">
            We believe every customer interaction is an opportunity to build a
            long-lasting relationship.
          </Typography>
          <Link to="https://app.invocom.io/signup">
            <Button className="chatbot-btn">
              Sign up for free
              <ArrowForwardIcon sx={{fill:"white", marginLeft:'10px'}}/>
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
    </section>
  )
}
