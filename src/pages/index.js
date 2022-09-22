import * as React from "react"
import Layout from "../baseStructure/Layout"
import Seo from "../components/seo"
import LandingPage from "./LandingPage"
import '../../src/styles/common/globalStyles.module.scss'
import { ThemeProvider, createTheme } from "@mui/material/styles";

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Raleway",
    },
    body1: {
      fontFamily: "Raleway",
    },
  },
});
const IndexPage = ({data}) => (
  <ThemeProvider theme={theme}>
    <Layout>
        <Seo title="Home" />
        <LandingPage/>
      </Layout>
  </ThemeProvider>
 
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

