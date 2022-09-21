import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Box, Typography } from "@mui/material";
import * as styles from "../../styles/home.module.css";
import axios from 'axios';
import  { useState } from "react"

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#611F69",
  fontFamily: "Poppins",
  fontSize: "25px",
  fontWeight: "600",
  lineHeight: "48px",
  borderRadius: "40px",
  width:'100%',
  color: "white",
  padding: "10px 16px 11px 15px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#611F69",
  },
  "@media screen and (max-width:568px)": {
    padding: "0px",
    fontSize: "22px",
  },
  "@media screen and (max-width:428px)": {
    fontSize: "20px",
  },
}));

export default function DemoForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
     axios.post(`https://st-backend-invochat.invo.zone/api/messages`,
     {
      data: { Email: email }
     }
     )
     .then((res) => {
      setErrors('Successfully submitted')
      
      if(res.status === 200){
    
      }
      else{
      }
    })
    .catch((error) => {
      
      setErrors('Invalid Email')
    })
     
   }

  return (
    <div className={styles.demoForm}>
      <div className={styles.heroForm}>
        <form  method="post">
          <Box
            sx={{
              display: "flex",
              justifyContent:'space-between',
              "@media screen and (max-width:768px)": {
                flexDirection: "column",
                rowGap: "10px",
              },
            }}>
            <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your Email" />
            <MyButton
             onClick={onSubmit}
            >Book a free demo</MyButton>
          </Box>
        </form>
      </div>
          <Box sx={{
            maxWidth:'700px',
            margin: "0 auto",
            "@media screen and (max-width:1100px)":{
              maxWidth:'650px'
            },
            "@media screen and (max-width:992px)":{
              maxWidth:'600px'
            },
            "@media screen and (max-width:768px)":{
              maxWidth:'100%',
              textAlign:'center'
            },
          }}>
          <Typography sx={{
            "& p":{
            fontSize:'18px',
            color: errors === 'Invalid Email' ? "red" : errors === 'Successfully submitted' ?  "green" : '' ,
            fontWeight:'600',}}}>
              { errors && <p>{errors}</p>}</Typography>
          </Box>
    </div>
  );
}
