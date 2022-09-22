import React from 'react';

// Library
import { Container, Typography, Box } from '@mui/material'

// Assets
import Email from '../../Assets/images/email.svg'
import Phone from '../../Assets/images/phone.svg'
import LeftBgIcon from '../../Assets/images/featureleft.svg'
import FormBg from '../../Assets/images/formback.svg'

// Styles
import * as styles from '../ContactDetail/styles.module.scss'

// Components

const ContactDetail = () => {

    return (
        <> 
        <div className={styles.contactDetail}>
        <img src={LeftBgIcon} alt="" className={styles.featureLeft}/>
            <Container>
                <Box className={styles.flexWrap}>
                    <div className={styles.detail}>
                        <Typography className={styles.headText}>Thanks for your<br/> interest in invochat</Typography>
                        <Typography py={3} className={styles.descText}>Catch up on important conversations and say hi<br/> to productive collaboration - An all-in-one<br/> solution. Be it tasks or demanding projects our<br/> efficient communication platform is always at<br/> your service.</Typography>
                        <Typography className={styles.emailWrap}><img src={Email} alt="" className={styles.iconWrap}/><span>Email:</span> product@invocom.io</Typography>
                        <Typography className={styles.phoneWrap}><img src={Phone} alt="" className={styles.iconWrap}/><span>Phone:</span> +1(754) 258-7812</Typography>
                    </div>
                    <img src={FormBg} alt="" className={styles.formBg}/>
                    <div className={styles.form}>
                        <div className={styles.paddingWrap}>
                        <Box className={styles.flexColumn}>
                        <label className={styles.label}>Full Name</label>
                        <input type="text" placeholder='Full Name' className={styles.inputField}/>
                        </Box>
                        <Box className={styles.flexColumn}>
                        <label className={styles.label}>Phone</label>
                        <input type="Number" placeholder='Phone' className={styles.inputField}/>
                        </Box>
                        <Box className={styles.flexColumn}>
                        <label className={styles.label}>E-mail Address</label>
                        <input type="email" placeholder='E-mail Address' className={styles.inputField}/>
                        </Box>
                        <Box className={styles.flexColumn}>
                        <label className={styles.label}>Message</label>
                        <textarea rows="5" placeholder='Message' className={styles.inputField}/>
                        </Box>
                        <Box className={styles.flexColumn}>
                        <button className={styles.msgBtn}>SEND MESSAGE</button>
                        </Box>
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
        </>
    );
}

export default ContactDetail;