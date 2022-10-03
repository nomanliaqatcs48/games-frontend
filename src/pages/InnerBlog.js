import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Layout from "../baseStructure/Layout";
import InnerBlogMainImg from "../Assets/images/inner_blog_main.svg";
import InnerBlogMiddleImg from "../Assets/images/Inner_blog_img2.svg";
import InnerBlogMiddleImg2 from "../Assets/images/middle_img2.svg";
import "../styles/common/InnerBlog.scss";
import { Link, graphql } from "gatsby";


const InnerBlog = ({data}) => {
    const record = data.strapiBlog;
    console.log(record, 'inner')
    return (
        <Layout>
            <Box className="innerBlog">
                <Container>
                    <Grid container>
                        {/* <Grid xs={12} md={3.5} lg={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                            <Box className="innerBlog_scroller">
                                {scrollText.map((item) => (
                                    <>
                                        <Typography variant="h1" sx={{ py: { xs: 1, sm: 1.5 } }}>
                                            {item.text}
                                        </Typography>
                                    </>
                                ))}
                            </Box>
                        </Grid> */}
                      
                    </Grid>
                </Container>
            </Box>
        </Layout>
    );
};

export default InnerBlog;

export const query = graphql`
query singleBlog($Slug: String) {
    strapiBlog(Slug: {eq: $Slug}) {
      id
      Title
      Content
      Slug
      Image {
        url
      }
      check {
        data {
          check
        }
      }
      createdAt
    }
  }
  
`;
