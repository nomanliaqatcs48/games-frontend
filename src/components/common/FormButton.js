import React from "react";
import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#611F69",
  fontFamily: "Poppins",
  fontSize: "25px",
  fontWeight: "600",
  lineHeight: "48px",
  borderRadius: "40px",
  color: "white",
  width: "100%",
  padding: "7px",
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

export default function FormButton({children}) {
  return (
    <MyButton>{children}</MyButton>
  )
}
