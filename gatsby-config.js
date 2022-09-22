module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
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
      resolve: "gatsby-source-strapi",
      options: {
      apiURL: "https://st-backend-invochat.invo.zone/",
      // add access token
      accessToken: "f23a59cfe04dda3ac4029c3a6a66e5f248ab44de72c5dcb85c560092a26aa667ea779fb583a7747d443d1b6de203de3a4a89b29b3a1c0d2ef6918518fba7978edbaee6c59245527b468cd143246c85720cc38e3a6895b615c1fe5f4dad5e1c413f53ea3cddc295489c90ec16e714324fc00fd9c5521e45b93abed4d4a3e9298a",
      collectionTypes:
      [ "blog" ],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        type:"text/javascript",
        src:'https://widget.invocom.io/widget.js',
        crossorigin: '*',
        charset:"UTF-8",
        async:"true",
        onLoad: `injectWidget({ APP_ID: '981be528-4cf4-488a-bbbe-fef208d5621f', position: 'right', APP_URL: 'https://invocom.io', API_BASE_URL: 'https://api.invocom.io/api/v1', })`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

