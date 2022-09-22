import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import Arrow from "../../Assets/images/PriceArrow.svg";
import backImage from "../../Assets/images/price-G1.svg";
import "../../styles/common/PriceBox.scss";

const boxContent = [
    {
        title: "Free",
        subTitle: "Best for professional",
        priceUnit: "$",
        price: "0",
        duration: "per / month",
        buttonText: "Get Started",
        listHead: "Includes",
        listImage: { Arrow },
        listItems: {
            itemOne: "Monthly Active Users",
            itemTwo: "Custom Bot",
            itemThree: "Robust Analytics",
            itemFour: "Ticketing system",
        },
    },
];

function PriceBox(props) {
    return (
        <>
            <Box className="price-Box-Main-Div">
                <Box className="pirce-Box-Content">
                    {/* Title and Subtitle */}
                    <Box className="boxHead">
                        <Typography variant="h1">{props.title}</Typography>
                        <Typography variant="span">{props.subtitle}</Typography>
                    </Box>

                    {/* Pricing per month*/}
                    <Box className="pricePerMonth">
                        <Typography variant="h1">$</Typography>
                        <Typography variant="h2">{props.price}</Typography>
                        <Typography variant="span">per / month</Typography>
                    </Box>
                    {/* Button -> Get Started */}
                    <Box className="getStarted-btn">
                        <Button className="btn">{props.buttonText}</Button>
                    </Box>
                    {/* Features List */}
                    <Box className="features">
                        <Typography variant="h1">Includes</Typography>
                        <Box className="list">
                            <img src={Arrow} alt="" />
                            <Typography variant="span">{boxContent.map((contents) => contents.listItems.itemOne)}</Typography>
                        </Box>
                        <Box className="list">
                            <img src={Arrow} alt="" />
                            <Typography variant="span">{boxContent.map((contents) => contents.listItems.itemTwo)}</Typography>
                        </Box>
                        <Box className="list">
                            <img src={Arrow} alt="" />
                            <Typography variant="span">{boxContent.map((contents) => contents.listItems.itemThree)}</Typography>
                        </Box>
                        <Box className="list">
                            <img src={Arrow} alt="" />
                            <Typography variant="span">{boxContent.map((contents) => contents.listItems.itemFour)}</Typography>
                        </Box>
                    </Box>
                </Box>
                {/* See all features */}
                <Box className="seeAll">
                    <Typography variant="h5">View all</Typography>
                </Box>
            </Box>
        </>
    );
}

export default PriceBox;