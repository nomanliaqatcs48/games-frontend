import React from "react";
import { Button, Box, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import '../base-structure/Footer.scss';


export default function FooterForm() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://st-backend-invocom.invo.zone/api/messages`, {
        data: { Email: email },
      })
      .then((res) => {
        setErrors("Successfully submitted");
        
        if (res.status === 200) {
          
          return <p>successful</p>;
        } else {
         
        }
      })
      .catch((error) => {
        
        setErrors("Invalid Email");
      });
  };

  return (
    <>
      <div>
        <form>
          <Box className="footerForm">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your Email"
            />
            <Button className="footerForm-btn" onClick={onSubmit}>Subscribe</Button>
          </Box>
        </form>
      </div>
      <Box>
        <Typography sx={{
            "& p":{
            fontSize:'16px',
            color: errors === 'Invalid Email' ? "red" : errors === 'Successfully submitted' ?  "green" : '' ,
            fontWeight:'500',}}}>{errors && <p>{errors}</p>}</Typography>
      </Box>
    </>
  );
}
