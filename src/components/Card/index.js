import React from "react";
import { Typography, Box } from "@mui/material";

import * as styles from "../Card/styles.module.scss";

const Card = (props) => {
    return (
        <Box className={styles.cardContainer}>
            <div>
                <img loading="lazy" src={props.icon} alt="card"  />
            </div>
            <Box className={styles.heading}>
            <Typography py={2} variant="h3">
                {props.heading}
            </Typography>
            </Box>
            <Typography className={styles.desc}>{props.description}</Typography>
        </Box>
    );
};

export default Card;
