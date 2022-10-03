import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import SimpleSetup from "../components/SimpleSetup/SimpleSetup";
import SuperEasy from "../components/SuperEasy/SuperEasy";
import Feedback from "../components/FeedBack/FeedBack";
import GetStarted from "../components/common/GetStarted";
import Blog from "../components/Blog/Blog";
import FrequentQuestions from "../components/common/FrequentQuestions";
import FreeTrial from "../components/FreeTrial/FreeTrial";
import Plateforms from "../components/Plateforms/Plateforms";
import { Link, graphql } from "gatsby";

const LandingPage = ({ data }) => {
    return (
        <div>
            <HeroSection />
            <SimpleSetup />
            <Plateforms />
            <SuperEasy />
            <GetStarted />
            <Feedback />
            {data?.allStrapiBlog?.nodes?.map((blog, index) => {
                            return <Blog blog={blog} key={index} customClass={index === 0 ? true : false} />;
            })}
            <FrequentQuestions />
            <FreeTrial />
        </div>
    );
};

export default LandingPage;

export const query = graphql`
    query MyQuerys {
        allStrapiBlog {
            nodes {
                Slug
                Content
                Title
                id
                Image {
                    url
                }
                createdAt
                check {
                    data {
                        check
                    }
                }
            }
        }
    }
`;
