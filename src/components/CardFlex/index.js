import React from "react";
import { Container } from "@mui/material";
import CardImageLeft from "../../Assets/images/price-G1.svg";
import CardImageRight from "../../Assets/images/card-right.svg";
import "../CardFlex/index.scss";
import CardFlexPosition from "../CardFlexPosition";

const CardFlex = () => {
    return (
        <>
            <div className="card-position-images">
                <img loading="lazy" className="LeftImage" src={CardImageLeft} alt="" />
                <Container>
                    <CardFlexPosition />
                </Container>
                <img loading="lazy" className="RightImage" src={CardImageRight} alt="" />
            </div>
        </>
    );
};

export default CardFlex;
