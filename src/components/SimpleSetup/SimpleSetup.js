import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import One from "../../Assets/images/one.svg";
import Two from "../../Assets/images/two.svg";
import Three from "../../Assets/images/three.svg";
import Four from "../../Assets/images/four_.svg";
import DotsLeft from "../../Assets/images/simple_setup_dots2.svg";
import DotsRight from "../../Assets/images/simple_setup_dots1.svg";
import "../SimpleSetup/SimpleSetup.scss";

const cards = [
    {
        id: 1,
        imageName: One,
        cardHeading: "Create an account",
        cardParagraph: "InvoChat is 100% free to start. Pick a team name and a custom URL you can use to access InvoChat easily.",
    },
    {
        id: 2,
        imageName: Two,
        cardHeading: "Invite your team",
        cardParagraph: "InvoChat works best when your entire team is inside. Use InvoChat with an unlimited number of users. ",
    },
    {
        id: 3,
        imageName: Three,
        cardHeading: "Add chat rooms",
        cardParagraph: "Pick a few major topics that your team talks about frequently, and create your InvoChat rooms to get started.",
    },
    {
        id: 4,
        imageName: Four,
        cardHeading: "Message securely",
        cardParagraph: "InvoChat is secured with end-to-end encryption. Securely chat and share files for efficient collaboration.",
    },
];

const SimpleSetup = () => {
    return (
        <Box id="SimpleSetup" className="setup" sx={{ pt: 9 }}>
            <Container>
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography sx={{ textAlign: "center" }} variant="h2">
                            Simple setup in 5 minutes
                        </Typography>
                    </Box>
                </Box>
                <Box className="setup_cards">
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box className="line1"></Box>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
                        <Box className="line2"></Box>
                    </Box>
                    <Box className="dot_left">
                        <img loading="lazy" src={DotsLeft} alt="dots_like_picture" />
                    </Box>
                    <Box className="dot_right">
                        <img loading="lazy" src={DotsRight} alt="dots_like_picture" />
                    </Box>
                    <Grid container spacing={3} sx={{ pt: 6 }}>
                        {cards.map((val) => (
                            <Grid key={val.id} item xs={12} sm={6} md={3}>
                                <Box className="card" sx={{ py: 3 }}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img loading="lazy" src={val.imageName} alt="picture_showing_one" />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ textAlign: "center" }} variant="h3">
                                            {val.cardHeading}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                                        <Typography sx={{ textAlign: "center" }} variant="h5">
                                            {val.cardParagraph}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default SimpleSetup;
