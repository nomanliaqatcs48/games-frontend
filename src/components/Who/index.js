import React from "react";
import { Container, Typography, Box } from "@mui/material";
import "../Who/index.scss";
import Seo  from "../../components/common/SEO";

const content = [
    {
        metaTitle: 'About Invochat - An efficient communication platfrom',
    },
];
const Who = (props) => {
    return (
        <Container>
            <Seo title={content[0].metaTitle} description={props.description} tag='index' pageUrl='about-us/'/>
            <Box className="who-wrapper">
                <Box className="who-content">
                    <Typography variant="h1">{props.title}</Typography>
                    <Typography variant="h6">{props.description}</Typography>
                </Box>
                <Box className="who-image">
                    <img loading="lazy" src={props.image} alt="" />
                </Box>
            </Box>
        </Container>
    );
};

export default Who;
