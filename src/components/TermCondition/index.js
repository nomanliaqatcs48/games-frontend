import React from 'react'
import { Container, Box, Typography } from "@mui/material";
import Terms from './TermData'
import PrivacyData from './PrivacyData';

import * as styles from '../TermCondition/styles.module.scss'

const TermCondition = () => {
  return (
    
          <Container>
            <Box className={styles.termContainer}>
              <Typography align='center' component="h1" className={styles.heading}>Terms and Conditions</Typography>
              {Terms.map((item) => (
                <>
                 <div className={styles.headWrap}>
                          {item.heading}
                        </div>
                        <Typography className={styles.descWrap}>{item.Description}</Typography>
                </>
               
                    ))}
              <Typography pt={2} align='center' component="h1" className={styles.heading}>Privacy Policy for InvoCom</Typography>
              {PrivacyData.map((item) => (
                <>
                 <div className={styles.headWrap}>
                          {item.heading}
                        </div>
                        <Typography className={styles.descWrap}>{item.Description}</Typography>
                </>
               
                    ))}
            </Box>
          </Container>
  );
}

export default TermCondition