import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, graphql } from "gatsby";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import '../../styles/Blog.scss';

export default function BlogBox(props) {
  return (
    <div>
      <Box className="blogCard">
        <img className="blogSlideImage" src={props.blog?.Image[0].url} />
        <Typography variant="h1">{props?.blog?.Title}</Typography>
        <Typography variant="h4">
        {props?.blog?.createdAt.substring(0, 10)}
        </Typography>
        <Typography variant="span">
          {/* {props.blog?.Content.substring(0, 100)} */}
          {props.blog?.Content.substring(0, 100)}
        </Typography>
        <Box className="viewMoreBlog">
          {/* <Link to="/innerPage"> */}
          <Link to={`/blog/${props?.blog?.Slug}`}>
            <Typography variant="span">View more</Typography>
            <ArrowForwardIcon
              sx={{ fill: "#611F69", fontSize: "22px", marginBottom: "-7px" }}
            />
          </Link>
        </Box>
      </Box>
      {/* Slide 1 Ends */}
    </div>
  );
}