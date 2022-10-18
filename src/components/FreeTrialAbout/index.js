import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import "../FreeTrialAbout/index.scss";

const FreeTrialAbout = () => {
    return (
        <>
            <div className="freeTrial-wrapper">
                <Container>
                    <Box className="freeTrial-content">
                        <Typography variant="h2">Start your 14-day free trial today</Typography>
                    </Box>
                    <Box className="freeTrial-form">
                        <form>
                            <input placeholder="Enter your email" />
                            <Box>
                                <Button className="freeTrial-form-btn" variant="h6">
                                    Sign up for free
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Container>
            </div>
        </>
    );
};

export default FreeTrialAbout;
