import React from 'react'
import { Link } from 'gatsby';
import { Container, Typography, Box, Button } from "@mui/material";
import Ops from '../../Assets/images/Oops.svg'
import './index.scss'

const index = () => {
  return (
    <Container>
        <Box className='error-wrapper'>
            <Box className='error-image'>
            <img src={Ops} alt="error-you"/>
            </Box>
            <Box className='error-content'>
                <Typography variant='h2'>The page you are looking for does not seem to exist.</Typography>
                <Typography variant='h6'>But don’t worry, it can happen to the best of us.<br/>
                Looking for anything specific?</Typography>
            </Box>
            <Box className='error-button'>
                <Link to="/">
                <Button>Go Back to the Home Page</Button>
                </Link>
            </Box>
        </Box>
    </Container>
  )
}

export default index