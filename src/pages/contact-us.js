// Libraries
import React from 'react';
import Layout from '../baseStructure/Layout';
import ContactDetail from '../components/ContactDetail';
import Seo  from "../components/common/SEO";

const content = [
    {
        metaTitle: "Talk to an expert - Invochat Contact",
        metaDescription: "Want to know about services? Report a bug? Give suggestions? We would love to hear it from your side. You can email us or schedule a call with representative."
    },
];
const ContactUs = () => {

    return (
        <Layout>
            <Seo title={content[0].metaTitle} description={content[0].metaDescription} tag='index' pageUrl='contact-us/'/>
            <ContactDetail />
        </Layout>
    );
}

export default ContactUs;