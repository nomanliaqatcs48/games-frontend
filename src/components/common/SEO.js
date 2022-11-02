import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import favicon from "../../images/favicon.svg";
import { useStaticQuery, graphql } from 'gatsby';
import { siteMetadata } from "../../../gatsby-config";

const Seo = ( {description, lang, meta, title, blogId, tag, pageUrl} ) => {
   const data = useStaticQuery(
      graphql`
      query {
        allStrapiBlog {
          nodes {
            Slug
            Content
            Title
            id
            Image {
              url
            }
            createdAt
            check {
              data {
                check
              }
            }
            metaTitle
            metaDescription
            Tags
          }
        }
      }
    `
   );
   
   /* Filtering the data from the query to get the data for the specific blog. */
   const GlobalSeo = data?.allStrapiBlog?.nodes;
   const results = GlobalSeo.filter(element => element.id === blogId);

   return (
      <Helmet
         htmlAttributes={{lang}}
         title={title || results[0].metaTitle}
         link={[
            {
               rel: `canonical`,
               href: pageUrl == "blogs" ? siteMetadata.siteUrl +'blog/' + results[0].Slug : siteMetadata.siteUrl + pageUrl,
            },
         ]}
         meta={[
            {
               name: `description`,
               content: description || results[0].metaDescription,
            },
            {
               property: `og:title`,
               content: title || results[0].metaTitle,
            },
            {
               property: `og:description`,
               content: description || results[0].metaTitle,
            },
            {
               property: `tag`,
               content: tag || results[0].Tags,
            },
         ].concat(meta)}
      >
         
         {/* <link rel="shortcut icon" href={GlobalSeo?.metaImage.localFile.publicURL} /> */}
      </Helmet>
   );
};

Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
};

Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
};

export default Seo;