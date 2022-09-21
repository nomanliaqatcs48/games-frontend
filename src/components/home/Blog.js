import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import BlogSlider from "./BlogSlider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "gatsby";
import '../../styles/Blog.scss';

export default function Blog({ blogs }) {
  return (
    <section className="blogBack">
      <Container>
        <Box className="blog-Heading">
          <Typography variant="h2">From Our Blog Archives</Typography>
        </Box>
        <BlogSlider blogs={blogs} />
        <Box className="blog-btn-wrapper">
          <Link to="/blog">
            <Button className="blog-btn">
              View more Blogsposts
              <ArrowForwardIcon sx={{ fill: "white", marginLeft: "10px" }} />
            </Button>
          </Link>
        </Box>
      </Container>
    </section>
  );
}
