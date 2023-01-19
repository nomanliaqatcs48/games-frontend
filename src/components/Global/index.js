import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "../Global/index.scss";

const Global = (props) => {
  return (
    <Container>
      <Box className="global-wrapper">
        <Typography variant="h2">{props.title}</Typography>
        <Typography variantMapping="p">{props.description}</Typography>
      </Box>
    </Container>
  );
};

export default Global;
