import React from "react";
import { Container, Box, Typography } from "@mui/material";
import PriceBox from "../common/PriceBox";
import "../../styles/common/GetStarted.scss";
 
const listArray = [
   {itemOne: "Monthly Active Users"},
   {itemTwo: "Custom Bot"},
   {itemThree: "Robust Analytics"},
   {itemFour: "Ticketing system"},
 ];
 
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
           <PriceBox title="Free" subtitle="Perfect to get started" price="0" buttonText="Get Started" listArray={listArray}/>
           <PriceBox title="Pro" subtitle="Best for professional" price="40" buttonText="Coming Soon"/>
           <PriceBox title="Ultimate" subtitle="Toolset for hard players" price="75" buttonText="Coming Soon"/>
       </Box>
     </Box>
   </Container>
   </div>
 );
}
 
export default GetStarted;