import React from "react";
import { Typography, Box } from "@mui/material";

import * as styles from "../Card/styles.module.scss";

const Card = (props) => {
    return (
        <Box className={styles.cardContainer}>
            <div>
                <img loading="lazy" src={props.icon} alt="card"  />
            </div>
            <Typography py={2} className={styles.heading}>
                {props.heading}
            </Typography>
            <Typography className={styles.desc}>{props.description}</Typography>
        </Box>
    );
};

export default Card;
