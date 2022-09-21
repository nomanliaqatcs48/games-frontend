import React from "react";
import { Link } from "gatsby";
import { Container, Typography, Button, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FreeBox from "./FreeBox";
import ProBox from "./ProBox";
import UltimateBox from "./UltimateBox";
import "../home/FractionCost.scss";


export default function FractionCost() {
  return (
    <section className="fractionBack">
      <Container>
        <Box className="fractionCost-heading">
          <Typography variant="h2">
            Configure InvoCom for a<br />
            Fraction of a Cost
          </Typography>
        </Box>
        <Box className="fractionBox">
          <FreeBox />
          <ProBox />
          <UltimateBox />
        </Box>
        <Box className="fractionCost-btn-wrapper">
          <Link to="https://app.invocom.io/signup">
            <Button className="fractionCost-btn">
              14-day free trial
              <ArrowForwardIcon sx={{ fill: "white", marginLeft: "10px" }} />
            </Button>
          </Link>
          <Typography variant="h6">
            *Full features enabled. No credit card is required.
          </Typography>
        </Box>
      </Container>
    </section>
  );
}
