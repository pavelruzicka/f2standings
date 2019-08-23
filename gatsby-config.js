module.exports = {
  siteMetadata: {
    title: `Formula 2 Standings`,
    description: `The number one destination for FIA Formula 2 championship standings, race reports, and team overviews.`,
    author: `Pavel Růžička and Christian Ruigrok`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1f4c86`,
        theme_color: `#1f4c86`,
        display: `minimal-ui`,
        icon: `static/images/f2-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-7605517671694120`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146348826-1",
      },
    },
  ],
}
