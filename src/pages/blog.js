import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Layout from "../baseStructure/Layout";
import Blog from "../components/Blog/Blog";
import FreeTrialAbout from "../components/FreeTrialAbout";
import { Link, graphql } from "gatsby";
import "../components/FreeTrialAbout/index.scss";
import BlogHead from "../components/BlogHead";
const blog = ({ data }) => {
   
    return (
        <Layout>
            <Container>
                <Box className="BlogPage">
                    <BlogHead />
                    <Grid container spacing={3} sx={{ display: "flex" }}>
                        {data?.allStrapiBlog?.nodes?.map((blog, index) => {
                            return <Blog blog={blog} key={index} customClass={index === 0 ? true : false} />;
                        })}
                    </Grid>
                    <FreeTrialAbout />
                </Box>
            </Container>
        </Layout>
    );
};
export const query = graphql`
    query MyQuerystwo {
        allStrapiBlog {
            nodes {
                Slug
                Content
                Title
                id
                Image {
                    url
                }
                createdAt
                check {
                    data {
                        check
                    }
                }
            }
        }
    }
`;

export default blog;


