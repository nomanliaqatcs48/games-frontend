import React from "react";
import { Box, Typography } from "@mui/material";
import "../CardAbout/index.scss";

const CardAbout = (props) => {
  return (
    <Box className={props.className}>
      <Typography variant="h2">{props.number}</Typography>
      <Typography variantMapping="p">{props.text}</Typography>
    </Box>
  );
};

export default CardAbout;
