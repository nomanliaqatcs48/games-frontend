import React from 'react';
import { Typography, Button, Box } from '@mui/material';

import styles from '../Productivity/styles.module.scss'

const Productivity = () => {

    return (
        <Box className={styles.productivityContainer}>
           <Typography py={3} className={styles.head}>Increase your team productivity by 70 % with<br/> complete transparency and accountability. </Typography>
           <Button className={styles.btnWrap}>Sign me up</Button>
        </Box>
    );
}

export default Productivity;