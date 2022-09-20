import * as React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import footerLogo from "../../assets/images/footer_logo.svg"
import Twitter from "../../assets/images/twitter.svg";
import Linkdin from "../../assets/images/linkdin.svg";
import Facebook from "../../assets/images/fb.svg";
import "../../styles/common/Footer.scss"

const Footer = () => {
    return (
        <Box className="footer" sx={{ pt: 8.5, pb:{xs:3,md:3.5} }}>
            <Container>
                <Grid sx={{ display: "flex", justifyContent: { sx: "center", md: "space-between" } }} container>
                    <Grid item xs={12} md={2}>
                        <Box className="footer_content">
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <img src={footerLogo} className="footer_logo" alt="Logo_image_for_footer" />
                            </Box>
                            <Box sx={{ pt: 6, pl: 1 }}>
                                <Typography sx={{ textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    About Us
                                </Typography>
                                <Typography sx={{ pt: 3.5, textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    Features
                                </Typography>
                                <Typography sx={{ pt: 3.5, textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    Pricing
                                </Typography>
                                <Typography sx={{ pt: 3.5, textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    Blog
                                </Typography>
                                <Typography sx={{ pt: 3.5, textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    Contact Us
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} className="footer_btn" sx={{ display: "flex", justifyContent:{xs:"center",md:"flex-end"}, alignItems: "flex-end" }}>
                        <Box>
                            <Typography sx={{ pt: 3.5, textAlign: { xs: "center", md: "left" },my:{xs:4,md:0} }} variant="h4">
                                Newsletter subscription
                            </Typography>
                            <Box sx={{ my: 2.5 }}>
                                <input type="text" placeholder="Enter your email"></input>
                                <span>
                                    <Button className="footer_sub">Subscribe</Button>
                                </span>
                            </Box>
                            <Box sx={{ display: "flex",justifyContent:{xs:"center",md:"flex-start"}, mt: {xs:3.5,md:2.5} }}>
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
            <Box className="footer_border" sx={{ mt: 6 }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={10.5} sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: { xs: "center", md: "space-between", xl: "space-between" } }}>
                            <Typography sx={{ pt: 3.5,textAlign:{xs:"center",md:"left"} }} className="poppins" variant="h4">
                                All Rights Reserved.
                            </Typography>
                            <Typography sx={{ pt: 3.5,textAlign:{xs:"center",md:"left"} }} className="poppins" variant="h5">
                                Terms and Conditions
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
