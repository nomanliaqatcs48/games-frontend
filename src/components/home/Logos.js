import React from 'react'
import { Container, Box} from '@mui/material'
import Logo from '../../images/sponsorLogos.svg';
import '../home/Logos.scss';

export default function Logos() {
  return (
    <section>
        <Container sx={{
            padding:'50px 0px',
        }}>
            <Box className='logo-img-wrapper'>
                <img className="imgLogo" src={Logo} alt=""/>
            </Box>
        </Container>
    </section>
  )
}
