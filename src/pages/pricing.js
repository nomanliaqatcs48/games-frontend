//Libraries
import React from "react";
import Layout from '../baseStructure/Layout';
import GetStarted from "../components/common/GetStarted";
import FrequentQuestions from "../components/common/FrequentQuestions";
import Seo  from "../components/common/SEO";

const content = [
    {
        metaTitle: 'Pricing - Everything you need to know about Subscription Plan',
        metaDescription: 'Invochat offers 3 pricing plans from basic to enterprise business plans. We also offer a 14-day FREE trial. Subscription prices may vary depending on features.'
    },
];
const Pricing = () => {
  return (
    <Layout>
      <Seo title={content[0].metaTitle} description={content[0].metaDescription} tag='index' pageUrl='pricing/'/>
      <GetStarted />
      <FrequentQuestions/>
    </Layout>
  );
};

export default Pricing;
