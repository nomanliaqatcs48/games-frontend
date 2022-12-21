import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import News from "../../Assets/images/News-Image.svg";
import ModalCancel from "../../Assets/images/CancelModal.svg";
// import { RxCross2 } from "react-icons/rx";
import "../Newsletter/index.scss";

export default function Modal() {
  const [open, setOpen] = React.useState(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  });

  // const handleClickOpen = () => {
  //   setTimeout(() => {
  //     setOpen(true);
  //   }, 1000);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box className="modalWrapper">
          {/* <RxCross2 className="cancelModal" onClick={handleClose} /> */}
          <img
            src={ModalCancel}
            className="cancelModal"
            onClick={handleClose}
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
            <img src={News} />
          </Box>
        </Box>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
