import React from 'react'
import { Box, Typography } from '@mui/material'
import '../CardStronger/index.scss'


const CardStronger = (props) => {
  return (
    <Box className='cardStronger-wrapper'>
        <img src={props.image} alt=""/>
        <Typography variant='h6'>{props.title}</Typography>
    </Box>
  )
}

export default CardStronger