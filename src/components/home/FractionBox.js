import React from "react";
import { Container, Box } from "@mui/material";
import FreeBox from "./FreeBox";
import ProBox from "./ProBox";
import UltimateBox from "./UltimateBox";
import '../../styles/Pricing.scss';

export default function FractionBox() {
  return (
    <Container>
      <Box className="fractionBox">
        <FreeBox/>
        <ProBox/>
        <UltimateBox/>
      </Box>
    </Container>
  );
}
