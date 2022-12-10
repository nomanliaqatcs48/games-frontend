import React from "react";
import ThankYou from "../components/ThankYou";
import Layout from "../baseStructure/Layout";
import Seo from "../components/common/SEO";
import {Helmet} from 'react-helmet'

const thank = () => {
  const content = [
    {
      metaTitle: "Thank You - Invochat",
      metaDescription:
        "We have received your request! Thanks for joining Invochat. You'll soon hear from us meanwhile explore more information on our webiste and social media.",
    },
  ];
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Seo
        title={content[0].metaTitle}
        description={content[0].metaDescription}
        tag="index"
        pageUrl="thank-you/"
      />
      <ThankYou />
    </Layout>
  );
};

export default thank;
