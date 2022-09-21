import React from "react";
import "../../styles/global.css";
import Footerlogo from "../../images/footerLogo.svg";
import { Link } from "gatsby";
import { Box, Container, Typography } from "@mui/material";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkden from "../../images/linkden.svg";
import O from '../../images/O.svg';
import Invozone from '../../images/Invozone.svg';
import FooterForm from "./FooterForm";
import '../base-structure/Footer.scss'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Box className="footer-logo">
          <img src={Footerlogo} alt=""/>
        </Box>
        <Box className="footer-lists">
          <Box className="list-content">
            <Link to="/about">
              <Typography variant="h4">
                About
              </Typography>
            </Link>
            <Link to="/features">
              <Typography variant="h4">
                Features
              </Typography>
            </Link>
            <Link to="/pricing">
              <Typography variant="h4">
                Pricing
              </Typography>
            </Link>
            {/* <Link to="/blog">
              <Typography variant="h4">
                Blog
              </Typography>
            </Link> */}
          </Box>
          <Box className="list-content">
            <Link to="/terms">
              <Typography variant="h4">
                Terms of use
              </Typography>
            </Link>
            <Link to="/policy">
              <Typography variant="h4">
              Privacy policy
              </Typography>
            </Link>
          </Box>
          <Box className="newsletter-wrapper">
            <Typography variant="h4">
              Newsletter subscription
            </Typography>
            <FooterForm />
            <Box className="social-links">
              <Link to="https://twitter.com/invocomofficial"><img src={twitter} alt=""/></Link>
              <Link to="https://www.linkedin.com/company/invocomofficial/"><img src={linkden} alt=""/></Link>
              <Link to="https://facebook.com/invocomofficial/"><img src={facebook} alt=""/></Link>
            </Box>
          </Box>
        </Box>
        <Box className="copyright-wrapper">
          <Box className="copyright-content">
          <Typography variant="h6">
            © {new Date().getFullYear()}. All Rights Reserved by InvoZone
          </Typography>
          </Box>
          <Box className="powered-content">
          <Typography variant="h6">
            P<span><img src={O} alt=""/></span>wered by 
          </Typography>
          <div className="invoZone-logo"><a target="_blank" rel="noreferrer" href="https://invozone.com/">
            <img src={Invozone} alt=""/></a></div>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
