import React from "react";
import Header from "../components/common/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import SimpleSetup from "../components/SimpleSetup/SimpleSetup";
import Footer from "../components/common/Footer";
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
            {/* <Header /> */}
            <HeroSection />
            <SimpleSetup />
            <Plateforms />
            <SuperEasy />
            <GetStarted />
            <Feedback />
            <Blog />
            <FrequentQuestions />
            <FreeTrial />
            {/* <Footer /> */}
        </div>
    );
};

export default LandingPage;