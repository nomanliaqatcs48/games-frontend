import React from 'react'
import Privacy from "./PrivacyData";
import { Container, Box, Typography } from "@mui/material";

import * as styles from "../PrivacyPolicy/styles.module.scss";


const index = () => {
  return (
    <Container>
      <Box className={styles.disclaimerContainer}>
        <Typography align="center" component="h1" className={styles.heading}>
          Privacy Policy
        </Typography>
        {Privacy.map((item) => (
          <>
            <div className={styles.headWrap}>{item.heading}</div>
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