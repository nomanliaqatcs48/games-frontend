import React from "react";
import { Box, Typography } from "@mui/material";
import "../CardStronger/index.scss";

const CardStronger = (props) => {
  return (
    <Box className="cardStronger-wrapper">
      <img loading="lazy" src={props.image} alt="" />
      <Typography variantMapping="p">{props.title}</Typography>
    </Box>
  );
};

export default CardStronger;
