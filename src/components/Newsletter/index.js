import React from "react";
import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import News from "../../Assets/images/News-Image.svg";
import ModalCancel from "../../Assets/images/CancelModal.svg";
// import { RxCross2 } from "react-icons/rx";
import "../Newsletter/index.scss";

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
            <form>
              <input type="email" placeholder="Email address" />
              <Button>Subscribe</Button>
            </form>
          </Box>
          <Box>
            <img src={News} alt="newsletter" />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
