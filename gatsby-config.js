module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Raleway`,
                        file: `https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500;600;700;800&display=swap`,
                    },
                ],
            },
        },
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
        {
            resolve: "gatsby-plugin-load-script",
            options: {
                type: "text/javascript",
                src: "https://widget.invocom.io/widget.js",
                crossorigin: "*",
                charset: "UTF-8",
                async: "true",
                onLoad: `injectWidget({ APP_ID: '981be528-4cf4-488a-bbbe-fef208d5621f', position: 'right', APP_URL: 'https://invocom.io', API_BASE_URL: 'https://api.invocom.io/api/v1', })`,
            },
        },
        `gatsby-plugin-offline`,
    ],
};
