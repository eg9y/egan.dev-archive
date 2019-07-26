let analytics = {}

if (process.env.CONTEXT == "production") {
  analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.TRACKING_ID,
      head: true,
    },
  }
}

let plugins = [
  "gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  `gatsby-transformer-remark`,
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Makefolio",
      short_name: "Makefolio",
      start_url: "/",
      background_color: "#2980b9",
      theme_color: "#2980b9",
      display: "standalone",
      orientation: "portrait",
    },
  },
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-XXXXXXXX-X",
      // Setting this parameter is optional (requried for some countries such as Germany)
      anonymize: true,
    },
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },
]

if (Object.keys(analytics).length) {
  plugins = [...plugins, analytics]
}

module.exports = plugins
