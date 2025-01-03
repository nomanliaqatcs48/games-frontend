import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from "gatsby";

import * as styles from '../Productivity/styles.module.scss'

const Productivity = () => {

    return (
        <Box className={styles.productivityContainer}>
           <Typography py={3} className={styles.head}>Increase your team productivity by 70 % with<br/> complete transparency and accountability. </Typography>
            <Link to="https://invo.chat/signup/email/" className="link-st">
                <Button className={styles.btnWrap}>Sign me up</Button>
            </Link>
        </Box>
    );
}

export default Productivity;