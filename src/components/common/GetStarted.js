import React from "react";
import { Container, Box, Typography } from "@mui/material";
import PriceBox from "../common/PriceBox";
import "../../styles/common/GetStarted.scss";
 
function GetStarted() {
 return (
   <div className="getstarted-back">
    <Container>
     <Box className="getstarted-Wrapper">
       <Box className="getstarted-heading">
         <Typography variant="h2">Ready to get started?</Typography>
         <Typography variant="h6">
           Choose a plan tailored to your needs
         </Typography>
       </Box>
       <Box className="priceBox-wrapper">
           <PriceBox title="Free" subtitle="Perfect to get started" price="0" buttonText="Get Started" listArray={<ul>
            <li>Perfect to get started</li>
            <li>Perfect to</li>
            <li>Perfect to get</li>
           </ul>}/>
           <PriceBox title="Pro" subtitle="Best for professional" price="40" buttonText="Coming Soon" listArray={<ul>
            <li>Coming Soon</li>
           </ul>}/>
           <PriceBox title="Ultimate" subtitle="Toolset for hard players" price="75" buttonText="Coming Soon" listArray={<ul>
            <li>Coming Soon</li>
           </ul>}/>
       </Box>
     </Box>
   </Container>
   </div>
 );
}
 
export default GetStarted;