import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PlateformImgOne from "../../Assets/images/plateform_img1.svg";
import PlateformImgTwo from "../../Assets/images/plateform_img2.svg";
import Analytics from "../../Assets/images/analytics.svg";
import Security from "../../Assets/images/security.svg";
import Alerts from "../../Assets/images/alerts.svg";
import Reciept from "../../Assets/images/reciept.svg";
import Admin from "../../Assets/images/admin.svg";
import Meet from "../../Assets/images/meet.svg";
import Export from "../../Assets/images/export.svg";
import PlateformDotsOne from "../../Assets/images/plateform_dots1.svg";
import PlateformDotsTwo from "../../Assets/images/plateform_dots2.svg";
import Circle from "../../Assets/images/circle.svg";
import BgLayerOne from "../../Assets/images/plateform_bg_1.svg";
import BgLayerTwo from "../../Assets/images/plateform_bg_2.svg";
import BgLayerThree from "../../Assets/images/plateform_bg_3.svg";
import "../../components/Plateforms/Plateforms.scss";

const cardAbove = [
    {
        imageName: Analytics,
        cardHeading: "Analytics",
        cardParagraph: "View engagement statistics to understand the how, when and who of your team’s InvoChat usage.",
    },
    {
        imageName: Security,
        cardHeading: "Security",
        cardParagraph: "Control all the details, like our inactivity lockout interval, password requirements and user invite ability. ",
    },
    {
        imageName: Alerts,
        cardHeading: "Custom Alerts",
        cardParagraph: "Use our group-level alert settings to adjust custom notification settings for each chat room. Never miss a beat.",
    },
    {
        imageName: Reciept,
        cardHeading: "Read Receipts",
        cardParagraph: "Improve team accountability and reliability with easy-to-access read receipts for every message.",
    },
];

const cardDown = [
    {
        imageName: Admin,
        cardHeading: "Administration",
        cardParagraph: "View engagement statistics to understand the how, when and who of your team’s InvoChat usage.",
    },
    {
        imageName: Meet,
        cardHeading: "Google Meet Integrations",
        cardParagraph: "Control all the details, like our inactivity lockout interval, password requirements and user invite ability. ",
    },
    {
        imageName: Export,
        cardHeading: "Import Export Data",
        cardParagraph: "Control all the details, like our inactivity lockout interval, password requirements and user invite ability. ",
    },
];

const Plateforms = () => {
    return (
        <Box className="plateforms" sx={{ pt: { xs: 5, md: 10, lg: 12 } }}>
            <Container>
                <Grid spacing={3} container sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, pt: { xs: 1, md: 0 } }}>
                            <img src={PlateformImgTwo} alt="random_image" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pt: 3.5 }}>
                            <Typography variant="h2">Efficient Conversation, One Platform.</Typography>
                        </Box>
                        <Box>
                            <ul className="plateform_list">
                                <li>Discuss what’s important</li>
                                <li>Check task progress and updates</li>
                                <li>Notify specific members relevant to a given discussion through tags</li>
                                <li>Connect with your team via google meet integration on the go.</li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
                <Grid spacing={3} container sx={{ pt: { xs: 0, md: 5 } }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pt: 4, display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                            <Typography variant="h2" className="m_w" sx={{ textAlign: { xs: "center", md: "left" } }}>
                                Create collaborative workspaces to stay on top of things
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                            <img src={PlateformImgOne} alt="random_image" />
                        </Box>
                    </Grid>
                </Grid>
                <Box className="plateform_cards_1">
                    <Grid container spacing={5} sx={{ pt: { xs: 5, md: 9 } }}>
                        {cardAbove.map((val) => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Box className="card" sx={{ py: 4 }}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img src={val.imageName} alt="picture-showing-first_card" />
                                    </Box>
                                    <Box sx={{ pt: 1 }}>
                                        <Typography variant="h3">{val.cardHeading}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                                        <Typography variant="h4">{val.cardParagraph}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box className="plateform_dots_one">
                        <img src={PlateformDotsOne} alt="random_dot_like_picture" />
                    </Box>
                </Box>
                <Box className="plateform_cards_2">
                    <Grid container spacing={5} sx={{ pt: 4, display: "flex", justifyContent: "center" }}>
                        {cardDown.map((val) => (
                            <Grid item xs={12} md={3}>
                                <Box className="card" sx={{ py: 4 }}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <img src={val.imageName} alt="picture-showing-first_card" />
                                    </Box>
                                    <Box sx={{ pt: 1 }}>
                                        <Typography variant="h3">{val.cardHeading}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                                        <Typography variant="h4">{val.cardParagraph}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box className="plateform_dots_two">
                        <img src={PlateformDotsTwo} alt="random_dot_like_picture" />
                    </Box>
                    <Box className="plateform_dots_twice">
                        <img src={PlateformDotsOne} alt="random_dot_like_picture" />
                    </Box>
                    <Box className="plateform_circle">
                        <img src={Circle} alt="random_Circle_like_picture" />
                    </Box>
                </Box>
            </Container>
            <Box className="plateform_layer_1">
                <img src={BgLayerOne} alt="random_Circle_like_picture" />
            </Box>
            <Box className="plateform_layer_2">
                <img src={BgLayerTwo} alt="random_Circle_like_picture" />
            </Box>
            <Box className="plateform_layer_3">
                <img src={BgLayerThree} alt="random_Circle_like_picture" />
            </Box>
        </Box>
    );
};

export default Plateforms;
