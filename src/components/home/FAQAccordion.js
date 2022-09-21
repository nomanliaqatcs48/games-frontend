import React from "react";
import { Typography, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "../../styles/global.css";
import { Link } from "gatsby";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../home/FAQ.scss";

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">-</div>
      <div className="collapsIconWrapper">+</div>
    </Box>
  );
};

export default function FAQAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        width: "780px",
        margin: "0 auto",
        "@media screen and (max-width:1100px)": {
          width: "700px",
        },
        "@media screen and (max-width:992px)": {
          width: "600px",
        },
        "@media screen and (max-width:768px)": {
          width: "500px",
        },
        "@media screen and (max-width:568px)": {
          width: "400px",
        },
        "@media screen and (max-width:428px)": {
          width: "300px",
        },
      }}
    >
      {/* Accordion 1 starts */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          marginBottom: "20px",
          boxShadow: "none",
          backgroundColor: "#DDDDDD",
        }}
      >
        <AccordionSummary
          sx={{
            padding:'10px 15px'
          }}
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "Poppins",
              lineHeight: "25px",
              fontWeight: "400",
              "@media screen and (max-width:992px)": {
                fontSize: "16px",
              },
              "@media screen and (max-width:768px)": {
                fontSize: "14px",
              },
              "@media screen and (max-width:568px)": {
                fontSize: "12px",
              },
              "@media screen and (max-width:428px)": {
                fontSize: "8px",
              },
            }}
          >
            Q1. How to integrate the InvoCom chatbot into your website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "Poppins",
              lineHeight: "25px",
              fontWeight: "400",
              "@media screen and (max-width:992px)": {
                fontSize: "16px",
              },
              "@media screen and (max-width:768px)": {
                fontSize: "14px",
              },
              "@media screen and (max-width:568px)": {
                fontSize: "12px",
              },
              "@media screen and (max-width:428px)": {
                fontSize: "8px",
              },
            }}
          >
            You can seamlessly integrate a chatbot in less than 30 seconds. All you have to do is copy-paste the snippet code and deploy them to your website. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Accordion 1 Ends */}

      {/* Accordion 2 Starts */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          marginBottom: "20px",
          boxShadow: "none",
          backgroundColor: "#DDDDDD",
        }}
      >
        <AccordionSummary
          sx={{
            padding:'10px 15px'
          }}
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "Poppins",
              lineHeight: "25px",
              fontWeight: "400",
              "@media screen and (max-width:992px)": {
                fontSize: "16px",
              },
              "@media screen and (max-width:768px)": {
                fontSize: "14px",
              },
              "@media screen and (max-width:568px)": {
                fontSize: "12px",
              },
              "@media screen and (max-width:428px)": {
                fontSize: "8px",
              },
            }}
          >
            Q2. How much does InvoCom cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "Poppins",
              lineHeight: "25px",
              fontWeight: "400",
              "@media screen and (max-width:992px)": {
                fontSize: "16px",
              },
              "@media screen and (max-width:768px)": {
                fontSize: "14px",
              },
              "@media screen and (max-width:568px)": {
                fontSize: "12px",
              },
              "@media screen and (max-width:428px)": {
                fontSize: "8px",
              },
            }}
          >
            InvoCom is free to use. You can see further details about the features that we are offering for free from here. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Accordion 2 Ends */}

      {/* Accordion 3 Starts */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          marginBottom: "20px",
          boxShadow: "none",
          backgroundColor: "#DDDDDD",
        }}
      >
        <AccordionSummary
          sx={{
            padding:'10px 15px'
          }}
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "Poppins",
              lineHeight: "25px",
              fontWeight: "400",
              "@media screen and (max-width:992px)": {
                fontSize: "16px",
              },
              "@media screen and (max-width:768px)": {
                fontSize: "14px",
              },
              "@media screen and (max-width:568px)": {
                fontSize: "12px",
              },
              "@media screen and (max-width:428px)": {
                fontSize: "8px",
              },
            }}
          >
            Q3. What features do I get with InvoCom?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "Poppins",
              lineHeight: "25px",
              fontWeight: "400",
              "@media screen and (max-width:992px)": {
                fontSize: "16px",
              },
              "@media screen and (max-width:768px)": {
                fontSize: "14px",
              },
              "@media screen and (max-width:568px)": {
                fontSize: "12px",
              },
              "@media screen and (max-width:428px)": {
                fontSize: "8px",
              },
            }}
          >
            You get the following features with InvoCom: Custom Bot, Robust Analytics, Ticketing system, CSV Export, Email Support, Knowledge base, Live Chat, Calendar Integration, Meeting scheduler, Admins, Tag & assign chat, Push notifications, Single team inbox, Conversations dashboard, Smart assign, Note-taking. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Accordion 3 Ends */}

      {/* Accordion 4 Starts */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          marginBottom: "20px",
          boxShadow: "none",
          backgroundColor: "#DDDDDD",
        }}
      >
        <AccordionSummary
          sx={{
            padding:'10px 15px'
          }}
          expandIcon={<CustomExpandIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "Poppins",
              lineHeight: "25px",
              fontWeight: "400",
              "@media screen and (max-width:992px)": {
                fontSize: "16px",
              },
              "@media screen and (max-width:768px)": {
                fontSize: "14px",
              },
              "@media screen and (max-width:568px)": {
                fontSize: "12px",
              },
              "@media screen and (max-width:428px)": {
                fontSize: "8px",
              },
            }}
          >
            Q4. How to enable desktop notifications for InvoCom?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              fontSize: "18px",
              fontFamily: "Poppins",
              lineHeight: "25px",
              fontWeight: "400",
              "@media screen and (max-width:992px)": {
                fontSize: "16px",
              },
              "@media screen and (max-width:768px)": {
                fontSize: "14px",
              },
              "@media screen and (max-width:568px)": {
                fontSize: "12px",
              },
              "@media screen and (max-width:428px)": {
                fontSize: "8px",
              },
            }}
          >
            Sign in to your account, from the left-hand panel, choose the ‘settings’ option and select ‘notifications’ to change settings accordingly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Accordion 4 Ends */}
      <Box className="viewMore">
          <Link to="/faq">
            <Typography variant="h6">View more</Typography>
          </Link>
            <ArrowForwardIcon sx={{ fill: "#6C6C6C", fontSize: "22px", marginLeft: '10px' }} />
        </Box>
    </Box>
  );
}
