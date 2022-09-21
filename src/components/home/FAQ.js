import React from "react";
import { Container, Typography, Box } from "@mui/material";
import FAQAccordion from "./FAQAccordion";
// import * as styles from "../../styles/home.module.css";
import '../home/FAQ.scss';

export default function FAQ() {
  return (
    <section className="faqBack">
      <Container>
        <Box className="faq-heading">
          <Typography variant="h2">Frequently Asked Questions</Typography>
        </Box>
        <FAQAccordion />
      </Container>
    </section>
  );
}
