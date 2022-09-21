import React from "react"
import { Box, Typography, Container } from "@mui/material"
import Consumer1 from "../../images/consumer1.svg"
import Consumer2 from "../../images/consumer2.svg"
import Consumer3 from "../../images/consumer3.svg"
import Left from "../../images/leftArrow.svg"
import Right from "../../images/rightArrow.svg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../home/Consumer.scss'


function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <Box 
    className={`${className} NextConsume`}
      onClick={onClick}
      sx={{
        '&::before':{
          display:'none'
        }
      }} 
      style={{ ...style, display: "block", top:'150px' }}
      >
      <img src={Right} alt="" style={{...style, width:'80px'}}/>
    </Box>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <Box 
    className={`${className} PrevConsume`}
      sx={{
        '&::before':{
          display:'none'
        }
      }} 
      onClick={onClick} 
      style={{ ...style, display: "block", top:'150px', left:'-100px' }}>
      <img src={Left} alt="" style={{...style, width:'80px'}}/>
    </Box>
  )
}

const consumers = [
  {
    image: Consumer1,
    title: 'Ross Taylor',
    review: '“The InvoCom team is highly receptive to feedback in times of need.”'
  },
  {
    image: Consumer3,
    title: 'Shane Watson',
    review: '“InvoCom enhanced our lead generation, qualification, and nurturing initiatives by 37%.”'
  },
  {
    image: Consumer1,
    title: 'Bairstow',
    review: '“A very pleasant and user-friendly user interface with a handful of meaningful features.”'
  },
  {
    image: Consumer2,
    title: 'Joe Root',
    review: '“The analytics feature stood out for us as we could stay updated with the trends and pending chats.”'
  },
]

export default function ConsumerSlider() {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
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
    ]
  }

  return (
    <Container className="consumer-slider-container">
      <Slider {...settings}>
        {
          consumers.map((contents)=>(
            <>
          {/* Slide Starts */}
          <Box className="consumer-slide-wrapper">
            <Box className="consumer-slide-image">
              <img src={contents.image} alt="" />
            </Box>
            <Box className="consumer-slide-content">
              <Typography variant="h4">
                {contents.title}
              </Typography>
              <Typography variant="h6">
                {contents.review}
              </Typography>
            </Box>
          </Box>
          {/* Slide Ends */}
        </>
          ))
        }
      </Slider>
    </Container>
  )
}
