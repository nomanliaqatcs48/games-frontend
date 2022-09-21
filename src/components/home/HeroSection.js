import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import { useState } from "react";
import "../home/HeroSection.scss";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://st-backend-invochat.invo.zone/api/messages`, {
        data: { Email: email },
      })
      .then((res) => {
        setErrors("Successfully submitted");
        
        if (res.status === 200) {
         
        } else {
        
        }
      })
      .catch((error) => {
       
        setErrors("Invalid Email");
      });
  };

  return (
    <section className="homeBack">
      <Container>
        <Box className="header">
          <Typography variant="h1">
            Qualify Leads and Automate Customer Support
            <br />
            with AI-Powered
            <span className="chat"> Chatbot</span>
          </Typography>
        </Box>
        <Box className="heroForm">
          <form method="post">
            <Box className="form-Box">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your Email"
              />
              <Button className="form1-btn" onClick={onSubmit}>
                Book a free demo
              </Button>
            </Box>
          </form>
        </Box>
        <Box className="submit-message">
          <Typography
            sx={{
              "& p": {
                fontSize: "18px",
                color:
                  errors === "Invalid Email"
                    ? "red"
                    : errors === "Successfully submitted"
                    ? "green"
                    : "",
                fontWeight: "600",
              },
            }}
          >
            {errors && <p>{errors}</p>}
          </Typography>
        </Box>
        <Box className="points-wrapper">
          <Box className="point-content">
            <DoneIcon />
            <Typography variant="span">14-day free trial</Typography>
          </Box>
          <Box className="point-content">
            <DoneIcon />
            <Typography variant="span">Full features enabled</Typography>
          </Box>
          <Box className="point-content">
            <DoneIcon />
            <Typography variant="span">No credit card is required</Typography>
          </Box>
        </Box>
        <Box className="reach-out">
          <Typography variant="span">
            Reach out to prospects, deliver personalized experiences, increase
            conversion rates, and ultimately boost your revenues with InvoCom’s
            purpose-built chatbot.
          </Typography>
        </Box>
      </Container>
    </section>
  );
}
