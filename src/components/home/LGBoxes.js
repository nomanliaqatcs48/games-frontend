import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Available from "../../images/LG1.svg";
import Human from "../../images/LG2.svg";
import Boost from "../../images/LG3.svg";
import Behaviour from "../../images/LG4.svg";
import Search from "../../images/LG5.svg";
import Needs from "../../images/LG6.svg";
import "../home/LeadGenerate.scss";

export default function LGBoxes() {
  return (
    <Container className="LGBoxes-container">
      <Box className="feature-wrapper">
        {/* Feature 1 */}
        <Box className="feature-content">
          <img className="LGImg" src={Available} alt="" />
          <Typography variant="h6">
            Quick turnaround & 24/7
            <br />
            availability
          </Typography>
        </Box>

        {/* Feature 2 */}
        <Box className="feature-content">
          <img className="LGImg" src={Human} alt="" />
          <Typography variant="h6">
            Human customer service
            <br />
            assistance
          </Typography>
        </Box>

        {/* Feature 3 */}
        <Box className="feature-content">
          <img className="LGImg" src={Boost} alt=""/>
          <Typography variant="h6">
            Boost your sales &<br />
            instantly qualify leads
          </Typography>
        </Box>
        {/* Feature 4 */}
        <Box className="feature-content">
          <img className="LGImg" src={Behaviour} alt="" />
          <Typography variant="h6">
            Insights into customer
            <br />
            behavior
          </Typography>
        </Box>

        {/* Feature 5 */}
        <Box className="feature-content">
          <img className="LGImg" src={Search} alt="" />
          <Typography variant="h6">
            Immediately search for
            <br />
            information
          </Typography>
        </Box>

        {/* Feature 6 */}
        <Box className="feature-content">
          <img className="LGImg" src={Needs} alt=""/>
          <Typography variant="h6">
            Customize accordion to
            <br />
            your needs
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
