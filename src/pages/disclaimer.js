import React from 'react'
import Layout from '../baseStructure/Layout';
import Disclaimer from '../components/Disclaimer'
import Seo  from "../components/common/SEO";

const disclaimer = () => {
  const content = [
    {
        metaTitle: "Disclaimer - Invochat",
        metaDescription: "Invochat offers information and services that are provided free of charge, we will not be liable for any loss or damage of any nature."
    },
];
  return (
    <Layout>
      <Seo title={content[0].metaTitle} description={content[0].metaDescription} tag='index' pageUrl='disclaimer/'/>
        <Disclaimer/>
    </Layout>
  )
}

export default disclaimer