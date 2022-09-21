import React from "react"
import { Link } from "gatsby"
import Logo from '../../images/logo.svg'
import Container from '@mui/material/Container';
import { slide as Menu } from 'react-burger-menu'
import '../../styles/Navbarstyle.css';
import { Typography, Box } from "@mui/material";


export default function navbar() {
  
return (
    <section className="navBack">
    <Container>
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact Us</Link>
          <div className="btns">
          <Link className="sign-up" to="https://app.invocom.io/signup">Sign up for free</Link>
          <Link className="sign-in" to="https://app.invocom.io/">Sign in</Link>
        </div>
        </div>
      <Box sx={{
        display:'none',
        '@media screen and (max-width:992px)':{
          display:'block',
        }
      }}>
        <Typography variant="subtitle1" sx={{
          display:'none',
          '@media screen and (max-width:992px)':{
            display:'block',
            margin: '15px 70px 0px -100px'
          }
        }}>Menu</Typography>
      <Menu className="menu">
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="https://app.invocom.io/">Sign In</Link>
      </Menu>
      </Box>
      </div>
    </nav>
    </Container>
    </section>
  )
}
