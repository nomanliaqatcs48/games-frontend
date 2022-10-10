import * as React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import footerLogo from "../../Assets/images/footer_logo.svg"
import Twitter from "../../Assets/images/twitter.svg";
import Linkdin from "../../Assets/images/linkdin.svg";
import Facebook from "../../Assets/images/fb.svg";
import "../../styles/common/Footer.scss"
import axios from 'axios';
import  { useState } from "react"

const Footer = () => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState('');
  
    const onSubmit = (e) => {
      e.preventDefault();
       axios.post(`https://st-backend-invochat.invo.zone/api/messages`,
       {
        data: { Email: email }
       }
       )
       .then((res) => {
        setErrors('Successfully submitted')
        
        if(res.status === 200){
      
        }
        else{
        }
      })
      .catch((error) => {
        
        setErrors('Invalid Email')
      })
       
     }

     
    return (
        <Box className="footer" sx={{ pt: 7.5, pb: { xs: 3, md: 3.5 } }}>
            <Container>
                <Grid className="footer_content" sx={{ display: "flex", justifyContent: { sx: "center", md: "space-between" },py:3 }} container>
                    <Grid item xs={12} md={2}>
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <Link to="/">
                                <img src={footerLogo} className="footer_logo" alt="Logo_image_for_footer" />
                                </Link>
                            </Box>
                            <Box sx={{ pt: { xs: 4, md: 5.2 }, pl: 1 }}>
                                <Link to="/about">
                                <Typography sx={{ textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    About Us
                                </Typography>
                                </Link>
                                <Link to="/features">
                                <Typography sx={{ pt: { xs: 2.5, md: 2 }, textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    Features
                                </Typography>
                                </Link>
                                <Link to="/pricing">
                                <Typography sx={{ pt: { xs: 2.5, md: 2 }, textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    Pricing
                                </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4} sx={{ display: "flex", justifyContent: "center", pt: { xs: 1, md: 8.5 } }}>
                        <Box sx={{ pt: { xs: 3, md: 3.5}}}>
                            <Link to="/blog">
                            <Typography sx={{ textAlign: { xs: "center", md: "left" } }} variant="h5">
                                Blog
                            </Typography>
                            </Link>
                            <Link to="/contact-us">
                            <Typography sx={{ pt: { xs: 2.5, md: 2 }, textAlign: { xs: "center", md: "left" } }} variant="h5">
                                Contact Us
                            </Typography>
                            </Link>
                            <Link to="/term-and-condition">
                            <Typography sx={{ pt: 2.5, textAlign: { xs: "center", md: "left" } }} variant="h5">
                                Terms and Conditions
                            </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={4} className="footer_btn" sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, alignItems: "center" }}>
                        <Box sx={{ pt: { xs: 3, md:11.5 } }}>
                            <Typography sx={{ textAlign: { xs: "center", md: "left" }, my: { xs: 3, md: 0 } }} variant="h4">
                                Newsletter subscription
                            </Typography>
                            <Box sx={{ my: 2 }}>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email"></input>
                                <span>
                                    <Button  onClick={onSubmit} className="footer_sub">Subscribe</Button>
                                </span>
                            </Box>
                            <Typography sx={{
            "& p":{
            fontSize:'18px',
            color: errors === 'Invalid Email' ? "red" : errors === 'Successfully submitted' ?  "green" : '' ,
            fontWeight:'600',}}}>
              { errors && <p>{errors}</p>}</Typography>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mt: { xs: 3.5, md: 2.5 } }}>
                                <Box>
                                    <img src={Twitter} className="footer_logo" alt="social_media_icons" />
                                </Box>
                                <Box sx={{ px: 2 }}>
                                    <img src={Linkdin} className="footer_logo" alt="social_media_icons" />
                                </Box>
                                <Box>
                                    <img src={Facebook} className="footer_logo" alt="social_media_icons" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box className="footer_border" sx={{ mt: 3 }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={10.5} sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: { xs: "center", md: "space-between", xl: "space-between" } }}>
                            <Typography sx={{ pt: 2.5, textAlign: { xs: "center", md: "left" } }} className="poppins" variant="h4">
                                All Rights Reserved.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;