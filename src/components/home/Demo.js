import { Box, Container, Typography } from "@mui/material";
import React from "react";
import DemoBox from "./DemoBox";
import '../home/Demo.scss';

export default function Demo() {
  return (
    <section className="demoBack">
    <Container>
      <Box className="demo-Wrapper">
        <Typography variant="h2">
          Engaging Chatbot for Seamless Communication Experience
        </Typography>
        <Typography variant="h6">
          We believe every customer interaction is an opportunity to build a
          long-lasting relationship. Therefore, ​​InvoCom aims to provide
          friendly and hassle-free communication ties with your customers
          through an all-in-one chatbot solution.
        </Typography>
        <DemoBox/>
      </Box>
    </Container>
    </section>
  )
}
