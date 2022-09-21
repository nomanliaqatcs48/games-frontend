import React from "react"
import { Container, Typography, Box } from "@mui/material"
import ConsumerSlider from "./ConsumerSlider"
import '../home/Consumer.scss'

export default function Consumer() {
  return (
    <section className="consumerBack">
      <Container>
        <Box className="consumer-heading">
          <Typography variant="h2">
            67% of consumers worldwide used<br/>a chatbot for customer support
          </Typography>
        </Box>
      <ConsumerSlider/>
    </Container>
    </section>
  )
}
