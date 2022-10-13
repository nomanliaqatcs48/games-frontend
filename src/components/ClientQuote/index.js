import React from "react";
import { Container, Box, Typography } from "@mui/material";
import QuoteOne from "../../Assets/images/quote-one.svg";
import QuoteTwo from "../../Assets/images/quote-two.svg";
import QuoteRightImage from "../../Assets/images/FAQ-Left.svg";

import "../ClientQuote/index.scss";

const ClientQuote = () => {
    return (
        <>
            <div className="clientquote-wrapper">
                <img loading="lazy" className="quoteRightImage" src={QuoteRightImage} alt="" />
                <Container>
                    <Box className="client-head">
                        <Typography variant="h2">What do our clients say about us?</Typography>
                    </Box>
                    <Box className="clientquote-content">
                        <Box className="quote-mark">
                            <img loading="lazy" src={QuoteOne} alt="" />
                        </Box>
                        <Box className="client-para">
                            <Typography variant="h6">"InvoChat stands out in terms of user-friendliness and exceptional features."</Typography>
                        </Box>
                        <Box className="client-para">
                            <Typography variant="h6">"Collaboration and transparency are two important things in the software development sector and InvoChat does not disappoint."</Typography>
                        </Box>
                        <Box className="client-para">
                            <Typography variant="h6">"We saw a visible 30% increase in team productivity."</Typography>
                        </Box>
                        <Box className="quote-mark">
                            <img loading="lazy" src={QuoteTwo} alt="" />
                        </Box>
                    </Box>
                </Container>
            </div>
        </>
    );
};

export default ClientQuote;
