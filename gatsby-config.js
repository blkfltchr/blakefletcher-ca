module.exports = {
    siteMetadata: {
      title: 'Blake Fletcher',
      description: 'Hi! I\'m Blake Fletcher.'
    },
    plugins: [
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-image`,
        `gatsby-plugin-react-helmet`,
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
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'posts',
            path: `${__dirname}/src/posts`
          }
        },
      ]
  }
