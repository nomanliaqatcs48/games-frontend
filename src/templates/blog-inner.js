import { Box, Container, Grid, Typography } from "@mui/material";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../baseStructure/Layout";
import SEO from "../components/common/SEO";
import "../styles/common/InnerBlog.scss";

const InnerBlog = ({ data }) => {
  const record = data?.strapiBlog;
  return (
    <Layout>
      <Box className="innerBlog">
        <Container>
          <Grid container>
            <Grid xs={12}>
              <Box className="innerBlog_content">
                {/* {blogInnerContent.map((val) => (
                  <> */}
                <SEO
                  title={record?.metaTitle}
                  description={record?.metaDescription}
                  data={record}
                  pageUrl="blogs"
                />
                <Box>
                  <Typography variant="h1">{record?.Title}</Typography>
                </Box>
                <Box>
                  <img
                    loading="lazy"
                    src={record.Image[0].url}
                    alt="Blog_content_image"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    dangerouslySetInnerHTML={{
                      __html: record?.check?.data?.check,
                    }}
                  />
                </Box>
                <span
                  dangerouslySetInnerHTML={{ __html: record?.Add_Schema }}
                />
                {/* </>
                ))} */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default InnerBlog;

export const query = graphql`
  query singleBlog($Slug: String) {
    strapiBlog(Slug: { eq: $Slug }) {
      id
      Title
      Content
      Slug
      metaTitle
      metaDescription
      metaKeywords
      Tags
      Add_Canonical_Link
      Image {
        url
        alternativeText
      }
      check {
        data {
          check
        }
      }
      createdAt
      Add_Schema
    }
  }
`;
