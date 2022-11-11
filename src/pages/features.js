// Libraries
import React from 'react';
import Collaboration from '../components/Collaboration';
import Layout from '../baseStructure/Layout';
import Seo  from "../components/common/SEO";

const content = [
    {
        metaTitle: 'Invochat Features - Create collaborative workspace',
        metaDescription: 'Invochat helps businesses establish collaboration via instant messaging, file sharing, video/audio calls, voice messages, screening and whatnot.'
    },
];

const Features = () => {

    return (
        <Layout>
            <Seo title={content[0].metaTitle} description={content[0].metaDescription} tag='index' pageUrl='features/'/>
            <Collaboration />
        </Layout>
    );
}

export default Features;