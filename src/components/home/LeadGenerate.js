import React from "react";
import { Link } from "gatsby";
import { Container, Box, Typography, Button } from "@mui/material";
import LGBoxes from "./LGBoxes";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../home/LeadGenerate.scss';

export default function LeadGenerate() {
  return (
    <section className="leadBack">
      <Container>
        <Box>
          <Box className="leadGenerate-heading">
            <Typography variant="h2">
              Automated Customer Support &<br />
              Lead-Generation Engine
            </Typography>
          </Box>
          <LGBoxes />
          <Box className="trial-Btn-wrapper">
            <Link to="https://app.invocom.io/signup">
              <Button className="trial-Btn">
                14-day free trial
                <ArrowForwardIcon sx={{fill:"white", marginLeft:'10px'}}/>
              </Button>
            </Link>
            <Typography variant="h6">
              *Full features enabled. No credit card is required.
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
