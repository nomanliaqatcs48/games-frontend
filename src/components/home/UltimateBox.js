import React from "react";
import { Link } from "gatsby";
import { Typography, Button, Box } from "@mui/material";
import Arrow from "../../images/PriceArrow.svg";
import "../../styles/PriceBox.scss";

const boxContent = [
  {
    title: "Ultimate",
    subTitle: "Toolset for hard players",
    priceUnit: "$",
    price: "75",
    duration: "per / month",
    buttonText: "Coming Soon",
    listHead: "Includes",
    listImage: { Arrow },
    listItems: {
      itemOne: "Coming Soon",
    },
  },
];

export default function UltimateBox() {
  return (
    <Box className="price-Box-Main-Div">
      <Box className="pirce-Box-Content">
        {/* Title and Subtitle */}
        <Box className="boxHead">
          <Typography variant="h1">
            {boxContent.map((contents) => contents.title)}
          </Typography>
          <Typography variant="span">
            {boxContent.map((contents) => contents.subTitle)}
          </Typography>
        </Box>

        {/* Pricing per month*/}
        <Box className="pricePerMonth">
          <Typography variant="h1">
            {boxContent.map((contents) => contents.priceUnit)}
          </Typography>
          <Typography variant="h2">
            {boxContent.map((contents) => contents.price)}
          </Typography>
          <Typography variant="span">
            {boxContent.map((contents) => contents.duration)}
          </Typography>
        </Box>
        {/* Button -> Get Started */}
        <Box className="getStarted-btn">
          <Link to="https://app.invocom.io/signup">
            <Button className="btn">
              {boxContent.map((contents) => contents.buttonText)}
            </Button>
          </Link>
        </Box>
        {/* Features List */}
        <Box className="features">
          <Typography variant="h1">
            {boxContent.map((contents) => contents.listHead)}
          </Typography>
          <Box className="list">
            <img src={Arrow} alt="" />
            <Typography variant="span">
              {boxContent.map((contents) => contents.listItems.itemOne)}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* See all features */}
      <Box className="seeAll">
        <Typography variant="h5" sx={{ visibility: "hidden" }}>
          See all features
        </Typography>
      </Box>
    </Box>
  );
}
