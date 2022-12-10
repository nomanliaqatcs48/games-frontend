import React from 'react'
import Layout from '../baseStructure/Layout';
import Privacy from '../components/PrivacyPolicy'
import Seo  from "../components/common/SEO";

const privacyPolicy = () => {
  const content = [
    {
        metaTitle: "Privacy Policy - Invochat",
        metaDescription: "The information collected and recorded by InvoChat can be used as per the policy. However, the privacy policy only applies to online activities. "
    },
];
  return (
    <Layout>
      <Seo title={content[0].metaTitle} description={content[0].metaDescription} tag='index' pageUrl='privacy-policy/'/>
        <Privacy/>
    </Layout>
  )
}

export default privacyPolicy