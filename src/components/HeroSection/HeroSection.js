import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import HeroPic from "../../Assets/images/hero_new.png";
import DownArrow from "../../Assets/images/down_arrow.svg";
import IOS from "../../Assets/images/ios.svg";
import Apple from "../../Assets/images/apple.svg";
import Window from "../../Assets/images/window.svg";
import Chrome from "../../Assets/images/chrome_new.png";
import "../HeroSection/HeroSection.scss";
import axios from "axios";
import { useState } from "react";

const HeroSection = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`https://st-backend-invochat.invo.zone/api/messages`, {
                data: { Email: email },
            })
            .then((res) => {
                setErrors("Successfully submitted");

                if (res.status === 200) {
                } else {
                }
            })
            .catch((error) => {
                setErrors("Invalid Email");
            });
    };

    return (
        <Box className="hero">
            <Container>
                <Grid container sx={{ pt: { xs: 4, md: 7 } }}>
                    <Grid item xs={12} md={6}>
                        <Box className="hero_content">
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <Typography variant="h1">
                                    Streamline in-house & remote teams with <span>collaboration tool</span>
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "flex-start" }, my: { xs: 2.5, lg: 4 } }}>
                                <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email"></input>
                                </Box>
                                <span>
                                    <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                                        <Button onClick={onSubmit} className="hero_btn">
                                            Try invochat It's FREE
                                        </Button>
                                    </Box>
                                </span>
                            </Box>
                            <Typography
                                sx={{
                                    "& p": {
                                        fontSize: "18px",
                                        color: errors === "Invalid Email" ? "red" : errors === "Successfully submitted" ? "green" : "",
                                        fontWeight: "600",
                                    },
                                }}
                            >
                                {errors && <p>{errors}</p>}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <Typography sx={{ textAlign: { xs: "center", md: "left" } }} variant="h5">
                                    Catch up on important conversations and say hi to productive collaboration - An all-in-one solution. Be it tasks or demanding projects our efficient communication platform is always at your service.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="down_arrow" sx={{ pt: { md: 5, lg: 7 } }}>
                            <Link to="#SimpleSetup">
                                <img loading="lazy" src={DownArrow} alt="scroll-icon" />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, pt: { xs: 4.5, md: 0 } }}>
                        <Box className="home_img_box" sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
                            <img loading="lazy" src={HeroPic} alt="web/mobile-screenshot" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{ display: "flex", justifyContent: "center", pt: { xs: 12, sm: 6 } }}>
                    <Grid item xs={12} md={8} className="hero_social">
                        <Grid container sx={{ display: "flex", justifyContent: "space-around", py: 1 }}>
                            <Grid item xs={6} sm={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 2, sm: 0 } }}>
                                <img loading="lazy" src={IOS} alt="web/mobile-screenshot" />
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 2, sm: 0 } }}>
                                <img loading="lazy" src={Apple} alt="web/mobile-screenshot" />
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 2, sm: 0 } }}>
                                <img loading="lazy" src={Window} alt="web/mobile-screenshot" />
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 2, sm: 0 } }}>
                                <img loading="lazy" src={Chrome} alt="web/mobile-screenshot" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "center", pt: { xs: 5, sm: 7, md: 8 } }}>
                    <Box className="line"></Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
