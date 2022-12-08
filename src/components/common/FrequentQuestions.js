import * as React from "react";
import { Container, Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import backImage from "../../Assets/images/FAQ-Left.svg";
import "../../styles/common/FrequentQuestions.scss";
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
<div className="expandIconWrapper">
   {
   <CancelOutlinedIcon />
   }
</div>
<div className="collapsIconWrapper">
   {
   <KeyboardArrowDownOutlinedIcon />
   }
</div>
</Box>
);
};
function FrequentQuestions() {
const [expanded, setExpanded] = React.useState(false);
const handleChange = (panel) => (event, isExpanded) => {
setExpanded(isExpanded ? panel : false);
};
return (
<div className="faq-back">
   <img loading="lazy" src={backImage} alt="" className="left-image" />
   <Container>
      <Box className="faq-wrapper">
         <Box className="faq-head">
            <Typography variant="h3">Frequently Asked Questions</Typography>
            <Typography variant="h6">We love to hear from your side</Typography>
         </Box>
         <Box className="faq-accordion">
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
            <AccordionSummary expandIcon={
            <CustomExpandIcon />
            } aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography variant="h2">How much does InvoChat cost?</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography variant="h6">
                  InvoChat is free to use. You can see further details about the features we offer for free from here.
               </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
            <AccordionSummary expandIcon={
            <CustomExpandIcon />
            } aria-controls="panel2bh-content" id="panel2bh-header">
            <Typography variant="h2">What features do I get with InvoChat?</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography variant="h6">
                  1. What features do I get with InvoChat?
                  2. Read receipts 
                  3. Screen pin lock 
                  4. Google Drive and Meet integration
                  5. Notification management 
                  6. Dedicated workspaces
                  7. Topic-specific chatroom
                  8. Unlimited team members
                  9. File sharing & attachments
               </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
            <AccordionSummary expandIcon={
            <CustomExpandIcon />
            } aria-controls="panel3bh-content" id="panel3bh-header">
            <Typography variant="h2">How to enable desktop notifications for InvoChat?</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography variant="h6">Go to your ‘notification’ settings. From there you can easily enable or disable notifications for your desktop. You can also turn on email notifications for unread msgs.  Easily manage room-specific notifications. You can change settings accordingly if you want to be notified about everything or nothing or just specific mentions. </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
            <AccordionSummary expandIcon={
            <CustomExpandIcon />
            } aria-controls="panel4bh-content" id="panel4bh-header">
            <Typography variant="h2">How to create workspaces in InvoChat?</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <Typography variant="h6">Visit the website invochat.io, and click on this ‘create workspace’ button, given on the top right corner of your screen. Enter your email address. You will receive a six-digit confirmation code in your email for confirmation. Set up your details such as first name, last name, and username, and set your password and pin for further security. Give your workspace a name and hand-pick a URL. You can get started by bringing in your team members to your workspace. </Typography>
            </AccordionDetails>
            </Accordion>
         </Box>
      </Box>
   </Container>
</div>
);
}
export default FrequentQuestions;