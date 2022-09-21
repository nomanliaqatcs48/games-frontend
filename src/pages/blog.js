import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/base-structure/Layout";
import { graphql } from "gatsby";
import BlogBox from "../components/common/BlogBox";
import SearchBox from "../components/SearchBlog/SearchBox";
import Banner from "../images/blogBanner.svg";
import "../styles/Blog.scss";

export default function blog({ data }) {
  return (
    <Layout>
      <Box className="blogPage">
        <Container>
          <Box className="blogBanner">
            <img src={Banner} alt="" />
          </Box>
          <Box className="blogHeading">
            <Typography variant="h1">Our Blogs</Typography>
          </Box>
          <Box className="blogContent">
            <Box className="cardsLayout">
              {data?.allStrapiBlog?.nodes?.map((blog, index) => {
                return (
                  <BlogBox blog={blog} key={index} />
                );
              })}
            </Box>
            <Box>
              
              <SearchBox  data={data} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
export const query = graphql`
  query MyQuery {
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
