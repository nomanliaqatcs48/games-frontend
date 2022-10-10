import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import Layout from "../baseStructure/Layout";
import Blog from "../components/Blog/Blog";
import FreeTrialAbout from "../components/FreeTrialAbout";
import { Link, graphql } from "gatsby";
import "../components/FreeTrialAbout/index.scss";
import BlogHead from "../components/BlogHead";
import HeroSection from "../components/HeroSection/HeroSection";
import SimpleSetup from "../components/SimpleSetup/SimpleSetup";
import Plateforms from "../components/Plateforms/Plateforms";
import SuperEasy from "../components/SuperEasy/SuperEasy";
import GetStarted from "../components/common/GetStarted";
import Feedback from "../components/FeedBack/FeedBack";
import FrequentQuestions from "../components/common/FrequentQuestions";
import FreeTrial from "../components/FreeTrial/FreeTrial";
import '../../src/styles/common/globalStyles.module.scss'
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Raleway",
    },
    body1: {
      fontFamily: "Raleway",
    },
  },
});


const IndexPage = ({ data }) => {
    console.log("DATA LOGS ======>>>", data);
    return (
      <ThemeProvider theme={theme}>
        <Layout>
            <HeroSection/>
            <SimpleSetup/>
            <Plateforms/>
            <SuperEasy/>
            <GetStarted/>
            <Feedback/>
            <Container>
                <Box className="BlogPage">
                    <BlogHead />
                    <Grid container spacing={3} sx={{ display: "flex" }}>
                        {data?.allStrapiBlog?.nodes?.map((blog, index) => {
                            return <Blog blog={blog} key={index} customClass={index === 0 ? true : false} />;
                        })}
                    </Grid>
                </Box>
            </Container>
            <FrequentQuestions/>
            <FreeTrial/>
        </Layout>
        </ThemeProvider>
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

export default IndexPage;
