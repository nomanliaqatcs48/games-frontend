import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import One from "../../assets/images/one.svg";
import Two from "../../assets/images/two.svg";
import Three from "../../assets/images/three.svg";
import Four from "../../assets/images/four.svg";
import "../SimpleSetup/SimpleSetup.scss";

const cards = [
    {
        imageName: One,
        cardHeading: "Create an account",
        cardParagraph: "InvoChat is 100% free to start. Pick a team name and a custom URL you can use to access InvoChat easily.",
    },
    {
        imageName: Two,
        cardHeading: "Invite your team",
        cardParagraph: "InvoChat works best when your entire team is inside. Use InvoChat with an unlimited number of users. ",
    },
    {
        imageName: Three,
        cardHeading: "Add chat rooms",
        cardParagraph: "Pick a few major topics that your team talks about frequently, and create your InvoChat rooms to get started.",
    },
    {
        imageName: Four,
        cardHeading: "Message securely",
        cardParagraph: "InvoChat is secured with end-to-end encryption. Securely chat and share files for efficient collaboration.",
    },
];

const SimpleSetup = () => {
    return (
        <Box className="companies">
            <Container>
                <Box sx={{ pt: { xs: 6, sm: 8, lg: 9 } }}>
                    <Box sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-start" } }}>
                        <Typography sx={{ textAlign: { xs: "center", lg: "left" } }} className="poppins" variant="h2">
                            We help more than 1500 companies from all sectors
                        </Typography>
                    </Box>
                </Box>
                <Grid container spacing={3} sx={{ pt: { xs: 5, lg: 8 } }}>
                    {cards.map((val) => (
                        <Grid item xs={12} md={4}></Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default SimpleSetup;
