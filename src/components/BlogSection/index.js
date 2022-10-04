import { Container, Box, Grid, Typography } from "@mui/material";
import { Link, graphql } from "gatsby";
import Blog from "../../components/Blog/Blog";
import BlogHead from "../../components/BlogHead";
import FreeTrialAbout from "../../components/FreeTrialAbout";

import React from "react";

const BlogSection = () => {
    return (
        <>
            <Container>
                <Box className="BlogPage">
                    <BlogHead />
                    <Grid container spacing={3} sx={{ display: "flex" }}>
                        <Typography variant="h3">Abc</Typography>
                    </Grid>
                </Box>
            </Container>
            <FreeTrialAbout />
        </>
    );
};

export default BlogSection;
