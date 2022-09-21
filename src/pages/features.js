import React from "react";
import Layout from "../components/base-structure/Layout";
import { Container, Box, Typography } from "@mui/material";
import Banner from "../images/featureBanner.svg";
import "../styles/About.scss";
// import * as styles from '../styles/About.module.scss';


const content = [
  {
    title: "Features",
    description:
      "InvoCom is constructed on a seamless AI/ML technology that assures users real-time support, engagement, and long-lasting communication ties. InvoCom believes in constant innovation and accelerated development that could boost your business in a very short span. Chatbots have become a very effective and essential way of communication in terms of time management and agile responses by businesses. The global Chatbot Market size is expected to witness astounding growth by exhibiting a CAGR of 22.5% between 2020 and 2027. We deliver an array of high operational standards, minimized cost structure, customized bots, and mitigate all the security risks. Our messenger facilitates Simple, convenient, personal, and friendly conversations that ensure loyal, happy, and satisfied customers. We understand that customer interaction is an important and integral part of the industry, startups, and small-scale businesses.",
    buttonText: "Ready To Get Started?",
    lastText:
      "Build your customize chat widget in a cost-effective budget and scale as you grow. With InvoCom you can opt for both AI Chatbot and live chat agents.",
  },
];

export default function features() {
  return (
    <Layout>
      <Box className="aboutPage">
        <Container>
          <Box className="aboutBanner">
            <img src={Banner} />
          </Box>
        </Container>
      </Box>
      {content.map((contents) => (
            <div className="aboutBG">
              <Box className="aboutContent">
                <Typography variant="h1">{contents.title}</Typography>
                <Typography variant="h6">{contents.description}</Typography>
              </Box>
              <Box className="getStarted">
                <Typography variant="h1">{contents.buttonText}</Typography>
                <Typography variant="h6">{contents.lastText}</Typography>
              </Box>
            </div>
          ))}
    </Layout>
  );
}
