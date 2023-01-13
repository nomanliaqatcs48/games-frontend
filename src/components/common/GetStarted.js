import React from "react";
import { Container, Box, Typography } from "@mui/material";
import PriceBox from "../common/PriceBox";
import "../../styles/common/GetStarted.scss";
import { Link } from "gatsby";

function GetStarted() {
  return (
    <div className="getstarted-back">
      <Container>
        <Box className="getstarted-Wrapper">
          <Box className="getstarted-heading">
            <Typography variant="h2">Ready to get started?</Typography>
            <Typography variantMapping="p">
              Choose a plan tailored to your needs
            </Typography>
          </Box>
          <Box className="priceBox-wrapper">
            <Link className="link-st" to="https://invo.chat/signup/email/">
              <PriceBox
                title="Free"
                subtitle="Perfect to get started"
                price="0"
                buttonText="Get Started"
                listArray={
                  <ul>
                    <li>Perfect to get started</li>
                    <li>Perfect to</li>
                    <li>Perfect to get</li>
                  </ul>
                }
              />
            </Link>
            <PriceBox
              title="Pro"
              subtitle="Best for professional"
              price="40"
              buttonText="Coming Soon"
              listArray={
                <ul>
                  <li>Coming Soon</li>
                </ul>
              }
            />
            <PriceBox
              title="Ultimate"
              subtitle="Toolset for hard players"
              price="75"
              buttonText="Coming Soon"
              listArray={
                <ul>
                  <li>Coming Soon</li>
                </ul>
              }
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default GetStarted;
