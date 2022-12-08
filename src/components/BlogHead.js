import React from "react";
import { Box, Typography } from "@mui/material";
import "../../src/components/BlogHead.scss";

const BlogHead = () => {
    return (
        <Box className="blog_head">
            <Typography variant="h1" sx={{ textAlign: "center" }}>
                Our Blog Division
            </Typography>
            <Typography variant="h3" sx={{ textAlign: "center", pt: 1.5 }}>
                You'll love it!
            </Typography>
        </Box>
    );
};

export default BlogHead;
