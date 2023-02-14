import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import { siteMetadata } from "../../../gatsby-config";

const Seo = ({ description, lang, meta, title, tag, pageUrl, data }) => {
  const image = `https://invozone.com/static/fdff9a8231f428161146a1d36f03e5de/collaborative_intelligence_c7fcee57a2.jpg`;
  const pageLink =
    pageUrl == "blogs"
      ? data?.Add_Canonical_Link
      : siteMetadata?.siteUrl + pageUrl;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      link={[
        {
          rel: `canonical`,
          href: pageLink,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `robots`,
          content: "index, follow",
        },
        {
          name: `keywords`,
          content: data ? data?.metaKeywords : "",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:url`,
          content: pageLink,
        },
        {
          property: `og:type`,
          content: "website",
        },
        {
          property: "og:image:alt",
          content: title,
        },
        {
          property: `tag`,
          content: tag || data?.Tags,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:url`,
          content: pageLink,
        },
        {
          name: "twitter:image",
          content: image,
        },
        {
          name: `twitter:creator`,
          content: `@invochat`,
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
          content: `@invochat`,
        },
      ]
        .concat(
          image
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
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
