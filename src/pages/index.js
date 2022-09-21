import * as React from "react"
import Layout from "../components/base-structure/Layout"
// import Seo from "../components/seo"
import HeroSection from "../components/home/HeroSection"
import Communication from "../components/home/Communication"
import Demo from "../components/home/Demo"
import ChatbotSection from "../components/home/ChatbotSection"
import AbidCommunication from "../components/home/AbidCommunication"
import Revenue from "../components/home/Revenue"
import InituativeServices from "../components/home/InituativeServices"
import LeadGenerate from "../components/home/LeadGenerate"
import FractionCost from "../components/home/FractionCost"
import Consumer from "../components/home/Consumer"
import Blog from "../components/home/Blog"
import FAQ from "../components/home/FAQ"
import Customizable from "../components/home/Customizable"
import Logos from "../components/home/Logos"
import VideoModal from "../components/home/VideoModal"
import { Link, graphql } from 'gatsby';
import SEO from '../components/common/SEO';

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection/>
    <Communication/>
    <Demo/>
    <ChatbotSection/>
    <VideoModal/>
    <AbidCommunication/>
    <Revenue/>
    <ChatbotSection/> 
    <InituativeServices/>
    <LeadGenerate/>
    <FractionCost/>
    <Consumer/>
    {/* <Blog blogs={data?.allStrapiBlog?.nodes}/> */}
    <FAQ/>
    <Customizable/>
    <Logos/>
  </Layout>
)

export default IndexPage

// export const query = graphql`
// query MyQueryZaman {
// allStrapiBlog {
// nodes {
// Content
// Slug
// Title
// id
// Image {
// url
// }
// createdAt
// }
// }
// }
// `

