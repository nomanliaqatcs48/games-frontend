import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Layout from "../baseStructure/Layout";
import Blog from "../components/Blog/Blog";
import FreeTrialAbout from "../components/FreeTrialAbout";
import { graphql } from "gatsby";
import "../components/FreeTrialAbout/index.scss";
import BlogHead from "../components/BlogHead";
import Seo from "../components/common/SEO";

const content = [
  {
    metaTitle: "Discover the lastest product news - Invochat Blog",
    metaDescription:
      "Read the latest product, team collaboration tricks, team building tips, & much more. Our resources help you stay connected with the latest trends in products.",
  },
];
const blog = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={content[0].metaTitle}
        description={content[0].metaDescription}
        tag="index"
        pageUrl="blog/"
      />
      <Container>
        <Box className="BlogPage">
          <BlogHead />
          <Grid container spacing={3} sx={{ display: "flex" }}>
            {data?.allStrapiBlog?.nodes?.map((blog, index) => {
              return (
                <Blog
                  blog={blog}
                  key={index}
                  customClass={index === 0 ? true : false}
                />
              );
            })}
          </Grid>
        </Box>
      </Container>
      <FreeTrialAbout />
    </Layout>
  );
};
export const query = graphql`
  query MyQuerystwo {
    allStrapiBlog(sort: { fields: createdAt, order: DESC }) {
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
