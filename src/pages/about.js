import React from "react";
import Layout from "../baseStructure/Layout";
import CardStrongerFlex from "../components/CardStrongerFlex";
import ClientQuote from "../components/ClientQuote";
import FreeTrialAbout from "../components/FreeTrialAbout";
import GlobalAndCard from "../components/GlobalAndCard";
import StreamLine from "../components/StreamLine";
import Stronger from "../components/Stronger";
import WhoAndWhy from "../components/WhoAndWhy";


const About = () => {
  return (
    <Layout>
      <WhoAndWhy />
      <GlobalAndCard/>
      <StreamLine/>
      <Stronger/>
      <CardStrongerFlex/>
      <ClientQuote/>
      <FreeTrialAbout/>
    </Layout>
  );
};

export default About;
