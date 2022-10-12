import React from 'react';

// Library
import { Container, Typography, Box } from '@mui/material'

// Assets
import Email from '../../Assets/images/email.svg'
import Phone from '../../Assets/images/phone.svg'
import LeftBgIcon from '../../Assets/images/featureleft.svg'
import axios from "axios";
import { useState } from "react";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
// Styles
import * as styles from '../ContactDetail/styles.module.scss'

// Components

const ContactDetail = () => {

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
        .post(`https://st-backend-invochat.invo.zone/api/contact-uses`, {
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
        <>
            <div className={styles.contactDetail}>
                <img src={LeftBgIcon} alt="" className={styles.featureLeft} />
                <Container>
                    <Box className={styles.flexWrap}>
                        <div className={styles.detail}>
                            <Typography className={styles.headText}>
                                Thanks for your
                                <br /> interest in invochat
                            </Typography>
                            <Typography py={3} className={styles.descText}>
                                Catch up on important conversations and say hi
                                <br /> to productive collaboration - An all-in-one
                                <br /> solution. Be it tasks or demanding projects our
                                <br /> efficient communication platform is always at
                                <br /> your service.
                            </Typography>
                            <Typography className={styles.emailWrap}>
                                <img src={Email} alt="" className={styles.iconWrap} />
                                <span>Email:</span> product@invocom.io
                            </Typography>
                            <Typography className={styles.phoneWrap}>
                                <img src={Phone} alt="" className={styles.iconWrap} />
                                <span>Phone:</span> +1(754) 258-7812
                            </Typography>
                        </div>
                        <div className={styles.formBox}>
                            <div className={styles.form}>
                                <div className={styles.paddingWrap}>
                                    <Box className={styles.flexColumn}>
                                        <label className={styles.label}>Full Name</label>
                                        <input type="text" placeholder="Full Name" {...formik.getFieldProps("FullName")} className={styles.inputField} />
                                        {formik.touched.FullName && formik.errors.FullName && (
                                            <div className="fv-plugins-message-container">
                                                <div className="fv-help-block">
                                                    <span role="alert" className="from-error">
                                                        {formik.errors.FullName}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </Box>
                                    <Box className={styles.flexColumn}>
                                        <label className={styles.label}>Phone</label>
                                        <input type="Number" placeholder="Phone" {...formik.getFieldProps("PhoneNumber")} className={styles.inputField} />
                                        {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
                                            <div className="fv-plugins-message-container">
                                                <div className="fv-help-block">
                                                    <span role="alert" className="from-error">
                                                        {formik.errors.PhoneNumber}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </Box>
                                    <Box className={styles.flexColumn}>
                                        <label className={styles.label}>E-mail Address</label>
                                        <input type="email" placeholder="E-mail Address" {...formik.getFieldProps("Email")} className={styles.inputField} />
                                        {formik.touched.Email && formik.errors.Email && (
                                            <div className="fv-plugins-message-container">
                                                <div className="fv-help-block">
                                                    <span role="alert" className="from-error">
                                                        {formik.errors.Email}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </Box>
                                    <Box className={styles.flexColumn}>
                                        <label className={styles.label}>Message</label>
                                        <textarea rows="5" placeholder="Message" {...formik.getFieldProps("Message")} className={styles.inputField} />
                                    </Box>
                                    {formik.touched.Message && formik.errors.Message && (
                                        <div className="fv-plugins-message-container">
                                            <div className="fv-help-block">
                                                <span role="alert" className="from-error">
                                                    {formik.errors.Message}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                    <Box className={styles.flexColumn}>
                                        <button onClick={formik.handleSubmit} className={styles.msgBtn}>
                                            SEND MESSAGE
                                        </button>
                                    </Box>
                                    <Typography
                                        sx={{
                                            "& p": {
                                                fontSize: "16px",
                                                color: errors === "Not Submitted" ? "red" : errors === "Successfully submitted" ? "green" : "",
                                                fontWeight: "500",
                                            },
                                        }}
                                    >
                                        {errors && <p>{errors}</p>}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Container>
            </div>
        </>
    );
}

export default ContactDetail;