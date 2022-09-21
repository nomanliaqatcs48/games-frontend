import { Box, Button, Container, Typography } from "@mui/material"
import { Link } from "gatsby"
import React from "react"
import Abid from "../../images/abid.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../home/AbidCommunication.scss'

export default function AbidCommunication() {
  return (
    <section className="communicateBack">
      <Container
        sx={{
          padding: "50px 20px",
          '@media screen and (max-width:428px)':{
            padding: "20px auto"
          }
        }}
      >
        <Box className="abid-wrapper">
          <Box className="abid-content">
            <Typography variant="h2">
              Engaging Chatbot for Seamless Communication
            </Typography>
            <Typography variant="h6">
              We believe every customer interaction is an opportunity to build a
              long-lasting relationship.
            </Typography>
            <Link to="https://app.invocom.io/signup">
              <Button className="abid-btn">
                Sign up for free
              <ArrowForwardIcon sx={{fill:"white", marginLeft:'10px'}}/>
              </Button>
            </Link>
          </Box>
          <Box className="abid-image">
            <img className="abidImage" src={Abid} alt=""/>
            <Link to="https://app.invocom.io/signup">
              <Button className="abidImage-btn">
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
