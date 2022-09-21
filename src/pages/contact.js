import { Container, Box, Typography, Grid, Button } from "@mui/material";
import React from "react";
import Layout from "../components/base-structure/Layout";
import Banner from "../images/contactBanner.svg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import axios from "axios";
import { useState } from "react";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import "../styles/Contact.scss" ;

export default function Contact() {

  const [errors, setErrors] = useState("");
  const [fullName,setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const initialValues = {
    FullName: '',
    Email: '',
    PhoneNumber: '',
    Message: ''
  }

  const registrationSchema = Yup.object().shape({
    FullName: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('First name is required'),
    Email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
    PhoneNumber: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(11, 'Maximum 11 numbers')
      .required('Phone number is required'),
    Message: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Message is required'),
  })

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, { setSubmitting }) => {
      axios
        .post(`https://st-backend-invocom.invo.zone/api/contact-uses`, {
          data: values
        })
        .then((res) => {
          setErrors("Successfully submitted");
         
          if (res.status === 200) {
            
            return <p>successful</p>;
          } else {
          
          }
        })
        .catch((error) => {
          setSubmitting = false;
          setErrors("Not Submitted");
        });
    },
  })

  return (
    <Layout>
      <Box className="contactPage">
        <Container>
          <Box className="contactBanner">
            <img src={Banner} />
          </Box>
          {/* Contact Form */}
        </Container>
      </Box>
      <div className="contactBG">
      <Box className="contactHead">
        <Typography variant="h1">Contact Us</Typography>
        <Box>
          <Box className="emailInfo">
            <EmailIcon sx={{ fill: "#611F69", fontSize: "22px" }} />
            <Typography variant="span">Email: product@invocom.io</Typography>
          </Box>
          <Box className="phoneInfo">
            <PhoneInTalkIcon sx={{ fill: "#611F69", fontSize: "22px" }} />
            <Typography variant="span">Phone: +1(754) 258-7812</Typography>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <form>
                <Box className="contactForm">
                  <input 
                  type="text"
                  placeholder="Your Full Name"
                  {...formik.getFieldProps('FullName')}
                  // value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                  />
                  {formik.touched.FullName && formik.errors.FullName && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                           <span role='alert' className='from-error'>{formik.errors.FullName}</span>
                        </div>
                    </div>
                  )}
                  <input 
                  type="number"
                  placeholder="Phone"
                  {...formik.getFieldProps('PhoneNumber')}
                  // value={phoneNumber}
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                    {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                           <span role='alert' className='from-error'>{formik.errors.PhoneNumber}</span>
                        </div>
                    </div>
                  )}
                  <input 
                    type="email"
                    placeholder="E-mail Address"
                    {...formik.getFieldProps('Email')}
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                    />
                    {formik.touched.Email && formik.errors.Email && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                           <span role='alert' className='from-error'>{formik.errors.Email}</span>
                        </div>
                    </div>
                  )}
                  <textarea
                   type="text"
                   placeholder="Message" rows="4"
                   {...formik.getFieldProps('Message')}
                  //  onChange={(e) => setMessage(e.target.value)}
                  //  value={message}
                    />
                     {formik.touched.Message && formik.errors.Message && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                           <span role='alert' className='from-error'>{formik.errors.Message}</span>
                        </div>
                    </div>
                  )}
                  <Button onClick={formik.handleSubmit} className="contactBtn">SEND MESSAGE</Button>
                  <Box>
                    <Typography sx={{
                         "& p":{
                          fontSize:'16px',
                          color: errors === 'Not Submitted' ? "red" : errors === 'Successfully submitted' ?  "green" : '' ,
                          fontWeight:'500',}}}>{errors && <p>{errors}</p>}</Typography>
                          </Box>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </div>
    </Layout>
  );
}
