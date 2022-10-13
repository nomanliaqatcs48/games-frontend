import React from "react";
import { Box, Typography } from "@mui/material";
import "../IconFeatures/index.scss";

const IconAndText = (props) => {
    return (
        <Box className="icon-main">
            <img loading="lazy" src={props.icon} alt="" />
            <Typography variant="h6">{props.iconText}</Typography>
        </Box>
    );
};

export default IconAndText;
