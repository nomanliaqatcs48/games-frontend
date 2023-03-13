import React from "react";
import { Link } from "gatsby";
import ReCAPTCHA from "react-google-recaptcha";

// Library
import { Container, Typography, Button, Box } from "@mui/material";

// Assets
import Email from "../../Assets/images/email.svg";
import Phone from "../../Assets/images/phone.svg";
import LeftBgIcon from "../../Assets/images/featureleft.svg";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// Styles
import * as styles from "../ContactDetail/styles.module.scss";

// Components

const ContactDetail = () => {
  const [captcha, isCaptcha] = useState(false);
  const captchaRef = useRef();

  const onChangeReCaptcha = (value) => {
    isCaptcha({ ...captcha, code: value, validation: true });
  };

  const initialValues = {
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
    acceptedTos: false,
  };

  const registrationSchema = Yup.object().shape({
    FullName: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("First name is required"),
    Email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email is required"),
    PhoneNumber: Yup.number().required("Phone number is required"),
    Message: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Message is required"),
    acceptedTos: Yup.boolean().oneOf(
      [true],
      "Please accept the terms of services"
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, action) => {
      axios
        .post(`https://st-backend-invochat.invo.zone/api/contact-uses`, {
          FullName: values?.FullName,
          Email: values?.Email,
          PhoneNumber: values?.PhoneNumber,
          Message: values?.Message,
          recaptchaToken: captcha?.code,
        })
        .then((res) => {
          if (res.status === 200) {
            action.setStatus({ success: "Email sent !" });
            setTimeout(() => {
              action.resetForm();
            }, 1000);
            window.location.href = "/thank-you";
          } else {
          }
        })
        .catch((error) => {
          action.setStatus({ fail: "Email not sent !" });
        });
    },
  });

  return (
    <>
      <div className={styles.contactDetail}>
        <img
          loading="lazy"
          src={LeftBgIcon}
          alt=""
          className={styles.featureLeft}
        />
        <Container>
          <Box className={styles.flexWrap}>
            <div className={styles.detail}>
              <Typography variant="h1">
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
                <img
                  loading="lazy"
                  src={Email}
                  alt=""
                  className={styles.iconWrap}
                />
                <span>Email:</span> info@invochat.io
              </Typography>
              <Typography className={styles.phoneWrap}>
                <img
                  loading="lazy"
                  src={Phone}
                  alt=""
                  className={styles.iconWrap}
                />
                <span>Phone:</span> +6011 2844 3855
              </Typography>
            </div>
            <div className={styles.formBox}>
              <div className={styles.form}>
                <div className={styles.paddingWrap}>
                  <Box className={styles.flexColumn}>
                    <label htmlFor="fname" className={styles.label}>
                      Full Name
                    </label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      placeholder="Full Name"
                      {...formik.getFieldProps("FullName")}
                      className={styles.inputField}
                    />
                    {formik.touched.FullName && formik.errors.FullName && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert" className={styles.formError}>
                            {formik.errors.FullName}
                          </span>
                        </div>
                      </div>
                    )}
                  </Box>
                  <Box className={styles.flexColumn}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone
                    </label>
                    <Box className={styles.inputField}>
                      <PhoneInput
                        className="anonymous"
                        placeholder="Phone Number"
                        name="PhoneNumber"
                        value={formik.values.PhoneNumber}
                        onChange={(e) => formik.setFieldValue("PhoneNumber", e)}
                        onBlur={formik.handleBlur("PhoneNumber")}
                      />
                    </Box>
                    {formik.touched.PhoneNumber &&
                      formik.errors.PhoneNumber && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert" className={styles.formError}>
                              {formik.errors.PhoneNumber}
                            </span>
                          </div>
                        </div>
                      )}
                  </Box>
                  <Box className={styles.flexColumn}>
                    <label htmlFor="email" className={styles.label}>
                      E-mail Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="E-mail Address"
                      {...formik.getFieldProps("Email")}
                      className={styles.inputField}
                    />
                    {formik.touched.Email && formik.errors.Email && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert" className={styles.formError}>
                            {formik.errors.Email}
                          </span>
                        </div>
                      </div>
                    )}
                  </Box>
                  <Box className={styles.flexColumn}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      {...formik.getFieldProps("Message")}
                      className={styles.inputField}
                    />
                  </Box>
                  {formik.touched.Message && formik.errors.Message && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert" className={styles.formError}>
                          {formik.errors.Message}
                        </span>
                      </div>
                    </div>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      columnGap: "15px",
                    }}
                  >
                    <input
                      type="checkbox"
                      {...formik.getFieldProps("acceptedTos")}
                    />
                    <Typography
                      sx={{
                        margin: "0px",
                        color: "#303030",
                        fontFamily: "Raleway",
                        fontSize: "15px",
                      }}
                    >
                      I understand and agree to the{" "}
                      <Link to="/terms-and-conditions">
                        <Typography
                          variant="span"
                          sx={{
                            fontFamily: "Raleway",
                            fontWeight: "500",
                            color: "#303030",
                            transition: "0.2s ease-in all",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          terms & conditions.
                        </Typography>
                      </Link>
                    </Typography>
                  </Box>
                  {formik.touched.acceptedTos && formik.errors.acceptedTos && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert" className={styles.formError}>
                          {formik.errors.acceptedTos}
                        </span>
                      </div>
                    </div>
                  )}
                  <Box>
                    <ReCAPTCHA
                      sitekey="6LfHxnckAAAAAGw31H0pNcJlECKWzkQB591Bhl9G"
                      onChange={onChangeReCaptcha}
                      onExpired={() => isCaptcha(false)}
                      ref={captchaRef}
                    />
                  </Box>
                  <Box className={styles.flexColumn}>
                    <Button
                      onClick={formik.handleSubmit}
                      className={styles.msgBtn}
                      disabled={formik.isSubmitting || !captcha.code}
                    >
                      SEND MESSAGE
                    </Button>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "green",
                      ":first-letter": {
                        textTransform: "capitalize",
                      },
                      fontWeight: "600",
                    }}
                  >
                    {/* {errors.email && touched.email ? errors.email : null} */}
                    <div>{formik.status ? formik.status.success : ""}</div>
                  </Typography>
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default ContactDetail;
