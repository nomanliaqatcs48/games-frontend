import React from "react";
import { Typography, Button, Box } from "@mui/material";
import "../../styles/common/PriceBox.scss";

function PriceBox(props) {
  return (
    <>
      <Box className="price-Box-Main-Div">
        <Box className="pirce-Box-Content">
          {/* Title and Subtitle */}
          <Box className="boxHead">
            <Typography variant="h3">{props.title}</Typography>
            <Typography variantMapping="p">{props.subtitle}</Typography>
          </Box>

          {/* Pricing per month*/}
          <Box className="pricePerMonth">
            <Typography variantMapping="p">$</Typography>
            <Typography variantMapping="p" className="price">
              {props.price}
            </Typography>
            <Typography variant="span">per / month</Typography>
          </Box>
          {/* Button -> Get Started */}
          <Box className="getStarted-btn">
            <Button className="btn">{props.buttonText}</Button>
          </Box>
          {/* Features List */}
          <Box className="features">
            <Typography variantMapping="p">Includes</Typography>
            <Box className="list">
              <Typography variant="span">{props.listArray}</Typography>
            </Box>
          </Box>
        </Box>
        {/* See all features */}
        <Box className="seeAll">
          <Typography variantMapping="p">View all</Typography>
        </Box>
      </Box>
    </>
  );
}

export default PriceBox;
