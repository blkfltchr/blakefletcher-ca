module.exports = {
    siteMetadata: {
      title: 'Blake Fletcher',
      description: 'Hi! I\'m Blake Fletcher.'
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-image`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/src/pages`
          }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`
          }
        }
      ]
  }