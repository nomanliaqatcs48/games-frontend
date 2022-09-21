import React from "react"
import { Box, Typography, Container } from "@mui/material"
import Swift from "../../images/swift.svg"
import NLP from '../../images/NLP.svg';
import ChatFlow from '../../images/chatFlow.svg';
import Analytic from '../../images/analytic.svg';
import Performance from '../../images/perform.svg';
import Left from "../../images/leftArrow.svg"
import Right from "../../images/rightArrow.svg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../home/InituativeServices.scss';

const services =[
  {
    image: Swift,
    title: 'Swift Integration',
    description: 'Incorporate, and build the chat widget on your website in just a few simple clicks. Our data harnessing technology will push your data to CRM, marketing automation, and all other internal platforms.'
  },
  {
    image: NLP,
    title: 'NLP Support',
    description: 'Leveraging AI operations and natural language processing (NLP). The infrastructure is imbued with Sentiment analysis tech i.e. to detect human emotions while in conversation.'
  },
  {
    image: ChatFlow,
    title: 'AI Intent-Base Chat Flows',
    description: 'InvoCom is fully capable of conducting smart bot conversations effortlessly, handles all bulk FAQs, and Live Chats, gathers leads and entertains inquiries.'
  },
  {
    image: Analytic,
    title: 'Smart ChatBot Analytics',
    description: 'The platform automatically assigns conversations and tickets to available agents. To ensure time management, you can manage all customer-centric activities under the InvoCom umbrella.'
  },
  {
    image: Performance,
    title: 'Real-Time Performance Analytics',
    description: 'The quantitative real-time analysis provides early detection of performance. Reports are exported in CSV and readily available.'
  },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <Box
    className={`${className} NextArrow`}
      onClick={onClick}
      sx={{
        "&::before": {
          display: "none",
        },
      }}
      style={{ ...style, display: "block", top: "150px" }}
    >
      <img src={Right} alt="" style={{...style, width:'80px'}}/>
    </Box>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <Box
      className={`${className} PrevArrow`}
      sx={{
        "&::before": {
          display: "none",
        },
      }}
      onClick={onClick}
      style={{ ...style, display: "block", top: "150px", left: "-85px" }}
    >
      <img src={Left} alt="" style={{...style, width:'80px'}}/>
    </Box>
  )
}

export default function InitiateSlider() {
  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 925,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ],
  }
  return (
    <Container className="slider-container">
      <Slider {...settings}>
        {
          services.map((contents)=>(
            <div>
          {/* Slider Box */}
          <Box className="initService-box">
            <img className="swiftImg" src={contents.image} alt=""/>
            <Typography variant="h4">
              {contents.title}
            </Typography>
            <Typography variant="h6">
              {contents.description}
            </Typography>
          </Box>
        </div>
          ))
        }
      </Slider>
    </Container>
  )
}
