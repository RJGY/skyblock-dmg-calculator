module.exports = {
  siteMetadata: {
    title: `Skyblock Damage Calculator`,
    description: `This application calculates the amount of damage your character does, and how to optimise your talismans to deal more damage.`,
    author: `Reese Gunardi`,
    image: "/preview-image.jpg", // Path to your image you placed in the 'static' folder
    url: "https://skyblock-dmg-calculator.vercel.app", // No trailing slash allowed!
    titleTemplate: "Skyblock Damage Calculator | %s",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/diamond-sword.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
