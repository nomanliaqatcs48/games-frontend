import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ImageOne from "../../Assets/images/superEasy1.png";
import ImageTwo from "../../Assets/images/superEasy2-min.png";
import ImageThree from "../../Assets/images/superEasy3-min.png";
import ImageFour from "../../Assets/images/superEasy4-min.png";
import BgLayerFour from "../../Assets/images/bg_4.svg";
import "../../components/SuperEasy/SuperEasy.scss";
import { Container } from "@mui/system";
import { Link } from "gatsby";

const SuperEasy = () => {
    return (
        <Box className="super_easy" sx={{ pt: { xs: 7, md: 9 } }}>
            <Box className="super_heading" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box>
                    <Typography sx={{ textAlign: "center" }} variant="h1">
                        Super Easy to Start
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
                        <Link to="https://invo.chat/signup/email" className="link-st">
                            <Button className="super_btn">FREE SIGN UP</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Container className="custom_container">
                <Box sx={{ pt: { xs: 5, md: 8 } }}>
                    <Grid container sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
                        <Grid item xs={12} md={6} sx={{ pt: { xs: 2, md: 0 } }}>
                            <Box>
                                <img loading="lazy" src={ImageOne} alt="picture_of_mobile" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ display: "flex", pl: { xs: 3, lg: 6 } }}>
                                <Typography variant="h2">Make company-wide communication trouble-free through instant file sharing</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 6, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "flex-start" } }}>
                                <Typography sx={{ pr: { sm: 3, md: 0 }, pl: { xs: 3, sm: 0 } }} variant="h2">
                                    Simplify problem solving & decision making with topic specific chat rooms
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ pt: { xs: 3.5, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <img loading="lazy" src={ImageTwo} alt="picture_of_mobile" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
                        <Grid item xs={12} md={6} sx={{ pt: { xs: 2, md: 0 } }}>
                            <Box>
                                <img loading="lazy" src={ImageThree} alt="picture_of_mobile" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 5, md: 0 } }}>
                            <Box sx={{ display: "flex", pl: { xs: 3, lg: 6 } }}>
                                <Typography variant="h2">Personalized notifications that matter to you with custom options to stay focused</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 5, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "flex-start" } }}>
                                <Typography sx={{ pr: { xs: 3, md: 0 }, pl: { xs: 3, sm: 0 } }} variant="h2">
                                    Enable instant and direct communication through 1:1 chat with your team members
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ pt: { xs: 3, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "flex-start" } }}>
                                <img loading="lazy" src={ImageFour} alt="picture_of_mobile" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box className="bg_1">
                <img loading="lazy" src={BgLayerFour} alt="random_Circle_like_picture" />
            </Box>
        </Box>
    );
};

export default SuperEasy;
