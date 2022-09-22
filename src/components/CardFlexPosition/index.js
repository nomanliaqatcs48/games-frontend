import React from "react";
import { Box } from "@mui/material";
import CardAbout from '../CardAbout'
import "../CardFlexPosition/index.scss";

const child = "true";

const CardFlexPosition = () => {
  return (
    <>
      <Box className="card-flex">
        <CardAbout
          className={"cardAbout-wrapper-Two"}
          number={"30%"}
          text={"Increase in productivity"}
        />
        <CardAbout
          className={"cardAbout-wrapper-Two"}
          number={"4x"}
          text={"Higher talent retention rates"}
        />
        <CardAbout
          className={
            child === "true" ? "cardAbout-wrapper-One" : "cardAbout-wrapper-Two"
          }
          number={"29% "}
          text={"Increase in revenues"}
        />
      </Box>
    </>
  );
};

export default CardFlexPosition;