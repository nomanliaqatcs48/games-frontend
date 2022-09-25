import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import IconAndText from '../IconFeatures';
import Problem from '../../Assets/images/Problem.svg'
import Idea from '../../Assets/images/Idea.svg'
import Transparent from '../../Assets/images/Transparent.svg'
import Boost from '../../Assets/images/Boost.svg'
import Enhance from '../../Assets/images/Enhance.svg'
import Cost from '../../Assets/images/Cost.svg'
import Generate from '../../Assets/images/Generate.svg'

import '../Why/index.scss';


const Why = (props) => {
  return (
    <Container>
        <Box className='why-wrapper'>
            <Box className='why-image'>
                <img src={props.image} alt=""/>
            </Box>
            <Box className='why-cardFlex'>
                <Typography variant='h2'>{props.title}</Typography>
                <Box className='icon-text'>
                <IconAndText icon={Problem} iconText={"Problem solving"}/>
                <IconAndText icon={Idea} iconText={"Idea generation"}/>
                <IconAndText icon={Transparent} iconText={"Transparent communication"}/>
                <IconAndText icon={Boost} iconText={"Boost efficiency"}/>
                <IconAndText icon={Enhance} iconText={"Enhance team productivity"}/>
                <IconAndText icon={Cost} iconText={"Cost-efficient solution"}/>
                <IconAndText icon={Generate} iconText={"Generate inventive ideas"}/>
                </Box>
            </Box>
        </Box>
    </Container>
  )
}

export default Why