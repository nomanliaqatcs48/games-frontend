import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Blog from "../components/Blog/Blog";
import "../../src/components/BlogHead.scss";

const BlogHead = ({ blog }) => {
  return (
    <Container>
      <Box className="blog_head">
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Our Blog Division
        </Typography>
        <Typography variantMapping="p" sx={{ textAlign: "center", p: 1.5 }}>
          You'll love it!
        </Typography>
        <Grid container spacing={3} sx={{ display: "flex" }}>
          {blog?.map((blog, index) => {
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
  );
};

export default BlogHead;
