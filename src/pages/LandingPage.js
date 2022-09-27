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
const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <SimpleSetup />
            <Plateforms />
            <SuperEasy />
            <GetStarted />
            <Feedback />
            <Blog />
            <FrequentQuestions />
            <FreeTrial />
        </div>
    );
};

export default LandingPage;