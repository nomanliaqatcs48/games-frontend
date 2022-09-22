import React from 'react'
import { Box, Grid, Typography, Button,CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BlogImage from "../../Assets/images/blog_img1.svg";
import BlogImageOne from "../../Assets/images/blog_card1.svg";
import BlogImageTwo from "../../Assets/images/blog_card2.svg";
import BlogImageThree from "../../Assets/images/blog_card3.svg";
import BlogBg from "../../Assets/images/blog_bg.svg";
import { Container } from '@mui/system';
import "../../components/Blog/Blog.scss";


const cards = [
    {
        imageName: BlogImageThree,
        cardHeading: "How To Effectively Use InvoChat Collaborative Tools",
        cardParagraph: "Now is the time to switch from a traditional communication platform to a swift, and seamless network. Enabling you to build a connected and flexible",
        cardBtnText: "View more",
    },
    {
        imageName: BlogImageTwo,
        cardHeading: "A Guide to InvoChat Digital WorkSpace!",
        cardParagraph: "As we are well aware, when COVID-19 grasped the world it crippled the infrastructure and halted its operating system. From there, a seismic shift began",
        cardBtnText: "View more",
    },
    {
        imageName: BlogImageOne,
        cardHeading: "InvoChat: Guaranteeing Reliable, Secure Communication and Collaboration",
        cardParagraph: "Communicate online all across your organization in a secure and flexible environment! InvoChat believes in the notion that every communication matters, therefore, providing you with",
        cardBtnText: "View more",
    },
];

const Blog = () => {
  return (
      <Box className="blog" sx={{ pt: 8 }}>
          <Container>
              <Box>
                  <Typography variant="h2" sx={{ textAlign: "center" }}>
                      Our Blog Division
                  </Typography>
                  <Typography variant="h3" sx={{ textAlign: "center", pt: 1.5 }}>
                      You’ll love it!
                  </Typography>
              </Box>
              <Grid container sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" }, pt:{xs:4,md:6} }}>
                  <Grid item xs={12} md={6} sx={{pt:{xs:4,md:0}}}>
                      <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                          <img src={BlogImage} alt="picture_of_individuals" />
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <Box sx={{ pl: { xs: 0,md:4, lg: 8 } }}>
                          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                              <Typography variant="h4" sx={{ textAlign: { xs: "center", md: "left" } }}>
                                  Set Your Collaborative Workspace And Initiate Mapping Your Business!
                              </Typography>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                              <Typography variant="h5" sx={{ textAlign: { xs: "center", md: "left" }, py: 2 }}>
                                  Digital transformation has become the table stakes in recent times and makes business processes a lot easier than the labor exertion we expected previously. Find
                              </Typography>
                          </Box>
                          <Box sx={{ pt: { xs: 2, lg: 3 }, display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                              <Button className="blog_btn" sx={{ pl: 0 }}>
                                  View more
                              </Button>
                          </Box>
                      </Box>
                  </Grid>
              </Grid>
              <Grid container spacing={3} sx={{ pt: 5 }}>
                  {cards.map((val) => (
                      <Grid item xs={12} md={4}>
                          <Card className="card" sx={{ boxShadow: "none" }}>
                              <CardActionArea>
                                  <CardMedia component="img" image={val.imageName} />
                                  <CardContent sx={{ pl: 0 }} className="card_body">
                                      <Typography sx={{ py: 1 }} gutterBottom variant="h6">
                                          {val.cardHeading}
                                      </Typography>
                                      <Typography variant="h1">{val.cardParagraph}</Typography>
                                      <Button className="card_btn" sx={{ pl: 0 }}>
                                          {val.cardBtnText}
                                      </Button>
                                  </CardContent>
                              </CardActionArea>
                          </Card>
                      </Grid>
                  ))}
              </Grid>
          </Container>
          <Box className="blog_bg">
              <img src={BlogBg} alt="random_circle_like_image" />
          </Box>
      </Box>
  );
}

export default Blog
