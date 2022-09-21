import React, {useState} from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import axios from "axios";
import "../home/Customizable.scss";
import DoneIcon from "@mui/icons-material/Done";


export default function Customizable() {
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
         
        } else {
         
        }
      })
      .catch((error) => {
       
        setErrors("Invalid Email");
      });
  };

  return (
    <section className="customizeBack">
      <Container>
        <Box className="customizable">
          <Typography variant="h1">
            Ready to sign up for an extremely
            <br />
            customizable experience?
          </Typography>
        </Box>
        <Box>
          <Box className="heroForm2">
            <form method="post">
              <Box
                className="formBox2">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your Email"
                />
                <Button className="form2-btn" onClick={onSubmit}>
                  Book a free demo
                </Button>
              </Box>
            </form>
          </Box>
          <Box className="submit-message">
            <Typography
              sx={{
                "& p": {
                  fontSize: "18px",
                  color:
                    errors === "Invalid Email"
                      ? "red"
                      : errors === "Successfully submitted"
                      ? "green"
                      : "",
                  fontWeight: "600",
                },
              }}
            >
              {errors && <p>{errors}</p>}
            </Typography>
          </Box>
          <Box className="points-wrapper">
            <Box className="point-content1">
              <DoneIcon sx={{ fill: "#FBF7EE" }} />
              <Typography variant="span">14-day free trial</Typography>
            </Box>
            <Box className="point-content1">
              <DoneIcon sx={{ fill: "#FBF7EE" }} />
              <Typography variant="span">Full features enabled</Typography>
            </Box>
            <Box className="point-content1">
              <DoneIcon sx={{ fill: "#FBF7EE" }} />
              <Typography variant="span">No credit card is required</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
