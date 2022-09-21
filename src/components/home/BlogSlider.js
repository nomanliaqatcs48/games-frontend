import React from 'react'
import { Box, Container } from "@mui/material"
import Left from "../../images/leftArrow.svg"
import Right from "../../images/rightArrow.svg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BlogBox from '../common/BlogBox';
import '../../styles/Blog.scss';


function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <Box 
        className={`${className} NextBlog`} 
        onClick={onClick}
        sx={{
          '&::before':{
            display:'none'
          }
        }} 
        style={{ ...style, display: "block", top:'150px' }}>
        <img src={Right} alt="" style={{...style, width:'80px'}}/>
      </Box>
    )
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <Box 
      className={`${className} PrevBlog`} 
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

export default function BlogSlider({blogs}) {
 
    var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:  true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />,
        responsive: [
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
    <Container className='blog-slider-container'>
      <Slider {...settings}>
          {blogs?.map((blog, index) => {
            return (
            <BlogBox blog={blog}/>
            );
            })}
        </Slider>
    </Container>
  )
}
