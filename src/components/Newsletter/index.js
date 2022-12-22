import React from "react";
import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import News from "../../Assets/images/News-Image.svg";
import ModalCancel from "../../Assets/images/CancelModal.svg";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import axios from "axios";

import "../Newsletter/index.scss";

const initialValues = {
  email: "",
};

export default function Modal() {
  const [show, isShow] = useState();

  typeof window !== "undefined" &&
    (window.onbeforeunload = () => {
      localStorage.removeItem("popup");
    });

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("popup")) isShow(true);
    }, 3000);
  }, []);
  const handleClose = () => {
    isShow(false);
    localStorage.setItem("popup", false);
  };

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
              isShow(false);
            }, 1000);
          } else {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <div>
      <Dialog open={show} onClose={handleClose}>
        <Box className="modalWrapper">
          <img
            src={ModalCancel}
            className="cancelModal"
            onClick={handleClose}
            alt="close"
          />
          <Box className="modalContent">
            <Typography variant="h4">
              Exceptional Teamwork Begins with an Online Workspace
            </Typography>
            <Typography variant="h6">
              Get access to insights, tactics and case studies that I don’t
              offer anywhere and are only available here.
            </Typography>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
              <Button onClick={handleSubmit}>Subscribe</Button>
            </form>
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
              <div>{status ? status.success : ""}</div>
            </Typography>
          </Box>
          <Box className="newsletter-Image">
            <img src={News} alt="newsletter" />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
