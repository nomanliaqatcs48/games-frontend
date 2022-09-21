import React from "react";
import Layout from "../components/base-structure/Layout";
import { Container, Box, Typography } from "@mui/material";
import FAQAccordion from "../components/home/FAQAccordion";
import Banner from "../images/faqBanner.svg";
// import '../styles/faq.css';
import "../components/home/FAQ.scss";

export default function faq() {
  return (
    <Layout>
      <Box className="faqPage">
        <Container>
          <Box className="faqBanner">
            <img src={Banner} alt=""/>
          </Box>
        </Container>
      </Box>
      <div className="faqBG">
        {/* FAQ Page */}
      <Box className="faqHeadingPage">
        <Typography variant="h1">FAQ's</Typography>
      </Box>
      <Box>
        <FAQAccordion />
      </Box>
      </div>
    </Layout>
  );
}
