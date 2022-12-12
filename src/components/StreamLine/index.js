import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "gatsby";
import "../StreamLine/index.scss";

const StreamLine = () => {
    return (
        <Box className="streamLine-wrapper">
            <Box className="streamLine-content">
                <Typography variant="h2">
                    We are making it easier for global
                    <br />
                    businesses to streamline their communication
                </Typography>
                <Box className="streamLine-btn">
                    <Link to="/pricing/">
                    <Button>See pricing</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default StreamLine;
