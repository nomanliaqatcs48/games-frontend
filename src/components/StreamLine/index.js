import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import '../StreamLine/index.scss';

const StreamLine = () => {
  return (
    <Box className='streamLine-wrapper'>
        <Box className='streamLine-content'>
        <Typography variant='h2'>We are making it easier for global<br/>businesses to streamline their communication</Typography>
        <Button className='streamLine-btn'>See pricing</Button>
        </Box>
    </Box>
  )
}

export default StreamLine