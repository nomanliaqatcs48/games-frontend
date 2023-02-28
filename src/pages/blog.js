import React, { useState } from "react";
import { Box, Grid, Container } from "@mui/material";
import Layout from "../baseStructure/Layout";
import Blog from "../components/Blog/Blog";
import FreeTrialAbout from "../components/FreeTrialAbout";
import { graphql } from "gatsby";
import "../components/FreeTrialAbout/index.scss";
import BlogHead from "../components/BlogHead";
import Seo from "../components/common/SEO";
import ReactPaginate from "react-paginate";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const content = [
  {
    metaTitle: "Discover the lastest product news - Invochat Blog",
    metaDescription:
      "Read the latest product, team collaboration tricks, team building tips, & much more. Our resources help you stay connected with the latest trends in products.",
  },
];
const BlogPage = ({ data }) => {
  const [items, setItems] = useState(data?.allStrapiBlog?.nodes || []);
  let itemsPerPage = 7;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
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
            {currentItems?.map((blog, index) => {
              return (
                <Blog
                  blog={blog}
                  key={index}
                  customClass={index === 0 ? true : false}
                />
              );
            })}
          </Grid>
          <Box className="paginationWrapper">
            <ReactPaginate
              activeClassName="item active "
              breakClassName="item break-me "
              containerClassName={"pagination"}
              disabledClassName={"disabled-page"}
              // marginPagesDisplayed={2}
              nextClassName={"item next "}
              pageClassName={"item pagination-page "}
              previousClassName={"item previous"}
              nextLabel={<ArrowForwardIosIcon style={{ fontSize: 25 }} />}
              previousLabel={<ArrowBackIosNewIcon style={{ fontSize: 25 }} />}
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
            />
          </Box>
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

export default BlogPage;
