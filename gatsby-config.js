module.exports = {
    siteMetadata: {
        title: `InvoChat`,
        description: `Streamline in-house & remote teams with collaboration tool`,
        author: `InvoChat`,
        siteUrl: `https://invochat.io/`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-advanced-sitemap`,
            options: {
              query: `
                {
                    allStrapiBlog {
                        edges {
                            node {
                                slug: Slug
                                id
                                createdAt
                                Title
                                check {
                                    data {
                                    check
                                    }
                                }
                            }
                        }
                    }
                    allSitePage {
                        edges {
                            node {
                                slug: path
                                id
                            }
                        } 
                    }
                }`,
              output: `/sitemap-index.xml`,
              mapping: {
                /* Filtering out the blog pages from the sitemap. */
                allSitePage: {
                    sitemap: `page`,
                    serializer: (edges) => {
                        const siteMapEntries = [];
                        edges.forEach((edge) => {
                            if(!edge.node.slug.includes('/blog/')){
                                siteMapEntries.push(edge);
                            }
                        });
                        return siteMapEntries;
                    }
                },
                allStrapiBlog: {
                    sitemap: `blogs`,
                    serializer: (edges) => {
                        const siteMapEntries = [];
                        edges.forEach((edge) => {
                            edge.node.slug = '/blog/' + edge.node.slug;
                            siteMapEntries.push(edge);
                        });
                        return siteMapEntries;
                    },
                },
              },
              exclude: [
                `/dev-404-page`,
                `/404`,
                `/404.html`,
              ],
              createLinkInHead: true,
              addUncaughtPages: true,
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-no-sourcemaps`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/Assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/Assets/images/Invochat-Favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-source-strapi",
            options: {
                // apiURL: "https://st-backend-invochat.invo.zone/",
                apiURL: "http://127.0.0.1:1337",
                // add access token
                accessToken:
                    "d1cc1ce431884a3dac5d00b915b6afd701ae9e89aa3b7999a254a63fe00512874a34f1330015fb599678496a026abf07b5ddbc716284497c6e6d701a77a5aed5d0dacd7d82eb9f14f25e3855c21914996d9205da08f1ceebd2736e8661f23aa96be1b55328e6a87831b79b5b99d50fcc2b3854cda4715c36cc00d33769068fc2",
                collectionTypes: ["blog"],
                queryLimit: 1000,
            },
        },

        `gatsby-plugin-offline`,
    ],
};
