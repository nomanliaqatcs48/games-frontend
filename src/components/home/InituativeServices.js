import React from "react";
import { Link } from "gatsby";
import { Container, Typography, Box, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InitiateSlider from "./InitiateSlider";
import '../home/InituativeServices.scss';


export default function InituativeServices() {
  return (
    <section className="servicesBack">
      <Container>
        <Box className="services-heading">
          <Typography variant="h2">
            Delivering the Most Intuitive Services
          </Typography>
        </Box>
        <InitiateSlider />
        <Box className="services-Btn-wrapper">
          <Link to="https://app.invocom.io/signup">
            <Button className="services-Btn" variant="contained">
              Sign up for free
              <ArrowForwardIcon sx={{fill:"white", marginLeft:'10px'}}/>
            </Button>
          </Link>
        </Box>
      </Container>
    </section>
  );
}
