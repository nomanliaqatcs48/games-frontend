import * as React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import footerLogo from "../../Assets/images/footer_logo.svg";
import Twitter from "../../Assets/images/twitter.svg";
import Linkdin from "../../Assets/images/linkdin.svg";
import PoweredBy from "../../Assets/images/powererd.svg";
import Facebook from "../../Assets/images/fb.svg";
import "../../styles/common/Footer.scss";
import axios from "axios";
// import { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  email: "",
};

const Footer = () => {
  // const [message, setMessage] = useState("");

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    status,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      axios
        .post(`https://st-backend-invochat.invo.zone/api/messages`, {
          Email: values?.email,
        })
        .then((res) => {
          if (res.status === 200) {
            action.setStatus({ success: "Email sent !" });
            setTimeout(() => {
              action.resetForm();
            }, 1000);
          } else {
          }
        })
        .catch((error) => {});
      action.setStatus({ success: "Email not sent !" });
    },
  });
  // console.log("Errors => ", errors);
  // const [email, setEmail] = useState("");
  // const [errors, setErrors] = useState("");

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // let formData = new FormData();
  //   // formData.append("Email", email);
  // axios
  //   .post(`https://st-backend-invochat.invo.zone/api/messages`, {
  //     Email: email,
  //   })
  //   .then((res) => {
  //     setErrors("Successfully submitted");
  //     setEmail("");
  //     if (res.status === 200) {
  //     } else {
  //     }
  //   })
  //   .catch((error) => {
  //     setErrors("Invalid Email");
  //   });
  // };

  return (
    <Box className="footer" sx={{ pt: 7.5, pb: { xs: 3, md: 3.5 } }}>
      <Container>
        <Grid
          className="footer_content"
          sx={{
            display: "flex",
            justifyContent: { sx: "center", md: "space-between" },
            py: 3,
          }}
          container
        >
          <Grid item xs={12} md={2}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Link to="/">
                  <img
                    loading="lazy"
                    src={footerLogo}
                    className="footer_logo"
                    alt="Logo_image_for_footer"
                  />
                </Link>
              </Box>
              <Box sx={{ pt: { xs: 4, md: 5.2 }, pl: 1 }}>
                <Link to="/about-us/">
                  <Typography
                    sx={{ textAlign: { xs: "center", md: "left" } }}
                    variant="h5"
                  >
                    About Us
                  </Typography>
                </Link>
                <Link to="/features/">
                  <Typography
                    sx={{
                      pt: { xs: 2.5, md: 2 },
                      textAlign: { xs: "center", md: "left" },
                    }}
                    variant="h5"
                  >
                    Features
                  </Typography>
                </Link>
                <Link to="/pricing/">
                  <Typography
                    sx={{
                      pt: { xs: 2.5, md: 2 },
                      textAlign: { xs: "center", md: "left" },
                    }}
                    variant="h5"
                  >
                    Pricing
                  </Typography>
                </Link>
                <Link to="/blog/">
                  <Typography
                    sx={{
                      pt: { xs: 2.5, md: 2 },
                      textAlign: { xs: "center", md: "left" },
                    }}
                    variant="h5"
                  >
                    Blog
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: { xs: 1, md: 6.7 },
            }}
          >
            <Box sx={{ pt: { xs: 3, md: 3.5 } }}>
              <Link to="/contact-us/">
                <Typography
                  sx={{
                    pt: { xs: 2.5, md: 2 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                  variant="h5"
                >
                  Contact Us
                </Typography>
              </Link>
              <Link to="/terms-and-conditions/">
                <Typography
                  sx={{
                    pt: { xs: 2.5, md: 2 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                  variant="h5"
                >
                  Terms & Conditions
                </Typography>
              </Link>
              <Link to="/privacy-policy/">
                <Typography
                  sx={{
                    pt: { xs: 2.5, md: 2 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                  variant="h5"
                >
                  Privacy Policy
                </Typography>
              </Link>
              <Link to="/disclaimer/">
                <Typography
                  sx={{
                    pt: { xs: 2.5, md: 2 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                  variant="h5"
                >
                  Disclaimer
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={4}
            className="footer_btn"
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
            }}
          >
            <Box sx={{ pt: { xs: 3, md: 11.5 } }}>
              <Typography
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  my: { xs: 3, md: 0 },
                }}
                variant="h4"
              >
                Newsletter subscription
              </Typography>
              <Box sx={{ my: 2 }} className="footer_Form">
                <form onSubmit={handleSubmit}>
                  <input
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <span>
                    <Button
                      onClick={handleSubmit}
                      type="submit"
                      className="footer_sub"
                    >
                      Subscribe
                    </Button>
                  </span>
                </form>
              </Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "red",
                  ":first-letter": {
                    textTransform: "capitalize",
                  },
                  fontWeight: "600",
                }}
              >
                {errors.email && touched.email ? errors.email : null}
              </Typography>
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
                <div>{status ? status.success : ""}</div>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: { xs: 3.5, md: 2.5 },
                }}
              >
                <Box>
                  <Link to="https://twitter.com/Invochatnow" target="_blank">
                    <img
                      loading="lazy"
                      src={Twitter}
                      className="footer_logo"
                      alt="social_media_icons"
                    />
                  </Link>
                </Box>
                <Box sx={{ px: 2 }}>
                  <Link
                    to="https://www.linkedin.com/company/invochatnow"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src={Linkdin}
                      className="footer_logo"
                      alt="social_media_icons"
                    />
                  </Link>
                </Box>
                <Box>
                  <Link
                    to="https://www.facebook.com/invochatnow"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src={Facebook}
                      className="footer_logo"
                      alt="social_media_icons"
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className="footer_border" sx={{ mt: 3 }}>
        <Container>
          <Grid container>
            <Grid
              xs={12}
              item
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                justifyContent: { xs: "center", md: "space-between" },
              }}
            >
              <Typography
                sx={{ pt: 3, textAlign: { xs: "center", md: "left" } }}
                className="poppins"
                variant="h4"
              >
                All Rights Reserved.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: { xs: "center" } }}>
                <Link
                  to="https://invozone.com/"
                  className="powered"
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <img loading="lazy" src={PoweredBy} alt="powered-by" />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
