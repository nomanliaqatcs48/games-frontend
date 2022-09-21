import React from 'react';
import {Container, Box, Typography} from '@mui/material';
import RevenueBoxes from './RevenueBoxes';
import '../home/Revenue.scss';

export default function Revenue() {
  return (
    <section className="revenueBack">
        <Container>
            <Box className='revenue-heading'>
                <Typography variant='h2'>
                    Time to Level up Your Response<br/>Rates and Revenues
                </Typography>
            </Box>
            <RevenueBoxes/>
        </Container>
    </section>
  )
}
