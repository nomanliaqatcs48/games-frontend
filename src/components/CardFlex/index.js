import React from "react";
import { Container } from "@mui/material";
// import CardAbout from "../CardAbout";
import CardImageLeft from "../../Assets/images/price-G1.svg";
import CardImageRight from "../../Assets/images/card-right.svg";

import "../CardFlex/index.scss";
import CardFlexPosition from "../CardFlexPosition";

// const child = "true";

const CardFlex = () => {
  return (
    <>
      <div className="card-position-images">
            <img className="LeftImage" src={CardImageLeft} alt="" />
        <Container>
          {/* <Box className="card-flex">
            <CardAbout className={(child === "true" ? "cardAbout-wrapper-Two" : "cardAbout-wrapper-One")} number={"30%"} text={"Increase in productivity"} />
            <CardAbout className={(child === "true" ? "cardAbout-wrapper-Two" : "cardAbout-wrapper-One")} number={"4x"} text={"Higher talent retention rates"} />
            <CardAbout className={(child === "true" ? "cardAbout-wrapper-One" : "cardAbout-wrapper-Two")} number={"29% "} text={"Increase in revenues"} />
          </Box> */}
          <CardFlexPosition/>
        </Container>
            <img className="RightImage" src={CardImageRight} alt="" />
      </div>
    </>
  );
};

export default CardFlex;