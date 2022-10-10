import React from "react";
import { Container, Typography, Box } from "@mui/material";
import '../Who/index.scss';

const Who = (props) => {
  return (
    <Container>
      <Box className="who-wrapper">
        <Box className="who-content">
          <Typography variant="h2">{props.title}</Typography>
          <Typography variant="h6">{props.description}</Typography>
        </Box>
        <Box className="who-image">
          <img src={props.image} alt="" />
        </Box>
      </Box>
    </Container>
  );
};

export default Who;
