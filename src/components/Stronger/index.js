import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import StrongerRightImage from '../../Assets/images/card-right.svg'
import '../Stronger/index.scss';

const Stronger = () => {
  return (
    <>
    <div className='stronger-wrapper'>
        <Container>
            <Box className='stronger-head'>
                <Typography variant="h2">
                    Helping you build a stronger work ethic and strengthen client relationships
                </Typography>
            </Box>
        </Container>
        <img className='StrongerRightImage' src={StrongerRightImage} alt=""/>
    </div>
    </>
  )
}

export default Stronger