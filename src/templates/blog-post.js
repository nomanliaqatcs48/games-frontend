import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Layout from "../components/base-structure/Layout";
import Cover from "../images/InnerBlog.svg";
import Image3 from "../images/InvoCom-BlogInner3.svg";
import Image2 from "../images/InvoCom-BlogInner2.svg";
import Image1 from "../images/InvoCom-BlogInner1.svg";
import "../styles/InnerPage.scss";
import { Link, graphql } from "gatsby";
// import Comments from "../components/home/Comments";

const blogcontent = [
  {
    title: "Use InvoCom Chatbot To Maximize Your Results",
    author: "By admin-invocom",
    date: "June 16, 2022",
    comments: "No Comments",
    coverImage: Cover,
    digital:
      "The digital transformation has created new opportunities and demands in the market followed by client expectations and requests. The creation of instant messaging, messenger, chat apps, social networks, and integrated communication platforms changed the fabric of customer interaction in daily lives. Business needs to be available 24/7 delivering outstanding, fast response and omnipresent customer service. In this regard, automated chat optimization is a lifesaver and problem solver tool.",
    customer:
      "To let your customer know that you care – the best way to Offer an incredible customer experience is the quickest and easiest way to stand out. We have gathered best practices, resources and knowledge to assimilate more out of InvoCom. Chatbots are automated tools personalized to give customers an efficient way to communicate with companies. As per the statistics, 60% of millennials prefer to have a swift automated response to buy the products.",
    graph: Image3,
    Endorse: "Endorse Excellence And Stand Out From The Crowd",
    chatbots: "Chatbots Can Optimize Customer Relationship Management",
    AI_chatbots:
      "AI chatbots are becoming increasingly popular because of the agility, and productivity it provides to both the consumers and businesses. Therefore, it has the capability to optimize customer relationship management from every aspect:",
    flowChart: Image2,
    rapid: "Rapid Engagement And Pragmatic Approach",
    real_time:
      "A customer service chatbot is a real-time problem solver and proactively answers the queries of customers. The response can be instant, ensuring an established communication flow that can be configured to guide the user. Just in case, the bot would not be able to answer the problem, the entire chat can be passed to a live agent while interacting with the customer.",
    approach:
      "AI bots have a very pragmatic approach overall, you don’t have to wait around the whole day just to ask some questions about the product. Queries can be addressed within seconds which also increase customer satisfaction. The result is more engaged and a happy customer.",
    time_response: "Reduce The Time Response And Overall Handling Time",
    communication:
      "If an AI bot handles the communication, a company can save time and of course budget. Besides, an organizational framework requires communication and engagement to work in accordance with customers demands. Nonetheless, it depends upon the time and resources, so investing in chatbots can reduce the workload and help businesses scale their operations.",
    handling:
      "The overall handling time can be reduced and a large number of customers can be attended at a time.",
    reduce_cost: "Reduce Cost For Business",
    brand:
      "Imagine opening a newbie brand/company, it costs you a fortune right? With our moderate pocket friendly chat widget you can never get out of budget. Infact, it costs a very minimal amount and in return you get an automated, full fledged tool to optimize your sale, enhance the performance, and meet the ends of their customer needs along the journey.",
    stand_out: "Stand Out From The Crowd",
    customize:
      "There is another way to level up which is to customize a widget. To make your widget stand from the rest, change the default colors so it jumps off the page. Choose something bright and colorful to attract more visitors to start a chat. After all, they can’t start a conversation if they don’t know you’re there. Also, you can add an instant knowledge base, for instance, when a customer opens the website, the AI chatbot popup the write up like “Welcome message” OR “What are you looking for?” OR “Hope you’re having a good day, make it better with our products”.",
    personImage: Image1,
    efficient:
      "An efficient strike is to shoot for complementary colors that go with your branding while making sure the widget doesn’t get hidden in the rest of the page.",
    work_smarter: "Work Smarter",
    precious:
      "Work smarter, not harder! Save your precious time by saving instant greeting messages and templates. Apart from receiving the built-in knowledge, you can also save templates showcasing your brand and company. Add any messages that you think can help your business. the more the merrier!",
    room: "Make Room For Communication",
    leads:
      "Assign leads with InvoCom smart dashboard, you can very easily organize the stack of queries by assigning it to an AI bot or Live agent. You can mark additional tickets like unsolved tickets, unassigned, recently updated, pending, recently solved, suspended, and deleted information.",
    errors: "Avoiding Errors",
    productivity:
      "There is no doubt that chatbots can maintain a high level of productivity and interaction with a high volume of customers at the same time. It absolutely does not require any additional charges, plus, the enigma of human fatigue and pressurized work can also rule out. Chatbots can run 24 hours a day, seven days a week, including holidays and unannounced off days. Unlike humans, they don’t experience rigidity and stress, that’s why they can maintain high levels of productivity.",
    experience:
      "Chatbots are more than just an answer, it is a complete experience when it comes to pushing your product. Sometimes, when customers have different types of queries and they might not get satisfied with an equally same answer. Therefore, implement a chatbot with personalized features to do the needful.",
    back_link: "AI Chatbot Infrastructure has taken the industry by storm!",
  },
];

export default function innerPage({data}) {
    const record = data.strapiBlog;
  return (
    <Layout>
      <Container>
        {/* {blogcontent.map((contents) => ( */}
          <>
            <Box className="blog-head">
              <Typography variant="h1"></Typography>
            </Box>
            <Box className="blog-info">
              <Box className="info-content">
                <PersonOutlineIcon className="info-icon"
                />
                <Typography variant="span">By Admin InvoCom</Typography>
              </Box>
              <Box className="info-content">
                <CalendarMonthIcon className="info-icon"
                />
                <Typography variant="span">{record.createdAt.substring(0,10)}</Typography>
              </Box>
              <Box className="info-content">
                <ChatBubbleOutlineOutlinedIcon className="info-icon"
                />
                <Typography variant="span">No Comments</Typography>
              </Box>
            </Box>
            <Box className="blog-image">
            <img  src={record.Image[0].url} />
            </Box>
            {/* {record.check.data.check} */}
            <Box className="blog-content" dangerouslySetInnerHTML={{__html: record.check.data.check}}/>
            <Box className="backLink">
              <Link to="/blog">
                <KeyboardBackspaceOutlinedIcon className="backlink-icon" sx={{ fill: "red", }}/>
                <Typography variant="span"></Typography>
              </Link>
            </Box>
            {/* <Comments/> */}
          </>
        {/* ))} */}
      </Container>
    </Layout>
  );
}

export const query = graphql`
query singleBlog($Slug: String) {
    strapiBlog(Slug: {eq: $Slug}) {
      id
      Title
      Content
      Slug
      Image {
        url
      }
      check {
        data {
          check
        }
      }
      createdAt
    }
  }
  
`;
