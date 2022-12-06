import React from 'react'
import Disclaimer from "./DisclaimerData";
import { Container, Box, Typography } from "@mui/material";

import * as styles from "../Disclaimer/styles.module.scss";


const index = () => {
  return (
    <Container>
      <Box className={styles.disclaimerContainer}>
        <Typography align="center" component="h1" className={styles.heading}>
          Disclaimer
        </Typography>
        {Disclaimer.map((item) => (
          <>
            <Typography className={styles.descWrap}>
              {item.Description}
            </Typography>
          </>
        ))}
      </Box>
    </Container>
  )
}

export default index