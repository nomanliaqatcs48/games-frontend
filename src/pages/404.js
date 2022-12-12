import React from 'react'
import Layout from "../baseStructure/Layout";
import Error from '../components/404'
import Seo from "../components/common/SEO";

const thank = () => {
  const content = [
    {
      metaTitle: "Page Not Found - Invochat",
      metaDescription:
        "Invochat error 404 status code indicates that the origing server did not find the target source, OR the page you're looking for doesn't exist.",
    },
  ];

  return (
    <Layout>
      <Seo
        title={content[0].metaTitle}
        description={content[0].metaDescription}
        tag="index" pageUrl="404/"
      />
        <Error/>
    </Layout>
  )
}

export default thank