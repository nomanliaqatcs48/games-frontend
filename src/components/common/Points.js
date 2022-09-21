import { Box, Typography } from '@mui/material'
import React from 'react'
// import Tick from "../../images/tick.svg"
import DoneIcon from '@mui/icons-material/Done';
import '../common/Points.css';

export default function Points() {
  return (
        <Box className='points-wrapper'>
            <Box className='point-content'>
                {/* <img src={Tick} alt=""/> */}
                <DoneIcon/>
                <Typography variant='span'>14-day free trial</Typography>
            </Box>
            <Box className='point-content'>
                {/* <img src={Tick} alt=""/> */}
                <DoneIcon/>
                <Typography variant='span'>Full features enabled</Typography>
            </Box>
            <Box className='point-content'>
                {/* <img src={Tick} alt=""/> */}
                <DoneIcon/>
                <Typography variant='span'>No credit card is required</Typography>
            </Box>
        </Box>
  )
}
