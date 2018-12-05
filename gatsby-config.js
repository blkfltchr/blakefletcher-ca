module.exports = {
    siteMetadata: {
      title: 'Blake Fletcher',
      description: 'Hi! I\'m Blake Fletcher.'
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/src/pages`
          }
        }
      ]
  }