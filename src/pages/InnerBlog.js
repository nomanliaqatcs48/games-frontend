import React from "react";
import { Box, Container, Grid} from "@mui/material";
import Layout from "../baseStructure/Layout";
import "../styles/common/InnerBlog.scss";
import { graphql } from "gatsby";

const InnerBlog = ({data}) => {
    
    return (
        <Layout>
            <Box className="innerBlog">
                <Container>
                    <Grid container>
                        
                    </Grid>
                </Container>
            </Box>
        </Layout>
    );
};

export default InnerBlog;

export const query = graphql`
query singleBlogTwo($Slug: String) {
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
