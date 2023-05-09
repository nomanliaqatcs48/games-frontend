import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Container } from "@mui/material";
import Comma from "../../Assets/images/commas.svg";
import ClientA from "../../Assets/images/Client-One.jpeg";
import ClientB from "../../Assets/images/Client-Two.jpeg";
import ClientC from "../../Assets/images/Client-Three.jpg";
import ClientD from "../../Assets/images/Client-Four.svg";
import "../../components/FeedBack/FeedBack.scss";

const content = [
  {
    name: "William Murray",
    designation: "Product Manager",
    feedback:
      "InvoChat enables us to have all our conversations in one place. Plus, we can seamlessly share files through secure attachments.",
    image: [ClientA],
  },
  {
    name: "Marina Korgay",
    designation: "Product Growth Manager",
    feedback:
      "InvoChat’s simple and easy to use interface and intuitive features make our work more productive and enjoyable.",
    image: [ClientB],
  },
  {
    name: "Ryan McGaha",
    designation: "Product Manager",
    feedback:
      "InvoChat enables us to have all our conversations in one place. Plus, we can seamlessly share files through secure attachments.",
    image: [ClientC],
  },
  {
    name: "Dane A.",
    designation: "Content Writer",
    feedback:
      "With InvoChat, we are now more focused than ever before. All the features are put together in a simple and easy to use way.",
    image: [ClientD],
  },
];

const Feedback = () => {
  const settings = {
    dots: false,
    centerMode: false,
    centerPadding: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Box className="feedback" sx={{ pt: 8 }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          What people think about us
        </Typography>
        <Box sx={{ pt: 6 }}>
          <Box className="margin">
            <Slider {...settings} className="slide">
              {content.map((data) => {
                return (
                  <Box className="feedback_card">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "space-between",
                          sm: "space-around",
                        },
                        px: { xs: 4, sm: 0 },
                      }}
                    >
                      <Box className="client_Image" sx={{ display: "flex" }}>
                        <img
                          loading="lazy"
                          src={data.image}
                          alt="picture_of_client"
                        />
                        <Box sx={{ pl: 2 }}>
                          <Typography className="client_name">
                            {data.name}
                          </Typography>
                          <Typography className="client_about">
                            {data.designation}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ pt: 0.5 }}>
                        <img
                          loading="lazy"
                          src={Comma}
                          alt="picture_of_comma"
                        />
                      </Box>
                    </Box>
                    <Typography className="feedback_Content">
                      {data.feedback}
                    </Typography>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Feedback;
