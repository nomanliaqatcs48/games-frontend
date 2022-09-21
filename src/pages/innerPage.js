// import React from "react";
// import { Box, Container, Typography } from "@mui/material";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
// import Layout from "../components/base-structure/Layout";
// import "../styles/InnerPage.scss";
// import { Link, graphql } from "gatsby";
// export default function innerPage({data}) {

//   const record = data.strapiBlog;
//   return (
//     <Layout>
//       <Container>
//           <>
//             <Box className="blog-head">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="blog-info">
//               <Box className="info-content">
//                 <PersonOutlineIcon className="info-icon"
//                 />
//                 <Typography variant="span">By Admin InvoCom</Typography>
//               </Box>
//               <Box className="info-content">
//                 <CalendarMonthIcon className="info-icon"
//                 />
//                 <Typography variant="span">{record?.createdAt}</Typography>
//               </Box>
//               <Box className="info-content">
//                 <ChatBubbleOutlineOutlinedIcon className="info-icon"
//                 />
//                 <Typography variant="span"></Typography>
//               </Box>
//             </Box>
//             <Box className="blog-image">
//               <img src alt="" />
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//               <br />
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box>
//             <Box className="blog-image">
//               <img src alt="" />
//             </Box>
//             <Box className="endorse">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="chatbots">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="AI-chatbots">
//               <Typography variant="span"></Typography>
//             </Box>
//             <Box className="blog-image">
//               <img src alt="" />
//             </Box>
//             <Box className="rapid">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//               <br />
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box>
//             <Box className="rapid">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//               <br />
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box>
//             <Box className="rapid">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box>
//             <Box className="rapid">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box>
//             <Box className="blog-image">
//               <img src alt="" />
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box>
//             <Box className="rapid">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box>
//             <Box className="rapid">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box>
//             <Box className="rapid">
//               <Typography variant="h1"></Typography>
//             </Box>
//             <Box className="blog-content">
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//               <br />
//               <div>
//                 <Typography variant="span"></Typography>
//               </div>
//             </Box> 
//             <Box className="backLink">
//               <Link to="/blog">
//                 <KeyboardBackspaceOutlinedIcon className="backlink-icon" sx={{ fill: "red", }}/>
//                 <Typography variant="span"></Typography>
//               </Link>
//             </Box>
//             {/* <Comments/> */}
//           </>
//         {/* ))} */}
//       </Container>
//     </Layout>
//   );
// }

// export const query = graphql`
//   query MyQuerytwo {
//     allStrapiBlog {
//       nodes {
//         Slug
//         Content
//         Title
//         id
//         Image {
//           url
//         }
//         createdAt
//         check {
//           data {
//             check
//           }
//         }
//       }
//     }
//   }
// `;
