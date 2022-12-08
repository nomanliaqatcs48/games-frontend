import React from 'react'
import { Link } from 'gatsby'
import { Box, Container, Typography, Button } from '@mui/material'
import '../ThankYou/index.scss'

const index = () => {
  return (
    <Container>
        <Box className='thank-wrapper'>
            <Box className='thank-content'>
                <Typography variant='h1'>Thank You!</Typography>
                <Typography variant='h6'>We have received your message. We’ll reach you out shortly.</Typography>
            </Box>
            <Box className='thank-button'>
                <Link to="/">
                <Button>Go Back to the Home Page</Button>
                </Link>
            </Box>
        </Box>
    </Container>
  )
}

export default index