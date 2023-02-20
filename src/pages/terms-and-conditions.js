import React from 'react';
import Layout from '../baseStructure/Layout';
import TermCondition from '../components/TermCondition';
import Seo  from "../components/common/SEO";

const content = [
    {
        metaTitle: "Terms & Conditions - Invochat",
        metaDescription: "Invochat terms & conditions include a privacy policy, security, API terms, and how they apply to you. You're an authorized user of this workspace."
    },
];
const SignUp = () => {

    return (
        <Layout>
            <Seo title={content[0].metaTitle} description={content[0].metaDescription} tag='index' pageUrl='terms-and-conditions/'/>
            <TermCondition />
        </Layout>
    );
}

export default SignUp;