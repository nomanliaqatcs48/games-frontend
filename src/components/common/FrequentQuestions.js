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
            <div className="expandIconWrapper">{<CancelOutlinedIcon />}</div>
            <div className="collapsIconWrapper">{<KeyboardArrowDownOutlinedIcon />}</div>
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
                        <Typography variant="h2">Frequently Asked Questions</Typography>
                        <Typography variant="h6">We love to hear from your side</Typography>
                    </Box>
                    <Box className="faq-accordion">
                        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                            <AccordionSummary expandIcon={<CustomExpandIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                                <Typography variant="h2">How much does InvoChat cost?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">InvoChat is free to use. You can see further details about the features we offer for free from here.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                            <AccordionSummary expandIcon={<CustomExpandIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                                <Typography variant="h2">What features do I get with InvoChat?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">InvoChat is free to use. You can see further details about the features we offer for free from here.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                            <AccordionSummary expandIcon={<CustomExpandIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                                <Typography variant="h2">How to enable desktop notifications for InvoChat?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">InvoChat is free to use. You can see further details about the features we offer for free from here.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
                            <AccordionSummary expandIcon={<CustomExpandIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                                <Typography variant="h2">How to create workspaces in InvoChat?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">InvoChat is free to use. You can see further details about the features we offer for free from here.</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default FrequentQuestions;
