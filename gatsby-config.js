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
        path: `${__dirname}/src/images`,
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
      resolve: "gatsby-source-strapi",
      options: {
      apiURL: "https://st-backend-invocom.invo.zone/",
      accessToken: "d4b0ea5623cb21bd7b62f01e4787b379854c7666b014a9f56d9d85e249f867cfb7cde77aee2d4d927dbea6cc12c60d85f46f4acfc32f319fc38721d609ed1c4c7d29bf1c96c175a555a7d75dade5f930ee64c66d23849a639d363df11ec05642732bdb2124dbefc4f6a067a1b4929c55270ffeb76e138de1014fe460d2665784",
      collectionTypes:
      // [ "post", "category", "author", "blog" ],
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

