import React from 'react'
import { Container, Box } from '@mui/material'
import CardStronger from '../CardStronger'
import Market from '../../Assets/images/market.svg'
import Finance from '../../Assets/images/finance.svg'
import Human from '../../Assets/images/human.svg'
import Software from '../../Assets/images/software.svg'
import Business from '../../Assets/images/business.svg'
import Compile from '../../Assets/images/compile.svg'
import UX from '../../Assets/images/ux.svg'


import '../CardStrongerFlex/index.scss';

const CardStrongerFlex = () => {
  return (
    <Container>
        <Box className='cardStrongerFlex-wrapper'>
        <CardStronger image={Market} title={"Marketing & sales"}/>
        <CardStronger image={Finance} title={"Finance & accounts"}/>
        <CardStronger image={Human} title={"Human resources"}/>
        <CardStronger image={Software} title={"Software development"}/>
        </Box>
        <Box className='cardStrongerFlex-wrapper'>
        <CardStronger image={Business} title={"Business development"}/>
        <CardStronger image={Compile} title={"Compliance"}/>
        <CardStronger image={UX} title={"UX/UI"}/>
        </Box>
    </Container>
  )
}

export default CardStrongerFlex