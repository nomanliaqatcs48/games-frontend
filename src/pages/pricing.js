import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Layout from "../components/base-structure/Layout";
// import * as styles from "../styles/pricing.module.css";
import FractionBox from "../components/home/FractionBox";
import Banner from "../images/pricingBanner.svg";
import '../styles/Pricing.scss'


export default function pricing() {
  return (
    <Layout>
      <Box className="pricingPage">
        <Container>
          <Box className="pricingBanner">
            <img src={Banner} alt="" />
          </Box>
          <Box>
            <Box className="pricingHead">
              <Typography variant="h1">
                Pricing
              </Typography>
            </Box>
          </Box>
          <FractionBox />
        </Container>
      </Box>
    </Layout>
  );
}
