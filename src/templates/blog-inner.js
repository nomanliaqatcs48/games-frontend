import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "../baseStructure/Layout";
import InnerBlogMainImg from "../Assets/images/inner_blog_main.svg";
import InnerBlogMainImg2 from "../Assets/images/inner_blog_main_2.svg";
import InnerBlogMiddleImg from "../Assets/images/Inner_blog_img2.svg";
import InnerBlogMiddleImg2 from "../Assets/images/middle_img2.svg";
import "../styles/common/InnerBlog.scss";
import { graphql } from "gatsby";

const blogInnerContent = [
    {
        id: 1,
        title: "Set Your Collaborative Workspace And Initiate Mapping Your Business!",
        mainImg: InnerBlogMainImg2,
        description1:
            "Digital transformation has become the table stakes in recent times and makes business processes a lot easier than the labor exertion we expected previously. Find tools of collaboration and productivity that can make your tasks more fitting and convenient in a dense environment.",
        description2:
            "You can keep your team in the loop with google meet integration. Be it brainstorming ideas, solving problems, or time-sensitive issues, catch-up on recent news, or conveying daily tasks. Manage all the excruciating assignments via one single dashboard.",
        description3:
            "Moreover, these revolutionary and transformative tools provide a wide array of technological advancement that is necessary nowadays to get the job done. True leadership’s essence is cultivating relationships with coworkers, teammates, and outsource vendors. Facilitate them with direct reports, information, organizational data, files, and much more. It can help to develop trouble-free access, working relationships, and mutual trust.",

        Image: InnerBlogMainImg,

        description4:
            "If you’re entrusted with overseeing global brands, teams, and the virtual workforce, InvoChat is your best friend and guide. You can organize all the tasks, stack up the data, conduct important business meetings, check up on progress, and assign tasks. Once you get the knack, it has the capability to enhance the conventional work experience as we know, ensuring collaborative experiences, developing personal relationships, and delivering standout projects. .",
        description5: "How many times have you experienced insignificant or major barriers while working? It can become overwhelming sometimes, but not anymore.",

        title2: "Handle all the first-hand challenges like a pro as InvoChat gives you the best from the rest: !",
        list: (
            <ul>
                <li>Lead the team via interconnected groups, and chat rooms</li>
                <li style={{ paddingTop: "20px" }}>Setup the individual direct chat and bring down communication barriers</li>
                <li style={{ paddingTop: "20px" }}>Import and export data anytime anywhere</li>
                <li style={{ paddingTop: "20px" }}>Keep your work streamlined with a shared channel</li>
            </ul>
        ),
        description6: "See! That’s the power and popularity of technology, it’s right in front of you. It’s just a matter of time finding and implementing the right solution for your people and organization.",
        title3: "Process Mapping",
        description7:
            "Process mapping is often represented in a visual draft that helps a business streamline the workflow ahead. Basically, it is a sequence of events that allows leaders and project managers to bring the teams and project managers together – assist them by splitting the tasks and driving towards a productive result.",
        description8:
            "Mapping the business as you scale provides your organization with a vision and a sense of accountability. With process mapping, you can actually ponder upon the minute details that could create a huge impact on the business. That’s why InvoChat came up to serve the same purpose so make the most out of it.",
        Image2: InnerBlogMiddleImg,
        description9:
            "Make a process chart flow when you’re working in a virtual workspace. It can help provide process documentation, plus you can see visual projects from beginning to end and share details visually that coworkers can easily understand.",
        description10:
            "InvoChat believes in a systematic approach to dividing the process into steps and encourages interconnected plethora, which directly facilitates more meaningful interactions. That’s why we came up with this amazing idea through which you can easily share files of any type into InvoChat — JPEG, PNG, PDF, MP3, Word, Excel, PowerPoint, and more.",
        title4: "Highlight problems and solutions",
        description11:
            "Furthermore, Give your team a frame of reference or a focal point, if you will – highlight potential problems and solutions, and render down all the queries and strategic questions. It doesn’t matter where you are working, nowadays it’s all about the flexibility and latitude that results in productivity. Attention to detail gives you the utmost leverage to deliver better products and services to clients. Lastly, provide documentation compliance and audit.",
        title5: "Business process",
        Image3: InnerBlogMiddleImg2,
        description12:
            "You’ve set up the desired workspace – it’s time to think forward. Make a Draft of the business process mapping list down all the details. For instance, what needs to be done, who needs to be involved, when it will take place, and how the tasks will move towards completion. You will get an insight into why they matter, how the things are going to unfold, how they fit in the assigned role, and eventually enable them to reach the goal.",
        title6: "Outline the boundaries",
        description13:
            "Business mapping is a long process but it’s totally worth every effort. Provide your team a vision, process, shared knowledge, and tools. Moreover, outline the boundaries, roles, and responsibilities.If you think business mapping is only good for a business that produces tangible deliverables, think again. In truth, it sets the entire course of action for the organization so that you don’t have to worry about it later.",
        description14:
            "Regardless of what kind of business you handle whether Medical, IT, Food, eCommerce, project construction, or marketing. Mapping will help you to work smart with a shared sense of organizational vision. To learn more, get your hands on the most centralized platform and keep your team in the loop.",
        formTitle: "Leave a Reply",
        formDesc: "Your email address will not be published. Required fields are marked *",
        textareaTitle: "Comment *",
        inputName: "Name",
        inputEmail: "Email",
        inputWebsite: "Website",
        checkTitle: "Save my name, email, and website in this browser for the next time I comment.",
        formBtn: "Post Comment",
    },
];
const InnerBlog = ({ data }) => {
    const record = data.strapiBlog;
    return (
        <Layout>
            <Box className="innerBlog">
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box className="innerBlog_content">
                                {blogInnerContent.map((val) => (
                                    <React.Fragment key={val.id}>
                                        <Box>
                                            <Typography variant="h2">{record?.Title}</Typography>
                                        </Box>
                                        <Box>
                                            <img loading="lazy" src={record.Image[0].url} alt="Blog_content_image" />
                                        </Box>
                                        <Box>
                                            <Typography variant="h3" dangerouslySetInnerHTML={{ __html: record.check.data.check }}></Typography>
                                        </Box>
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    );
};

export default InnerBlog;

export const query = graphql`
    query singleBlog($Slug: String) {
        strapiBlog(Slug: { eq: $Slug }) {
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
