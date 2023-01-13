import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "../../components/FreeTrial/FreeTrial.scss";
import { Link } from "gatsby";
const FreeTrial = () => {
  return (
    <Box className="free_trial" sx={{ pt: { xs: 4, lg: 0 } }}>
      <Box
        className="free_trial_bg"
        sx={{
          display: "flex",
          alignItems: { sm: "center" },
          justifyContent: "center",
        }}
      >
        <Box sx={{ pt: { xs: 5, sm: 0 } }}>
          <Typography sx={{ textAlign: "center" }} variant="h2">
            Get Expert Opinion! Sign In Now!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
            <Link to="https://invo.chat/signup/email/" className="link-st">
              <Button className="free_trial_btn">Free Trial</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeTrial;
