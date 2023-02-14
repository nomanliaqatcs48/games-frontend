import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
// import favicon from "../../images/favicon.svg";
import { useStaticQuery, graphql } from "gatsby";
import { siteMetadata } from "../../../gatsby-config";

const Seo = ({ description, lang, meta, title, blogId, tag, pageUrl }) => {
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
              alternativeText
            }
            createdAt
            check {
              data {
                check
              }
            }
            metaTitle
            metaKeywords
            metaDescription
            Tags
            Add_Canonical_Link
          }
        }
      }
    `
  );

  /* Filtering the data from the query to get the data for the specific blog. */
  const GlobalSeo = data?.allStrapiBlog?.nodes;
  const results = GlobalSeo.filter((element) => element.id === blogId);
  const image = `https://invozone.com/static/fdff9a8231f428161146a1d36f03e5de/collaborative_intelligence_c7fcee57a2.jpg` //results[0] ? results[0].Image[0].url : "";

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title || results[0].metaTitle}
      link={[
        {
          rel: `canonical`,
          href:
            pageUrl == "blogs"
              ? results[0].Add_Canonical_Link
              : siteMetadata.siteUrl + pageUrl,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: description || results[0].metaDescription,
        },
        {
          name: `robots`,
          content: "index, follow",
        },
        {
          name: `keywords`,
          content: results[0] ? results[0].metaKeywords : "",
        },
        {
          property: `og:title`,
          content: title || results[0].metaTitle,
        },
        {
          property: `og:description`,
          content: description || results[0].metaDescription,
        },
        {
          property: `og:url`,
          content:
            pageUrl == "blogs"
              ? results[0].Add_Canonical_Link
              : siteMetadata.siteUrl + pageUrl,
        },
        {
          property: `og:type`,
          content: "website",
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:alt`,
          content: results[0] ? results[0]?.Image[0]?.alternativeText : "",
        },
        {
          property: `tag`,
          content: tag || results[0].Tags,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title || results[0].metaTitle,
        },
        {
          name: `twitter:description`,
          content: description || results[0].metaDescription,
        },
        {
          name: `twitter:url`,
          content:
            pageUrl == "blogs"
              ? results[0].Add_Canonical_Link
              : siteMetadata.siteUrl + pageUrl,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:creator`,
          content: `@invozone`,
        },
        {
          name: `og:locale`,
          content: "en-us",
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: "og:image:width",
          content: 1200,
        },
        {
          property: "og:image:height",
          content: 600,
        },
        {
          name: `twitter:image:alt`,
          content: title,
        },
        {
          name: `twitter:site`,
          content: `@invozone`,
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
