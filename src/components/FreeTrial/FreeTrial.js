import React from "react";
import { Box,Typography, Button } from "@mui/material";
import "../../components/FreeTrial/FreeTrial.scss";

const FreeTrial = () => {
    return (
        <Box className="free_trial" sx={{ pt:{xs:4,lg:0} }}>
            <Box className="free_trial_bg" sx={{ display: "flex", alignItems:{sm:"center"}, justifyContent: "center" }}>
                <Box sx={{pt:{xs:5,sm:0}}}>
                    <Typography sx={{ textAlign: "center" }} variant="h1">
                        Get Expert Opinion! Sign In Now!
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
                        <Button className="free_trial_btn">Free Trial</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FreeTrial;
