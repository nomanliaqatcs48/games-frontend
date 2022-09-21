import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "../../styles/Comments.scss";

export default function Comments() {
  return (
    <>
      <Box className="comment-head">
        <Typography variant="h1">Leave A Reply</Typography>
      </Box>
      <Box className="comment-line">
        <Typography variant="span">
          Your email address will not be published. Required fields are marked *
        </Typography>
      </Box>
      <form>
        <Box className="commentField">
          <label>Comment *</label>
          <textarea rows="10" placeholder="Comment"></textarea>
          <Box className="name-email">
            <div className="name">
            <label>Name *</label>
            <input type="text" placeholder="Name"></input>
            </div>
            <div className="email">
            <label>Email *</label>
            <input type="text" placeholder="Email"></input>
            </div>
          </Box>
          <Box className="webField">
          <label>Website</label>
          <input type="text" placeholder="Website"></input>
          </Box>
          <Box className="check">
            <input type="checkbox"></input>
            <label>Save my name, email, and website in this browser for the next time I comment.</label>
          </Box>
          <Button className="btn-comment">
          Post Comment
          </Button>
        </Box>
        
      </form>
    </>
  );
}
